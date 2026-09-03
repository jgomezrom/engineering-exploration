"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import FieldIcon from "./FieldIcon";
import InterestIcon from "./InterestIcon";
import { fields } from "../data/fields";
import { interests } from "../data/interests";

export default function CuriosityExplorer() {
  const [selected, setSelected] = useState<string | null>(null);

  const visibleInterests = interests.filter((interest) => interest.fields.length > 0);
  const selectedInterest = visibleInterests.find((interest) => interest.slug === selected);
  const matchedFields = selectedInterest
    ? fields.filter((field) => selectedInterest.fields.includes(field.slug))
    : [];

  return (
    <div className="border border-neutral-900/10 p-6 text-left sm:p-8 dark:border-white/10">
      <div className="flex flex-wrap justify-center gap-2.5 sm:justify-start">
        {visibleInterests.map((interest, index) => {
          const isSelected = selected === interest.slug;
          const isAccent = index % 2 === 1;
          return (
            <button
              key={interest.slug}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(isSelected ? null : interest.slug)}
              className={`flex items-center gap-2 border py-1.5 pl-1.5 pr-4 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
              }`}
            >
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                  isAccent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}
              >
                <InterestIcon slug={interest.slug} className="h-3.5 w-3.5" />
              </span>
              {interest.label}
            </button>
          );
        })}
      </div>

      {selectedInterest ? (
        <div className="mt-8 border-t border-neutral-900/10 pt-8 dark:border-white/10">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            Fields connected to {selectedInterest.label}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {matchedFields.map((field) => (
              <Link key={field.slug} href={`/engineering/${field.slug}`}>
                <Card>
                  <div className="flex items-center gap-3">
                    <FieldIcon slug={field.slug} className="h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">
                        {field.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {field.tagline}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-6 border-t border-neutral-900/10 pt-6 text-center text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400 sm:text-left">
          Pick one above to see what it actually connects to.
        </p>
      )}
    </div>
  );
}
