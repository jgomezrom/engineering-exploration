import type { Metadata } from "next";
import SimulationsHubContent from "../components/SimulationsHubContent";

const title = "Interactive Simulations | Engineering Exploration";
const description =
  "Adjust real variables — weight, voltage, load, gear teeth, density — and watch real physics respond instantly, with the math behind each one explained plainly.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations" },
  openGraph: { title, description, url: "/simulations", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function SimulationsPage() {
  return <SimulationsHubContent />;
}
