"use client";

import Link from "next/link";
import { ReactNode } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { parentsAndTeachersTranslations } from "../data/translations/parentsAndTeachers";

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="max-w-2xl space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ParentsAndTeachersContent() {
  const { language } = useLanguage();
  const t = parentsAndTeachersTranslations[language];

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
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.section1P1Before}{" "}
          <Link href="/about" className="text-primary hover:underline">
            {t.aboutLink}
          </Link>
          {t.section1P1Mid}{" "}
          <Link href="/math" className="text-primary hover:underline">
            {t.courseRoadmapLink}
          </Link>{" "}
          {t.section1P1After}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.section1P2Before}{" "}
          <Link href="/sources" className="text-primary hover:underline">
            {t.sourcesLink}
          </Link>{" "}
          {t.section1P2After}
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section2Heading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section2P1}</p>
        <div className="mt-4">
          <BulletList
            items={[
              t.bullet1,
              t.bullet2,
              t.bullet3,
              t.bullet4,
              <>
                {t.bullet5Before}{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t.vercelLink}
                </a>
                {t.bullet5After}
              </>,
              t.bullet6,
            ]}
          />
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section2P2}</p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section3Heading}</h2>
        <div className="mt-4">
          <BulletList items={[t.useBullet1, t.useBullet2, t.useBullet3, t.useBullet4]} />
        </div>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-4 border-t border-neutral-900/10 pt-14 sm:flex-row dark:border-white/10">
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          {t.exploreCta}
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          {t.resourcesCta}
        </Link>
      </div>
    </main>
  );
}
