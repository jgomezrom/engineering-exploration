"use client";

import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { beamSimulationTranslations } from "../data/translations/beamSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";
import { analyseSimplySupportedBeam, type BeamStation } from "../lib/beamAnalysis";

const SPAN_M = 10;
const LEFT_X = 40;
const RIGHT_X = 360;
const PX_PER_M = (RIGHT_X - LEFT_X) / SPAN_M;
// The stiffness slider runs 1-10 to stay approachable; each step is this much
// flexural rigidity, so the readout can show the real EI the solver used.
const EI_PER_STEP = 500; // kN·m² per slider step
// Peak deflection is drawn this tall whatever its real size, and the panel
// prints the exaggeration factor — a beam that sagged this visibly would be a
// problem, so the drawing has to say it's been stretched.
const DEFLECTION_DRAW_PX = 26;
const SHEAR_DRAW_PX = 32;
const MOMENT_DRAW_PX = 52;
const BEAM_Y = 86;
const SHEAR_ZERO_Y = 50;
const MOMENT_ZERO_Y = 78;

function scaleX(xMetres: number) {
  return LEFT_X + xMetres * PX_PER_M;
}

/** A filled diagram with its outline, the way shear and moment are drawn by hand. */
function DiagramArea({
  stations,
  value,
  zeroY,
  pxPerUnit,
  tone,
}: {
  stations: BeamStation[];
  value: (station: BeamStation) => number;
  zeroY: number;
  pxPerUnit: number;
  tone: "primary" | "accent";
}) {
  const points = stations.map((s) => `${scaleX(s.x).toFixed(1)},${(zeroY - value(s) * pxPerUnit).toFixed(1)}`);
  const outline = `M${points.join("L")}`;
  const filled = `M${LEFT_X},${zeroY}L${points.join("L")}L${RIGHT_X},${zeroY}Z`;
  return (
    <>
      <path d={filled} className={tone === "accent" ? "fill-accent/12" : "fill-primary/12"} stroke="none" />
      <path
        d={outline}
        fill="none"
        className={tone === "accent" ? "stroke-accent" : "stroke-primary"}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </>
  );
}

export default function BeamSimulator() {
  const { language } = useLanguage();
  const t = beamSimulationTranslations[language];
  const [load, setLoad] = useShareableState("load", 5, parseNumber);
  const [position, setPosition] = useShareableState("pos", 5, parseNumber);
  const [stiffness, setStiffness] = useShareableState("stiff", 5, parseNumber);

  const flexuralRigidity = stiffness * EI_PER_STEP;
  const result = useMemo(
    () => analyseSimplySupportedBeam(SPAN_M, [{ position, magnitude: load }], flexuralRigidity),
    [position, load, flexuralRigidity]
  );

  const { stations, reactions, maxShear, maxMoment, maxDeflection, verification } = result;

  const deflectionPxPerM = maxDeflection.value > 0 ? DEFLECTION_DRAW_PX / maxDeflection.value : 0;
  const exaggeration = Math.round(deflectionPxPerM / PX_PER_M);
  const shearPxPerKn = maxShear > 0 ? SHEAR_DRAW_PX / maxShear : 0;
  const momentPxPerKnm = Math.abs(maxMoment.value) > 0 ? MOMENT_DRAW_PX / Math.abs(maxMoment.value) : 0;

  // Span-to-deflection ratio is how deflection is actually judged on a drawing
  // — "L over something" rather than a raw millimetre count.
  const spanRatio = maxDeflection.value > 0 ? Math.round(SPAN_M / maxDeflection.value) : 0;
  const isWarning = spanRatio > 0 && spanRatio < 250;

  const loadX = scaleX(position);
  const deflectedY = (station: BeamStation) => BEAM_Y + station.deflection * deflectionPxPerM;
  const beamPath = `M${stations.map((s) => `${scaleX(s.x).toFixed(1)},${deflectedY(s).toFixed(1)}`).join("L")}`;
  const loadBeamY = deflectedY(stations.reduce((best, s) => (Math.abs(s.x - position) < Math.abs(best.x - position) ? s : best), stations[0]));

  const formatKn = (value: number) => `${value.toFixed(1)} kN`;
  const formatKnm = (value: number) => `${value.toFixed(1)} kN·m`;
  const formatMm = (value: number) => `${(value * 1000).toFixed(1)} mm`;
  const formatError = (percent: number) => (percent < 0.001 ? "<0.001%" : `${percent.toFixed(3)}%`);

  const readouts = [
    { label: t.reactionLeft, value: formatKn(reactions.left) },
    { label: t.reactionRight, value: formatKn(reactions.right) },
    { label: t.maxShearLabel, value: formatKn(maxShear) },
    { label: t.maxMomentLabel, value: `${formatKnm(Math.abs(maxMoment.value))} · ${t.atPosition(maxMoment.at.toFixed(2))}` },
    { label: t.maxDeflectionLabel, value: `${formatMm(maxDeflection.value)} · ${t.atPosition(maxDeflection.at.toFixed(2))}` },
    { label: t.spanRatioLabel, value: spanRatio > 0 ? `L/${spanRatio}` : "—" },
  ];

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        {/* ── Load and deflected shape ─────────────────────────────── */}
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.loadDiagram}
        </p>
        <svg viewBox="0 0 400 150" className="mx-auto mt-1 w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="20" y1="126" x2="380" y2="126" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-neutral-900/15 dark:text-white/15" />

          {/* Supports: a pin on the left, a roller on the right */}
          <path d={`M${LEFT_X - 12} 126L${LEFT_X} 104L${LEFT_X + 12} 126Z`} className="fill-neutral-100 stroke-neutral-900/40 dark:fill-neutral-900 dark:stroke-white/40" strokeWidth="1.5" />
          <path d={`M${RIGHT_X - 12} 120L${RIGHT_X} 104L${RIGHT_X + 12} 120Z`} className="fill-neutral-100 stroke-neutral-900/40 dark:fill-neutral-900 dark:stroke-white/40" strokeWidth="1.5" />
          <circle cx={RIGHT_X - 6} cy="123" r="3" className="fill-neutral-100 stroke-neutral-900/40 dark:fill-neutral-900 dark:stroke-white/40" strokeWidth="1.2" />
          <circle cx={RIGHT_X + 6} cy="123" r="3" className="fill-neutral-100 stroke-neutral-900/40 dark:fill-neutral-900 dark:stroke-white/40" strokeWidth="1.2" />
          <line x1={LEFT_X - 20} y1="126" x2={LEFT_X + 20} y2="126" stroke="currentColor" strokeWidth="2" />
          <line x1={RIGHT_X - 20} y1="126" x2={RIGHT_X + 20} y2="126" stroke="currentColor" strokeWidth="2" />

          {/* Reaction arrows, pointing up because that's the way a support pushes */}
          <path d={`M${LEFT_X} 104v-14M${LEFT_X - 4} 96l4-6 4 6`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          <path d={`M${RIGHT_X} 104v-14M${RIGHT_X - 4} 96l4-6 4 6`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />

          <line x1={LEFT_X} y1={BEAM_Y} x2={RIGHT_X} y2={BEAM_Y} stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="text-neutral-900/20 dark:text-white/20" />
          <path d={beamPath} fill="none" className={isWarning ? "stroke-accent" : "stroke-primary"} strokeWidth="4" strokeLinecap="round" />

          {/* The load, drawn where it actually sits */}
          <line x1={loadX} y1={loadBeamY - 44} x2={loadX} y2={loadBeamY - 4} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d={`M${loadX - 6} ${loadBeamY - 12}L${loadX} ${loadBeamY - 2}L${loadX + 6} ${loadBeamY - 12}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x={loadX} y={loadBeamY - 50} textAnchor="middle" className="fill-current font-mono text-[10px] font-medium">
            {load} kN
          </text>
          <text x={LEFT_X} y="140" textAnchor="middle" className="fill-current font-mono text-[9px] opacity-60">
            0 m
          </text>
          <text x={RIGHT_X} y="140" textAnchor="middle" className="fill-current font-mono text-[9px] opacity-60">
            {SPAN_M} m
          </text>
        </svg>
        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          {t.exaggerated(exaggeration)}
        </p>

        {/* ── Shear force ──────────────────────────────────────────── */}
        <div className="mt-6 border-t border-neutral-900/10 pt-4 dark:border-white/10">
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.shearDiagram}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.shearPlain}</p>
          <svg viewBox="0 0 400 100" className="mx-auto mt-1 w-full max-w-md" role="img" aria-label={t.shearAriaLabel}>
            <line x1={LEFT_X} y1={SHEAR_ZERO_Y} x2={RIGHT_X} y2={SHEAR_ZERO_Y} stroke="currentColor" strokeWidth="1" className="text-neutral-900/30 dark:text-white/30" />
            <line x1={loadX} y1="8" x2={loadX} y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="text-neutral-900/20 dark:text-white/20" />
            <DiagramArea stations={stations} value={(s) => s.shear} zeroY={SHEAR_ZERO_Y} pxPerUnit={shearPxPerKn} tone="accent" />
            <text x={LEFT_X + 4} y={SHEAR_ZERO_Y - reactions.left * shearPxPerKn - 6} className="fill-current font-mono text-[9px] font-medium">
              +{reactions.left.toFixed(1)}
            </text>
            <text x={RIGHT_X - 4} y={SHEAR_ZERO_Y + reactions.right * shearPxPerKn + 12} textAnchor="end" className="fill-current font-mono text-[9px] font-medium">
              −{reactions.right.toFixed(1)}
            </text>
          </svg>
        </div>

        {/* ── Bending moment ───────────────────────────────────────── */}
        <div className="mt-4 border-t border-neutral-900/10 pt-4 dark:border-white/10">
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.momentDiagram}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.momentPlain}</p>
          <svg viewBox="0 0 400 100" className="mx-auto mt-1 w-full max-w-md" role="img" aria-label={t.momentAriaLabel}>
            <line x1={LEFT_X} y1={MOMENT_ZERO_Y} x2={RIGHT_X} y2={MOMENT_ZERO_Y} stroke="currentColor" strokeWidth="1" className="text-neutral-900/30 dark:text-white/30" />
            <line x1={loadX} y1="8" x2={loadX} y2={MOMENT_ZERO_Y} stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="text-neutral-900/20 dark:text-white/20" />
            <DiagramArea stations={stations} value={(s) => s.moment} zeroY={MOMENT_ZERO_Y} pxPerUnit={momentPxPerKnm} tone="primary" />
            <circle cx={scaleX(maxMoment.at)} cy={MOMENT_ZERO_Y - Math.abs(maxMoment.value) * momentPxPerKnm} r="2.5" className="fill-primary" />
            <text
              x={scaleX(maxMoment.at)}
              y={MOMENT_ZERO_Y - Math.abs(maxMoment.value) * momentPxPerKnm - 8}
              textAnchor="middle"
              className="fill-current font-mono text-[9px] font-medium"
            >
              {Math.abs(maxMoment.value).toFixed(1)} kN·m
            </text>
          </svg>
        </div>

        <p className={`mt-2 text-center font-mono text-xs uppercase tracking-widest ${isWarning ? "text-accent" : "text-neutral-600 dark:text-neutral-400"}`}>
          {isWarning ? t.bendingALot : t.holdingSteady}
        </p>
      </div>

      {/* ── What the solver worked out ─────────────────────────────── */}
      <dl className="mt-6 grid grid-cols-2 gap-px border border-neutral-900/10 bg-neutral-900/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
        {readouts.map((item) => (
          <div key={item.label} className="bg-background p-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{item.label}</dt>
            <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-white">{item.value}</dd>
          </div>
        ))}
      </dl>

      {verification && (
        <p className="mt-3 border-l-2 border-primary/40 pl-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.verification(formatError(verification.momentErrorPercent), formatError(verification.deflectionErrorPercent))}
        </p>
      )}
      <p className="mt-2 pl-4 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.assumptions}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.load} value={load} onChange={setLoad} min={1} max={10} unit=" kN" />
        </div>
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.loadPosition} value={position} onChange={setPosition} min={1} max={9} unit=" m" />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider label={t.stiffness} value={stiffness} onChange={setStiffness} min={1} max={10} color="text-accent" />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            EI = {flexuralRigidity.toLocaleString(language === "es" ? "es" : "en")} kN·m²
          </p>
        </div>
      </div>
    </div>
  );
}
