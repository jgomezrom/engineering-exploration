"use client";

import { useLanguage } from "../context/LanguageContext";
import { buoyancySimulationTranslations } from "../data/translations/buoyancySimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber, parseBoolean } from "../hooks/useShareableState";

const WATER_DENSITY = 1;
// A hull shaped to enclose air only needs to be a thin shell — real ships
// keep material to roughly this share of the hull's total enclosed volume.
// It's an approximation, not a measured figure, and the explanation says so.
const HULL_MATERIAL_FRACTION = 0.06;

const WATERLINE_Y = 108;
const BOTTOM_Y = 172;
const OBJECT_HEIGHT = 56;
const OBJECT_HALF_WIDTH = 42;
const CENTER_X = 200;

export default function BuoyancySimulator() {
  const { language } = useLanguage();
  const t = buoyancySimulationTranslations[language];
  const [density, setDensity] = useShareableState("density", 2.7, parseNumber);
  const [hollow, setHollow] = useShareableState("hollow", false, parseBoolean);

  const effectiveDensity = hollow ? density * HULL_MATERIAL_FRACTION : density;
  const floats = effectiveDensity < WATER_DENSITY;
  const submergedFraction = Math.min(1, effectiveDensity / WATER_DENSITY);

  const objectTopY = floats
    ? WATERLINE_Y - OBJECT_HEIGHT * (1 - submergedFraction)
    : BOTTOM_Y - OBJECT_HEIGHT;

  const solidPath = `M${CENTER_X - OBJECT_HALF_WIDTH} ${objectTopY}H${CENTER_X + OBJECT_HALF_WIDTH}V${objectTopY + OBJECT_HEIGHT}H${CENTER_X - OBJECT_HALF_WIDTH}Z`;
  const hullPath = `M${CENTER_X - OBJECT_HALF_WIDTH} ${objectTopY}H${CENTER_X + OBJECT_HALF_WIDTH}V${objectTopY + OBJECT_HEIGHT * 0.35}L${CENTER_X + OBJECT_HALF_WIDTH * 0.55} ${objectTopY + OBJECT_HEIGHT}H${CENTER_X - OBJECT_HALF_WIDTH * 0.55}L${CENTER_X - OBJECT_HALF_WIDTH} ${objectTopY + OBJECT_HEIGHT * 0.35}Z`;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <rect x="20" y={WATERLINE_Y} width="360" height={BOTTOM_Y - WATERLINE_Y} className="fill-primary/10" />
          <path
            d={`M20 ${WATERLINE_Y}q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0`}
            fill="none"
            className="stroke-primary/50"
            strokeWidth="1.5"
          />
          <line x1="20" y1={BOTTOM_Y} x2="380" y2={BOTTOM_Y} stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-neutral-900/15 dark:text-white/15" />

          <path
            d={hollow ? hullPath : solidPath}
            className={floats ? "fill-neutral-100/90 stroke-neutral-900/60 dark:fill-neutral-900/90 dark:stroke-white/60" : "fill-accent/20 stroke-accent"}
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ transition: "d 0.35s ease, transform 0.35s ease" }}
          />
        </svg>

        <p className={`mt-2 text-center font-mono text-xs uppercase tracking-widest ${floats ? "text-neutral-600 dark:text-neutral-400" : "text-accent"}`}>
          {floats ? t.floating(Math.round(submergedFraction * 100)) : t.sinking}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-primary/30 p-5 sm:col-span-2">
          <SimulatorSlider label={t.density} value={density} onChange={setDensity} min={0.1} max={11.3} step={0.1} unit="×" />
        </div>
        <div className="border border-accent/30 p-5 sm:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.shape}</span>
            <div className="flex overflow-hidden rounded-full border border-neutral-900/10 dark:border-white/10">
              <button
                type="button"
                onClick={() => setHollow(false)}
                className={`px-3 py-1 text-xs font-medium transition-colors ${!hollow ? "bg-accent text-white" : "text-neutral-600 dark:text-neutral-400"}`}
              >
                {t.solidBlock}
              </button>
              <button
                type="button"
                onClick={() => setHollow(true)}
                className={`px-3 py-1 text-xs font-medium transition-colors ${hollow ? "bg-accent text-white" : "text-neutral-600 dark:text-neutral-400"}`}
              >
                {t.hollowHull}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
