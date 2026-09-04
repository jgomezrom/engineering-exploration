import type { Metadata } from "next";
import HeatConductionContent from "../../components/HeatConductionContent";

export const metadata: Metadata = {
  title: "Heat Conduction Simulator | Engineering Exploration",
  description:
    "Pick a material, adjust its thickness and the temperature difference across it, and watch how much heat actually gets through — real conductivity values, real physics.",
};

export default function HeatConductionPage() {
  return <HeatConductionContent />;
}
