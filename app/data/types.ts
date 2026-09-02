export type Career = {
  title: string;
  description: string;
};

export type FieldSlug =
  | "mechanical-engineering"
  | "electrical-engineering"
  | "civil-engineering"
  | "biomedical-engineering"
  | "software-engineering";

export type Level = "Low" | "Medium" | "High";

// A snapshot of a typical workday as a short sequence of labeled blocks, not
// literal clock times — the field descriptions don't specify hours, so this
// stays honest about being a rough sequence rather than a precise schedule.
export type WorkdayBlock = {
  label: string;
  detail: string;
};

// Traceable, qualitative reads of each field's own written content (not
// invented scores) — see the comment above each field's `stats` in fields.ts
// for exactly which sentence each rating comes from.
export type FieldStats = {
  mathIntensity: Level;
  handsOnWork: Level;
  regulatoryBurden: Level;
  marketUncertainty: Level;
  coding: Level;
  outdoorWork: Level;
  biologyContent: Level;
  creativeFreedom: Level;
  teamwork: Level;
  seeingWorkRealLife: Level;
};

// The 4 stats shown in each field page's compact "At a Glance" box — kept separate
// from the full FieldStats so that box doesn't grow every time a new comparison
// axis is added for the /compare page.
export type CoreFieldStats = Pick<
  FieldStats,
  "mathIntensity" | "handsOnWork" | "regulatoryBurden" | "marketUncertainty"
>;

// A sourced, dated wage figure — never a number without a citation attached.
export type SalaryData = {
  medianAnnual: string;
  period: string;
  region: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
};

export type AgeBand = "10-12" | "13-15" | "16-18";

// Concrete next steps for someone at a given age/stage. Availability of clubs and
// programs varies a lot by school and region, so the wording should hedge
// ("if available") rather than assume every reader has access to the same things.
export type NextStepSuggestion = {
  project: string;
  tool: string;
  activity: string;
  relatedField: FieldSlug;
};

export type NextSteps = Record<AgeBand, NextStepSuggestion>;

export type EngineeringField = {
  slug: FieldSlug;
  name: string;
  tagline: string;
  whatItIs: string;
  whatEngineersWorkOn: string;
  realWorldExamples: string[];
  commonMisconceptions: string[];
  usefulSubjects: string[];
  helpfulSkills: string[];
  typicalProjects: string[];
  typicalWorkday: string;
  workdayTimeline: WorkdayBlock[];
  stats: FieldStats;
  salary: SalaryData;
  nextSteps: NextSteps;
  industries: string[];
  relatedMajors: string[];
  careerPaths: Career[];
  advantages: string[];
  challenges: string[];
  thingsPeopleDislike: string[];
  howCompetitive: string;
  beginnerActivities: string[];
  selfReflectionQuestions: string[];
};

// A small, fixed vocabulary of interest themes used to explain quiz results in
// plain language ("you leaned toward hands-on building") instead of just a
// percentage. Kept short on purpose so results stay readable.
export type QuizTheme =
  | "hands-on-building"
  | "electronics"
  | "structures-infrastructure"
  | "biology-health"
  | "coding-software"
  | "abstract-problem-solving"
  | "debugging-troubleshooting"
  | "regulation-safety"
  | "public-impact"
  | "long-term-projects"
  | "fast-iteration"
  | "teamwork-collaboration"
  | "independent-work";

export type QuizOption = {
  text: string;
  // Only the fields this option is relevant to need to be listed.
  points: Partial<Record<FieldSlug, number>>;
  // What this specific answer signals about the person's interests, independent
  // of which field it happens to score. Can be empty for hedging/negative options
  // that don't clearly signal a theme.
  themes: QuizTheme[];
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Challenge = {
  slug: string;
  title: string;
  field: FieldSlug;
  tagline: string;
  difficulty: Difficulty;
  estimatedTime: string;
  approximateCost: string;
  materials: string[];
  instructions: string[];
  skillsLearned: string[];
};