"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import TrussCanvas, { movementExaggeration, type CanvasLabels, type CanvasTest } from "./TrussCanvas";
import { useLanguage } from "../context/LanguageContext";
import { trussGameTranslations } from "../data/translations/trussGame";
import { SECTIONS, SECTION_ORDER, TRUSS_LEVELS, type DesignMember, type GridPoint, type SectionId } from "../data/trussLevels";
import { useTrussProgress } from "../hooks/useTrussProgress";
import { eulerBucklingLoad, memberMass, yieldCapacity } from "../lib/trussAnalysis";
import {
  checkMember,
  designMass,
  designMemberLength,
  efficientLimit,
  referenceMass,
  roundMass,
  samePoint,
  sameSpan,
  sanitiseDesign,
  testDesign,
  tierFor,
  type DesignOutcome,
  type MemberCheck,
} from "../lib/trussGame";

type Tool = SectionId | "erase";

// A level is either being built, being loaded (the animation), or showing the
// result of its last test. Any edit drops it back to "build", so a result on
// screen always belongs to the design on screen.
type Phase =
  | { kind: "build" }
  | { kind: "testing"; outcome: DesignOutcome; loadFraction: number }
  | { kind: "done"; outcome: DesignOutcome };

type Notice = Exclude<MemberCheck, "ok"> | "empty" | null;

// Member lengths the data table quotes squeeze limits for: one grid square
// along, one diagonally, and a one-by-two diagonal.
const SPEC_LENGTHS_M = [2, Math.hypot(2, 2), Math.hypot(2, 4)];

const STROKE_SAMPLE: Record<SectionId, number> = { rod: 2.25, tube: 4.5, heavyTube: 7 };

const formatKn = (value: number) => `${value < 10 ? value.toFixed(1) : Math.round(value)} kN`;
const formatKg = (value: number) => `${value.toFixed(1)} kg`;

/** The fraction of the load a result is drawn at once the test has finished. */
function finalFraction(outcome: DesignOutcome): number {
  if (!outcome.result.stable) return 0;
  return Math.min(1, outcome.result.loadFactor);
}

export default function TrussGame() {
  const { language } = useLanguage();
  const t = trussGameTranslations[language];
  const { best, designs, saveDesign, recordPass } = useTrussProgress();

  const [levelIndex, setLevelIndex] = useState(0);
  const [tool, setTool] = useState<Tool>("rod");
  const [selected, setSelected] = useState<GridPoint | null>(null);
  const [hovered, setHovered] = useState<GridPoint | null>(null);
  const [highlightedMember, setHighlightedMember] = useState<number | null>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const [history, setHistory] = useState<DesignMember[][]>([]);
  const [phase, setPhase] = useState<Phase>({ kind: "build" });
  const [hintOpen, setHintOpen] = useState(false);

  const level = TRUSS_LEVELS[levelIndex];
  const levelText = t.levels[level.id];
  const storedDesign = designs[level.id];
  // Whatever was saved is checked against this level's rules before it is used.
  const design = useMemo(() => sanitiseDesign(level, storedDesign), [level, storedDesign]);

  const reference = referenceMass(level);
  const mass = designMass(design);
  const bestMass = best[level.id];

  // The load animation runs on requestAnimationFrame; this remembers the
  // pending frame so it can be cancelled if the player leaves mid-test.
  const frame = useRef<number | null>(null);
  const stopAnimation = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);
  useEffect(() => stopAnimation, [stopAnimation]);

  const busy = phase.kind === "testing";

  function resetInteraction() {
    setSelected(null);
    setHovered(null);
    setHighlightedMember(null);
    setNotice(null);
  }

  function changeDesign(next: DesignMember[]) {
    setHistory((previous) => [...previous.slice(-49), design]);
    saveDesign(level.id, next);
    setPhase({ kind: "build" });
    setHighlightedMember(null);
    setNotice(null);
  }

  function goToLevel(index: number) {
    stopAnimation();
    setLevelIndex(index);
    setHistory([]);
    setPhase({ kind: "build" });
    setHintOpen(false);
    resetInteraction();
  }

  function handleJointClick(point: GridPoint) {
    if (busy || tool === "erase") return;
    if (selected === null) {
      setSelected(point);
      setNotice(null);
      if (phase.kind === "done") setPhase({ kind: "build" });
      return;
    }
    if (samePoint(selected, point)) {
      setSelected(null);
      return;
    }
    const check = checkMember(level, selected, point);
    if (check !== "ok") {
      setNotice(check);
      setSelected(null);
      return;
    }
    const existing = design.findIndex((member) => sameSpan(member, selected, point));
    if (existing >= 0) {
      // Joining two joints that already share a member swaps its type.
      if (design[existing].section !== tool) {
        changeDesign(design.map((member, index) => (index === existing ? { ...member, section: tool } : member)));
      }
    } else {
      changeDesign([...design, { a: selected, b: point, section: tool }]);
    }
    setSelected(null);
  }

  function handleMemberClick(index: number) {
    if (busy) return;
    setSelected(null);
    if (tool === "erase") {
      changeDesign(design.filter((_, i) => i !== index));
    } else if (design[index].section !== tool) {
      changeDesign(design.map((member, i) => (i === index ? { ...member, section: tool } : member)));
    }
  }

  function undo() {
    if (busy || history.length === 0) return;
    saveDesign(level.id, history[history.length - 1]);
    setHistory(history.slice(0, -1));
    setPhase({ kind: "build" });
    resetInteraction();
  }

  function clearAll() {
    if (busy || design.length === 0) return;
    changeDesign([]);
    setSelected(null);
  }

  function loadReference() {
    if (busy) return;
    changeDesign(level.reference);
    setSelected(null);
  }

  function finishTest(outcome: DesignOutcome) {
    setPhase({ kind: "done", outcome });
    if (outcome.holds) recordPass(level.id, roundMass(outcome.mass));
  }

  function runTest() {
    if (busy) return;
    setSelected(null);
    setHovered(null);
    if (design.length === 0) {
      setNotice("empty");
      return;
    }
    setNotice(null);
    const outcome = testDesign(level, design);
    const target = finalFraction(outcome);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Nothing to animate for a mechanism, and nothing should animate for
    // someone who has asked their device for less motion.
    if (!outcome.result.stable || reduceMotion) {
      finishTest(outcome);
      return;
    }

    // Ramp the load up from zero. A design that fails early gets a short
    // ramp; one that holds gets the full run.
    const duration = 500 + 1300 * target;
    const start = performance.now();
    setPhase({ kind: "testing", outcome, loadFraction: 0 });
    const step = (now: number) => {
      const elapsed = Math.min(1, (now - start) / duration);
      if (elapsed >= 1) {
        frame.current = null;
        finishTest(outcome);
        return;
      }
      setPhase({ kind: "testing", outcome, loadFraction: target * elapsed });
      frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  }

  // ── What the drawing should show ─────────────────────────────────
  const outcome = phase.kind === "build" ? null : phase.outcome;
  const solution = outcome?.result.stable ? outcome.result : null;
  let canvasTest: CanvasTest | null = null;
  if (outcome && !outcome.result.stable) {
    canvasTest = { kind: "mechanism", looseJoints: outcome.result.looseJoints };
  } else if (outcome && solution) {
    const end = finalFraction(outcome);
    canvasTest = {
      kind: "loaded",
      solution,
      loadFraction: phase.kind === "testing" ? phase.loadFraction : end,
      finalFraction: end,
      failedMember: phase.kind === "done" && !outcome.holds ? solution.criticalMember : -1,
    };
  }

  const sectionDetail = (id: SectionId) => {
    const section = SECTIONS[id];
    return section.wall === null ? t.solidShape(section.outerDiameter) : t.tubeShape(section.outerDiameter, section.wall);
  };

  const canvasLabels: CanvasLabels = {
    canvas: t.canvasLabel(levelText.name),
    joint: t.jointLabel,
    pin: t.jointPin,
    roller: t.jointRoller,
    load: t.jointLoad,
    selected: t.jointSelected,
    member: (index) => t.memberLabel(index + 1, t.sections[design[index].section], designMemberLength(design[index]).toFixed(1)),
  };

  // ── Status line ──────────────────────────────────────────────────
  let status: string;
  let statusTone = "text-neutral-600 dark:text-neutral-400";
  if (phase.kind === "testing") {
    status = t.statusApplying(Math.round(phase.loadFraction * 100));
  } else if (phase.kind === "done" && !phase.outcome.result.stable) {
    status = t.statusMechanism;
    statusTone = "text-red-700 dark:text-red-400";
  } else if (phase.kind === "done" && solution && !phase.outcome.holds) {
    const critical = solution.members[solution.criticalMember];
    const how = critical.force > 0 ? t.failedYieldedTension : critical.bucklingGoverns ? t.failedBuckled : t.failedYieldedCompression;
    status = t.statusFailed(Math.floor(solution.loadFactor * 100), solution.criticalMember + 1, how);
    statusTone = "text-red-700 dark:text-red-400";
  } else if (phase.kind === "done" && solution) {
    status = t.statusHolds(Math.min(100, Math.round(solution.maxUtilisation * 100)));
    statusTone = "text-primary";
  } else if (notice === "empty") {
    status = t.statusEmpty;
    statusTone = "text-accent";
  } else if (notice) {
    status = t.memberProblems[notice];
    statusTone = "text-accent";
  } else if (tool === "erase") {
    status = t.statusErase;
  } else if (selected) {
    status = t.statusPickSecond;
  } else if (design.length > 0) {
    status = t.statusReady(design.length);
  } else {
    status = t.statusStart;
  }

  // ── Result figures ───────────────────────────────────────────────
  const passedNow = phase.kind === "done" && phase.outcome.holds;
  const tier = passedNow ? tierFor(mass, reference) : null;
  const resultText =
    tier === null ? t.notPassed : tier === "reference" && roundMass(mass) < reference ? t.tierBeatsReference : t.tiers[tier];

  const largestMovementMm = solution
    ? solution.displacements.reduce((max, d) => Math.max(max, Math.hypot(d.dx, d.dy)), 0) * 1000
    : 0;
  const balancePercent = solution ? solution.equilibriumError * 100 : 0;

  const readouts = [
    { label: t.massLabel, value: formatKg(mass) },
    { label: t.referenceLabel, value: formatKg(reference) },
    { label: t.efficientLabel, value: `${efficientLimit(reference)} kg` },
    { label: t.bestLabel, value: bestMass === undefined ? "—" : formatKg(bestMass) },
  ];
  const testReadouts =
    phase.kind === "done" && solution
      ? [
          { label: t.resultLabel, value: resultText },
          {
            label: t.spareLabel,
            value: Number.isFinite(solution.loadFactor) ? t.spareValue(Math.floor(solution.loadFactor * 100)) : t.spareNoForce,
          },
          { label: t.movementLabel, value: `${largestMovementMm.toFixed(1)} mm` },
          { label: t.balanceLabel, value: balancePercent < 0.001 ? "<0.001%" : `${balancePercent.toFixed(3)}%` },
        ]
      : [];

  const memberRows =
    phase.kind === "done" && solution
      ? solution.members
          .map((member, index) => ({ member, index }))
          .sort((a, b) => b.member.utilisation - a.member.utilisation)
      : [];

  const toolButton = (active: boolean) =>
    `flex min-h-[4.25rem] flex-col items-start justify-center border px-3 py-2 text-left transition-colors ${
      active
        ? "border-primary bg-primary/5"
        : "border-neutral-900/15 hover:border-primary/50 dark:border-white/15"
    }`;
  const textButton =
    "font-mono text-xs font-medium uppercase tracking-widest text-neutral-600 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-neutral-600 dark:text-neutral-400";
  const smallLabel = "font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-400";

  return (
    <div>
      {/* ── Level picker ───────────────────────────────────────────── */}
      <nav aria-label={t.levelsLabel} className="flex flex-wrap gap-2">
        {TRUSS_LEVELS.map((item, index) => {
          const passed = best[item.id] !== undefined;
          const active = index === levelIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goToLevel(index)}
              aria-current={active ? "step" : undefined}
              className={`border px-3 py-2 text-left text-sm transition-colors ${
                active
                  ? "border-primary bg-primary/5 text-neutral-900 dark:text-white"
                  : "border-neutral-900/15 text-neutral-600 hover:border-primary/50 dark:border-white/15 dark:text-neutral-400"
              }`}
            >
              <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>{" "}
              <span className="font-medium">{t.levels[item.id].name}</span>
              {passed && (
                <span className="ml-2 font-mono text-xs text-primary">
                  <span aria-hidden="true">✓</span>
                  <span className="sr-only">{t.levelPassed}</span>
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Brief ──────────────────────────────────────────────────── */}
      <div className="mt-6">
        <p className={smallLabel}>{t.levelOf(levelIndex + 1, TRUSS_LEVELS.length)}</p>
        <h2 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-white">{levelText.name}</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{levelText.brief}</p>
        <button type="button" onClick={() => setHintOpen(!hintOpen)} aria-expanded={hintOpen} className="mt-2 text-sm font-medium text-primary hover:underline">
          {hintOpen ? t.hideHint : t.showHint}
        </button>
        {hintOpen && (
          <p className="mt-2 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {levelText.hint}
          </p>
        )}
      </div>

      {/* ── Tools ──────────────────────────────────────────────────── */}
      <div className="mt-6">
        <p className={smallLabel}>{t.toolsLabel}</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {SECTION_ORDER.map((id) => (
            <button key={id} type="button" onClick={() => { setTool(id); setNotice(null); }} aria-pressed={tool === id} className={toolButton(tool === id)}>
              <span className="flex w-full items-center justify-between gap-2">
                <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.sections[id]}</span>
                <svg viewBox="0 0 28 10" aria-hidden="true" className="h-2.5 w-7 shrink-0">
                  <line x1="2" y1="5" x2="26" y2="5" stroke="currentColor" strokeWidth={STROKE_SAMPLE[id]} strokeLinecap="round" />
                </svg>
              </span>
              <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{sectionDetail(id)}</span>
              <span className="font-mono text-[11px] text-primary">{t.kgPerMetre(memberMass(SECTIONS[id], 1).toFixed(1))}</span>
            </button>
          ))}
          <button type="button" onClick={() => { setTool("erase"); setSelected(null); setNotice(null); }} aria-pressed={tool === "erase"} className={toolButton(tool === "erase")}>
            <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.erase}</span>
            <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{t.eraseDetail}</span>
          </button>
        </div>
      </div>

      {/* ── The bridge ─────────────────────────────────────────────── */}
      <div className="mt-4 border border-neutral-900/10 p-3 dark:border-white/10 sm:p-6">
        <TrussCanvas
          level={level}
          design={design}
          selected={selected}
          hovered={hovered}
          highlightedMember={highlightedMember}
          test={canvasTest}
          interactive={!busy}
          labels={canvasLabels}
          onJointClick={handleJointClick}
          onJointHover={setHovered}
          onMemberClick={handleMemberClick}
        />
        {canvasTest?.kind === "loaded" && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-5 bg-accent" aria-hidden="true" />
              {t.legendTension}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-5 bg-primary" aria-hidden="true" />
              {t.legendCompression}
            </span>
            {canvasTest.failedMember >= 0 && (
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-5 bg-red-600 dark:bg-red-500" aria-hidden="true" />
                {t.legendFailed}
              </span>
            )}
            <span>{t.exaggerated(Math.round(movementExaggeration(canvasTest.solution, canvasTest.finalFraction)))}</span>
          </div>
        )}
      </div>

      <p role="status" aria-live="polite" className={`mt-3 min-h-[2.75rem] text-sm leading-relaxed ${statusTone}`}>
        {status}
      </p>

      {/* ── Actions ────────────────────────────────────────────────── */}
      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button onClick={runTest} disabled={busy}>
          {busy ? t.testing : t.test}
        </Button>
        {passedNow && levelIndex < TRUSS_LEVELS.length - 1 && (
          <Button variant="secondary" onClick={() => goToLevel(levelIndex + 1)}>
            {t.nextLevel}
          </Button>
        )}
        <button type="button" onClick={undo} disabled={busy || history.length === 0} className={textButton}>
          {t.undo}
        </button>
        <button type="button" onClick={clearAll} disabled={busy || design.length === 0} className={textButton}>
          {t.clear}
        </button>
        {bestMass !== undefined && (
          <button type="button" onClick={loadReference} disabled={busy} className={textButton}>
            {t.loadReference}
          </button>
        )}
      </div>

      {/* ── Numbers ────────────────────────────────────────────────── */}
      <dl className="mt-6 grid grid-cols-2 gap-px border border-neutral-900/10 bg-neutral-900/10 sm:grid-cols-4 dark:border-white/10 dark:bg-white/10">
        {[...readouts, ...testReadouts].map((item) => (
          <div key={item.label} className="bg-background p-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{item.label}</dt>
            <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-white">{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.referenceNote}</p>

      {passedNow && (
        <div className="mt-6 border-l-2 border-primary pl-4">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.debriefHeading}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{levelText.debrief}</p>
        </div>
      )}

      {/* ── Member by member ───────────────────────────────────────── */}
      {memberRows.length > 0 && (
        <div className="mt-8">
          <h3 className={smallLabel}>{t.membersHeading}</h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{t.membersNote}</p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-900/15 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                  <th scope="col" className="py-2 pr-3 font-medium">{t.colMember}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t.colType}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t.colLength}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t.colForce}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t.colLimit}</th>
                  <th scope="col" className="py-2 text-right font-medium">{t.colUsed}</th>
                </tr>
              </thead>
              <tbody>
                {memberRows.map(({ member, index }) => {
                  const pulled = member.force > 0;
                  const idle = member.force === 0;
                  const limit = pulled || idle ? member.tensionCapacity : member.compressionCapacity;
                  const limitKind = !pulled && !idle && member.bucklingGoverns ? t.limitBuckling : t.limitYield;
                  const over = member.utilisation > 1 + 1e-9;
                  return (
                    <tr
                      key={index}
                      onMouseEnter={() => setHighlightedMember(index)}
                      onMouseLeave={() => setHighlightedMember(null)}
                      className={`border-b border-neutral-900/10 dark:border-white/10 ${highlightedMember === index ? "bg-primary/5" : ""}`}
                    >
                      <td className="py-2 pr-3 font-mono text-xs text-neutral-900 dark:text-white">{index + 1}</td>
                      <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">{t.sections[design[index].section]}</td>
                      <td className="py-2 pr-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">{member.length.toFixed(1)} m</td>
                      <td className="py-2 pr-3 font-mono text-xs">
                        <span className={idle ? "text-neutral-500 dark:text-neutral-400" : pulled ? "text-accent" : "text-primary"}>
                          {formatKn(Math.abs(member.force))} {idle ? t.idle : pulled ? t.pulled : t.squeezed}
                        </span>
                      </td>
                      <td className="py-2 pr-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                        {formatKn(limit)} · {limitKind}
                      </td>
                      <td className={`py-2 text-right font-mono text-xs font-medium ${over ? "text-red-700 dark:text-red-400" : "text-neutral-900 dark:text-white"}`}>
                        {Math.round(member.utilisation * 100)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Section data ───────────────────────────────────────────── */}
      <div className="mt-8">
        <h3 className={smallLabel}>{t.specHeading}</h3>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-900/15 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                <th scope="col" className="py-2 pr-3 font-medium">{t.specType}</th>
                <th scope="col" className="py-2 pr-3 font-medium">{t.specPull}</th>
                {SPEC_LENGTHS_M.map((length) => (
                  <th key={length} scope="col" className="py-2 pr-3 font-medium">{t.specPush(length.toFixed(1))}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SECTION_ORDER.map((id) => (
                <tr key={id} className="border-b border-neutral-900/10 dark:border-white/10">
                  <th scope="row" className="py-2 pr-3 font-normal text-neutral-900 dark:text-white">{t.sections[id]}</th>
                  <td className="py-2 pr-3 font-mono text-xs text-accent">{formatKn(yieldCapacity(SECTIONS[id]))}</td>
                  {SPEC_LENGTHS_M.map((length) => (
                    <td key={length} className="py-2 pr-3 font-mono text-xs text-primary">
                      {formatKn(Math.min(yieldCapacity(SECTIONS[id]), eulerBucklingLoad(SECTIONS[id], length)))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.specNote}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.storageNote}</p>
      </div>
    </div>
  );
}
