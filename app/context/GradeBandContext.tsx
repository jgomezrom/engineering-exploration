"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { GradeBand } from "../data/types";

// Session-only, in-memory preference — lives in React state for this tab only.
// Never written to localStorage, cookies, or any server. A hard refresh or a
// new tab starts over with no memory of it. See NextStepsExplorer for the one
// place this is actually used: it never changes what content exists or is
// reachable, only which grade tab starts selected.
type GradeBandContextValue = {
  gradeBand: GradeBand | null;
  setGradeBand: (band: GradeBand | null) => void;
};

const GradeBandContext = createContext<GradeBandContextValue | null>(null);

export function GradeBandProvider({ children }: { children: ReactNode }) {
  const [gradeBand, setGradeBand] = useState<GradeBand | null>(null);
  return <GradeBandContext.Provider value={{ gradeBand, setGradeBand }}>{children}</GradeBandContext.Provider>;
}

export function useGradeBand() {
  const ctx = useContext(GradeBandContext);
  if (!ctx) {
    throw new Error("useGradeBand must be used within a GradeBandProvider");
  }
  return ctx;
}
