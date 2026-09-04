export const logicGateSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Logic Gate Simulator",
    introBefore: "Flip the inputs, switch between gates, and watch the output respond instantly. This is the same 0-and-1 logic behind the",
    challengeLink: "physical binary counter challenge",
    introAfter: ", just built from gates instead of cups.",
    outputHeader: "OUT",
    diagramAriaLabel: "A logic gate with two toggleable inputs and an output indicator that lights up based on the selected gate's rule",
    mathHeading: "The logic behind it",
    mathP1:
      "Every decision a computer makes, no matter how complicated, eventually comes down to combinations of gates just like these — each one is just a fixed rule for turning one or two 0s and 1s into a single 0 or 1.",
    mathP2Title: "The four rules:",
    andRule: "AND — output is 1 only when both inputs are 1.",
    orRule: "OR — output is 1 when at least one input is 1.",
    xorRule: "XOR — output is 1 only when the inputs are different from each other.",
    notRule: "NOT — flips its single input: 1 becomes 0, 0 becomes 1.",
    mathP3:
      "The physical binary counter challenge has you count from 0000 to 1111 by hand, flipping cups. Every one of those flips is really the output of a small chain of gates like these deciding whether a bit should carry over to the next position — the counter is what you get when you wire enough of these together.",
    mathP4:
      "Real logic gates are built out of transistors — tiny electronic switches, not the shapes drawn here. This simulator shows the logic each gate performs, not the physical electronics that actually implement it, which is its own deep topic in computer engineering.",
    conceptLink: "More on algorithms as a concept →",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Puertas Lógicas",
    introBefore: "Cambia las entradas, alterna entre puertas, y observa cómo responde la salida al instante. Es la misma lógica de 0 y 1 detrás del",
    challengeLink: "desafío físico del contador binario",
    introAfter: ", solo que construida con puertas en lugar de vasos.",
    outputHeader: "SAL",
    diagramAriaLabel: "Una puerta lógica con dos entradas alternables y un indicador de salida que se enciende según la regla de la puerta seleccionada",
    mathHeading: "La lógica detrás de esto",
    mathP1:
      "Cada decisión que toma una computadora, sin importar qué tan complicada sea, eventualmente se reduce a combinaciones de puertas como estas — cada una es solo una regla fija para convertir uno o dos 0s y 1s en un solo 0 o 1.",
    mathP2Title: "Las cuatro reglas:",
    andRule: "AND (Y) — la salida es 1 solo cuando ambas entradas son 1.",
    orRule: "OR (O) — la salida es 1 cuando al menos una entrada es 1.",
    xorRule: "XOR (O exclusivo) — la salida es 1 solo cuando las entradas son diferentes entre sí.",
    notRule: "NOT (NO) — invierte su única entrada: 1 se convierte en 0, 0 se convierte en 1.",
    mathP3:
      "El desafío físico del contador binario te hace contar de 0000 a 1111 a mano, volteando vasos. Cada uno de esos volteos es en realidad la salida de una pequeña cadena de puertas como estas decidiendo si un bit debe pasar a la siguiente posición — el contador es lo que obtienes cuando conectas suficientes de estas juntas.",
    mathP4:
      "Las puertas lógicas reales están hechas de transistores — pequeños interruptores electrónicos, no las formas dibujadas aquí. Este simulador muestra la lógica que realiza cada puerta, no la electrónica física que realmente la implementa, que es todo un tema profundo dentro de la ingeniería en computación.",
    conceptLink: "Más sobre los algoritmos como concepto →",
  },
};
