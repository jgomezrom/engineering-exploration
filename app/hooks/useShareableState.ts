"use client";

import { useCallback, useEffect, useState } from "react";

// Mirrors a piece of simulator state into this page's URL query string, so a
// specific setup (a launch angle, a gate type, a load position) can be copied
// and shared as a plain link that reopens exactly as configured. Nothing is
// sent anywhere — it's just the URL in the visitor's own address bar.
//
// Query params don't exist during server render, so the initial value is
// always `defaultValue` on both the server and the client's first paint —
// the same hydration-safe shape useExploration uses for localStorage — and
// the real value (if the URL has one) is read once, right after mount.
export function useShareableState<T>(key: string, defaultValue: T, parse: (raw: string) => T | null): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get(key);
    if (raw !== null) {
      const parsed = parse(raw);
      if (parsed !== null) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValue(parsed);
      }
    }
    // Intentionally mount-only: this hook is the only thing that changes the
    // URL afterward (via `update` below), so there's nothing new to re-read.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = useCallback(
    (next: T) => {
      setValue(next);
      const params = new URLSearchParams(window.location.search);
      params.set(key, String(next));
      window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
    },
    [key]
  );

  return [value, update];
}

export function parseNumber(raw: string): number | null {
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

// Matches what `String(true)` / `String(false)` produce, since `update`
// serializes every value type the same generic way.
export function parseBoolean(raw: string): boolean | null {
  if (raw === "true") return true;
  if (raw === "false") return false;
  return null;
}

export function parseEnum<T extends string>(allowed: readonly T[]) {
  return (raw: string): T | null => (allowed.includes(raw as T) ? (raw as T) : null);
}
