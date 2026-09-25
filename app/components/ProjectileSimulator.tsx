"use client";

import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { projectileSimulationTranslations } from "../data/translations/projectileSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";
import { simulateProjectile, type Trajectory } from "../lib/projectileMotion";

// The power slider stays 1-10 so the control reads simply; this turns it into
// the launch speed the physics actually uses.
const SPEED_PER_STEP = 5; // m/s per slider step
const BALL_DIAMETER_M = 0.07;
const LAUNCH_X = 40;
const RIGHT_X = 372;
const GROUND_Y = 170;
const TOP_MARGIN = 24;

export default function ProjectileSimulator() {
  const { language } = useLanguage();
  const t = projectileSimulationTranslations[language];
  const [angleDeg, setAngleDeg] = useShareableState("angle", 45, parseNumber);
  const [power, setPower] = useShareableState("power", 7, parseNumber);
  const [massSteps, setMassSteps] = useShareableState("mass", 3, parseNumber);

  const speed = power * SPEED_PER_STEP;
  const mass = massSteps * 0.05;

  const result = useMemo(
    () => simulateProjectile(speed, angleDeg, mass, BALL_DIAMETER_M),
    [speed, angleDeg, mass]
  );
  const { withDrag, vacuum, rangeLostPercent, integratorErrorPercent, closedFormVacuumRange } = result;

  // One scale for both axes, so the arc on screen is the shape it would really
  // fly — a steep launch looks steep instead of being stretched to fill the box.
  const scale = Math.min((RIGHT_X - LAUNCH_X) / vacuum.range, (GROUND_Y - TOP_MARGIN) / vacuum.apex);
  const pathFor = (trajectory: Trajectory) =>
    `M${trajectory.points
      .map((p) => `${(LAUNCH_X + p.x * scale).toFixed(1)},${(GROUND_Y - p.y * scale).toFixed(1)}`)
      .join("L")}`;

  const formatMetres = (value: number) => `${value.toFixed(1)} m`;
  const formatSeconds = (value: number) => `${value.toFixed(2)} s`;
  const formatError = (value: number) => (value < 0.001 ? "<0.001%" : `${value.toFixed(3)}%`);

  const readouts = [
    { label: t.rangeAirLabel, value: formatMetres(withDrag.range) },
    { label: t.rangeVacuumLabel, value: formatMetres(vacuum.range) },
    { label: t.lostToAirLabel, value: `${rangeLostPercent.toFixed(1)}%` },
    { label: t.flightTimeLabel, value: formatSeconds(withDrag.flightTime) },
    { label: t.apexLabel, value: formatMetres(withDrag.apex) },
    { label: t.speedLabel, value: `${speed} m/s` },
  ];

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="10" y1={GROUND_Y} x2="390" y2={GROUND_Y} stroke="currentColor" strokeWidth="1.5" className="text-neutral-900/30 dark:text-white/30" />

          <path d={pathFor(vacuum)} fill="none" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d={pathFor(withDrag)} fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx={LAUNCH_X} cy={GROUND_Y} r="4" className="fill-primary" />

          {/* Where each model says it lands */}
          <line x1={LAUNCH_X + vacuum.range * scale} y1={GROUND_Y - 5} x2={LAUNCH_X + vacuum.range * scale} y2={GROUND_Y + 7} stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeDasharray="2 2" />
          <line x1={LAUNCH_X + withDrag.range * scale} y1={GROUND_Y - 5} x2={LAUNCH_X + withDrag.range * scale} y2={GROUND_Y + 7} stroke="currentColor" strokeWidth="2" className="text-primary" />
          <text x={LAUNCH_X + withDrag.range * scale} y={GROUND_Y + 18} textAnchor="middle" className="fill-current font-mono text-[9px] font-medium">
            {withDrag.range.toFixed(0)} m
          </text>
          <text x={LAUNCH_X + vacuum.range * scale} y={GROUND_Y + 18} textAnchor="middle" className="fill-current font-mono text-[9px] opacity-60">
            {vacuum.range.toFixed(0)} m
          </text>
        </svg>

        <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11px] text-neutral-600 dark:text-neutral-400">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 4" aria-hidden="true" className="h-1 w-5">
              <line x1="0" y1="2" x2="20" y2="2" className="stroke-primary" strokeWidth="3" />
            </svg>
            {t.withAirCurve}
          </span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 4" aria-hidden="true" className="h-1 w-5">
              <line x1="0" y1="2" x2="20" y2="2" className="stroke-accent" strokeWidth="3" strokeDasharray="4 3" />
            </svg>
            {t.vacuumCurve}
          </span>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-px border border-neutral-900/10 bg-neutral-900/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
        {readouts.map((item) => (
          <div key={item.label} className="bg-background p-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{item.label}</dt>
            <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-white">{item.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 border-l-2 border-primary/40 pl-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
        {t.verification(formatError(integratorErrorPercent), closedFormVacuumRange.toFixed(1))}
      </p>
      <p className="mt-2 pl-4 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.assumptions}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.launchAngle} value={angleDeg} onChange={setAngleDeg} min={5} max={85} step={5} unit="°" />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider label={t.launchPower} value={power} onChange={setPower} min={1} max={10} color="text-accent" />
        </div>
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.ballMass} value={massSteps} onChange={setMassSteps} min={1} max={20} />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {mass.toFixed(2)} kg · ⌀ {(BALL_DIAMETER_M * 100).toFixed(0)} cm
          </p>
        </div>
      </div>
    </div>
  );
}
