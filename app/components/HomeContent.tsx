"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
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

// The page is laid out like a drawing sheet rather than a stack of centered
// marketing sections: a bordered sheet for the hero with a title block in the
// corner, then rule-partitioned sections numbered like drawing sections.
// Section markers are drafting notation (SEC. 01) and stay untranslated, same
// convention as FIG. captions elsewhere in the site.
function SectionRule({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs font-medium text-primary">SEC. {index}</span>
      <span className="h-px flex-1 bg-neutral-900/15 dark:bg-white/15" />
      <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{label}</span>
    </div>
  );
}

// A circuit-trace style divider — a right-angled line with via nodes at each
// bend — used instead of a plain rule to keep the hero's technical language
// going into the rest of the page.
function CircuitDivider() {
  return (
    <svg
      viewBox="0 0 800 32"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-8 w-full text-primary/25"
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const bracketClass = (edge: string) =>
    `pointer-events-none absolute h-6 w-6 border-primary transition-all duration-700 ease-out motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${edge} ${
      mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
    }`;

  const steps = [
    { num: "01", title: t.step1Title, body: t.step1Body.replace("{n}", String(fields.length)), cta: t.step1Cta, href: "/explore", slug: "mechanical-engineering" as const },
    { num: "02", title: t.step2Title, body: t.step2Body, cta: t.step2Cta, href: "/quiz", slug: "electrical-engineering" as const },
    { num: "03", title: t.step3Title, body: t.step3Body, cta: t.step3Cta, href: "/challenges", slug: "civil-engineering" as const },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-16">
      {/* ── Hero, drawn as a sheet ─────────────────────────────────── */}
      <section className="relative border border-neutral-900/15 dark:border-white/15">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(var(--school-primary-rgb, 13, 128, 135), 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--school-primary-rgb, 13, 128, 135), 0.10) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className={bracketClass("left-2 top-2 origin-top-left border-l-2 border-t-2")} style={{ transitionDelay: "0ms" }} />
        <span className={bracketClass("right-2 top-2 origin-top-right border-r-2 border-t-2")} style={{ transitionDelay: "80ms" }} />
        <span className={bracketClass("bottom-2 left-2 origin-bottom-left border-b-2 border-l-2")} style={{ transitionDelay: "160ms" }} />
        <span className={bracketClass("bottom-2 right-2 origin-bottom-right border-b-2 border-r-2")} style={{ transitionDelay: "240ms" }} />

        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14 lg:p-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">{t.badge}</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.heroPrefix}
              {/* The key noun switches to the mono face — a technical term
                  called out mid-sentence. Sized down slightly since mono runs
                  optically larger and much wider than the sans at the same
                  px, which would otherwise force an extra line on mobile. */}
              <span className="relative inline-block whitespace-nowrap font-mono text-[0.88em] tracking-tight">
                {t.heroHighlight}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[4px] w-full bg-primary" />
              </span>
              {t.heroSuffix}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">{t.subtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/explore" variant="primary">
                {t.exploreCta}
              </Button>
              <Button href="/quiz" variant="secondary">
                {t.quizCta}
              </Button>
            </div>

            <ExplorationStrip totalFields={fields.length} />
          </div>

          {/* Title block — the boxed spec table in the corner of a drawing */}
          <div className="lg:self-end">
            <div className="border border-neutral-900/20 bg-background/70 backdrop-blur-[1px] dark:border-white/20">
              <div className="flex items-center gap-2 border-b border-neutral-900/20 px-4 py-2.5 dark:border-white/20">
                <FieldIcon slug="mechanical-engineering" className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="truncate font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-900 dark:text-white">
                  {t.sideLabelLeft}
                </span>
              </div>
              <dl className="divide-y divide-neutral-900/15 dark:divide-white/15">
                {[
                  { k: t.fieldsUnit, v: String(fields.length).padStart(2, "0") },
                  { k: t.challengesUnit, v: String(challenges.length).padStart(2, "0") },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between gap-3 px-4 py-2.5">
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{row.k}</dt>
                    <dd className="font-mono text-lg font-medium leading-none text-neutral-900 dark:text-white">{row.v}</dd>
                  </div>
                ))}
                {/* quizUnit is a single phrase ("5-MIN QUIZ") that already
                    carries its own value, so it runs as a full-width note row
                    rather than being split into a label/value pair. */}
                <div className="px-4 py-2.5">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {t.quizUnit}
                  </dt>
                </div>
              </dl>
            </div>
            <p className="mt-2 text-right font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              FIG. 01
            </p>
          </div>
        </div>
      </section>

      <div className="mt-14">
        <CircuitDivider />
      </div>

      {/* ── Steps, as a numbered procedure list ────────────────────── */}
      <FadeIn as="section" className="mt-14">
        <SectionRule index="01" label={t.stepsBadge} />
        <ol className="mt-6 border-t border-neutral-900/10 dark:border-white/10">
          {steps.map((step) => (
            <li key={step.num}>
              <Link
                href={step.href}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-neutral-900/10 py-6 transition-colors hover:bg-primary/[0.04] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-8 dark:border-white/10"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-primary/30 bg-primary/5 font-mono text-sm font-medium text-primary transition-colors group-hover:border-primary/60">
                  {step.num}
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{step.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{step.body}</p>
                </div>
                <span className="col-start-2 font-mono text-xs font-medium text-primary sm:col-start-3 sm:whitespace-nowrap">
                  {step.cta}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </FadeIn>

      {/* ── Did you know ───────────────────────────────────────────── */}
      <FadeIn as="section" className="mt-20">
        <div className="max-w-2xl">
          <DidYouKnowTicker />
        </div>
      </FadeIn>

      {/* ── Resource index ─────────────────────────────────────────── */}
      <FadeIn as="section" className="mt-20">
        <SectionRule index="02" label={t.deeperBadge} />
        <div className="mt-6 grid gap-x-12 gap-y-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/* min-w-0 on both grid children: grid items default to
              min-width:auto, so the index's nowrap rows would otherwise force
              the column wider than the viewport on narrow screens. */}
          <div className="min-w-0 lg:sticky lg:top-8 lg:self-start lg:pb-8">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.deeperTitle}</h2>
            <p className="mt-3 max-w-md text-neutral-600 dark:text-neutral-400">{t.deeperBody}</p>
          </div>

          <ul className="mt-6 min-w-0 border-t border-neutral-900/10 lg:mt-0 dark:border-white/10">
            {resourceLinks.map((resource) => {
              const localized = language === "es" ? resourceLinksEs[resource.href] : undefined;
              return (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="group flex items-center gap-4 border-b border-neutral-900/10 py-3 transition-colors hover:bg-primary/[0.04] dark:border-white/10"
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-colors ${
                        resource.accentColor === "accent"
                          ? "border-accent/30 bg-accent/5 text-accent"
                          : "border-primary/30 bg-primary/5 text-primary"
                      }`}
                    >
                      <span className="[&>svg]:h-5 [&>svg]:w-5">{resource.icon}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-neutral-900 dark:text-white">
                        {localized?.title ?? resource.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                        {localized?.description ?? resource.description}
                      </span>
                    </span>
                    <span className="flex-shrink-0 font-mono text-xs text-neutral-300 transition-colors group-hover:text-primary dark:text-neutral-700">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </FadeIn>

      {/* ── Curiosity explorer ─────────────────────────────────────── */}
      <FadeIn as="section" className="mt-20">
        <SectionRule index="03" label={t.curiousBadge} />
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{t.curiousTitle}</h2>
        <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.curiousBody}</p>
        <div className="mt-8">
          <CuriosityExplorer />
        </div>
      </FadeIn>
    </main>
  );
}
