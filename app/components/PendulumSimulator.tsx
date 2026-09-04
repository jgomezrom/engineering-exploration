"use client";

import { useLanguage } from "../context/LanguageContext";
import { pendulumSimulationTranslations } from "../data/translations/pendulumSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";

const GRAVITY = 9.8;
const PIVOT_X = 200;
const PIVOT_Y = 30;
const PIXELS_PER_METER = 90;
const BOB_RADIUS = 14;

export default function PendulumSimulator() {
  const { language } = useLanguage();
  const t = pendulumSimulationTranslations[language];
  const [length, setLength] = useShareableState("len", 1, parseNumber);
  const [angle, setAngle] = useShareableState("angle", 20, parseNumber);

  const period = 2 * Math.PI * Math.sqrt(length / GRAVITY);
  const stringPx = 30 + length * PIXELS_PER_METER;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 280" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <path d="M150 30h100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-900 dark:text-white" />

          <line
            x1={PIVOT_X}
            y1={PIVOT_Y}
            x2={PIVOT_X}
            y2={PIVOT_Y + stringPx}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 4"
            className="text-neutral-900/15 dark:text-white/15"
          />

          <g transform={`rotate(${angle} ${PIVOT_X} ${PIVOT_Y})`}>
            <line
              x1={PIVOT_X}
              y1={PIVOT_Y}
              x2={PIVOT_X}
              y2={PIVOT_Y + stringPx}
              className="stroke-neutral-900 dark:stroke-white"
              strokeWidth="2"
            />
            <circle cx={PIVOT_X} cy={PIVOT_Y + stringPx} r={BOB_RADIUS} className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
          </g>

          <circle cx={PIVOT_X} cy={PIVOT_Y} r="4" className="fill-neutral-900 dark:fill-white" />
        </svg>

        <p className="mt-2 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.periodReadout(period.toFixed(2))}
        </p>
      </div>

      <div className="mt-6 border border-primary/30 p-5">
        <div className="space-y-4">
          <SimulatorSlider label={t.length} value={length} onChange={setLength} min={0.3} max={2} step={0.1} unit="m" />
          <SimulatorSlider label={t.releaseAngle} value={angle} onChange={setAngle} min={5} max={45} step={1} unit="°" />
        </div>
      </div>
    </div>
  );
}
