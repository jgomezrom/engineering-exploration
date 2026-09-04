import type { Metadata } from "next";
import MeetEngineersContent from "../components/MeetEngineersContent";

const title = "How to Actually Meet a Real Engineer | Engineering Exploration";
const description =
  "This site can't interview engineers for you, but talking to a real one beats anything written here. Where to find one, what to ask, and how to stay safe doing it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/meet-engineers" },
  openGraph: { title, description, url: "/meet-engineers", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function MeetEngineersPage() {
  return <MeetEngineersContent />;
}
