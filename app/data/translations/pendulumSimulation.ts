export const pendulumSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Pendulum Simulator",
    intro:
      "Adjust the pendulum's length and how far you pull it back before releasing it, and watch how little of that actually changes the swing's timing — and where the textbook formula starts getting it wrong.",
    length: "Pendulum length",
    releaseAngle: "Release angle",
    periodReadout: (v: string) => `period: ${v}s`,
    swingPlot: "Swing over time",
    swingPlain: "How far the bob is from vertical, second by second. The two lines start together and drift apart as the swing gets wider.",
    trueCurve: "Real swing, solved step by step",
    smallAngleCurve: "Textbook formula",
    truePeriodLabel: "Period (real)",
    textbookPeriodLabel: "Period (textbook)",
    gapLabel: "Textbook is off by",
    verification: (error: string, exact: string) =>
      `Solved step by step with Runge-Kutta, then checked against the exact period written with an elliptic integral (${exact} s): the two agree to within ${error}.`,
    assumptions:
      "Assumes a point mass on a massless rigid rod, no air resistance, and no friction at the pivot. Each of those would stretch the real period slightly longer.",
    mathHeading: "The math behind it",
    mathP1:
      "A pendulum's period — the time for one full back-and-forth swing — depends on surprisingly little. Ignoring air resistance, it comes down to just the length of the pendulum and the strength of gravity:",
    formula: "period = 2π × √(length ÷ gravity)",
    mathP2:
      "Notice what's missing from that formula: mass. A heavier bob and a lighter one, released from the same height on the same length of string, swing at exactly the same rate — one of the most famous, counterintuitive results in classical mechanics. Amplitude barely matters either, as long as the swing stays reasonably small: a wider swing travels farther each cycle, but it also moves faster, and the two effects almost cancel out.",
    breakdownHeading: "Where that formula stops being true",
    breakdownP1:
      "Almost cancel out. That formula isn't the period of a pendulum — it's the period of a pendulum swinging through a small angle. Getting there means replacing sin θ with θ, which is close enough to true near the bottom of the swing and drifts further from it the wider the swing gets. Pull the release angle up to 45° and the real pendulum takes about 4% longer per swing than the formula claims.",
    breakdownP2:
      "Four percent sounds like nothing. A pendulum clock running 4% slow loses about an hour a day, which is why clock pendulums are built to swing through just a few degrees — small enough that the approximation is nearly exact, and the clock keeps time.",
    mathP3:
      "So this simulator doesn't use that formula to draw the swing. It solves the equation the approximation came from — the bob's angular acceleration is −(g/length) × sin(angle) — advancing the angle and speed one small time step at a time with a method called fourth-order Runge-Kutta. The solid line is that solution; the dashed line is what the textbook formula predicts. The vertical marks show where each one says the first full swing finishes.",
    mathP4:
      "There is an exact answer for the period, written with something called an elliptic integral, and the simulator works that out too — not to draw anything, but to check the step-by-step solution against it. That comparison is printed under the diagram, and it usually agrees to less than a thousandth of a percent. Checking a numerical answer against an exact one, wherever an exact one exists, is the habit that makes the numerical answers trustworthy everywhere else.",
    conceptLink: "More on energy as a concept →",
    diagramAriaLabel:
      "A pendulum hanging from a pivot, pulled out to its release angle, with a dashed arc showing the path the bob swings through",
    plotAriaLabel:
      "A graph of the pendulum's angle over time, comparing the step-by-step solution with the textbook small-angle formula, which completes its swing slightly sooner",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Péndulo",
    intro:
      "Ajusta la longitud del péndulo y qué tan lejos lo jalas antes de soltarlo, y observa qué tan poco de eso cambia en realidad el ritmo del vaivén — y dónde la fórmula del libro empieza a equivocarse.",
    length: "Longitud del péndulo",
    releaseAngle: "Ángulo de liberación",
    periodReadout: (v: string) => `periodo: ${v}s`,
    swingPlot: "El vaivén a lo largo del tiempo",
    swingPlain: "Qué tan lejos está la pesa de la vertical, segundo a segundo. Las dos líneas empiezan juntas y se separan conforme el vaivén se hace más amplio.",
    trueCurve: "Vaivén real, resuelto paso a paso",
    smallAngleCurve: "Fórmula del libro",
    truePeriodLabel: "Periodo (real)",
    textbookPeriodLabel: "Periodo (del libro)",
    gapLabel: "El libro se desvía",
    verification: (error: string, exact: string) =>
      `Resuelto paso a paso con Runge-Kutta y luego comprobado contra el periodo exacto escrito con una integral elíptica (${exact} s): los dos coinciden dentro de ${error}.`,
    assumptions:
      "Supone una masa puntual en una varilla rígida sin masa, sin resistencia del aire, y sin fricción en el pivote. Cada una de esas cosas alargaría un poco el periodo real.",
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "El periodo de un péndulo — el tiempo que tarda en completar un vaivén de ida y vuelta — depende de sorprendentemente poco. Ignorando la resistencia del aire, se reduce solo a la longitud del péndulo y la fuerza de la gravedad:",
    formula: "periodo = 2π × √(longitud ÷ gravedad)",
    mathP2:
      "Nota lo que falta en esa fórmula: la masa. Una pesa más pesada y una más ligera, soltadas desde la misma altura en la misma longitud de cuerda, oscilan exactamente al mismo ritmo — uno de los resultados más famosos y contraintuitivos de la mecánica clásica. La amplitud tampoco importa mucho, siempre que el vaivén se mantenga razonablemente pequeño: un vaivén más amplio recorre más distancia en cada ciclo, pero también se mueve más rápido, y los dos efectos casi se cancelan.",
    breakdownHeading: "Dónde esa fórmula deja de ser cierta",
    breakdownP1:
      "Casi se cancelan. Esa fórmula no es el periodo de un péndulo — es el periodo de un péndulo que oscila con un ángulo pequeño. Llegar a ella implica reemplazar sen θ por θ, algo bastante cierto cerca del fondo del vaivén y cada vez menos cierto conforme el vaivén se abre. Sube el ángulo de liberación a 45° y el péndulo real tarda alrededor de un 4% más por vaivén de lo que dice la fórmula.",
    breakdownP2:
      "Un cuatro por ciento suena a nada. Un reloj de péndulo que atrase un 4% pierde cerca de una hora al día, y por eso los péndulos de reloj se construyen para oscilar solo unos pocos grados — lo bastante pequeño como para que la aproximación sea casi exacta, y el reloj dé la hora.",
    mathP3:
      "Así que este simulador no usa esa fórmula para dibujar el vaivén. Resuelve la ecuación de la que salió la aproximación — la aceleración angular de la pesa es −(g/longitud) × sen(ángulo) — avanzando el ángulo y la velocidad un pequeño paso de tiempo a la vez con un método llamado Runge-Kutta de cuarto orden. La línea sólida es esa solución; la punteada es lo que predice la fórmula del libro. Las marcas verticales muestran dónde dice cada una que termina el primer vaivén completo.",
    mathP4:
      "Existe una respuesta exacta para el periodo, escrita con algo llamado integral elíptica, y el simulador también la calcula — no para dibujar nada, sino para comprobar contra ella la solución paso a paso. Esa comparación aparece impresa bajo el diagrama, y normalmente coinciden en menos de una milésima de por ciento. Comprobar una respuesta numérica contra una exacta, siempre que exista una exacta, es el hábito que hace confiables las respuestas numéricas en todo lo demás.",
    conceptLink: "Más sobre la energía como concepto →",
    diagramAriaLabel:
      "Un péndulo colgando de un pivote, jalado hasta su ángulo de liberación, con un arco punteado que muestra el camino por el que se balancea la pesa",
    plotAriaLabel:
      "Una gráfica del ángulo del péndulo a lo largo del tiempo, comparando la solución paso a paso con la fórmula de ángulo pequeño del libro, que termina su vaivén un poco antes",
  },
};
