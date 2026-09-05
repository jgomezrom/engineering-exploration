import { FieldSlug } from "./types";

// Every connection here is drawn from ABET's own published accreditation
// requirements — not editorial judgment, not a typical-sequencing guess.
// Source: ABET, "Criteria for Accrediting Engineering Programs, 2025-2026,"
// Section III (Program Criteria) and Criterion 5 (Curriculum) of the General
// Criteria. https://www.abet.org/wp-content/uploads/2024/11/2025-2026_EAC_Criteria.pdf
//
// Four of this site's 23 fields have no dedicated ABET Program Criteria and
// are excluded from this map rather than force-fit: automotive-engineering
// and structural-engineering are commonly accredited under Mechanical's and
// Civil's criteria respectively (ABET's wording covers "similar modifiers"
// but doesn't name them specifically), and energy-engineering /
// semiconductor-engineering have no Program Criteria section at all — those
// programs fall back to the General Criteria only. Saying so plainly is more
// honest than inventing a specific link ABET itself doesn't draw.
export type TopicMapColumn = 0 | 1 | 2;

export type TopicMapNode = {
  id: string;
  label: string;
  column: TopicMapColumn;
  // Column-2 (major) nodes only — links back to the field's own page.
  fieldSlug?: FieldSlug;
  // Column-1 (discipline-topic) nodes only — exactly which ABET Program
  // Criteria section this node's connections are drawn from, and the
  // specific requirement quoted (trimmed, not paraphrased into a new claim).
  sourceSection?: string;
  sourceQuote?: string;
};

export type TopicMapLink = {
  source: string;
  target: string;
};

export const topicMapNodes: TopicMapNode[] = [
  // Column 0 — foundational math & science, named explicitly in the Program
  // Criteria text below (not assumed uniformly across every discipline).
  { id: "calc-diffeq", label: "Calculus & Differential Equations", column: 0 },
  { id: "linear-algebra", label: "Linear Algebra", column: 0 },
  { id: "prob-stats", label: "Probability & Statistics", column: 0 },
  { id: "calc-physics", label: "Calculus-Based Physics", column: 0 },
  { id: "chemistry", label: "Chemistry", column: 0 },
  { id: "biology", label: "Biology & Life Sciences", column: 0 },
  { id: "discrete-math", label: "Discrete Mathematics", column: 0 },
  { id: "earth-science", label: "Earth Science", column: 0 },
  { id: "nuclear-physics", label: "Atomic & Nuclear Physics", column: 0 },
  {
    id: "general-math-sci",
    label: "College Math & Basic Science (unspecified)",
    column: 0,
  },

  // Column 1 — each discipline's own required topic areas, quoted from its
  // ABET Program Criteria.
  {
    id: "mech-topic",
    label: "Thermal & Mechanical Systems",
    column: 1,
    sourceSection: "Mechanical and Similarly Named Engineering Programs",
    sourceQuote: "coverage of both thermal and mechanical systems",
  },
  {
    id: "elec-comp-topic",
    label: "Electrical/Electronic Devices & Systems (HW + SW)",
    column: 1,
    sourceSection: "Electrical, Computer, Communications, Telecommunication(s), and Similarly Named Engineering Programs",
    sourceQuote:
      "engineering topics (including computing science) necessary to analyze and design complex electrical and electronic devices, software, and systems containing hardware and software components",
  },
  {
    id: "civil-topic",
    label: "Engineering Mechanics, Materials Science & Numerical Methods",
    column: 1,
    sourceSection: "Civil and Similarly Named Engineering Programs",
    sourceQuote: "engineering mechanics, materials science, and numerical methods relevant to civil engineering",
  },
  {
    id: "chem-topic",
    label: "Process Design, Analysis & Control",
    column: 1,
    sourceSection: "Chemical, Biochemical, Biomolecular, and Similarly Named Engineering Programs",
    sourceQuote: "engineering application of these sciences to the design, analysis, and control of processes",
  },
  {
    id: "biomed-topic",
    label: "Bio/Biomedical Devices & Systems",
    column: 1,
    sourceSection: "Bioengineering and Biomedical and Similarly Named Engineering Programs",
    sourceQuote: "analyzing, modeling, designing, and realizing bio/biomedical engineering devices, systems, components, or processes",
  },
  {
    id: "software-topic",
    label: "Software Design, Construction & Verification",
    column: 1,
    sourceSection: "Software and Similarly Named Engineering Programs",
    sourceQuote: "software design and construction, requirements analysis, security, verification, and validation",
  },
  {
    id: "aero-topic",
    label: "Aerodynamics, Propulsion & Flight Mechanics",
    column: 1,
    sourceSection: "Aerospace and Similarly Named Engineering Programs",
    sourceQuote: "aerodynamics, aerospace materials, structures, propulsion, flight mechanics, and stability and control",
  },
  {
    id: "env-topic",
    label: "Material/Energy Balances & Environmental Systems Design",
    column: 1,
    sourceSection: "Environmental Engineering and Similarly Named Engineering Programs",
    sourceQuote: "material and energy balances, fate and transport of substances in and between air, water, and soil phases",
  },
  {
    id: "indust-topic",
    label: "Productivity Analysis, Operations Research & Systems Improvement",
    column: 1,
    sourceSection: "Industrial and Similarly Named Engineering Programs",
    sourceQuote: "productivity analysis, operations research, probability, statistics, engineering economy, and human factors",
  },
  {
    id: "materials-topic",
    label: "Structure, Properties, Processing & Performance of Materials",
    column: 1,
    sourceSection: "Materials, Metallurgical, Ceramics, and Similarly Named Engineering Programs",
    sourceQuote: "the four major elements of the field: (i.e., structure, properties, processing, and performance)",
  },
  {
    id: "mechatronics-topic",
    label: "Mechatronic Systems (Mechanical + Electronic + Control + Software)",
    column: 1,
    sourceSection: "Mechatronics, Robotics, and Similarly Named Engineering Programs",
    sourceQuote: "mechanical systems, electronic circuits, control systems, and computer science, as well as the application of sensors, actuators, and embedded controllers",
  },
  {
    id: "nuclear-topic",
    label: "Nuclear/Radiological Systems, Fuel Cycles & Radiation Detection",
    column: 1,
    sourceSection: "Nuclear, Radiological, and Similarly Named Engineering Programs",
    sourceQuote: "nuclear or radiological systems and processes, nuclear fuel cycles, nuclear radiation detection and measurement",
  },
  {
    id: "petro-topic",
    label: "Well Systems, Reservoir Engineering & Subsurface Analysis",
    column: 1,
    sourceSection: "Petroleum and Similarly Named Engineering Programs",
    sourceQuote: "design and analysis of well systems and procedures for drilling and completing wells",
  },
  {
    id: "ag-topic",
    label: "Biological & Engineering Sciences Applied to Agriculture/Natural Resources",
    column: 1,
    sourceSection: "Agricultural and Similarly Named Engineering Programs",
    sourceQuote: "biological and engineering sciences consistent with the program educational objectives and applications in agriculture, aquaculture, forestry, human, or natural resources",
  },
  {
    id: "marine-topic",
    label: "Fluid Mechanics, Dynamics & Marine Propulsion Systems",
    column: 1,
    sourceSection: "Naval Architecture, Marine Engineering, Ocean Engineering, and Similarly Named Engineering Programs",
    sourceQuote: "applications of probability and statistics, fluid mechanics, dynamics, and engineering design at the system level",
  },
  {
    id: "arch-topic",
    label: "Building Structural, Mechanical & Electrical Systems",
    column: 1,
    sourceSection: "Architectural and Similarly Named Engineering Programs",
    sourceQuote: "building structures, building mechanical systems, building electrical systems, and construction/construction management",
  },
  {
    id: "systems-topic",
    label: "Complex Systems Design & Lifecycle Analysis",
    column: 1,
    sourceSection: "Systems and Similarly Named Engineering Programs",
    sourceQuote: "define, synthesize, analyze, design, and evaluate complex systems containing hardware and software, and human elements... in a holistic manner across the lifecycle",
  },
  {
    id: "manufacturing-topic",
    label: "Manufacturing Processes, Systems Design & Competitiveness",
    column: 1,
    sourceSection: "Manufacturing and Similarly Named Engineering Programs",
    sourceQuote: "materials and manufacturing processes... manufacturing systems design: analyze, synthesize, and control manufacturing operations using statistical methods",
  },

  // Column 2 — the 19 fields (of this site's 23) that ABET separately names.
  { id: "mechanical-engineering", label: "Mechanical", column: 2, fieldSlug: "mechanical-engineering" },
  { id: "electrical-engineering", label: "Electrical", column: 2, fieldSlug: "electrical-engineering" },
  { id: "computer-engineering", label: "Computer", column: 2, fieldSlug: "computer-engineering" },
  { id: "civil-engineering", label: "Civil", column: 2, fieldSlug: "civil-engineering" },
  { id: "chemical-engineering", label: "Chemical", column: 2, fieldSlug: "chemical-engineering" },
  { id: "biomedical-engineering", label: "Biomedical", column: 2, fieldSlug: "biomedical-engineering" },
  { id: "software-engineering", label: "Software", column: 2, fieldSlug: "software-engineering" },
  { id: "aerospace-engineering", label: "Aerospace", column: 2, fieldSlug: "aerospace-engineering" },
  { id: "environmental-engineering", label: "Environmental", column: 2, fieldSlug: "environmental-engineering" },
  { id: "industrial-engineering", label: "Industrial", column: 2, fieldSlug: "industrial-engineering" },
  { id: "materials-engineering", label: "Materials", column: 2, fieldSlug: "materials-engineering" },
  { id: "robotics-engineering", label: "Robotics", column: 2, fieldSlug: "robotics-engineering" },
  { id: "nuclear-engineering", label: "Nuclear", column: 2, fieldSlug: "nuclear-engineering" },
  { id: "petroleum-engineering", label: "Petroleum", column: 2, fieldSlug: "petroleum-engineering" },
  { id: "agricultural-engineering", label: "Agricultural", column: 2, fieldSlug: "agricultural-engineering" },
  { id: "marine-engineering", label: "Marine", column: 2, fieldSlug: "marine-engineering" },
  { id: "architectural-engineering", label: "Architectural", column: 2, fieldSlug: "architectural-engineering" },
  { id: "systems-engineering", label: "Systems", column: 2, fieldSlug: "systems-engineering" },
  { id: "manufacturing-engineering", label: "Manufacturing", column: 2, fieldSlug: "manufacturing-engineering" },
];

export const topicMapLinks: TopicMapLink[] = [
  { source: "calc-diffeq", target: "mech-topic" },

  { source: "calc-diffeq", target: "elec-comp-topic" },
  { source: "linear-algebra", target: "elec-comp-topic" },
  { source: "prob-stats", target: "elec-comp-topic" },
  { source: "discrete-math", target: "elec-comp-topic" },

  { source: "calc-diffeq", target: "civil-topic" },
  { source: "prob-stats", target: "civil-topic" },
  { source: "calc-physics", target: "civil-topic" },
  { source: "chemistry", target: "civil-topic" },

  { source: "calc-diffeq", target: "chem-topic" },
  { source: "prob-stats", target: "chem-topic" },
  { source: "chemistry", target: "chem-topic" },
  { source: "calc-physics", target: "chem-topic" },

  { source: "calc-diffeq", target: "biomed-topic" },
  { source: "prob-stats", target: "biomed-topic" },
  { source: "calc-physics", target: "biomed-topic" },
  { source: "chemistry", target: "biomed-topic" },
  { source: "biology", target: "biomed-topic" },

  { source: "discrete-math", target: "software-topic" },
  { source: "prob-stats", target: "software-topic" },

  { source: "general-math-sci", target: "aero-topic" },

  { source: "calc-diffeq", target: "env-topic" },
  { source: "prob-stats", target: "env-topic" },
  { source: "calc-physics", target: "env-topic" },
  { source: "chemistry", target: "env-topic" },
  { source: "biology", target: "env-topic" },
  { source: "earth-science", target: "env-topic" },

  { source: "prob-stats", target: "indust-topic" },

  { source: "general-math-sci", target: "materials-topic" },

  { source: "calc-diffeq", target: "mechatronics-topic" },
  { source: "linear-algebra", target: "mechatronics-topic" },
  { source: "calc-physics", target: "mechatronics-topic" },

  { source: "nuclear-physics", target: "nuclear-topic" },

  { source: "calc-diffeq", target: "petro-topic" },
  { source: "prob-stats", target: "petro-topic" },

  { source: "calc-diffeq", target: "ag-topic" },
  { source: "biology", target: "ag-topic" },

  { source: "prob-stats", target: "marine-topic" },

  { source: "calc-diffeq", target: "arch-topic" },
  { source: "calc-physics", target: "arch-topic" },
  { source: "chemistry", target: "arch-topic" },

  { source: "prob-stats", target: "systems-topic" },

  { source: "prob-stats", target: "manufacturing-topic" },

  // Discipline topic -> major
  { source: "mech-topic", target: "mechanical-engineering" },
  { source: "elec-comp-topic", target: "electrical-engineering" },
  { source: "elec-comp-topic", target: "computer-engineering" },
  { source: "civil-topic", target: "civil-engineering" },
  { source: "chem-topic", target: "chemical-engineering" },
  { source: "biomed-topic", target: "biomedical-engineering" },
  { source: "software-topic", target: "software-engineering" },
  { source: "aero-topic", target: "aerospace-engineering" },
  { source: "env-topic", target: "environmental-engineering" },
  { source: "indust-topic", target: "industrial-engineering" },
  { source: "materials-topic", target: "materials-engineering" },
  { source: "mechatronics-topic", target: "robotics-engineering" },
  { source: "nuclear-topic", target: "nuclear-engineering" },
  { source: "petro-topic", target: "petroleum-engineering" },
  { source: "ag-topic", target: "agricultural-engineering" },
  { source: "marine-topic", target: "marine-engineering" },
  { source: "arch-topic", target: "architectural-engineering" },
  { source: "systems-topic", target: "systems-engineering" },
  { source: "manufacturing-topic", target: "manufacturing-engineering" },
];

export const topicMapSourceUrl = "https://www.abet.org/wp-content/uploads/2024/11/2025-2026_EAC_Criteria.pdf";

// Fields with no dedicated ABET Program Criteria — see file header comment.
export const topicMapExcludedFields: FieldSlug[] = [
  "automotive-engineering",
  "structural-engineering",
  "energy-engineering",
  "semiconductor-engineering",
];
