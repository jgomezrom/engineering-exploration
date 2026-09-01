import Button from "./components/Button";
import Card from "./components/Card.tsx";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-32 px-16">
        <h1 className="max-w-md text-center text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Engineering Exploration — coming soon
        </h1>
        <Card>
          <p className="mb-4">This is a test card component.</p>
          <div className="flex gap-3">
            <Button variant="primary">Explore Engineering</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}