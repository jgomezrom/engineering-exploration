"use client";

import { useState } from "react";
import { DayInLife } from "../data/types";

export default function DayInTheLife({ dayInLife }: { dayInLife: DayInLife }) {
  const { blocks, reflectionQuestion } = dayInLife;
  const [step, setStep] = useState(0);
  const [reflection, setReflection] = useState("");
  const block = blocks[step];

  return (
    <div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        One illustrative example day, not a guaranteed schedule — real days vary a lot by
        employer, role, and industry.
      </p>

      <div className="mt-5 border border-neutral-900/10 p-6 dark:border-white/10">
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
            ← Earlier
          </button>
          <div className="flex gap-1.5">
            {blocks.map((b, i) => (
              <button
                key={b.time}
                type="button"
                aria-label={`Go to ${b.time}`}
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
            Later →
          </button>
        </div>
      </div>

      <div className="mt-6 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{reflectionQuestion}</h3>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Jot a thought if you want — this isn't saved or sent anywhere, it's just for you."
          rows={3}
          className="mt-3 w-full resize-none border border-neutral-900/10 bg-white p-3 text-sm text-neutral-900 placeholder:text-neutral-600/60 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-400/60"
        />
      </div>
    </div>
  );
}
