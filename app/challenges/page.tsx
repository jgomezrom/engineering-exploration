import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";
import FieldIcon from "../components/FieldIcon";
import { challenges } from "../data/challenges";

export const metadata: Metadata = {
  title: "Hands-On Challenges | Engineering Exploration",
  description:
    "Small, real engineering projects you can do at home — no lab required. Build a catapult, load-test a bridge, or wire up an LED circuit.",
};

export default function ChallengesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Try it yourself
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">
        Hands-On Challenges
      </h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        Small, real projects you can actually do — no lab required. Pick one and see what the
        field feels like in practice.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Link key={challenge.slug} href={`/challenges/${challenge.slug}`}>
            <Card>
              <div className="flex items-center justify-between">
                <FieldIcon slug={challenge.field} className="h-10 w-10 text-primary" />
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                  {challenge.difficulty}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {challenge.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {challenge.tagline}
              </p>
              <div className="mt-4 flex flex-col gap-1 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                <span>{challenge.estimatedTime}</span>
                <span>{challenge.approximateCost}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
