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
  // Mechanical + electrical both list "Automotive" as an industry.
  { slug: "cars", label: "Cars", fields: ["mechanical-engineering", "electrical-engineering"] },
  // Mechanical + electrical both list "Aerospace" as an industry.
  { slug: "space", label: "Space", fields: ["mechanical-engineering", "electrical-engineering"] },
  // Mechanical lists a "Robotics" industry and "Robotics Engineer" career path, which
  // itself notes overlap with electrical/software engineering.
  { slug: "robots", label: "Robots", fields: ["mechanical-engineering", "electrical-engineering", "software-engineering"] },
  // Biomedical engineering is directly about medical devices and healthcare.
  { slug: "medicine", label: "Medicine", fields: ["biomedical-engineering"] },
  // Software lists "Gaming" as an industry.
  { slug: "video-games", label: "Video Games", fields: ["software-engineering"] },
  // Civil engineering is directly about the built environment.
  { slug: "buildings", label: "Buildings", fields: ["civil-engineering"] },
  // Civil lists "Environmental consulting" and "Water resources" as industries.
  { slug: "climate", label: "Climate", fields: ["civil-engineering"] },
  // Software is directly about building software; electrical lists "Computer Engineering"
  // as a related major.
  { slug: "computers", label: "Computers", fields: ["software-engineering", "electrical-engineering"] },
  // Electrical engineering is directly about circuits and electronics.
  { slug: "electronics", label: "Electronics", fields: ["electrical-engineering"] },
  // Mechanical lists a "Product Design Engineer" career path.
  { slug: "design", label: "Design", fields: ["mechanical-engineering"] },
  // Mechanical engineering is directly about how machines are designed and built.
  { slug: "machines", label: "Machines", fields: ["mechanical-engineering"] },
  // Mechanical lists an "Energy" industry; electrical lists "Power/energy" and a
  // "Power Systems Engineer" career path.
  { slug: "energy", label: "Energy", fields: ["mechanical-engineering", "electrical-engineering"] },
  // Civil lists "Transportation" as an industry and a "Transportation Engineer" career
  // path; mechanical lists "Automotive" as an industry.
  { slug: "transportation", label: "Transportation", fields: ["civil-engineering", "mechanical-engineering"] },
  // Mechanical lists a "Manufacturing" industry and "Manufacturing Engineering" as a
  // related major.
  { slug: "manufacturing", label: "Manufacturing", fields: ["mechanical-engineering"] },
  // No current field content genuinely covers this yet — hidden until one does.
  { slug: "sports", label: "Sports", fields: [] },
  { slug: "animals", label: "Animals", fields: [] },
  { slug: "art", label: "Art", fields: [] },
];
