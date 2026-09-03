"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { aboutTranslations } from "../data/translations/about";

export default function AboutContent() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {t.heading}
      </h1>

      <div className="mt-8 flex flex-col gap-6 text-neutral-600 dark:text-neutral-400">
        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>
        <p>{t.p4}</p>
        <p>{t.p5}</p>
        <p>
          {t.p6Before}{" "}
          <Link href="/sources" className="text-primary hover:underline">
            {t.sourcesLink}
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          {t.exploreCta}
        </Link>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          {t.quizCta}
        </Link>
      </div>
    </main>
  );
}
