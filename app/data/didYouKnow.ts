import { FieldSlug } from "./types";

// Each fact is a lightly-reworded restatement of something already written
// into that field's own page (see the file for the exact source line) —
// nothing here is a new claim, just content surfaced somewhere visitors are
// more likely to actually see it.
export type DidYouKnowFact = {
  fact: string;
  fieldSlug: FieldSlug;
};

export const didYouKnowFacts: DidYouKnowFact[] = [
  {
    // mechanical-engineering, commonMisconceptions
    fact: "Most of the hands-on skill mechanical engineers use isn't something you need before starting — it's taught during the degree, not before it.",
    fieldSlug: "mechanical-engineering",
  },
  {
    // civil-engineering, commonMisconceptions
    fact: "A lot of civil engineering isn't bridges and skylines — a lot of day-to-day work is smaller municipal projects, like road repairs and subdivision drainage.",
    fieldSlug: "civil-engineering",
  },
  {
    // biomedical-engineering, commonMisconceptions
    fact: "Most biomedical engineers never treat a patient — the work happens mostly in labs, R&D, or manufacturing, not clinical settings.",
    fieldSlug: "biomedical-engineering",
  },
  {
    // software-engineering, whatEngineersWorkOn
    fact: "Professional code is rarely written from scratch — a bigger part of the job is reading and modifying code someone else already wrote.",
    fieldSlug: "software-engineering",
  },
  {
    // aerospace-engineering, whatEngineersWorkOn
    fact: "Aerospace engineers push a design to its limits in a lab or simulation long before it's ever trusted with a real flight.",
    fieldSlug: "aerospace-engineering",
  },
  {
    // chemical-engineering, commonMisconceptions
    fact: "Chemical engineers spend less time mixing chemicals in a lab than you'd think — most of the job is designing and running large-scale industrial processes.",
    fieldSlug: "chemical-engineering",
  },
  {
    // industrial-engineering, whatItIs
    fact: "Industrial engineers often don't design a single physical product at all — their job is making an entire system, like a factory or a hospital, run more efficiently.",
    fieldSlug: "industrial-engineering",
  },
  {
    // robotics-engineering, typicalProjects
    fact: "A robotics engineer's hardest bugs are often the ones where it's not even clear yet whether the problem is mechanical, electrical, or in the code.",
    fieldSlug: "robotics-engineering",
  },
  {
    // materials-engineering, whatItIs
    fact: "Materials engineers usually don't design the finished product you actually see — they work one level down, figuring out what it's made of.",
    fieldSlug: "materials-engineering",
  },
  {
    // electrical-engineering, challenges
    fact: "Electrical engineers often work with something they can't see — electricity and signals aren't visible or intuitive the way mechanical motion is.",
    fieldSlug: "electrical-engineering",
  },
];
