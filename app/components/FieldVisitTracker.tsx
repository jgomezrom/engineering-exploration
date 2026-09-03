"use client";

import { useEffect } from "react";
import { useExploration } from "../hooks/useExploration";
import { FieldSlug } from "../data/types";

// Renders nothing — just records that this field's full page was opened, for
// the "explored X of N fields" readout and the day-streak counter. Only used
// on the 12 full field pages (not the shorter stub overviews).
export default function FieldVisitTracker({ slug }: { slug: FieldSlug }) {
  const { recordVisit } = useExploration();

  useEffect(() => {
    recordVisit(slug);
  }, [slug, recordVisit]);

  return null;
}
