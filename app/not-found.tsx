import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        404
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
        Lost in the blueprint?
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        This page doesn&apos;t exist — maybe it was never built, or the link&apos;s wrong. Try one
        of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Go Home
        </Link>
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          Explore Fields
        </Link>
      </div>
    </main>
  );
}
