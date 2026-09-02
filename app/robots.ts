import type { MetadataRoute } from "next";

// NEXT_PUBLIC_SITE_URL must be set (in Vercel project settings) to your real production
// domain. "engineering-exploration.vercel.app" is NOT this project — that name was already
// taken by an unrelated site, so don't reuse it as a fallback here.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
