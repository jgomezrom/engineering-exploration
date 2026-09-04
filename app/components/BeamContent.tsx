"use client";

import Link from "next/link";
import BeamSimulator from "./BeamSimulator";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { beamSimulationTranslations } from "../data/translations/beamSimulation";
import { simulationsHubTranslations } from "../data/translations/simulationsHub";

export default function BeamContent() {
  const { language } = useLanguage();
  const t = beamSimulationTranslations[language];
  const hub = simulationsHubTranslations[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/simulations" className="text-sm font-medium text-primary hover:underline">
        {hub.backToSimulations}
      </Link>

      <span className="mb-4 mt-6 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
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

      <div className="mt-10">
        <BeamSimulator />
      </div>

      <FadeIn className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.mathHeading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP1Before}</p>
        <p className="mt-4 max-w-2xl border-l-2 border-primary/40 pl-4 font-mono text-sm text-neutral-900 dark:text-white">
          {t.formula}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP2}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP3}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP4}</p>
        <Link href="/concepts?concept=stress-strain" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          {t.conceptLink}
        </Link>
      </FadeIn>
    </main>
  );
}
