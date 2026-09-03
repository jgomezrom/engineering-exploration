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
];
