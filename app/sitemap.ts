import type { MetadataRoute } from "next";
import { fields } from "./data/fields";
import { challenges } from "./data/challenges";

// NEXT_PUBLIC_SITE_URL must be set (in Vercel project settings) to your real production
// domain. "engineering-exploration.vercel.app" is NOT this project — that name was already
// taken by an unrelated site, so don't reuse it as a fallback here.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/explore", "/quiz", "/challenges"].map((path) => ({
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
