"use client";

import { useState } from "react";
import { DayInLife } from "../data/types";
import ReflectionPrompt from "./ReflectionPrompt";
import { useLanguage } from "../context/LanguageContext";

const LABELS = {
  en: {
    intro: "One illustrative example day, not a guaranteed schedule — real days vary a lot by employer, role, and industry.",
    earlier: "← Earlier",
    later: "Later →",
    goTo: "Go to",
  },
  es: {
    intro: "Un día de ejemplo ilustrativo, no un horario garantizado — los días reales varían mucho según el empleador, el puesto y la industria.",
    earlier: "← Antes",
    later: "Después →",
    goTo: "Ir a",
  },
};

export default function DayInTheLife({ dayInLife }: { dayInLife: DayInLife }) {
  const { blocks, reflectionQuestion } = dayInLife;
  const [step, setStep] = useState(0);
  const block = blocks[step];
  const { language } = useLanguage();
  const t = LABELS[language];

  return (
    <div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-5 border border-neutral-900/10 p-6 print:hidden dark:border-white/10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-primary">{block.time}</span>
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {step + 1} / {blocks.length}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
          {block.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {block.detail}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="border border-neutral-900/10 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-neutral-400"
          >
            {t.earlier}
          </button>
          <div className="flex gap-1.5">
            {blocks.map((b, i) => (
              <button
                key={b.time}
                type="button"
                aria-label={`${t.goTo} ${b.time}`}
                aria-current={i === step}
                onClick={() => setStep(i)}
                className={`h-1.5 w-4 rounded-full transition-colors ${
                  i === step ? "bg-primary" : "bg-neutral-900/15 hover:bg-primary/40 dark:bg-white/15"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(blocks.length - 1, s + 1))}
            disabled={step === blocks.length - 1}
            className="border border-neutral-900/10 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-neutral-400"
          >
            {t.later}
          </button>
        </div>
      </div>

      {/* The stepper above only ever shows one block on paper — print all of
          them, in order, so nothing gets lost when this page is printed. */}
      <div className="hidden print:block print:space-y-3">
        {blocks.map((b) => (
          <div key={b.time} className="border border-neutral-300 p-3">
            <span className="font-mono text-sm font-semibold">{b.time} — {b.label}</span>
            <p className="mt-1 text-sm leading-relaxed">{b.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ReflectionPrompt question={reflectionQuestion} />
      </div>
    </div>
  );
}
