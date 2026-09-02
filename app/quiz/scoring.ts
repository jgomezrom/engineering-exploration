import { fields } from "../data/fields";
import { quizQuestions } from "../data/quiz";
import { FieldSlug } from "../data/types";

export type FieldResult = {
  slug: FieldSlug;
  rawScore: number;
  maxPossible: number;
  percentage: number; // 0-100, rounded — rawScore as a share of this field's own max
  topReasons: string[]; // up to 2 of the user's own answers that contributed most to this field
};

// For each question, only one answer can be picked, so the most a single question can
// contribute to a field is whichever of its options scores that field highest.
// Summing that across every question gives the field's true ceiling — the score you'd
// get if every answer you picked happened to favor that field.
function computeMaxPossiblePoints(): Partial<Record<FieldSlug, number>> {
  const max: Partial<Record<FieldSlug, number>> = {};
  for (const question of quizQuestions) {
    const bestPerFieldThisQuestion: Partial<Record<FieldSlug, number>> = {};
    for (const option of question.options) {
      for (const [slug, points] of Object.entries(option.points) as [FieldSlug, number][]) {
        bestPerFieldThisQuestion[slug] = Math.max(bestPerFieldThisQuestion[slug] ?? 0, points);
      }
    }
    for (const [slug, points] of Object.entries(bestPerFieldThisQuestion) as [FieldSlug, number][]) {
      max[slug] = (max[slug] ?? 0) + points;
    }
  }
  return max;
}

export function computeResults(answers: (number | null)[]): FieldResult[] {
  const maxPossible = computeMaxPossiblePoints();
  const rawScores: Partial<Record<FieldSlug, number>> = {};
  const contributions: Partial<Record<FieldSlug, { text: string; points: number }[]>> = {};

  quizQuestions.forEach((question, i) => {
    const optionIndex = answers[i];
    if (optionIndex === null) return;
    const option = question.options[optionIndex];
    for (const [slug, points] of Object.entries(option.points) as [FieldSlug, number][]) {
      rawScores[slug] = (rawScores[slug] ?? 0) + points;
      (contributions[slug] ??= []).push({ text: option.text, points });
    }
  });

  return fields
    .map((field) => {
      const slug = field.slug;
      const rawScore = rawScores[slug] ?? 0;
      const max = maxPossible[slug] ?? 0;
      const percentage = max > 0 ? Math.round((rawScore / max) * 100) : 0;
      const topReasons = (contributions[slug] ?? [])
        .sort((a, b) => b.points - a.points)
        .slice(0, 2)
        .map((c) => c.text);
      return { slug, rawScore, maxPossible: max, percentage, topReasons };
    })
    .sort((a, b) => b.percentage - a.percentage);
}
