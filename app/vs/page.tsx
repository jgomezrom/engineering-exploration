import type { Metadata } from "next";
import VsContent from "../components/VsContent";

const title = "Engineering vs. Other Careers | Engineering Exploration";
const description =
  "Engineer or mechanic? Engineer or electrician? Engineer or doctor? Clearing up the careers people mix up most, and what actually separates them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/vs" },
  openGraph: { title, description, url: "/vs", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function VsPage() {
  return <VsContent />;
}
