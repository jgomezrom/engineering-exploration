import type { Metadata } from "next";
import AboutContent from "../components/AboutContent";

export const metadata: Metadata = {
  title: "About | Engineering Exploration",
  description:
    "What this site is, why it exists, and how the content was put together.",
};

export default function AboutPage() {
  return <AboutContent />;
}
