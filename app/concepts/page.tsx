import type { Metadata } from "next";
import ConceptsContent from "../components/ConceptsContent";

const title = "Engineering Concepts | Engineering Exploration";
const description =
  "The core ideas behind engineering, explained in plain language — forces, circuits, structures, algorithms, and more, with real examples and which fields use them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/concepts" },
  openGraph: { title, description, url: "/concepts", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ConceptsPage() {
  return <ConceptsContent />;
}
