import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which Engineering Field Fits You? | Engineering Exploration",
  description:
    "Take a free 18-question interest quiz and get a percentage match across 5 engineering fields, based on how you actually answered — not a verdict, a starting point.",
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
