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
};

// A sourced, dated wage figure — never a number without a citation attached.
export type SalaryData = {
  medianAnnual: string;
  period: string;
  region: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
};

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

export type QuizOption = {
  text: string;
  // Only the fields this option is relevant to need to be listed.
  points: Partial<Record<FieldSlug, number>>;
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