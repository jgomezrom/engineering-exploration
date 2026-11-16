"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import TrussGame from "./TrussGame";
import { useLanguage } from "../context/LanguageContext";
import { trussGameTranslations } from "../data/translations/trussGame";
import { simulationsHubTranslations } from "../data/translations/simulationsHub";

export default function TrussGameContent() {
  const { language } = useLanguage();
  const t = trussGameTranslations[language];
  const hub = simulationsHubTranslations[language];

  const paragraph = "mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400";
  const section = "mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10";
  const related = "text-sm font-medium text-primary hover:underline";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/simulations" className="text-sm font-medium text-primary hover:underline">
        {hub.backToSimulations}
      </Link>

      <span className="mb-5 mt-6 inline-flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary before:content-['']">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        {t.introBefore}{" "}
        <Link href="/challenges/spaghetti-bridge-load-test" className="font-medium text-primary hover:underline">
          {t.challengeLink}
        </Link>{" "}
        {t.introAfter}
      </p>

      <div className="mt-8">
        <TrussGame />
      </div>

      <FadeIn className={section}>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.howHeading}</h2>
        <p className={paragraph}>{t.howP1}</p>
        <p className={paragraph}>{t.howP2}</p>
        <p className="mt-4 max-w-2xl border-l-2 border-primary/40 pl-4 font-mono text-sm text-neutral-900 dark:text-white">
          {t.formula}
        </p>
        <p className={paragraph}>{t.howP3}</p>
        <p className={paragraph}>{t.howP4}</p>
      </FadeIn>

      <FadeIn className={section}>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.limitsHeading}</h2>
        <p className={paragraph}>{t.limitsIntro}</p>
        <ul className="mt-4 max-w-2xl space-y-3">
          {t.limits.map((item) => (
            <li key={item} className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className={section}>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.relatedHeading}</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/simulations/beam-deflection" className={related}>{t.relatedBeam}</Link>
          </li>
          <li>
            <Link href="/concepts?concept=structures" className={related}>{t.relatedConcept}</Link>
          </li>
          <li>
            <Link href="/engineering/structural-engineering" className={related}>{t.relatedStructural}</Link>
          </li>
          <li>
            <Link href="/engineering/civil-engineering" className={related}>{t.relatedCivil}</Link>
          </li>
        </ul>
      </FadeIn>
    </main>
  );
}
