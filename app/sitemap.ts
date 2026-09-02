import type { MetadataRoute } from "next";
import { fields } from "./data/fields";
import { fieldStubs } from "./data/fieldStubs";
import { challenges } from "./data/challenges";

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
    "/resources",
    "/simulations",
    "/sources",
    "/parents-and-teachers",
    "/quiz/more-majors",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const fieldRoutes = [...fields, ...fieldStubs].map((field) => ({
    url: `${baseUrl}/engineering/${field.slug}`,
    lastModified: new Date(),
  }));

  const challengeRoutes = challenges.map((challenge) => ({
    url: `${baseUrl}/challenges/${challenge.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...fieldRoutes, ...challengeRoutes];
}
