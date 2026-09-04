"use client";

import Link from "next/link";
import LogicGateSimulator from "./LogicGateSimulator";
import CopyLinkButton from "./CopyLinkButton";
import FadeIn from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { logicGateSimulationTranslations } from "../data/translations/logicGateSimulation";
import { simulationsHubTranslations } from "../data/translations/simulationsHub";

export default function LogicGateContent() {
  const { language } = useLanguage();
  const t = logicGateSimulationTranslations[language];
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
        <Link href="/challenges/binary-counter" className="font-medium text-primary hover:underline">
          {t.challengeLink}
        </Link>
        {t.introAfter}
      </p>

      <div className="mt-4">
        <CopyLinkButton />
      </div>

      <div className="mt-6">
        <LogicGateSimulator />
      </div>

      <FadeIn className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.mathHeading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP1}</p>
        <p className="mt-4 max-w-2xl font-medium text-neutral-900 dark:text-white">{t.mathP2Title}</p>
        <ul className="mt-2 max-w-2xl space-y-1.5 border-l-2 border-primary/40 pl-4 font-mono text-sm text-neutral-900 dark:text-white">
          <li>{t.andRule}</li>
          <li>{t.orRule}</li>
          <li>{t.xorRule}</li>
          <li>{t.notRule}</li>
        </ul>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP3}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.mathP4}</p>
        <Link href="/concepts?concept=algorithms" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          {t.conceptLink}
        </Link>
      </FadeIn>
    </main>
  );
}
