"use client";

import { useExploration } from "../hooks/useExploration";

export default function ExplorationStrip({ totalFields }: { totalFields: number }) {
  const { hydrated, visitedCount, streakDays } = useExploration();

  if (!hydrated || visitedCount === 0) return null;

  return (
    <p className="mt-4 font-mono text-xs text-neutral-500 dark:text-neutral-400">
      You&apos;ve explored {visitedCount} of {totalFields} fields
      {streakDays > 1 && ` · ${streakDays}-day streak`}
    </p>
  );
}
