// A lighter, separate quiz for the brief-overview fields in fieldStubs.ts.
// Those fields don't have the depth (FieldStats, Day in the Life, etc.) the
// main quiz's weighted-percentage scoring relies on, so this uses a simple
// tally instead of a percentage — each option points directly at 1-2 stub
// fields, and results just count how often each field came up. Less
// precise than the main quiz on purpose, and labeled as such.
export type StubQuizOption = {
  text: string;
  stubFields: string[];
};

export type StubQuizQuestion = {
  id: string;
  prompt: string;
  options: StubQuizOption[];
};

export const stubQuizQuestions: StubQuizQuestion[] = [
  {
    id: "product",
    prompt: "Which of these would you rather help create?",
    options: [
      { text: "A car or road vehicle", stubFields: ["automotive-engineering"] },
      { text: "A building's structural frame", stubFields: ["structural-engineering"] },
      { text: "A computer chip", stubFields: ["semiconductor-engineering"] },
      { text: "How a building's systems actually work, not just how it looks", stubFields: ["architectural-engineering"] },
    ],
  },
  {
    id: "thinking-style",
    prompt: "Which best describes how you like to think through a problem?",
    options: [
      { text: "Zooming out to see how a huge, complex project's pieces fit together", stubFields: ["systems-engineering"] },
      { text: "Making sure something can physically hold up under real forces", stubFields: ["structural-engineering"] },
      { text: "Optimizing an existing process to work better", stubFields: ["manufacturing-engineering"] },
      { text: "Working at an extremely small, precise scale", stubFields: ["semiconductor-engineering"] },
    ],
  },
  {
    id: "values",
    prompt: "Which of these matters most to you in future work?",
    options: [
      { text: "Working with cutting-edge, highly precise technology", stubFields: ["semiconductor-engineering"] },
      { text: "Keeping essential infrastructure — power, buildings — safe and standing", stubFields: ["structural-engineering", "energy-engineering"] },
      { text: "Designing how a building actually functions, not just its structure", stubFields: ["architectural-engineering"] },
    ],
  },
  {
    id: "day-at-work",
    prompt: "Which sounds like a more appealing day at work?",
    options: [
      { text: "In a cleanroom lab, working with materials at a microscopic scale", stubFields: ["semiconductor-engineering"] },
      { text: "On a factory floor, watching a process run and improving it", stubFields: ["manufacturing-engineering"] },
      { text: "In an office, coordinating how a huge project's many moving parts fit together", stubFields: ["systems-engineering"] },
    ],
  },
  {
    id: "workplace-environment",
    prompt: "Which environment sounds most appealing for your actual day-to-day work?",
    options: [
      { text: "A test track or shop, tuning how a vehicle performs", stubFields: ["automotive-engineering"] },
      { text: "A power plant or renewable energy site", stubFields: ["energy-engineering"] },
      { text: "A job site, watching a large structure go up", stubFields: ["structural-engineering"] },
      { text: "A cleanroom, working at a microscopic scale", stubFields: ["semiconductor-engineering"] },
    ],
  },
  {
    id: "problem-scale",
    prompt: "Which scale of problem appeals to you more?",
    options: [
      { text: "Millions of identical parts, assembled the same way every time", stubFields: ["manufacturing-engineering"] },
      { text: "One massive, one-of-a-kind project with countless moving pieces", stubFields: ["systems-engineering"] },
      { text: "A single vehicle, refined down to the smallest detail", stubFields: ["automotive-engineering"] },
      { text: "A single building, engineered to handle exactly the loads it needs to", stubFields: ["structural-engineering"] },
    ],
  },
  {
    id: "public-need",
    prompt: "Which public need would you rather help meet?",
    options: [
      { text: "Keeping the power grid reliable as demand keeps growing", stubFields: ["energy-engineering"] },
      { text: "Making sure buildings and bridges can take the load", stubFields: ["structural-engineering"] },
      { text: "Making vehicles safer and more efficient", stubFields: ["automotive-engineering"] },
      { text: "Designing how a building's systems actually work together", stubFields: ["architectural-engineering"] },
    ],
  },
];
