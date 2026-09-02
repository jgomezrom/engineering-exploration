import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full border-b border-neutral-100 bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900 dark:text-white">
          Engineering Exploration
        </Link>
        <div className="flex gap-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 sm:gap-6">
          <Link href="/explore" className="hover:text-primary">Explore</Link>
          <Link href="/quiz" className="hover:text-primary">Quiz</Link>
          <Link href="/challenges" className="hover:text-primary">Challenges</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
        </div>
      </nav>
    </header>
  );
}
