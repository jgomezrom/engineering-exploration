import type { Metadata } from "next";
import SourcesContent from "../components/SourcesContent";

const title = "Sources & Methodology | Engineering Exploration";
const description =
  "Where the numbers on this site come from, what's editorial judgment versus a cited source, and every salary citation in one place.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sources" },
  openGraph: { title, description, url: "/sources", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function SourcesPage() {
  return <SourcesContent />;
}
