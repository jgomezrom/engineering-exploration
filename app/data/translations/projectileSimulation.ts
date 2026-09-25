export const projectileSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Projectile Motion Simulator",
    introBefore: "Adjust the launch angle, the power, and how heavy the ball is, and watch what the air does to the throw. It's the same launch-angle intuition behind the",
    challengeLink: "paper airplane flight lab",
    introAfter: " — though read the honest caveat below before assuming it explains the airplane itself.",
    launchAngle: "Launch angle",
    launchPower: "Launch power",
    ballMass: "Ball mass",
    rangeReadout: (v: number) => `range: ${v}`,
    heightReadout: (v: number) => `max height: ${v}`,
    withAirCurve: "With air resistance",
    vacuumCurve: "Textbook formula (no air)",
    rangeAirLabel: "Range (with air)",
    rangeVacuumLabel: "Range (no air)",
    lostToAirLabel: "Lost to air",
    flightTimeLabel: "Flight time",
    apexLabel: "Peak height",
    speedLabel: "Launch speed",
    verification: (error: string, closedForm: string) =>
      `Both paths come from the same step-by-step solver. Running it with the air switched off should reproduce the textbook range of ${closedForm} m exactly — it lands within ${error}, which is what makes the air-resistance path worth believing, since no formula exists to check that one against.`,
    assumptions:
      "Assumes a smooth sphere, still air at sea level, and no spin. Spin matters enormously in real sport — backspin is most of why a golf ball carries — and isn't modelled here.",
    mathHeading: "The math behind it",
    mathP1:
      "If gravity were the only force acting on a thrown ball, working out where it lands would take one line. That's the formula physics class starts with, and it describes a throw in a vacuum:",
    formula: "range = (speed² × sin(2 × angle)) ÷ gravity",
    mathP2:
      "That formula is also why 45° gives the longest range in a vacuum — sin(2 × angle) peaks at exactly 90°, which happens when angle = 45°. Launch flatter or steeper than that and you trade horizontal distance for either less hang time or more.",
    airHeading: "What the air does to it",
    airP1:
      "Air is not a vacuum. A ball pushing through it feels a drag force that grows with the square of its speed — double the speed and the air pushes back four times as hard. Turn the launch power up and watch the gap between the two paths open: the dashed line is the textbook answer, the solid line is what the ball actually does.",
    airP2:
      "The mass slider is the interesting one. A heavy ball and a light ball of the same size meet exactly the same air force, but the heavy one has far more inertia to resist it, so it flies closer to the vacuum path. That ratio — how much ball there is compared with how much air it has to shove aside — is why a golf ball carries and a ping-pong ball stops dead. It's also why the best launch angle drops below 45° once air is involved: a flatter throw spends less time being slowed down.",
    airP3:
      "Adding drag means giving up the tidy formula. It couples the horizontal and vertical motion together — the sideways drag depends on how fast the ball is falling, and vice versa — and there's no clean closed-form solution to that. So the simulator solves the motion step by step instead, with fourth-order Runge-Kutta, advancing position and velocity through small slices of time.",
    airP4:
      "That raises a fair question: if there's no formula to compare against, how do you know the answer is right? By running the same solver with the air switched off, where a formula does exist. It reproduces the textbook range to under a thousandth of a percent, which is printed under the diagram. The solver is sound; it's only the physics that changed.",
    mathP3:
      "One honest caveat: this models a ball, not a paper airplane. A paper airplane's flight is shaped by aerodynamic lift from its wings, a force this model doesn't include at all, which is exactly why a well-designed one glides much farther and flatter than any ballistic path would predict. Treat this as the launch-angle intuition underneath the paper airplane challenge, not a model of the airplane itself.",
    conceptLink: "More on forces as a concept →",
    diagramAriaLabel:
      "Two trajectory arcs from the same launch point — the solid one with air resistance falling short of the dashed textbook parabola",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Movimiento de Proyectiles",
    introBefore: "Ajusta el ángulo de lanzamiento, la potencia, y cuánto pesa la pelota, y observa qué le hace el aire al tiro. Es la misma intuición sobre el ángulo de lanzamiento detrás del",
    challengeLink: "laboratorio de vuelo del avión de papel",
    introAfter: " — aunque lee la advertencia honesta abajo antes de asumir que explica el avión en sí.",
    launchAngle: "Ángulo de lanzamiento",
    launchPower: "Potencia de lanzamiento",
    ballMass: "Masa de la pelota",
    rangeReadout: (v: number) => `alcance: ${v}`,
    heightReadout: (v: number) => `altura máxima: ${v}`,
    withAirCurve: "Con resistencia del aire",
    vacuumCurve: "Fórmula del libro (sin aire)",
    rangeAirLabel: "Alcance (con aire)",
    rangeVacuumLabel: "Alcance (sin aire)",
    lostToAirLabel: "Perdido por el aire",
    flightTimeLabel: "Tiempo de vuelo",
    apexLabel: "Altura máxima",
    speedLabel: "Velocidad de salida",
    verification: (error: string, closedForm: string) =>
      `Las dos trayectorias salen del mismo solucionador paso a paso. Ejecutarlo con el aire apagado debería reproducir exactamente el alcance del libro, ${closedForm} m — y queda dentro de ${error}, que es lo que hace creíble la trayectoria con aire, porque para esa no existe ninguna fórmula con la cual compararla.`,
    assumptions:
      "Supone una esfera lisa, aire en calma a nivel del mar, y sin efecto de giro. El giro importa muchísimo en el deporte real — el backspin es la mayor razón por la que una pelota de golf vuela tan lejos — y aquí no está modelado.",
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "Si la gravedad fuera la única fuerza actuando sobre una pelota lanzada, calcular dónde cae tomaría una línea. Esa es la fórmula con la que empieza la clase de física, y describe un tiro en el vacío:",
    formula: "alcance = (velocidad² × sen(2 × ángulo)) ÷ gravedad",
    mathP2:
      "Esa fórmula también explica por qué 45° da el mayor alcance en el vacío — sen(2 × ángulo) alcanza su máximo exactamente en 90°, lo cual pasa cuando el ángulo es 45°. Lanzar más plano o más empinado que eso intercambia distancia horizontal por menos o más tiempo en el aire.",
    airHeading: "Qué le hace el aire",
    airP1:
      "El aire no es el vacío. Una pelota que lo atraviesa siente una fuerza de arrastre que crece con el cuadrado de su velocidad — al doble de velocidad, el aire empuja cuatro veces más fuerte. Sube la potencia de lanzamiento y observa cómo se abre la separación entre las dos trayectorias: la línea punteada es la respuesta del libro, la sólida es lo que la pelota hace en realidad.",
    airP2:
      "El control de masa es el más interesante. Una pelota pesada y una ligera del mismo tamaño reciben exactamente la misma fuerza del aire, pero la pesada tiene mucha más inercia para resistirla, así que vuela más cerca de la trayectoria del vacío. Esa proporción — cuánta pelota hay comparada con cuánto aire tiene que apartar — es por qué una pelota de golf vuela lejos y una de ping-pong se frena en seco. También es por qué el mejor ángulo de lanzamiento baja de 45° cuando hay aire: un tiro más plano pasa menos tiempo siendo frenado.",
    airP3:
      "Añadir el arrastre significa renunciar a la fórmula limpia. Acopla el movimiento horizontal con el vertical — el arrastre lateral depende de qué tan rápido está cayendo la pelota, y al revés — y para eso no hay una solución cerrada sencilla. Así que el simulador resuelve el movimiento paso a paso, con Runge-Kutta de cuarto orden, avanzando la posición y la velocidad en pequeñas rebanadas de tiempo.",
    airP4:
      "Eso plantea una pregunta justa: si no hay fórmula con la cual comparar, ¿cómo sabes que la respuesta es correcta? Ejecutando el mismo solucionador con el aire apagado, donde sí existe una fórmula. Reproduce el alcance del libro con menos de una milésima de por ciento de diferencia, y eso aparece impreso bajo el diagrama. El solucionador es sólido; lo único que cambió fue la física.",
    mathP3:
      "Una advertencia honesta: esto modela una pelota, no un avión de papel. El vuelo de un avión de papel está determinado por la sustentación aerodinámica de sus alas, una fuerza que este modelo no incluye en absoluto, y por eso uno bien diseñado planea mucho más lejos y más plano de lo que predeciría cualquier trayectoria balística. Piénsalo como la intuición sobre el ángulo de lanzamiento detrás del desafío del avión de papel, no como un modelo del avión en sí.",
    conceptLink: "Más sobre las fuerzas como concepto →",
    diagramAriaLabel:
      "Dos arcos de trayectoria desde el mismo punto de lanzamiento — el sólido con resistencia del aire quedándose corto frente a la parábola punteada del libro",
  },
};
