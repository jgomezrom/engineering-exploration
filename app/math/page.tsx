import type { Metadata } from "next";
import MathContent from "../components/MathContent";

export const metadata: Metadata = {
  title: "Do I Have to Be Good at Math? | Engineering Exploration",
  description:
    "An honest answer, plus a real course roadmap — what classes to take in middle and high school, AP and IB options, what matters most per field, and where to find extra help.",
};

export default function MathPage() {
  return <MathContent />;
}
