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
      className="flex h-9 flex-shrink-0 items-center justify-center border border-neutral-900/10 px-2.5 font-mono text-xs font-semibold text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
    >
      {next.toUpperCase()}
    </button>
  );
}
