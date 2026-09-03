import { Level } from "../types";

// Shared "Low/Medium/High" labels used by both FieldStatSheet (the field
// page's "At a Glance" box) and the /compare page, so the wording for a
// Level never drifts between the two places it's shown.
export const levelLabels: Record<"en" | "es", Record<Level, string>> = {
  en: { Low: "Low", Medium: "Medium", High: "High" },
  es: { Low: "Baja", Medium: "Media", High: "Alta" },
};
