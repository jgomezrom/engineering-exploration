import type { Metadata } from "next";
import CuriousContent from "../components/CuriousContent";

const title = "What Are You Into? | Engineering Exploration";
const description =
  "Not sure where to start? Pick something you're already curious about and see which engineering fields connect to it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/curious" },
  openGraph: { title, description, url: "/curious", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function CuriousPage() {
  return <CuriousContent />;
}
