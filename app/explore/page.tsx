import type { Metadata } from "next";
import ExploreContent from "../components/ExploreContent";
import { fields } from "../data/fields";

function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export const metadata: Metadata = {
  title: "Explore Engineering Fields | Engineering Exploration",
  description: `Browse ${fields.length} engineering fields — ${joinNames(
    fields.map((f) => f.name.replace(" Engineering", ""))
  )} — and see what engineers in each area actually do.`,
};

export default function ExplorePage() {
  return <ExploreContent />;
}
