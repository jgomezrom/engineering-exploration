import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        404
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        The page you&apos;re looking for isn&apos;t here. Try one of these instead.
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
