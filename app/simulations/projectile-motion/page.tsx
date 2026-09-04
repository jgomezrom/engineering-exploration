import type { Metadata } from "next";
import ProjectileContent from "../../components/ProjectileContent";

export const metadata: Metadata = {
  title: "Projectile Motion Simulator | Engineering Exploration",
  description:
    "Adjust launch angle and power and watch the trajectory change instantly, with the range formula explained — and an honest note on what it doesn't model.",
};

export default function ProjectileMotionPage() {
  return <ProjectileContent />;
}
