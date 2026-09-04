import type { Metadata } from "next";
import LogicGateContent from "../../components/LogicGateContent";

export const metadata: Metadata = {
  title: "Logic Gate Simulator | Engineering Exploration",
  description:
    "Flip the inputs, switch between AND/OR/XOR/NOT gates, and watch the output respond instantly, with the truth table built live.",
};

export default function LogicGatesPage() {
  return <LogicGateContent />;
}
