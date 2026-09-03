import { Concept } from "./types";

// Spanish translation of all 14 concepts — small and complete, so unlike
// fields.es.ts there's no partial/fallback case to handle here. `category`
// keeps its English literal value since it's a typed key used for grouping
// (see CATEGORY_LABELS in translations/concepts.ts for the display text).
export const conceptsEs: Concept[] = [
  {
    slug: "forces",
    name: "Fuerzas",
    category: "Mechanical",
    shortDefinition: "Un empujón o jalón sobre un objeto.",
    explanation:
      "Una fuerza es cualquier empujón o jalón que puede cambiar el movimiento de un objeto — acelerándolo, frenándolo, o cambiando su dirección. Las fuerzas son la razón por la que un objeto quieto se queda quieto (las fuerzas sobre él están equilibradas) y por la que un objeto en movimiento eventualmente se detiene o cambia de rumbo (una fuerza desequilibrada actuó sobre él). Casi todos los demás conceptos de esta página — torque, fricción, estrés, estructuras — son en realidad solo un tipo específico de fuerza o una forma específica en que las fuerzas interactúan.",
    realWorldExample:
      "Empujar un carrito de compras, la gravedad jalándote hacia abajo, o el motor de un cohete empujando una nave espacial hacia adelante son todas fuerzas en acción.",
    relatedFields: ["mechanical-engineering", "civil-engineering", "aerospace-engineering"],
  },
  {
    slug: "torque",
    name: "Torque",
    category: "Mechanical",
    shortDefinition: "Una fuerza de torsión o rotación, aplicada a una distancia de un punto de apoyo.",
    explanation:
      "El torque es lo que hace que algo rote en lugar de solo moverse en línea recta. Depende tanto de cuánta fuerza aplicas como de qué tan lejos del punto de apoyo la aplicas — por eso una llave más larga hace que sea más fácil aflojar un tornillo apretado: la misma cantidad de fuerza, aplicada más lejos del punto de apoyo, crea más torque.",
    realWorldExample:
      "Girar una llave, pedalear una bicicleta, o el brazo de una catapulta girando alrededor de su punto de apoyo, todos involucran torque.",
    relatedFields: ["mechanical-engineering", "robotics-engineering"],
  },
  {
    slug: "friction",
    name: "Fricción",
    category: "Mechanical",
    shortDefinition: "La resistencia que ocurre cuando dos superficies se deslizan o intentan deslizarse una contra la otra.",
    explanation:
      "La fricción es una fuerza que se opone al movimiento entre dos superficies en contacto. Es la razón por la que una pelota rodando por el piso eventualmente se detiene, y por la que tus zapatos se agarran al suelo en lugar de resbalar debajo de ti. A veces los ingenieros quieren minimizar la fricción, como en un motor, para reducir la energía desperdiciada, y a veces quieren maximizarla, como en los frenos o las llantas, donde el agarre importa.",
    realWorldExample:
      "Frotarte las manos para calentarlas, las pastillas de freno de un auto agarrando la rueda, o un disco de hockey deslizándose casi sin fricción sobre el hielo.",
    relatedFields: ["mechanical-engineering"],
  },
  {
    slug: "energy",
    name: "Energía",
    category: "Mechanical",
    shortDefinition:
      "La capacidad de realizar trabajo o causar un cambio — se puede almacenar, transferir, o convertir, pero nunca crear ni destruir.",
    explanation:
      "La energía viene en muchas formas — movimiento (cinética), posición (potencial), calor, eléctrica, química — y la ingeniería a menudo se trata de convertir energía de una forma a otra útil, o almacenarla para después. Una liga estirada almacena energía potencial; al soltarla, esa energía se convierte en la energía cinética de un objeto lanzado. La regla central en la que confían los ingenieros es que la energía se conserva: cambia de forma, pero la cantidad total no aparece ni desaparece de la nada.",
    realWorldExample: "Una liga estirada lanzando una catapulta, una batería alimentando un circuito, o una represa convirtiendo agua que cae en electricidad.",
    relatedFields: ["mechanical-engineering", "electrical-engineering", "chemical-engineering"],
  },
  {
    slug: "gears",
    name: "Engranajes",
    category: "Mechanical",
    shortDefinition: "Ruedas dentadas que transmiten movimiento rotacional y fuerza entre partes conectadas.",
    explanation:
      "Los engranajes transfieren rotación de una parte de una máquina a otra, y dependiendo de sus tamaños relativos, pueden intercambiar velocidad por torque, o al revés. Un engranaje pequeño impulsando uno más grande hace que el más grande gire más lento pero con más fuerza — la misma compensación básica que una palanca.",
    realWorldExample:
      "Los engranajes de una bicicleta te dejan intercambiar esfuerzo de pedaleo por velocidad; los engranajes internos de un reloj convierten una rotación constante en las diferentes velocidades de las manecillas de segundos, minutos, y horas.",
    relatedFields: ["mechanical-engineering", "robotics-engineering"],
  },
  {
    slug: "circuits",
    name: "Circuitos",
    category: "Electrical",
    shortDefinition: "Un lazo cerrado por el que puede fluir la electricidad, hecho de una fuente de poder y componentes conectados.",
    explanation:
      "Un circuito es cualquier camino completo que permite que la corriente eléctrica fluya desde una fuente de poder, a través de componentes como resistores o LEDs, y de vuelta a la fuente. Si el lazo se rompe en algún punto, la corriente deja de fluir — que es exactamente cómo funciona un interruptor.",
    realWorldExample:
      "El cableado dentro de una linterna, un cargador de teléfono, o el circuito de protoboard del desafío del LED de este sitio son todos circuitos.",
    relatedFields: ["electrical-engineering", "computer-engineering", "robotics-engineering"],
  },
  {
    slug: "voltage",
    name: "Voltaje",
    category: "Electrical",
    shortDefinition: 'El "empuje" eléctrico que impulsa la corriente a través de un circuito.',
    explanation:
      'El voltaje es la diferencia de potencial eléctrico entre dos puntos, y es lo que empuja la corriente a través de un circuito — parecido a cómo la presión del agua empuja el agua a través de una tubería. Un voltaje más alto significa un empuje más fuerte, aunque cuánta corriente realmente fluye también depende de la resistencia del circuito.',
    realWorldExample:
      'Una batería de 9V tiene un "empuje" más fuerte que una sola pila AA de 1.5V, que es por eso que los circuitos a menudo se construyen pensando en requisitos de voltaje específicos.',
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "current",
    name: "Corriente",
    category: "Electrical",
    shortDefinition: "El flujo real de carga eléctrica a través de un circuito, medido en amperios.",
    explanation:
      'La corriente es la velocidad a la que la carga eléctrica fluye por un punto de un circuito — si el voltaje es el "empuje", la corriente es el flujo real que resulta. Demasiada corriente a través de un componente como un LED puede dañarlo, que es exactamente por qué se usa un resistor limitador de corriente.',
    realWorldExample:
      "La corriente que fluye a través de un circuito de LED es lo que realmente lo enciende — y por qué un LED necesita un resistor para mantener esa corriente en un nivel seguro.",
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "resistance",
    name: "Resistencia",
    category: "Electrical",
    shortDefinition: "Cuánto se opone un material o componente al flujo de corriente eléctrica.",
    explanation:
      "La resistencia frena el flujo de corriente a través de un circuito, y diferentes materiales y componentes tienen diferentes cantidades de ella. Los ingenieros usan resistores deliberadamente para controlar cuánta corriente llega a una parte específica de un circuito — muy poca resistencia, y un componente como un LED puede dañarse por exceso de corriente.",
    realWorldExample: "El resistor en el desafío del circuito de LED de este sitio existe específicamente para limitar la corriente a un nivel seguro para el LED.",
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "stress-strain",
    name: "Estrés y Deformación",
    category: "Structures & Materials",
    shortDefinition: "El estrés es la fuerza interna que experimenta un material por unidad de área; la deformación es cuánto se deforma en respuesta.",
    explanation:
      "Cuando se aplica una carga a una estructura, el material dentro de ella experimenta estrés (fuerza distribuida a través de su sección transversal) y responde con deformación (cuánto se estira, se comprime, o se dobla). Todo material puede soportar cierta cantidad de estrés antes de deformarse permanentemente o romperse — que es exactamente lo que se está probando cuando se carga una estructura hasta que falle.",
    realWorldExample:
      "Cargar peso sobre un puente de espagueti hasta que se dobla (deformación) y eventualmente se rompe (falla) es una demostración directa y práctica de estrés y deformación.",
    relatedFields: ["civil-engineering", "mechanical-engineering", "materials-engineering"],
  },
  {
    slug: "structures",
    name: "Estructuras",
    category: "Structures & Materials",
    shortDefinition: "El armazón portante que le da forma a un edificio, puente, o máquina, y lo mantiene en pie.",
    explanation:
      "El trabajo de una estructura es cargar peso — el suyo propio, las personas y cosas dentro o sobre ella, y fuerzas externas como el viento o los terremotos — de forma segura hasta el suelo o sus soportes. Cómo está formada una estructura importa enormemente: las formas triangulares (armaduras) resisten colapsar de una manera que los cuadrados no, que es por eso que gran parte de la ingeniería estructural se reduce a organizar materiales en triángulos.",
    realWorldExample:
      "El armazón de armadura de un puente, el esqueleto de acero de un edificio, o los soportes triangulares de un puente de espagueti son todas estructuras en acción.",
    relatedFields: ["civil-engineering", "aerospace-engineering"],
  },
  {
    slug: "materials",
    name: "Materiales",
    category: "Structures & Materials",
    shortDefinition: "Las sustancias de las que realmente está hecho un diseño, cada una con diferente resistencia, peso, y comportamiento bajo estrés.",
    explanation:
      "Ningún diseño funciona igual en todos los materiales — una forma que es resistente en acero podría fallar en plástico, y un material que es excelente bajo compresión, como el concreto, podría ser débil bajo tensión. Elegir el material correcto para el trabajo, y entender cómo se comporta en condiciones reales, es toda su propia disciplina de ingeniería.",
    realWorldExample:
      "Los aviones usan aleaciones ligeras porque el peso importa enormemente para volar, mientras que los puentes a menudo usan acero y concreto porque necesitan ser resistentes bajo tipos de carga muy diferentes.",
    relatedFields: ["materials-engineering", "aerospace-engineering", "mechanical-engineering"],
  },
  {
    slug: "algorithms",
    name: "Algoritmos",
    category: "Software & Systems",
    shortDefinition: "Un conjunto preciso y paso a paso de instrucciones para resolver un problema o completar una tarea.",
    explanation:
      "Un algoritmo es simplemente una secuencia clara y sin ambigüedades de pasos — una receta, en cierto sentido — que una computadora, o una persona, puede seguir para obtener un resultado confiable. Los buenos algoritmos no solo son correctos, también son eficientes: dos algoritmos pueden resolver el mismo problema, pero uno podría hacerlo mucho más rápido o usar mucha menos memoria que el otro.",
    realWorldExample: "Los pasos que usa una aplicación de mapas para encontrar la ruta más rápida, o la lógica que ordena tus fotos por fecha, son ambos algoritmos.",
    relatedFields: ["software-engineering", "computer-engineering"],
  },
  {
    slug: "control-systems",
    name: "Sistemas de Control",
    category: "Software & Systems",
    shortDefinition: "Un sistema que ajusta automáticamente su propio comportamiento con base en retroalimentación, para alcanzar o mantener un estado objetivo.",
    explanation:
      "Un sistema de control mide continuamente su propia salida, la compara con un objetivo, y se ajusta para cerrar la brecha — un ciclo llamado retroalimentación. Esto es lo que le permite a un termostato mantener una habitación a una temperatura constante, o a un brazo robótico asentarse con precisión en una posición objetivo en lugar de pasarse y oscilar para siempre.",
    realWorldExample:
      "Un termostato encendiendo y apagando la calefacción para mantener una temperatura objetivo, o el control de crucero ajustando el acelerador de un auto para mantener una velocidad fija, son ambos sistemas de control.",
    relatedFields: ["electrical-engineering", "robotics-engineering", "computer-engineering"],
  },
];
