"use client";

import { useEffect } from "react";
import { useSchoolTheme } from "../context/SchoolThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useDialogFocus } from "../hooks/useDialogFocus";
import { schoolThemes, SchoolTheme } from "../data/schoolThemes";
import { schoolThemeTranslations } from "../data/translations/schoolTheme";

const defaultTheme = schoolThemes.find((t) => t.id === "default")!;
const bigTenThemes = schoolThemes.filter((t) => t.conference === "bigten");
const secThemes = schoolThemes.filter((t) => t.conference === "sec");

function ThemeButton({
  theme,
  label,
  isSelected,
  onSelect,
}: {
  theme: SchoolTheme;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`flex items-center gap-2.5 border px-3 py-2.5 text-left text-sm transition-colors ${
        isSelected ? "border-primary bg-primary/5" : "border-neutral-900/10 hover:border-primary/40 dark:border-white/10"
      }`}
    >
      {theme.id === "default" ? (
        <span className="h-5 w-5 flex-shrink-0 rounded-full border border-neutral-900/15 bg-[#0d8087] dark:border-white/15" />
      ) : (
        <span
          className="h-5 w-5 flex-shrink-0 rounded-full border border-neutral-900/15 dark:border-white/15"
          style={{ background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)` }}
        />
      )}
      <span className="truncate font-medium text-neutral-900 dark:text-white">{label}</span>
    </button>
  );
}

// Mounted only while the picker is open (same pattern as SearchModal), so
// every open is a fresh mount and these effects don't need an open guard.
export default function SchoolThemeModal() {
  const { schoolThemeId, selectTheme, closePicker } = useSchoolTheme();
  const { language } = useLanguage();
  const t = schoolThemeTranslations[language];
  // Every way out closes the picker — Escape, the × button, a backdrop click,
  // and picking a theme (selectTheme closes it too) — and each one unmounts
  // this component, so the hook's cleanup returns focus to the palette button
  // whichever way the reader leaves.
  const dialogRef = useDialogFocus<HTMLDivElement>();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePicker();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closePicker]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 px-4 py-10 dark:bg-black/70"
      onClick={closePicker}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="school-theme-heading"
        tabIndex={-1}
        className="flex max-h-full w-full max-w-3xl flex-col border border-neutral-900/10 bg-white focus:outline-none dark:border-white/10 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-neutral-900/10 px-5 py-4 dark:border-white/10">
          <div>
            <h2 id="school-theme-heading" className="text-lg font-semibold text-neutral-900 dark:text-white">
              {t.heading}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.intro}</p>
          </div>
          <button
            type="button"
            aria-label={t.close}
            onClick={closePicker}
            className="flex-shrink-0 text-neutral-500 hover:text-primary"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5">
          <div className="max-w-xs">
            <ThemeButton
              theme={defaultTheme}
              label={t.defaultName}
              isSelected={schoolThemeId === "default"}
              onSelect={() => selectTheme("default")}
            />
          </div>

          <h3 className="mb-2 mt-6 font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {t.bigTenLabel}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {bigTenThemes.map((theme) => (
              <ThemeButton
                key={theme.id}
                theme={theme}
                label={theme.name}
                isSelected={schoolThemeId === theme.id}
                onSelect={() => selectTheme(theme.id)}
              />
            ))}
          </div>

          <h3 className="mb-2 mt-6 font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {t.secLabel}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {secThemes.map((theme) => (
              <ThemeButton
                key={theme.id}
                theme={theme}
                label={theme.name}
                isSelected={schoolThemeId === theme.id}
                onSelect={() => selectTheme(theme.id)}
              />
            ))}
          </div>

          <p className="mt-6 text-center text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
            {t.comingSoon}
          </p>
          <p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">{t.darkModeNote}</p>
        </div>
      </div>
    </div>
  );
}
