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
import { resourceLinksEs } from "../data/translations/resources";
import { useLanguage } from "../context/LanguageContext";

// A circuit-trace style divider — a right-angled line with via nodes at each
// bend — used instead of a plain rule to keep the hero's technical language
// going into the rest of the page.
function CircuitDivider() {
  return (
    <svg
      viewBox="0 0 800 32"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="mt-16 h-8 w-full max-w-3xl text-primary/25 lg:max-w-4xl 2xl:max-w-5xl"
    >
      <path
        d="M0 16H180 M180 16 180 6 260 6 M260 6H400 M400 6V26H540 M540 26 620 26 620 16 H800"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {[180, 400, 540, 620].map((x, i) => (
        <rect key={x} x={x - 3} y={[6, 6, 26, 26][i] - 3} width="6" height="6" className="fill-background stroke-primary/50" strokeWidth="1.5" />
      ))}
      <circle cx="0" cy="16" r="2.5" className="fill-primary/50" />
      <circle cx="800" cy="16" r="2.5" className="fill-primary/50" />
    </svg>
  );
}

export default function HomeContent() {
  const { language } = useLanguage();
  const t = homeTranslations[language];

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

        <span className="mb-4 border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
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

        <CircuitDivider />

        <div className="relative flex w-full max-w-3xl items-center justify-center gap-8 py-2 font-mono text-sm text-neutral-600 dark:text-neutral-400 2xl:max-w-4xl">
          <span className="pointer-events-none absolute -left-3 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-primary/30 lg:block" />
          <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-primary/30 lg:block" />
          <span>{fields.length} {t.fieldsUnit}</span>
          <span className="h-1 w-1 rotate-45 bg-neutral-400" />
          <span>{challenges.length} {t.challengesUnit}</span>
          <span className="h-1 w-1 rotate-45 bg-neutral-400" />
          <span>{t.quizUnit}</span>
        </div>
      </div>

      <FadeIn className="mt-16 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="grid divide-y divide-neutral-900/10 border border-neutral-900/10 dark:divide-white/10 dark:border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              num: "01",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M25 15l-3 8-8 3 3-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              ),
              title: t.step1Title,
              body: t.step1Body.replace("{n}", String(fields.length)),
              cta: t.step1Cta,
              href: "/explore",
            },
            {
              num: "02",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
                  <rect x="10" y="8" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 16h12M14 20h12M14 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: t.step2Title,
              body: t.step2Body,
              cta: t.step2Cta,
              href: "/quiz",
            },
            {
              num: "03",
              icon: (
                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
                  <path
                    d="M27 8a6 6 0 0 0-7.75 7.75L9 26l5 5 10.25-10.25A6 6 0 0 0 32 13l-4 4-3-3 4-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: t.step3Title,
              body: t.step3Body,
              cta: t.step3Cta,
              href: "/challenges",
            },
          ].map((step) => (
            <Link
              key={step.num}
              href={step.href}
              className="group relative flex flex-col items-start gap-3 p-6 text-left transition-colors hover:bg-primary/[0.03] sm:p-8"
            >
              <div className="flex w-full items-center gap-3">
                <span className="font-mono text-xs font-semibold text-primary">{step.num}</span>
                <span className="h-px flex-1 bg-neutral-900/10 transition-colors group-hover:bg-primary/40 dark:bg-white/10" />
              </div>
              {step.icon}
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{step.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{step.body}</p>
              <span className="mt-auto pt-2 text-sm font-medium text-primary">{step.cta}</span>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-2xl text-left">
        <DidYouKnowTicker />
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-4xl border-t border-neutral-900/10 pt-16 text-left lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl dark:border-white/10">
        <span className="mb-4 inline-block border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.deeperBadge}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.deeperTitle}</h2>
        <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {t.deeperBody}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((resource) => {
            const localized = language === "es" ? resourceLinksEs[resource.href] : undefined;
            return (
              <Link key={resource.href} href={resource.href}>
                <Card>
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center border ${
                      resource.accentColor === "accent"
                        ? "border-accent/30 bg-accent/5 text-accent"
                        : "border-primary/30 bg-primary/5 text-primary"
                    }`}
                  >
                    {resource.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                    {localized?.title ?? resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {localized?.description ?? resource.description}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-3xl border-t border-neutral-900/10 pt-16 text-center dark:border-white/10">
        <span className="mb-4 inline-block border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.curiousBadge}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.curiousTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {t.curiousBody}
        </p>
        <div className="mt-8">
          <CuriosityExplorer />
        </div>
      </FadeIn>
    </main>
  );
}
