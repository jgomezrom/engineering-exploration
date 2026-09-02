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
    id: "industry",
    prompt: "Which of these industries sounds most interesting to actually work in?",
    options: [
      { text: "Energy & power generation", stubFields: ["energy-engineering", "nuclear-engineering"] },
      { text: "Oil, gas, or fuel production", stubFields: ["petroleum-engineering"] },
      { text: "Farming & food production", stubFields: ["agricultural-engineering"] },
      { text: "Ships & the ocean", stubFields: ["marine-engineering"] },
    ],
  },
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
    id: "site-visit",
    prompt: "Which of these would you be most excited to actually tour?",
    options: [
      { text: "A nuclear power plant", stubFields: ["nuclear-engineering"] },
      { text: "An oil rig or refinery", stubFields: ["petroleum-engineering"] },
      { text: "A shipyard or naval base", stubFields: ["marine-engineering"] },
      { text: "A car manufacturing plant", stubFields: ["automotive-engineering", "manufacturing-engineering"] },
    ],
  },
  {
    id: "values",
    prompt: "Which of these matters most to you in future work?",
    options: [
      { text: "Working with cutting-edge, highly precise technology", stubFields: ["semiconductor-engineering"] },
      { text: "Keeping essential infrastructure — power, buildings — safe and standing", stubFields: ["structural-engineering", "energy-engineering"] },
      { text: "Producing something the world actually needs, like food or fuel", stubFields: ["agricultural-engineering", "petroleum-engineering"] },
      { text: "Designing how a building actually functions, not just its structure", stubFields: ["architectural-engineering"] },
    ],
  },
  {
    id: "day-at-work",
    prompt: "Which sounds like a more appealing day at work?",
    options: [
      { text: "Out at a remote site — a farm, an oil field, or the open ocean", stubFields: ["agricultural-engineering", "petroleum-engineering", "marine-engineering"] },
      { text: "In a cleanroom lab, working with materials at a microscopic scale", stubFields: ["semiconductor-engineering"] },
      { text: "On a factory floor, watching a process run and improving it", stubFields: ["manufacturing-engineering"] },
      { text: "In an office, coordinating how a huge project's many moving parts fit together", stubFields: ["systems-engineering"] },
    ],
  },
];
