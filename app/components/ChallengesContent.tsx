"use client";

import Link from "next/link";
import Card from "./Card";
import FadeIn from "./FadeIn";
import FieldIcon from "./FieldIcon";
import { challenges } from "../data/challenges";
import { challengesEs } from "../data/challenges.es";
import { ChallengeCategory } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { challengesTranslations, categoryLabels, difficultyLabels } from "../data/translations/challenges";

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

export default function ChallengesContent() {
  const { language } = useLanguage();
  const t = challengesTranslations[language];
  const catLabel = categoryLabels[language];
  const diffLabel = difficultyLabels[language];
  const displayChallenges = language === "es" ? challengesEs : challenges;
  const grouped = groupByCategory(displayChallenges);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">{t.heading}</h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      {grouped.map(({ category, items }) => (
        <FadeIn key={category} className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{catLabel[category]}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((challenge) => (
              <Link key={challenge.slug} href={`/challenges/${challenge.slug}`}>
                <Card>
                  <div className="flex items-center justify-between">
                    <FieldIcon slug={challenge.field} className="h-10 w-10 text-primary" />
                    <span className="border border-neutral-900/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                      {diffLabel[challenge.difficulty]}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{challenge.tagline}</p>
                  <div className="mt-4 flex flex-col gap-1 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    <span>{challenge.estimatedTime}</span>
                    <span>{challenge.approximateCost}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </FadeIn>
      ))}

      <div className="mt-12 border border-neutral-900/10 p-6 dark:border-white/10">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.notSureHeading}</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.notSureBody}
        </p>
        <Link href="/design-process" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
          {t.designProcessLink}
        </Link>
      </div>
    </main>
  );
}
