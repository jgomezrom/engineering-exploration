import type { Metadata } from "next";
import VsContent from "../components/VsContent";

export const metadata: Metadata = {
  title: "Engineering vs. Other Careers | Engineering Exploration",
  description:
    "Engineer or mechanic? Engineer or electrician? Engineer or doctor? Clearing up the careers people mix up most, and what actually separates them.",
};

export default function VsPage() {
  return <VsContent />;
}
