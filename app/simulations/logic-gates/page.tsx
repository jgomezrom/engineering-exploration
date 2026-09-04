import type { Metadata } from "next";
import LogicGateContent from "../../components/LogicGateContent";

const title = "Logic Gate Simulator | Engineering Exploration";
const description =
  "Flip the inputs, switch between AND/OR/XOR/NOT gates, and watch the output respond instantly, with the truth table built live.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/logic-gates" },
  openGraph: { title, description, url: "/simulations/logic-gates", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function LogicGatesPage() {
  return <LogicGateContent />;
}
