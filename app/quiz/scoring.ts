import { fields } from "../data/fields";
import { quizQuestions } from "../data/quiz";
import { FieldSlug, QuizTheme, QuizQuestion } from "../data/types";

export const THEME_LABELS: Record<"en" | "es", Record<QuizTheme, string>> = {
  en: {
    "hands-on-building": "Hands-on building",
    electronics: "Electronics & circuits",
    "structures-infrastructure": "Structures & infrastructure",
    "biology-health": "Biology & health",
    "coding-software": "Coding & software",
    "abstract-problem-solving": "Abstract problem-solving",
    "debugging-troubleshooting": "Debugging & troubleshooting",
    "regulation-safety": "Regulation & safety",
    "public-impact": "Public impact",
    "long-term-projects": "Long-term projects",
    "fast-iteration": "Fast iteration",
    "teamwork-collaboration": "Teamwork",
    "independent-work": "Independent work",
  },
  es: {
    "hands-on-building": "Trabajo práctico",
    electronics: "Electrónica y circuitos",
    "structures-infrastructure": "Estructuras e infraestructura",
    "biology-health": "Biología y salud",
    "coding-software": "Programación y software",
    "abstract-problem-solving": "Resolución de problemas abstractos",
    "debugging-troubleshooting": "Depuración y solución de problemas",
    "regulation-safety": "Regulación y seguridad",
    "public-impact": "Impacto público",
    "long-term-projects": "Proyectos a largo plazo",
    "fast-iteration": "Iteración rápida",
    "teamwork-collaboration": "Trabajo en equipo",
    "independent-work": "Trabajo independiente",
  },
};

export type FieldResult = {
  slug: FieldSlug;
  rawScore: number;
  maxPossible: number;
  percentage: number; // 0-100, rounded — rawScore as a share of this field's own max
  topReasons: string[]; // up to 2 of the user's own answers that contributed most to this field
  topThemes: QuizTheme[]; // up to 3 interest themes the user's answers pointed toward, for this field
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

// `questions` only supplies display text (topReasons) — defaults to the English
// quizQuestions since `points`/`themes` are identical between languages, so the
// actual scoring never depends on which language's array is passed in.
export function computeResults(
  answers: (number | null)[],
  questions: QuizQuestion[] = quizQuestions
): FieldResult[] {
  const maxPossible = computeMaxPossiblePoints();
  const rawScores: Partial<Record<FieldSlug, number>> = {};
  const contributions: Partial<Record<FieldSlug, { text: string; points: number }[]>> = {};
  // Per field, how much weight (points) each theme accumulated — a theme that shows up
  // in several of the user's answers for that field will outweigh one that shows up once.
  const themeWeights: Partial<Record<FieldSlug, Partial<Record<QuizTheme, number>>>> = {};

  questions.forEach((question, i) => {
    const optionIndex = answers[i];
    if (optionIndex === null) return;
    const option = question.options[optionIndex];
    for (const [slug, points] of Object.entries(option.points) as [FieldSlug, number][]) {
      rawScores[slug] = (rawScores[slug] ?? 0) + points;
      (contributions[slug] ??= []).push({ text: option.text, points });

      const fieldThemeWeights = (themeWeights[slug] ??= {});
      for (const theme of option.themes) {
        fieldThemeWeights[theme] = (fieldThemeWeights[theme] ?? 0) + points;
      }
    }
  });

  return fields
    // Only score fields the quiz actually has questions calibrated for — a field
    // with no quiz coverage would otherwise show a misleading "0% match" that
    // looks like a real result instead of "this field isn't in the quiz yet."
    .filter((field) => (maxPossible[field.slug] ?? 0) > 0)
    .map((field) => {
      const slug = field.slug;
      const rawScore = rawScores[slug] ?? 0;
      const max = maxPossible[slug] ?? 0;
      const percentage = max > 0 ? Math.round((rawScore / max) * 100) : 0;
      const topReasons = (contributions[slug] ?? [])
        .sort((a, b) => b.points - a.points)
        .slice(0, 2)
        .map((c) => c.text);
      const topThemes = Object.entries(themeWeights[slug] ?? {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([theme]) => theme as QuizTheme);
      return { slug, rawScore, maxPossible: max, percentage, topReasons, topThemes };
    })
    .sort((a, b) => b.percentage - a.percentage);
}
