"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SchoolThemeToggle from "./SchoolThemeToggle";
import SchoolThemeModal from "./SchoolThemeModal";
import LanguageToggle from "./LanguageToggle";
import SearchModal from "./SearchModal";
import { useLanguage } from "../context/LanguageContext";
import { useSchoolTheme } from "../context/SchoolThemeContext";
import { chromeTranslations } from "../data/translations/chrome";

// Split for the desktop row only — at lg: (1024px), the header's own
// max-w-5xl left only ~975px of usable width, and the logo plus all 8 links
// plus the 4 icon buttons needed slightly more than that, so the two ends of
// the justify-between row were colliding with zero gap between them instead
// of the intended spacing. Moving the 4 less-central links behind "More"
// gets comfortably under budget instead of just barely fitting. The mobile
// menu below still lists all 8 — it has a full-height column to work with,
// so there's no reason to hide anything there.
const PRIMARY_NAV_LINKS = [
  { href: "/curious", key: "navCurious" as const },
  { href: "/explore", key: "navExplore" as const },
  { href: "/quiz", key: "navQuiz" as const },
  { href: "/challenges", key: "navChallenges" as const },
];

const MORE_NAV_LINKS = [
  { href: "/simulations", key: "navSimulations" as const },
  { href: "/college", key: "navCollege" as const },
  { href: "/resources", key: "navResources" as const },
  { href: "/about", key: "navAbout" as const },
];

const NAV_LINKS = [...PRIMARY_NAV_LINKS, ...MORE_NAV_LINKS];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = chromeTranslations[language];
  const { isPickerOpen } = useSchoolTheme();

  useEffect(() => {
    if (!moreOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKey);
    };
  }, [moreOpen]);

  return (
    <header className="w-full border-b border-t-[3px] border-neutral-100 border-t-primary bg-white dark:border-white/10 dark:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label={t.goToHomepage}
          className="flex flex-shrink-0 items-center gap-2 whitespace-nowrap text-lg font-semibold text-neutral-900 dark:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-primary">
            <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Engineering Exploration</span>
        </Link>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400 lg:flex">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {t[link.key]}
              </Link>
            ))}

            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                className="flex items-center gap-1 hover:text-primary"
              >
                {t.navMore}
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`}>
                  <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full z-10 mt-2 w-40 border border-neutral-900/10 bg-white py-1 shadow-sm dark:border-white/10 dark:bg-neutral-900">
                  {MORE_NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 hover:bg-primary/5 hover:text-primary"
                    >
                      {t[link.key]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label={t.openSearch}
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-neutral-900/10 text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <LanguageToggle />
            <SchoolThemeToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center text-neutral-900 lg:hidden dark:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-100 px-6 py-4 lg:hidden dark:border-white/10">
          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary" onClick={() => setOpen(false)}>
                {t[link.key]}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      {isPickerOpen && <SchoolThemeModal />}
    </header>
  );
}
