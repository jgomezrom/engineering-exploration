import type { Metadata } from "next";
import SourcesContent from "../components/SourcesContent";

export const metadata: Metadata = {
  title: "Sources & Methodology | Engineering Exploration",
  description:
    "Where the numbers on this site come from, what's editorial judgment versus a cited source, and every salary citation in one place.",
};

export default function SourcesPage() {
  return <SourcesContent />;
}
