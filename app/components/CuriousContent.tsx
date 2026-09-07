"use client";

import CuriosityExplorer from "./CuriosityExplorer";
import { useLanguage } from "../context/LanguageContext";
import { curiousTranslations } from "../data/translations/curious";

export default function CuriousContent() {
  const { language } = useLanguage();
  const t = curiousTranslations[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-5 inline-flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary before:content-['']">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-10">
        <CuriosityExplorer />
      </div>
    </main>
  );
}
