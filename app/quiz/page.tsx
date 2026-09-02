"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import FieldIcon from "../components/FieldIcon";
import { quizQuestions } from "../data/quiz";
import { fields } from "../data/fields";
import { computeResults } from "./scoring";
import RadarChart from "./RadarChart";

type Stage = "intro" | "question" | "results";

// A field counts as a "close" match to the top result if it's within this many
// percentage points — roughly the swing of a single answer, so it's not a false tie.
const CLOSE_MATCH_THRESHOLD = 8;

function shortName(name: string) {
  return name.replace(" Engineering", "");
}

export default function QuizPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );

  const question = quizQuestions[currentIndex];
  const selected = answers[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

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
    setAnswers(Array(quizQuestions.length).fill(null));
    setCurrentIndex(0);
    setStage("intro");
  }

  if (stage === "intro") {
    return (
      <main className="relative flex flex-col items-center px-6 py-24 text-center">
        <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
        <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
        <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
        <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

        <div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="civil-engineering" className="h-8 w-8 text-primary/40" />
          <span className="-rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            INTEREST QUIZ
          </span>
        </div>
        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="biomedical-engineering" className="h-8 w-8 text-primary/40" />
          <span className="rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            {quizQuestions.length} QUESTIONS · 5 FIELDS
          </span>
        </div>

        <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          5-minute quiz
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:max-w-3xl lg:text-6xl 2xl:text-7xl">
          Which engineering field fits you?
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400 lg:max-w-2xl lg:text-xl">
          {quizQuestions.length} quick questions about how you like to think, build, and work.
          There are no right answers — this just helps narrow down where to start exploring.
        </p>

        <div className="mt-8">
          <Button onClick={() => setStage("question")}>Start the quiz</Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          {fields.map((field) => (
            <FieldIcon key={field.slug} slug={field.slug} className="h-7 w-7 text-neutral-300 dark:text-neutral-700" />
          ))}
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          Scored against all 5 fields
        </p>

        <div className="mt-16 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">01</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              Answer honestly
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {quizQuestions.length} scenario-based questions. No right answers, just what actually
              appeals to you.
            </p>
          </Card>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">02</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              See your match %
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              A radar chart shows how you compare across all 5 fields, not just a single verdict.
            </p>
          </Card>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">03</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              Explore further
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Jump straight into the real field pages for whatever matched best.
            </p>
          </Card>
        </div>
      </main>
    );
  }

  if (stage === "question") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="flex items-center justify-between font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
          <span>
            QUESTION {String(currentIndex + 1).padStart(2, "0")} / {quizQuestions.length}
          </span>
          <span>{Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}%</span>
        </div>
        <div className="mt-2 h-1 w-full bg-neutral-100 dark:bg-neutral-900">
          <div
            className="h-1 bg-primary transition-all"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>

        <h1 className="mt-8 text-2xl font-semibold text-neutral-900 dark:text-white">
          {question.prompt}
        </h1>

        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((option, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={option.text}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectOption(i)}
                className={`flex items-center gap-4 border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-neutral-900/10 hover:border-primary/40 dark:border-white/10"
                }`}
              >
                <span
                  className={`h-3 w-3 flex-shrink-0 rounded-full border-2 ${
                    isSelected ? "border-primary bg-primary" : "border-neutral-300 dark:border-neutral-600"
                  }`}
                />
                <span className="text-neutral-800 dark:text-neutral-200">{option.text}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-between">
          <Button variant="secondary" onClick={goBack} disabled={currentIndex === 0}>
            Back
          </Button>
          <Button onClick={goNext} disabled={selected === null}>
            {isLastQuestion ? "See results" : "Next"}
          </Button>
        </div>
      </main>
    );
  }

  // Results
  const results = computeResults(answers);
  const topPercentage = results[0]?.percentage ?? 0;
  const topMatches =
    topPercentage > 0 ? results.filter((r) => r.percentage >= topPercentage - CLOSE_MATCH_THRESHOLD) : [];

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Your results
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Fields worth exploring
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        This isn&apos;t a verdict — it&apos;s a starting point based on how you answered. Each
        percentage is scored independently against that field&apos;s own maximum, so it&apos;s
        completely normal for more than one field to come back high.
      </p>

      <div className="mt-10">
        <RadarChart results={results} />
      </div>

      {topMatches.length === 0 && (
        <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
          No answers were scored, so there&apos;s no match to show yet — try taking the quiz
          again and picking an answer for each question.
        </p>
      )}

      <div className="mt-10 flex flex-col gap-4">
        {topMatches.map((result) => {
          const field = fields.find((f) => f.slug === result.slug)!;
          return (
            <Link key={field.slug} href={`/engineering/${field.slug}`}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FieldIcon slug={field.slug} className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {field.name}
                      </h2>
                      <span className="flex-shrink-0 font-mono text-sm text-primary">
                        {result.percentage}% match
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {field.tagline}
                    </p>
                    {result.topReasons.length > 0 && (
                      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                        This tracks with how you answered — you leaned toward{" "}
                        <span className="text-neutral-700 dark:text-neutral-300">
                          &ldquo;{result.topReasons[0]}&rdquo;
                        </span>
                        {result.topReasons[1] && (
                          <>
                            {" "}
                            and{" "}
                            <span className="text-neutral-700 dark:text-neutral-300">
                              &ldquo;{result.topReasons[1]}&rdquo;
                            </span>
                          </>
                        )}
                        .
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 border-t border-neutral-900/10 pt-8 dark:border-white/10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          All 5 fields, ranked
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {results.map((result) => {
            const field = fields.find((f) => f.slug === result.slug)!;
            return (
              <Link
                key={field.slug}
                href={`/engineering/${field.slug}`}
                className="group flex items-center gap-3"
              >
                <span className="w-24 flex-shrink-0 truncate text-sm text-neutral-600 group-hover:text-primary dark:text-neutral-400">
                  {shortName(field.name)}
                </span>
                <div className="h-2 flex-1 bg-neutral-100 dark:bg-neutral-900">
                  <div className="h-2 bg-primary" style={{ width: `${result.percentage}%` }} />
                </div>
                <span className="w-10 flex-shrink-0 text-right font-mono text-sm text-neutral-600 dark:text-neutral-400">
                  {result.percentage}%
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/explore" variant="primary">
          Explore all fields
        </Button>
        <Button variant="secondary" onClick={restart}>
          Retake the quiz
        </Button>
      </div>
    </main>
  );
}
