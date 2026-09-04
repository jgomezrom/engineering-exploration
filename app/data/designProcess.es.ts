import { DesignProcessStep } from "./designProcess";

// Spanish translation of the 6 design-process steps — small and complete, so
// unlike fields.es.ts there's no partial/fallback case to handle here.
export const designProcessStepsEs: DesignProcessStep[] = [
  {
    id: "ask",
    name: "Preguntar",
    description:
      "Descubre qué problema estás resolviendo en realidad, y qué contaría siquiera como éxito. Salta este paso y ve directo a construir, y ahí mismo nacen muchos diseños fallidos.",
  },
  {
    id: "imagine",
    name: "Imaginar",
    description:
      "Piensa en tantos enfoques posibles como puedas, incluso los que parezcan poco probables. En esta etapa la meta son opciones, no la respuesta final.",
  },
  {
    id: "plan",
    name: "Planear",
    description:
      "Elige un enfoque y define los detalles — qué vas a necesitar, más o menos cómo va a armarse, y qué podría salir mal en el camino.",
  },
  {
    id: "build",
    name: "Construir",
    description:
      "Hazlo de verdad. Los planes siempre se topan con la realidad aquí, y la realidad casi siempre gana. Eso es lo esperado, no una señal de que planeaste mal.",
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
      "Toma lo que aprendiste probando y cambia el diseño. Aquí es donde suele pasar la mayor parte del aprendizaje real, a menudo más que en la primera construcción.",
  },
];
