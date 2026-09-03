"use client";

import Link from "next/link";
import FieldIcon from "./FieldIcon";
import FadeIn from "./FadeIn";
import DesignProcessDiagram from "./DesignProcessDiagram";
import ReflectionPrompt from "./ReflectionPrompt";
import BackLink from "./BackLink";
import { challenges } from "../data/challenges";
import { challengesEs } from "../data/challenges.es";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";
import { challengesTranslations, categoryLabels, difficultyLabels } from "../data/translations/challenges";

function Section({ index, title, children }: { index: number; title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <section className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{String(index).padStart(2, "0")}</span>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
        </div>
        <div className="mt-5">{children}</div>
      </section>
    </FadeIn>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="max-w-2xl space-y-4">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function ChallengeDetailContent({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const t = challengesTranslations[language];
  const catLabel = categoryLabels[language];
  const diffLabel = difficultyLabels[language];

  const displayChallenges = language === "es" ? challengesEs : challenges;
  const displayFields = language === "es" ? fieldsEs : fields;
  const challenge = displayChallenges.find((c) => c.slug === slug);

  if (!challenge) return null;

  const field = displayFields.find((f) => f.slug === challenge.field);

  if (!field) return null;

  return (
    <main className="relative mx-auto w-full min-w-0 max-w-3xl px-6 py-16">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <BackLink href="/challenges" labelKey="backToChallenges" />

      <div className="mt-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
        <FieldIcon slug={challenge.field} className="h-10 w-10 text-primary" />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {challenge.title}
      </h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{challenge.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {catLabel[challenge.category]}
        </span>
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {diffLabel[challenge.difficulty]}
        </span>
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {challenge.estimatedTime}
        </span>
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {challenge.approximateCost}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {t.relatedField}{" "}
          <Link href={`/engineering/${field.slug}`} className="font-medium text-primary hover:underline">
            {field.name}
          </Link>
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="print:hidden flex items-center gap-2 border border-neutral-900/10 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-neutral-400"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
            <path d="M6 7.5V3h8v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <rect x="3" y="7.5" width="14" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="6" y="11" width="8" height="5.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {t.printChallenge}
        </button>
      </div>

      <Section index={1} title={t.missionBriefing}>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {t.objectiveLabel}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
              {challenge.objective}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {t.constraintsLabel}
            </h3>
            <div className="mt-2">
              <BulletList items={challenge.constraints} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {t.conceptTesting}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
              {challenge.conceptTaught}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 print:hidden">
              {challenge.conceptSlug && (
                <Link
                  href={`/concepts?concept=${challenge.conceptSlug}`}
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  {t.learnMoreConcept}
                </Link>
              )}
              {challenge.simulationHref && (
                <Link
                  href={challenge.simulationHref}
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  {t.tryInteractiveSimulator}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section index={2} title={t.whatYoullNeed}>
        <BulletList items={challenge.materials} />
        {challenge.safetyNote && (
          <div className="mt-5 flex max-w-2xl gap-3 border border-accent/30 bg-accent/5 p-4 dark:bg-accent/10">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent">
              <path
                d="M10 3.5 2.5 16.5h15L10 3.5Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path d="M10 8.5v4M10 14.5v.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{challenge.safetyNote}</p>
          </div>
        )}
      </Section>

      <Section index={3} title={t.instructionsLabel}>
        <NumberedList items={challenge.instructions} />
      </Section>

      <Section index={4} title={t.howToMeasure}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {challenge.measureResults}
        </p>
      </Section>

      <Section index={5} title={t.skillsPractice}>
        <BulletList items={challenge.skillsLearned} />
      </Section>

      <Section index={6} title={t.ifDoesntWork}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.ifDoesntWorkBody}</p>
        <div className="mt-6 print:hidden">
          <DesignProcessDiagram compact />
        </div>
        <Link
          href="/design-process"
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline print:hidden"
        >
          {t.seeFullProcess}
        </Link>
      </Section>

      <Section index={7} title={t.reflect}>
        <ReflectionPrompt question={challenge.reflectionPrompt} />
      </Section>
    </main>
  );
}
