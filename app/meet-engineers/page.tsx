import type { Metadata } from "next";
import MeetEngineersContent from "../components/MeetEngineersContent";

export const metadata: Metadata = {
  title: "How to Actually Meet a Real Engineer | Engineering Exploration",
  description:
    "This site can't interview engineers for you, but talking to a real one beats anything written here. Where to find one, what to ask, and how to stay safe doing it.",
};

export default function MeetEngineersPage() {
  return <MeetEngineersContent />;
}
