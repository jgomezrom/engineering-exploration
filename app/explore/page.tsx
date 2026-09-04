import type { Metadata } from "next";
import ExploreContent from "../components/ExploreContent";
import { fields } from "../data/fields";

function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

const title = "Explore Engineering Fields | Engineering Exploration";
const description = `Browse ${fields.length} engineering fields — ${joinNames(
  fields.map((f) => f.name.replace(" Engineering", ""))
)} — and see what engineers in each area actually do.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/explore" },
  openGraph: { title, description, url: "/explore", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ExplorePage() {
  return <ExploreContent />;
}
