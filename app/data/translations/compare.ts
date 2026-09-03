import { FieldStats } from "../types";

export const compareTranslations = {
  en: {
    badge: "Side by side",
    heading: "Compare Engineering Fields",
    introBefore:
      "These ratings are editorial judgment — a qualitative read of each field's own description on this site, not an independent measurement or a test score. Two people could reasonably rate a field a little differently. Open a field page to see the exact reasoning behind its ratings, or read the full",
    sourcesLink: "sources & methodology",
    fitHeading: "What the work is actually like",
    fitIntroBefore: "The things you're more likely to actually care about when picking a field. Worried about the Math Intensity row specifically?",
    mathLink: "Here's an honest answer, plus a course roadmap",
    practicalityHeading: "Career practicalities",
    practicalityIntro:
      "Regulation, job market conditions, and pay matter, but they change over time and by region — treat these as background context, not a reason to rule a field out.",
    medianSalary: "Median Salary (US)",
    salaryFootnote: "Median salary is sourced separately — see each field's page for the exact citation and caveats.",
  },
  es: {
    badge: "Lado a lado",
    heading: "Comparar Campos de Ingeniería",
    introBefore:
      "Estas calificaciones son juicio editorial — una lectura cualitativa de la propia descripción de cada campo en este sitio, no una medición independiente ni un puntaje de examen. Dos personas podrían razonablemente calificar un campo de forma un poco distinta. Abre la página de un campo para ver el razonamiento exacto detrás de sus calificaciones, o lee las",
    sourcesLink: "fuentes y metodología completas",
    fitHeading: "Cómo es el trabajo en realidad",
    fitIntroBefore: "Las cosas que probablemente te importen más al elegir un campo. ¿Te preocupa específicamente la fila de Intensidad de Matemáticas?",
    mathLink: "Aquí hay una respuesta honesta, más un mapa de cursos",
    practicalityHeading: "Aspectos prácticos de la carrera",
    practicalityIntro:
      "La regulación, las condiciones del mercado laboral, y el salario importan, pero cambian con el tiempo y según la región — trátalos como contexto de fondo, no como una razón para descartar un campo.",
    medianSalary: "Salario Mediano (EE. UU.)",
    salaryFootnote: "El salario mediano tiene una fuente separada — consulta la página de cada campo para ver la cita exacta y sus advertencias.",
  },
};

export const fitRowLabels: Record<"en" | "es", Record<keyof FieldStats, string>> = {
  en: {
    handsOnWork: "Building Physical Things",
    coding: "Coding",
    outdoorWork: "Time Outdoors / On-Site",
    biologyContent: "Biology / Life Science",
    creativeFreedom: "Creative / Design Freedom",
    mathIntensity: "Math Intensity",
    teamwork: "Teamwork & Collaboration",
    seeingWorkRealLife: "Seeing Your Work in Real Life",
    regulatoryBurden: "Regulation & Compliance",
    marketUncertainty: "Job Market Uncertainty",
  },
  es: {
    handsOnWork: "Construir Cosas Físicas",
    coding: "Programación",
    outdoorWork: "Tiempo al Aire Libre / En Sitio",
    biologyContent: "Biología / Ciencias de la Vida",
    creativeFreedom: "Libertad Creativa / de Diseño",
    mathIntensity: "Intensidad de Matemáticas",
    teamwork: "Trabajo en Equipo y Colaboración",
    seeingWorkRealLife: "Ver Tu Trabajo en la Vida Real",
    regulatoryBurden: "Regulación y Cumplimiento",
    marketUncertainty: "Incertidumbre del Mercado Laboral",
  },
};
