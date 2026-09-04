import type { Metadata } from "next";
import FaqContent from "../components/FaqContent";

const title = "Frequently Asked Questions | Engineering Exploration";
const description =
  "Quick answers to common questions about this site — math requirements, switching majors, privacy, and more — each linking to the full page behind it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function FaqPage() {
  return <FaqContent />;
}
