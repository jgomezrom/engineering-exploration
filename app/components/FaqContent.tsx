"use client";

import FaqAccordion from "./FaqAccordion";
import BackLink from "./BackLink";
import { faqItems } from "../data/faq";
import { faqItemsEs } from "../data/faq.es";
import { useLanguage } from "../context/LanguageContext";
import { faqTranslations } from "../data/translations/faq";

export default function FaqContent() {
  const { language } = useLanguage();
  const t = faqTranslations[language];
  const items = language === "es" ? faqItemsEs : faqItems;

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
        <FaqAccordion items={items} />
      </div>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <BackLink href="/explore" labelKey="backToFields" />
      </div>
    </main>
  );
}
