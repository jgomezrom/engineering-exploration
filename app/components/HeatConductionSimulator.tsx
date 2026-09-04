"use client";

import { useLanguage } from "../context/LanguageContext";
import { heatConductionSimulationTranslations } from "../data/translations/heatConductionSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber, parseEnum } from "../hooks/useShareableState";

// Approximate published thermal conductivity values, in W/(m·K) — real,
// typical figures for each material, not lab-measured for this site. See
// the math section's own caveat about this being an illustrative estimate.
const CONDUCTIVITY = {
  copper: 400,
  aluminum: 205,
  glass: 1,
  wood: 0.15,
} as const;

type Material = keyof typeof CONDUCTIVITY;
const MATERIALS: Material[] = ["copper", "aluminum", "glass", "wood"];

const SLAB_CENTER_X = 200;
const ARROW_Y = [70, 100, 130];

function formatFlux(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function HeatConductionSimulator() {
  const { language } = useLanguage();
  const t = heatConductionSimulationTranslations[language];
  const [thickness, setThickness] = useShareableState("thick", 5, parseNumber);
  const [deltaT, setDeltaT] = useShareableState("dt", 50, parseNumber);
  const [material, setMaterial] = useShareableState<Material>("mat", "wood", parseEnum(MATERIALS));

  const conductivity = CONDUCTIVITY[material];
  const thicknessMeters = thickness / 100;
  const flux = (conductivity * deltaT) / thicknessMeters;
  const arrowCount = flux > 50000 ? 3 : flux > 500 ? 2 : 1;

  const slabWidthPx = 20 + thickness * 8;
  const slabLeft = SLAB_CENTER_X - slabWidthPx / 2;
  const slabRight = SLAB_CENTER_X + slabWidthPx / 2;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <rect x="20" y="40" width={slabLeft - 20} height="120" className="fill-accent/10" />
          <rect x={slabRight} y="40" width={380 - slabRight} height="120" className="fill-primary/10" />
          <rect
            x={slabLeft}
            y="40"
            width={slabWidthPx}
            height="120"
            className="fill-neutral-200 stroke-neutral-900/30 dark:fill-neutral-800 dark:stroke-white/30"
            strokeWidth="1.5"
            style={{ transition: "x 0.2s ease, width 0.2s ease" }}
          />

          {ARROW_Y.slice(0, arrowCount).map((y) => (
            <g key={y} className="text-accent">
              <line x1="30" y1={y} x2="352" y2={y} stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" />
              <path d={`M346 ${y - 6} L360 ${y} L346 ${y + 6} Z`} fill="currentColor" />
            </g>
          ))}

          <text x="20" y="28" className="fill-accent font-mono text-[11px] font-semibold">
            {t.hotLabel}
          </text>
          <text x="360" y="28" textAnchor="end" className="fill-primary font-mono text-[11px] font-semibold">
            {t.coldLabel}
          </text>
        </svg>

        <p className="mt-2 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.fluxReadout(formatFlux(flux))}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-accent/30 p-5 sm:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.material}</span>
            <div className="flex overflow-hidden border border-neutral-900/10 dark:border-white/10">
              {MATERIALS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMaterial(m)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    material === m ? "bg-accent text-white" : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {t[m]}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.thickness} value={thickness} onChange={setThickness} min={1} max={20} step={1} unit="cm" />
        </div>
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.tempDifference} value={deltaT} onChange={setDeltaT} min={5} max={100} step={5} unit="°C" />
        </div>
      </div>
    </div>
  );
}
