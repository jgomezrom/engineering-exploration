"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { circuitSimulationTranslations } from "../data/translations/circuitSimulation";
import SimulatorSlider from "./SimulatorSlider";

// LEDs are current-driven, not voltage-driven — brightness is modeled as
// roughly proportional to current up to a realistic point where a small LED
// is already at full visible brightness, then it plateaus rather than
// growing forever. 30mA is a reasonable "very bright, pushing its luck"
// ceiling for a standard 5mm LED.
const BRIGHTNESS_CEILING_MA = 30;
// Above this, a real LED risks burning out — used only for the warning label.
const DANGER_MA = 40;

const LOOP_PATH =
  "M60 150V95M60 85V50H150M230 50H340V95M340 105V150H60";

export default function CircuitSimulator() {
  const { language } = useLanguage();
  const t = circuitSimulationTranslations[language];
  const [voltage, setVoltage] = useState(6);
  const [resistance, setResistance] = useState(300);

  const current = voltage / resistance; // amps, Ohm's law: I = V / R
  const currentMA = current * 1000;
  const brightness = Math.min(1, currentMA / BRIGHTNESS_CEILING_MA);
  const isDanger = currentMA >= DANGER_MA;

  const dashOffsetRef = useRef(0);
  const [dashOffset, setDashOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      // Speed of the flow animation scales with current — more amps, faster
      // dashes. Capped so it never becomes an unreadable blur.
      const speed = Math.min(220, 40 + currentRef.current * 900);
      dashOffsetRef.current -= (speed * dt) / 1000;
      setDashOffset(dashOffsetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div>
      <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          {/* Static wire loop, drawn faint so the animated current is what reads */}
          <path d={LOOP_PATH} fill="none" className="stroke-neutral-900/15 dark:stroke-white/15" strokeWidth="2" />

          {/* Animated current flow along the same loop */}
          <path
            d={LOOP_PATH}
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 9"
            strokeDashoffset={dashOffset}
          />

          {/* Battery symbol, left wire */}
          <line x1="42" y1="85" x2="78" y2="85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="95" x2="70" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <text x="30" y="93" textAnchor="end" className="fill-current font-mono text-[10px]">
            +
          </text>

          {/* Resistor zigzag, top wire */}
          <path
            d="M150 50l8-12 16 24 16-24 16 24 16-24 8 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* LED symbol, right wire — triangle + bar pointing down (conventional current direction), plus emission arrows */}
          <path
            d="M340 95l-14-16h28z"
            className={isDanger ? "fill-accent stroke-accent" : "fill-primary stroke-primary"}
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ opacity: 0.25 + brightness * 0.75 }}
          />
          <line x1="326" y1="95" x2="354" y2="95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M348 72l10-8M356 78l10-6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{ opacity: 0.3 + brightness * 0.7 }}
          />
          <path
            d="M352 75l4 1-1 4M360 71l4 1-1 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.3 + brightness * 0.7 }}
          />

          {/* Soft glow behind the LED, scaling with brightness */}
          <circle
            cx="340"
            cy="95"
            r={10 + brightness * 14}
            className={isDanger ? "fill-accent" : "fill-primary"}
            style={{ opacity: brightness * 0.25 }}
          />
        </svg>

        <p className={`mt-2 text-center font-mono text-xs uppercase tracking-widest ${isDanger ? "text-accent" : "text-neutral-600 dark:text-neutral-400"}`}>
          {isDanger ? t.tooMuchCurrent : t.current(currentMA < 10 ? currentMA.toFixed(1) : Math.round(currentMA))}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="border border-primary/30 p-5">
          <SimulatorSlider label={t.voltage} value={voltage} onChange={setVoltage} min={1} max={12} unit="V" />
        </div>
        <div className="border border-accent/30 p-5">
          <SimulatorSlider
            label={t.resistance}
            value={resistance}
            onChange={setResistance}
            min={50}
            max={1000}
            step={25}
            unit="Ω"
            color="text-accent"
          />
        </div>
      </div>
    </div>
  );
}
