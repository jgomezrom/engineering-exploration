import { simulationsHubTranslations } from "./translations/simulationsHub";

// The single source of truth for which simulations exist and what their
// hub-card title/description keys are — used by both the hub page's card
// grid and the site search index, so a new simulation only needs adding here
// once.
export const SIMULATIONS = [
  { slug: "lever-torque", titleKey: "leverTitle", descKey: "leverDescription" },
  { slug: "circuit", titleKey: "circuitTitle", descKey: "circuitDescription" },
  { slug: "beam-deflection", titleKey: "beamTitle", descKey: "beamDescription" },
  { slug: "gear-ratio", titleKey: "gearTitle", descKey: "gearDescription" },
  { slug: "buoyancy", titleKey: "buoyancyTitle", descKey: "buoyancyDescription" },
  { slug: "logic-gates", titleKey: "logicGateTitle", descKey: "logicGateDescription" },
  { slug: "projectile-motion", titleKey: "projectileTitle", descKey: "projectileDescription" },
] as const satisfies readonly { slug: string; titleKey: keyof typeof simulationsHubTranslations.en; descKey: keyof typeof simulationsHubTranslations.en }[];
