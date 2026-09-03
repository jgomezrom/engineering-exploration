import { DesignProcessStep } from "./designProcess";

// Spanish translation of the 6 design-process steps — small and complete, so
// unlike fields.es.ts there's no partial/fallback case to handle here.
export const designProcessStepsEs: DesignProcessStep[] = [
  {
    id: "ask",
    name: "Preguntar",
    description:
      "Descubre qué problema estás resolviendo realmente, y qué contaría como éxito. Muchos diseños fallidos vienen de saltarse este paso e ir directo a construir.",
  },
  {
    id: "imagine",
    name: "Imaginar",
    description:
      "Piensa en tantos enfoques posibles como puedas, incluso los que parezcan poco probables. La meta aquí son opciones, no la respuesta final.",
  },
  {
    id: "plan",
    name: "Planear",
    description:
      "Elige un enfoque y define los detalles — qué vas a necesitar, más o menos cómo va a armarse, y qué podría salir mal.",
  },
  {
    id: "build",
    name: "Construir",
    description:
      "Hazlo de verdad. Los planes siempre se topan con la realidad aquí, y la realidad suele ganar — eso es lo esperado, no una señal de que planeaste mal.",
  },
  {
    id: "test",
    name: "Probar",
    description:
      "Pruébalo en condiciones reales y observa qué pasa de verdad, no solo lo que esperabas que pasara.",
  },
  {
    id: "improve",
    name: "Mejorar",
    description:
      "Usa lo que aprendiste probando para cambiar el diseño. Aquí es donde suele pasar la mayor parte del aprendizaje real — a menudo más que en la primera construcción.",
  },
];
