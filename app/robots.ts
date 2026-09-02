import type { MetadataRoute } from "next";

// Verified working production domain as of the last deployment check. If you add a
// custom domain later, set NEXT_PUBLIC_SITE_URL in Vercel project settings to override
// this — that always takes priority over the fallback below.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://engineering-exploration-two.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
