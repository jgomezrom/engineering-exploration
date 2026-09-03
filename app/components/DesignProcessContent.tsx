"use client";

import DesignProcessDiagram from "./DesignProcessDiagram";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { designProcessTranslations } from "../data/translations/designProcess";

export default function DesignProcessContent() {
  const { language } = useLanguage();
  const t = designProcessTranslations[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-10 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>{t.body}</p>
      </div>

      <FadeIn className="mt-10 border border-neutral-900/10 p-6 dark:border-white/10 sm:p-10">
        <DesignProcessDiagram />
      </FadeIn>
    </main>
  );
}
