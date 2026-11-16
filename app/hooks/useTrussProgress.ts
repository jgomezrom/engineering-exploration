"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { DesignMember, TrussLevelId } from "../data/trussLevels";

// Bridge Builder progress: the design currently on each level's grid and the
// lightest passing mass for each level. Like the bookmarks in
// useExploration.ts, this lives only in this browser's local storage — no
// account, nothing sent anywhere. The "-v1" suffix lets a future change to the
// shape start clean by bumping it.
const STORAGE_KEY = "ee-bridge-builder-v1";

type StoredProgress = {
  /** Lightest passing mass per level, in kg. */
  best: Partial<Record<TrussLevelId, number>>;
  /** Left as unknown on purpose: the game validates a design before using it. */
  designs: Partial<Record<TrussLevelId, unknown>>;
};

const EMPTY: StoredProgress = { best: {}, designs: {} };

// The saved text is kept in memory as well as in localStorage. Private
// browsing or disabled storage makes writes fail, and the game still has to
// work for that visit — it just won't be there next time.
let cachedText: string | null = null;
let cacheLoaded = false;
const listeners = new Set<() => void>();

function readText(): string | null {
  if (!cacheLoaded) {
    cacheLoaded = true;
    try {
      cachedText = localStorage.getItem(STORAGE_KEY);
    } catch {
      cachedText = null;
    }
  }
  return cachedText;
}

function parse(text: string | null): StoredProgress {
  if (!text) return EMPTY;
  try {
    const value = JSON.parse(text) as Partial<StoredProgress> | null;
    if (typeof value !== "object" || value === null) return EMPTY;
    const best: StoredProgress["best"] = {};
    if (typeof value.best === "object" && value.best !== null) {
      for (const [level, mass] of Object.entries(value.best)) {
        if (typeof mass === "number" && Number.isFinite(mass) && mass > 0) best[level as TrussLevelId] = mass;
      }
    }
    const designs = typeof value.designs === "object" && value.designs !== null ? value.designs : {};
    return { best, designs };
  } catch {
    // A corrupt value — start fresh rather than break the page.
    return EMPTY;
  }
}

function write(next: StoredProgress) {
  cachedText = JSON.stringify(next);
  cacheLoaded = true;
  try {
    localStorage.setItem(STORAGE_KEY, cachedText);
  } catch {
    // Storage can be full or disabled. The in-memory copy above keeps the
    // game working for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// Server-rendered HTML has no localStorage, so it always starts empty.
const serverText = () => null;

export function useTrussProgress() {
  // useSyncExternalStore fits here (unlike in useExploration.ts) because the
  // snapshot is the raw saved text, and a string compares equal to itself
  // between calls. The parsed object is derived from it below.
  const text = useSyncExternalStore(subscribe, readText, serverText);
  const progress = useMemo(() => parse(text), [text]);

  const saveDesign = useCallback((level: TrussLevelId, design: DesignMember[]) => {
    const fresh = parse(readText());
    write({ ...fresh, designs: { ...fresh.designs, [level]: design } });
  }, []);

  // Records a passing mass only when it beats the stored one.
  const recordPass = useCallback((level: TrussLevelId, massKg: number) => {
    const fresh = parse(readText());
    const previous = fresh.best[level];
    if (previous !== undefined && previous <= massKg) return;
    write({ ...fresh, best: { ...fresh.best, [level]: massKg } });
  }, []);

  return { best: progress.best, designs: progress.designs, saveDesign, recordPass };
}
