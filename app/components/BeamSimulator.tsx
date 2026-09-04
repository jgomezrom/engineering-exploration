"use client";

import { useLanguage } from "../context/LanguageContext";
import { beamSimulationTranslations } from "../data/translations/beamSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";

const SPAN = 10; // beam length, in abstract units
const LEFT_X = 40;
const RIGHT_X = 360;
const PX_PER_UNIT = (RIGHT_X - LEFT_X) / SPAN;
const BEAM_Y = 100;
// Deflection is visually exaggerated (a real beam bends far less than this
// relative to its span) so the effect reads clearly on screen — the same
// convention structural drawings use, always noted as exaggerated.
const STIFFNESS_SCALE = 400;
const DEFLECTION_PX_SCALE = 30;
const WARNING_RATIO = 0.03;

// Simply supported beam, point load P at distance a from the left support
// (b = SPAN - a from the right). Standard Euler-Bernoulli beam deflection
// formula for a single point load — see any mechanics of materials
// reference (e.g. Hibbeler). EI stands in for the beam's flexural rigidity
// (material stiffness × cross-section shape combined into one number).
function deflectionAt(x: number, a: number, load: number, EI: number): number {
  const b = SPAN - a;
  if (x <= a) {
    return (load * b * x) / (6 * SPAN * EI) * (SPAN * SPAN - b * b - x * x);
  }
  const xr = SPAN - x;
  return (load * a * xr) / (6 * SPAN * EI) * (2 * SPAN * x - a * a - x * x);
}

export default function BeamSimulator() {
  const { language } = useLanguage();
  const t = beamSimulationTranslations[language];
  const [load, setLoad] = useShareableState("load", 5, parseNumber);
  const [position, setPosition] = useShareableState("pos", 5, parseNumber);
  const [stiffness, setStiffness] = useShareableState("stiff", 5, parseNumber);

  const EI = stiffness * STIFFNESS_SCALE;
  const samples = 40;
  const points: { x: number; y: number }[] = [];
  let maxDeflection = 0;
  for (let i = 0; i <= samples; i++) {
    const x = (i / samples) * SPAN;
    const d = deflectionAt(x, position, load, EI);
    maxDeflection = Math.max(maxDeflection, d);
    points.push({ x: LEFT_X + x * PX_PER_UNIT, y: BEAM_Y + d * DEFLECTION_PX_SCALE });
  }
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  const deflectionRatio = maxDeflection / SPAN;
  const isWarning = deflectionRatio > WARNING_RATIO;
  const loadX = LEFT_X + position * PX_PER_UNIT;
  const loadBeamY = BEAM_Y + deflectionAt(position, position, load, EI) * DEFLECTION_PX_SCALE;

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-neutral-900/15 dark:text-white/15" />

          {/* Supports */}
          <path d={`M${LEFT_X - 12} 150L${LEFT_X} 128L${LEFT_X + 12} 150Z`} className="fill-neutral-100 stroke-neutral-900/30 dark:fill-neutral-900 dark:stroke-white/30" strokeWidth="1.5" />
          <path d={`M${RIGHT_X - 12} 150L${RIGHT_X} 128L${RIGHT_X + 12} 150Z`} className="fill-neutral-100 stroke-neutral-900/30 dark:fill-neutral-900 dark:stroke-white/30" strokeWidth="1.5" />
          <line x1={LEFT_X - 20} y1="150" x2={LEFT_X + 20} y2="150" stroke="currentColor" strokeWidth="2" />
          <line x1={RIGHT_X - 20} y1="150" x2={RIGHT_X + 20} y2="150" stroke="currentColor" strokeWidth="2" />

          {/* Undeflected reference line */}
          <line x1={LEFT_X} y1={BEAM_Y} x2={RIGHT_X} y2={BEAM_Y} stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="text-neutral-900/20 dark:text-white/20" />

          {/* Bent beam */}
          <path
            d={pathD}
            fill="none"
            className={isWarning ? "stroke-accent" : "stroke-primary"}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Load arrow */}
          <line x1={loadX} y1={loadBeamY - 45} x2={loadX} y2={loadBeamY - 4} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d={`M${loadX - 6} ${loadBeamY - 12}L${loadX} ${loadBeamY - 2}L${loadX + 6} ${loadBeamY - 12}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x={loadX} y={loadBeamY - 50} textAnchor="middle" className="fill-current font-mono text-[11px] font-semibold">
            {load}
          </text>
        </svg>

        <p className={`mt-2 text-center font-mono text-xs uppercase tracking-widest ${isWarning ? "text-accent" : "text-neutral-600 dark:text-neutral-400"}`}>
          {isWarning ? t.bendingALot : t.holdingSteady}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.load} value={load} onChange={setLoad} min={1} max={10} />
        </div>
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.loadPosition} value={position} onChange={setPosition} min={1} max={9} />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider label={t.stiffness} value={stiffness} onChange={setStiffness} min={1} max={10} color="text-accent" />
        </div>
      </div>
    </div>
  );
}
