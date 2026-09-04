import type { Metadata } from "next";
import ChallengesContent from "../components/ChallengesContent";

const title = "Hands-On Challenges | Engineering Exploration";
const description =
  "Small, real engineering missions you can do at home — no lab required. Build a catapult, load-test a bridge, or wire up an LED circuit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/challenges" },
  openGraph: { title, description, url: "/challenges", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ChallengesPage() {
  return <ChallengesContent />;
}
