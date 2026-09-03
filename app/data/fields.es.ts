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
];
