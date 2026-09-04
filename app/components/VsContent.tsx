"use client";

import Button from "./Button";
import FadeIn from "./FadeIn";
import { careerComparisons } from "../data/careerComparisons";
import { careerComparisonsEs } from "../data/careerComparisons.es";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";
import { vsTranslations } from "../data/translations/vs";

function RoleCard({
  title,
  description,
  typicalPath,
  typicalPathLabel,
}: {
  title: string;
  description: string;
  typicalPath: string;
  typicalPathLabel: string;
}) {
  return (
    <div className="border border-neutral-900/10 p-5 dark:border-white/10">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        {typicalPathLabel}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{typicalPath}</p>
    </div>
  );
}

export default function VsContent() {
  const { language } = useLanguage();
  const t = vsTranslations[language];
  const comparisons = language === "es" ? careerComparisonsEs : careerComparisons;
  const fieldPool = language === "es" ? [...fieldsEs, ...fields] : fields;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-10 space-y-14">
        {comparisons.map((comparison) => {
          const field = fieldPool.find((f) => f.slug === comparison.relatedField);
          return (
            <FadeIn key={comparison.slug} className="border-t border-neutral-900/10 pt-10 dark:border-white/10">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{comparison.title}</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <RoleCard {...comparison.engineerRole} typicalPathLabel={t.typicalPath} />
                <RoleCard {...comparison.otherRole} typicalPathLabel={t.typicalPath} />
              </div>

              <div className="mt-5 border-l-2 border-primary/40 pl-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                  {t.realDifference}
                </span>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {comparison.keyDifference}
                </p>
              </div>

              {field && (
                <div className="mt-5">
                  <Button href={`/engineering/${field.slug}`} variant="secondary">
                    {t.moreOn} {field.name} →
                  </Button>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </main>
  );
}
