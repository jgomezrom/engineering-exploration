import Link from "next/link";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        For curious minds
      </span>

      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
        What kind of engineer do you want to be?
      </h1>

      <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
        Explore what engineers actually do — the real stuff, not just the highlight reel — and find fields worth getting curious about. No pressure to already know what you want to be.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="/explore" variant="primary">
          Explore Engineering Fields
        </Button>
        <Button href="/quiz" variant="secondary">
          Take the Interest Quiz
        </Button>
      </div>
      <div className="mt-20 grid w-full max-w-4xl gap-6 sm:grid-cols-3">
  <Card>
    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
      Explore Fields
    </h3>
    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
      Browse 5 major engineering fields and see what each one is really like.
    </p>
    <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
      Start exploring →
    </Link>
  </Card>

  <Card>
    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
      Take the Quiz
    </h3>
    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
      Answer a few questions about what you enjoy, and get fields worth exploring.
    </p>
    <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
      Take the quiz →
    </Link>
  </Card>

  <Card>
    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
      Try a Challenge
    </h3>
    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
      Test out small, hands-on engineering activities you can do at home.
    </p>
    <Link href="/challenges" className="text-sm font-medium text-primary hover:underline">
      See challenges →
    </Link>
  </Card>
</div>
    </main>
  );
}
