export const resourcesTranslations = {
  en: {
    badge: "Everything else, in one place",
    heading: "Resources",
    intro:
      "Beyond the fields, the quiz, and the challenges — this is everything else on the site, gathered in one spot so it's easy to find.",
  },
  es: {
    badge: "Todo lo demás, en un solo lugar",
    heading: "Recursos",
    intro:
      "Más allá de los campos, el cuestionario, y los desafíos — esto es todo lo demás en el sitio, reunido en un solo lugar para que sea fácil de encontrar.",
  },
};

// Keyed by resourceLinks' href. English title/description live in
// resourceLinks.tsx itself; this only carries the Spanish versions.
export const resourceLinksEs: Record<string, { title: string; description: string }> = {
  "/compare": {
    title: "Comparar Campos",
    description: "Ve todos los campos de este sitio uno junto al otro, en los rasgos que realmente te importan.",
  },
  "/faq": {
    title: "Preguntas Frecuentes",
    description:
      "Respuestas rápidas a preguntas comunes — requisitos de matemáticas, cambiar de carrera, privacidad — cada una enlazando a la página completa detrás.",
  },
  "/math": {
    title: "¿Tengo Que Ser Bueno en Matemáticas?",
    description:
      "Una respuesta honesta, más un mapa completo de cursos — opciones de AP, IB, y dónde conseguir ayuda extra.",
  },
  "/vs": {
    title: "Ingeniería vs. Otras Carreras",
    description: "¿Ingeniero o mecánico? ¿Doctor? ¿Programador? Aclarando las carreras que la gente más confunde.",
  },
  "/concepts": {
    title: "Conceptos de Ingeniería",
    description: "Fuerzas, circuitos, estructuras, algoritmos, y más — las ideas centrales, explicadas en lenguaje sencillo.",
  },
  "/simulations": {
    title: "Simulaciones Interactivas",
    description:
      "Palancas, circuitos, vigas, engranajes, y flotabilidad — ajusta variables reales y observa cómo responde la física real, con las matemáticas explicadas.",
  },
  "/design-process": {
    title: "El Proceso de Diseño de Ingeniería",
    description: "El ciclo que realmente usan los ingenieros — Preguntar, Imaginar, Planear, Construir, Probar, Mejorar, Repetir.",
  },
  "/quiz/more-majors": {
    title: "El Cuestionario de Carreras Menos Comunes",
    description:
      "Un cuestionario opcional y más informal para campos como ingeniería nuclear, de petróleo, marina, y de semiconductores.",
  },
  "/sources": {
    title: "Fuentes y Metodología",
    description: "De dónde viene cada número, qué es juicio editorial, y quién escribió esto realmente.",
  },
  "/opportunities": {
    title: "Encontrar Oportunidades Cerca de Ti",
    description:
      "Este sitio no sabe dónde vives y no lo va a preguntar. Exactamente qué buscar para encontrar clubes y programas tú mismo/a.",
  },
  "/meet-engineers": {
    title: "Cómo Conocer a un Ingeniero de Verdad",
    description:
      "Este sitio no va a fingir entrevistas. Aquí está cómo encontrar una de verdad, qué preguntar, y cómo mantenerte seguro/a haciéndolo.",
  },
  "/parents-and-teachers": {
    title: "Para Padres y Docentes",
    description: "Qué es este sitio, qué recopila (nada), y cómo podría ser útil en un salón de clases.",
  },
};
