export const beamSimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Beam Load & Deflection Simulator",
    introBefore: "Move the load along the beam, change how heavy it is, and adjust the beam's own stiffness — the same trade-offs behind the",
    challengeLink: "spaghetti bridge load test",
    introAfter: "and material strength challenges.",
    load: "Load",
    loadPosition: "Load position",
    stiffness: "Beam stiffness",
    holdingSteady: "Holding steady",
    bendingALot: "Bending a lot for its span",
    loadDiagram: "Load & deflected shape",
    shearDiagram: "Shear force (V)",
    shearPlain: "How hard the beam is being sliced at each point. It jumps by the size of the load, right where the load sits.",
    momentDiagram: "Bending moment (M)",
    momentPlain: "How hard the beam is being bent at each point. The peak is where it would break first.",
    reactionLeft: "Left support",
    reactionRight: "Right support",
    maxShearLabel: "Peak shear",
    maxMomentLabel: "Peak moment",
    maxDeflectionLabel: "Peak deflection",
    spanRatioLabel: "Span ÷ deflection",
    atPosition: (x: string) => `at ${x} m`,
    exaggerated: (times: number) => `Bend drawn ${times}× actual size`,
    verification: (moment: string, deflection: string) =>
      `Solved numerically, then checked against the exact formula for this case: the peak moment lands ${moment} away from it, the peak deflection ${deflection}.`,
    assumptions:
      "Assumes an Euler–Bernoulli beam, small deflections, an elastic material, one uniform cross-section, and no self-weight.",
    mathHeading: "The math behind it",
    mathP1Before: "A beam doesn't just hold a load — it bends slightly under it. How much depends on three things: how heavy the load is, where along the beam it sits, and how stiff the beam itself is. For a load centered on a simply supported beam, that relationship is:",
    formula: "max bending = (load × length³) ÷ (48 × stiffness)",
    mathP2:
      "\"Stiffness\" here combines two real properties engineers call EI: the material's own stiffness (steel resists bending far more than wood does, for the same shape) and the cross-section's shape (a beam standing on its tall edge resists bending much more than the same beam lying flat — which is exactly why I-beams and floor joists are built tall, not wide).",
    mathP3:
      "Moving the load also matters: a load near a support barely bends the beam at all, because the support is carrying it almost directly. A load in the middle of an unsupported span has the most beam to bend, so it produces the most deflection — the same reason a shelf sags most in the center, not near the brackets.",
    diagramsHeading: "Why two extra diagrams",
    diagramsP1:
      "Before an engineer works out how far a beam bends, they draw two other things first: the shear force and the bending moment along its length. Shear is how hard the beam is being sliced at each point — imagine trying to cut it there with scissors. Moment is how hard it's being bent. Those two diagrams are where a beam's problems show up: the peak moment tells you where it will break, and it's almost never where you'd guess just by looking.",
    diagramsP2:
      "Notice the shear diagram steps down sharply right where the load sits, and the moment diagram peaks at that same point. Slide the load toward a support and watch the peak moment drop — that's the whole reason a shelf bracket goes near the end of a shelf rather than in the middle of the span.",
    mathP4:
      "This simulator doesn't look the formula above up. It solves the beam the way an analysis tool does: the support reactions come from statics, the shear is the running total of the loads to the left of each point, and moment, slope and deflection are each built by integrating the one before it — then the far support's boundary condition pins the deflected shape down at the end. The formula is still worked out underneath, but only to check the numerical answer against an exact one. That comparison is the error figure printed under the diagrams, and it's there because a result you haven't checked isn't an answer yet.",
    mathP5:
      "The bend is drawn at an exaggerated scale, and the diagram says by how much. A real beam built to code bends far less than this relative to its length. Engineers judge that with the span-to-deflection ratio in the readouts — \"L over\" some number — and codes set limits on it that vary by country and by what the beam is holding up.",
    conceptLink: "More on stress and strain as concepts →",
    diagramAriaLabel: "A simply supported beam under a point load, showing the deflected shape and the upward reaction at each support",
    shearAriaLabel: "Shear force diagram along the beam, stepping down by the size of the load where the load sits",
    momentAriaLabel: "Bending moment diagram along the beam, peaking directly under the load",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Carga y Deflexión de Vigas",
    introBefore: "Mueve la carga a lo largo de la viga, cambia cuánto pesa, y ajusta la rigidez de la propia viga — los mismos compromisos detrás del",
    challengeLink: "desafío de la prueba de carga del puente de espagueti",
    introAfter: "y los desafíos de resistencia de materiales.",
    load: "Carga",
    loadPosition: "Posición de la carga",
    stiffness: "Rigidez de la viga",
    holdingSteady: "Aguantando firme",
    bendingALot: "Doblándose mucho para su longitud",
    loadDiagram: "Carga y forma deformada",
    shearDiagram: "Fuerza cortante (V)",
    shearPlain: "Con cuánta fuerza se está cortando la viga en cada punto. Da un salto del tamaño de la carga, justo donde está la carga.",
    momentDiagram: "Momento flector (M)",
    momentPlain: "Con cuánta fuerza se está doblando la viga en cada punto. El pico es donde se rompería primero.",
    reactionLeft: "Apoyo izquierdo",
    reactionRight: "Apoyo derecho",
    maxShearLabel: "Cortante máximo",
    maxMomentLabel: "Momento máximo",
    maxDeflectionLabel: "Deflexión máxima",
    spanRatioLabel: "Luz ÷ deflexión",
    atPosition: (x: string) => `en ${x} m`,
    exaggerated: (times: number) => `Flexión dibujada ${times}× su tamaño real`,
    verification: (moment: string, deflection: string) =>
      `Resuelto numéricamente y luego comprobado contra la fórmula exacta para este caso: el momento máximo se desvía ${moment}, y la deflexión máxima ${deflection}.`,
    assumptions:
      "Supone una viga de Euler–Bernoulli, deflexiones pequeñas, un material elástico, una sección transversal uniforme, y ningún peso propio.",
    mathHeading: "Las matemáticas detrás de esto",
    mathP1Before: "Una viga no solo sostiene una carga — se dobla un poco bajo ella. Cuánto depende de tres cosas: qué tan pesada es la carga, dónde se ubica a lo largo de la viga, y qué tan rígida es la viga misma. Para una carga centrada en una viga simplemente apoyada, esa relación es:",
    formula: "flexión máxima = (carga × longitud³) ÷ (48 × rigidez)",
    mathP2:
      "La \"rigidez\" aquí combina dos propiedades reales que los ingenieros llaman EI: la rigidez propia del material (el acero resiste doblarse mucho más que la madera, con la misma forma) y la forma de la sección transversal (una viga parada sobre su borde alto resiste doblarse mucho más que la misma viga acostada de lado — que es exactamente por qué las vigas en I y las vigas de piso se construyen altas, no anchas).",
    mathP3:
      "Mover la carga también importa: una carga cerca de un apoyo casi no dobla la viga, porque el apoyo la sostiene casi directamente. Una carga en medio de un tramo sin apoyo tiene más viga que doblar, así que produce la mayor deflexión — la misma razón por la que un estante se hunde más en el centro, no cerca de los soportes.",
    diagramsHeading: "Por qué dos diagramas más",
    diagramsP1:
      "Antes de calcular cuánto se dobla una viga, un ingeniero dibuja primero otras dos cosas: la fuerza cortante y el momento flector a lo largo de la viga. El cortante es con cuánta fuerza se está cortando la viga en cada punto — imagina intentar cortarla ahí con unas tijeras. El momento es con cuánta fuerza se está doblando. En esos dos diagramas es donde aparecen los problemas de una viga: el momento máximo te dice dónde se va a romper, y casi nunca es donde uno adivinaría solo mirándola.",
    diagramsP2:
      "Fíjate en que el diagrama de cortante da un escalón justo donde está la carga, y que el de momento alcanza su pico en ese mismo punto. Mueve la carga hacia un apoyo y observa cómo cae el momento máximo — esa es toda la razón por la que el soporte de un estante va cerca del extremo y no en medio del tramo.",
    mathP4:
      "Este simulador no consulta la fórmula de arriba. Resuelve la viga como lo haría una herramienta de análisis: las reacciones de los apoyos salen de la estática, el cortante es la suma acumulada de las cargas a la izquierda de cada punto, y el momento, la pendiente y la deflexión se construyen integrando el anterior — y al final la condición de borde del apoyo lejano fija la forma deformada. La fórmula se calcula igual por debajo, pero solo para comprobar la respuesta numérica contra una exacta. Esa comparación es la cifra de error impresa bajo los diagramas, y está ahí porque un resultado que no has comprobado todavía no es una respuesta.",
    mathP5:
      "La flexión se dibuja a una escala exagerada, y el diagrama indica cuánto. Una viga real construida según el código se dobla mucho menos que esto en relación con su longitud. Los ingenieros lo juzgan con la relación entre la luz y la deflexión que aparece en los datos — \"L entre\" algún número — y los códigos ponen límites que varían según el país y según lo que la viga sostenga.",
    conceptLink: "Más sobre el esfuerzo y la deformación como conceptos →",
    diagramAriaLabel: "Una viga simplemente apoyada bajo una carga puntual, mostrando la forma deformada y la reacción hacia arriba en cada apoyo",
    shearAriaLabel: "Diagrama de fuerza cortante a lo largo de la viga, con un escalón del tamaño de la carga donde está la carga",
    momentAriaLabel: "Diagrama de momento flector a lo largo de la viga, con su pico justo debajo de la carga",
  },
};
