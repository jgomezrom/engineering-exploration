export type Career = {
  title: string;
  description: string;
};

// A myth/reality pair for the flip-card presentation of a field's own
// commonMisconceptions — same facts, split into two labeled halves instead
// of one sentence. See the comment above mythsAndRealities in fields.ts.
export type MythReality = {
  myth: string;
  reality: string;
};

export type FieldSlug =
  | "mechanical-engineering"
  | "electrical-engineering"
  | "civil-engineering"
  | "biomedical-engineering"
  | "software-engineering"
  | "aerospace-engineering"
  | "chemical-engineering"
  | "computer-engineering"
  | "environmental-engineering"
  | "industrial-engineering"
  | "materials-engineering"
  | "robotics-engineering"
  | "nuclear-engineering"
  | "petroleum-engineering"
  | "agricultural-engineering"
  | "architectural-engineering"
  | "automotive-engineering"
  | "manufacturing-engineering"
  | "systems-engineering"
  | "marine-engineering"
  | "structural-engineering"
  | "energy-engineering"
  | "semiconductor-engineering";

export type Level = "Low" | "Medium" | "High";

// An illustrative example day, stepped through hour by hour. The times are
// invented for pacing, not measured — the field descriptions don't specify
// literal hours, so the UI must say plainly that this is one example day, not
// a guaranteed schedule.
export type DayInLifeBlock = {
  time: string;
  label: string;
  detail: string;
};

export type DayInLife = {
  blocks: DayInLifeBlock[];
  // A question with no right answer and nowhere it gets saved — meant to be
  // sat with, not submitted.
  reflectionQuestion: string;
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
  // When this figure was actually pulled from the source above — not when the
  // wage period itself was measured (that's `period`). Lets a reader tell how
  // stale a citation might be.
  verifiedDate: string;
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
  // Same facts as commonMisconceptions above, split into myth/reality pairs
  // for the flip-card presentation — not independently sourced content.
  mythsAndRealities: MythReality[];
  usefulSubjects: string[];
  helpfulSkills: string[];
  typicalProjects: string[];
  typicalWorkday: string;
  dayInLife: DayInLife;
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

// A lighter-weight entry for a field that doesn't yet have the full research
// depth of EngineeringField (Day in the Life, full stats, next steps, etc.).
// Salary is optional and only ever a real, sourced figure — when a field isn't
// tracked as its own government occupational category, salaryNote explains
// that honestly and points to relatedField's page for sourced data instead of
// approximating or borrowing a number that isn't really about this field.
export type FieldStub = {
  slug: FieldSlug;
  name: string;
  tagline: string;
  whatItIs: string;
  realWorldExamples: string[];
  relatedMajors: string[];
  relatedField: FieldSlug;
  salary?: SalaryData;
  salaryNote?: string;
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

// A fundamental idea that shows up across multiple fields — kept separate from
// FieldSlug so a concept can point at several related fields without forcing
// every field to reference every concept.
export type ConceptCategory = "Mechanical" | "Electrical" | "Structures & Materials" | "Software & Systems";

export type Concept = {
  slug: string;
  name: string;
  category: ConceptCategory;
  shortDefinition: string;
  explanation: string;
  realWorldExample: string;
  relatedFields: FieldSlug[];
};

// A side-by-side of an engineering role and a commonly confused non-engineering
// role, grounded in the misconceptions already written into each field's page.
export type CareerComparison = {
  slug: string;
  title: string;
  engineerRole: { title: string; description: string; typicalPath: string };
  otherRole: { title: string; description: string; typicalPath: string };
  keyDifference: string;
  relatedField: FieldSlug;
};

// Course-planning reference content for the "Do I have to be good at math?"
// page. Course names are real, standard offerings (AP is U.S.-specific, IB is
// used at some schools internationally) — availability always varies by
// school, so copy using these should keep that hedged rather than assumed.
export type CourseSubject = {
  subject: string;
  standard: string[];
  advanced: string[];
  note?: string;
};

export type FieldCourseFocus = {
  fieldSlug: FieldSlug;
  priorityCourses: string[];
};

export type TutoringResourceType = "Free" | "Low-cost or paid" | "Competition & enrichment";

export type TutoringResource = {
  name: string;
  type: TutoringResourceType;
  description: string;
};

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

// A broad grouping independent of field, so the challenge library can grow
// without every new category needing its own field slug.
export type ChallengeCategory =
  | "Mechanisms & Motion"
  | "Structures & Materials"
  | "Circuits & Electronics"
  | "Code & Logic"
  | "Chemistry & Processes"
  | "Life Sciences"
  | "Systems & Efficiency"
  | "Flight & Aerodynamics";

// Each challenge is framed as a small "mission" — a real engineering problem
// has a goal, real constraints, and a way to tell whether it worked, not just
// a set of steps to follow.
export type Challenge = {
  slug: string;
  title: string;
  field: FieldSlug;
  category: ChallengeCategory;
  tagline: string;
  difficulty: Difficulty;
  estimatedTime: string;
  approximateCost: string;
  objective: string;
  constraints: string[];
  conceptTaught: string;
  // Slug of the matching entry in concepts.ts, if one exists, so the mission
  // page can link straight to a fuller explanation.
  conceptSlug?: string;
  // Path to a matching interactive simulation under /simulations, if one exists.
  simulationHref?: string;
  // Only set for a challenge with a genuine physical risk (heat, sharp edges,
  // launching something) that isn't already covered by its own constraints —
  // one or two plain sentences, not a generic legal disclaimer.
  safetyNote?: string;
  materials: string[];
  instructions: string[];
  measureResults: string;
  skillsLearned: string[];
  // Paired with a scratch textarea, like the Day in the Life reflection
  // question — never saved or sent anywhere.
  reflectionPrompt: string;
};