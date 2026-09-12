"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

  // Dragging a slider fires an input event per pixel of movement, and writing
  // the URL on every one of them means hundreds of history calls a second.
  // Browsers rate-limit that: Safari throws after roughly 100 writes in 30
  // seconds, and an uncaught throw inside an onChange handler takes the whole
  // page down with it. So the write is coalesced to once per settled drag and
  // can never throw — the URL is a convenience, not something worth crashing a
  // simulation over. The on-screen value still updates instantly; only the
  // address bar waits.
  const pendingRef = useRef<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flush = useCallback(() => {
    timerRef.current = null;
    const next = pendingRef.current;
    if (next === null) return;
    pendingRef.current = null;
    try {
      const params = new URLSearchParams(window.location.search);
      params.set(key, next);
      window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
    } catch {
      // Rate-limited by the browser. The next settled change will try again.
    }
  }, [key]);

  const update = useCallback(
    (next: T) => {
      setValue(next);
      pendingRef.current = String(next);
      if (timerRef.current === null) timerRef.current = setTimeout(flush, 120);
    },
    [flush]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);

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
