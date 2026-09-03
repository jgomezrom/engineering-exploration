"use client";

import { useState } from "react";
import { MythReality } from "../data/types";

function FlipCard({ item }: { item: MythReality }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRevealed((r) => !r)}
      aria-pressed={revealed}
      className="flex w-full flex-col items-start border border-neutral-900/10 p-5 text-left transition-colors hover:border-primary/40 dark:border-white/10"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        {revealed ? "Reality" : "Myth"}
      </span>
      <p className="mt-2 leading-relaxed text-neutral-900 dark:text-white">
        {revealed ? item.reality : item.myth}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
          <path
            d="M2 8a6 6 0 0 1 10.5-3.9M2 8a6 6 0 0 0 10.5 3.9M12.5 4.1V1.5M12.5 4.1H10M3.5 11.9v2.6M3.5 11.9H6"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {revealed ? "Back to myth" : "Reveal the reality"}
      </span>
    </button>
  );
}

export default function MythRealityCards({ items }: { items: MythReality[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <FlipCard key={item.myth} item={item} />
      ))}
    </div>
  );
}
