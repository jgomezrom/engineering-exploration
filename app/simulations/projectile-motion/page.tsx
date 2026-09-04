import type { Metadata } from "next";
import ProjectileContent from "../../components/ProjectileContent";

const title = "Projectile Motion Simulator | Engineering Exploration";
const description =
  "Adjust launch angle and power and watch the trajectory change instantly, with the range formula explained — and an honest note on what it doesn't model.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/projectile-motion" },
  openGraph: { title, description, url: "/simulations/projectile-motion", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function ProjectileMotionPage() {
  return <ProjectileContent />;
}
