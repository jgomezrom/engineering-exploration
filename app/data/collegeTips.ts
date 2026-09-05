import { CollegeTip } from "./types";

// PLACEHOLDER DATA — every tip below is invented, purely to verify the
// layout: theme grouping, the confidence-label display, the required
// dependsOn hedge, and the optional sourceUrl link. None of it should be
// treated as real advice. Real, sourced tips replace these entries entirely.
export const collegeTips: CollegeTip[] = [
  {
    slug: "placeholder-spaced-repetition",
    text: "Placeholder tip: spacing out review sessions over several days beats one long cram session for retaining technical material.",
    theme: "study-strategies",
    confidence: "research-backed",
    dependsOn: "How well this transfers depends on the type of material — it's most studied for memorization-heavy content, less so for open-ended design work.",
    sourceUrl: "https://example.edu/sources/spaced-repetition",
  },
  {
    slug: "placeholder-study-group-size",
    text: "Placeholder tip: a study group of 3–4 people tends to work better than a much larger group for problem-set-heavy courses.",
    theme: "study-strategies",
    confidence: "personal experience",
    dependsOn: "Depends heavily on group composition — one or two genuinely engaged people can outweigh group size.",
  },
  {
    slug: "placeholder-course-load-balance",
    text: "Placeholder tip: try to balance one historically hard course against lighter electives in the same term rather than stacking multiple hard courses together.",
    theme: "course-planning",
    confidence: "varies by situation",
    dependsOn: "Depends on your program's required sequencing — some majors leave little room to choose which hard courses land in the same term.",
  },
  {
    slug: "placeholder-talk-to-upperclassmen",
    text: "Placeholder tip: ask upperclassmen in your major which professors' sections of a required course they'd actually recommend before you register.",
    theme: "course-planning",
    confidence: "personal experience",
    dependsOn: "Depends on your school actually offering multiple sections with different instructors for the same course.",
  },
  {
    slug: "placeholder-internship-early",
    text: "Placeholder tip: applying for internships a full semester before the summer you want one is common in competitive fields.",
    theme: "internships",
    confidence: "varies by situation",
    dependsOn: "Timelines vary a lot by industry and by whether a company uses a formal early recruiting cycle.",
  },
  {
    slug: "placeholder-internship-not-required",
    text: "Placeholder tip: not having an internship yet by your second year is not unusual and doesn't mean you're behind.",
    theme: "internships",
    confidence: "research-backed",
    dependsOn: "How much this matters depends on your specific field's hiring norms and local job market.",
    sourceUrl: "https://example.edu/sources/internship-timing",
  },
  {
    slug: "placeholder-undergrad-research-email",
    text: "Placeholder tip: professors doing research you're interested in are often open to undergraduates emailing to ask about joining their lab, even without prior experience.",
    theme: "research",
    confidence: "varies by situation",
    dependsOn: "Depends heavily on the specific professor, lab funding, and how many students are already in the lab.",
  },
  {
    slug: "placeholder-research-vs-coursework",
    text: "Placeholder tip: undergraduate research experience is generally viewed favorably for graduate school applications, more so than for most industry-track jobs.",
    theme: "research",
    confidence: "research-backed",
    dependsOn: "Depends on the specific career path — the weight this carries differs a lot between graduate admissions and industry hiring.",
    sourceUrl: "https://example.edu/sources/research-and-admissions",
  },
  {
    slug: "placeholder-burnout-warning-signs",
    text: "Placeholder tip: a sudden drop in interest in a subject you used to enjoy can be an early sign of burnout, not necessarily a sign you chose the wrong major.",
    theme: "workload-and-burnout",
    confidence: "research-backed",
    dependsOn: "This is a general pattern, not a diagnosis — persistent burnout symptoms are worth discussing with a real counselor, not just self-managing.",
    sourceUrl: "https://example.edu/sources/burnout-signs",
  },
  {
    slug: "placeholder-workload-varies",
    text: "Placeholder tip: reported weekly workload for the same major can vary a lot between schools, and even between two students at the same school.",
    theme: "workload-and-burnout",
    confidence: "personal experience",
    dependsOn: "Depends on course selection, work/life circumstances outside school, and how a given student studies.",
  },
];
