export type DesignProcessStep = {
  id: string;
  name: string;
  description: string;
};

export const designProcessSteps: DesignProcessStep[] = [
  {
    id: "ask",
    name: "Ask",
    description:
      "Figure out what problem you're actually solving, and what would even count as success. Skip this step and jump straight to building, and a lot of bad designs happen right here.",
  },
  {
    id: "imagine",
    name: "Imagine",
    description:
      "Come up with as many possible approaches as you can, even the ones that seem unlikely to work. The goal at this stage is options, not the final answer.",
  },
  {
    id: "plan",
    name: "Plan",
    description:
      "Pick one approach and work out the specifics — what you'll need, roughly how it'll go together, and what could go wrong along the way.",
  },
  {
    id: "build",
    name: "Build",
    description:
      "Actually make it. Plans always meet reality here, and reality usually wins. That's expected — not a sign you planned it wrong.",
  },
  {
    id: "test",
    name: "Test",
    description:
      "Try it under real conditions and see what actually happens, not just what you were hoping would happen.",
  },
  {
    id: "improve",
    name: "Improve",
    description:
      "Take what you learned from testing and change the design. This is usually where most of the real learning happens, often more than in the first build.",
  },
];
