import type { Metadata } from "next";
import FaqContent from "../components/FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Engineering Exploration",
  description:
    "Quick answers to common questions about this site — math requirements, switching majors, privacy, and more — each linking to the full page behind it.",
};

export default function FaqPage() {
  return <FaqContent />;
}
