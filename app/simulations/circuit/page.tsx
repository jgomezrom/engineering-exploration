import type { Metadata } from "next";
import CircuitContent from "../../components/CircuitContent";

export const metadata: Metadata = {
  title: "Circuit & Ohm's Law Simulator | Engineering Exploration",
  description:
    "Adjust voltage and resistance in a simple LED circuit and watch the current — and the LED's brightness — respond instantly, with Ohm's Law explained.",
};

export default function CircuitPage() {
  return <CircuitContent />;
}
