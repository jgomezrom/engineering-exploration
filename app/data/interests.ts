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
  // Mechanical + electrical both list "Automotive" as an industry; materials and
  // robotics both list "Automotive" among their own industries too.
  {
    slug: "cars",
    label: "Cars",
    fields: ["mechanical-engineering", "electrical-engineering", "materials-engineering", "robotics-engineering"],
  },
  // Aerospace engineering's entire focus is aircraft and spacecraft; mechanical and
  // electrical list "Aerospace" as an industry; materials and robotics both list
  // "Aerospace" among their own industries too.
  {
    slug: "space",
    label: "Space",
    fields: [
      "aerospace-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "materials-engineering",
      "robotics-engineering",
    ],
  },
  // Robotics engineering's entire focus is robots; mechanical lists a "Robotics"
  // industry and "Robotics Engineer" career path, which itself notes overlap with
  // electrical/software engineering.
  {
    slug: "robots",
    label: "Robots",
    fields: ["robotics-engineering", "mechanical-engineering", "electrical-engineering", "software-engineering"],
  },
  // Biomedical engineering is directly about medical devices and healthcare;
  // materials and robotics both list "Medical devices" / "Healthcare and medical
  // devices" among their own industries.
  {
    slug: "medicine",
    label: "Medicine",
    fields: ["biomedical-engineering", "materials-engineering", "robotics-engineering"],
  },
  // Software lists "Gaming" as an industry.
  { slug: "video-games", label: "Video Games", fields: ["software-engineering"] },
  // Civil engineering is directly about the built environment.
  { slug: "buildings", label: "Buildings", fields: ["civil-engineering"] },
  // Civil lists "Environmental consulting" and "Water resources" as industries;
  // environmental engineering's entire focus is water, air, and waste systems.
  { slug: "climate", label: "Climate", fields: ["civil-engineering", "environmental-engineering"] },
  // Software is directly about building software; electrical lists "Computer
  // Engineering" as a related major; computer engineering's entire focus is
  // computing hardware.
  {
    slug: "computers",
    label: "Computers",
    fields: ["software-engineering", "electrical-engineering", "computer-engineering"],
  },
  // Electrical engineering is directly about circuits and electronics; computer
  // engineering blends circuits with the code closest to them; robotics
  // engineering combines electronics with mechanics and code.
  {
    slug: "electronics",
    label: "Electronics",
    fields: ["electrical-engineering", "computer-engineering", "robotics-engineering"],
  },
  // Mechanical lists a "Product Design Engineer" career path.
  { slug: "design", label: "Design", fields: ["mechanical-engineering"] },
  // Mechanical engineering is directly about how machines are designed and built;
  // robotics engineering is specifically about machines that sense and act.
  { slug: "machines", label: "Machines", fields: ["mechanical-engineering", "robotics-engineering"] },
  // Mechanical lists an "Energy" industry; electrical lists "Power/energy" and a
  // "Power Systems Engineer" career path; materials engineering lists "Energy"
  // among its own industries; chemical engineering's industries include "Oil and
  // gas," a major energy-production sector. Nuclear engineering's entire focus is
  // generating and managing nuclear power; petroleum engineering's entire focus
  // is extracting the oil and gas that power much of the world today.
  {
    slug: "energy",
    label: "Energy",
    fields: [
      "mechanical-engineering",
      "electrical-engineering",
      "materials-engineering",
      "chemical-engineering",
      "nuclear-engineering",
      "petroleum-engineering",
    ],
  },
  // Civil lists "Transportation" as an industry and a "Transportation Engineer"
  // career path; mechanical lists "Automotive" as an industry; aerospace
  // engineering is specifically about aircraft, a transportation category. Marine
  // engineering is specifically about ships and other vessels, also transportation.
  {
    slug: "transportation",
    label: "Transportation",
    fields: ["civil-engineering", "mechanical-engineering", "aerospace-engineering", "marine-engineering"],
  },
  // Mechanical lists a "Manufacturing" industry and "Manufacturing Engineering" as
  // a related major; industrial engineering's entire focus is how manufacturing
  // and production systems run; materials and robotics both list "Manufacturing"
  // among their own industries. Agricultural engineering's own industries include
  // "Farm equipment manufacturing," and its relatedMajors note overlap with
  // mechanical engineering specifically for equipment design.
  {
    slug: "manufacturing",
    label: "Manufacturing",
    fields: [
      "mechanical-engineering",
      "industrial-engineering",
      "materials-engineering",
      "robotics-engineering",
      "agricultural-engineering",
    ],
  },
  // Chemical engineering's entire focus is designing the processes that turn raw
  // materials into usable products — the clearest fit among the current fields.
  // Petroleum engineering's relatedMajors explicitly note "Chemical Engineering
  // (some overlap)."
  { slug: "chemistry", label: "Chemistry", fields: ["chemical-engineering", "petroleum-engineering"] },
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
