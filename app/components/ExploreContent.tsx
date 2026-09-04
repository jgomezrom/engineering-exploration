"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./Card";
import FadeIn from "./FadeIn";
import FieldIcon from "./FieldIcon";
import BookmarkedFields from "./BookmarkedFields";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { fieldStubs } from "../data/fieldStubs";
import { fieldStubsEs } from "../data/fieldStubs.es";
import { useLanguage } from "../context/LanguageContext";
import { exploreTranslations } from "../data/translations/explore";

export default function ExploreContent() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = exploreTranslations[language];
  const displayFields = language === "es" ? fieldsEs : fields;
  const displayStubs = language === "es" ? fieldStubsEs : fieldStubs;

  function goToRandomField() {
    const pick = displayFields[Math.floor(Math.random() * displayFields.length)];
    router.push(`/engineering/${pick.slug}`);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">{t.heading}</h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        {t.introBefore}{" "}
        <Link href="/compare" className="font-medium text-primary hover:underline">
          {t.compareLink} {fields.length}
        </Link>{" "}
        {t.introAfter}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={goToRandomField}
          className="inline-flex items-center gap-2 border border-neutral-900/10 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-neutral-400"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
            <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="7" cy="7" r="1.2" fill="currentColor" />
            <circle cx="13" cy="7" r="1.2" fill="currentColor" />
            <circle cx="10" cy="10" r="1.2" fill="currentColor" />
            <circle cx="7" cy="13" r="1.2" fill="currentColor" />
            <circle cx="13" cy="13" r="1.2" fill="currentColor" />
          </svg>
          {t.surpriseMe}
        </button>
        <Link href="/my-summary" className="text-sm font-medium text-primary hover:underline">
          {t.summaryLink}
        </Link>
      </div>

      <div className="mt-10">
        <BookmarkedFields
          allFields={[...displayFields, ...displayStubs].map((f) => ({ slug: f.slug, name: f.name, tagline: f.tagline }))}
        />
      </div>

      <FadeIn className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayFields.map((field) => (
          <Link key={field.slug} href={`/engineering/${field.slug}`}>
            <Card>
              <FieldIcon slug={field.slug} className="h-10 w-10 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{field.name}</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{field.tagline}</p>
            </Card>
          </Link>
        ))}
      </FadeIn>

      {displayStubs.length > 0 && (
        <FadeIn className="mt-16 border-t border-neutral-900/10 pt-10 dark:border-white/10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.moreFieldsHeading}</h2>
          <p className="mt-1 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">{t.moreFieldsIntro}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayStubs.map((stub) => (
              <Link key={stub.slug} href={`/engineering/${stub.slug}`}>
                <Card>
                  <div className="flex items-center justify-between">
                    <FieldIcon slug={stub.slug} className="h-8 w-8 text-primary" />
                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                      {t.briefOverview}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{stub.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{stub.tagline}</p>
                </Card>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}
    </main>
  );
}
