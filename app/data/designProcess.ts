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
      "Figure out what problem you're actually solving, and what would count as success. A lot of bad designs come from skipping this and jumping straight to building.",
  },
  {
    id: "imagine",
    name: "Imagine",
    description:
      "Come up with as many possible approaches as you can, even ones that seem unlikely to work. The goal here is options, not the final answer.",
  },
  {
    id: "plan",
    name: "Plan",
    description:
      "Pick one approach and work out the specifics — what you'll need, roughly how it'll go together, and what could go wrong.",
  },
  {
    id: "build",
    name: "Build",
    description:
      "Actually make it. Plans always meet reality here, and reality usually wins — that's expected, not a sign you planned it wrong.",
  },
  {
    id: "test",
    name: "Test",
    description:
      "Try it under real conditions and see what actually happens, not just what you expected to happen.",
  },
  {
    id: "improve",
    name: "Improve",
    description:
      "Use what you learned from testing to change the design. This is usually where most of the actual learning happens — often more than the first build.",
  },
];
