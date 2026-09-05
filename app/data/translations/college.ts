import { FieldSlug, TipConfidence, TipTheme } from "../types";

// Names for majors that appear in college curricula but don't have a full
// exploration page in fields.ts/fields.es.ts (no day-in-the-life content,
// misconceptions, etc. exists for these yet). Covers only the FieldSlug
// values missing from that file, as a display-name fallback for the major
// picker below.
export const collegeOnlyMajorNames: Record<"en" | "es", Partial<Record<FieldSlug, string>>> = {
  en: {
    "architectural-engineering": "Architectural Engineering",
    "automotive-engineering": "Automotive Engineering",
    "manufacturing-engineering": "Manufacturing Engineering",
    "systems-engineering": "Systems Engineering",
    "structural-engineering": "Structural Engineering",
    "energy-engineering": "Energy Engineering",
    "semiconductor-engineering": "Semiconductor Engineering",
  },
  es: {
    "architectural-engineering": "Ingeniería Arquitectónica",
    "automotive-engineering": "Ingeniería Automotriz",
    "manufacturing-engineering": "Ingeniería de Manufactura",
    "systems-engineering": "Ingeniería de Sistemas",
    "structural-engineering": "Ingeniería Estructural",
    "energy-engineering": "Ingeniería Energética",
    "semiconductor-engineering": "Ingeniería de Semiconductores",
  },
};

export const collegeTranslations = {
  en: {
    badge: "College",
    heading: "Engineering in College",
    intro:
      "A look at what a real engineering major's coursework sequence looks like, plus practical tips for the parts nobody explains clearly.",
    disclaimerHeading: "Before you rely on this",
    disclaimerBody:
      "Curricula vary a lot by university and by country — a published sequence from one school is not a universal requirement. Unless a specific entry says otherwise, everything in this section reflects a typical US four-year bachelor's program, not every country's system or every school's actual requirements.",
    curriculumHeading: "Curriculum by Major",
    curriculumIntro:
      "Pick a major to see a real, published course sequence — when more than one school has one on file, they're shown side by side so you can compare.",
    selectMajorLabel: "Major",
    noCurriculaYet: "No curriculum sequence has been added for this major yet.",
    yearLabel: "Year",
    sourceLabel: "Source",
    tipsHeading: "Tips",
    tipsIntro:
      'Grouped by theme. Every tip is labeled with how confident you should be in it — treat "personal experience" and "varies by situation" tips as one perspective, not a rule.',
    dependsOnLabel: "Depends on",
  },
  es: {
    badge: "Universidad",
    heading: "Ingeniería en la Universidad",
    intro:
      "Una mirada a cómo es realmente la secuencia de cursos de una carrera de ingeniería, además de consejos prácticos sobre las cosas que nadie explica claramente.",
    disclaimerHeading: "Antes de confiar en esto",
    disclaimerBody:
      "Los planes de estudio varían mucho según la universidad y el país — una secuencia publicada por una institución no es un requisito universal. A menos que una entrada específica diga lo contrario, todo en esta sección refleja un programa típico de licenciatura de cuatro años en EE. UU., no el sistema de todos los países ni los requisitos reales de cada institución.",
    curriculumHeading: "Plan de Estudios por Carrera",
    curriculumIntro:
      "Elige una carrera para ver una secuencia de cursos real y publicada — cuando hay más de una universidad registrada, se muestran una junto a otra para que puedas compararlas.",
    selectMajorLabel: "Carrera",
    noCurriculaYet: "Todavía no se ha agregado ningún plan de estudios para esta carrera.",
    yearLabel: "Año",
    sourceLabel: "Fuente",
    tipsHeading: "Consejos",
    tipsIntro:
      'Agrupados por tema. Cada consejo indica cuánta confianza deberías tener en él — trata los consejos de "experiencia personal" y "varía según la situación" como una perspectiva, no como una regla.',
    dependsOnLabel: "Depende de",
  },
};

export const tipThemeLabels: Record<"en" | "es", Record<TipTheme, string>> = {
  en: {
    "study-strategies": "Study Strategies",
    "course-planning": "Course Planning",
    internships: "Internships",
    research: "Research",
    "workload-and-burnout": "Workload & Burnout",
  },
  es: {
    "study-strategies": "Estrategias de Estudio",
    "course-planning": "Planeación de Cursos",
    internships: "Prácticas Profesionales",
    research: "Investigación",
    "workload-and-burnout": "Carga Académica y Agotamiento",
  },
};

export const tipConfidenceLabels: Record<"en" | "es", Record<TipConfidence, string>> = {
  en: {
    "research-backed": "Research-backed",
    "varies by situation": "Varies by Situation",
    "personal experience": "Personal Experience",
  },
  es: {
    "research-backed": "Respaldado por Investigación",
    "varies by situation": "Varía Según la Situación",
    "personal experience": "Experiencia Personal",
  },
};
