import type { Metadata } from "next";
import MySummaryContent from "../components/MySummaryContent";

const title = "Your Exploration Summary | Engineering Exploration";
const description =
  "Your bookmarked fields and last quiz result, pulled together on one printable page — built entirely from what's saved in your own browser.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/my-summary" },
  openGraph: { title, description, url: "/my-summary", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function MySummaryPage() {
  return <MySummaryContent />;
}
