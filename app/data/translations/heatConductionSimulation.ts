export const heatConductionSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Heat Conduction Simulator",
    intro:
      "Pick a material, adjust how thick it is and how big a temperature difference it's holding back, and watch how much heat actually gets through.",
    material: "Material",
    thickness: "Thickness",
    tempDifference: "Temperature difference",
    copper: "Copper",
    aluminum: "Aluminum",
    glass: "Glass",
    wood: "Wood",
    hotLabel: "HOT",
    coldLabel: "COLD",
    fluxReadout: (v: string) => `${v} W/m² flowing through`,
    mathHeading: "The math behind it",
    mathP1:
      "Heat moves through a material at a rate that depends on three things: how well the material itself conducts heat, how big a temperature difference it's bridging, and how thick it is. For steady heat flow through a flat slab, that relationship is:",
    formula: "heat flux = (conductivity × temperature difference) ÷ thickness",
    mathP2:
      "\"Conductivity\" here is a real, measured property of the material — copper conducts heat roughly 2,500 times better than wood does, which is why a metal spoon left in hot soup gets uncomfortably warm to hold within seconds, while a wooden one barely warms up at all. Thickness works the other way: doubling how thick a material is cuts the heat flow rate in half, which is exactly why insulation gets installed in thick layers, not thin ones.",
    mathP3:
      "This simulator uses typical published conductivity values for each material and assumes steady flow straight through — it doesn't model the material heating up over time, air gaps, or the more complex layering real insulation is engineered around. But the core relationship it shows is exact: more conductive, thinner, or a bigger temperature gap always means more heat gets through.",
    conceptLink: "More on thermodynamics as a concept →",
    diagramAriaLabel:
      "A slab of material between a hot side and a cold side, with arrows showing heat flowing through it — more arrows for a higher heat flow rate",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Conducción de Calor",
    intro:
      "Elige un material, ajusta qué tan grueso es y qué tan grande es la diferencia de temperatura que está conteniendo, y observa cuánto calor realmente logra pasar.",
    material: "Material",
    thickness: "Grosor",
    tempDifference: "Diferencia de temperatura",
    copper: "Cobre",
    aluminum: "Aluminio",
    glass: "Vidrio",
    wood: "Madera",
    hotLabel: "CALIENTE",
    coldLabel: "FRÍO",
    fluxReadout: (v: string) => `${v} W/m² fluyendo`,
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "El calor se mueve a través de un material a una velocidad que depende de tres cosas: qué tan bien conduce el calor el material mismo, qué tan grande es la diferencia de temperatura que está uniendo, y qué tan grueso es. Para un flujo de calor estable a través de una placa plana, esa relación es:",
    formula: "flujo de calor = (conductividad × diferencia de temperatura) ÷ grosor",
    mathP2:
      "La \"conductividad\" aquí es una propiedad real y medida del material — el cobre conduce el calor aproximadamente 2,500 veces mejor que la madera, que es por eso que una cuchara de metal dejada en una sopa caliente se calienta incómodamente en segundos, mientras que una de madera casi no se calienta. El grosor funciona al revés: duplicar qué tan grueso es un material reduce a la mitad la velocidad del flujo de calor, que es exactamente por qué el aislamiento se instala en capas gruesas, no delgadas.",
    mathP3:
      "Este simulador usa valores de conductividad típicos y publicados para cada material, y asume un flujo estable directo a través — no modela el material calentándose con el tiempo, espacios de aire, o el aislamiento por capas más complejo en torno al cual se diseña el aislamiento real. Pero la relación central que muestra es exacta: más conductivo, más delgado, o una brecha de temperatura más grande siempre significa que pasa más calor.",
    conceptLink: "Más sobre la termodinámica como concepto →",
    diagramAriaLabel:
      "Una placa de material entre un lado caliente y un lado frío, con flechas mostrando el calor fluyendo a través de ella — más flechas para una tasa de flujo de calor más alta",
  },
};
