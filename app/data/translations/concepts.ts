import { ConceptCategory } from "../types";

export const conceptsTranslations = {
  en: {
    badge: "The building blocks",
    heading: "Engineering Concepts",
    intro:
      "A handful of ideas show up again and again across every engineering field. You don't need to master these before exploring — but if a term on this site is unfamiliar, this is the place to look it up.",
    inRealLife: "In real life",
    showsUpIn: "Shows up in:",
  },
  es: {
    badge: "Los bloques de construcción",
    heading: "Conceptos de Ingeniería",
    intro:
      "Un puñado de ideas aparecen una y otra vez en todos los campos de la ingeniería. No necesitas dominarlas antes de explorar — pero si un término de este sitio te resulta desconocido, este es el lugar para buscarlo.",
    inRealLife: "En la vida real",
    showsUpIn: "Aparece en:",
  },
};

export const categoryLabels: Record<"en" | "es", Record<ConceptCategory, string>> = {
  en: {
    Mechanical: "Mechanical",
    Electrical: "Electrical",
    "Structures & Materials": "Structures & Materials",
    "Software & Systems": "Software & Systems",
  },
  es: {
    Mechanical: "Mecánica",
    Electrical: "Eléctrica",
    "Structures & Materials": "Estructuras y Materiales",
    "Software & Systems": "Software y Sistemas",
  },
};
