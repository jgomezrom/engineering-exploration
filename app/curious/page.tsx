import type { Metadata } from "next";
import CuriousContent from "../components/CuriousContent";

export const metadata: Metadata = {
  title: "What Are You Into? | Engineering Exploration",
  description:
    "Not sure where to start? Pick something you're already curious about and see which engineering fields connect to it.",
};

export default function CuriousPage() {
  return <CuriousContent />;
}
