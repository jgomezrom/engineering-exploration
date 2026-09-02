"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import FieldIcon from "../components/FieldIcon";
import { quizQuestions } from "../data/quiz";
import { fields } from "../data/fields";
import { FieldSlug } from "../data/types";

type Stage = "intro" | "question" | "results";

function scoreAnswers(answers: (number | null)[]): Partial<Record<FieldSlug, number>> {
  const totals: Partial<Record<FieldSlug, number>> = {};
  quizQuestions.forEach((question, i) => {
    const optionIndex = answers[i];
    if (optionIndex === null) return;
    const option = question.options[optionIndex];
    for (const [slug, points] of Object.entries(option.points) as [FieldSlug, number][]) {
      totals[slug] = (totals[slug] ?? 0) + points;
    }
  });
  return totals;
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
      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          5-minute quiz
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Which engineering field fits you?
        </h1>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
          {quizQuestions.length} quick questions about how you like to think, build, and work.
          There are no right answers — this just helps narrow down where to start exploring.
        </p>
        <Button onClick={() => setStage("question")}>Start the quiz</Button>
      </main>
    );
  }

  if (stage === "question") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="flex items-center justify-between font-mono text-xs tracking-widest text-neutral-400">
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
  const scores = scoreAnswers(answers);
  const ranked = fields
    .map((field) => ({ field, score: scores[field.slug] ?? 0 }))
    .sort((a, b) => b.score - a.score);
  const topScore = ranked[0].score;
  const topMatches = topScore > 0 ? ranked.filter((r) => r.score >= topScore - 2) : [];

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Your results
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {topMatches.length > 1 ? "You're close between a couple of fields" : "Your top match"}
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        This isn&apos;t a verdict — it&apos;s a starting point based on your answers. Read through
        the field pages below and see what actually resonates.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {topMatches.map(({ field }) => (
          <Link key={field.slug} href={`/engineering/${field.slug}`}>
            <Card>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <FieldIcon slug={field.slug} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {field.name}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {field.tagline}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t border-neutral-900/10 pt-8 dark:border-white/10">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Full breakdown
        </h3>
        <div className="mt-4 flex flex-col gap-3">
          {ranked.map(({ field, score }) => (
            <div key={field.slug} className="flex items-center gap-3">
              <span className="w-40 flex-shrink-0 truncate text-sm text-neutral-600 dark:text-neutral-400">
                {field.name}
              </span>
              <div className="h-2 flex-1 bg-neutral-100 dark:bg-neutral-900">
                <div
                  className="h-2 bg-primary"
                  style={{ width: `${topScore > 0 ? (score / topScore) * 100 : 0}%` }}
                />
              </div>
              <span className="w-6 flex-shrink-0 text-right text-sm text-neutral-400">{score}</span>
            </div>
          ))}
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
