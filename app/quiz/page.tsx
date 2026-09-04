"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";
import FieldIcon from "../components/FieldIcon";
import { quizQuestions } from "../data/quiz";
import { quizQuestionsEs } from "../data/quiz.es";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { challenges } from "../data/challenges";
import { challengesEs } from "../data/challenges.es";
import { computeResults, THEME_LABELS } from "./scoring";
import RadarChart from "./RadarChart";
import { useLanguage } from "../context/LanguageContext";
import { quizTranslations } from "../data/translations/quiz";
import { useExploration } from "../hooks/useExploration";

type Stage = "intro" | "question" | "results";

// A field counts as a "close" match to the top result if it's within this many
// percentage points — roughly the swing of a single answer, so it's not a false tie.
const CLOSE_MATCH_THRESHOLD = 8;

function shortName(name: string, language: "en" | "es") {
  if (language === "es") return name.replace(/^Ingeniería\s+(de\s+|en\s+)?/, "");
  return name.replace(" Engineering", "");
}

export default function QuizPage() {
  const { language } = useLanguage();
  const t = quizTranslations[language];
  const displayFields = language === "es" ? fieldsEs : fields;
  const displayQuestions = language === "es" ? quizQuestionsEs : quizQuestions;
  const displayChallenges = language === "es" ? challengesEs : challenges;
  const themeLabel = THEME_LABELS[language];
  const { saveQuizResult } = useExploration();

  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );

  const question = displayQuestions[currentIndex];
  const selected = answers[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  function selectOption(optionIndex: number) {
    const next = [...answers];
    next[currentIndex] = optionIndex;
    setAnswers(next);
  }

  function goNext() {
    if (isLastQuestion) {
      const finalResults = computeResults(answers, displayQuestions);
      if (finalResults[0] && finalResults[0].percentage > 0) {
        saveQuizResult(finalResults[0].slug, finalResults[0].percentage);
      }
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
            {t.sideLabelQuiz}
          </span>
        </div>
        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          <FieldIcon slug="biomedical-engineering" className="h-8 w-8 text-primary/40" />
          <span className="rotate-90 whitespace-nowrap font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.sideLabelQuestionsFields(quizQuestions.length, displayFields.length)}
          </span>
        </div>

        <span className="mb-4 rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {t.badge}
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:max-w-3xl lg:text-6xl 2xl:text-7xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400 lg:max-w-2xl lg:text-xl">
          {t.intro(quizQuestions.length)}
        </p>

        <div className="mt-8">
          <Button onClick={() => setStage("question")}>{t.startButton}</Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          {displayFields.map((field) => (
            <FieldIcon key={field.slug} slug={field.slug} className="h-7 w-7 text-neutral-300 dark:text-neutral-700" />
          ))}
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.scoredAgainst(displayFields.length)}
        </p>

        <div className="mt-16 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">01</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              {t.card1Title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.card1Body(quizQuestions.length)}</p>
          </Card>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">02</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              {t.card2Title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.card2Body(displayFields.length)}</p>
          </Card>
          <Card>
            <span className="font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">03</span>
            <h2 className="mb-2 mt-3 text-lg font-semibold text-neutral-900 dark:text-white">
              {t.card3Title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.card3Body}</p>
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
            {t.questionLabel} {String(currentIndex + 1).padStart(2, "0")} / {quizQuestions.length}
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
            {t.backButton}
          </Button>
          <Button onClick={goNext} disabled={selected === null}>
            {isLastQuestion ? t.seeResultsButton : t.nextButton}
          </Button>
        </div>
      </main>
    );
  }

  // Results
  const results = computeResults(answers, displayQuestions);
  const topPercentage = results[0]?.percentage ?? 0;
  const topMatches =
    topPercentage > 0 ? results.filter((r) => r.percentage >= topPercentage - CLOSE_MATCH_THRESHOLD) : [];

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.yourResults}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {t.fieldsWorthExploring}
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">{t.resultsIntro}</p>

      <div className="mt-10">
        <RadarChart results={results} />
      </div>

      {topMatches.length === 0 && (
        <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">{t.noAnswersScored}</p>
      )}

      <div className="mt-10 flex flex-col gap-6">
        {topMatches.map((result, i) => {
          const field = displayFields.find((f) => f.slug === result.slug)!;
          const mightNotEnjoy = [field.thingsPeopleDislike[0], field.challenges[0]].filter(
            (item): item is string => Boolean(item)
          );
          const relatedChallenge = displayChallenges.find((c) => c.field === field.slug);

          return (
            <FadeIn key={field.slug} delay={i * 100}>
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
                    <span className="flex-shrink-0 rounded-full bg-accent/10 px-3 py-1 font-mono text-sm font-semibold text-accent">
                      {result.percentage}% {t.matchLabel}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {field.tagline}
                  </p>
                </div>
              </div>

              {(result.topThemes.length > 0 || result.topReasons.length > 0) && (
                <div className="mt-4 border-t border-neutral-900/10 pt-4 dark:border-white/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                    {t.whyYouMatched}
                  </h3>
                  {result.topThemes.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {result.topThemes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {themeLabel[theme]}
                        </span>
                      ))}
                    </div>
                  )}
                  {result.topReasons.length > 0 && (
                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                      {t.specificallyYouLeanedBefore}{" "}
                      <span className="text-neutral-800 dark:text-neutral-200">
                        &ldquo;{result.topReasons[0]}&rdquo;
                      </span>
                      {result.topReasons[1] && (
                        <>
                          {" "}
                          {t.andWord}{" "}
                          <span className="text-neutral-800 dark:text-neutral-200">
                            &ldquo;{result.topReasons[1]}&rdquo;
                          </span>
                        </>
                      )}
                      .
                    </p>
                  )}
                </div>
              )}

              {mightNotEnjoy.length > 0 && (
                <div className="mt-4 border-t border-neutral-900/10 pt-4 dark:border-white/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                    {t.mightNotEnjoy}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {mightNotEnjoy.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-900/10 pt-4 dark:border-white/10">
                <Link
                  href={`/engineering/${field.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {t.exploreThisField}
                </Link>
                {relatedChallenge && (
                  <Link
                    href={`/challenges/${relatedChallenge.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {t.tryRelatedChallenge}
                  </Link>
                )}
                <Link href="/compare" className="text-sm font-medium text-primary hover:underline">
                  {t.compareWithOtherFields}
                </Link>
              </div>
            </Card>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-12 border-t border-neutral-900/10 pt-8 dark:border-white/10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          {t.allFieldsRanked(results.length)}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {results.map((result) => {
            const field = displayFields.find((f) => f.slug === result.slug)!;
            return (
              <Link
                key={field.slug}
                href={`/engineering/${field.slug}`}
                className="group flex items-center gap-3"
              >
                <span className="w-24 flex-shrink-0 truncate text-sm text-neutral-600 group-hover:text-primary dark:text-neutral-400">
                  {shortName(field.name, language)}
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
          {t.exploreAllFields}
        </Button>
        <Button variant="secondary" onClick={restart}>
          {t.retakeQuiz}
        </Button>
      </div>
      <Link href="/my-summary" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
        {t.seeSummaryLink}
      </Link>

      <div className="mt-12 border-t border-neutral-900/10 pt-8 dark:border-white/10">
        <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
          {t.curiousAboutSmaller}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
          {t.smallerFieldsBody}
        </p>
        <Link
          href="/quiz/more-majors"
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          {t.trySmallerQuiz}
        </Link>
      </div>
    </main>
  );
}
