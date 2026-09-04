import type { Metadata } from "next";
import HeatConductionContent from "../../components/HeatConductionContent";

const title = "Heat Conduction Simulator | Engineering Exploration";
const description =
  "Pick a material, adjust its thickness and the temperature difference across it, and watch how much heat actually gets through — real conductivity values, real physics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/heat-conduction" },
  openGraph: { title, description, url: "/simulations/heat-conduction", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function HeatConductionPage() {
  return <HeatConductionContent />;
}
