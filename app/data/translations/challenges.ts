import { ChallengeCategory, Difficulty } from "../types";

export const challengesTranslations = {
  en: {
    badge: "Try it yourself",
    heading: "Hands-On Challenges",
    intro:
      "Small, real missions you can actually do — no lab required. Each one has a clear objective, real constraints, and a way to measure whether it actually worked. Pick one and see what the field feels like in practice.",
    notSureHeading: "Not sure what to do if it doesn't work?",
    notSureBody:
      "Every challenge here follows the same process real engineers use — and it's normal to loop back and try again.",
    designProcessLink: "See the Engineering Design Process →",
    relatedField: "Related field:",
    missionBriefing: "Mission Briefing",
    objectiveLabel: "Objective",
    constraintsLabel: "Constraints",
    conceptTesting: "Concept You're Testing",
    learnMoreConcept: "Learn more about this concept →",
    tryInteractiveSimulator: "Try the interactive simulator →",
    whatYoullNeed: "What You'll Need",
    instructionsLabel: "Instructions",
    howToMeasure: "How to Measure Results",
    skillsPractice: "Skills You'll Practice",
    ifDoesntWork: "If It Doesn't Work the First Time",
    ifDoesntWorkBody:
      "That's normal — this challenge follows the same design process real engineers use. A failed test just tells you where to go back and improve.",
    seeFullProcess: "See the full Engineering Design Process →",
    reflect: "Reflect",
  },
  es: {
    badge: "Pruébalo tú mismo",
    heading: "Desafíos Prácticos",
    intro:
      "Pequeñas misiones reales que realmente puedes hacer — no se necesita laboratorio. Cada una tiene un objetivo claro, restricciones reales, y una forma de medir si realmente funcionó. Elige una y descubre cómo se siente el campo en la práctica.",
    notSureHeading: "¿No sabes qué hacer si no funciona?",
    notSureBody:
      "Cada desafío aquí sigue el mismo proceso que usan los ingenieros de verdad — y es normal regresar e intentar de nuevo.",
    designProcessLink: "Ver el Proceso de Diseño de Ingeniería →",
    relatedField: "Campo relacionado:",
    missionBriefing: "Briefing de la Misión",
    objectiveLabel: "Objetivo",
    constraintsLabel: "Restricciones",
    conceptTesting: "Concepto Que Estás Probando",
    learnMoreConcept: "Aprende más sobre este concepto →",
    tryInteractiveSimulator: "Prueba el simulador interactivo →",
    whatYoullNeed: "Lo Que Vas a Necesitar",
    instructionsLabel: "Instrucciones",
    howToMeasure: "Cómo Medir los Resultados",
    skillsPractice: "Habilidades Que Vas a Practicar",
    ifDoesntWork: "Si No Funciona la Primera Vez",
    ifDoesntWorkBody:
      "Eso es normal — este desafío sigue el mismo proceso de diseño que usan los ingenieros de verdad. Una prueba fallida solo te dice a dónde regresar para mejorar.",
    seeFullProcess: "Ver el Proceso de Diseño de Ingeniería completo →",
    reflect: "Reflexiona",
  },
};

export const categoryLabels: Record<"en" | "es", Record<ChallengeCategory, string>> = {
  en: {
    "Mechanisms & Motion": "Mechanisms & Motion",
    "Structures & Materials": "Structures & Materials",
    "Circuits & Electronics": "Circuits & Electronics",
    "Code & Logic": "Code & Logic",
    "Chemistry & Processes": "Chemistry & Processes",
    "Life Sciences": "Life Sciences",
    "Systems & Efficiency": "Systems & Efficiency",
    "Flight & Aerodynamics": "Flight & Aerodynamics",
  },
  es: {
    "Mechanisms & Motion": "Mecanismos y Movimiento",
    "Structures & Materials": "Estructuras y Materiales",
    "Circuits & Electronics": "Circuitos y Electrónica",
    "Code & Logic": "Código y Lógica",
    "Chemistry & Processes": "Química y Procesos",
    "Life Sciences": "Ciencias de la Vida",
    "Systems & Efficiency": "Sistemas y Eficiencia",
    "Flight & Aerodynamics": "Vuelo y Aerodinámica",
  },
};

export const difficultyLabels: Record<"en" | "es", Record<Difficulty, string>> = {
  en: { Beginner: "Beginner", Intermediate: "Intermediate", Advanced: "Advanced" },
  es: { Beginner: "Principiante", Intermediate: "Intermedio", Advanced: "Avanzado" },
};
