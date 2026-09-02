import { FieldStub } from "./types";

// Lighter-weight entries — real, honest, but without the full research depth
// (Day in the Life, comparison stats, next steps) of the fields in fields.ts.
// See the comment on FieldStub in types.ts for why salary is handled the way
// it is here.
export const fieldStubs: FieldStub[] = [
  {
    slug: "nuclear-engineering",
    name: "Nuclear Engineering",
    tagline: "Designing and monitoring the systems that generate and safely manage nuclear energy.",
    whatItIs:
      "Nuclear engineering focuses on the safe design, operation, and monitoring of systems that use nuclear energy — from power plants to medical and research applications. It combines physics, safety engineering, and strict regulatory compliance, since the consequences of an error are unusually serious.",
    realWorldExamples: [
      "Nuclear power plant design and safety systems",
      "Nuclear medicine and radiation therapy equipment",
      "Nuclear waste storage and disposal systems",
      "Naval nuclear propulsion systems",
    ],
    relatedMajors: ["Nuclear Engineering", "Mechanical Engineering (some overlap)"],
    relatedField: "mechanical-engineering",
    salary: {
      medianAnnual: "$133,970",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/nuclear-engineers.htm",
      note: "U.S. national median across all experience levels — not a starting salary, and not adjusted for your region.",
    },
  },
  {
    slug: "petroleum-engineering",
    name: "Petroleum Engineering",
    tagline: "Designing how oil and natural gas are extracted from the ground safely and efficiently.",
    whatItIs:
      "Petroleum engineering focuses on how to extract oil and natural gas from the ground safely and efficiently — designing extraction methods, drilling plans, and production systems. It's a specialized field tied closely to the energy industry's own economic cycles.",
    realWorldExamples: [
      "Oil and gas well design and drilling plans",
      "Extraction equipment and production systems",
      "Reservoir analysis to estimate how much oil or gas a site can produce",
    ],
    relatedMajors: ["Petroleum Engineering", "Chemical Engineering (some overlap)"],
    relatedField: "chemical-engineering",
    salary: {
      medianAnnual: "$144,910",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/petroleum-engineers.htm",
      note: "U.S. national median across all experience levels — not a starting salary, and not adjusted for your region. This field is closely tied to oil and gas industry cycles, which affects both pay and job stability.",
    },
  },
  {
    slug: "agricultural-engineering",
    name: "Agricultural Engineering",
    tagline: "Applying engineering to farming and food production — equipment, irrigation, and food systems.",
    whatItIs:
      "Agricultural engineering applies engineering principles to farming and food production — designing equipment, irrigation systems, and structures that make agriculture more efficient, and adapting technology to work with biological and environmental factors that don't behave like standard engineering materials.",
    realWorldExamples: [
      "Farm equipment and machinery design",
      "Irrigation and water management systems",
      "Food processing and storage systems",
      "Precision agriculture technology, like sensor-based crop monitoring",
    ],
    relatedMajors: ["Agricultural Engineering", "Mechanical Engineering (some overlap)", "Environmental Engineering (some overlap)"],
    relatedField: "environmental-engineering",
    salary: {
      medianAnnual: "$98,590",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/agricultural-engineers.htm",
      note: "U.S. national median across all experience levels — not a starting salary, and not adjusted for your region.",
    },
  },
  {
    slug: "marine-engineering",
    name: "Marine Engineering",
    tagline: "Designing and maintaining ships, submarines, and other vessels built for the ocean.",
    whatItIs:
      "Marine engineering, often paired with naval architecture, focuses on designing, building, and maintaining ships, submarines, and other marine vessels and structures — the hull, propulsion systems, and onboard mechanical and electrical systems all need to work reliably in a demanding ocean environment.",
    realWorldExamples: [
      "Ship hull design and structural analysis",
      "Ship propulsion and power systems",
      "Offshore platform design",
      "Submarine and naval vessel systems",
    ],
    relatedMajors: ["Marine Engineering", "Naval Architecture", "Mechanical Engineering (some overlap)"],
    relatedField: "mechanical-engineering",
    salary: {
      medianAnnual: "$112,230",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/marine-engineers-and-naval-architects.htm",
      note: "U.S. national median across all experience levels — not a starting salary, and not adjusted for your region.",
    },
  },
  {
    slug: "architectural-engineering",
    name: "Architectural Engineering",
    tagline: "Designing the structural, mechanical, and electrical systems that make a building actually work.",
    whatItIs:
      "Architectural engineering focuses on the technical systems inside buildings — structural support, heating and cooling, electrical, lighting, and acoustics — working alongside architects, who focus more on a building's form and layout. It's a smaller, specialized field that blends civil, mechanical, and electrical engineering concepts applied specifically to buildings.",
    realWorldExamples: [
      "Structural systems for large or complex buildings",
      "Heating, cooling, and ventilation system design",
      "Building electrical and lighting systems",
      "Acoustic design for spaces like concert halls",
    ],
    relatedMajors: ["Architectural Engineering", "Civil Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "civil-engineering",
    salaryNote:
      "Architectural engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually grouped with civil or mechanical engineering depending on the specific role. See the Civil Engineering page for related, sourced salary data.",
  },
  {
    slug: "automotive-engineering",
    name: "Automotive Engineering",
    tagline: "Designing, testing, and manufacturing cars and other road vehicles.",
    whatItIs:
      "Automotive engineering focuses specifically on the design, testing, and manufacturing of cars and other road vehicles — engines, transmissions, safety systems, and increasingly electric and autonomous vehicle technology. It's typically pursued as a specialization within mechanical engineering rather than its own separate degree.",
    realWorldExamples: [
      "Engine and drivetrain design",
      "Vehicle safety and crash testing",
      "Electric vehicle battery and motor systems",
      "Advanced driver-assistance and autonomous vehicle systems",
    ],
    relatedMajors: ["Mechanical Engineering (with an automotive focus)", "Electrical Engineering (some overlap for EV and autonomous systems)"],
    relatedField: "mechanical-engineering",
    salaryNote:
      "Automotive engineers are typically tracked under the broader 'mechanical engineers' category by the U.S. Bureau of Labor Statistics, not as their own separate occupation. See the Mechanical Engineering page for that sourced salary data.",
  },
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing Engineering",
    tagline: "Designing and improving the processes and equipment that turn a design into a physical product at scale.",
    whatItIs:
      "Manufacturing engineering focuses on designing and improving the processes and equipment used to actually produce things at scale — the machinery, tooling, and workflows that turn a design into a physical product. It overlaps closely with both mechanical and industrial engineering.",
    realWorldExamples: [
      "Production line and factory equipment design",
      "Tooling and fixture design for manufacturing",
      "Process improvement to reduce waste or defects",
      "Automation of manufacturing steps",
    ],
    relatedMajors: ["Manufacturing Engineering", "Industrial Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "industrial-engineering",
    salaryNote:
      "Manufacturing engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually grouped with industrial or mechanical engineering. See the Industrial Engineering page for related, sourced salary data.",
  },
  {
    slug: "systems-engineering",
    name: "Systems Engineering",
    tagline: "Making sure all the individual pieces of a large, complex project actually work correctly together.",
    whatItIs:
      "Systems engineering focuses on how complex systems come together as a whole, rather than any one component — making sure that all the individual pieces of a large project, like an aircraft, a spacecraft, or a major software platform, work correctly together. It's less about designing a specific part and more about managing how everything connects.",
    realWorldExamples: [
      "Coordinating how subsystems of an aircraft or spacecraft work together",
      "Managing requirements and integration for large defense or infrastructure projects",
      "Overseeing how hardware and software components of a complex product interact",
    ],
    relatedMajors: ["Systems Engineering", "Often pursued as a specialization within Aerospace, Industrial, or Electrical Engineering"],
    relatedField: "aerospace-engineering",
    salaryNote:
      "Systems engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually pursued as a specialization within another engineering discipline. See the Aerospace or Industrial Engineering pages for related, sourced salary data.",
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    tagline: "Making sure buildings and bridges can safely support their own weight, plus wind, earthquakes, and everyday use.",
    whatItIs:
      "Structural engineering focuses specifically on the load-bearing framework of buildings and bridges — making sure a structure can safely support its own weight plus forces like wind, earthquakes, and everyday use. It's typically pursued as a specialization within civil engineering rather than its own separate degree.",
    realWorldExamples: [
      "Load-bearing framework design for buildings",
      "Bridge structural design and analysis",
      "Earthquake and wind-resistance engineering",
      "Structural inspection of existing buildings and bridges",
    ],
    relatedMajors: ["Civil Engineering (with a structural focus)", "Structural Engineering (offered as its own major at some schools)"],
    relatedField: "civil-engineering",
    salaryNote:
      "Structural engineers are typically tracked under the broader 'civil engineers' category by the U.S. Bureau of Labor Statistics, not as their own separate occupation. See the Civil Engineering page for that sourced salary data.",
  },
  {
    slug: "energy-engineering",
    name: "Energy Engineering",
    tagline: "Designing how energy is generated, distributed, and used efficiently — from power grids to renewables.",
    whatItIs:
      "Energy engineering focuses on how energy is generated, distributed, and used efficiently — spanning traditional power systems, renewable energy like solar and wind, and energy efficiency in buildings and industry. It draws on mechanical, electrical, and environmental engineering rather than being a single standardized discipline.",
    realWorldExamples: [
      "Solar and wind power system design",
      "Power grid and energy distribution systems",
      "Building energy efficiency systems",
      "Battery storage and energy management systems",
    ],
    relatedMajors: ["Energy Engineering", "Electrical Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "Energy engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually pursued through electrical or mechanical engineering with an energy focus. See the Electrical Engineering page for related, sourced salary data.",
  },
  {
    slug: "semiconductor-engineering",
    name: "Semiconductor Engineering",
    tagline: "Designing and manufacturing the chips that power almost every modern electronic device.",
    whatItIs:
      "Semiconductor engineering focuses on designing and manufacturing the chips that power almost every modern electronic device — working at the scale of individual circuits and materials rather than a finished product. It combines electrical engineering, materials science, and precision manufacturing.",
    realWorldExamples: [
      "Microchip and processor design",
      "Semiconductor fabrication process engineering",
      "Chip testing and quality verification",
      "Materials engineering for semiconductor manufacturing",
    ],
    relatedMajors: ["Electrical Engineering (with a semiconductor focus)", "Materials Science and Engineering (some overlap)", "Computer Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "Semiconductor engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually pursued through electrical, computer, or materials engineering. See the Electrical Engineering page for related, sourced salary data.",
  },
];
