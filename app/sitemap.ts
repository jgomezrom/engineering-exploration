import type { MetadataRoute } from "next";
import { fields } from "./data/fields";
import { challenges } from "./data/challenges";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://engineering-exploration.vercel.app";

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
