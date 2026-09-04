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
    mathHeading: "The math behind it",
    mathP1Before: "A beam doesn't just hold a load — it bends slightly under it. How much depends on three things: how heavy the load is, where along the beam it sits, and how stiff the beam itself is. For a load centered on a simply supported beam, that relationship is:",
    formula: "max bending = (load × length³) ÷ (48 × stiffness)",
    mathP2:
      "\"Stiffness\" here combines two real properties engineers call EI: the material's own stiffness (steel resists bending far more than wood does, for the same shape) and the cross-section's shape (a beam standing on its tall edge resists bending much more than the same beam lying flat — which is exactly why I-beams and floor joists are built tall, not wide).",
    mathP3:
      "Moving the load also matters: a load near a support barely bends the beam at all, because the support is carrying it almost directly. A load in the middle of an unsupported span has the most beam to bend, so it produces the most deflection — the same reason a shelf sags most in the center, not near the brackets.",
    mathP4:
      "This simulator uses the standard formula for a simply supported beam under a single point load, and assumes the beam stays within its elastic range — it springs back afterward rather than staying bent or breaking. The deflection is also drawn at an exaggerated scale on purpose: a real beam built to code bends far less than this relative to its length. If it visibly sagged this much in real life, an engineer would call for a stiffer material or a deeper cross-section.",
    conceptLink: "More on stress and strain as concepts →",
    diagramAriaLabel: "A simply supported beam bending under a load, with the bend visibly increasing as the load grows or the beam gets less stiff",
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
    mathHeading: "Las matemáticas detrás de esto",
    mathP1Before: "Una viga no solo sostiene una carga — se dobla un poco bajo ella. Cuánto depende de tres cosas: qué tan pesada es la carga, dónde se ubica a lo largo de la viga, y qué tan rígida es la viga misma. Para una carga centrada en una viga simplemente apoyada, esa relación es:",
    formula: "flexión máxima = (carga × longitud³) ÷ (48 × rigidez)",
    mathP2:
      "La \"rigidez\" aquí combina dos propiedades reales que los ingenieros llaman EI: la rigidez propia del material (el acero resiste doblarse mucho más que la madera, con la misma forma) y la forma de la sección transversal (una viga parada sobre su borde alto resiste doblarse mucho más que la misma viga acostada de lado — que es exactamente por qué las vigas en I y las vigas de piso se construyen altas, no anchas).",
    mathP3:
      "Mover la carga también importa: una carga cerca de un apoyo casi no dobla la viga, porque el apoyo la sostiene casi directamente. Una carga en medio de un tramo sin apoyo tiene más viga que doblar, así que produce la mayor deflexión — la misma razón por la que un estante se hunde más en el centro, no cerca de los soportes.",
    mathP4:
      "Este simulador usa la fórmula estándar para una viga simplemente apoyada bajo una sola carga puntual, y asume que la viga se mantiene dentro de su rango elástico — vuelve a su forma después, en lugar de quedar doblada o romperse. La deflexión también se dibuja a una escala exagerada a propósito: una viga real construida según el código se dobla mucho menos que esto en relación con su longitud. Si se hundiera visiblemente así en la vida real, un ingeniero pediría un material más rígido o una sección transversal más alta.",
    conceptLink: "Más sobre el esfuerzo y la deformación como conceptos →",
    diagramAriaLabel: "Una viga simplemente apoyada doblándose bajo una carga, con la flexión aumentando visiblemente mientras la carga crece o la viga es menos rígida",
  },
};
