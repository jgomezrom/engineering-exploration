import { QuizQuestion } from "./types";

// Spanish translation of all 28 quiz questions — same shape and identical
// `points`/`themes` scoring data as quiz.ts (those aren't display text, so
// they aren't re-translated); only `prompt` and each option's `text` differ.
export const quizQuestionsEs: QuizQuestion[] = [
  {
    id: "free-weekend",
    prompt: "Tienes un fin de semana libre sin nada planeado. ¿Cuál de estas opciones te suena más atractiva?",
    options: [
      { text: "Desarmar algo mecánico para ver cómo funciona", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Construir una pequeña aplicación o script solo para ver si puedo", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["coding-software"] },
      { text: "Ver un documental sobre cómo se construyó un puente o un rascacielos", points: { "civil-engineering": 2, "environmental-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "Leer sobre un nuevo dispositivo médico o avance en salud", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
    ],
  },
  {
    id: "how-does-that-work",
    prompt: "¿Cuál de estas es más probable que te haga detenerte y pensar 'espera, cómo funciona esto realmente?'",
    options: [
      { text: "El cableado y los circuitos dentro de un cargador de teléfono", points: { "electrical-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["electronics"] },
      { text: "El sistema de suspensión de un auto", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Cómo el suministro de agua de una ciudad llega a cada edificio", points: { "civil-engineering": 2, "environmental-engineering": 2 }, themes: ["structures-infrastructure"] },
      { text: "Cómo un marcapasos mantiene estable un latido", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
    ],
  },
  {
    id: "math-physics-comfort",
    prompt: "¿Cómo te sientes respecto a cursos con mucha carga de matemáticas y física?",
    options: [
      { text: "Adelante — me gusta más entre más abstracto se vuelve", points: { "electrical-engineering": 2, "software-engineering": 1, "industrial-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Me gusta más cuando puedo verlo en acción — fuerzas, movimiento, estructuras", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "materials-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Puedo manejarlo, pero prefiero que esté al servicio de temas de biología o salud", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "Prefiero minimizarlo y enfocarme más en lógica y resolución de problemas", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
    ],
  },
  {
    id: "code-feelings",
    prompt: "¿Cómo te sientes respecto a escribir y depurar código?",
    options: [
      { text: "Es una de mis partes favoritas de cualquier proyecto", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["coding-software"] },
      { text: "Me gusta como herramienta, no como el enfoque principal — como controlar hardware", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "computer-engineering": 1, "robotics-engineering": 2 }, themes: ["electronics"] },
      { text: "Estoy abierto/a a ello, pero no querría que fuera mi actividad principal del día a día", points: { "biomedical-engineering": 1, "civil-engineering": 1 }, themes: [] },
      { text: "Preferiría evitarlo por completo si es posible", points: { "civil-engineering": 2 }, themes: [] },
    ],
  },
  {
    id: "biology-interest",
    prompt: "¿Qué tan interesado/a estás en la biología y en cómo funciona el cuerpo humano?",
    options: [
      { text: "Muy interesado/a — querría que fuera algo central en mi trabajo", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "Lo suficientemente interesado/a como para quererlo involucrado, aunque no sea el enfoque principal", points: { "biomedical-engineering": 1, "mechanical-engineering": 1 }, themes: ["biology-health"] },
      { text: "No particularmente — preferiría trabajar con sistemas mecánicos o eléctricos", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building", "electronics"] },
      { text: "No particularmente — preferiría trabajar con código o con el entorno construido", points: { "software-engineering": 1, "civil-engineering": 1, "computer-engineering": 1, "environmental-engineering": 1 }, themes: ["coding-software", "structures-infrastructure"] },
    ],
  },
  {
    id: "built-environment",
    prompt: "Cuando piensas en los edificios, caminos, y servicios públicos que te rodean, ¿cómo te sientes?",
    options: [
      { text: "Me pregunto activamente cómo fueron diseñados y si van a aguantar", points: { "civil-engineering": 2, "environmental-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "Me importan más las máquinas y vehículos que se mueven a través de ellos", points: { "mechanical-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Me importan más los sistemas eléctricos y de datos que corren a través de ellos", points: { "electrical-engineering": 2, "computer-engineering": 1 }, themes: ["electronics"] },
      { text: "No pienso mucho en eso — me interesa más el software", points: { "software-engineering": 1, "computer-engineering": 1 }, themes: ["coding-software"] },
    ],
  },
  {
    id: "tradeoff-pace",
    prompt: "¿Con cuál de estas compensaciones preferirías vivir en tu futuro trabajo?",
    options: [
      { text: "Proyectos de avance lento (años) pero con un gran impacto público", points: { "civil-engineering": 2, "biomedical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects", "public-impact"] },
      { text: "Proyectos de avance rápido (semanas a meses) con menos supervisión regulatoria", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Proyectos de ritmo medio centrados en prototipado físico e iteración", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "robotics-engineering": 1, "materials-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Proyectos de ritmo medio con requisitos estrictos de seguridad y pruebas", points: { "biomedical-engineering": 1, "electrical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "daily-environment",
    prompt: "¿Qué entorno suena mejor para tu trabajo real del día a día?",
    options: [
      { text: "Un laboratorio o taller, probando prototipos físicos", points: { "mechanical-engineering": 2, "biomedical-engineering": 1, "materials-engineering": 2, "chemical-engineering": 1, "aerospace-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Un sitio de construcción o trabajo de campo", points: { "civil-engineering": 2, "environmental-engineering": 1, "agricultural-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "En una computadora, mayormente", points: { "software-engineering": 2, "electrical-engineering": 1, "computer-engineering": 1, "industrial-engineering": 1 }, themes: ["coding-software"] },
      { text: "Una mezcla genuina — a veces práctico, a veces en una computadora", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1, "petroleum-engineering": 1, "marine-engineering": 1 }, themes: ["electronics", "hands-on-building"] },
    ],
  },
  {
    id: "fun-to-build",
    prompt: "¿Cuál de estos proyectos suena más divertido de construir en realidad?",
    options: [
      { text: "Un pequeño robot o dispositivo mecánico", points: { "mechanical-engineering": 2, "robotics-engineering": 2, "aerospace-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Un circuito simple o kit de electrónica", points: { "electrical-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["electronics"] },
      { text: "Una pequeña aplicación o sitio web", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "Un puente a escala, y probar cuánto peso aguanta antes de fallar", points: { "civil-engineering": 2, "materials-engineering": 2, "environmental-engineering": 1, "marine-engineering": 1 }, themes: ["structures-infrastructure"] },
    ],
  },
  {
    id: "satisfying-problem",
    prompt: "Dos tipos de problemas difíciles. ¿Cuál es más satisfactorio resolver en realidad?",
    options: [
      { text: "Un problema donde puedes ver y tocar lo que estás trabajando", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Un problema que es completamente abstracto, sin ningún componente físico", points: { "software-engineering": 2, "electrical-engineering": 1, "industrial-engineering": 2, "computer-engineering": 1, "petroleum-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Un problema donde la 'cosa' con la que trabajas es un sistema vivo", points: { "biomedical-engineering": 2, "agricultural-engineering": 1 }, themes: ["biology-health"] },
      { text: "Un problema donde estás equilibrando códigos de seguridad en los que la mayoría de la gente nunca piensa", points: { "civil-engineering": 2, "chemical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "code-context",
    prompt: "Si tuvieras que escribir código regularmente, ¿qué contexto te atraería más?",
    options: [
      { text: "Código que controla un dispositivo o máquina física", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1 }, themes: ["electronics", "coding-software"] },
      { text: "Código para una aplicación, sitio web, o sistema de backend", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "Honestamente, preferiría no escribir código seguido", points: { "civil-engineering": 1, "biomedical-engineering": 1, "materials-engineering": 1, "environmental-engineering": 1 }, themes: [] },
      { text: "Código específicamente para herramientas médicas o de salud", points: { "biomedical-engineering": 2, "software-engineering": 1 }, themes: ["biology-health", "coding-software"] },
    ],
  },
  {
    id: "health-topic",
    prompt: "¿Qué tema relacionado con la salud te interesa más?",
    options: [
      { text: "Cómo se diseña realmente un dispositivo específico, como una bomba de insulina", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "hands-on-building"] },
      { text: "Cómo se dirigen y organizan los hospitales y los sistemas de salud", points: { "biomedical-engineering": 1, "industrial-engineering": 1 }, themes: ["biology-health"] },
      { text: "No particularmente interesado/a en temas relacionados con la salud", points: {}, themes: [] },
      { text: "Algo interesado/a, pero solo junto con diseño práctico de dispositivos", points: { "biomedical-engineering": 1, "mechanical-engineering": 1 }, themes: ["biology-health", "hands-on-building"] },
    ],
  },
  {
    id: "motivation",
    prompt: "¿Cuál de estas te motiva más?",
    options: [
      { text: "Construir cosas que sirven directamente al público — caminos, agua, transporte", points: { "civil-engineering": 2, "environmental-engineering": 2 }, themes: ["public-impact", "structures-infrastructure"] },
      { text: "Construir productos que personas individuales o empresas compran y usan", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
      { text: "Construir herramientas que ayudan específicamente a doctores o pacientes", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "public-impact"] },
      { text: "Construir la columna vertebral eléctrica — energía, dispositivos — de la que dependen otros sistemas", points: { "electrical-engineering": 2, "computer-engineering": 1, "nuclear-engineering": 1 }, themes: ["electronics", "public-impact"] },
    ],
  },
  {
    id: "regulation-tolerance",
    prompt: "¿Cómo te sientes con que regulaciones estrictas y procesos de aprobación den forma a tu trabajo?",
    options: [
      { text: "Está bien — entiendo por qué existe y puedo trabajar dentro de eso", points: { "civil-engineering": 1, "biomedical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Preferiría tener toda la libertad de diseño posible", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
      { text: "No me molesta algo de regulación, especialmente para trabajo crítico en seguridad", points: { "electrical-engineering": 1, "biomedical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "marine-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Activamente preferiría evitar campos fuertemente regulados", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "pace-of-change",
    prompt: "¿Qué ritmo de cambio y duración de proyecto te queda mejor?",
    options: [
      { text: "Proyectos largos (años), con tecnología y métodos relativamente estables", points: { "civil-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects"] },
      { text: "Herramientas que cambian rápido y ciclos de proyecto cortos — semanas a meses", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Proyectos de duración media, con tecnología que evoluciona pero no de forma caótica", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "industrial-engineering": 1 }, themes: [] },
      { text: "Proyectos de duración media a larga, con tecnología que evoluciona lento pero de forma significativa", points: { "biomedical-engineering": 2, "materials-engineering": 1 }, themes: ["long-term-projects"] },
    ],
  },
  {
    id: "downside-tolerance",
    prompt: "Todo campo tiene desventajas. ¿Cuál de estas te molestaría menos?",
    options: [
      { text: "Proyectos que toman años e implican mucho papeleo y aprobaciones", points: { "civil-engineering": 2, "biomedical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects", "regulation-safety"] },
      { text: "Necesitar aprender constantemente herramientas nuevas solo para mantenerte al día", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Diseños que fallan en las pruebas, y necesitar paciencia para descubrir por qué", points: { "mechanical-engineering": 2, "electrical-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "aerospace-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["debugging-troubleshooting"] },
      { text: "Retrasos regulatorios que ralentizan qué tan rápido tu trabajo llega a uso real", points: { "biomedical-engineering": 2, "chemical-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "working-style",
    prompt: "¿Qué estilo de trabajo te atrae más?",
    options: [
      { text: "Trabajar mayormente de forma independiente en un problema técnico bien definido", points: { "software-engineering": 1, "mechanical-engineering": 1, "materials-engineering": 1 }, themes: ["independent-work"] },
      { text: "Trabajar con un equipo amplio que incluye personas que no son ingenieras, como doctores o funcionarios de la ciudad", points: { "civil-engineering": 1, "biomedical-engineering": 1, "environmental-engineering": 1, "agricultural-engineering": 1, "petroleum-engineering": 1 }, themes: ["teamwork-collaboration"] },
      { text: "Trabajar de cerca con hardware y otros ingenieros para hacer que algo físico funcione", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1, "marine-engineering": 1 }, themes: ["teamwork-collaboration", "electronics"] },
      { text: "Trabajar en un equipo de ritmo rápido que lanza e itera rápidamente", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["teamwork-collaboration", "fast-iteration"] },
    ],
  },
  {
    id: "gut-check",
    prompt: "Si tuvieras que elegir solo una, ¿cuál te importa más en una futura carrera?",
    options: [
      { text: "Ver un resultado físico y tangible de tu trabajo", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Mejorar directamente la salud de las personas", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "public-impact"] },
      { text: "Construir cosas con las que casi cualquiera en el mundo moderno interactúa a diario", points: { "software-engineering": 2, "electrical-engineering": 1, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "Mantener funcionando sistemas públicos esenciales", points: { "civil-engineering": 2, "electrical-engineering": 1, "environmental-engineering": 2, "nuclear-engineering": 1 }, themes: ["public-impact", "structures-infrastructure"] },
    ],
  },
  {
    id: "hardest-part-of-a-build",
    prompt: "Cuando un diseño físico no está funcionando bien, ¿qué parte disfrutarías realmente investigar?",
    options: [
      { text: "Si un mecanismo se está moviendo de la forma en que debería", points: { "mechanical-engineering": 2, "robotics-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building", "debugging-troubleshooting"] },
      { text: "Si el diseño puede sobrevivir calor, velocidad, o presión extremos", points: { "aerospace-engineering": 2, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Si el material en sí es el problema real, no la forma", points: { "materials-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Si la electrónica y el código están haciendo lo que deberían", points: { "robotics-engineering": 2, "computer-engineering": 1, "electrical-engineering": 1 }, themes: ["electronics", "debugging-troubleshooting"] },
    ],
  },
  {
    id: "hardware-software-lean",
    prompt: "Si tu trabajo implicara tanto hardware como código, ¿hacia qué lado te inclinarías?",
    options: [
      { text: "Mayormente hardware — circuitos, energía, señales físicas", points: { "electrical-engineering": 2 }, themes: ["electronics"] },
      { text: "Mayormente el chip y el firmware — el código más cercano al hardware en sí", points: { "computer-engineering": 2 }, themes: ["electronics", "coding-software"] },
      { text: "Mayormente software — aplicaciones, sitios web, sistemas que no tocan hardware físico", points: { "software-engineering": 2 }, themes: ["coding-software"] },
      { text: "Una mezcla equilibrada, en un dispositivo físico real como un robot", points: { "robotics-engineering": 2 }, themes: ["electronics", "coding-software"] },
    ],
  },
  {
    id: "civil-vs-environmental",
    prompt: "¿En cuál de estos proyectos públicos preferirías ser el/la ingeniero/a?",
    options: [
      { text: "Un puente nuevo o una línea de transporte", points: { "civil-engineering": 2 }, themes: ["structures-infrastructure", "public-impact"] },
      { text: "Una planta de tratamiento de agua o un proyecto de calidad del aire", points: { "environmental-engineering": 2 }, themes: ["public-impact"] },
      { text: "El equipo médico dentro de un hospital, no el edificio en sí", points: { "biomedical-engineering": 1 }, themes: ["biology-health"] },
      { text: "Ninguno de estos — preferiría trabajar en un producto privado, no en infraestructura pública", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "chemical-vs-materials",
    prompt: "¿Qué problema basado en laboratorio suena más interesante?",
    options: [
      { text: "Escalar una reacción química desde una prueba pequeña hasta un proceso industrial completo", points: { "chemical-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Probar un material nuevo para encontrar su resistencia exacta y su punto de falla", points: { "materials-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Probar la seguridad de un dispositivo antes de que se use en una persona", points: { "biomedical-engineering": 1 }, themes: ["hands-on-building", "biology-health"] },
      { text: "Preferiría no trabajar en un laboratorio en absoluto", points: { "civil-engineering": 1, "software-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "process-fixer",
    prompt: "Te entregan un proceso lento e ineficiente y te piden que lo arregles. ¿Cómo te sientes?",
    options: [
      { text: "Emocionado/a — encontrar y eliminar desperdicio es satisfactorio", points: { "industrial-engineering": 2 }, themes: ["abstract-problem-solving"] },
      { text: "Está bien, pero preferiría diseñar algo nuevo desde cero", points: { "mechanical-engineering": 1 }, themes: [] },
      { text: "Preferiría arreglar el código de un sistema técnico que un flujo de trabajo", points: { "computer-engineering": 1, "software-engineering": 1 }, themes: ["debugging-troubleshooting"] },
      { text: "No es realmente lo mío — preferiría construir que optimizar", points: {}, themes: [] },
    ],
  },
  {
    id: "aerospace-vs-mechanical",
    prompt: "¿Cuál te emociona más?",
    options: [
      { text: "Aeronaves, cohetes, o cualquier cosa que tenga que funcionar en entornos extremos", points: { "aerospace-engineering": 2 }, themes: ["hands-on-building", "long-term-projects"] },
      { text: "Máquinas cotidianas — motores, electrodomésticos, herramientas — que solo necesitan funcionar de forma confiable", points: { "mechanical-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Vehículos específicamente, como autos", points: { "mechanical-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Ninguno — me interesa más la electrónica que hay dentro de ellos", points: { "electrical-engineering": 1, "computer-engineering": 1 }, themes: ["electronics"] },
    ],
  },
  {
    id: "biomedical-vs-others-lab",
    prompt: "En un laboratorio, ¿qué proyecto preferirías estar haciendo?",
    options: [
      { text: "Probar un dispositivo que se usará en o dentro de un paciente", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "Probar cómo aguanta un material nuevo bajo estrés", points: { "materials-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Realizar un experimento de proceso con mucha química", points: { "chemical-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Preferiría no estar en un laboratorio en absoluto", points: { "civil-engineering": 1, "software-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "systems-thinking",
    prompt: "¿Qué tipo de resolución de problemas suena más a ti?",
    options: [
      { text: "Alejar la vista para ver cómo docenas de piezas pequeñas encajan en un sistema grande", points: { "industrial-engineering": 1, "aerospace-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Enfocarte profundamente en una pieza pequeña y precisa y lograr que quede exactamente bien", points: { "materials-engineering": 1, "computer-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Trabajar con algo vivo o biológico, no solo partes mecánicas", points: { "biomedical-engineering": 2, "agricultural-engineering": 1 }, themes: ["biology-health"] },
      { text: "Trabajar con algo que puedes medir directamente, como con un multímetro", points: { "electrical-engineering": 2 }, themes: ["electronics"] },
    ],
  },
  {
    id: "public-vs-product",
    prompt: "¿Qué resultado final te importa más?",
    options: [
      { text: "Algo en lo que el público confía sin siquiera pensarlo, como agua limpia o caminos que funcionan", points: { "civil-engineering": 1, "environmental-engineering": 2, "nuclear-engineering": 1, "agricultural-engineering": 1 }, themes: ["public-impact"] },
      { text: "Algo que una persona individual o una empresa elige comprar específicamente", points: { "mechanical-engineering": 1, "software-engineering": 1 }, themes: [] },
      { text: "Algo que mantiene funcionando juntas las piezas de todo un proyecto complejo", points: { "industrial-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Algo construido para resistir condiciones extremas e inusuales", points: { "aerospace-engineering": 1, "materials-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
    ],
  },
  {
    id: "regulation-heavy-fields",
    prompt: "El trabajo fuertemente regulado es común en varios campos. ¿Cuál versión de eso tolerarías mejor?",
    options: [
      { text: "Regulaciones sobre mantener a las personas físicamente seguras en edificios y estructuras", points: { "civil-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulaciones sobre probar algo de forma segura antes de que se use en una persona", points: { "biomedical-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulaciones sobre el manejo seguro de materiales o químicos peligrosos", points: { "chemical-engineering": 2, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulaciones sobre mantener seguras para operar las aeronaves o naves espaciales", points: { "aerospace-engineering": 2 }, themes: ["regulation-safety"] },
    ],
  },
];
