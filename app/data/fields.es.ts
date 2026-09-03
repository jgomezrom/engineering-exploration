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
  {
    slug: "electrical-engineering",
    name: "Ingeniería Eléctrica",
    tagline: "Comprender y diseñar los sistemas que generan, transportan y controlan la electricidad y las señales electrónicas.",
    whatItIs:
      "La ingeniería eléctrica abarca cómo se genera, distribuye y utiliza la electricidad — desde enormes redes eléctricas hasta los diminutos circuitos dentro de un teléfono. Se divide en muchas subáreas: sistemas de energía, electrónica, procesamiento de señales, y más.",
    whatEngineersWorkOn:
      "Los ingenieros eléctricos diseñan circuitos, prueban cómo se comportan los sistemas electrónicos, trabajan en la distribución de energía, y a menudo colaboran de cerca con ingenieros de software cuando un dispositivo necesita tanto hardware como código para funcionar. Gran parte del trabajo consiste en leer esquemas, usar equipo de prueba especializado, y depurar por qué un circuito no se comporta como se esperaba.",
    realWorldExamples: [
      "Redes eléctricas y subestaciones",
      "Placas de circuitos dentro de teléfonos y laptops",
      "Sistemas de batería y motor de vehículos eléctricos",
      "Equipos de imágenes médicas",
      "Sistemas de comunicación inalámbrica (como WiFi y redes celulares)",
    ],
    commonMisconceptions: [
      "Que es lo mismo que ser electricista (un oficio con licencia, diferente de un título de ingeniería).",
      "Que solo se trata de cableado físico — una gran parte del campo es teoría de señales, diseño de circuitos, y cada vez más, programación de sistemas embebidos.",
      "Que ya necesitas entender circuitos antes de empezar — como en la ingeniería mecánica, la mayor parte se enseña desde cero.",
    ],
    mythsAndRealities: [
      { myth: "Es lo mismo que ser electricista.", reality: "Eso es un oficio con licencia, diferente de un título de ingeniería." },
      { myth: "Solo se trata de cableado físico.", reality: "Una gran parte del campo es teoría de señales, diseño de circuitos, y cada vez más, programación de sistemas embebidos." },
      { myth: "Necesitas ya entender circuitos antes de empezar.", reality: "Como en la ingeniería mecánica, la mayor parte se enseña desde cero." },
    ],
    usefulSubjects: ["Física (especialmente electricidad y magnetismo)", "Cálculo", "Cualquier curso introductorio de programación, si está disponible"],
    helpfulSkills: [
      "Comodidad con las matemáticas abstractas (el comportamiento eléctrico no siempre es visible como sí lo es el movimiento mecánico)",
      "Depuración cuidadosa y metódica — una sola conexión incorrecta puede dañar todo un circuito",
      "Programación básica, ya que muchos sistemas eléctricos modernos incluyen código embebido",
    ],
    typicalProjects: [
      "Diseñar y probar un circuito en una protoboard",
      "Simular el comportamiento de un circuito antes de construirlo físicamente",
      "Programar un microcontrolador para que responda a la entrada de un sensor",
    ],
    typicalWorkday:
      "A menudo es una mezcla de software de diseño de circuitos, equipo de prueba (como osciloscopios y multímetros), y — en muchos puestos — escribir software embebido. Depurar un circuito que no funciona como se esperaba es una parte muy normal y recurrente del trabajo.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Diseño de circuitos", detail: "Trabajar en software de diseño de circuitos, colocando un nuevo componente en la placa." },
        { time: "10:30 AM", label: "Simulación", detail: "Simular cómo debería comportarse el circuito antes de construirlo físicamente." },
        { time: "12:00 PM", label: "En el banco de trabajo", detail: "Usar un osciloscopio y un multímetro para comparar el circuito físico con la simulación." },
        { time: "1:30 PM", label: "Depuración", detail: "El circuito no se comporta como se esperaba — rastreando el problema conexión por conexión." },
        { time: "3:00 PM", label: "Código embebido", detail: "Programar un microcontrolador para que responda correctamente a la entrada de un sensor." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Documentar qué se arregló hoy y qué sigue sin resolver." },
      ],
      reflectionQuestion:
        "¿Cómo te sentirías pasando una tarde entera depurando un circuito que no funciona, sin garantía de encontrar el problema antes de irte a casa?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Medium",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$120,630",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. La especialización estrechamente relacionada de 'ingeniero electrónico' reporta una mediana más alta ($130,220) en los mismos datos del BLS, así que la especialización también importa aquí.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Construye un circuito simple con un kit de circuitos de encaje, una batería y un LED.",
        tool: "Un kit de circuitos de encaje para principiantes — económico, fácil de conseguir, no necesita soldadura.",
        activity: "Busca un club de STEM en tu escuela o un taller de electrónica para principiantes en una biblioteca local o espacio maker, si hay uno disponible.",
        relatedField: "software-engineering",
      },
      "13-15": {
        project: "Intenta construir un circuito básico de LED, y luego cambia la resistencia para ver qué pasa.",
        tool: "Un simulador de circuitos gratuito en línea como Tinkercad Circuits, para que puedas probar ideas antes de comprar piezas.",
        activity: "Investiga si hay un equipo de FIRST Tech Challenge o un club de robótica que involucre cableado y electrónica en tu escuela.",
        relatedField: "software-engineering",
      },
      "16-18": {
        project: "Prueba un proyecto de Arduino para principiantes, como hacer que un LED parpadee en un horario o leer un sensor.",
        tool: "Arduino — una plataforma de microcontrolador muy usada y accesible para principiantes.",
        activity: "Busca un programa preuniversitario de ingeniería o un campamento de verano de electrónica, y revisa si tu escuela ofrece Física AP con una unidad de electricidad y magnetismo.",
        relatedField: "software-engineering",
      },
    },
    industries: ["Energía", "Electrónica de consumo", "Telecomunicaciones", "Automotriz", "Aeroespacial", "Manufactura de semiconductores"],
    relatedMajors: ["Ingeniería Eléctrica", "Ingeniería Electrónica", "Ingeniería en Computación"],
    careerPaths: [
      { title: "Ingeniero/a de Sistemas de Energía", description: "Diseña y mantiene los sistemas que generan y distribuyen electricidad." },
      { title: "Ingeniero/a de Diseño Electrónico", description: "Diseña placas de circuitos y componentes electrónicos para dispositivos." },
      { title: "Ingeniero/a de RF/Inalámbrico", description: "Trabaja en sistemas de comunicación inalámbrica como WiFi, señales celulares y satelitales." },
      { title: "Ingeniero/a de Control", description: "Diseña sistemas que controlan automáticamente máquinas o procesos usando señales eléctricas." },
    ],
    advantages: [
      "Alta demanda en una gama muy amplia de industrias",
      "Las habilidades se transfieren bien a campos relacionados como la ingeniería en computación o la robótica",
      "Mucha variedad — el trabajo en sistemas de energía se ve muy diferente al trabajo en electrónica de consumo",
    ],
    challenges: [
      "Los conceptos suelen ser abstractos — la electricidad y las señales no siempre son visibles o intuitivas como sí lo es el movimiento mecánico",
      "La depuración puede ser frustrante ya que los problemas no siempre son visualmente obvios",
      "Las regulaciones y normas de seguridad son estrictas en el trabajo relacionado con energía, y por buenas razones",
    ],
    thingsPeopleDislike: [
      "Algunos puestos tienen mucha carga de cumplimiento normativo y documentación de pruebas, especialmente en energía o aeroespacial",
      "El rápido ritmo de cambio en la electrónica significa aprender constantemente nuevas herramientas y estándares",
    ],
    howCompetitive:
      "La demanda es generalmente fuerte, especialmente para ingenieros cómodos tanto con hardware como con software, pero esto varía según el país y la especialización — los puestos en sistemas de energía y los puestos en electrónica de vanguardia pueden tener mercados laborales muy diferentes. Investiga tu región específica antes de sacar conclusiones.",
    beginnerActivities: [
      "Construye un circuito simple con una protoboard, LEDs y una batería de 9V",
      "Prueba un kit de electrónica para principiantes (muchos son económicos y fáciles de conseguir)",
      "Usa un simulador de circuitos gratuito en línea para construir y probar un circuito sin necesitar piezas físicas",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con conceptos abstractos que no puedo ver directamente, como la corriente eléctrica?",
      "¿Disfruto depurar — descubrir con paciencia por qué algo no funciona?",
      "¿Me interesa cómo funcionan juntos el hardware y el software?",
    ],
  },
  {
    slug: "civil-engineering",
    name: "Ingeniería Civil",
    tagline: "Planificar y diseñar la infraestructura que hace que la vida diaria funcione — carreteras, puentes, sistemas de agua y los edificios que te rodean.",
    whatItIs:
      "La ingeniería civil abarca el diseño, la construcción y el mantenimiento de la infraestructura y el entorno construido — básicamente la mayor parte de lo que usas fuera de tu propia casa que no es un producto privado. Se divide en subáreas como ingeniería estructural, geotécnica, de transporte, y de recursos hídricos/ambiental.",
    whatEngineersWorkOn:
      "Los ingenieros civiles diseñan estructuras y sistemas, hacen cálculos para verificar que resistirán las condiciones del mundo real (cargas, suelo, flujo de agua), y coordinan de cerca con arquitectos, contratistas y agencias gubernamentales. Gran parte del trabajo también son visitas al sitio durante la construcción para asegurarse de que lo que realmente se está construyendo coincide con el diseño — y lidiar con permisos, códigos y aprobaciones, que es una parte más grande del trabajo de lo que la gente espera.",
    realWorldExamples: [
      "Puentes y pasos elevados de autopistas",
      "Sistemas de tratamiento de agua y alcantarillado municipal",
      "Cimientos de edificios y estructuras de armazón",
      "Presas y sistemas de control de inundaciones",
      "Infraestructura de transporte público como líneas ferroviarias y túneles",
    ],
    commonMisconceptions: [
      "Que los ingenieros civiles son lo mismo que los trabajadores de la construcción o los contratistas — los ingenieros civiles diseñan y planifican; generalmente no son quienes construyen físicamente.",
      "Que es un campo 'menos técnico' que la ingeniería mecánica o eléctrica — los cálculos estructurales y geotécnicos pueden ser igual de exigentes, y los márgenes de seguridad importan porque las fallas son públicas y potencialmente catastróficas.",
      "Que la mayoría del trabajo de ingeniería civil es en proyectos grandes y llamativos — gran parte del trabajo diario son proyectos municipales más pequeños: reparación de calles, drenaje de urbanizaciones, inspecciones rutinarias de puentes.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros civiles son lo mismo que los trabajadores de la construcción o los contratistas.", reality: "Los ingenieros civiles diseñan y planifican; generalmente no son quienes construyen físicamente." },
      { myth: "Es un campo 'menos técnico' que la ingeniería mecánica o eléctrica.", reality: "Los cálculos estructurales y geotécnicos pueden ser igual de exigentes, y los márgenes de seguridad importan porque las fallas son públicas y potencialmente catastróficas." },
      { myth: "La mayoría del trabajo de ingeniería civil es en proyectos grandes y llamativos.", reality: "Gran parte del trabajo diario son proyectos municipales más pequeños: reparación de calles, drenaje de urbanizaciones, inspecciones rutinarias de puentes." },
    ],
    usefulSubjects: ["Física (especialmente estática y mecánica)", "Cálculo", "Ciencias ambientales, si está disponible", "Geografía o ciencias de la Tierra, si está disponible"],
    helpfulSkills: [
      "Comodidad trabajando dentro de códigos, normas y regulaciones — gran parte del trabajo es diseñar dentro de los requisitos legales de seguridad, no solo lo técnicamente posible",
      "Coordinación de proyectos, ya que los proyectos civiles normalmente involucran arquitectos, funcionarios municipales y contratistas, no solo a otros ingenieros",
      "Atención al riesgo a largo plazo — pequeños errores en trabajo estructural o geotécnico pueden tener consecuencias graves para la seguridad pública",
      "Familiaridad básica con software CAD o GIS, si está disponible",
    ],
    typicalProjects: [
      "Calcular la carga que una viga o cimiento necesita soportar",
      "Diseñar un sistema de drenaje para una nueva urbanización",
      "Revisar datos de pruebas de suelo para determinar qué tipo de cimiento puede soportar un terreno",
      "Preparar planos del sitio para una solicitud de permiso",
    ],
    typicalWorkday:
      "Una mezcla de trabajo de diseño en la oficina — haciendo cálculos estructurales o hidráulicos, revisando planos, escribiendo informes — y visitas al sitio para revisar construcción activa o inspeccionar infraestructura existente. Los ingenieros civiles del sector público a menudo pasan bastante tiempo en reuniones con funcionarios municipales o miembros de la comunidad, ya que los proyectos de infraestructura suelen ser financiados y revisados públicamente.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Visita al sitio", detail: "Un inicio temprano revisando la construcción activa para asegurarse de que lo que se está construyendo coincide con el diseño." },
        { time: "10:00 AM", label: "De vuelta en la oficina", detail: "Haciendo cálculos estructurales o hidráulicos de una nueva sección del proyecto." },
        { time: "11:30 AM", label: "Revisando planos", detail: "Verificando el diseño de un colega contra los códigos de construcción y seguridad." },
        { time: "1:00 PM", label: "Permisos y papeleo", detail: "Preparando planos del sitio para una solicitud de permiso — más parte del trabajo de lo que la mayoría espera." },
        { time: "2:30 PM", label: "Reunión pública", detail: "Presentando una actualización del proyecto a funcionarios municipales y respondiendo preguntas de la comunidad." },
        { time: "4:00 PM", label: "Cierre del día", detail: "Escribiendo un informe que resume lo encontrado en la visita de hoy al sitio." },
      ],
      reflectionQuestion:
        "¿Una visita matutina al aire libre te suena como un descanso agradable del escritorio, o como una interrupción molesta de tu día?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "High",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$100,840",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. El salario del sector público en particular puede diferir bastante del salario del sector privado dentro de este mismo campo.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Construye un pequeño puente con palitos de madera o espagueti y observa cuánto peso puede sostener.",
        tool: "Todavía no necesitas herramientas especiales — solo materiales de construcción caseros.",
        activity: "Busca un club de STEM en tu escuela, o revisa si una biblioteca local o museo de ciencias ofrece un taller de construcción de puentes o estructuras.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Prueba una herramienta gratuita en línea que te permita probar diseños simples de armaduras o vigas antes de construir algo físico.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de fuerzas y estructuras.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos de construcción de puentes o ingeniería estructural.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Elige un puente o edificio por el que realmente pases y, usando fuentes públicas, investiga aproximadamente cómo fue diseñado para soportar sus cargas.",
        tool: "Software básico de CAD o dibujo técnico, si tu escuela ofrece una clase de dibujo o diseño de ingeniería.",
        activity: "Investiga un programa preuniversitario de ingeniería civil o construcción, o un programa de verano organizado por un departamento de ingeniería universitario.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Gobierno y municipal", "Construcción", "Consultoría ambiental", "Transporte", "Recursos hídricos", "Desarrollo inmobiliario"],
    relatedMajors: ["Ingeniería Civil", "Ingeniería Estructural", "Ingeniería Ambiental"],
    careerPaths: [
      { title: "Ingeniero/a Estructural", description: "Diseña el armazón de carga de edificios y puentes para que puedan soportar peso de forma segura y resistir fuerzas como el viento o los terremotos." },
      { title: "Ingeniero/a Geotécnico/a", description: "Estudia las condiciones del suelo y la roca para determinar cómo debe diseñarse el cimiento de una estructura." },
      { title: "Ingeniero/a de Transporte", description: "Planifica y diseña calles, carreteras y sistemas de transporte, a menudo enfocado en el flujo de tráfico y la seguridad." },
      { title: "Ingeniero/a de Recursos Hídricos", description: "Diseña sistemas de suministro de agua, drenaje, control de inundaciones y tratamiento de aguas residuales." },
    ],
    advantages: [
      "El trabajo tiene un impacto directo, visible y duradero en la comunidad donde vives",
      "La demanda está ligada a la infraestructura esencial, que suele necesitar mantenimiento y mejoras sin importar las condiciones económicas",
      "Un camino claro hacia la licencia profesional en muchos países, lo que puede traer más autoridad independiente y estabilidad laboral",
    ],
    challenges: [
      "Los proyectos pueden tomar años desde el diseño hasta la finalización, así que no siempre ves resultados rápidos",
      "El trabajo en el sector público puede implicar procesos burocráticos lentos y factores políticos fuera de tu control como ingeniero",
      "Mucho está en juego — un error de diseño en trabajo estructural o geotécnico no solo es costoso, puede ser peligroso",
    ],
    thingsPeopleDislike: [
      "Los salarios del gobierno y municipales pueden quedar por debajo de los puestos de ingeniería del sector privado en algunas regiones",
      "Mucho papeleo, permisos y revisión regulatoria, especialmente en el trabajo del sector público",
      "Las visitas al sitio pueden significar madrugadas, condiciones al aire libre, y viajes a sitios remotos",
    ],
    howCompetitive:
      "La demanda de ingenieros civiles es generalmente estable, ya que el mantenimiento de infraestructura y los proyectos públicos no desaparecen como sí puede pasar con parte del trabajo del sector privado, pero el salario y la demanda varían mucho según la región y si trabajas en el sector público o privado. En muchos países, convertirte en un ingeniero civil totalmente licenciado toma varios años de experiencia supervisada después de graduarte, lo cual afecta qué tan rápido puedes asumir responsabilidad de diseño independiente — investiga el camino de licenciatura y el mercado laboral en tu país específico antes de tomar decisiones.",
    beginnerActivities: [
      "Construye un pequeño puente con palitos de madera o espagueti y observa cuánto peso puede sostener antes de fallar",
      "Observa un sitio de construcción o puente local e intenta identificar elementos estructurales básicos como vigas, columnas y armaduras",
      "Prueba una herramienta gratuita en línea que te permita probar diseños simples de armaduras o vigas",
    ],
    selfReflectionQuestions: [
      "¿Me interesan los proyectos que toman años en terminarse en lugar de semanas?",
      "¿Me importa la infraestructura pública y el impacto en la comunidad tanto como, o más que, la resolución técnica de problemas?",
      "¿Estoy cómodo/a trabajando dentro de códigos y regulaciones estrictas en lugar de tener más libertad de diseño abierta?",
      "¿Querría eventualmente obtener una licencia profesional, que normalmente requiere años de experiencia laboral supervisada?",
    ],
  },
  {
    slug: "biomedical-engineering",
    name: "Ingeniería Biomédica",
    tagline: "Aplicar principios de ingeniería a la biología y la medicina — diseñando los dispositivos, herramientas y sistemas usados para diagnosticar, monitorear y tratar el cuerpo humano.",
    whatItIs:
      "La ingeniería biomédica está en la intersección entre la ingeniería y las ciencias de la vida. Abarca una amplia gama de subáreas — dispositivos médicos, tecnología de imágenes, prótesis, biomateriales, ingeniería de tejidos, y cada vez más, software relacionado con la salud — así que lo que un ingeniero biomédico realmente hace día a día varía mucho según su especialización.",
    whatEngineersWorkOn:
      "Los ingenieros biomédicos diseñan y prueban dispositivos y equipos médicos, trabajan en hacer más precisas las herramientas de imágenes o diagnóstico, y desarrollan materiales seguros para usar dentro o sobre el cuerpo humano — a menudo colaborando de cerca con médicos, biólogos y especialistas regulatorios. Una parte más grande del trabajo que en la mayoría de los otros campos de ingeniería es navegar pruebas de seguridad estrictas y la aprobación regulatoria antes de que un producto pueda usarse en pacientes.",
    realWorldExamples: [
      "Marcapasos y otros dispositivos médicos implantables",
      "Máquinas de resonancia magnética (MRI) y tomografía computarizada (CT)",
      "Prótesis de extremidades e implantes ortopédicos",
      "Bombas de insulina y otros dispositivos médicos portátiles",
      "Equipo de laboratorio usado para pruebas diagnósticas",
    ],
    commonMisconceptions: [
      "Que los ingenieros biomédicos son médicos o trabajan directamente con pacientes — la mayoría trabaja en laboratorios, investigación y desarrollo, o manufactura, no en entornos clínicos.",
      "Que el campo es principalmente biología — es ingeniería primero, y una base sólida en matemáticas y física suele ser tan importante como el conocimiento de ciencias de la vida.",
      "Que los trabajos de nivel inicial son tan abundantes como en campos más establecidos como la ingeniería mecánica o eléctrica — esto varía, y vale la pena investigarlo con cuidado (ver la nota sobre competitividad más abajo).",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros biomédicos son médicos o trabajan directamente con pacientes.", reality: "La mayoría trabaja en laboratorios, investigación y desarrollo, o manufactura, no en entornos clínicos." },
      { myth: "El campo es principalmente biología.", reality: "Es ingeniería primero, y una base sólida en matemáticas y física suele ser tan importante como el conocimiento de ciencias de la vida." },
      { myth: "Los trabajos de nivel inicial son tan abundantes como en campos más establecidos como la ingeniería mecánica o eléctrica.", reality: "Esto varía mucho, y vale la pena investigarlo con cuidado — ver la sección sobre competitividad más abajo." },
    ],
    usefulSubjects: ["Biología", "Química", "Física", "Cálculo"],
    helpfulSkills: [
      "Comodidad combinando fundamentos de ingeniería con conceptos de biología y fisiología",
      "Documentación cuidadosa y detallada — los procesos de aprobación regulatoria requieren registros extensos y precisos",
      "Paciencia con plazos de desarrollo largos, ya que los dispositivos médicos a menudo tardan años en pasar del diseño al mercado",
      "Habilidades de colaboración, ya que los proyectos normalmente involucran a ingenieros, médicos clínicos y personal regulatorio trabajando juntos",
    ],
    typicalProjects: [
      "Diseñar y probar un prototipo de dispositivo médico para verificar su seguridad y funcionamiento",
      "Analizar cómo se comporta un material cuando se usa dentro del cuerpo (biocompatibilidad)",
      "Trabajar en la documentación requerida para una presentación regulatoria",
      "Realizar experimentos de laboratorio para validar cómo funciona un dispositivo o sensor",
    ],
    typicalWorkday:
      "Mucho trabajo de laboratorio — probar prototipos, realizar experimentos, documentar resultados — combinado con tiempo dedicado a papeleo regulatorio y reuniones con equipos multidisciplinarios como médicos clínicos y personal de calidad/regulación. Debido a que los dispositivos médicos están tan estrictamente regulados, la documentación exhaustiva es una parte más grande del trabajo diario aquí que en muchos otros campos de ingeniería.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "En el laboratorio", detail: "Probar un prototipo de dispositivo para verificar si funciona como se supone que debe hacerlo." },
        { time: "10:30 AM", label: "Realizando un experimento", detail: "Analizar cómo se comporta un material cuando se usa dentro del cuerpo — pruebas de biocompatibilidad." },
        { time: "12:30 PM", label: "Documentación", detail: "Escribir registros cuidadosos y precisos — la aprobación regulatoria depende de hacer esto exactamente bien." },
        { time: "2:00 PM", label: "Reunión entre equipos", detail: "Reunión con médicos clínicos y personal regulatorio sobre la siguiente ronda de pruebas del dispositivo." },
        { time: "3:30 PM", label: "Papeleo regulatorio", detail: "Trabajar en la documentación requerida para una presentación regulatoria formal." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Actualizar el cronograma del proyecto — la revisión regulatoria puede añadir meses que están fuera de tu control." },
      ],
      reflectionQuestion:
        "¿Cómo te sentirías sabiendo que el dispositivo que probaste hoy podría no llegar realmente a un paciente hasta dentro de dos o tres años más?",
    },
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "High",
      regulatoryBurden: "High",
      marketUncertainty: "High",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "High",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$109,370",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. Dadas las advertencias sobre el mercado laboral en la sección de competitividad de este campo, más arriba, trata esta cifra como contexto de referencia, no como una garantía.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Investiga cómo funciona un dispositivo que tú o alguien que conoces realmente usa (un marcapasos, un audífono o una bomba de insulina), y explícalo con tus propias palabras.",
        tool: "Todavía no necesitas herramientas especiales — solo curiosidad y fuentes confiables como libros de biblioteca o sitios científicos de confianza.",
        activity: "Busca un club de ciencias en tu escuela, o revisa si un museo de ciencias local tiene una exhibición de salud o tecnología médica.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Prueba un recurso de biología para principiantes para ver si el lado de las ciencias de la vida realmente te interesa, no solo el lado de la ingeniería.",
        tool: "Un recurso de biología gratuito y confiable (como el contenido de biología de Khan Academy) para probar tu interés antes de dedicarle tiempo de estudio.",
        activity: "Investiga si hay un capítulo de HOSA (Health Occupations Students of America) en tu escuela — cubre carreras de salud en general, no solo la ingeniería biomédica.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Investiga si tu escuela o un hospital cercano ofrece voluntariado, observación laboral (shadowing), o un programa de verano de ingeniería biomédica.",
        tool: "Ninguna herramienta específica todavía — esta etapa se trata más de conocer el campo que de usar una herramienta en particular.",
        activity: "Busca un capítulo de HOSA, un programa preuniversitario de ingeniería biomédica, o un programa de voluntariado para adolescentes en un hospital.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Manufactura de dispositivos médicos", "Farmacéutica", "Hospitales y sistemas de salud", "Instituciones de investigación", "Diagnóstico"],
    relatedMajors: ["Ingeniería Biomédica", "Bioingeniería", "Ingeniería Química (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Dispositivos Médicos", description: "Diseña y prueba dispositivos como marcapasos, bombas de insulina o instrumentos quirúrgicos." },
      { title: "Ingeniero/a Clínico/a", description: "Gestiona y da mantenimiento al equipo médico dentro de un hospital o sistema de salud." },
      { title: "Ingeniero/a de Biomateriales", description: "Desarrolla materiales seguros para usar dentro o sobre el cuerpo humano, como implantes o recubrimientos." },
      { title: "Especialista en Asuntos Regulatorios", description: "Gestiona el proceso de pruebas y documentación necesario para que un dispositivo médico sea aprobado para su uso — un camino común para ingenieros biomédicos que prefieren menos trabajo de laboratorio." },
    ],
    advantages: [
      "El trabajo tiene una conexión clara y significativa con mejorar la salud de las personas",
      "Altamente interdisciplinario — una buena opción si no quieres elegir entre la ingeniería y las ciencias de la vida",
      "Un área de la medicina en crecimiento a medida que los dispositivos, el diagnóstico y el tratamiento personalizado siguen avanzando",
    ],
    challenges: [
      "Los procesos de aprobación regulatoria son largos y exigentes, lo cual puede retrasar qué tan rápido tu trabajo llega a un uso real",
      "La naturaleza interdisciplinaria significa que se espera un conjunto de habilidades genuinamente amplio, lo que puede hacer que la carga académica sea más pesada que en carreras más especializadas",
      "Los puestos de nivel inicial pueden ser más competitivos en comparación con otros campos de ingeniería — ver la nota más abajo",
    ],
    thingsPeopleDislike: [
      "Los plazos lentos de regulación y aprobación pueden ser frustrantes si quieres ver resultados rápidos",
      "Requisitos pesados de documentación",
      "Algunos graduados terminan en puestos que solo son 'biomédicos' de forma vaga (como puestos generales de calidad o ingeniería mecánica) porque los puestos biomédicos específicos pueden ser más difíciles de encontrar recién egresado",
    ],
    howCompetitive:
      "Este es un campo donde las advertencias importan más que en la mayoría, así que trata esto como un punto de partida, no como una respuesta final. La ingeniería biomédica es una carrera popular, y comúnmente se reporta que el número de trabajos específicamente titulados 'ingeniero biomédico' no siempre ha crecido al mismo ritmo que la cantidad de estudiantes que se gradúan con este título — por eso algunos graduados pasan a puestos relacionados como ingeniería de calidad o asuntos regulatorios en lugar de un puesto estrictamente 'biomédico'. Esto varía mucho según la región y la especialización, y puede cambiar con el tiempo, así que investiga datos actuales y locales del mercado laboral en lugar de confiar en la reputación general.",
    beginnerActivities: [
      "Investiga cómo funciona realmente un dispositivo médico específico, como un marcapasos o una bomba de insulina",
      "Prueba un recurso de biología o anatomía para principiantes para ver si el lado de las ciencias de la vida realmente te interesa",
      "Investiga un centro de ciencias local, un programa de voluntariado en un hospital, o una oportunidad de observación laboral para ver equipo biomédico en un entorno real",
    ],
    selfReflectionQuestions: [
      "¿Me interesan igual la biología y la medicina que la ingeniería tradicional, o me inclino mucho más hacia una de las dos?",
      "¿Estoy bien con plazos de proyecto largos determinados por la aprobación regulatoria, no solo por la dificultad técnica?",
      "¿Estaría satisfecho/a en un puesto relacionado, como asuntos regulatorios o ingeniería de calidad, si un trabajo estrictamente 'biomédico' no está disponible de inmediato?",
      "¿Quiero un trabajo estrechamente ligado a los resultados de salud, aunque no trabaje directamente con pacientes?",
    ],
  },
  {
    slug: "software-engineering",
    name: "Ingeniería de Software",
    tagline: "Diseñar, construir y mantener los sistemas de software y aplicaciones que hacen funcionar casi todo lo digital.",
    whatItIs:
      "La ingeniería de software se trata de diseñar, construir, probar y mantener software — el código detrás de las aplicaciones, sitios web, sistemas operativos, y los sistemas dentro de otros productos de ingeniería, como el software de control de un auto o un dispositivo médico. A veces se enseña dentro de programas de ciencias de la computación y a veces como carrera propia, y la línea entre 'ingeniero de software,' 'científico de la computación,' y 'programador' se usa de forma inconsistente según la empresa.",
    whatEngineersWorkOn:
      "Los ingenieros de software escriben y revisan código, diseñan cómo encajan las diferentes partes de un sistema, prueban el software para detectar errores antes del lanzamiento, y mantienen y mejoran sistemas existentes — lo cual es una parte mucho más grande del trabajo de lo que la gente espera, ya que la mayoría del código no se escribe desde cero, sino que se construye sobre sistemas existentes o se modifica dentro de ellos. Gran parte del trabajo real es leer el código de otras personas, comunicarse con el equipo, y descubrir por qué algo no funciona como se esperaba.",
    realWorldExamples: [
      "Aplicaciones móviles y sitios web",
      "Sistemas operativos y el software que corre dentro de dispositivos de consumo",
      "Sistemas backend que procesan transacciones, como plataformas bancarias o de comercio electrónico",
      "Software embebido dentro de autos, electrodomésticos y dispositivos médicos",
      "Herramientas para desarrolladores e infraestructura que otras empresas usan para construir su propio software",
    ],
    commonMisconceptions: [
      "Que se trata principalmente de saber muchos lenguajes de programación — resolver problemas y diseñar sistemas importa más que memorizar sintaxis, y la mayoría de los ingenieros en activo usan documentación y referencias constantemente.",
      "Que programas de forma independiente, todo el día, todos los días — la mayoría de los puestos implican tiempo real en reuniones, revisión de código, planificación, y comunicación con personas que no son ingenieros.",
      "Que es un camino fácil o garantizado hacia un salario alto sin importar el esfuerzo — el mercado laboral ha cambiado en los últimos años y es más competitivo de lo que sugiere la narrativa popular (ver la nota más abajo).",
    ],
    mythsAndRealities: [
      { myth: "Se trata principalmente de saber muchos lenguajes de programación.", reality: "Resolver problemas y diseñar sistemas importa más que memorizar sintaxis, y la mayoría de los ingenieros en activo usan documentación y referencias constantemente." },
      { myth: "Programas de forma independiente, todo el día, todos los días.", reality: "La mayoría de los puestos implican tiempo real en reuniones, revisión de código, planificación, y comunicación con personas que no son ingenieros." },
      { myth: "Es un camino fácil o garantizado hacia un salario alto sin importar el esfuerzo.", reality: "El mercado laboral ha cambiado en los últimos años y es más competitivo de lo que sugiere la narrativa popular — ver la nota más abajo." },
    ],
    usefulSubjects: ["Cualquier curso de programación o ciencias de la computación disponible", "Álgebra y matemáticas discretas, si está disponible", "Cursos basados en lógica, como lógica formal o debate, también pueden ayudar"],
    helpfulSkills: [
      "Dividir problemas grandes y vagos en pasos más pequeños y bien definidos",
      "Paciencia para depurar — la mayor parte del trabajo es descubrir por qué algo no funciona, no escribir código nuevo",
      "Comodidad leyendo y modificando código que alguien más escribió, ya que la mayoría del trabajo profesional ocurre dentro de bases de código ya existentes",
      "Habilidades de comunicación, ya que los ingenieros constantemente explican decisiones técnicas a su equipo o a personas sin conocimientos técnicos",
    ],
    typicalProjects: [
      "Construir una aplicación o sitio web pequeño desde cero para aprender un lenguaje o framework",
      "Arreglar un error en código existente y descubrir qué lo causó",
      "Escribir pruebas para asegurarse de que una pieza de software se comporte correctamente",
      "Contribuir un pequeño cambio a un proyecto de código abierto",
    ],
    typicalWorkday:
      "Mayormente frente a una computadora — escribiendo código, revisando el código de otras personas, asistiendo a reuniones de planificación o standup, e investigando cómo resolver un problema técnico específico. Contrario a la imagen del 'programador genio solitario', la mayoría de la ingeniería de software es un proceso colaborativo, en equipo, que implica mucha comunicación escrita y verbal.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Reunión standup", detail: "Un chequeo rápido del equipo sobre en qué está trabajando cada quien y qué los está frenando." },
        { time: "9:15 AM", label: "Escribiendo código", detail: "Trabajando en una función pequeña — la mayor parte construida sobre código que ya existe." },
        { time: "10:30 AM", label: "Revisión de código", detail: "Leyendo y revisando el código de un compañero de equipo antes de que se publique." },
        { time: "12:30 PM", label: "Depuración", detail: "Algo no funciona como se esperaba, y todavía no está claro por qué." },
        { time: "2:00 PM", label: "Resolución de problemas", detail: "Investigando cómo otras personas resolvieron un problema técnico similar antes." },
        { time: "3:30 PM", label: "De vuelta a la solución", detail: "Probando y refinando la solución de más temprano en el día." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Actualizando al equipo sobre el progreso antes de desconectarse." },
      ],
      reflectionQuestion:
        "¿Este día sonó más a resolver problemas en equipo, o a escribir código solo? ¿Cuál se parece más a lo que imaginabas?",
    },
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "Low",
      marketUncertainty: "High",
      coding: "High",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$135,980",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región. Dadas las advertencias sobre el mercado laboral de este campo mencionadas más arriba, una mediana histórica alta no garantiza los resultados actuales para puestos de nivel inicial.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Prueba Scratch para construir una animación o juego muy simple — no necesitas escribir código real.",
        tool: "Scratch — gratis, hecho por el MIT, diseñado específicamente para principiantes.",
        activity: "Busca un club de programación en tu escuela, o revisa si tu biblioteca local ofrece un programa de programación para principiantes.",
        relatedField: "electrical-engineering",
      },
      "13-15": {
        project: "Prueba un curso gratuito de programación para principiantes y construye un proyecto pequeño, como una calculadora o una lista de tareas.",
        tool: "Un curso gratuito de Python para principiantes, ya que suele ser el primero que se enseña.",
        activity: "Investiga si hay un club de programación en tu escuela o una sede local de una organización de programación para principiantes.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Contribuye un pequeño cambio a un proyecto real de código abierto, o construye un proyecto personal más grande y publícalo.",
        tool: "GitHub — el lugar estándar donde los ingenieros de software guardan y comparten código.",
        activity: "Revisa si tu escuela ofrece Ciencias de la Computación AP, e investiga un programa de verano de programación o una pasantía si hay alguna disponible.",
        relatedField: "electrical-engineering",
      },
    },
    industries: ["Empresas de tecnología", "Finanzas", "Salud", "Videojuegos", "Cualquier industria con un producto digital, que hoy en día es la mayoría"],
    relatedMajors: ["Ciencias de la Computación", "Ingeniería de Software", "Ingeniería en Computación"],
    careerPaths: [
      { title: "Ingeniero/a Frontend", description: "Construye las partes de un sitio web o app que los usuarios ven y con las que interactúan directamente." },
      { title: "Ingeniero/a Backend", description: "Construye los sistemas del lado del servidor que manejan datos, lógica y solicitudes detrás de escena." },
      { title: "Ingeniero/a Móvil", description: "Construye aplicaciones específicamente para teléfonos y tablets, como apps de iOS o Android." },
      { title: "Ingeniero/a de DevOps / Infraestructura", description: "Construye y mantiene los sistemas que permiten a otros ingenieros publicar y ejecutar software de forma confiable." },
    ],
    advantages: [
      "Las habilidades se transfieren ampliamente a casi cualquier industria, ya que la mayoría de las empresas dependen de algún software",
      "El trabajo remoto es más común en este campo que en la mayoría de las otras disciplinas de ingeniería",
      "Ciclos de retroalimentación relativamente rápidos — a menudo puedes construir y probar algo tú mismo sin necesitar equipo costoso o acceso a un laboratorio",
    ],
    challenges: [
      "El campo cambia rápidamente — las herramientas y mejores prácticas consideradas estándar hoy pueden quedar obsoletas en unos años, así que el aprendizaje continuo por cuenta propia es parte del trabajo",
      "El mercado laboral de nivel inicial se ha vuelto notablemente más competitivo en los últimos años (ver la nota más abajo)",
      "Pasar largos periodos sentado frente a una computadora puede afectar físicamente si no incluyes descansos y movimiento",
    ],
    thingsPeopleDislike: [
      "La necesidad constante de aprender nuevas herramientas y tecnologías solo para mantenerse al día",
      "Las reuniones y la carga de procesos en empresas grandes pueden sentirse como que frenan la construcción real",
      "La estabilidad laboral puede sentirse menos segura de lo que la gente asume — la industria ha pasado por olas visibles de despidos en los últimos años",
    ],
    howCompetitive:
      "Esto ha cambiado de forma significativa en los últimos años, así que trata con cuidado las narrativas antiguas sobre este campo. Durante mucho tiempo, la ingeniería de software se vio como un camino confiablemente bien pagado y de alta demanda, pero la contratación de nivel inicial se ha vuelto considerablemente más competitiva debido a una combinación de más graduados entrando al campo, un mayor uso de herramientas de IA para algunas tareas de programación, y despidos más amplios en la industria tecnológica. Sigue siendo un campo grande con oportunidades reales, pero 'simplemente aprende a programar' es una garantía mucho menos confiable de lo que solía ser — investiga las tendencias actuales de contratación en lugar de confiar en esto o en la reputación general antigua.",
    beginnerActivities: [
      "Prueba un curso gratuito de programación para principiantes — muchos existen específicamente para Python o JavaScript",
      "Construye un proyecto muy pequeño, como una calculadora simple o una app de lista de tareas",
      "Prueba un sitio de práctica de programación para resolver pequeños acertijos de lógica",
    ],
    selfReflectionQuestions: [
      "¿Disfruto el proceso de depurar — descubrir con paciencia por qué algo no funciona?",
      "¿Estoy cómodo/a con un campo que cambia rápidamente y requiere aprendizaje continuo?",
      "¿Quiero un puesto altamente colaborativo, trabajando de cerca con un equipo, en lugar de trabajar solo la mayor parte del tiempo?",
      "¿Estoy eligiendo este campo porque genuinamente me interesa construir cosas con código, o principalmente por suposiciones sobre el salario o la estabilidad laboral que quizás ya no sean tan ciertas como antes?",
    ],
  },
  {
    slug: "aerospace-engineering",
    name: "Ingeniería Aeroespacial",
    tagline: "Diseñar y probar las aeronaves, naves espaciales y sistemas que hacen que las cosas despeguen — y que se mantengan seguras en el aire.",
    whatItIs:
      "La ingeniería aeroespacial se trata de diseñar, construir y probar vehículos que vuelan — desde aviones comerciales hasta satélites, cohetes y drones. Se divide en dos áreas que se superponen: la ingeniería aeronáutica (cosas que vuelan dentro de la atmósfera) y la ingeniería astronáutica (naves espaciales y cosas que operan más allá de ella), aunque la mayoría de los programas y trabajos combinan ambas.",
    whatEngineersWorkOn:
      "Los ingenieros aeroespaciales diseñan componentes y sistemas, hacen simulaciones para predecir cómo se comportará un diseño bajo fuerzas extremas como alta velocidad, presión o temperatura, coordinan con equipos de manufactura para descubrir cómo se puede construir algo realmente, y evalúan los diseños contra requisitos estrictos de seguridad y regulación. Gran parte del trabajo es hacer pruebas — llevar un diseño a sus límites en un laboratorio o simulación antes de confiarle jamás un vuelo real.",
    realWorldExamples: [
      "Alas y estructuras de fuselaje de aviones comerciales",
      "Sistemas de propulsión y comunicación de satélites",
      "Motores de cohetes y vehículos de lanzamiento",
      "Drones y sistemas de aeronaves no tripuladas",
      "Sistemas de soporte vital y control térmico de naves espaciales",
    ],
    commonMisconceptions: [
      "Que todos los ingenieros aeroespaciales trabajan para la NASA o una empresa espacial — la mayoría trabaja en aviación comercial, defensa, o en componentes para sistemas más grandes, no necesariamente naves espaciales.",
      "Que ya necesitas entender de cohetes — como en otros campos de ingeniería, la profundidad técnica se enseña durante la carrera, no se espera de antemano.",
      "Que es lo mismo que ser piloto o astronauta — los ingenieros aeroespaciales diseñan y prueban los vehículos; no necesariamente los pilotean.",
    ],
    mythsAndRealities: [
      { myth: "Todos los ingenieros aeroespaciales trabajan para la NASA o una empresa espacial.", reality: "La mayoría trabaja en aviación comercial, defensa, o en componentes para sistemas más grandes, no necesariamente naves espaciales." },
      { myth: "Ya necesitas entender de cohetes.", reality: "Como en otros campos de ingeniería, la profundidad técnica se enseña durante la carrera, no se espera de antemano." },
      { myth: "Es lo mismo que ser piloto o astronauta.", reality: "Los ingenieros aeroespaciales diseñan y prueban los vehículos; no necesariamente los pilotean." },
    ],
    usefulSubjects: ["Física (especialmente mecánica y termodinámica)", "Cálculo", "Química", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Comodidad con matemáticas y física a un nivel exigente — los márgenes de error son más pequeños que en la mayoría de los otros campos",
      "Paciencia para pruebas y simulaciones extensas antes de que algo se construya físicamente",
      "Atención al detalle, ya que un pequeño error puede tener consecuencias graves de seguridad",
      "Conocimientos básicos de computación para software de CAD y simulación",
    ],
    typicalProjects: [
      "Simular cómo se comporta un diseño de ala bajo diferentes velocidades y esfuerzos",
      "Analizar la capacidad de un material para resistir calor o presión extremos",
      "Revisar datos de prueba de un túnel de viento o una prueba de vuelo",
      "Trabajar en la documentación requerida para certificar un diseño como seguro",
    ],
    typicalWorkday:
      "Mayormente en la oficina y el laboratorio — corriendo simulaciones, revisando diseños, y analizando datos de prueba — con tiempo periódico en un laboratorio o instalación de pruebas, y viajes en algunos puestos. Los proyectos aeroespaciales suelen ser esfuerzos grandes de varios años, así que gran parte del trabajo diario es una pequeña pieza de un sistema mucho más grande, coordinado con muchos otros ingenieros.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Revisión de diseño", detail: "Revisar el diseño de un componente contra los requisitos estructurales y de seguridad del proyecto." },
        { time: "10:30 AM", label: "Simulación", detail: "Correr una simulación para ver cómo se comporta una pieza bajo estrés o temperatura extremos." },
        { time: "12:30 PM", label: "Coordinación de equipo", detail: "Reunión con equipos de manufactura y otros equipos de ingeniería — un solo proyecto aeroespacial involucra a mucha gente." },
        { time: "2:00 PM", label: "Revisión de datos de prueba", detail: "Analizar los resultados de una prueba reciente de túnel de viento o de laboratorio contra lo que predijo la simulación." },
        { time: "3:30 PM", label: "Documentación", detail: "Redactar los hallazgos para el registro de seguridad y certificación — requerido antes de que algo avance." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Actualizar el cronograma del proyecto y señalar cualquier problema para mañana." },
      ],
      reflectionQuestion:
        "¿Estarías bien sabiendo que tu parte de un proyecto podría no volar hasta dentro de años, y que la mayor parte de tu día es hacer pruebas y documentación en lugar de construir?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$134,960",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/aerospace-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. El salario aeroespacial también puede variar bastante entre puestos del sector de defensa y de aviación comercial.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Construye y vuela un avión de papel o planeador simple, y experimenta con qué cambia qué tan lejos o recto vuela.",
        tool: "Todavía no necesitas herramientas especiales — solo papel y experimentación.",
        activity: "Busca un club de STEM en tu escuela, o revisa si un museo de ciencias local tiene una exhibición de aviación o espacio.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Prueba una herramienta de simulación gratuita para ver cómo la forma o el ángulo del ala afecta la sustentación.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de fuerzas y movimiento relevantes para el vuelo.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos relacionados con aviación o cohetería.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Construye y lanza un cohete modelo básico, registrando cómo las decisiones de diseño afectan la altitud y la estabilidad.",
        tool: "Un kit de cohetería modelo de una marca reconocida, siguiendo las pautas de seguridad estándar.",
        activity: "Busca un programa preuniversitario de ingeniería aeroespacial o un programa de Civil Air Patrol, si hay uno disponible.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Aviación comercial", "Defensa", "Exploración espacial", "Comunicaciones satelitales", "Sistemas no tripulados/drones"],
    relatedMajors: ["Ingeniería Aeroespacial", "Ingeniería Aeronáutica", "Ingeniería Astronáutica"],
    careerPaths: [
      { title: "Ingeniero/a de Aerodinámica", description: "Analiza cómo fluye el aire alrededor de un vehículo para mejorar el rendimiento, la estabilidad y la eficiencia de combustible." },
      { title: "Ingeniero/a de Estructuras", description: "Diseña la estructura física de una aeronave o nave espacial para resistir las fuerzas de vuelo y lanzamiento." },
      { title: "Ingeniero/a de Propulsión", description: "Diseña y prueba los motores o sistemas de propulsión que impulsan el vuelo." },
      { title: "Ingeniero/a de Sistemas", description: "Coordina cómo funcionan juntos los muchos subsistemas de un gran proyecto aeroespacial — estructuras, propulsión, aviónica." },
    ],
    advantages: [
      "Trabajar en algunos de los problemas de ingeniería técnicamente más exigentes que existen",
      "Fuerte crecimiento laboral registrado por el gobierno — la Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 8% de 2025 a 2035, más rápido que el promedio de todas las ocupaciones",
      "Un campo con una conexión directa a logros importantes y de alta visibilidad, desde el vuelo comercial hasta la exploración espacial",
    ],
    challenges: [
      "Carga de matemáticas y física extremadamente exigente, a menudo más intensiva que otras carreras de ingeniería",
      "Los márgenes de seguridad de alto riesgo implican procesos de diseño y prueba lentos y muy revisados",
      "Los proyectos suelen ser grandes y de varios años, así que un ingeniero individual puede trabajar en una pequeña pieza de un sistema mucho más grande durante mucho tiempo",
    ],
    thingsPeopleDislike: [
      "Requisitos pesados de documentación y certificación antes de que cualquier diseño pueda avanzar",
      "La industria ha sido históricamente cíclica — ligada a los presupuestos de defensa y la demanda de aviación comercial, ambos de los cuales pueden cambiar con el gasto gubernamental y la economía en general",
      "Las grandes organizaciones burocráticas, especialmente en contratación de defensa, pueden moverse lentamente en comparación con empresas más pequeñas",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 8% para ingenieros aeroespaciales de 2025 a 2035 — mucho más rápido que el promedio de todas las ocupaciones — con cerca de 3,800 vacantes proyectadas por año durante esa década, impulsadas en parte por rediseños de aeronaves y la creciente industria de drones y satélites. Dicho esto, la contratación en el sector aeroespacial ha sido históricamente cíclica, ligada de cerca al gasto de defensa y a los altibajos de la propia industria de aviación comercial, y gran parte de la industria requiere ciudadanía o autorización de seguridad para puestos relacionados con defensa en algunos países. Investiga el mercado actual y cualquier requisito de ciudadanía o autorización en tu país y sector específico antes de tomar decisiones.",
    beginnerActivities: [
      "Construye y vuela un avión de papel, experimentando con diferentes formas de alas y dobleces",
      "Prueba una herramienta de simulación gratuita para ver cómo la forma o el ángulo del ala afecta la sustentación",
      "Construye y lanza un cohete modelo básico, siguiendo las pautas de seguridad estándar",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con una de las cargas de matemáticas y física más exigentes de la ingeniería?",
      "¿Estoy bien con procesos de diseño lentos y muy revisados donde la seguridad va antes que la velocidad?",
      "¿Estaría satisfecho/a trabajando en una pieza de un proyecto mucho más grande y de varios años?",
      "¿Me interesa este campo específicamente, o me atrae principalmente la idea general del espacio y el vuelo?",
    ],
  },
  {
    slug: "chemical-engineering",
    name: "Ingeniería Química",
    tagline: "Aplicar la química y la física para diseñar los procesos y equipos que convierten materias primas en todo, desde combustible hasta medicinas y plásticos.",
    whatItIs:
      "La ingeniería química se trata de diseñar y operar los procesos a gran escala que convierten materias primas en productos utilizables — combustibles, plásticos, productos farmacéuticos, alimentos y químicos industriales. Está en la intersección entre la química, la física y la ingeniería tradicional, enfocada menos en inventar nuevas reacciones químicas y más en descubrir cómo llevarlas a cabo de forma segura y eficiente a una escala masiva.",
    whatEngineersWorkOn:
      "Los ingenieros químicos diseñan equipos y procesos para manufactura, realizan experimentos y simulaciones para descubrir la forma más eficiente y segura de producir algo, establecen procedimientos de seguridad para el manejo de materiales peligrosos, y solucionan problemas cuando un proceso de producción no se comporta como se esperaba. Gran parte del trabajo implica escalar algo que funciona en un laboratorio pequeño hasta convertirlo en un proceso que puede funcionar continuamente en una planta industrial de tamaño completo.",
    realWorldExamples: [
      "Refinación de petróleo y producción de combustible",
      "Procesos de manufactura farmacéutica",
      "Producción de plásticos y polímeros",
      "Sistemas de tratamiento de agua y desalinización",
      "Plantas de procesamiento de alimentos y bebidas",
    ],
    commonMisconceptions: [
      "Que los ingenieros químicos trabajan principalmente en un laboratorio mezclando químicos — la mayor parte del trabajo es diseñar y operar procesos industriales a gran escala, no química de laboratorio.",
      "Que es lo mismo que ser químico — los químicos normalmente se enfocan en descubrir y entender reacciones; los ingenieros químicos se enfocan en cómo llevarlas a cabo de forma segura y eficiente a gran escala.",
      "Que es un campo de nicho — los ingenieros químicos trabajan en una gama muy amplia de industrias, desde energía hasta farmacéutica y producción de alimentos.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros químicos trabajan principalmente en un laboratorio mezclando químicos.", reality: "La mayor parte del trabajo es diseñar y operar procesos industriales a gran escala, no química de laboratorio." },
      { myth: "Es lo mismo que ser químico.", reality: "Los químicos normalmente se enfocan en descubrir y entender reacciones; los ingenieros químicos se enfocan en cómo llevarlas a cabo de forma segura y eficiente a gran escala." },
      { myth: "Es un campo de nicho.", reality: "Los ingenieros químicos trabajan en una gama muy amplia de industrias, desde energía hasta farmacéutica y producción de alimentos." },
    ],
    usefulSubjects: ["Química", "Física", "Cálculo", "Biología, si está disponible"],
    helpfulSkills: [
      "Una base sólida en química, ya que sustenta la mayor parte del trabajo de diseño de procesos",
      "Comodidad con el pensamiento crítico de seguridad — muchos procesos químicos involucran materiales peligrosos, alta presión o alta temperatura",
      "Pensamiento sistémico — entender cómo un cambio en una parte de un proceso afecta todo lo que viene después",
      "Conocimientos básicos de computación para software de simulación de procesos",
    ],
    typicalProjects: [
      "Diseñar equipo para escalar de forma segura un proceso de laboratorio a producción industrial",
      "Analizar un proceso de producción para encontrar formas de hacerlo más eficiente o menos derrochador",
      "Revisar los procedimientos de seguridad para el manejo de un material peligroso",
      "Solucionar por qué una línea de producción no está generando el rendimiento esperado",
    ],
    typicalWorkday:
      "Una mezcla de trabajo de diseño de procesos y simulación en la oficina, y tiempo en el piso de la planta monitoreando y solucionando problemas de procesos de producción activos. El trabajo de revisión de seguridad y cumplimiento normativo es una parte más grande del trabajo de lo que la gente espera, ya que muchos procesos químicos involucran materiales peligrosos.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Recorrido por la planta", detail: "Revisar un proceso de producción activo y hablar con los operadores de la planta sobre cómo está funcionando." },
        { time: "9:30 AM", label: "Revisión del proceso", detail: "Analizar datos de la corrida de producción de ayer para revisar el rendimiento y la eficiencia." },
        { time: "11:00 AM", label: "Revisión de seguridad", detail: "Revisar los procedimientos para el manejo de un material peligroso usado en el proceso." },
        { time: "1:00 PM", label: "Simulación", detail: "Modelar un cambio propuesto al proceso para ver si mejora la eficiencia antes de probarlo de verdad." },
        { time: "2:30 PM", label: "Solución de problemas", detail: "Una línea de producción no está alcanzando su producción esperada, y no está claro de inmediato por qué." },
        { time: "4:00 PM", label: "Documentación", detail: "Redactar los hallazgos de hoy para los registros de seguridad y procesos de la planta." },
      ],
      reflectionQuestion:
        "¿Cómo te sentirías siendo responsable de los procedimientos de seguridad de un proceso que podría ser genuinamente peligroso si algo sale mal?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$125,040",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/chemical-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. El salario puede variar bastante según la industria en la que trabajes, como petróleo y gas frente a farmacéutica.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Prueba un experimento simple de química de cocina, supervisado por un adulto, como hacer un polímero básico, y piensa en cómo tendrías que hacerlo de forma segura a una escala mucho mayor.",
        tool: "Todavía no necesitas herramientas especiales — solo experimentos de química casera supervisados.",
        activity: "Busca un club de STEM o química en tu escuela, o una exhibición de química en un museo de ciencias local.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Prueba una herramienta gratuita de simulación química para ver cómo cambiar condiciones como la temperatura o la concentración afecta una reacción.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de química y estados de la materia.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos relacionados con química.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Investiga cómo se fabrica realmente un producto cotidiano específico, como botellas de plástico o combustible, a escala industrial, usando fuentes públicas disponibles.",
        tool: "Ninguna herramienta específica todavía — esta etapa se trata más de conocer el pensamiento a escala industrial que de usar una herramienta en particular.",
        activity: "Busca un programa preuniversitario de ingeniería química o un campamento de verano de ingeniería en una universidad, si hay uno disponible.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Petróleo y gas", "Farmacéutica", "Alimentos y bebidas", "Manufactura de plásticos y materiales", "Tratamiento de agua", "Productos de consumo"],
    relatedMajors: ["Ingeniería Química", "Ciencia e Ingeniería de Materiales", "Ingeniería Bioquímica"],
    careerPaths: [
      { title: "Ingeniero/a de Procesos", description: "Diseña y optimiza los pasos de un proceso de manufactura para que sea seguro, eficiente y consistente." },
      { title: "Ingeniero/a de Seguridad de Procesos", description: "Se enfoca específicamente en identificar y reducir riesgos en procesos químicos industriales." },
      { title: "Ingeniero/a de Planta/Producción", description: "Trabaja en el sitio de una planta de manufactura, manteniendo los procesos de producción activos funcionando sin problemas." },
      { title: "Ingeniero/a de Investigación y Desarrollo", description: "Trabaja en desarrollar procesos nuevos o mejorados, a menudo conectando la química a escala de laboratorio con la ingeniería a escala industrial." },
    ],
    advantages: [
      "Las habilidades se transfieren a una gama muy amplia de industrias, desde energía hasta farmacéutica y producción de alimentos",
      "Una base sólida tanto en química como en ingeniería tradicional abre múltiples direcciones de carrera",
      "El trabajo tiene una conexión directa con productos usados en la vida diaria",
    ],
    challenges: [
      "Carga pesada de química, física y matemáticas, a menudo considerada una de las carreras de ingeniería más exigentes académicamente",
      "Trabajar con materiales peligrosos significa que la seguridad tiene que ir antes que la velocidad o la conveniencia, lo cual puede ralentizar el trabajo",
      "Muchos puestos están ligados a industrias específicas, como petróleo y gas, que pueden pasar por ciclos significativos de auge y caída",
    ],
    thingsPeopleDislike: [
      "Requisitos pesados de documentación de seguridad y regulación",
      "Algunos puestos, especialmente en plantas de producción, pueden no estar ubicados en ciudades importantes",
      "Industrias como petróleo y gas pueden ser económicamente cíclicas, lo cual afecta la estabilidad laboral en esos sectores específicos",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 5% para ingenieros químicos de 2025 a 2035 — más rápido que el promedio de todas las ocupaciones — con cerca de 1,100 vacantes proyectadas por año durante esa década, muchas resultado de trabajadores jubilándose o cambiando de carrera. Ese es un número menor de vacantes anuales que en algunos otros campos de ingeniería, ya que la ingeniería química es un campo comparativamente más pequeño en general. La demanda y el salario pueden variar mucho dependiendo de la industria en la que trabajes y su ciclo económico actual — investiga el mercado actual en tu país e industria específicos antes de tomar decisiones.",
    beginnerActivities: [
      "Prueba un experimento simple de química de cocina, supervisado por un adulto, como hacer un polímero básico",
      "Investiga cómo se fabrica a escala industrial un producto cotidiano específico, como plástico o combustible",
      "Prueba una herramienta gratuita de simulación química para ver cómo cambiar las condiciones afecta una reacción",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con una carga pesada de química y matemáticas, además de los temas tradicionales de ingeniería?",
      "¿Estaría bien siendo responsable de los procedimientos de seguridad relacionados con materiales potencialmente peligrosos?",
      "¿Me interesa cómo se hacen las cosas a gran escala industrial, no solo cómo funcionan en teoría?",
      "¿Estaría bien si mi trabajo estuviera ubicado en una planta industrial en lugar de una oficina en una ciudad importante?",
    ],
  },
];
