import { StubQuizQuestion } from "./stubQuiz";

// Spanish translation of all stub-quiz questions — same shape and
// identical `stubFields` scoring data as stubQuiz.ts; only `prompt` and
// each option's `text` differ.
export const stubQuizQuestionsEs: StubQuizQuestion[] = [
  {
    id: "product",
    prompt: "¿Cuál de estos preferirías ayudar a crear?",
    options: [
      { text: "Un auto o vehículo de carretera", stubFields: ["automotive-engineering"] },
      { text: "La estructura de un edificio", stubFields: ["structural-engineering"] },
      { text: "Un chip de computadora", stubFields: ["semiconductor-engineering"] },
      { text: "Cómo funcionan realmente los sistemas de un edificio, no solo su apariencia", stubFields: ["architectural-engineering"] },
    ],
  },
  {
    id: "thinking-style",
    prompt: "¿Cuál describe mejor cómo te gusta pensar un problema?",
    options: [
      { text: "Alejar la vista para ver cómo encajan las piezas de un proyecto enorme y complejo", stubFields: ["systems-engineering"] },
      { text: "Asegurarte de que algo pueda aguantar físicamente bajo fuerzas reales", stubFields: ["structural-engineering"] },
      { text: "Optimizar un proceso existente para que funcione mejor", stubFields: ["manufacturing-engineering"] },
      { text: "Trabajar a una escala extremadamente pequeña y precisa", stubFields: ["semiconductor-engineering"] },
    ],
  },
  {
    id: "values",
    prompt: "¿Cuál de estas te importa más en tu futuro trabajo?",
    options: [
      { text: "Trabajar con tecnología de vanguardia y alta precisión", stubFields: ["semiconductor-engineering"] },
      { text: "Mantener segura y en pie la infraestructura esencial — energía, edificios", stubFields: ["structural-engineering", "energy-engineering"] },
      { text: "Diseñar cómo funciona realmente un edificio, no solo su estructura", stubFields: ["architectural-engineering"] },
    ],
  },
  {
    id: "day-at-work",
    prompt: "¿Cuál suena como un día de trabajo más atractivo?",
    options: [
      { text: "En un laboratorio de sala limpia, trabajando con materiales a escala microscópica", stubFields: ["semiconductor-engineering"] },
      { text: "En el piso de una fábrica, observando un proceso funcionar y mejorándolo", stubFields: ["manufacturing-engineering"] },
      { text: "En una oficina, coordinando cómo encajan las muchas piezas móviles de un proyecto enorme", stubFields: ["systems-engineering"] },
    ],
  },
  {
    id: "workplace-environment",
    prompt: "¿Qué entorno te resulta más atractivo para tu trabajo diario real?",
    options: [
      { text: "Una pista de pruebas o un taller, afinando cómo se comporta un vehículo", stubFields: ["automotive-engineering"] },
      { text: "Una planta de energía o un sitio de energía renovable", stubFields: ["energy-engineering"] },
      { text: "Un sitio de construcción, viendo cómo se levanta una gran estructura", stubFields: ["structural-engineering"] },
      { text: "Una sala limpia, trabajando a escala microscópica", stubFields: ["semiconductor-engineering"] },
    ],
  },
  {
    id: "problem-scale",
    prompt: "¿Qué escala de problema te atrae más?",
    options: [
      { text: "Millones de piezas idénticas, ensambladas de la misma forma cada vez", stubFields: ["manufacturing-engineering"] },
      { text: "Un proyecto enorme y único, con incontables piezas móviles", stubFields: ["systems-engineering"] },
      { text: "Un solo vehículo, perfeccionado hasta el más mínimo detalle", stubFields: ["automotive-engineering"] },
      { text: "Un solo edificio, diseñado para soportar exactamente las cargas que necesita", stubFields: ["structural-engineering"] },
    ],
  },
  {
    id: "public-need",
    prompt: "¿Qué necesidad pública preferirías ayudar a resolver?",
    options: [
      { text: "Mantener la red eléctrica confiable mientras la demanda sigue creciendo", stubFields: ["energy-engineering"] },
      { text: "Asegurarse de que edificios y puentes puedan soportar la carga", stubFields: ["structural-engineering"] },
      { text: "Hacer que los vehículos sean más seguros y eficientes", stubFields: ["automotive-engineering"] },
      { text: "Diseñar cómo funcionan realmente juntos los sistemas de un edificio", stubFields: ["architectural-engineering"] },
    ],
  },
];
