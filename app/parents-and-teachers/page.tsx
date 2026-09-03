import type { Metadata } from "next";
import ParentsAndTeachersContent from "../components/ParentsAndTeachersContent";

export const metadata: Metadata = {
  title: "For Parents & Teachers | Engineering Exploration",
  description:
    "What this site is, what it stores (a couple of optional, browser-only preferences) and tracks (anonymous traffic analytics only), and how it might be useful in a classroom or at home.",
};

export default function ParentsAndTeachersPage() {
  return <ParentsAndTeachersContent />;
}
