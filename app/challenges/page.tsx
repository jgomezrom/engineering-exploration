import type { Metadata } from "next";
import ChallengesContent from "../components/ChallengesContent";

export const metadata: Metadata = {
  title: "Hands-On Challenges | Engineering Exploration",
  description:
    "Small, real engineering missions you can do at home — no lab required. Build a catapult, load-test a bridge, or wire up an LED circuit.",
};

export default function ChallengesPage() {
  return <ChallengesContent />;
}
