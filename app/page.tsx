import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";
import { fields } from "./data/fields";

export const metadata: Metadata = {
  title: "Engineering Exploration — Find Your Engineering Path",
  description: `An honest, no-hype guide to what engineers actually do. Explore ${fields.length} engineering fields, take a 5-minute interest quiz, and try hands-on challenges.`,
};

export default function Home() {
  return <HomeContent />;
}
