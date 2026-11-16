import type { SectionId, TrussLevelId } from "../trussLevels";
import type { MemberCheck, Tier } from "../../lib/trussGame";

type LevelText = { name: string; brief: string; hint: string; debrief: string };

export const trussGameTranslations = {
  en: {
    // ── Page ────────────────────────────────────────────────────────────
    badge: "Game",
    heading: "Bridge Builder",
    introBefore:
      "Design a steel truss, then load it and see what happens. Every member's force is worked out with the same method real structural software uses, so a bridge that fails here fails for a real reason. It's the computer version of the",
    challengeLink: "spaghetti bridge load test",
    introAfter: "— without the mess.",

    // ── Levels ──────────────────────────────────────────────────────────
    levelsLabel: "Levels",
    levelOf: (n: number, total: number) => `Level ${n} of ${total}`,
    levelPassed: "passed",
    levels: {
      "first-span": {
        name: "First span",
        brief:
          "A 4 m footbridge. One 60 kN load sits at the middle joint — roughly the weight of six tonnes. The left support is a pin. The right one is a roller, which holds the bridge up but can slide sideways.",
        hint: "Three joints joined in a triangle can't change shape. Try a peak above the middle joint. If it fails, look at which members are being squeezed and what you built them from.",
        debrief:
          "The two sloping members are squeezed and the bottom ones are pulled. A thin rod is strong when pulled but folds sideways when squeezed — that's buckling. A hollow tube keeps its steel further from the centre, so it resists buckling far better for its weight. Notice too that the bottom members can't be skipped: a roller can't push sideways, so something has to tie the feet of the triangle together.",
      },
      "road-bridge": {
        name: "Road bridge",
        brief:
          "8 m across, with 60 kN at each of the three deck joints. Every joint you use has to be locked in place by triangles, including the ones along the deck.",
        hint: "Run a second line of members above the deck, then connect the two lines with uprights and diagonals. Test it, then swap each member to the lightest type that still holds.",
        debrief:
          "The top line of members is squeezed and the bottom line is pulled, the same way the top and bottom of a bending beam are. Which way each diagonal leans decides whether it's pulled or squeezed — that one choice is the difference between the Pratt and Howe trusses on real railway bridges. Diagonals that are pulled can be thin rods.",
      },
      "clear-road": {
        name: "Keep the road clear",
        brief:
          "The same 8 m span with heavier traffic: 80 kN at each deck joint. Nothing may stick up above the road, so the structure has to hang underneath it.",
        hint: "Take your last bridge and flip it upside down. Before you test, guess which members will now be squeezed.",
        debrief:
          "Turning the truss upside down swaps the roles: the deck is now squeezed and the bottom line is pulled. The loads didn't change, only where the steel is. That's why engineers work out the forces first and choose the members second.",
      },
      cantilever: {
        name: "Overhang",
        brief:
          "A platform sticks 6 m out from a rock wall with 60 kN at its tip. The wall gives you three anchor points. There is no support at the far end.",
        hint: "You can hold the tip up from above with a member that's pulled, or prop it from below with one that's squeezed. One of those lets you use a thin rod. The joints along the deck still need bracing so the deck can't fold.",
        debrief:
          "Holding the tip from above puts the long member in tension, where a thin rod is enough. Propping it from below puts a long member in compression, where length is the enemy: double a member's length and its buckling limit drops to a quarter. You may also have members showing 0 kN. They carry nothing, but take one away and the structure folds. Bracing matters even when it looks idle.",
      },
      "long-span": {
        name: "Long span",
        brief:
          "12 m across with five loads of 50 kN. The longer the span, the harder the members near the middle have to work.",
        hint: "A shallow truss makes the top and bottom lines work very hard. A deeper one eases them but makes the diagonals and uprights longer, and long squeezed members buckle sooner. There's a trade-off to find.",
        debrief:
          "The force in the top and bottom lines grows quickly as a bridge gets longer and falls as the truss gets deeper, which is why long-span trusses are tall. But depth means longer members in between, and those buckle more easily. Real design is a search for the balance, usually by trying many options — which is what you just did.",
      },
    } satisfies Record<TrussLevelId, LevelText>,
    showHint: "Show a hint",
    hideHint: "Hide the hint",

    // ── Tools ───────────────────────────────────────────────────────────
    toolsLabel: "Build with",
    sections: {
      rod: "Solid rod",
      tube: "Tube",
      heavyTube: "Heavy tube",
    } satisfies Record<SectionId, string>,
    solidShape: (diameter: number) => `${diameter} mm solid bar`,
    tubeShape: (diameter: number, wall: number) => `${diameter} mm tube, ${wall} mm wall`,
    kgPerMetre: (kg: string) => `${kg} kg/m`,
    erase: "Remove",
    eraseDetail: "Click a member to delete it",
    undo: "Undo",
    clear: "Clear all",
    test: "Test bridge",
    testing: "Testing…",
    nextLevel: "Next level",
    loadReference: "Load the reference design",

    // ── Section data table ──────────────────────────────────────────────
    specHeading: "What each type can take",
    specType: "Type",
    specPull: "Pulled",
    specPush: (metres: string) => `Squeezed · ${metres} m`,
    specNote:
      "Pull limits don't depend on length. Squeeze limits do, because long members buckle. Steel: yield strength 250 MPa, stiffness 200,000 MPa, density 7,850 kg/m³.",

    // ── Status line ─────────────────────────────────────────────────────
    statusStart: "Click one joint, then another, to connect them with a member.",
    statusPickSecond: "Now pick the joint to connect it to. Click the same joint again to cancel.",
    statusErase: "Click a member to remove it.",
    statusReady: (members: number) => `${members} ${members === 1 ? "member" : "members"} placed. Press Test bridge when you're ready.`,
    statusEmpty: "There's nothing to test yet. Add some members first.",
    memberProblems: {
      "same-joint": "A member needs two different joints.",
      outside: "That joint is outside the building area.",
      "too-long": "Too long. A single member can reach at most three grid squares in each direction.",
      "through-joint": "That line passes straight through another joint. Build it as separate members, joint to joint.",
    } satisfies Record<Exclude<MemberCheck, "ok">, string>,
    statusApplying: (percent: number) => `Applying load… ${percent}%`,
    statusMechanism:
      "This isn't a structure yet. The ringed joints can move without stretching or squeezing any member, so there is nothing to hold the load. Add members until every joint is locked in by triangles.",
    statusFailed: (percent: number, member: number, how: string) => `Failed at ${percent}% of the load: member ${member} ${how}.`,
    failedBuckled: "buckled",
    failedYieldedTension: "was pulled past its yield strength",
    failedYieldedCompression: "was squeezed past its yield strength",
    statusHolds: (percent: number) => `It holds. The hardest-working member is at ${percent}% of its limit.`,

    // ── Results ─────────────────────────────────────────────────────────
    tiers: {
      stands: "Stands",
      efficient: "Efficient",
      reference: "Matches the reference",
    } satisfies Record<Tier, string>,
    tierBeatsReference: "Lighter than the reference",
    resultLabel: "Result",
    notPassed: "Not passed yet",
    massLabel: "Steel used",
    referenceLabel: "Reference design",
    efficientLabel: "Efficient at or under",
    bestLabel: "Your lightest pass",
    spareLabel: "Fails at",
    spareValue: (percent: number) => `${percent}% of the load`,
    spareNoForce: "No member is loaded",
    movementLabel: "Largest joint movement",
    balanceLabel: "Solver balance check",
    referenceNote:
      "The reference is a good design, not a proven-lightest one. If you pass with less steel, you've beaten it.",
    debriefHeading: "What just happened",
    membersHeading: "Member by member",
    membersNote: "Sorted from hardest-working to least. Numbers match the labels on the drawing.",
    colMember: "#",
    colType: "Type",
    colLength: "Length",
    colForce: "Force",
    colLimit: "Limit",
    colUsed: "Used",
    pulled: "pulled",
    squeezed: "squeezed",
    idle: "no force",
    limitBuckling: "buckling",
    limitYield: "yield",

    // ── Drawing ─────────────────────────────────────────────────────────
    legendTension: "Pulled (tension)",
    legendCompression: "Squeezed (compression)",
    legendFailed: "Failed",
    exaggerated: (times: number) => `Movement drawn ${times}× actual size`,
    canvasLabel: (level: string) => `Building grid for ${level}. Use Tab to move between joints and Enter to select one.`,
    jointLabel: (column: number, row: number) => `Joint at column ${column}, row ${row}`,
    jointPin: "pin support",
    jointRoller: "roller support",
    jointLoad: (kN: number) => `${kN} kN load`,
    jointSelected: "selected",
    memberLabel: (n: number, type: string, metres: string) => `Member ${n}: ${type}, ${metres} m`,
    storageNote: "Your designs and best results are saved in this browser only. Nothing is sent anywhere.",

    // ── Explanations under the game ─────────────────────────────────────
    howHeading: "How the test works",
    howP1:
      "When you press Test, the page solves your structure with the direct stiffness method, the approach real structural analysis software is built on. Each member is treated as a very stiff spring that can only push or pull along its own length. The solver finds where every joint has to move to so that the forces on it balance, then reads each member's force from how much it stretched or shortened.",
    howP2:
      "Each member is then checked. Pulled or squeezed, steel yields when the force divided by its cross-section area reaches the yield strength. Squeezed members get a second check, Euler's buckling formula:",
    formula: "buckling load = π² × E × I ÷ L²",
    howP3:
      "E is the steel's stiffness, I measures how far the cross-section's material sits from its centre, and L is the member's length. Strength isn't in the formula at all. A long thin member bows sideways long before the steel itself is in trouble, and doubling its length cuts its limit to a quarter. That's why the tubes do so much better than the rod when squeezed, and no better per kilogram when pulled.",
    howP4:
      "If some joints can move without stretching any member, there is nothing to solve. Engineers call that a mechanism, and the game rings the joints that are loose instead of pretending to have an answer.",
    limitsHeading: "What this game leaves out",
    limitsIntro: "It's a real calculation, but a simplified bridge. Things a structural engineer would not be allowed to ignore:",
    limits: [
      "There is no safety margin. Here a member at 99% of its limit passes. Real design codes require a healthy margin, and they treat buckling more cautiously than Euler's formula does, because real members are never perfectly straight.",
      "The bridge's own weight is ignored. On a real bridge the structure has to carry itself as well as the traffic, and on long spans that can be the bigger job.",
      "Every joint is a perfect pin. Real connections are bolted or welded, and each one has to be designed too.",
      "The loads sit still. Real traffic moves and repeats millions of times, and wind and temperature push on the structure as well. Repeated loading can crack steel at forces well below what would break it once — that's called fatigue.",
      "Sag isn't checked. Real bridges have limits on how far they may deflect, not only on whether they break.",
      "Lightest isn't the same as cheapest. The game scores steel by weight. A real project also pays for fabrication, transport, labour and maintenance, and a slightly heavier design that is simpler to build can be the better one.",
      "Only the first failure is shown. Some real structures can pass load to other members after one fails and others can't. The game stops at the first member to give way.",
    ],
    relatedHeading: "Where to go from here",
    relatedBeam: "Beam Load & Deflection simulator →",
    relatedConcept: "Structures as a concept →",
    relatedStructural: "What structural engineers actually do →",
    relatedCivil: "Civil engineering →",
  },
  es: {
    // ── Página ──────────────────────────────────────────────────────────
    badge: "Juego",
    heading: "Constructor de Puentes",
    introBefore:
      "Diseña una armadura de acero, luego cárgala y mira qué pasa. La fuerza en cada barra se calcula con el mismo método que usa el software estructural real, así que un puente que falla aquí falla por una razón real. Es la versión en computadora de la",
    challengeLink: "prueba de carga del puente de espagueti",
    introAfter: "— pero sin el desorden.",

    // ── Niveles ─────────────────────────────────────────────────────────
    levelsLabel: "Niveles",
    levelOf: (n: number, total: number) => `Nivel ${n} de ${total}`,
    levelPassed: "superado",
    levels: {
      "first-span": {
        name: "Primer tramo",
        brief:
          "Un puente peatonal de 4 m. Una carga de 60 kN está en el nudo del centro — más o menos el peso de seis toneladas. El apoyo izquierdo es fijo. El derecho es un rodillo, que sostiene el puente pero puede deslizarse hacia los lados.",
        hint: "Tres nudos unidos en un triángulo no pueden cambiar de forma. Prueba con un pico sobre el nudo central. Si falla, fíjate en qué barras están siendo comprimidas y de qué las hiciste.",
        debrief:
          "Las dos barras inclinadas están comprimidas y las de abajo están estiradas. Una varilla delgada es fuerte cuando la jalan, pero se dobla hacia un lado cuando la aprietan — eso es el pandeo. Un tubo hueco tiene su acero más lejos del centro, así que resiste el pandeo mucho mejor para su peso. Nota también que las barras de abajo no se pueden quitar: un rodillo no puede empujar hacia los lados, así que algo tiene que amarrar los pies del triángulo.",
      },
      "road-bridge": {
        name: "Puente carretero",
        brief:
          "8 m de largo, con 60 kN en cada uno de los tres nudos del tablero. Cada nudo que uses tiene que quedar fijado por triángulos, incluidos los del tablero.",
        hint: "Pon una segunda línea de barras arriba del tablero y luego une las dos líneas con barras verticales y diagonales. Pruébalo y después cambia cada barra al tipo más ligero que todavía aguante.",
        debrief:
          "La línea de barras de arriba está comprimida y la de abajo está estirada, igual que la parte de arriba y la de abajo de una viga que se dobla. Hacia dónde se inclina cada diagonal decide si queda estirada o comprimida — esa sola decisión es la diferencia entre las armaduras Pratt y Howe de los puentes ferroviarios reales. Las diagonales estiradas pueden ser varillas delgadas.",
      },
      "clear-road": {
        name: "Deja libre el camino",
        brief:
          "El mismo tramo de 8 m con tráfico más pesado: 80 kN en cada nudo del tablero. Nada puede sobresalir por encima del camino, así que la estructura tiene que colgar por debajo.",
        hint: "Toma tu puente anterior y voltéalo de cabeza. Antes de probarlo, adivina qué barras quedarán ahora comprimidas.",
        debrief:
          "Voltear la armadura intercambia los papeles: ahora el tablero está comprimido y la línea de abajo está estirada. Las cargas no cambiaron, solo dónde está el acero. Por eso los ingenieros calculan primero las fuerzas y eligen las barras después.",
      },
      cantilever: {
        name: "Voladizo",
        brief:
          "Una plataforma sale 6 m de una pared de roca con 60 kN en la punta. La pared te da tres puntos de anclaje. No hay apoyo en el otro extremo.",
        hint: "Puedes sostener la punta desde arriba con una barra estirada, o apuntalarla desde abajo con una comprimida. Una de las dos te deja usar una varilla delgada. Los nudos del tablero también necesitan arriostrarse para que el tablero no se doble.",
        debrief:
          "Sostener la punta desde arriba pone la barra larga en tensión, donde una varilla delgada es suficiente. Apuntalarla desde abajo pone una barra larga en compresión, donde la longitud es el enemigo: duplica la longitud de una barra y su límite de pandeo cae a la cuarta parte. Quizá también tengas barras que marcan 0 kN. No cargan nada, pero quita una y la estructura se dobla. El arriostramiento importa aunque parezca que no hace nada.",
      },
      "long-span": {
        name: "Tramo largo",
        brief:
          "12 m de largo con cinco cargas de 50 kN. Mientras más largo es el tramo, más tienen que trabajar las barras cerca del centro.",
        hint: "Una armadura baja hace trabajar muchísimo a las líneas de arriba y de abajo. Una más alta las alivia, pero alarga las diagonales y las verticales, y las barras largas comprimidas se pandean antes. Hay un equilibrio que encontrar.",
        debrief:
          "La fuerza en las líneas de arriba y de abajo crece rápido cuando el puente se alarga y baja cuando la armadura se hace más alta; por eso las armaduras de tramos largos son altas. Pero más altura significa barras intermedias más largas, y esas se pandean con más facilidad. El diseño real es una búsqueda de ese equilibrio, normalmente probando muchas opciones — que es justo lo que acabas de hacer.",
      },
    } satisfies Record<TrussLevelId, LevelText>,
    showHint: "Mostrar una pista",
    hideHint: "Ocultar la pista",

    // ── Herramientas ────────────────────────────────────────────────────
    toolsLabel: "Construir con",
    sections: {
      rod: "Varilla sólida",
      tube: "Tubo",
      heavyTube: "Tubo pesado",
    } satisfies Record<SectionId, string>,
    solidShape: (diameter: number) => `barra sólida de ${diameter} mm`,
    tubeShape: (diameter: number, wall: number) => `tubo de ${diameter} mm, pared de ${wall} mm`,
    kgPerMetre: (kg: string) => `${kg} kg/m`,
    erase: "Quitar",
    eraseDetail: "Haz clic en una barra para borrarla",
    undo: "Deshacer",
    clear: "Borrar todo",
    test: "Probar puente",
    testing: "Probando…",
    nextLevel: "Siguiente nivel",
    loadReference: "Cargar el diseño de referencia",

    // ── Tabla de secciones ──────────────────────────────────────────────
    specHeading: "Cuánto aguanta cada tipo",
    specType: "Tipo",
    specPull: "Estirada",
    specPush: (metres: string) => `Comprimida · ${metres} m`,
    specNote:
      "Los límites al estirar no dependen de la longitud. Los límites al comprimir sí, porque las barras largas se pandean. Acero: límite elástico de 250 MPa, rigidez de 200,000 MPa, densidad de 7,850 kg/m³.",

    // ── Línea de estado ─────────────────────────────────────────────────
    statusStart: "Haz clic en un nudo y luego en otro para unirlos con una barra.",
    statusPickSecond: "Ahora elige el nudo con el que lo vas a unir. Haz clic otra vez en el mismo nudo para cancelar.",
    statusErase: "Haz clic en una barra para quitarla.",
    statusReady: (members: number) => `${members} ${members === 1 ? "barra colocada" : "barras colocadas"}. Presiona Probar puente cuando estés listo.`,
    statusEmpty: "Todavía no hay nada que probar. Agrega algunas barras primero.",
    memberProblems: {
      "same-joint": "Una barra necesita dos nudos distintos.",
      outside: "Ese nudo está fuera del área de construcción.",
      "too-long": "Demasiado larga. Una sola barra puede alcanzar como máximo tres cuadros de la cuadrícula en cada dirección.",
      "through-joint": "Esa línea pasa justo por encima de otro nudo. Constrúyela como barras separadas, de nudo a nudo.",
    } satisfies Record<Exclude<MemberCheck, "ok">, string>,
    statusApplying: (percent: number) => `Aplicando la carga… ${percent}%`,
    statusMechanism:
      "Esto todavía no es una estructura. Los nudos marcados con un anillo pueden moverse sin estirar ni comprimir ninguna barra, así que no hay nada que sostenga la carga. Agrega barras hasta que todos los nudos queden fijados por triángulos.",
    statusFailed: (percent: number, member: number, how: string) => `Falló al ${percent}% de la carga: la barra ${member} ${how}.`,
    failedBuckled: "se pandeó",
    failedYieldedTension: "fue estirada más allá de su límite elástico",
    failedYieldedCompression: "fue comprimida más allá de su límite elástico",
    statusHolds: (percent: number) => `Aguanta. La barra que más trabaja está al ${percent}% de su límite.`,

    // ── Resultados ──────────────────────────────────────────────────────
    tiers: {
      stands: "Se sostiene",
      efficient: "Eficiente",
      reference: "Iguala la referencia",
    } satisfies Record<Tier, string>,
    tierBeatsReference: "Más ligero que la referencia",
    resultLabel: "Resultado",
    notPassed: "Aún sin superar",
    massLabel: "Acero usado",
    referenceLabel: "Diseño de referencia",
    efficientLabel: "Eficiente con máximo",
    bestLabel: "Tu mejor diseño",
    spareLabel: "Falla al",
    spareValue: (percent: number) => `${percent}% de la carga`,
    spareNoForce: "Ninguna barra tiene carga",
    movementLabel: "Mayor movimiento de un nudo",
    balanceLabel: "Comprobación de equilibrio",
    referenceNote:
      "La referencia es un buen diseño, no uno demostrado como el más ligero posible. Si pasas con menos acero, la superaste.",
    debriefHeading: "Lo que acaba de pasar",
    membersHeading: "Barra por barra",
    membersNote: "Ordenadas de la que más trabaja a la que menos. Los números coinciden con las etiquetas del dibujo.",
    colMember: "#",
    colType: "Tipo",
    colLength: "Longitud",
    colForce: "Fuerza",
    colLimit: "Límite",
    colUsed: "Usado",
    pulled: "estirada",
    squeezed: "comprimida",
    idle: "sin fuerza",
    limitBuckling: "pandeo",
    limitYield: "fluencia",

    // ── Dibujo ──────────────────────────────────────────────────────────
    legendTension: "Estirada (tensión)",
    legendCompression: "Comprimida (compresión)",
    legendFailed: "Falló",
    exaggerated: (times: number) => `Movimiento dibujado ${times}× su tamaño real`,
    canvasLabel: (level: string) => `Cuadrícula de construcción para ${level}. Usa Tab para moverte entre nudos y Enter para seleccionar uno.`,
    jointLabel: (column: number, row: number) => `Nudo en la columna ${column}, fila ${row}`,
    jointPin: "apoyo fijo",
    jointRoller: "apoyo de rodillo",
    jointLoad: (kN: number) => `carga de ${kN} kN`,
    jointSelected: "seleccionado",
    memberLabel: (n: number, type: string, metres: string) => `Barra ${n}: ${type}, ${metres} m`,
    storageNote: "Tus diseños y mejores resultados se guardan solo en este navegador. No se envía nada a ningún lado.",

    // ── Explicaciones debajo del juego ──────────────────────────────────
    howHeading: "Cómo funciona la prueba",
    howP1:
      "Cuando presionas Probar, la página resuelve tu estructura con el método directo de rigidez, el enfoque sobre el que está construido el software real de análisis estructural. Cada barra se trata como un resorte muy rígido que solo puede empujar o jalar a lo largo de su propia longitud. El programa encuentra a dónde tiene que moverse cada nudo para que las fuerzas sobre él queden en equilibrio, y luego obtiene la fuerza de cada barra a partir de cuánto se estiró o se acortó.",
    howP2:
      "Después se revisa cada barra. Estirado o comprimido, el acero fluye cuando la fuerza dividida entre el área de su sección transversal alcanza el límite elástico. Las barras comprimidas reciben una segunda revisión, la fórmula de pandeo de Euler:",
    formula: "carga de pandeo = π² × E × I ÷ L²",
    howP3:
      "E es la rigidez del acero, I mide qué tan lejos del centro está el material de la sección transversal, y L es la longitud de la barra. La resistencia ni siquiera aparece en la fórmula. Una barra larga y delgada se arquea hacia un lado mucho antes de que el acero mismo esté en problemas, y duplicar su longitud reduce su límite a la cuarta parte. Por eso a los tubos les va mucho mejor que a la varilla cuando se comprimen, y no les va mejor por kilogramo cuando se estiran.",
    howP4:
      "Si algunos nudos pueden moverse sin estirar ninguna barra, no hay nada que resolver. Los ingenieros llaman a eso un mecanismo, y el juego marca con un anillo los nudos sueltos en lugar de fingir que tiene una respuesta.",
    limitsHeading: "Lo que este juego deja fuera",
    limitsIntro: "Es un cálculo real, pero un puente simplificado. Cosas que a un ingeniero estructural no se le permitiría ignorar:",
    limits: [
      "No hay margen de seguridad. Aquí una barra al 99% de su límite pasa. Los códigos de diseño reales exigen un buen margen y tratan el pandeo con más cautela que la fórmula de Euler, porque las barras reales nunca son perfectamente rectas.",
      "Se ignora el peso propio del puente. En un puente real la estructura tiene que cargarse a sí misma además del tráfico, y en tramos largos esa puede ser la tarea más grande.",
      "Cada nudo es una articulación perfecta. Las conexiones reales van atornilladas o soldadas, y cada una también tiene que diseñarse.",
      "Las cargas están quietas. El tráfico real se mueve y se repite millones de veces, y el viento y la temperatura también empujan la estructura. La carga repetida puede agrietar el acero con fuerzas muy por debajo de la que lo rompería una sola vez — a eso se le llama fatiga.",
      "No se revisa cuánto se cuelga. Los puentes reales tienen límites sobre cuánto pueden deformarse, no solo sobre si se rompen.",
      "Lo más ligero no es lo mismo que lo más barato. El juego califica el acero por peso. Un proyecto real también paga fabricación, transporte, mano de obra y mantenimiento, y un diseño un poco más pesado pero más sencillo de construir puede ser el mejor.",
      "Solo se muestra la primera falla. Algunas estructuras reales pueden pasar la carga a otras barras después de que una falla, y otras no. El juego se detiene en la primera barra que cede.",
    ],
    relatedHeading: "A dónde ir después",
    relatedBeam: "Simulador de Carga y Deflexión de Vigas →",
    relatedConcept: "Las estructuras como concepto →",
    relatedStructural: "Lo que realmente hacen los ingenieros estructurales →",
    relatedCivil: "Ingeniería civil →",
  },
};
