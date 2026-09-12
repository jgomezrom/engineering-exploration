import type { MetadataRoute } from "next";
import { fields } from "./data/fields";
import { challenges } from "./data/challenges";
import { SIMULATIONS } from "./data/simulationsList";

// Verified working production domain as of the last deployment check. If you add a
// custom domain later, set NEXT_PUBLIC_SITE_URL in Vercel project settings to override
// this — that always takes priority over the fallback below.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://engineering-exploration-two.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/explore",
    "/quiz",
    "/challenges",
    "/compare",
    "/about",
    "/curious",
    "/design-process",
    "/concepts",
    "/vs",
    "/math",
    "/college",
    "/resources",
    "/simulations",
    // Derived from SIMULATIONS rather than listed by hand. This used to be a
    // hardcoded copy, and when the pendulum and heat-conduction simulations
    // were added to SIMULATIONS (which the hub and search already read from),
    // nobody updated it — so both pages were live and linked but missing from
    // the sitemap. Fields and challenges were already derived this way.
    ...SIMULATIONS.map((sim) => `/simulations/${sim.slug}`),
    "/sources",
    "/parents-and-teachers",
    "/quiz/more-majors",
    "/meet-engineers",
    "/opportunities",
    "/faq",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const fieldRoutes = fields.map((field) => ({
    url: `${baseUrl}/engineering/${field.slug}`,
    lastModified: new Date(),
  }));

  const challengeRoutes = challenges.map((challenge) => ({
    url: `${baseUrl}/challenges/${challenge.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...fieldRoutes, ...challengeRoutes];
}
