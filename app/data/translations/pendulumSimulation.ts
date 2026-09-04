export const pendulumSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Pendulum Simulator",
    intro:
      "Adjust the pendulum's length and how far you pull it back before releasing it, and watch how little of that actually changes the swing's timing.",
    length: "Pendulum length",
    releaseAngle: "Release angle",
    periodReadout: (v: string) => `period: ${v}s`,
    mathHeading: "The math behind it",
    mathP1:
      "A pendulum's period — the time for one full back-and-forth swing — depends on surprisingly little. Ignoring air resistance, it comes down to just the length of the pendulum and the strength of gravity:",
    formula: "period = 2π × √(length ÷ gravity)",
    mathP2:
      "Notice what's missing from that formula: mass. A heavier bob and a lighter one, released from the same height on the same length of string, swing at exactly the same rate — one of the most famous, counterintuitive results in classical mechanics. Amplitude barely matters either, as long as the swing stays reasonably small: a wider swing travels farther each cycle, but it also moves faster, and the two effects cancel out almost exactly.",
    mathP3:
      "This simulator uses the small-angle approximation, which holds well up to about 20-30° — the normal range for a real pendulum clock or a playground swing. At much larger release angles, the true period stretches out slightly longer than this formula predicts, and the simple relationship starts to break down.",
    conceptLink: "More on energy as a concept →",
    diagramAriaLabel:
      "A pendulum hanging from a pivot, swinging out to an angle set by the release angle, with a dashed line showing the vertical rest position",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Péndulo",
    intro:
      "Ajusta la longitud del péndulo y qué tan lejos lo jalas antes de soltarlo, y observa qué tan poco de eso cambia en realidad el ritmo del vaivén.",
    length: "Longitud del péndulo",
    releaseAngle: "Ángulo de liberación",
    periodReadout: (v: string) => `periodo: ${v}s`,
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "El periodo de un péndulo — el tiempo que tarda en completar un vaivén de ida y vuelta — depende de sorprendentemente poco. Ignorando la resistencia del aire, se reduce solo a la longitud del péndulo y la fuerza de la gravedad:",
    formula: "periodo = 2π × √(longitud ÷ gravedad)",
    mathP2:
      "Nota lo que falta en esa fórmula: la masa. Una pesa más pesada y una más ligera, soltadas desde la misma altura en la misma longitud de cuerda, oscilan exactamente al mismo ritmo — uno de los resultados más famosos y contraintuitivos de la mecánica clásica. La amplitud tampoco importa mucho, siempre que el vaivén se mantenga razonablemente pequeño: un vaivén más amplio recorre más distancia en cada ciclo, pero también se mueve más rápido, y los dos efectos se cancelan casi exactamente.",
    mathP3:
      "Este simulador usa la aproximación de ángulo pequeño, que se cumple bien hasta unos 20-30° — el rango normal para un reloj de péndulo real o un columpio de parque. Con ángulos de liberación mucho más grandes, el periodo real se alarga un poco más de lo que predice esta fórmula, y la relación simple empieza a fallar.",
    conceptLink: "Más sobre la energía como concepto →",
    diagramAriaLabel:
      "Un péndulo colgando de un punto de apoyo, balanceándose hasta un ángulo determinado por el ángulo de liberación, con una línea punteada mostrando la posición vertical de reposo",
  },
};
