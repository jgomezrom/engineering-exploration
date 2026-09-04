import type { Metadata } from "next";
import DesignProcessContent from "../components/DesignProcessContent";

const title = "The Engineering Design Process | Engineering Exploration";
const description =
  "Ask, Imagine, Plan, Build, Test, Improve, Repeat — the loop engineers actually use, and why redoing a step is normal, not a mistake.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/design-process" },
  openGraph: { title, description, url: "/design-process", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function DesignProcessPage() {
  return <DesignProcessContent />;
}
