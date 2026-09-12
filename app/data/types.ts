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

// US grade levels, since that's the framing a reader actually thinks in day to
// day — "college" especially isn't an age range at all. Grade systems vary by
// country, so UI showing these should say so rather than assume the US system
// is universal.
export type GradeBand = "middle-school" | "high-school" | "college";

// Concrete next steps for someone at a given stage. Availability of clubs and
// programs varies a lot by school and region, so the wording should hedge
// ("if available") rather than assume every reader has access to the same things.
export type NextStepSuggestion = {
  project: string;
  tool: string;
  activity: string;
  relatedField: FieldSlug;
};

export type NextSteps = Record<GradeBand, NextStepSuggestion>;

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
  // Only ever a real, sourced figure. A few fields aren't tracked by BLS as an
  // occupation of their own, or are counted inside a broader one whose figure
  // already appears on another field's page. Those leave salary out and use
  // salaryNote to say so and point to the related page, rather than borrowing
  // or approximating a number that isn't really about the field.
  salary?: SalaryData;
  salaryNote?: string;
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

// A single course within one year of a published curriculum. `code` is
// optional since not every school's public degree plan lists course codes
// cleanly (some only name the course).
export type CurriculumCourse = {
  name: string;
  code?: string;
};

// One year of a curriculum, optionally split by term if the source publishes
// that level of detail — `term` is left out entirely when a school only
// publishes a year-level course list, not a Fall/Spring breakdown.
export type CurriculumYear = {
  year: number;
  term?: string;
  courses: CurriculumCourse[];
};

// A real, published course sequence for one major at one school — never
// invented or approximated. Every entry must trace back to `sourceUrl`, the
// same "no number without a citation" rule the site already applies to
// salary data (see SalaryData above). `catalogYear` matters because degree
// requirements change from year to year, so this pins exactly which version
// of the catalog was used.
export type CurriculumSequence = {
  slug: string;
  fieldSlug: FieldSlug;
  // The school's own name for the major — often differs from our FieldSlug
  // label (e.g. "Mechanical Engineering Technology" vs. "Mechanical Engineering").
  majorName: string;
  schoolName: string;
  catalogYear: string;
  sourceUrl: string;
  years: CurriculumYear[];
};

export type TipConfidence = "research-backed" | "varies by situation" | "personal experience";

export type TipTheme = "study-strategies" | "course-planning" | "internships" | "research" | "workload-and-burnout";

// Every tip has to say what it depends on — a specific school, a personality
// type, a major, a circumstance — rather than being stated as universally
// true. sourceUrl is optional (only present when confidence is
// "research-backed" and there's a real citation); dependsOn is not optional,
// on purpose, for every confidence level including "personal experience".
export type CollegeTip = {
  slug: string;
  text: string;
  theme: TipTheme;
  confidence: TipConfidence;
  dependsOn: string;
  sourceUrl?: string;
};
