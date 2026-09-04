"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { concepts } from "../data/concepts";
import { conceptsEs } from "../data/concepts.es";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { fieldStubs } from "../data/fieldStubs";
import { fieldStubsEs } from "../data/fieldStubs.es";
import { ConceptCategory } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { conceptsTranslations, categoryLabels } from "../data/translations/concepts";

const CATEGORY_ORDER: ConceptCategory[] = ["Mechanical", "Electrical", "Structures & Materials", "Software & Systems"];

export default function ConceptsExplorer() {
  const { language } = useLanguage();
  const t = conceptsTranslations[language];
  const labels = categoryLabels[language];
  const displayConcepts = language === "es" ? conceptsEs : concepts;
  const fieldPool =
    language === "es" ? [...fieldsEs, ...fields, ...fieldStubsEs, ...fieldStubs] : [...fields, ...fieldStubs];
  const searchParams = useSearchParams();
  const requested = searchParams.get("concept");
  const initialSlug = concepts.some((c) => c.slug === requested) ? requested! : concepts[0].slug;
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);
  const selected = displayConcepts.find((c) => c.slug === selectedSlug)!;

  return (
    <div>
      <div className="space-y-6">
        {CATEGORY_ORDER.map((category) => {
          const inCategory = displayConcepts.filter((c) => c.category === category);
          if (inCategory.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                {labels[category]}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {inCategory.map((concept) => {
                  const isSelected = concept.slug === selectedSlug;
                  return (
                    <button
                      key={concept.slug}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedSlug(concept.slug)}
                      className={`border px-3 py-1.5 text-sm font-medium transition-colors ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
                      }`}
                    >
                      {concept.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border border-neutral-900/10 p-6 dark:border-white/10">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {labels[selected.category]}
        </span>
        <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">{selected.name}</h2>
        <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">{selected.shortDefinition}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {selected.explanation}
        </p>

        <div className="mt-5 border-l-2 border-primary/40 pl-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.inRealLife}
          </span>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {selected.realWorldExample}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.showsUpIn}
          </span>
          {selected.relatedFields.map((slug) => {
            const field = fieldPool.find((f) => f.slug === slug);
            if (!field) return null;
            return (
              <Link
                key={slug}
                href={`/engineering/${slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {field.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
