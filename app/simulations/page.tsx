import type { Metadata } from "next";
import SimulationsHubContent from "../components/SimulationsHubContent";

export const metadata: Metadata = {
  title: "Interactive Simulations | Engineering Exploration",
  description:
    "Adjust real variables — weight, voltage, load, gear teeth, density — and watch real physics respond instantly, with the math behind each one explained plainly.",
};

export default function SimulationsPage() {
  return <SimulationsHubContent />;
}
