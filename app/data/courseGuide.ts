import { CourseSubject, FieldCourseFocus, TutoringResource } from "./types";

export const middleSchoolSubjects: CourseSubject[] = [
  {
    subject: "Math",
    standard: ["Pre-Algebra", "Algebra I, if your school offers it this early"],
    advanced: [],
    note:
      "Taking Algebra I in 8th grade, if it's offered, is usually what opens the door to reaching Calculus by senior year of high school — but plenty of engineers didn't take this path and caught up just fine later.",
  },
  {
    subject: "Science",
    standard: ["General Science", "Physical Science", "Earth Science"],
    advanced: [],
  },
  {
    subject: "Technology & Engineering Exposure",
    standard: [
      "Any \"Tech Ed,\" STEM, or computer applications elective, if offered",
      "An intro coding class, like one built around Scratch",
    ],
    advanced: [],
    note: "Middle school electives vary enormously by school. If yours doesn't offer any of these, clubs and free online resources (see below) can fill the gap.",
  },
];

export const highSchoolSubjects: CourseSubject[] = [
  {
    subject: "Math",
    standard: ["Algebra I", "Geometry", "Algebra II", "Pre-Calculus", "Calculus"],
    advanced: [
      "AP Calculus AB (U.S.) — differential and intro integral calculus",
      "AP Calculus BC (U.S.) — AB content plus more, roughly two semesters of college calculus",
      "AP Statistics (U.S.) — especially useful for industrial engineering",
      "IB Mathematics: Analysis & Approaches, SL or HL — the more traditional, theory-first option, generally the better fit for engineering",
      "IB Mathematics: Applications & Interpretation, SL or HL — a more applied, technology-based option",
    ],
    note: "Not every school offers Calculus BC or IB Higher Level math. Take the most advanced math your school actually offers — don't worry if that ceiling is lower than what another school offers.",
  },
  {
    subject: "Physics",
    standard: ["Physics (often algebra-based)"],
    advanced: [
      "AP Physics 1 (U.S.) — algebra-based, covers mechanics",
      "AP Physics 2 (U.S.) — algebra-based, covers electricity, fluids, and more",
      "AP Physics C: Mechanics (U.S.) — calculus-based, the most directly useful option for mechanical, civil, and aerospace-minded students",
      "AP Physics C: Electricity & Magnetism (U.S.) — calculus-based, the most directly useful option for electrical and computer-minded students",
      "IB Physics, SL or HL",
    ],
    note: "If your school only offers one physics course, take it — the specific label matters far less than actually taking physics at all.",
  },
  {
    subject: "Chemistry & Biology",
    standard: ["Chemistry", "Biology"],
    advanced: [
      "AP Chemistry (U.S.)",
      "AP Biology (U.S.)",
      "AP Environmental Science (U.S.)",
      "IB Chemistry, SL or HL",
      "IB Biology, SL or HL",
      "IB Environmental Systems and Societies",
    ],
    note: "These matter most for biomedical, chemical, environmental, agricultural, and materials engineering — but a general chemistry and biology background is useful everywhere.",
  },
  {
    subject: "Computer Science",
    standard: ["Any intro coding or computer science elective, if offered"],
    advanced: [
      "AP Computer Science Principles (U.S.) — a true beginner-friendly intro, no prior experience assumed",
      "AP Computer Science A (U.S.) — Java-based and more rigorous, the better choice if you're seriously considering software or computer engineering",
      "IB Computer Science, SL or HL",
    ],
  },
  {
    subject: "Engineering-Specific Electives",
    standard: [
      "Introduction to Engineering Design and Principles of Engineering, if your school participates in the Project Lead The Way (PLTW) program",
      "Computer-Aided Design (CAD) or drafting classes",
      "Robotics classes (separate from a robotics club or competition team)",
      "Shop, industrial technology, or similar hands-on fabrication classes",
    ],
    advanced: [],
    note: "These are the least consistently available classes on this list — a lot of schools don't offer them at all. That's a real resourcing gap, not something wrong with you for not having access to them.",
  },
];

export const fieldCourseFocus: FieldCourseFocus[] = [
  {
    fieldSlug: "mechanical-engineering",
    priorityCourses: [
      "Physics, especially mechanics — AP Physics C: Mechanics or IB Physics HL if offered",
      "Calculus, ideally through AP Calculus BC or IB Math AA HL",
      "CAD or drafting classes, if offered",
    ],
  },
  {
    fieldSlug: "electrical-engineering",
    priorityCourses: [
      "Physics, especially electricity and magnetism — AP Physics C: E&M or IB Physics HL if offered",
      "Calculus",
      "Any computer science elective, since embedded coding is part of the field",
    ],
  },
  {
    fieldSlug: "civil-engineering",
    priorityCourses: [
      "Physics, especially statics and mechanics",
      "Calculus",
      "Environmental science or earth science, if offered",
    ],
  },
  {
    fieldSlug: "biomedical-engineering",
    priorityCourses: [
      "Biology, Chemistry, and Physics all matter here — this field genuinely draws on all three",
      "Calculus",
    ],
  },
  {
    fieldSlug: "software-engineering",
    priorityCourses: [
      "Computer science — AP CS A if you're set on software specifically, AP CS Principles if you're just starting out",
      "Algebra II and discrete math or logic-based coursework, if offered",
      "Calculus is useful but less central than for other fields",
    ],
  },
  {
    fieldSlug: "aerospace-engineering",
    priorityCourses: [
      "Physics, especially mechanics and thermodynamics — the most math- and physics-intensive field on this site",
      "Calculus, ideally through BC or IB HL",
      "Chemistry",
    ],
  },
  {
    fieldSlug: "chemical-engineering",
    priorityCourses: [
      "Chemistry — the most central subject for this field",
      "Physics and Calculus",
      "Biology, if available, is a bonus but not central",
    ],
  },
  {
    fieldSlug: "computer-engineering",
    priorityCourses: [
      "Physics, especially electricity and electronics",
      "Calculus",
      "Computer science, since the field blends circuits and code",
    ],
  },
  {
    fieldSlug: "environmental-engineering",
    priorityCourses: [
      "Environmental science or earth science, if offered",
      "Chemistry and Biology",
      "Physics and Calculus",
    ],
  },
  {
    fieldSlug: "industrial-engineering",
    priorityCourses: [
      "Statistics specifically — AP Statistics if offered, since this field leans on data analysis more than pure physics",
      "Physics",
      "Any intro programming or data analysis elective",
    ],
  },
  {
    fieldSlug: "materials-engineering",
    priorityCourses: [
      "Chemistry and Physics roughly equally",
      "Calculus",
      "Technical drawing or CAD, if offered",
    ],
  },
  {
    fieldSlug: "robotics-engineering",
    priorityCourses: [
      "Physics, especially mechanics and electricity",
      "Calculus",
      "Any computer science elective — this field genuinely spans mechanical, electrical, and software coursework",
    ],
  },
  {
    fieldSlug: "nuclear-engineering",
    priorityCourses: [
      "Physics, especially nuclear and modern physics, if your school offers it",
      "Calculus",
      "Chemistry",
    ],
  },
  {
    fieldSlug: "petroleum-engineering",
    priorityCourses: [
      "Physics and Chemistry",
      "Calculus",
      "Earth science or geology, if offered",
    ],
  },
  {
    fieldSlug: "agricultural-engineering",
    priorityCourses: [
      "Biology — this field draws on it more than most engineering fields",
      "Physics and Chemistry",
      "Calculus",
    ],
  },
  {
    fieldSlug: "marine-engineering",
    priorityCourses: [
      "Physics",
      "Calculus",
      "Chemistry, useful for understanding corrosion and materials in marine environments",
    ],
  },
];

export const tutoringResources: TutoringResource[] = [
  {
    name: "Khan Academy",
    type: "Free",
    description:
      "Free, self-paced, and covers everything from basic arithmetic through calculus, physics, and more. Referenced elsewhere on this site for a reason — it's one of the most complete free resources available.",
  },
  {
    name: "PhET Interactive Simulations (University of Colorado Boulder)",
    type: "Free",
    description:
      "Free interactive simulations for physics, chemistry, and math concepts — also used elsewhere on this site for hands-on exploration.",
  },
  {
    name: "School-based tutoring",
    type: "Free",
    description:
      "Many schools have free peer tutoring, a National Honor Society tutoring program, or teacher office hours. Genuinely worth asking about — it's easy to miss if no one tells you it exists.",
  },
  {
    name: "Public library resources",
    type: "Free",
    description:
      "Some public libraries offer free tutoring or homework help programs. Availability varies a lot by location, so it's worth checking your local library's website.",
  },
  {
    name: "YouTube math and science channels",
    type: "Free",
    description:
      "Channels like 3Blue1Brown (for visual math intuition) and Professor Leonard (for calculus) are free and widely recommended by students studying these subjects.",
  },
  {
    name: "Dual enrollment at a community college",
    type: "Low-cost or paid",
    description:
      "Where available, this lets a motivated student take real college-level math or physics courses while still in high school, sometimes at reduced or no cost depending on your state or local program. Ask a school counselor whether this is available to you.",
  },
  {
    name: "Paid tutoring services or a private tutor",
    type: "Low-cost or paid",
    description:
      "Services like Mathnasium, Kumon, or Sylvan Learning, or an independent tutor. Cost and availability vary a lot by location, and plenty of successful engineers never used a paid tutor. If it's accessible to you and you're stuck on a specific subject, it can genuinely help — but it's not a requirement, and it's not what separates who ends up succeeding in engineering.",
  },
  {
    name: "MATHCOUNTS",
    type: "Competition & enrichment",
    description: "A well-known national math competition specifically for middle schoolers.",
  },
  {
    name: "Science Olympiad",
    type: "Competition & enrichment",
    description: "Team-based science and engineering competitions available at both middle and high school levels.",
  },
  {
    name: "FIRST LEGO League, FIRST Tech Challenge, or FIRST Robotics Competition",
    type: "Competition & enrichment",
    description:
      "Referenced elsewhere on this site — these build genuine engineering skill through hands-on competition, not just classroom learning.",
  },
  {
    name: "AMC (American Mathematics Competitions)",
    type: "Competition & enrichment",
    description:
      "For students who are already comfortable with their current math class and want an extra challenge — not something everyone needs to do.",
  },
];
