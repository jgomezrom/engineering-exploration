import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Smaller Majors Quiz | Engineering Exploration",
  description:
    "An optional, more informal quiz for fields like nuclear, petroleum, marine, and semiconductor engineering — a tally of interest, not a percentage match.",
};

export default function MoreMajorsQuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
