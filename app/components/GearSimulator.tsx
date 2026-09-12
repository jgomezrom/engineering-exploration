"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { gearSimulationTranslations } from "../data/translations/gearSimulation";
import SimulatorSlider from "./SimulatorSlider";
import { useShareableState, parseNumber } from "../hooks/useShareableState";

const RADIUS_BASE = 14;
const RADIUS_PER_TOOTH = 2.4;
const GEAR_A_CX = 110;
const GEAR_Y = 112;
// Degrees per second the driving gear spins at — purely a display rate, not
// a claim about any real machine's actual RPM.
const DRIVE_DEG_PER_SEC = 45;

function radiusFor(teeth: number) {
  return RADIUS_BASE + teeth * RADIUS_PER_TOOTH;
}

// Math.cos/Math.sin can differ in their very last bit between the server's
// and the browser's JS engine — invisible to the eye, but enough for React
// to see two different attribute strings and report a hydration mismatch.
// Rounding closes that gap without any visible effect.
function round(n: number) {
  return Math.round(n * 100) / 100;
}

// Chunky trapezoidal teeth (base wider than tip) — the same shape the field
// illustrations use, so a gear reads the same way whether it's spinning here
// or sitting still on a field page.
function GearTeeth({ cx, cy, r, count, toothH = 8, toothW = 0.34 }: { cx: number; cy: number; r: number; count: number; toothH?: number; toothW?: number }) {
  const segs: string[] = [];
  for (let i = 0; i < count; i++) {
    const mid = (i * 2 * Math.PI) / count;
    const halfBase = (Math.PI / count) * toothW;
    const halfTip = halfBase * 0.65;
    const p = (a: number, rad: number) => `${round(cx + rad * Math.cos(a))},${round(cy + rad * Math.sin(a))}`;
    segs.push(`M${p(mid - halfBase, r)}L${p(mid - halfTip, r + toothH)}L${p(mid + halfTip, r + toothH)}L${p(mid + halfBase, r)}`);
  }
  return <path d={segs.join(" ")} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />;
}

// The spin lives on the wrapping <g> the animation writes to, not here, so a
// gear's own shapes are only rebuilt when its tooth count actually changes.
function Gear({ cx, cy, teeth, filled }: { cx: number; cy: number; teeth: number; filled?: boolean }) {
  const r = radiusFor(teeth);
  const hubR = Math.max(6, r * 0.22);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className={filled ? "fill-primary/10 stroke-primary" : "fill-accent/10 stroke-accent"} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={hubR} stroke="currentColor" strokeWidth="1.5" fill="none" />
      <GearTeeth cx={cx} cy={cy} r={r} count={teeth} />
      {/* spokes, purely decorative, echo the site's blueprint-diagram style */}
      {[0, 90, 180, 270].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={round(cx + hubR * Math.cos(a))}
            y1={round(cy + hubR * Math.sin(a))}
            x2={round(cx + r * 0.75 * Math.cos(a))}
            y2={round(cy + r * 0.75 * Math.sin(a))}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        );
      })}
    </g>
  );
}

export default function GearSimulator() {
  const { language } = useLanguage();
  const t = gearSimulationTranslations[language];
  const [teethA, setTeethA] = useShareableState("a", 10, parseNumber);
  const [teethB, setTeethB] = useShareableState("b", 18, parseNumber);

  const ratio = teethB / teethA; // teethA * speedA = teethB * speedB
  const outputSpeedFactor = 1 / ratio; // relative to input speed
  const outputTorqueFactor = ratio; // ignoring friction, power is conserved

  const radiusA = radiusFor(teethA);
  const radiusB = radiusFor(teethB);
  const gearBCx = GEAR_A_CX + radiusA + radiusB;

  const gearARef = useRef<SVGGElement>(null);
  const gearBRef = useRef<SVGGElement>(null);
  const angleARef = useRef(0);
  const angleBRef = useRef(0);
  // The loop reads the live ratio and position from refs rather than closing
  // over them, so moving a slider never restarts the spin mid-turn.
  const ratioRef = useRef(ratio);
  const gearBCxRef = useRef(gearBCx);

  useEffect(() => {
    ratioRef.current = ratio;
    gearBCxRef.current = gearBCx;
  }, [ratio, gearBCx]);

  // Both gears are spun by writing the transform straight to their <g> nodes.
  // Driving this through React state instead re-rendered the whole diagram —
  // every tooth rebuilt from trig and string joins — sixty times a second,
  // which is a lot to ask of a phone for a decorative spin. Meshing gears turn
  // opposite ways, and the driven gear turns slower by the tooth ratio. Each
  // angle is accumulated separately and wrapped to one turn, so a ratio change
  // doesn't make a gear jump and nothing grows over a long visit.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      angleARef.current = (angleARef.current + DRIVE_DEG_PER_SEC * dt) % 360;
      angleBRef.current = (angleBRef.current - (DRIVE_DEG_PER_SEC / ratioRef.current) * dt) % 360;
      gearARef.current?.setAttribute("transform", `rotate(${round(angleARef.current)} ${GEAR_A_CX} ${GEAR_Y})`);
      gearBRef.current?.setAttribute("transform", `rotate(${round(angleBRef.current)} ${gearBCxRef.current} ${GEAR_Y})`);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 220" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="20" y1="190" x2="380" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-neutral-900/15 dark:text-white/15" />
          <g ref={gearARef}>
            <Gear cx={GEAR_A_CX} cy={GEAR_Y} teeth={teethA} filled />
          </g>
          <g ref={gearBRef}>
            <Gear cx={gearBCx} cy={GEAR_Y} teeth={teethB} />
          </g>
          <text x={GEAR_A_CX} y="204" textAnchor="middle" className="fill-primary font-mono text-[10px] font-medium">
            {t.inputLabel}
          </text>
          <text x={gearBCx} y="204" textAnchor="middle" className="fill-accent font-mono text-[10px] font-medium">
            {t.outputLabel}
          </text>
        </svg>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          <span>{t.speedReadout(outputSpeedFactor < 1 ? outputSpeedFactor.toFixed(2) : outputSpeedFactor.toFixed(1))}</span>
          <span>{t.torqueReadout(outputTorqueFactor < 1 ? outputTorqueFactor.toFixed(2) : outputTorqueFactor.toFixed(1))}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.inputTeeth} value={teethA} onChange={setTeethA} min={6} max={24} />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider label={t.outputTeeth} value={teethB} onChange={setTeethB} min={6} max={24} color="text-accent" />
        </div>
      </div>
    </div>
  );
}
