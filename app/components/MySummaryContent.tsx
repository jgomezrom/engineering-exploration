"use client";

import Link from "next/link";
import Card from "./Card";
import FieldIcon from "./FieldIcon";
import { useExploration } from "../hooks/useExploration";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";
import { mySummaryTranslations } from "../data/translations/mySummary";

export default function MySummaryContent() {
  const { language } = useLanguage();
  const t = mySummaryTranslations[language];
  const { hydrated, bookmarks, visitedCount, streakDays, lastQuizResult } = useExploration();
  const displayFields = language === "es" ? fieldsEs : fields;

  const bookmarkedFields = displayFields.filter((f) => bookmarks.includes(f.slug));
  const quizField = lastQuizResult ? displayFields.find((f) => f.slug === lastQuizResult.slug) : undefined;
  const hasAnything = bookmarkedFields.length > 0 || visitedCount > 0 || lastQuizResult !== null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      {hydrated && (
        <button
          type="button"
          onClick={() => window.print()}
          className="print:hidden mt-6 flex items-center gap-2 border border-neutral-900/10 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-neutral-400"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
            <path d="M6 7.5V3h8v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <rect x="3" y="7.5" width="14" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="6" y="11" width="8" height="5.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {t.printSummary}
        </button>
      )}

      {!hydrated ? null : !hasAnything ? (
        <div className="mt-10 border border-neutral-900/10 p-8 text-center dark:border-white/10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.emptyHeading}</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{t.emptyBody}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
              {t.emptyQuizLink}
            </Link>
            <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
              {t.emptyExploreLink}
            </Link>
          </div>
        </div>
      ) : (
        <>
          {(visitedCount > 0 || streakDays > 0) && (
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                {t.fieldsExplored(visitedCount, displayFields.length)}
              </span>
              {streakDays > 0 && (
                <span className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  {t.streakDays(streakDays)}
                </span>
              )}
            </div>
          )}

          {lastQuizResult && quizField && (
            <div className="mt-10 border border-neutral-900/10 p-6 dark:border-white/10">
              <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                {t.quizHeading}
              </h2>
              <div className="mt-4 flex items-center gap-4">
                <FieldIcon slug={quizField.slug} className="h-10 w-10 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{quizField.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t.quizMatch(lastQuizResult.percentage)} · {t.quizTakenOn} {lastQuizResult.date}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 print:hidden">
                <Link href={`/engineering/${quizField.slug}`} className="text-sm font-medium text-primary hover:underline">
                  {quizField.name} →
                </Link>
                <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
                  {t.quizRetake}
                </Link>
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {t.bookmarksHeading}
            </h2>
            {bookmarkedFields.length === 0 ? (
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{t.noBookmarks}</p>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {bookmarkedFields.map((field) => (
                  <Link key={field.slug} href={`/engineering/${field.slug}`}>
                    <Card>
                      <FieldIcon slug={field.slug} className="h-8 w-8 text-primary" />
                      <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{field.name}</h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{field.tagline}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}
