import type { Metadata } from "next";
import CollegeContent from "../components/CollegeContent";

const title = "Engineering in College | Engineering Exploration";
const description =
  "Real, sourced course sequences for engineering majors compared side by side, plus practical tips on study strategies, course planning, internships, research, and workload.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/college" },
  openGraph: { title, description, url: "/college", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function CollegePage() {
  return <CollegeContent />;
}
