import type { Metadata } from "next";
import CompareContent from "../components/CompareContent";
import { fields } from "../data/fields";

export const metadata: Metadata = {
  title: "Compare Engineering Fields | Engineering Exploration",
  description: `See how all ${fields.length} engineering fields on this site compare side by side — building physical things, coding, biology, creativity, teamwork, and more.`,
};

export default function ComparePage() {
  return <CompareContent />;
}
