import type { Metadata } from "next";
import { fields } from "../data/fields";
import { quizQuestions } from "../data/quiz";

export const metadata: Metadata = {
  title: "Which Engineering Field Fits You? | Engineering Exploration",
  description: `Take a free ${quizQuestions.length}-question interest quiz and get a percentage match across ${fields.length} engineering fields, based on how you actually answered — not a verdict, a starting point.`,
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
