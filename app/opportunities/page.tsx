import type { Metadata } from "next";
import OpportunitiesContent from "../components/OpportunitiesContent";

const title = "Finding Opportunities Near You | Engineering Exploration";
const description =
  "This site doesn't know where you live, and won't ask. Here's how to actually search for clubs, competitions, and programs in your own area.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/opportunities" },
  openGraph: { title, description, url: "/opportunities", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function OpportunitiesPage() {
  return <OpportunitiesContent />;
}
