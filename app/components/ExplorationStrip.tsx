"use client";

import { useExploration } from "../hooks/useExploration";
import { useLanguage } from "../context/LanguageContext";
import { homeTranslations } from "../data/translations/home";

export default function ExplorationStrip({ totalFields }: { totalFields: number }) {
  const { hydrated, visitedCount, streakDays } = useExploration();
  const { language } = useLanguage();
  const t = homeTranslations[language];

  if (!hydrated || visitedCount === 0) return null;

  return (
    <p className="mt-4 font-mono text-xs text-neutral-500 dark:text-neutral-400">
      {t.explored} {visitedCount} {t.of} {totalFields} {t.fieldsLower}
      {streakDays > 1 && ` · ${streakDays} ${t.dayStreak}`}
    </p>
  );
}
