"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FieldIcon from "./FieldIcon";
import { didYouKnowFacts } from "../data/didYouKnow";
import { didYouKnowFactsEs } from "../data/didYouKnow.es";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";

const LABELS = {
  en: { didYouKnow: "Did you know?", moreOn: "More on", showFact: (n: number) => `Show fact ${n}` },
  es: { didYouKnow: "¿Sabías que?", moreOn: "Más sobre", showFact: (n: number) => `Mostrar dato ${n}` },
};

export default function DidYouKnowTicker() {
  const { language } = useLanguage();
  const t = LABELS[language];
  const displayFacts = language === "es" ? didYouKnowFactsEs : didYouKnowFacts;
  const displayFields = language === "es" ? fieldsEs : fields;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % didYouKnowFacts.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = displayFacts[index];
  const field = displayFields.find((f) => f.slug === current.fieldSlug);

  return (
    <div className="border border-neutral-900/10 p-6 dark:border-white/10 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <FieldIcon slug={current.fieldSlug} className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-0">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.didYouKnow}
          </span>
          <p className="mt-2 text-base leading-relaxed text-neutral-900 dark:text-white">
            {current.fact}
          </p>
          {field && (
            <Link
              href={`/engineering/${field.slug}`}
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              {t.moreOn} {field.name} →
            </Link>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-1.5">
        {displayFacts.map((f, i) => (
          <button
            key={f.fact}
            type="button"
            aria-label={t.showFact(i + 1)}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-4 rounded-full transition-colors ${
              i === index ? "bg-primary" : "bg-neutral-900/15 hover:bg-primary/40 dark:bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
