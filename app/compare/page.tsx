import type { Metadata } from "next";
import CompareContent from "../components/CompareContent";
import { fields } from "../data/fields";

const title = "Compare Engineering Fields | Engineering Exploration";
const description = `See how all ${fields.length} engineering fields on this site compare side by side — building physical things, coding, biology, creativity, teamwork, and more.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare" },
  openGraph: { title, description, url: "/compare", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ComparePage() {
  return <CompareContent />;
}
