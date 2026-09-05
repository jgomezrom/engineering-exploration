import { CurriculumSequence } from "./types";

// PLACEHOLDER DATA — every school name, catalog year, source link, and course
// below is invented, purely to verify the curriculum-viewer layout (multiple
// schools compared side by side, year-by-year, a major with only one school
// on file). None of it should be treated as real. Real, sourced curricula
// replace these entries entirely — see CollegeTip's own note in
// collegeTips.ts for the same caveat applied to tips.
export const collegeCurricula: CurriculumSequence[] = [
  {
    slug: "placeholder-example-state-mechanical",
    fieldSlug: "mechanical-engineering",
    majorName: "Mechanical Engineering, B.S.",
    schoolName: "Example State University",
    catalogYear: "2025–2026",
    sourceUrl: "https://example.edu/catalog/mechanical-engineering",
    years: [
      {
        year: 1,
        courses: [
          { name: "Calculus I", code: "MATH 101" },
          { name: "Introduction to Mechanical Engineering", code: "ME 101" },
          { name: "General Chemistry", code: "CHEM 101" },
          { name: "English Composition", code: "ENGL 101" },
        ],
      },
      {
        year: 2,
        courses: [
          { name: "Calculus III", code: "MATH 231" },
          { name: "Statics", code: "ME 210" },
          { name: "Dynamics", code: "ME 220" },
          { name: "Circuits for Non-Majors", code: "ECE 200" },
        ],
      },
      {
        year: 3,
        courses: [
          { name: "Thermodynamics", code: "ME 310" },
          { name: "Fluid Mechanics", code: "ME 320" },
          { name: "Mechanics of Materials", code: "ME 330" },
          { name: "Manufacturing Processes", code: "ME 340" },
        ],
      },
      {
        year: 4,
        courses: [
          { name: "Senior Design Project I", code: "ME 410" },
          { name: "Senior Design Project II", code: "ME 420" },
          { name: "Controls Systems", code: "ME 430" },
          { name: "Technical Elective" },
        ],
      },
    ],
  },
  {
    slug: "placeholder-sample-tech-mechanical",
    fieldSlug: "mechanical-engineering",
    majorName: "Mechanical Engineering",
    schoolName: "Sample Institute of Technology",
    catalogYear: "2024–2025",
    sourceUrl: "https://example.edu/catalog/sample-tech-mechanical",
    years: [
      {
        year: 1,
        term: "Fall",
        courses: [
          { name: "Calculus I" },
          { name: "Engineering Graphics" },
          { name: "Chemistry for Engineers" },
        ],
      },
      {
        year: 1,
        term: "Spring",
        courses: [
          { name: "Calculus II" },
          { name: "Introduction to Programming" },
          { name: "Physics I: Mechanics" },
        ],
      },
      {
        year: 2,
        term: "Fall",
        courses: [{ name: "Statics" }, { name: "Differential Equations" }, { name: "Physics II: Electricity & Magnetism" }],
      },
      {
        year: 2,
        term: "Spring",
        courses: [{ name: "Dynamics" }, { name: "Thermodynamics I" }, { name: "Materials Science" }],
      },
      {
        year: 3,
        term: "Fall",
        courses: [{ name: "Fluid Mechanics" }, { name: "Mechanics of Materials" }, { name: "Numerical Methods" }],
      },
      {
        year: 3,
        term: "Spring",
        courses: [{ name: "Heat Transfer" }, { name: "Machine Design I" }, { name: "Instrumentation Lab" }],
      },
    ],
  },
  {
    slug: "placeholder-example-state-software",
    fieldSlug: "software-engineering",
    majorName: "Computer Science, B.S. (Software Engineering track)",
    schoolName: "Example State University",
    catalogYear: "2025–2026",
    sourceUrl: "https://example.edu/catalog/software-engineering",
    years: [
      {
        year: 1,
        courses: [
          { name: "Introduction to Programming", code: "CS 101" },
          { name: "Discrete Mathematics", code: "CS 110" },
          { name: "Calculus I", code: "MATH 101" },
        ],
      },
      {
        year: 2,
        courses: [
          { name: "Data Structures & Algorithms", code: "CS 210" },
          { name: "Computer Systems", code: "CS 220" },
          { name: "Linear Algebra", code: "MATH 220" },
        ],
      },
      {
        year: 3,
        courses: [
          { name: "Software Engineering Principles", code: "CS 310" },
          { name: "Databases", code: "CS 320" },
          { name: "Operating Systems", code: "CS 330" },
        ],
      },
      {
        year: 4,
        courses: [
          { name: "Capstone Software Project I", code: "CS 410" },
          { name: "Capstone Software Project II", code: "CS 420" },
          { name: "Technical Elective" },
        ],
      },
    ],
  },
];
