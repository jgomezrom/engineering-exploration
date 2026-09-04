import type { Metadata } from "next";
import ParentsAndTeachersContent from "../components/ParentsAndTeachersContent";

const title = "For Parents & Teachers | Engineering Exploration";
const description =
  "What this site is, what it stores (a couple of optional, browser-only preferences) and tracks (anonymous traffic analytics only), and how it might be useful in a classroom or at home.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/parents-and-teachers" },
  openGraph: { title, description, url: "/parents-and-teachers", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ParentsAndTeachersPage() {
  return <ParentsAndTeachersContent />;
}
