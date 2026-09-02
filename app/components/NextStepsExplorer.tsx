"use client";

import { useState } from "react";
import Link from "next/link";
import { fields } from "../data/fields";
import { AgeBand, NextSteps } from "../data/types";
import { useAgeBand } from "../context/AgeBandContext";

const AGE_BANDS: AgeBand[] = ["10-12", "13-15", "16-18"];

export default function NextStepsExplorer({ nextSteps }: { nextSteps: NextSteps }) {
  const { ageBand, setAgeBand } = useAgeBand();
  const [selected, setSelected] = useState<AgeBand>(ageBand ?? "13-15");
  const suggestion = nextSteps[selected];
  const relatedField = fields.find((f) => f.slug === suggestion.relatedField);
  const isRemembered = ageBand === selected;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {AGE_BANDS.map((band) => {
          const isSelected = selected === band;
          return (
            <button
              key={band}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(band)}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
              }`}
            >
              Ages {band}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
        {isRemembered ? (
          <>
            Remembering ages {selected} for other pages too, just for this visit —{" "}
            <button
              type="button"
              onClick={() => setAgeBand(null)}
              className="font-medium text-primary hover:underline"
            >
              forget it
            </button>
            .
          </>
        ) : (
          <>
            Not saved anywhere.{" "}
            <button
              type="button"
              onClick={() => setAgeBand(selected)}
              className="font-medium text-primary hover:underline"
            >
              Remember ages {selected} for other pages too
            </button>{" "}
            (just for this visit — nothing is stored beyond your browser tab).
          </>
        )}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            A project to try
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.project}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            A tool to learn
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.tool}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            A club or activity
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.activity}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            A related field to compare
          </h3>
          {relatedField && (
            <Link
              href={`/engineering/${relatedField.slug}`}
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
            >
              {relatedField.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
