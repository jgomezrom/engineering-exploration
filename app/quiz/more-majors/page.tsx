"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import Card from "../../components/Card";
import FieldIcon from "../../components/FieldIcon";
import { stubQuizQuestions } from "../../data/stubQuiz";
import { fieldStubs } from "../../data/fieldStubs";

type Stage = "intro" | "question" | "results";

function tallyResults(answers: (number | null)[]) {
  const tally: Record<string, number> = {};
  stubQuizQuestions.forEach((question, i) => {
    const optionIndex = answers[i];
    if (optionIndex === null) return;
    const option = question.options[optionIndex];
    for (const slug of option.stubFields) {
      tally[slug] = (tally[slug] ?? 0) + 1;
    }
  });
  return Object.entries(tally)
    .map(([slug, count]) => ({ slug, count }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
}

export default function MoreMajorsQuizPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(stubQuizQuestions.length).fill(null)
  );

  const question = stubQuizQuestions[currentIndex];
  const selected = answers[currentIndex];
  const isLastQuestion = currentIndex === stubQuizQuestions.length - 1;
  const answeredCount = answers.filter((a) => a !== null).length;

  function selectOption(optionIndex: number) {
    const next = [...answers];
    next[currentIndex] = optionIndex;
    setAnswers(next);
  }

  function goNext() {
    if (isLastQuestion) {
      setStage("results");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function goBack() {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  }

  function restart() {
    setAnswers(Array(stubQuizQuestions.length).fill(null));
    setCurrentIndex(0);
    setStage("intro");
  }

  if (stage === "intro") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          Optional · bonus round
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
          The Smaller Majors
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
          Nuclear, petroleum, marine, semiconductor, and other fields that don&apos;t (yet) have
          the full research depth to fit into the main quiz&apos;s scoring. This is {stubQuizQuestions.length}{" "}
          quick questions, and it gives you a simple tally, not a percentage — think of it as
          noticing a spark of interest, not a real match score.
        </p>
        <div className="mt-8">
          <Button onClick={() => setStage("question")}>Start</Button>
        </div>
        <div className="mt-8">
          <Link href="/quiz" className="text-sm font-medium text-primary hover:underline">
            ← Back to the main quiz
          </Link>
        </div>
      </main>
    );
  }

  if (stage === "question") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            Question {String(currentIndex + 1).padStart(2, "0")} / {stubQuizQuestions.length}
          </span>
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {Math.round(((currentIndex + 1) / stubQuizQuestions.length) * 100)}%
          </span>
        </div>
        <div className="mt-2 h-1 w-full bg-neutral-100 dark:bg-neutral-900">
          <div
            className="h-1 bg-primary transition-all"
            style={{ width: `${((currentIndex + 1) / stubQuizQuestions.length) * 100}%` }}
          />
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-neutral-900 dark:text-white">
          {question.prompt}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((option, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={option.text}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectOption(i)}
                className={`border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-neutral-900/10 hover:border-primary/40 dark:border-white/10"
                }`}
              >
                <span
                  className={
                    isSelected
                      ? "text-primary"
                      : "text-neutral-700 dark:text-neutral-300"
                  }
                >
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={currentIndex === 0}
            className="text-sm font-medium text-neutral-600 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400"
          >
            Back
          </button>
          <Button onClick={goNext} disabled={selected === null}>
            {isLastQuestion ? "See results" : "Next"}
          </Button>
        </div>
      </main>
    );
  }

  const results = tallyResults(answers);
  const maxCount = results[0]?.count ?? 0;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Your results
      </span>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Fields that came up for you
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
        This counts how many of your {answeredCount} answers pointed toward each field — it&apos;s
        a tally, not a percentage match. These are brief-overview fields on this site, so treat
        this as a starting point for curiosity, even more than the main quiz results are.
      </p>

      {results.length === 0 ? (
        <p className="mt-10 text-neutral-600 dark:text-neutral-400">
          None of your answers pointed toward one of these fields this time — that&apos;s a
          real result too. Feel free to retake it or head back to the main quiz.
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {results.map((result) => {
            const stub = fieldStubs.find((s) => s.slug === result.slug);
            if (!stub) return null;
            return (
              <Link key={result.slug} href={`/engineering/${stub.slug}`}>
                <Card>
                  <div className="flex items-center justify-between">
                    <FieldIcon slug={stub.slug} className="h-8 w-8 text-primary" />
                    <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                      {result.count} / {stubQuizQuestions.length} answers
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                    {stub.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{stub.tagline}</p>
                  <div className="mt-3 h-1.5 w-full bg-neutral-100 dark:bg-neutral-900">
                    <div
                      className="h-1.5 bg-primary"
                      style={{ width: `${(result.count / maxCount) * 100}%` }}
                    />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      <div className="mt-12 flex flex-col gap-4 border-t border-neutral-900/10 pt-8 sm:flex-row dark:border-white/10">
        <Button onClick={restart} variant="secondary">
          Retake this quiz
        </Button>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          Back to the main quiz
        </Link>
      </div>
    </main>
  );
}
