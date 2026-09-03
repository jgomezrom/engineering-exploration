"use client";

import Link from "next/link";
import Button from "./Button";
import Card from "./Card";
import FieldIcon from "./FieldIcon";
import CuriosityExplorer from "./CuriosityExplorer";
import DidYouKnowTicker from "./DidYouKnowTicker";
import ExplorationStrip from "./ExplorationStrip";
import FadeIn from "./FadeIn";
import { fields } from "../data/fields";
import { challenges } from "../data/challenges";
import { resourceLinks } from "../data/resourceLinks";
import { homeTranslations } from "../data/translations/home";
import { useLanguage } from "../context/LanguageContext";

function JourneyArrow() {
  return (
    <div className="hidden items-center justify-center sm:flex">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 text-primary/40">
        <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function HomeContent() {
  const { language } = useLanguage();
  const t = homeTranslations[language];
  const isTranslated = language !== "en";

  return (
    <main className="relative flex flex-col items-center px-6 py-24 text-center">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <div className="relative flex w-full flex-col items-center">
        <div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="mechanical-engineering" className="h-8 w-8 text-primary/40" />
          <span className="-rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.sideLabelLeft}
          </span>
        </div>
        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="electrical-engineering" className="h-8 w-8 text-primary/40" />
          <span className="rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            {String(fields.length).padStart(2, "0")} {t.fieldsUnit} · ∞
          </span>
        </div>

        <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {t.badge}
        </span>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:max-w-3xl lg:text-6xl 2xl:text-7xl">
          {t.heroPrefix}
          <span className="text-accent">{t.heroHighlight}</span>
          {t.heroSuffix}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400 lg:max-w-2xl lg:text-xl 2xl:max-w-3xl">
          {t.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/explore" variant="primary">
            {t.exploreCta}
          </Button>
          <Button href="/quiz" variant="secondary">
            {t.quizCta}
          </Button>
        </div>

        <ExplorationStrip totalFields={fields.length} />

        <div className="mt-16 hidden w-full max-w-3xl items-center justify-center gap-8 border-y border-neutral-900/10 py-6 font-mono text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-400 lg:flex 2xl:max-w-4xl">
          <span>{fields.length} {t.fieldsUnit}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>{challenges.length} {t.challengesUnit}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>{t.quizUnit}</span>
        </div>
      </div>

      <div className="mt-12 grid w-full max-w-4xl items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr] lg:max-w-5xl lg:gap-4 xl:max-w-6xl 2xl:max-w-7xl">
        <FadeIn delay={0}>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">01</span>
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mt-2 h-8 w-8 text-primary">
              <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
              <path d="M25 15l-3 8-8 3 3-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{t.step1Title}</h2>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              {t.step1Body.replace("{n}", String(fields.length))}
            </p>
            <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
              {t.step1Cta}
            </Link>
          </Card>
        </FadeIn>

        <JourneyArrow />

        <FadeIn delay={100}>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">02</span>
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mt-2 h-8 w-8 text-primary">
              <rect x="10" y="8" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 16h12M14 20h12M14 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{t.step2Title}</h2>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">{t.step2Body}</p>
            <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
              {t.step2Cta}
            </Link>
          </Card>
        </FadeIn>

        <JourneyArrow />

        <FadeIn delay={200}>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">03</span>
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mt-2 h-8 w-8 text-primary">
              <path
                d="M27 8a6 6 0 0 0-7.75 7.75L9 26l5 5 10.25-10.25A6 6 0 0 0 32 13l-4 4-3-3 4-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{t.step3Title}</h2>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">{t.step3Body}</p>
            <Link href="/challenges" className="text-sm font-medium text-primary hover:underline">
              {t.step3Cta}
            </Link>
          </Card>
        </FadeIn>
      </div>

      <FadeIn className="mt-20 w-full max-w-2xl text-left">
        <DidYouKnowTicker />
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-4xl border-t border-neutral-900/10 pt-16 text-left lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl dark:border-white/10">
        <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {t.deeperBadge}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.deeperTitle}</h2>
        <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {t.deeperBody} {isTranslated && <span className="italic">{t.deeperNote}</span>}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((resource) => (
            <Link key={resource.href} href={resource.href}>
              <Card>
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${
                    resource.accentColor === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                  }`}
                >
                  {resource.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{resource.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-3xl border-t border-neutral-900/10 pt-16 text-center dark:border-white/10">
        <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {t.curiousBadge}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.curiousTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {t.curiousBody} {isTranslated && <span className="italic">{t.deeperNote}</span>}
        </p>
        <div className="mt-8">
          <CuriosityExplorer />
        </div>
      </FadeIn>
    </main>
  );
}
