"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { notFoundTranslations } from "../../data/translations/notFound";

export default function FieldNotFound() {
  const { language } = useLanguage();
  const t = notFoundTranslations[language];

  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{t.fieldHeading}</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">{t.fieldBody}</p>
      <Link
        href="/explore"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        {t.exploreFields}
      </Link>
    </main>
  );
}
