import type { Metadata } from "next";
import ResourcesContent from "../components/ResourcesContent";

const title = "Resources | Engineering Exploration";
const description =
  "Everything else on this site in one place — compare fields, the engineering design process, core concepts explained, engineering vs. other careers, and a full course roadmap.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resources" },
  openGraph: { title, description, url: "/resources", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
