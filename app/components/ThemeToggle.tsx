"use client";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const LABELS = {
  en: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
  es: { toLight: "Cambiar a modo claro", toDark: "Cambiar a modo oscuro" },
};

export default function ThemeToggle() {
  const { effectiveTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const t = LABELS[language];

  return (
    <button
      type="button"
      onClick={() => setTheme(effectiveTheme === "dark" ? "light" : "dark")}
      aria-label={effectiveTheme === "dark" ? t.toLight : t.toDark}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-neutral-900/10 text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
    >
      {effectiveTheme === "dark" ? (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
          <path
            d="M10 3v1.5M10 15.5V17M17 10h-1.5M4.5 10H3M14.6 5.4l-1.1 1.1M6.5 13.5l-1.1 1.1M14.6 14.6l-1.1-1.1M6.5 6.5 5.4 5.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
          <path
            d="M16.5 12.3A6.5 6.5 0 0 1 7.7 3.5a6.5 6.5 0 1 0 8.8 8.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
