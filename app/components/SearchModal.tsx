"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { buildSearchIndex, searchTypeLabels } from "../data/searchIndex";

const LABELS = {
  en: {
    placeholder: "Search fields, challenges, concepts…",
    noResultsBefore: "No results for",
    close: "Close search",
  },
  es: {
    placeholder: "Buscar campos, desafíos, conceptos…",
    noResultsBefore: "Sin resultados para",
    close: "Cerrar búsqueda",
  },
};

const MAX_RESULTS = 8;

// The parent only renders this component while the modal should be open
// (`{searchOpen && <SearchModal ... />}`), so every open is a fresh mount —
// state starts clean with no reset-on-reopen effect needed, and the effects
// below don't need an `open` guard since they only ever run while mounted.
export default function SearchModal({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  const t = LABELS[language];
  const typeLabel = searchTypeLabels[language];
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSearchIndex(language), [language]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
      .slice(0, MAX_RESULTS);
  }, [query, index]);

  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 10);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(id);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-neutral-900/50 px-4 pt-24 dark:bg-black/70"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border border-neutral-900/10 bg-white dark:border-white/10 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-neutral-900/10 px-4 py-3 dark:border-white/10">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-500">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none dark:text-white"
          />
          <button
            type="button"
            aria-label={t.close}
            onClick={onClose}
            className="flex-shrink-0 text-neutral-500 hover:text-primary"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {query.trim() !== "" && (
          <div className="max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <p className="px-4 py-6 text-sm text-neutral-500 dark:text-neutral-400">
                {t.noResultsBefore} &ldquo;{query}&rdquo;
              </p>
            ) : (
              <ul>
                {results.map((item) => (
                  <li key={item.type + item.href + item.title}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-start justify-between gap-3 border-b border-neutral-900/5 px-4 py-3 hover:bg-primary/5 dark:border-white/5"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-neutral-900 dark:text-white">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                            {item.description}
                          </span>
                        )}
                      </span>
                      <span className="flex-shrink-0 border border-neutral-900/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neutral-500 dark:border-white/15 dark:text-neutral-400">
                        {typeLabel[item.type]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
