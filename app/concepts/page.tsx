import type { Metadata } from "next";
import ConceptsContent from "../components/ConceptsContent";

export const metadata: Metadata = {
  title: "Engineering Concepts | Engineering Exploration",
  description:
    "The core ideas behind engineering, explained in plain language — forces, circuits, structures, algorithms, and more, with real examples and which fields use them.",
};

export default function ConceptsPage() {
  return <ConceptsContent />;
}
