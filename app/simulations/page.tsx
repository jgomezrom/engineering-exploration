import type { Metadata } from "next";
import SimulationsContent from "../components/SimulationsContent";

export const metadata: Metadata = {
  title: "Lever & Torque Simulator | Engineering Exploration",
  description:
    "Drag two weights along a lever and watch it balance in real time — an interactive way to see how torque, not just weight, determines whether a lever tips.",
};

export default function SimulationsPage() {
  return <SimulationsContent />;
}
