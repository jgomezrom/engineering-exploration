export const projectileSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Projectile Motion Simulator",
    introBefore: "Adjust the launch angle and power and watch the trajectory change instantly. It's the same launch-angle intuition behind the",
    challengeLink: "paper airplane flight lab",
    introAfter: " — though read the honest caveat below before assuming it explains the airplane itself.",
    launchAngle: "Launch angle",
    launchPower: "Launch power",
    rangeReadout: (v: number) => `range: ${v}`,
    heightReadout: (v: number) => `max height: ${v}`,
    mathHeading: "The math behind it",
    mathP1:
      "Once something is launched, gravity is the only force acting on it in this model — no air pushing back, no lift holding it up. That's enough on its own to work out exactly where it lands and how high it goes, using the same equations of motion that describe anything in free fall:",
    formula: "range = (speed² × sin(2 × angle)) ÷ gravity",
    mathP2:
      "That formula is also why 45° gives the longest range for a given launch power — sin(2 × angle) peaks at exactly 90°, which happens when angle = 45°. Launch flatter or steeper than that and you trade horizontal distance for either less hang time or more.",
    mathP3:
      "This is a deliberately simplified model — it's the same physics that describes a thrown ball or a cannonball, not a real paper airplane. A paper airplane's actual flight is shaped by aerodynamic lift and drag from its wings, forces this model doesn't include at all, which is exactly why a well-designed paper airplane can glide much farther and flatter than a simple ballistic path would predict — and why real aircraft designers need far more complex models than this one. Treat this simulator as the launch-angle intuition underneath the paper airplane challenge, not a model of the airplane itself.",
    conceptLink: "More on forces as a concept →",
    diagramAriaLabel: "A parabolic trajectory arc from a launch point to a landing point, changing shape with launch angle and power",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Movimiento de Proyectiles",
    introBefore: "Ajusta el ángulo y la potencia de lanzamiento y observa cómo cambia la trayectoria al instante. Es la misma intuición sobre el ángulo de lanzamiento detrás del",
    challengeLink: "laboratorio de vuelo del avión de papel",
    introAfter: " — aunque lee la advertencia honesta abajo antes de asumir que explica el avión en sí.",
    launchAngle: "Ángulo de lanzamiento",
    launchPower: "Potencia de lanzamiento",
    rangeReadout: (v: number) => `alcance: ${v}`,
    heightReadout: (v: number) => `altura máxima: ${v}`,
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "Una vez que algo es lanzado, la gravedad es la única fuerza que actúa sobre él en este modelo — sin aire empujando de vuelta, sin sustentación sosteniéndolo. Eso es suficiente por sí solo para calcular exactamente dónde cae y qué tan alto llega, usando las mismas ecuaciones de movimiento que describen cualquier cosa en caída libre:",
    formula: "alcance = (velocidad² × sen(2 × ángulo)) ÷ gravedad",
    mathP2:
      "Esa fórmula también explica por qué 45° da el mayor alcance para una potencia de lanzamiento dada — sen(2 × ángulo) alcanza su máximo exactamente en 90°, lo cual pasa cuando el ángulo es 45°. Lanzar más plano o más empinado que eso intercambia distancia horizontal por menos o más tiempo en el aire.",
    mathP3:
      "Este es un modelo deliberadamente simplificado — es la misma física que describe una pelota lanzada o una bala de cañón, no un avión de papel real. El vuelo real de un avión de papel está determinado por la sustentación y el arrastre aerodinámicos de sus alas, fuerzas que este modelo no incluye en absoluto — que es exactamente por qué un avión de papel bien diseñado puede planear mucho más lejos y más plano de lo que predeciría una trayectoria balística simple, y por qué los diseñadores de aeronaves reales necesitan modelos mucho más complejos que este. Piensa en este simulador como la intuición sobre el ángulo de lanzamiento detrás del desafío del avión de papel, no como un modelo del avión en sí.",
    conceptLink: "Más sobre las fuerzas como concepto →",
    diagramAriaLabel: "Un arco de trayectoria parabólica desde un punto de lanzamiento hasta un punto de aterrizaje, cambiando de forma según el ángulo y la potencia de lanzamiento",
  },
};
