"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(next)}
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      className="flex h-9 flex-shrink-0 items-center gap-1.5 border border-neutral-900/10 px-2.5 font-mono text-xs font-semibold text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 flex-shrink-0">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="10" cy="10" rx="3.2" ry="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.7 10h14.6M3.7 6h12.6M3.7 14h12.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {next.toUpperCase()}
    </button>
  );
}
