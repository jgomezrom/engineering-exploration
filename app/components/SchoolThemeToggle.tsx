"use client";

import { useSchoolTheme } from "../context/SchoolThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { schoolThemeTranslations } from "../data/translations/schoolTheme";

export default function SchoolThemeToggle() {
  const { openPicker } = useSchoolTheme();
  const { language } = useLanguage();
  const t = schoolThemeTranslations[language];

  return (
    <button
      type="button"
      onClick={openPicker}
      aria-label={t.changeTheme}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-neutral-900/10 text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
        <path
          d="M10 3a7 7 0 1 0 0 14c1 0 1.5-.5 1.5-1.2 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.7.6-1.3 1.3-1.3H13a4 4 0 0 0 4-4A6.8 6.8 0 0 0 10 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="8" r="1" fill="currentColor" />
        <circle cx="10.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="13.5" cy="8.5" r="1" fill="currentColor" />
        <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      </svg>
    </button>
  );
}
