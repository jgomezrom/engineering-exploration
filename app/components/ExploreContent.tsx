"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import FadeIn from "./FadeIn";
import FieldIcon from "./FieldIcon";
import BookmarkedFields from "./BookmarkedFields";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";
import { exploreTranslations } from "../data/translations/explore";

export default function ExploreContent() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = exploreTranslations[language];
  const displayFields = language === "es" ? fieldsEs : fields;

  function goToRandomField() {
    const pick = displayFields[Math.floor(Math.random() * displayFields.length)];
    router.push(`/engineering/${pick.slug}`);
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-5 inline-flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary before:content-['']">
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
          allFields={displayFields.map((f) => ({ slug: f.slug, name: f.name, tagline: f.tagline }))}
        />
      </div>

      {/* A flush catalog matrix rather than floating cards: the container
          draws the top/left edges and each cell draws its own bottom/right,
          so every rule is a single hairline with no doubling at the seams. */}
      <FadeIn className="mt-10 border-l border-t border-neutral-900/10 dark:border-white/10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {displayFields.map((field, i) => (
            <Link
              key={field.slug}
              href={`/engineering/${field.slug}`}
              className="group flex flex-col border-b border-r border-neutral-900/10 p-6 transition-colors hover:bg-primary/[0.04] dark:border-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <FieldIcon slug={field.slug} className="h-9 w-9 flex-shrink-0 text-primary" />
                <span className="font-mono text-xs text-neutral-300 transition-colors group-hover:text-primary dark:text-neutral-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{field.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{field.tagline}</p>
            </Link>
          ))}
        </div>
      </FadeIn>
    </main>
  );
}
