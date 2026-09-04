"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { notFoundTranslations } from "./data/translations/notFound";

export default function NotFound() {
  const { language } = useLanguage();
  const t = notFoundTranslations[language];

  return (
    <main className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <span className="mb-4 border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
        {t.badge}
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
        {t.heading}
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">{t.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center border-b-[3px] border-primary-dark bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary-dark active:translate-y-[2px]"
        >
          {t.goHome}
        </Link>
        <Link
          href="/explore"
          className="inline-flex items-center justify-center border border-b-[3px] border-neutral-900/15 px-6 py-3 font-medium text-neutral-900 transition-all hover:border-primary/50 hover:text-primary active:translate-y-[2px] dark:border-white/15 dark:text-white"
        >
          {t.exploreFields}
        </Link>
      </div>
    </main>
  );
}
