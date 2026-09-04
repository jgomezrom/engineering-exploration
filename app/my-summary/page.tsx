import type { Metadata } from "next";
import MySummaryContent from "../components/MySummaryContent";

export const metadata: Metadata = {
  title: "Your Exploration Summary | Engineering Exploration",
  description:
    "Your bookmarked fields and last quiz result, pulled together on one printable page — built entirely from what's saved in your own browser.",
};

export default function MySummaryPage() {
  return <MySummaryContent />;
}
