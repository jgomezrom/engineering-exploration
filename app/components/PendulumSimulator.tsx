"use client";

import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { pendulumSimulationTranslations } from "../data/translations/pendulumSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";
import { simulatePendulum } from "../lib/pendulumMotion";

// Standard gravity. Local gravity varies by a few tenths of a percent with
// latitude and altitude, which is smaller than every other effect ignored here.
const GRAVITY = 9.81;
const PIVOT_X = 200;
const PIVOT_Y = 30;
const PIXELS_PER_METER = 90;
const BOB_RADIUS = 14;

const PLOT_LEFT = 34;
const PLOT_RIGHT = 384;
const PLOT_MIDDLE = 70;
const PLOT_HALF_HEIGHT = 46;

export default function PendulumSimulator() {
  const { language } = useLanguage();
  const t = pendulumSimulationTranslations[language];
  const [length, setLength] = useShareableState("len", 1, parseNumber);
  const [angle, setAngle] = useShareableState("angle", 20, parseNumber);

  const motion = useMemo(() => simulatePendulum(length, angle, GRAVITY), [length, angle]);
  const { samples, period, exactPeriod, smallAnglePeriod, integrationErrorPercent, smallAngleErrorPercent } = motion;

  const stringPx = 30 + length * PIXELS_PER_METER;
  const amplitude = (angle * Math.PI) / 180;
  const totalTime = samples[samples.length - 1].t;

  const plotX = (time: number) => PLOT_LEFT + (time / totalTime) * (PLOT_RIGHT - PLOT_LEFT);
  const plotY = (theta: number) => PLOT_MIDDLE - (theta / amplitude) * PLOT_HALF_HEIGHT;

  const realPath = `M${samples.map((s) => `${plotX(s.t).toFixed(1)},${plotY(s.theta).toFixed(1)}`).join("L")}`;
  // The textbook model is a plain cosine at its own, slightly faster period —
  // which is exactly why the two curves separate as the swing gets wider.
  const smallAnglePath = `M${samples
    .map((s) => `${plotX(s.t).toFixed(1)},${plotY(amplitude * Math.cos((2 * Math.PI * s.t) / smallAnglePeriod)).toFixed(1)}`)
    .join("L")}`;

  const formatSeconds = (value: number) => `${value.toFixed(3)} s`;
  const formatPercent = (value: number) => (value < 0.001 ? "<0.001%" : `${value.toFixed(2)}%`);
  const formatError = (value: number) => (value < 0.001 ? "<0.001%" : `${value.toFixed(3)}%`);

  const readouts = [
    { label: t.truePeriodLabel, value: formatSeconds(period) },
    { label: t.textbookPeriodLabel, value: formatSeconds(smallAnglePeriod) },
    { label: t.gapLabel, value: formatPercent(smallAngleErrorPercent) },
  ];

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
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

          {/* The arc the bob actually travels through, both ways from vertical */}
          <path
            d={`M${PIVOT_X + stringPx * Math.sin(-amplitude)} ${PIVOT_Y + stringPx * Math.cos(-amplitude)}A${stringPx} ${stringPx} 0 0 1 ${
              PIVOT_X + stringPx * Math.sin(amplitude)
            } ${PIVOT_Y + stringPx * Math.cos(amplitude)}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
            className="text-primary/40"
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

        {/* ── Angle against time ───────────────────────────────────── */}
        <div className="mt-6 border-t border-neutral-900/10 pt-4 dark:border-white/10">
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.swingPlot}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.swingPlain}</p>
          <svg viewBox="0 0 400 150" className="mx-auto mt-1 w-full max-w-md" role="img" aria-label={t.plotAriaLabel}>
            <line x1={PLOT_LEFT} y1={PLOT_MIDDLE} x2={PLOT_RIGHT} y2={PLOT_MIDDLE} stroke="currentColor" strokeWidth="1" className="text-neutral-900/25 dark:text-white/25" />
            <text x={PLOT_LEFT - 4} y={PLOT_MIDDLE - PLOT_HALF_HEIGHT + 3} textAnchor="end" className="fill-current font-mono text-[8px] opacity-60">
              +{angle}°
            </text>
            <text x={PLOT_LEFT - 4} y={PLOT_MIDDLE + PLOT_HALF_HEIGHT + 3} textAnchor="end" className="fill-current font-mono text-[8px] opacity-60">
              −{angle}°
            </text>

            {/* Where each model says the first full swing finishes */}
            <line x1={plotX(smallAnglePeriod)} y1="18" x2={plotX(smallAnglePeriod)} y2={PLOT_MIDDLE + PLOT_HALF_HEIGHT} stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="text-accent/70" />
            <line x1={plotX(period)} y1="18" x2={plotX(period)} y2={PLOT_MIDDLE + PLOT_HALF_HEIGHT} stroke="currentColor" strokeWidth="1" className="text-primary/70" />

            <path d={smallAnglePath} fill="none" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d={realPath} fill="none" className="stroke-primary" strokeWidth="2" />

            <text x={PLOT_LEFT} y="140" className="fill-current font-mono text-[8px] opacity-60">
              0 s
            </text>
            <text x={PLOT_RIGHT} y="140" textAnchor="end" className="fill-current font-mono text-[8px] opacity-60">
              {totalTime.toFixed(2)} s
            </text>
          </svg>

          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11px] text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 4" aria-hidden="true" className="h-1 w-5">
                <line x1="0" y1="2" x2="20" y2="2" className="stroke-primary" strokeWidth="3" />
              </svg>
              {t.trueCurve}
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 4" aria-hidden="true" className="h-1 w-5">
                <line x1="0" y1="2" x2="20" y2="2" className="stroke-accent" strokeWidth="3" strokeDasharray="4 3" />
              </svg>
              {t.smallAngleCurve}
            </span>
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.periodReadout(period.toFixed(3))}
        </p>
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
        {t.verification(formatError(integrationErrorPercent), exactPeriod.toFixed(3))}
      </p>
      <p className="mt-2 pl-4 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">{t.assumptions}</p>

      <div className="mt-6 border border-primary/30 p-5">
        <div className="space-y-4">
          <SimulatorSlider label={t.length} value={length} onChange={setLength} min={0.3} max={2} step={0.1} unit="m" />
          <SimulatorSlider label={t.releaseAngle} value={angle} onChange={setAngle} min={5} max={45} step={1} unit="°" />
        </div>
      </div>
    </div>
  );
}
