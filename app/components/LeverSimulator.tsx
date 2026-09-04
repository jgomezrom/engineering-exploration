"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { leverSimulationTranslations } from "../data/translations/leverSimulation";
import SimulatorSlider from "./SimulatorSlider";

const MAX_ANGLE = 15;
const PIVOT_X = 200;
const PIVOT_Y = 120;
const PIXELS_PER_UNIT = 16;
const MAX_TORQUE = 10 * 10;

export default function LeverSimulator() {
  const { language } = useLanguage();
  const t = leverSimulationTranslations[language];
  const [leftWeight, setLeftWeight] = useState(4);
  const [leftDistance, setLeftDistance] = useState(6);
  const [rightWeight, setRightWeight] = useState(6);
  const [rightDistance, setRightDistance] = useState(4);

  const torqueLeft = leftWeight * leftDistance;
  const torqueRight = rightWeight * rightDistance;
  const netTorque = torqueRight - torqueLeft;
  const angle = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, (netTorque / MAX_TORQUE) * MAX_ANGLE));
  const balanced = Math.abs(netTorque) <= 2;

  const leftPixelDist = leftDistance * PIXELS_PER_UNIT;
  const rightPixelDist = rightDistance * PIXELS_PER_UNIT;
  const leftRadius = 8 + leftWeight * 1.4;
  const rightRadius = 8 + rightWeight * 1.4;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-neutral-900/15 dark:text-white/15" />
          <path d={`M${PIVOT_X - 22} 180 L${PIVOT_X} 122 L${PIVOT_X + 22} 180 Z`} className="fill-neutral-100 stroke-neutral-900/20 dark:fill-neutral-900 dark:stroke-white/20" strokeWidth="1.5" />

          <g transform={`rotate(${angle} ${PIVOT_X} ${PIVOT_Y})`}>
            <line x1={PIVOT_X - 160} y1={PIVOT_Y} x2={PIVOT_X + 160} y2={PIVOT_Y} className="stroke-neutral-900 dark:stroke-white" strokeWidth="4" strokeLinecap="round" />
            <circle cx={PIVOT_X} cy={PIVOT_Y} r="4" className="fill-neutral-900 dark:fill-white" />

            <circle cx={PIVOT_X - leftPixelDist} cy={PIVOT_Y} r={leftRadius} className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
            <text x={PIVOT_X - leftPixelDist} y={PIVOT_Y + 4} textAnchor="middle" className="fill-primary font-mono text-[11px] font-semibold">
              {leftWeight}
            </text>

            <circle cx={PIVOT_X + rightPixelDist} cy={PIVOT_Y} r={rightRadius} className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
            <text x={PIVOT_X + rightPixelDist} y={PIVOT_Y + 4} textAnchor="middle" className="fill-accent font-mono text-[11px] font-semibold">
              {rightWeight}
            </text>
          </g>
        </svg>

        <p className="mt-2 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {balanced ? t.balanced : netTorque > 0 ? t.tippingRight : t.tippingLeft}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-primary/30 p-5">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{t.leftSide}</h3>
          <div className="mt-4 space-y-4">
            <SimulatorSlider label={t.weight} value={leftWeight} onChange={setLeftWeight} color="text-primary" />
            <SimulatorSlider label={t.distanceFromPivot} value={leftDistance} onChange={setLeftDistance} color="text-primary" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            {t.torqueLabel} = {leftWeight} × {leftDistance} ={" "}
            <span className="font-mono font-semibold text-neutral-900 dark:text-white">{torqueLeft}</span>
          </p>
        </div>

        <div className="border border-accent/30 p-5">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{t.rightSide}</h3>
          <div className="mt-4 space-y-4">
            <SimulatorSlider label={t.weight} value={rightWeight} onChange={setRightWeight} color="text-accent" />
            <SimulatorSlider label={t.distanceFromPivot} value={rightDistance} onChange={setRightDistance} color="text-accent" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            {t.torqueLabel} = {rightWeight} × {rightDistance} ={" "}
            <span className="font-mono font-semibold text-neutral-900 dark:text-white">{torqueRight}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
