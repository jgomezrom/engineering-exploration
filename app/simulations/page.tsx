import type { Metadata } from "next";
import Link from "next/link";
import LeverSimulator from "../components/LeverSimulator";

export const metadata: Metadata = {
  title: "Lever & Torque Simulator | Engineering Exploration",
  description:
    "Drag two weights along a lever and watch it balance in real time — an interactive way to see how torque, not just weight, determines whether a lever tips.",
};

export default function SimulationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Simulations
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Lever &amp; Torque Simulator
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        Adjust the weight and distance on each side and watch the lever respond instantly. It&apos;s
        the same idea behind the{" "}
        <Link href="/challenges/popsicle-stick-catapult" className="font-medium text-primary hover:underline">
          popsicle-stick catapult challenge
        </Link>{" "}
        — just without needing rubber bands.
      </p>

      <div className="mt-10">
        <LeverSimulator />
      </div>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">The math behind it</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          A lever doesn&apos;t balance because the weights on each side are equal — it balances
          when the <strong>torque</strong> on each side is equal. Torque is force times distance
          from the pivot:
        </p>
        <p className="mt-4 max-w-2xl border-l-2 border-primary/40 pl-4 font-mono text-sm text-neutral-900 dark:text-white">
          torque = weight × distance from pivot
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          That&apos;s why a light weight placed far from the pivot can balance a much heavier
          weight placed close to it — a 2-unit weight at a distance of 8 produces the same torque
          (16) as an 8-unit weight at a distance of 2. It&apos;s also why a longer lever arm makes
          it easier to lift something heavy: more distance means more torque from the same amount
          of force, which is the entire idea behind a wrench, a crowbar, or a catapult&apos;s
          throwing arm.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          This simulator is a simplified model — it assumes a massless, rigid beam and ignores
          friction — the same simplifying assumptions most introductory physics problems make. Real
          levers have their own weight and flex slightly under load, which is part of why civil and
          mechanical engineers still have to test physical prototypes even after doing the math.
        </p>
        <Link href="/concepts?concept=torque" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          More on torque as a concept →
        </Link>
      </div>
    </main>
  );
}
