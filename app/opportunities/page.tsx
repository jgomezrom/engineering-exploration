import type { Metadata } from "next";
import OpportunitiesContent from "../components/OpportunitiesContent";

export const metadata: Metadata = {
  title: "Finding Opportunities Near You | Engineering Exploration",
  description:
    "This site doesn't know where you live, and won't ask. Here's how to actually search for clubs, competitions, and programs in your own area.",
};

export default function OpportunitiesPage() {
  return <OpportunitiesContent />;
}
