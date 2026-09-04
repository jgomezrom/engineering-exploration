"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldSlug } from "../data/types";

// Everything here lives only in this browser's local storage — never sent
// anywhere, no account attached, nothing this site (or anyone else) can see
// from the server. See the Parents & Teachers page for the full explanation.
// The "-v1" suffix lets a future schema change start clean by bumping it,
// instead of having to migrate old shapes.
const STORAGE_KEY = "ee-exploration-v1";

export type QuizResult = {
  slug: FieldSlug;
  percentage: number;
  date: string; // "YYYY-MM-DD", the day the quiz was taken
};

type StoredExploration = {
  bookmarks: FieldSlug[];
  visited: FieldSlug[];
  lastVisitDate: string | null; // "YYYY-MM-DD", in the visitor's local calendar day
  streakDays: number;
  lastQuizResult: QuizResult | null;
};

const EMPTY: StoredExploration = { bookmarks: [], visited: [], lastVisitDate: null, streakDays: 0, lastQuizResult: null };

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Both sides are always "YYYY-MM-DD" strings built by todayISO() above, so this
// stays correct regardless of time zone even though Date parses them as UTC.
function daysBetween(earlier: string, later: string) {
  return Math.round((new Date(later).getTime() - new Date(earlier).getTime()) / 86400000);
}

function load(): StoredExploration {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    return { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    // Private browsing, disabled storage, or a corrupt value — the site works
    // fine without this, so fail quiet rather than break the page.
    return EMPTY;
  }
}

function save(data: StoredExploration) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage can be full or disabled — nothing to do, the feature just won't persist.
  }
}

// Server-rendered HTML always starts from EMPTY (localStorage doesn't exist on
// the server); the real value hydrates in after mount. `hydrated` lets callers
// avoid a one-frame flash of "0 explored" or an unbookmarked star before that.
export function useExploration() {
  const [data, setData] = useState<StoredExploration>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // localStorage doesn't exist during server render, so this has to run
    // post-mount rather than in a lazy useState initializer (which would read
    // real data on the client's first render and mismatch the server's EMPTY
    // output). useSyncExternalStore doesn't fit cleanly here either: it needs
    // a snapshot with a stable reference between calls, and JSON.parse
    // produces a new object every time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(load());
    setHydrated(true);
  }, []);

  // Every write below reads a fresh copy from localStorage first rather than
  // merging against this hook instance's own (possibly stale) React state.
  // BookmarkButton and FieldVisitTracker each mount their own independent
  // instance of this hook on the same field page — if toggleBookmark merged
  // against its own cached snapshot from page load, it would silently
  // overwrite whatever recordVisit had already written moments earlier.
  const toggleBookmark = useCallback((slug: FieldSlug) => {
    const fresh = load();
    const bookmarks = fresh.bookmarks.includes(slug)
      ? fresh.bookmarks.filter((s) => s !== slug)
      : [...fresh.bookmarks, slug];
    const next = { ...fresh, bookmarks };
    save(next);
    setData(next);
  }, []);

  // Called once when a full field page mounts. Adds it to the explored set and
  // updates the streak: first visit ever starts it at 1, a visit on a new day
  // right after the last one extends it, and a gap of more than a day resets it.
  const recordVisit = useCallback((slug: FieldSlug) => {
    const fresh = load();
    const today = todayISO();
    const visited = fresh.visited.includes(slug) ? fresh.visited : [...fresh.visited, slug];

    let streakDays = fresh.streakDays;
    if (fresh.lastVisitDate === null) {
      streakDays = 1;
    } else if (fresh.lastVisitDate !== today) {
      streakDays = daysBetween(fresh.lastVisitDate, today) === 1 ? fresh.streakDays + 1 : 1;
    }

    const next = { ...fresh, visited, lastVisitDate: today, streakDays };
    save(next);
    setData(next);
  }, []);

  // Called once when the quiz reaches its results stage. Only the single top
  // result is kept — this is a quick "what did I get last time" reference for
  // the summary page, not a history of every attempt.
  const saveQuizResult = useCallback((slug: FieldSlug, percentage: number) => {
    const fresh = load();
    const next: StoredExploration = { ...fresh, lastQuizResult: { slug, percentage, date: todayISO() } };
    save(next);
    setData(next);
  }, []);

  return {
    hydrated,
    bookmarks: data.bookmarks,
    isBookmarked: (slug: FieldSlug) => data.bookmarks.includes(slug),
    toggleBookmark,
    visitedCount: data.visited.length,
    streakDays: data.streakDays,
    recordVisit,
    lastQuizResult: data.lastQuizResult,
    saveQuizResult,
  };
}
