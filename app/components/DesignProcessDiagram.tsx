"use client";

import { useState } from "react";
import { designProcessSteps } from "../data/designProcess";

const SIZE = 320;
const CENTER = SIZE / 2;
const RADIUS = 118;
const NODE_RADIUS = 26;

function pointAt(index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export default function DesignProcessDiagram({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const total = designProcessSteps.length;
  const points = designProcessSteps.map((_, i) => pointAt(i, total));
  const activeStep = designProcessSteps[selected];

  return (
    <div>
      <div className={`grid gap-8 ${compact ? "" : "sm:grid-cols-[auto_1fr] sm:items-center"}`}>
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className={`mx-auto ${compact ? "w-full max-w-[220px]" : "w-full max-w-xs"}`}
          role="img"
          aria-label="The engineering design process, arranged as a repeating cycle: Ask, Imagine, Plan, Build, Test, Improve, then back to Ask."
        >
          <defs>
            <marker
              id="design-process-arrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-neutral-900/25 dark:fill-white/25" />
            </marker>
          </defs>

          {points.map((p, i) => {
            const next = points[(i + 1) % total];
            return (
              <path
                key={i}
                d={`M ${p.x} ${p.y} A ${RADIUS} ${RADIUS} 0 0 1 ${next.x} ${next.y}`}
                fill="none"
                className="stroke-neutral-900/20 dark:stroke-white/20"
                strokeWidth="1.5"
                markerEnd="url(#design-process-arrow)"
              />
            );
          })}

          {designProcessSteps.map((step, i) => {
            const p = points[i];
            const isSelected = selected === i;
            return (
              <g key={step.id}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_RADIUS}
                  className={
                    isSelected
                      ? "fill-primary"
                      : "fill-white stroke-neutral-900/15 dark:fill-neutral-900 dark:stroke-white/15"
                  }
                  strokeWidth={isSelected ? 0 : 1.5}
                />
                <text
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`select-none font-mono text-[10px] font-semibold uppercase tracking-tight ${
                    isSelected ? "fill-white" : "fill-neutral-900 dark:fill-white"
                  }`}
                >
                  {step.name}
                </text>
              </g>
            );
          })}
        </svg>

        <div>
          <div className="flex flex-wrap gap-2">
            {designProcessSteps.map((step, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={step.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelected(i)}
                  className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
                  }`}
                >
                  {step.name}
                </button>
              );
            })}
          </div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {activeStep.description}
          </p>
        </div>
      </div>

      {!compact && (
        <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            About &ldquo;Repeat&rdquo;
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            The arrow from Improve back to Ask is the whole point. Engineers rarely get a design
            right on the first pass, and the loop almost never restarts cleanly from the top — a
            failed test usually sends you back to Build or Plan, not all the way to Ask. Redoing a
            step isn&apos;t a sign something went wrong. It&apos;s the process working as intended.
          </p>
        </div>
      )}
    </div>
  );
}
