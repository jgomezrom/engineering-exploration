import { EngineeringField } from "./types";

// Spanish translations of full field entries, same shape as fields.ts. Only
// the fields listed here have a Spanish version; the field page falls back
// to the English entry (with a small notice) for any field not yet
// translated — see FieldLanguageNotice / the [slug]/page.tsx lookup.
// Numbers, dates, and source names in `salary` are facts and are not
// re-translated beyond the surrounding label text; `stats` keeps the same
// Level values ("Low"/"Medium"/"High") since those are used as typed keys
// elsewhere in the app, not just display text.
export const fieldsEs: EngineeringField[] = [
  {
    slug: "mechanical-engineering",
    name: "Ingeniería Mecánica",
    tagline:
      "Diseñar y construir máquinas y sistemas que se mueven, generan energía y le dan forma al mundo físico.",
    whatItIs:
      "La ingeniería mecánica es uno de los campos más amplios de la ingeniería. Se trata de cómo se mueven las cosas, cómo actúan las fuerzas sobre los objetos, y cómo se diseñan, construyen y mejoran las máquinas — desde los mecanismos diminutos dentro de un reloj hasta motores a reacción y robots de fábrica.",
    whatEngineersWorkOn:
      "Los ingenieros mecánicos diseñan piezas y sistemas, hacen simulaciones para predecir cómo se comportará algo bajo estrés o calor, construyen y prueban prototipos físicos, y descubren cómo fabricar diseños a gran escala. Gran parte del trabajo diario consiste en resolver problemas cuando un diseño no se comporta como debería.",
    realWorldExamples: [
      "Motores de auto y sistemas de frenos",
      "Brazos robóticos usados en fábricas",
      "Sistemas de climatización (HVAC) que calientan y enfrían edificios",
      "Prótesis y dispositivos médicos",
      "Montañas rusas y atracciones de parques de diversiones",
    ],
    commonMisconceptions: [
      "Que los ingenieros mecánicos principalmente arreglan autos o electrodomésticos (eso normalmente lo hace un mecánico o técnico, un trabajo diferente).",
      "Que solo se trata de máquinas grandes — gran parte de la ingeniería mecánica es trabajo de diseño preciso y a pequeña escala.",
      "Que ya tienes que 'ser bueno con las herramientas' antes de empezar — la mayoría de la habilidad práctica se aprende durante la carrera, no antes.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros mecánicos principalmente arreglan autos o electrodomésticos.",
        reality: "Eso normalmente lo hace un mecánico o técnico — una profesión completamente distinta.",
      },
      {
        myth: "Solo se trata de máquinas grandes.",
        reality: "Gran parte de la ingeniería mecánica es trabajo de diseño preciso y a pequeña escala.",
      },
      {
        myth: "Ya tienes que 'ser bueno con las herramientas' antes de empezar.",
        reality: "La mayoría de la habilidad práctica se aprende durante la carrera, no antes.",
      },
    ],
    usefulSubjects: ["Física (especialmente mecánica)", "Cálculo", "Química (en algunos programas)", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Razonamiento espacial (visualizar cómo encajan y se mueven las piezas juntas)",
      "Comodidad con las matemáticas, especialmente física basada en álgebra",
      "Paciencia para el ensayo y error — los diseños rara vez funcionan perfectamente la primera vez",
      "Conocimientos básicos de computación para software de CAD y simulación",
    ],
    typicalProjects: [
      "Diseñar una pieza en software CAD y probar si puede soportar cierta carga",
      "Construir y probar un prototipo físico",
      "Mejorar un diseño existente para que sea más liviano, más barato o más eficiente",
    ],
    typicalWorkday:
      "Gran parte del trabajo se hace frente a una computadora — corriendo simulaciones, revisando diseños, escribiendo informes y asistiendo a reuniones — combinado con tiempo en un laboratorio o taller probando prototipos físicos. Es menos 'construir cosas a mano todo el día' y más 'resolver problemas, algunos de los cuales implican pruebas prácticas.'",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Repaso matutino", detail: "Revisar los resultados de las simulaciones de la noche y ponerse al día con los correos del equipo." },
        { time: "9:30 AM", label: "Trabajo de diseño", detail: "Correr simulaciones y revisar un diseño en software CAD para ver cómo aguanta bajo carga." },
        { time: "11:00 AM", label: "Reunión de equipo", detail: "Coordinar con el equipo y redactar un informe de estado sobre un diseño que va atrasado." },
        { time: "1:00 PM", label: "En el taller", detail: "Probar un prototipo físico — y no se comporta como predijo la simulación." },
        { time: "3:00 PM", label: "De vuelta al escritorio", detail: "Documentar qué salió mal en las pruebas y ajustar el diseño según eso." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Documentar el progreso de hoy y preparar el tiempo de taller de mañana." },
      ],
      reflectionQuestion:
        "¿Qué parte de este día disfrutarías más — el trabajo de diseño en la computadora o las pruebas prácticas? ¿Qué parte te frustraría?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$104,110",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. El salario real varía mucho según la ubicación, la industria, el empleador y la experiencia.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Construye una catapulta simple o un sistema de poleas con materiales de tu casa y observa qué tan lejos o cuánto puede mover.",
        tool: "Todavía no necesitas herramientas especiales — solo intenta construir con lo que tengas en casa.",
        activity: "Busca un club de robótica LEGO o de STEM en tu escuela, o un equipo de FIRST LEGO League, si hay uno cerca de ti.",
        relatedField: "electrical-engineering",
      },
      "13-15": {
        project: "Diseña una pieza simple en una herramienta CAD gratuita basada en el navegador, y piensa en cómo la construirías de verdad.",
        tool: "Tinkercad — gratis, basado en el navegador, no necesita instalación.",
        activity: "Investiga si hay un equipo de FIRST Tech Challenge o VEX Robotics en tu escuela.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Diseña y modela una pieza o mecanismo más completo, pensando en las tolerancias y en cómo se fabricaría realmente.",
        tool: "Fusion 360 (gratis para uso personal o educativo) o SolidWorks si tu escuela te da acceso.",
        activity: "Busca un programa preuniversitario de ingeniería, un equipo de FIRST Robotics Competition, o un campamento de verano de ingeniería en una universidad.",
        relatedField: "electrical-engineering",
      },
    },
    industries: ["Automotriz", "Aeroespacial", "Manufactura", "Energía", "Robótica", "Productos de consumo"],
    relatedMajors: ["Ingeniería Mecánica", "Ingeniería Mecatrónica", "Ingeniería de Manufactura"],
    careerPaths: [
      { title: "Ingeniero/a Automotriz", description: "Diseña y prueba sistemas del vehículo como motores, frenos y suspensiones." },
      { title: "Ingeniero/a de Climatización (HVAC)", description: "Diseña sistemas de calefacción, refrigeración y ventilación para edificios." },
      { title: "Ingeniero/a de Diseño de Productos", description: "Diseña productos físicos de consumo o industriales, desde el concepto hasta la fabricación." },
      { title: "Ingeniero/a de Robótica", description: "Diseña la estructura física y los mecanismos de los robots (a menudo se superpone con la ingeniería eléctrica y de software)." },
    ],
    advantages: [
      "Extremadamente amplio — las habilidades se transfieren a muchas industrias",
      "Una mezcla de trabajo práctico y trabajo en computadora, si te gusta la variedad",
      "Resultados directos y visibles — a menudo puedes ver y tocar lo que diseñaste",
    ],
    challenges: [
      "Carga pesada de matemáticas y física, especialmente al principio de la carrera",
      "Los diseños fallan con frecuencia durante las pruebas, y descubrir por qué requiere paciencia",
      "Algunos puestos implican mucha documentación, informes y procesos de aprobación, así que a veces no estarás realmente diseñando ni construyendo nada",
    ],
    thingsPeopleDislike: [
      "Los plazos de fabricación y pruebas pueden ser lentos — los proyectos a veces toman meses o años",
      "Una cantidad considerable de papeleo y trabajo de cumplimiento normativo según la industria (como la aeroespacial, que está fuertemente regulada)",
    ],
    howCompetitive:
      "En general, la ingeniería mecánica tiene una demanda fuerte y estable, pero esto varía mucho según el país y la industria específica (por ejemplo, los puestos en el sector aeroespacial suelen ser más competitivos que los de manufactura general). No lo tomes como garantizado — investiga el mercado laboral de tu país específico antes de tomar decisiones importantes.",
    beginnerActivities: [
      "Construye una máquina simple con materiales de casa (como una catapulta o un sistema de poleas) y observa qué tan bien funciona",
      "Prueba una herramienta CAD gratuita como Tinkercad y diseña una pieza simple",
      "Desarma un juguete o electrodoméstico mecánico viejo (de forma segura, desenchufado) y observa cómo encajan las piezas",
    ],
    selfReflectionQuestions: [
      "¿Disfruto descubrir cómo funcionan las cosas físicas?",
      "¿Estoy bien con que un diseño no funcione la primera vez, e intentarlo de nuevo?",
      "¿Me gusta una mezcla de trabajo en computadora y pruebas prácticas?",
      "¿Me gustan las matemáticas y me veo usándolas regularmente?",
    ],
  },
];
