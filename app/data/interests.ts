import { FieldSlug } from "./types";

export type Interest = {
  slug: string;
  label: string;
  // Empty array means no honest match yet among the current fields — the UI
  // hides these rather than linking nowhere. See the comment below each entry
  // for what in that field's own content justifies the connection.
  fields: FieldSlug[];
};

export const interests: Interest[] = [
  // Automotive engineering's entire focus is cars and other road vehicles.
  // Mechanical + electrical both list "Automotive" as an industry; materials and
  // robotics both list "Automotive" among their own industries too.
  {
    slug: "cars",
    label: "Cars",
    fields: [
      "automotive-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "materials-engineering",
      "robotics-engineering",
    ],
  },
  // Aerospace engineering's entire focus is aircraft and spacecraft; mechanical and
  // electrical list "Aerospace" as an industry; materials and robotics both list
  // "Aerospace" among their own industries too. Systems engineering's first listed
  // industry is "Aerospace and spacecraft programmes," and its realWorldExamples
  // lead with coordinating an aircraft's or spacecraft's subsystems.
  {
    slug: "space",
    label: "Space",
    fields: [
      "aerospace-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "materials-engineering",
      "robotics-engineering",
      "systems-engineering",
    ],
  },
  // Robotics engineering's entire focus is robots; mechanical lists a "Robotics"
  // industry and "Robotics Engineer" career path, which itself notes overlap with
  // electrical/software engineering.
  // Manufacturing engineering's typicalProjects include "specifying and
  // commissioning a new machine or robot cell," and its industries list
  // "industrial equipment and automation vendors."
  {
    slug: "robots",
    label: "Robots",
    fields: [
      "robotics-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "software-engineering",
      "manufacturing-engineering",
    ],
  },
  // Biomedical engineering is directly about medical devices and healthcare;
  // materials and robotics both list "Medical devices" / "Healthcare and medical
  // devices" among their own industries.
  // Manufacturing engineering's industries include "medical device and
  // pharmaceutical manufacturing."
  {
    slug: "medicine",
    label: "Medicine",
    fields: [
      "biomedical-engineering",
      "materials-engineering",
      "robotics-engineering",
      "manufacturing-engineering",
    ],
  },
  // Software lists "Gaming" as an industry.
  { slug: "video-games", label: "Video Games", fields: ["software-engineering"] },
  // Civil engineering is directly about the built environment. Architectural
  // engineering's entire focus is the systems inside a building; structural
  // engineering's is the frame that holds one up.
  {
    slug: "buildings",
    label: "Buildings",
    fields: ["civil-engineering", "architectural-engineering", "structural-engineering"],
  },
  // Civil lists "Environmental consulting" and "Water resources" as industries;
  // environmental engineering's entire focus is water, air, and waste systems.
  // Energy engineering's advantages say the work "connects directly to how much
  // energy gets used and wasted," and it covers renewables and efficiency;
  // architectural engineering's advantages note "a direct line between design
  // decisions and how much energy a building uses."
  {
    slug: "climate",
    label: "Climate",
    fields: [
      "civil-engineering",
      "environmental-engineering",
      "energy-engineering",
      "architectural-engineering",
    ],
  },
  // Software is directly about building software; electrical lists "Computer
  // Engineering" as a related major; computer engineering's entire focus is
  // computing hardware.
  // Semiconductor engineering's whatItIs is "designing and manufacturing the
  // chips that power almost every modern electronic device."
  {
    slug: "computers",
    label: "Computers",
    fields: [
      "software-engineering",
      "electrical-engineering",
      "computer-engineering",
      "semiconductor-engineering",
    ],
  },
  // Electrical engineering is directly about circuits and electronics; computer
  // engineering blends circuits with the code closest to them; robotics
  // engineering combines electronics with mechanics and code.
  // Semiconductor engineering works a layer below finished electronics — its
  // typicalProjects are circuit blocks and the process steps that build them.
  {
    slug: "electronics",
    label: "Electronics",
    fields: [
      "electrical-engineering",
      "computer-engineering",
      "robotics-engineering",
      "semiconductor-engineering",
    ],
  },
  // Mechanical lists a "Product Design Engineer" career path.
  { slug: "design", label: "Design", fields: ["mechanical-engineering"] },
  // Mechanical engineering is directly about how machines are designed and built;
  // robotics engineering is specifically about machines that sense and act.
  // Automotive engineering's whatEngineersWorkOn is the mechanisms inside a
  // vehicle; manufacturing engineering's whatItIs is "the machinery, tooling, and
  // workflows" that make things.
  {
    slug: "machines",
    label: "Machines",
    fields: [
      "mechanical-engineering",
      "robotics-engineering",
      "automotive-engineering",
      "manufacturing-engineering",
    ],
  },
  // Mechanical lists an "Energy" industry; electrical lists "Power/energy" and a
  // "Power Systems Engineer" career path; materials engineering lists "Energy"
  // among its own industries; chemical engineering's industries include "Oil and
  // gas," a major energy-production sector. Nuclear engineering's entire focus is
  // generating and managing nuclear power; petroleum engineering's entire focus
  // is extracting the oil and gas that power much of the world today.
  // Energy engineering's entire focus is how energy is generated, moved, stored,
  // and wasted; architectural engineering models and reduces a building's own
  // energy use.
  {
    slug: "energy",
    label: "Energy",
    fields: [
      "energy-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "materials-engineering",
      "chemical-engineering",
      "nuclear-engineering",
      "petroleum-engineering",
      "architectural-engineering",
    ],
  },
  // Civil lists "Transportation" as an industry and a "Transportation Engineer"
  // career path; mechanical lists "Automotive" as an industry; aerospace
  // engineering is specifically about aircraft, a transportation category. Marine
  // engineering is specifically about ships and other vessels, also transportation.
  // Automotive engineering is specifically about road vehicles.
  {
    slug: "transportation",
    label: "Transportation",
    fields: [
      "civil-engineering",
      "mechanical-engineering",
      "aerospace-engineering",
      "marine-engineering",
      "automotive-engineering",
    ],
  },
  // Mechanical lists a "Manufacturing" industry and "Manufacturing Engineering" as
  // a related major; industrial engineering's entire focus is how manufacturing
  // and production systems run; materials and robotics both list "Manufacturing"
  // among their own industries. Agricultural engineering's own industries include
  // "Farm equipment manufacturing," and its relatedMajors note overlap with
  // mechanical engineering specifically for equipment design.
  // Manufacturing engineering's entire focus is producing things at scale.
  // Semiconductor engineering's whatItIs calls it "precision manufacturing," and
  // half the field is fab process work. Automotive engineering's typicalProjects
  // include reworking a design so a production line can build it at rate.
  {
    slug: "manufacturing",
    label: "Manufacturing",
    fields: [
      "manufacturing-engineering",
      "mechanical-engineering",
      "industrial-engineering",
      "materials-engineering",
      "robotics-engineering",
      "agricultural-engineering",
      "semiconductor-engineering",
      "automotive-engineering",
    ],
  },
  // Chemical engineering's entire focus is designing the processes that turn raw
  // materials into usable products — the clearest fit among the current fields.
  // Petroleum engineering's relatedMajors explicitly note "Chemical Engineering
  // (some overlap)."
  // Semiconductor engineering lists Chemistry among its usefulSubjects, and its
  // process side is deposition, patterning, and etching — chemistry at a scale
  // below the visible.
  {
    slug: "chemistry",
    label: "Chemistry",
    fields: ["chemical-engineering", "petroleum-engineering", "semiconductor-engineering"],
  },
  // No current field content genuinely covers this yet — hidden until one does.
  { slug: "sports", label: "Sports", fields: [] },
  { slug: "animals", label: "Animals", fields: [] },
  { slug: "art", label: "Art", fields: [] },
  // Agricultural engineering's relatedMajors explicitly note "Environmental
  // Engineering (some overlap)," and its own industries include "Irrigation and
  // water management" — squarely water/environment focused, like the rest of
  // this topic's fields.
  {
    slug: "farming",
    label: "Farming & Food",
    fields: ["agricultural-engineering"],
  },
  // Ships, submarines, and other vessels built for the ocean — marine
  // engineering's entire focus.
  { slug: "ocean", label: "The Ocean", fields: ["marine-engineering"] },
];
