import type { Metadata } from "next";
import DesignProcessDiagram from "../components/DesignProcessDiagram";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "The Engineering Design Process | Engineering Exploration",
  description:
    "Ask, Imagine, Plan, Build, Test, Improve, Repeat — the loop engineers actually use, and why redoing a step is normal, not a mistake.",
};

export default function DesignProcessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        How engineers actually work
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        The Engineering Design Process
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        Every field on this site uses some version of this loop, whether it&apos;s designing a
        bridge, a circuit, or a piece of software. It&apos;s not a one-time checklist — it&apos;s a
        cycle you go around more than once.
      </p>

      <div className="mt-10 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          If you try one of the challenges on this site and it doesn&apos;t work the first time,
          that&apos;s not a failure. It&apos;s the design process doing exactly what it&apos;s
          supposed to do. Click a step below to see what it actually involves.
        </p>
      </div>

      <FadeIn className="mt-10 border border-neutral-900/10 p-6 dark:border-white/10 sm:p-10">
        <DesignProcessDiagram />
      </FadeIn>
    </main>
  );
}
