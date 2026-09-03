import type { Metadata } from "next";
import ResourcesContent from "../components/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources | Engineering Exploration",
  description:
    "Everything else on this site in one place — compare fields, the engineering design process, core concepts explained, engineering vs. other careers, and a full course roadmap.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
