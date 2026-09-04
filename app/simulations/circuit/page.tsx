import type { Metadata } from "next";
import CircuitContent from "../../components/CircuitContent";

const title = "Circuit & Ohm's Law Simulator | Engineering Exploration";
const description =
  "Adjust voltage and resistance in a simple LED circuit and watch the current — and the LED's brightness — respond instantly, with Ohm's Law explained.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/circuit" },
  openGraph: { title, description, url: "/simulations/circuit", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function CircuitPage() {
  return <CircuitContent />;
}
