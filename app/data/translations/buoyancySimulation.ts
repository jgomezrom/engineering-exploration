export const buoyancySimulationTranslations = {
  en: {
    badge: "Simulation",
    heading: "Buoyancy & Density Simulator",
    intro:
      "Adjust an object's density relative to water, and switch between a solid block and a hollow hull, to see what actually decides whether something floats — and it isn't just \"heavy things sink.\"",
    density: "Density (× water)",
    shape: "Shape",
    solidBlock: "Solid block",
    hollowHull: "Hollow hull",
    floating: (pct: number) => `Floating — ${pct}% submerged`,
    sinking: "Sinking",
    mathHeading: "The math behind it",
    mathP1:
      "An object floating in a fluid pushes fluid out of the way, and that displaced fluid pushes back — that upward push is called buoyant force. Whether something floats comes down to comparing two densities:",
    formula: "floats when: density(object) < density(fluid)",
    mathP2:
      "A floating object settles until the fraction of it underwater matches the ratio between the two densities — an object exactly half as dense as water floats with exactly half of itself submerged, regardless of its size.",
    mathP3:
      "This also answers a genuinely confusing question: steel is roughly 7.8 times denser than water, so how does a steel ship float? \"Density\" has to account for the whole object, not just the material it's made of. A ship's hull is mostly hollow — it encloses a huge volume of air — so its average density (steel plus all that enclosed air) ends up far below water's, even though the steel itself would sink instantly on its own. Try switching to \"hollow hull\" above at a high density to see the same material float once it's shaped to enclose air instead of being solid.",
    mathP4:
      "This simulator treats a hollow hull's material as a fixed 6% of its total enclosed volume — a reasonable approximation for how thin a real ship's hull is relative to its cargo holds, not a measured figure. It also ignores wave action and cargo weight, and doesn't model flooding — which is exactly why a damaged hull can sink even though an intact one of the same shape floats fine.",
    conceptLink: "More on forces as a concept →",
    diagramAriaLabel: "An object in water, floating at a depth determined by its density relative to water, or sinking if denser than water",
  },
  es: {
    badge: "Simulación",
    heading: "Simulador de Flotabilidad y Densidad",
    intro:
      "Ajusta la densidad de un objeto en relación con el agua, y cambia entre un bloque sólido y un casco hueco, para ver qué es lo que realmente decide si algo flota — y no es solo \"lo pesado se hunde\".",
    density: "Densidad (× agua)",
    shape: "Forma",
    solidBlock: "Bloque sólido",
    hollowHull: "Casco hueco",
    floating: (pct: number) => `Flotando — ${pct}% sumergido`,
    sinking: "Hundiéndose",
    mathHeading: "Las matemáticas detrás de esto",
    mathP1:
      "Un objeto que flota en un fluido empuja el fluido fuera de su camino, y ese fluido desplazado empuja de vuelta — ese empuje hacia arriba se llama fuerza de flotación. Si algo flota o no se reduce a comparar dos densidades:",
    formula: "flota cuando: densidad(objeto) < densidad(fluido)",
    mathP2:
      "Un objeto que flota se asienta hasta que la fracción de él bajo el agua coincide con la razón entre las dos densidades — un objeto con exactamente la mitad de la densidad del agua flota con exactamente la mitad de sí mismo sumergido, sin importar su tamaño.",
    mathP3:
      "Esto también responde una pregunta genuinamente confusa: el acero es aproximadamente 7.8 veces más denso que el agua, entonces ¿cómo flota un barco de acero? La \"densidad\" tiene que tomar en cuenta todo el objeto, no solo el material del que está hecho. El casco de un barco es mayormente hueco — encierra un enorme volumen de aire — así que su densidad promedio (el acero más todo ese aire encerrado) termina muy por debajo de la del agua, aunque el acero mismo se hundiría al instante por su cuenta. Prueba cambiar a \"casco hueco\" arriba con una densidad alta para ver flotar el mismo material una vez que tiene la forma para encerrar aire en lugar de ser sólido.",
    mathP4:
      "Este simulador trata el material de un casco hueco como un 6% fijo de su volumen total encerrado — una aproximación razonable de qué tan delgado es el casco de un barco real en relación con sus bodegas de carga, no una cifra medida. También ignora el oleaje y el peso de la carga, y no modela inundaciones — que es exactamente por qué un casco dañado puede hundirse aunque uno intacto de la misma forma flote sin problema.",
    conceptLink: "Más sobre las fuerzas como concepto →",
    diagramAriaLabel: "Un objeto en el agua, flotando a una profundidad determinada por su densidad relativa al agua, o hundiéndose si es más denso que el agua",
  },
};
