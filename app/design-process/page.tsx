import type { Metadata } from "next";
import DesignProcessContent from "../components/DesignProcessContent";

export const metadata: Metadata = {
  title: "The Engineering Design Process | Engineering Exploration",
  description:
    "Ask, Imagine, Plan, Build, Test, Improve, Repeat — the loop engineers actually use, and why redoing a step is normal, not a mistake.",
};

export default function DesignProcessPage() {
  return <DesignProcessContent />;
}
