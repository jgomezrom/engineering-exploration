"use client";

import BackLink from "./BackLink";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { opportunitiesTranslations } from "../data/translations/opportunities";

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

export default function OpportunitiesContent() {
  const { language } = useLanguage();
  const t = opportunitiesTranslations[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section1Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section1Intro}</p>
        <div className="mt-4">
          <BulletList
            items={[
              t.searchBullet1,
              t.searchBullet2,
              t.searchBullet3,
              t.searchBullet4,
              t.searchBullet5,
              t.searchBullet6,
              t.searchBullet7,
            ]}
          />
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section2Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section2Body}</p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section3Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section3Intro}</p>
        <div className="mt-4">
          <BulletList
            items={[t.notMuchBullet1, t.notMuchBullet2, t.notMuchBullet3, t.notMuchBullet4]}
          />
        </div>
      </FadeIn>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <BackLink href="/explore" labelKey="backToFields" />
      </div>
    </main>
  );
}
