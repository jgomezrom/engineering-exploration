import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";
import { fields } from "./data/fields";

const title = "Engineering Exploration — Find Your Engineering Path";
const description = `An honest, no-hype guide to what engineers actually do. Explore ${fields.length} engineering fields, take a 5-minute interest quiz, and try hands-on challenges.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function Home() {
  return <HomeContent />;
}
