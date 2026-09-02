import { CareerComparison } from "./types";

// Each of these is grounded in a misconception already written into the
// related field's own page (see commonMisconceptions in fields.ts) — this
// page just gives that specific comparison more room to be explained clearly.
export const careerComparisons: CareerComparison[] = [
  {
    slug: "mechanical-engineer-vs-mechanic",
    title: "Mechanical Engineer vs. Mechanic",
    engineerRole: {
      title: "Mechanical Engineer",
      description:
        "Designs and improves how machines and mechanical systems work — figuring out how something should be built, what it should be made of, and why it behaves the way it does.",
      typicalPath: "A 4-year engineering degree, typically followed by on-the-job experience.",
    },
    otherRole: {
      title: "Mechanic",
      description:
        "Repairs, maintains, and services existing machines, like vehicles or industrial equipment, using established diagnostic procedures and repair techniques.",
      typicalPath: "Vocational or trade school, and often a hands-on apprenticeship — not a 4-year degree.",
    },
    keyDifference:
      "An engineer designs the machine; a mechanic keeps an existing one running. They're both hands-on in different ways, but they're different jobs with different training paths, and one doesn't lead directly into the other.",
    relatedField: "mechanical-engineering",
  },
  {
    slug: "electrical-engineer-vs-electrician",
    title: "Electrical Engineer vs. Electrician",
    engineerRole: {
      title: "Electrical Engineer",
      description:
        "Designs electrical and electronic systems — circuits, power distribution, devices — and figures out how they should work before anything gets built.",
      typicalPath: "A 4-year engineering degree.",
    },
    otherRole: {
      title: "Electrician",
      description:
        "Installs, inspects, and repairs the electrical wiring in buildings, following strict safety codes, so that the systems engineers design actually get put in place safely.",
      typicalPath: "Trade school and a licensed apprenticeship — a separate, regulated path from an engineering degree.",
    },
    keyDifference:
      "An engineer designs the system on paper (or in software); an electrician is the licensed professional who safely installs and wires it in the real world.",
    relatedField: "electrical-engineering",
  },
  {
    slug: "biomedical-engineer-vs-doctor",
    title: "Biomedical Engineer vs. Doctor",
    engineerRole: {
      title: "Biomedical Engineer",
      description:
        "Designs and tests the medical devices, equipment, and technology that doctors and patients use — most of the work happens in a lab, in R&D, or in manufacturing, not in a clinic.",
      typicalPath: "A 4-year engineering degree, sometimes followed by graduate study for research-focused roles.",
    },
    otherRole: {
      title: "Doctor",
      description:
        "Diagnoses and treats patients directly, using medical training, judgment, and — often — the very devices biomedical engineers helped design.",
      typicalPath:
        "A bachelor's degree, then medical school, then a multi-year residency — a longer and structurally different path than an engineering degree, often 11+ years total before practicing independently.",
    },
    keyDifference:
      "A biomedical engineer builds the tools medicine relies on; a doctor uses those tools, and their own clinical training, to treat people directly. Very few biomedical engineers see patients as part of their day-to-day work.",
    relatedField: "biomedical-engineering",
  },
  {
    slug: "software-engineer-vs-programmer",
    title: "Software Engineer vs. Programmer",
    engineerRole: {
      title: "Software Engineer",
      description:
        "Designs how a software system fits together — its architecture, how components interact, how it's tested — in addition to writing code. The emphasis is on the broader engineering process, not just typing syntax.",
      typicalPath: "A 4-year degree in software engineering, computer science, or a related field, though self-taught paths exist too.",
    },
    otherRole: {
      title: "Programmer / Coder",
      description:
        "Often used to mean someone focused more narrowly on writing and implementing code, without necessarily owning the broader system design.",
      typicalPath: "No single standard path — ranges from formal degrees to bootcamps to self-taught.",
    },
    keyDifference:
      "This is the fuzziest comparison on this page — companies use 'software engineer,' 'programmer,' 'developer,' and 'coder' inconsistently, and the titles often overlap completely in practice. Where people do draw a line, it's usually about scope: system design and process versus just writing code.",
    relatedField: "software-engineering",
  },
  {
    slug: "civil-engineer-vs-architect",
    title: "Civil/Structural Engineer vs. Architect",
    engineerRole: {
      title: "Civil / Structural Engineer",
      description:
        "Makes sure a building or structure can actually stand up safely — calculating loads, choosing structural systems, and designing within codes and safety margins.",
      typicalPath:
        "A 4-year engineering degree, and in many countries, a multi-year path to a professional engineering (PE) license.",
    },
    otherRole: {
      title: "Architect",
      description:
        "Designs how a building looks, feels, and functions for the people using it — layout, aesthetics, and the overall human experience of the space.",
      typicalPath:
        "A professional architecture degree (often 5 years) and, in many countries, a separate licensure process specific to architecture.",
    },
    keyDifference:
      "An architect designs the building's form and how people will experience it; a civil or structural engineer makes sure that form can physically stand up. On real projects, they work closely together — neither role replaces the other.",
    relatedField: "civil-engineering",
  },
  {
    slug: "engineer-vs-scientist",
    title: "Engineer vs. Scientist",
    engineerRole: {
      title: "Engineer",
      description:
        "Applies existing scientific understanding to design and build a practical solution to a specific problem — a device, a structure, a system that needs to actually work in the real world.",
      typicalPath: "A 4-year engineering degree, field-dependent.",
    },
    otherRole: {
      title: "Scientist",
      description:
        "Focuses on discovering and understanding how the world works — running experiments, testing theories, and building new knowledge, without necessarily building a specific finished product.",
      typicalPath: "A science degree, often followed by graduate study (a master's or PhD) for research-focused roles.",
    },
    keyDifference:
      "This site's materials engineering page draws this line directly: chemistry \"focuses on the reactions and composition of substances,\" while materials engineering \"focuses more on how a material's structure affects its real-world performance.\" That pattern holds broadly — a scientist discovers what's true; an engineer figures out how to build something useful with it. In practice, plenty of people do both.",
    relatedField: "materials-engineering",
  },
];
