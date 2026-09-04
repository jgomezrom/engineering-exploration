"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { projectileSimulationTranslations } from "../data/translations/projectileSimulation";
import SimulatorSlider from "./SimulatorSlider";

const G = 10; // abstract gravity constant, not a real m/s² claim
const SPEED_SCALE = 4; // power slider (1-10) -> launch speed (4-40 abstract units)
const PX_PER_UNIT = 2;
const LAUNCH_X = 40;
const GROUND_Y = 170;

export default function ProjectileSimulator() {
  const { language } = useLanguage();
  const t = projectileSimulationTranslations[language];
  const [angleDeg, setAngleDeg] = useState(45);
  const [power, setPower] = useState(7);

  const angle = (angleDeg * Math.PI) / 180;
  const v = power * SPEED_SCALE;
  const vx = v * Math.cos(angle);
  const vy = v * Math.sin(angle);
  const timeOfFlight = (2 * vy) / G;
  const range = (v * v * Math.sin(2 * angle)) / G;
  const maxHeight = (vy * vy) / (2 * G);

  const samples = 36;
  const points: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const time = (i / samples) * timeOfFlight;
    const x = LAUNCH_X + vx * time * PX_PER_UNIT;
    const y = GROUND_Y - (vy * time - 0.5 * G * time * time) * PX_PER_UNIT;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const pathD = points.join(" ");
  const landingX = LAUNCH_X + range * PX_PER_UNIT;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="10" y1={GROUND_Y} x2="390" y2={GROUND_Y} stroke="currentColor" strokeWidth="1.5" className="text-neutral-900/30 dark:text-white/30" />
          <path d="M10 165l6 5-6 5M16 170h-6" stroke="currentColor" strokeWidth="1" opacity="0.4" />

          <path d={pathD} fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx={LAUNCH_X} cy={GROUND_Y} r="4" className="fill-primary" />
          <circle cx={landingX} cy={GROUND_Y} r="4" className="fill-accent" />
          <line x1={landingX} y1={GROUND_Y} x2={landingX} y2={GROUND_Y + 8} stroke="currentColor" className="text-accent" strokeWidth="1.5" />

          <line x1={LAUNCH_X} y1={GROUND_Y - maxHeight * PX_PER_UNIT} x2={LAUNCH_X - 14} y2={GROUND_Y - maxHeight * PX_PER_UNIT} stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          <span>{t.rangeReadout(Math.round(range))}</span>
          <span>{t.heightReadout(Math.round(maxHeight))}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.launchAngle} value={angleDeg} onChange={setAngleDeg} min={5} max={85} step={5} unit="°" />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider label={t.launchPower} value={power} onChange={setPower} min={1} max={10} color="text-accent" />
        </div>
      </div>
    </div>
  );
}
