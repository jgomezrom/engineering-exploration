"use client";

import { useLanguage } from "../context/LanguageContext";
import { logicGateSimulationTranslations } from "../data/translations/logicGateSimulation";
import { useShareableState, parseBoolean, parseEnum } from "../hooks/useShareableState";

type Gate = "AND" | "OR" | "XOR" | "NOT";
const GATES: Gate[] = ["AND", "OR", "XOR", "NOT"];
const parseGate = parseEnum(GATES);

function compute(gate: Gate, a: boolean, b: boolean): boolean {
  switch (gate) {
    case "AND":
      return a && b;
    case "OR":
      return a || b;
    case "XOR":
      return a !== b;
    case "NOT":
      return !a;
  }
}

function GateShape({ gate, active }: { gate: Gate; active: boolean }) {
  const cls = active ? "fill-primary/15 stroke-primary" : "fill-neutral-50 stroke-neutral-400 dark:fill-neutral-900 dark:stroke-neutral-600";
  if (gate === "NOT") {
    return (
      <>
        <path d="M150 70L150 130L205 100Z" className={cls} strokeWidth="1.75" strokeLinejoin="round" />
        <circle cx="212" cy="100" r="6" className={cls} strokeWidth="1.75" />
      </>
    );
  }
  if (gate === "AND") {
    return <path d="M150 70H185A30 30 0 0 1 185 130H150Z" className={cls} strokeWidth="1.75" strokeLinejoin="round" />;
  }
  if (gate === "OR") {
    return (
      <path
        d="M150 70Q172 100 150 130Q205 126 228 100Q205 74 150 70Z"
        className={cls}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    );
  }
  // XOR: same body as OR, plus a second detached curve behind the input edge
  return (
    <>
      <path d="M158 70Q180 100 158 130Q213 126 236 100Q213 74 158 70Z" className={cls} strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M148 70Q170 100 148 130" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </>
  );
}

function Toggle({ label, value, onChange, disabled }: { label: string; value: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      aria-pressed={value}
      className={`flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${
        value ? "border-primary bg-primary/10 text-primary" : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
      }`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${value ? "bg-primary" : "bg-neutral-400 dark:bg-neutral-600"}`} />
      {label}: {value ? "1" : "0"}
    </button>
  );
}

export default function LogicGateSimulator() {
  const { language } = useLanguage();
  const t = logicGateSimulationTranslations[language];
  const [gate, setGate] = useShareableState<Gate>("gate", "AND", parseGate);
  const [a, setA] = useShareableState("a", true, parseBoolean);
  const [b, setB] = useShareableState("b", false, parseBoolean);

  const isNot = gate === "NOT";
  const output = compute(gate, a, b);
  const outX = gate === "AND" ? 185 : gate === "NOT" ? 218 : gate === "OR" ? 228 : 236;

  const rows = isNot
    ? [
        { a: false, b: false, out: compute(gate, false, false) },
        { a: true, b: false, out: compute(gate, true, false) },
      ]
    : [
        { a: false, b: false, out: compute(gate, false, false) },
        { a: false, b: true, out: compute(gate, false, true) },
        { a: true, b: false, out: compute(gate, true, false) },
        { a: true, b: true, out: compute(gate, true, true) },
      ];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {GATES.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGate(g)}
            aria-pressed={gate === g}
            className={`border px-4 py-1.5 font-mono text-sm font-semibold transition-colors ${
              gate === g ? "border-primary bg-primary/10 text-primary" : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-4 border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
        <svg viewBox="0 0 400 200" className="mx-auto w-full max-w-md" role="img" aria-label={t.diagramAriaLabel}>
          <line x1="90" y1={isNot ? 100 : 80} x2="150" y2={isNot ? 100 : 80} className={a ? "stroke-primary" : "stroke-neutral-300 dark:stroke-neutral-700"} strokeWidth="2" />
          {!isNot && (
            <line x1="90" y1="120" x2="150" y2="120" className={b ? "stroke-primary" : "stroke-neutral-300 dark:stroke-neutral-700"} strokeWidth="2" />
          )}
          <circle cx="90" cy={isNot ? 100 : 80} r="5" className={a ? "fill-primary" : "fill-neutral-300 dark:fill-neutral-700"} />
          {!isNot && <circle cx="90" cy="120" r="5" className={b ? "fill-primary" : "fill-neutral-300 dark:fill-neutral-700"} />}

          <GateShape gate={gate} active={output} />

          <line x1={outX} y1="100" x2="330" y2="100" className={output ? "stroke-accent" : "stroke-neutral-300 dark:stroke-neutral-700"} strokeWidth="2" />
          <circle cx="345" cy="100" r="15" className={output ? "fill-accent/20 stroke-accent" : "fill-neutral-50 stroke-neutral-300 dark:fill-neutral-900 dark:stroke-neutral-700"} strokeWidth="1.75" />
          <text x="345" y="104" textAnchor="middle" className={`font-mono text-xs font-bold ${output ? "fill-accent" : "fill-neutral-400 dark:fill-neutral-600"}`}>
            {output ? "1" : "0"}
          </text>
        </svg>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Toggle label="A" value={a} onChange={() => setA(!a)} />
          <Toggle label="B" value={b} onChange={() => setB(!b)} disabled={isNot} />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto border border-neutral-900/10 dark:border-white/10">
        <table className="w-full text-center font-mono text-sm">
          <thead>
            <tr className="border-b border-neutral-900/10 text-xs uppercase tracking-widest text-neutral-600 dark:border-white/10 dark:text-neutral-400">
              <th className="px-4 py-2">A</th>
              {!isNot && <th className="px-4 py-2">B</th>}
              <th className="px-4 py-2">{t.outputHeader}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isCurrent = row.a === a && (isNot || row.b === b);
              return (
                <tr
                  key={`${row.a}-${row.b}`}
                  className={isCurrent ? "bg-primary/10 text-primary" : "text-neutral-700 dark:text-neutral-300"}
                >
                  <td className="px-4 py-2">{row.a ? 1 : 0}</td>
                  {!isNot && <td className="px-4 py-2">{row.b ? 1 : 0}</td>}
                  <td className="px-4 py-2 font-semibold">{row.out ? 1 : 0}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
