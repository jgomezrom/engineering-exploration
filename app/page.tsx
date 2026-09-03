import type { Metadata } from "next";
import Link from "next/link";
import Button from "./components/Button";
import Card from "./components/Card";
import FieldIcon from "./components/FieldIcon";
import CuriosityExplorer from "./components/CuriosityExplorer";
import DidYouKnowTicker from "./components/DidYouKnowTicker";
import FadeIn from "./components/FadeIn";
import { fields } from "./data/fields";
import { challenges } from "./data/challenges";
import { resourceLinks } from "./data/resourceLinks";

function JourneyArrow() {
  return (
    <div className="hidden items-center justify-center sm:flex">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 text-primary/40">
        <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Engineering Exploration — Find Your Engineering Path",
  description: `An honest, no-hype guide to what engineers actually do. Explore ${fields.length} engineering fields, take a 5-minute interest quiz, and try hands-on challenges.`,
};

export default function Home() {
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
            ENGINEERING EXPLORATION
          </span>
        </div>
        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="electrical-engineering" className="h-8 w-8 text-primary/40" />
          <span className="rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            {String(fields.length).padStart(2, "0")} FIELDS · ∞ PATHS
          </span>
        </div>

        <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          For curious minds
        </span>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:max-w-3xl lg:text-6xl 2xl:text-7xl">
          What kind of <span className="text-accent">engineer</span> do you want to be?
        </h1>

        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400 lg:max-w-2xl lg:text-xl 2xl:max-w-3xl">
          Explore what engineers actually do — the real stuff, not just the highlight reel — and find fields worth getting curious about. No pressure to already know what you want to be.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/explore" variant="primary">
            Explore Engineering Fields
          </Button>
          <Button href="/quiz" variant="secondary">
            Take the Interest Quiz
          </Button>
        </div>

        <div className="mt-16 hidden w-full max-w-3xl items-center justify-center gap-8 border-y border-neutral-900/10 py-6 font-mono text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-400 lg:flex 2xl:max-w-4xl">
          <span>{fields.length} FIELDS</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>{challenges.length} CHALLENGES</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>5-MIN QUIZ</span>
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
      <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Explore Fields
      </h2>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Browse {fields.length} engineering fields and see what each one is really like.
      </p>
      <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
        Start exploring →
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
      <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Take the Quiz
      </h2>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Answer a few questions about what you enjoy, and get fields worth exploring.
      </p>
      <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
        Take the quiz →
      </Link>
    </Card>
  </FadeIn>

  <JourneyArrow />

  <FadeIn delay={200}>
    <Card>
      <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">03</span>
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="mt-2 h-8 w-8 text-primary">
        <path d="M27 8a6 6 0 0 0-7.75 7.75L9 26l5 5 10.25-10.25A6 6 0 0 0 32 13l-4 4-3-3 4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <h2 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Try a Challenge
      </h2>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Test out small, hands-on engineering activities you can do at home.
      </p>
      <Link href="/challenges" className="text-sm font-medium text-primary hover:underline">
        See challenges →
      </Link>
    </Card>
  </FadeIn>
</div>

      <FadeIn className="mt-20 w-full max-w-2xl text-left">
        <DidYouKnowTicker />
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-4xl border-t border-neutral-900/10 pt-16 text-left lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl dark:border-white/10">
        <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          Want to go deeper?
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          More ways to explore
        </h2>
        <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          Comparing fields side by side, whether you need to be good at math, how engineering
          careers differ from what people assume — all of this is already on the site.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((resource) => (
            <Link key={resource.href} href={resource.href}>
              <Card>
                {resource.icon}
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {resource.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-20 w-full max-w-3xl border-t border-neutral-900/10 pt-16 text-center dark:border-white/10">
        <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          Not sure where to start?
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          What are you into?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          You don&apos;t need to already know engineering vocabulary. Pick something
          you&apos;re curious about and see which fields actually connect to it.
        </p>
        <div className="mt-8">
          <CuriosityExplorer />
        </div>
      </FadeIn>
    </main>
  );
}
