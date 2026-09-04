import { FieldStub } from "./types";

// Lighter-weight entries — real, honest, but without the full research depth
// (Day in the Life, comparison stats, next steps) of the fields in fields.ts.
// See the comment on FieldStub in types.ts for why salary is handled the way
// it is here.
export const fieldStubs: FieldStub[] = [
  {
    slug: "architectural-engineering",
    name: "Architectural Engineering",
    tagline: "The structural, mechanical, and electrical systems that make a building actually work.",
    whatItIs:
      "The technical systems inside a building — structural support, heating and cooling, electrical, lighting, acoustics — are architectural engineering's territory, worked out alongside architects, who focus more on a building's form and layout. It's a smaller, specialized field that blends civil, mechanical, and electrical engineering concepts applied specifically to buildings.",
    realWorldExamples: [
      "Structural systems for large or complex buildings",
      "Heating, cooling, and ventilation system design",
      "Building electrical and lighting systems",
      "Acoustic design for spaces like concert halls",
    ],
    relatedMajors: ["Architectural Engineering", "Civil Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "civil-engineering",
    salaryNote:
      "The U.S. Bureau of Labor Statistics doesn't track architectural engineering as its own separate category — it's usually grouped with civil or mechanical engineering depending on the specific role. See the Civil Engineering page for related, sourced salary data.",
  },
  {
    slug: "automotive-engineering",
    name: "Automotive Engineering",
    tagline: "The design, testing, and manufacturing behind cars and other road vehicles.",
    whatItIs:
      "Automotive engineering is about the design, testing, and manufacturing of cars and other road vehicles — engines, transmissions, safety systems, and, increasingly, electric and autonomous vehicle technology. It's typically pursued as a specialization within mechanical engineering, not its own separate degree.",
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
    tagline: "How a design becomes a real, physical product at scale — the processes and equipment behind it.",
    whatItIs:
      "Manufacturing engineering is about the processes and equipment used to actually produce things at scale — the machinery, tooling, and workflows that turn a design into a physical product, and making all of it run better. It overlaps closely with both mechanical and industrial engineering.",
    realWorldExamples: [
      "Production line and factory equipment design",
      "Tooling and fixture design for manufacturing",
      "Process improvement to reduce waste or defects",
      "Automation of manufacturing steps",
    ],
    relatedMajors: ["Manufacturing Engineering", "Industrial Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "industrial-engineering",
    salaryNote:
      "Manufacturing engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics either — it's usually grouped with industrial or mechanical engineering. See the Industrial Engineering page for related, sourced salary data.",
  },
  {
    slug: "systems-engineering",
    name: "Systems Engineering",
    tagline: "How all the individual pieces of a large, complex project actually work correctly together.",
    whatItIs:
      "Systems engineering zooms out from any single component to look at how a complex system comes together as a whole — making sure every piece of a large project, whether it's an aircraft, a spacecraft, or a major software platform, works correctly with every other piece. It's less about designing a specific part and more about managing how everything connects.",
    realWorldExamples: [
      "Coordinating how subsystems of an aircraft or spacecraft work together",
      "Managing requirements and integration for large defense or infrastructure projects",
      "Overseeing how hardware and software components of a complex product interact",
    ],
    relatedMajors: ["Systems Engineering", "Often pursued as a specialization within Aerospace, Industrial, or Electrical Engineering"],
    relatedField: "aerospace-engineering",
    salaryNote:
      "Like several fields on this page, systems engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually pursued as a specialization within another engineering discipline. See the Aerospace or Industrial Engineering pages for related, sourced salary data.",
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    tagline: "Whether a building or bridge can safely carry its own weight, plus wind, earthquakes, and everyday use.",
    whatItIs:
      "Structural engineering deals with the load-bearing framework of buildings and bridges — making sure a structure can safely carry its own weight plus forces like wind, earthquakes, and everyday use. It's typically pursued as a specialization within civil engineering, not its own separate degree.",
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
    tagline: "How energy actually gets generated, distributed, and used efficiently — from power grids to renewables.",
    whatItIs:
      "Energy engineering covers how energy gets generated, distributed, and used efficiently — traditional power systems, renewable energy like solar and wind, and energy efficiency in buildings and industry. Rather than being one standardized discipline, it draws on mechanical, electrical, and environmental engineering.",
    realWorldExamples: [
      "Solar and wind power system design",
      "Power grid and energy distribution systems",
      "Building energy efficiency systems",
      "Battery storage and energy management systems",
    ],
    relatedMajors: ["Energy Engineering", "Electrical Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "There's no separate U.S. Bureau of Labor Statistics category for energy engineering — it's usually pursued through electrical or mechanical engineering with an energy focus. See the Electrical Engineering page for related, sourced salary data.",
  },
  {
    slug: "semiconductor-engineering",
    name: "Semiconductor Engineering",
    tagline: "How the chips inside almost every modern electronic device get designed and manufactured.",
    whatItIs:
      "Semiconductor engineering is about designing and manufacturing the chips that power almost every modern electronic device — working at the scale of individual circuits and materials, not a finished product. It combines electrical engineering, materials science, and precision manufacturing.",
    realWorldExamples: [
      "Microchip and processor design",
      "Semiconductor fabrication process engineering",
      "Chip testing and quality verification",
      "Materials engineering for semiconductor manufacturing",
    ],
    relatedMajors: ["Electrical Engineering (with a semiconductor focus)", "Materials Science and Engineering (some overlap)", "Computer Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "No separate U.S. Bureau of Labor Statistics category exists for semiconductor engineering — it's usually pursued through electrical, computer, or materials engineering. See the Electrical Engineering page for related, sourced salary data.",
  },
];
