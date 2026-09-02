import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";
import FieldIcon from "../components/FieldIcon";
import { challenges } from "../data/challenges";
import { ChallengeCategory } from "../data/types";

export const metadata: Metadata = {
  title: "Hands-On Challenges | Engineering Exploration",
  description:
    "Small, real engineering missions you can do at home — no lab required. Build a catapult, load-test a bridge, or wire up an LED circuit.",
};

function groupByCategory(items: typeof challenges) {
  const order: ChallengeCategory[] = [];
  const groups = new Map<ChallengeCategory, typeof challenges>();
  for (const item of items) {
    if (!groups.has(item.category)) {
      groups.set(item.category, []);
      order.push(item.category);
    }
    groups.get(item.category)!.push(item);
  }
  return order.map((category) => ({ category, items: groups.get(category)! }));
}

export default function ChallengesPage() {
  const grouped = groupByCategory(challenges);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Try it yourself
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">
        Hands-On Challenges
      </h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        Small, real missions you can actually do — no lab required. Each one has a clear
        objective, real constraints, and a way to measure whether it actually worked. Pick one
        and see what the field feels like in practice.
      </p>

      {grouped.map(({ category, items }) => (
        <div key={category} className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{category}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((challenge) => (
              <Link key={challenge.slug} href={`/challenges/${challenge.slug}`}>
                <Card>
                  <div className="flex items-center justify-between">
                    <FieldIcon slug={challenge.field} className="h-10 w-10 text-primary" />
                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                      {challenge.difficulty}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                    {challenge.title}
                  </h3>
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
        </div>
      ))}

      <div className="mt-12 border border-neutral-900/10 p-6 dark:border-white/10">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Not sure what to do if it doesn&apos;t work?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Every challenge here follows the same process real engineers use — and it&apos;s normal
          to loop back and try again.
        </p>
        <Link
          href="/design-process"
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          See the Engineering Design Process →
        </Link>
      </div>
    </main>
  );
}
