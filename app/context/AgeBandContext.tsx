"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AgeBand } from "../data/types";

// Session-only, in-memory preference — lives in React state for this tab only.
// Never written to localStorage, cookies, or any server. A hard refresh or a
// new tab starts over with no memory of it. See NextStepsExplorer for the one
// place this is actually used: it never changes what content exists or is
// reachable, only which age tab starts selected.
type AgeBandContextValue = {
  ageBand: AgeBand | null;
  setAgeBand: (band: AgeBand | null) => void;
};

const AgeBandContext = createContext<AgeBandContextValue | null>(null);

export function AgeBandProvider({ children }: { children: ReactNode }) {
  const [ageBand, setAgeBand] = useState<AgeBand | null>(null);
  return <AgeBandContext.Provider value={{ ageBand, setAgeBand }}>{children}</AgeBandContext.Provider>;
}

export function useAgeBand() {
  const ctx = useContext(AgeBandContext);
  if (!ctx) {
    throw new Error("useAgeBand must be used within an AgeBandProvider");
  }
  return ctx;
}
