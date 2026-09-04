import type { Metadata } from "next";
import AboutContent from "../components/AboutContent";

const title = "About | Engineering Exploration";
const description =
  "What this site is, why it exists, and how the content was put together.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function AboutPage() {
  return <AboutContent />;
}
