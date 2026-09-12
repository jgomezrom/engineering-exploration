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
      "Máquinas y sistemas que se mueven, generan energía y le dan forma al mundo físico — diseñados y construidos desde cero.",
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
      "middle-school": {
        project: "Construye una catapulta simple o un sistema de poleas con materiales de tu casa y observa qué tan lejos o cuánto puede mover.",
        tool: "Todavía no necesitas herramientas especiales — solo intenta construir con lo que tengas en casa.",
        activity: "Busca un club de robótica LEGO o de STEM en tu escuela, o un equipo de FIRST LEGO League, si hay uno cerca de ti.",
        relatedField: "electrical-engineering",
      },
      "high-school": {
        project: "Diseña una pieza simple en una herramienta CAD gratuita basada en el navegador, y piensa en cómo la construirías de verdad.",
        tool: "Tinkercad — gratis, basado en el navegador, no necesita instalación.",
        activity: "Investiga si hay un equipo de FIRST Tech Challenge o VEX Robotics en tu escuela.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Diseña y modela una pieza o mecanismo más completo, pensando en las tolerancias y en cómo se fabricaría realmente.",
        tool: "Fusion 360 (gratis para uso personal o educativo) o SolidWorks si tu escuela te da acceso.",
        activity: "Busca un capítulo estudiantil de ASME (American Society of Mechanical Engineers), un equipo de proyecto como Formula SAE o Baja SAE, o una posición de investigación de pregrado en tu departamento.",
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
    tagline: "Cómo se generan, transportan y controlan de verdad la electricidad y las señales electrónicas.",
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
      "El kit de herramientas abarca software de diseño de circuitos, equipo de prueba como osciloscopios y multímetros, y — en muchos puestos — escribir software embebido. Depurar un circuito que no funciona como se esperaba es una parte muy normal y recurrente del trabajo.",
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
      "middle-school": {
        project: "Construye un circuito simple con un kit de circuitos de encaje, una batería y un LED.",
        tool: "Un kit de circuitos de encaje para principiantes — económico, fácil de conseguir, no necesita soldadura.",
        activity: "Busca un club de STEM en tu escuela o un taller de electrónica para principiantes en una biblioteca local o espacio maker, si hay uno disponible.",
        relatedField: "software-engineering",
      },
      "high-school": {
        project: "Intenta construir un circuito básico de LED, y luego cambia la resistencia para ver qué pasa.",
        tool: "Un simulador de circuitos gratuito en línea como Tinkercad Circuits, para que puedas probar ideas antes de comprar piezas.",
        activity: "Investiga si hay un equipo de FIRST Tech Challenge o un club de robótica que involucre cableado y electrónica en tu escuela.",
        relatedField: "software-engineering",
      },
      "college": {
        project: "Prueba un proyecto de Arduino para principiantes, como hacer que un LED parpadee en un horario o leer un sensor.",
        tool: "Arduino — una plataforma de microcontrolador muy usada y accesible para principiantes.",
        activity: "Busca un capítulo estudiantil de IEEE, un equipo de proyecto que involucre diseño de circuitos, o una posición de investigación de pregrado en tu departamento.",
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
    tagline: "La infraestructura que hace que la vida diaria funcione — carreteras, puentes, sistemas de agua y los edificios que te rodean — planificada y mantenida en pie.",
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
      "El trabajo de diseño en la oficina — haciendo cálculos estructurales o hidráulicos, revisando planos, escribiendo informes — se alterna con visitas al sitio para revisar construcción activa o inspeccionar infraestructura existente. Los ingenieros civiles del sector público a menudo pasan bastante tiempo en reuniones con funcionarios municipales o miembros de la comunidad, ya que los proyectos de infraestructura suelen ser financiados y revisados públicamente.",
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
      "middle-school": {
        project: "Construye un pequeño puente con palitos de madera o espagueti y observa cuánto peso puede sostener.",
        tool: "Todavía no necesitas herramientas especiales — solo materiales de construcción caseros.",
        activity: "Busca un club de STEM en tu escuela, o revisa si una biblioteca local o museo de ciencias ofrece un taller de construcción de puentes o estructuras.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Prueba una herramienta gratuita en línea que te permita probar diseños simples de armaduras o vigas antes de construir algo físico.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de fuerzas y estructuras.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos de construcción de puentes o ingeniería estructural.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Elige un puente o edificio por el que realmente pases y, usando fuentes públicas, investiga aproximadamente cómo fue diseñado para soportar sus cargas.",
        tool: "Software básico de CAD o dibujo técnico, si tu escuela ofrece una clase de dibujo o diseño de ingeniería.",
        activity: "Busca un capítulo estudiantil de ASCE (American Society of Civil Engineers), un equipo de competencia como Concrete Canoe o Steel Bridge, o unas prácticas profesionales con una empresa de ingeniería local.",
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
      "middle-school": {
        project: "Investiga cómo funciona un dispositivo que tú o alguien que conoces realmente usa (un marcapasos, un audífono o una bomba de insulina), y explícalo con tus propias palabras.",
        tool: "Todavía no necesitas herramientas especiales — solo curiosidad y fuentes confiables como libros de biblioteca o sitios científicos de confianza.",
        activity: "Busca un club de ciencias en tu escuela, o revisa si un museo de ciencias local tiene una exhibición de salud o tecnología médica.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Prueba un recurso de biología para principiantes para ver si el lado de las ciencias de la vida realmente te interesa, no solo el lado de la ingeniería.",
        tool: "Un recurso de biología gratuito y confiable (como el contenido de biología de Khan Academy) para probar tu interés antes de dedicarle tiempo de estudio.",
        activity: "Investiga si hay un capítulo de HOSA (Health Occupations Students of America) en tu escuela — cubre carreras de salud en general, no solo la ingeniería biomédica.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Investiga si tu escuela o un hospital cercano ofrece voluntariado, observación laboral (shadowing), o un programa de verano de ingeniería biomédica.",
        tool: "Ninguna herramienta específica todavía — esta etapa se trata más de conocer el campo que de usar una herramienta en particular.",
        activity: "Busca un capítulo estudiantil de BMES (Biomedical Engineering Society), una posición de investigación de pregrado en un laboratorio biomédico o de bioingeniería, o un programa de observación clínica o prácticas profesionales.",
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
    tagline: "Los sistemas de software y aplicaciones que hacen funcionar casi todo lo digital — diseñados, construidos y mantenidos.",
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
      "middle-school": {
        project: "Prueba Scratch para construir una animación o juego muy simple — no necesitas escribir código real.",
        tool: "Scratch — gratis, hecho por el MIT, diseñado específicamente para principiantes.",
        activity: "Busca un club de programación en tu escuela, o revisa si tu biblioteca local ofrece un programa de programación para principiantes.",
        relatedField: "electrical-engineering",
      },
      "high-school": {
        project: "Prueba un curso gratuito de programación para principiantes y construye un proyecto pequeño, como una calculadora o una lista de tareas.",
        tool: "Un curso gratuito de Python para principiantes, ya que suele ser el primero que se enseña.",
        activity: "Investiga si hay un club de programación en tu escuela o una sede local de una organización de programación para principiantes.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Contribuye un pequeño cambio a un proyecto real de código abierto, o construye un proyecto personal más grande y publícalo.",
        tool: "GitHub — el lugar estándar donde los ingenieros de software guardan y comparten código.",
        activity: "Busca un capítulo estudiantil de ACM, contribuye a un proyecto de código abierto, o postúlate a unas prácticas profesionales de verano en software.",
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
    tagline: "Las aeronaves, naves espaciales y sistemas que hacen que las cosas despeguen — diseñados y probados para que se mantengan seguros en el aire.",
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
      "middle-school": {
        project: "Construye y vuela un avión de papel o planeador simple, y experimenta con qué cambia qué tan lejos o recto vuela.",
        tool: "Todavía no necesitas herramientas especiales — solo papel y experimentación.",
        activity: "Busca un club de STEM en tu escuela, o revisa si un museo de ciencias local tiene una exhibición de aviación o espacio.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Prueba una herramienta de simulación gratuita para ver cómo la forma o el ángulo del ala afecta la sustentación.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de fuerzas y movimiento relevantes para el vuelo.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos relacionados con aviación o cohetería.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Construye y lanza un cohete modelo básico, registrando cómo las decisiones de diseño afectan la altitud y la estabilidad.",
        tool: "Un kit de cohetería modelo de una marca reconocida, siguiendo las pautas de seguridad estándar.",
        activity: "Busca un capítulo estudiantil de AIAA (American Institute of Aeronautics and Astronautics), un equipo de cohetería o de diseño-construcción-vuelo, o una posición de investigación de pregrado en tu departamento.",
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
    tagline: "La química y la física puestas a trabajar en diseñar los procesos y equipos que convierten materias primas en todo, desde combustible hasta medicinas y plásticos.",
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
      "Espera tanto trabajo de diseño de procesos y simulación en la oficina, como tiempo en el piso de la planta monitoreando y solucionando problemas de procesos de producción activos. El trabajo de revisión de seguridad y cumplimiento normativo es una parte más grande del trabajo de lo que la gente espera, ya que muchos procesos químicos involucran materiales peligrosos.",
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
      "middle-school": {
        project: "Prueba un experimento simple de química de cocina, supervisado por un adulto, como hacer un polímero básico, y piensa en cómo tendrías que hacerlo de forma segura a una escala mucho mayor.",
        tool: "Todavía no necesitas herramientas especiales — solo experimentos de química casera supervisados.",
        activity: "Busca un club de STEM o química en tu escuela, o una exhibición de química en un museo de ciencias local.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Prueba una herramienta gratuita de simulación química para ver cómo cambiar condiciones como la temperatura o la concentración afecta una reacción.",
        tool: "PhET Interactive Simulations (Universidad de Colorado Boulder) — gratis, incluye temas de química y estados de la materia.",
        activity: "Investiga si hay un equipo de Science Olympiad, que a menudo tiene eventos relacionados con química.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Investiga cómo se fabrica realmente un producto cotidiano específico, como botellas de plástico o combustible, a escala industrial, usando fuentes públicas disponibles.",
        tool: "Ninguna herramienta específica todavía — esta etapa se trata más de conocer el pensamiento a escala industrial que de usar una herramienta en particular.",
        activity: "Busca un capítulo estudiantil de AIChE (American Institute of Chemical Engineers), una posición de investigación de pregrado en un laboratorio de procesos o materiales, o un programa cooperativo o prácticas profesionales con una empresa química o de procesos.",
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
  {
    slug: "computer-engineering",
    name: "Ingeniería en Computación",
    tagline: "El hardware — procesadores, placas de circuitos y sistemas embebidos — sobre el que realmente corre el software.",
    whatItIs:
      "La ingeniería en computación está entre la ingeniería eléctrica y la ciencia de la computación, enfocada en diseñar el hardware físico sobre el que corren las computadoras y los dispositivos digitales: procesadores, placas de circuitos, sistemas de memoria, y los sistemas embebidos dentro de los aparatos cotidianos. Muchos ingenieros en computación también escriben el software de bajo nivel (firmware) que corre directamente sobre ese hardware, así que el campo combina el diseño de circuitos con la programación.",
    whatEngineersWorkOn:
      "Los ingenieros en computación diseñan y prueban hardware de computadoras y equipos relacionados, crean esquemáticos para circuitos y procesadores, escriben y prueban firmware que corre directamente sobre el hardware, y trabajan en hacer que los sistemas existentes sean compatibles con software o componentes nuevos. Gran parte del trabajo implica colaborar de cerca con ingenieros de software, ya que el hardware y el software tienen que funcionar juntos para que un dispositivo realmente funcione.",
    realWorldExamples: [
      "Procesadores y chips de memoria dentro de computadoras y teléfonos",
      "Placas de circuitos dentro de aparatos electrónicos de consumo",
      "Sistemas embebidos dentro de autos, electrodomésticos y dispositivos médicos",
      "Hardware de red como routers y servidores",
      "Firmware que controla cómo se comporta el hardware antes de que cargue un sistema operativo",
    ],
    commonMisconceptions: [
      "Que es lo mismo que la ingeniería de software — los ingenieros en computación diseñan hardware físico y firmware de bajo nivel, no típicamente aplicaciones completas o sitios web.",
      "Que es lo mismo que la ingeniería eléctrica — hay una superposición real, pero la ingeniería en computación se enfoca específicamente en el hardware de cómputo y el software más cercano a él, en lugar de sistemas eléctricos más amplios como la energía.",
      "Que ya tienes que entender de circuitos o de código antes de empezar — como en otros campos de la ingeniería, esto se enseña desde cero durante la carrera.",
    ],
    mythsAndRealities: [
      { myth: "Es lo mismo que la ingeniería de software.", reality: "Los ingenieros en computación diseñan hardware físico y firmware de bajo nivel, no típicamente aplicaciones completas o sitios web." },
      { myth: "Es lo mismo que la ingeniería eléctrica.", reality: "Hay una superposición real, pero la ingeniería en computación se enfoca específicamente en el hardware de cómputo y el software más cercano a él, en lugar de sistemas eléctricos más amplios como la energía." },
      { myth: "Ya tienes que entender de circuitos o de código antes de empezar.", reality: "Como en otros campos de la ingeniería, esto se enseña desde cero durante la carrera." },
    ],
    usefulSubjects: ["Física (especialmente electricidad y electrónica)", "Cálculo", "Cualquier curso introductorio de programación, si está disponible"],
    helpfulSkills: [
      "Comodidad tanto con el pensamiento a nivel de circuitos como con la programación, ya que el campo conecta el hardware y el software",
      "Depuración cuidadosa y metódica, ya que un error de hardware puede ser más difícil de rastrear que uno puramente de software",
      "Paciencia para la documentación técnica detallada, ya que el diseño de hardware implica esquemáticos y especificaciones precisas",
      "Familiaridad básica con software de diseño y simulación de circuitos",
    ],
    typicalProjects: [
      "Diseñar un esquemático de circuito para una nueva pieza de hardware",
      "Escribir firmware que controla cómo se comporta el hardware de un dispositivo",
      "Probar un prototipo de hardware y analizar por qué no está funcionando como se esperaba",
      "Actualizar el diseño de un sistema para soportar un nuevo componente o requisito de software",
    ],
    typicalWorkday:
      "Espera software de diseño de circuitos, equipo de pruebas de hardware, y escritura de código de bajo nivel en el mismo día — algo parecido en espíritu a la ingeniería eléctrica, pero enfocado específicamente en hardware de cómputo. Probar y documentar resultados es una parte significativa y constante del trabajo.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Revisión de esquemáticos", detail: "Revisar el esquemático de un circuito para una nueva pieza de hardware antes de que pase a prototipado." },
        { time: "10:30 AM", label: "Firmware", detail: "Escribir código de bajo nivel que controla cómo se comporta el hardware." },
        { time: "12:30 PM", label: "Pruebas de hardware", detail: "Probar un prototipo físico contra sus especificaciones técnicas." },
        { time: "2:00 PM", label: "Depuración", detail: "Un prototipo no está funcionando como se esperaba, y todavía no está claro si la causa es el hardware o el firmware." },
        { time: "3:30 PM", label: "Reunión entre equipos", detail: "Coordinar con ingenieros de software para asegurarse de que el hardware y el software funcionen bien juntos." },
        { time: "4:30 PM", label: "Documentación", detail: "Actualizar esquemáticos y especificaciones para reflejar los cambios de hoy." },
      ],
      reflectionQuestion:
        "¿Disfrutarías depurar un problema cuando ni siquiera estás seguro/a todavía si es un problema de hardware o de software?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "High",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$161,740",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/computer-hardware-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia, catalogada bajo la categoría de 'ingenieros de hardware de computadoras' del BLS — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Desarma un dispositivo electrónico viejo y desenchufado (de forma segura) y trata de identificar la placa de circuitos y sus componentes.",
        tool: "Todavía no necesitas herramientas especiales — solo un dispositivo seguro y desenchufado para explorar.",
        activity: "Busca un club de STEM en tu escuela o un taller de electrónica para principiantes en una biblioteca local o espacio maker, si hay uno disponible.",
        relatedField: "electrical-engineering",
      },
      "high-school": {
        project: "Prueba un proyecto de microcontrolador para principiantes, como hacer que un LED parpadee según un horario usando código simple.",
        tool: "Arduino — una plataforma de microcontroladores ampliamente usada y amigable para principiantes que combina hardware y código.",
        activity: "Investiga si hay un club de robótica o un equipo de FIRST Tech Challenge, que a menudo implican tanto cableado como programación.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Prueba un proyecto de microcontrolador más avanzado que combine un sensor con código personalizado, como una alerta básica activada por temperatura.",
        tool: "Arduino o Raspberry Pi, ambos ampliamente usados y bien documentados para principiantes que avanzan hacia proyectos más complejos.",
        activity: "Busca un capítulo estudiantil de IEEE o ACM, un equipo de proyecto enfocado en hardware o sistemas embebidos, o unas prácticas profesionales que combinen hardware y software.",
        relatedField: "electrical-engineering",
      },
    },
    industries: ["Electrónica de consumo", "Manufactura de semiconductores", "Automotriz", "Telecomunicaciones", "Dispositivos médicos", "Aeroespacial y defensa"],
    relatedMajors: ["Ingeniería en Computación", "Ingeniería Eléctrica", "Ciencias de la Computación (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Diseño de Hardware", description: "Diseña los circuitos y componentes físicos dentro de los dispositivos de cómputo." },
      { title: "Ingeniero/a de Firmware", description: "Escribe el código de bajo nivel que corre directamente sobre el hardware, antes de que cargue un sistema operativo completo." },
      { title: "Ingeniero/a de Sistemas Embebidos", description: "Diseña el hardware y software combinados dentro de dispositivos como autos, electrodomésticos o equipo médico." },
      { title: "Ingeniero/a de Integración de Sistemas", description: "Se asegura de que los componentes de hardware y software de diferentes equipos funcionen bien juntos." },
    ],
    advantages: [
      "Fuerte crecimiento laboral, respaldado por datos del gobierno — la Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 9% de 2025 a 2035, mucho más rápido que el promedio",
      "Combina habilidades de hardware y software, lo cual mantiene amplias las opciones de carrera",
      "Alta demanda en muchas industrias, ya que casi todo dispositivo moderno depende de hardware personalizado y sistemas embebidos",
    ],
    challenges: [
      "Requiere comodidad tanto con conceptos eléctricos a nivel de circuitos como con la programación, lo cual es un conjunto de habilidades más amplio que cualquiera de los dos por separado",
      "Los ciclos de desarrollo de hardware suelen ser más lentos que los del software puro, ya que los prototipos físicos toman tiempo en construirse y probarse",
      "La depuración puede ser más difícil que en el trabajo puramente de software, ya que un problema podría estar en el hardware, en el firmware, o en la interacción entre ambos",
    ],
    thingsPeopleDislike: [
      "Ciclos de iteración más lentos que el trabajo solo de software, ya que los cambios de hardware cuestan más tiempo y dinero para probar",
      "Los errores pueden ser genuinamente difíciles de aislar entre causas de hardware y de software",
      "El ritmo acelerado de cambio en la industria tecnológica significa aprender constantemente herramientas y estándares nuevos, similar a la ingeniería de software",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 9% para ingenieros de hardware de computadoras de 2025 a 2035 — mucho más rápido que el promedio de todas las ocupaciones — con cerca de 4,100 vacantes proyectadas por año durante esa década, impulsado en parte por la demanda de procesadores y componentes en electrodomésticos, dispositivos médicos y vehículos. Como con cualquier campo relacionado con la tecnología, la demanda puede cambiar con los ciclos económicos más amplios de la industria tecnológica, así que investiga las tendencias actuales de contratación en tu región y especialización específicas antes de tomar decisiones.",
    beginnerActivities: [
      "Desarma un dispositivo electrónico viejo y desenchufado (de forma segura) para ver su placa de circuitos y componentes",
      "Prueba un kit de microcontrolador para principiantes, como Arduino, para hacer que un LED parpadee según un horario",
      "Usa un simulador de circuitos gratuito para diseñar y probar un circuito simple",
    ],
    selfReflectionQuestions: [
      "¿Me interesan por igual los circuitos físicos y escribir código, o me inclino fuertemente hacia uno de los dos?",
      "¿Estoy cómodo/a con ciclos de desarrollo más lentos que el trabajo puramente de software, ya que el hardware toma más tiempo en probarse?",
      "¿Disfruto depurar problemas cuando la causa podría estar en el hardware, el software, o ambos?",
    ],
  },
  {
    slug: "environmental-engineering",
    name: "Ingeniería Ambiental",
    tagline: "Los sistemas y soluciones que protegen la calidad del aire, el agua y el suelo — y los limpian cuando algo sale mal.",
    whatItIs:
      "La ingeniería ambiental aplica la ingeniería y la ciencia a problemas relacionados con el entorno natural: calidad del agua, contaminación del aire, gestión de residuos, y limpieza de sitios contaminados. Se superpone de forma significativa con la ingeniería civil y la ingeniería química, pero se enfoca específicamente en la protección y remediación ambiental en lugar de la infraestructura o los procesos industriales en general.",
    whatEngineersWorkOn:
      "Los ingenieros ambientales diseñan sistemas para controlar o reducir la contaminación, analizan muestras de agua, aire o suelo para verificar si hay contaminación, inspeccionan instalaciones para asegurarse de que cumplan con las regulaciones ambientales, y asesoran a organizaciones sobre cómo limpiar o prevenir el daño ambiental. Gran parte del trabajo implica colaborar con científicos, técnicos y reguladores gubernamentales, y alternar entre análisis de oficina y tiempo en un sitio de campo real.",
    realWorldExamples: [
      "Diseño de plantas de tratamiento de agua y aguas residuales",
      "Sistemas de control de contaminación del aire para fábricas",
      "Limpieza y remediación de sitios contaminados",
      "Sistemas de gestión de rellenos sanitarios y residuos",
      "Evaluaciones de impacto ambiental para proyectos de construcción nuevos",
    ],
    commonMisconceptions: [
      "Que los ingenieros ambientales son lo mismo que los científicos ambientales — los científicos típicamente se enfocan en estudiar y entender los sistemas ambientales, mientras que los ingenieros se enfocan en diseñar soluciones y sistemas.",
      "Que el trabajo es principalmente trabajo de campo al aire libre — una cantidad significativa del trabajo es análisis de oficina, revisión regulatoria, y redacción de informes.",
      "Que es un campo de ingeniería 'blando' o menos técnico — se apoya fuertemente en química, biología y fundamentos de ingeniería civil, y el trabajo regulatorio requiere precisión técnica real.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros ambientales son lo mismo que los científicos ambientales.", reality: "Los científicos típicamente se enfocan en estudiar y entender los sistemas ambientales, mientras que los ingenieros se enfocan en diseñar soluciones y sistemas." },
      { myth: "El trabajo es principalmente trabajo de campo al aire libre.", reality: "Una cantidad significativa del trabajo es análisis de oficina, revisión regulatoria, y redacción de informes." },
      { myth: "Es un campo de ingeniería 'blando' o menos técnico.", reality: "Se apoya fuertemente en química, biología y fundamentos de ingeniería civil, y el trabajo regulatorio requiere precisión técnica real." },
    ],
    usefulSubjects: ["Ciencias ambientales o ciencias de la tierra, si están disponibles", "Química", "Biología", "Física", "Cálculo"],
    helpfulSkills: [
      "Comodidad combinando química, biología y conceptos tradicionales de ingeniería",
      "Atención al detalle, ya que el trabajo de cumplimiento regulatorio depende de datos y documentación precisos",
      "Habilidades de comunicación, ya que el trabajo a menudo implica explicar hallazgos técnicos a reguladores, comunidades, o personas sin formación técnica",
      "Disposición para pasar algo de tiempo en sitios de campo al aire libre o industriales, no solo en una oficina",
    ],
    typicalProjects: [
      "Diseñar un sistema para tratar agua contaminada o reducir la contaminación del aire de una instalación",
      "Probar muestras de agua, aire o suelo en busca de señales de contaminación",
      "Preparar una evaluación de impacto ambiental para un proyecto de construcción propuesto",
      "Desarrollar un plan de limpieza para un sitio contaminado",
    ],
    typicalWorkday:
      "El análisis de datos y la redacción de informes en la oficina comparten la semana con tiempo en sitios de campo, recolectando muestras o inspeccionando instalaciones para verificar el cumplimiento normativo. Los ingenieros ambientales a menudo trabajan de cerca con científicos, técnicos y reguladores, y la comunicación con el público o la comunidad es una parte real de algunos puestos.",
    dayInLife: {
      blocks: [
        { time: "8:30 AM", label: "Visita a sitio de campo", detail: "Recolectar muestras de agua o suelo en un sitio que está siendo evaluado por contaminación." },
        { time: "10:30 AM", label: "Coordinación con el laboratorio", detail: "Enviar muestras para análisis y revisar los resultados de un lote anterior." },
        { time: "12:30 PM", label: "Análisis de datos", detail: "Analizar los datos de las muestras para verificar si un sitio cumple con los estándares regulatorios." },
        { time: "2:00 PM", label: "Inspección de cumplimiento", detail: "Revisar los sistemas de control de contaminación de una instalación contra las regulaciones ambientales." },
        { time: "3:30 PM", label: "Redacción de informes", detail: "Redactar los hallazgos para una presentación regulatoria o un informe para el cliente." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Coordinar los próximos pasos con el equipo del proyecto, incluyendo científicos y técnicos." },
      ],
      reflectionQuestion:
        "¿Te resultaría satisfactorio ayudar a resolver un problema ambiental, aun sabiendo que la solución podría tardar años e implicar mucho papeleo en el camino?",
    },
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "High",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$107,110",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/environmental-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. Los puestos del sector público y de consultoría en este campo pueden diferir de forma significativa en cuanto a salario.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Prueba el pH o la claridad de muestras de agua de diferentes fuentes, como agua del grifo comparada con la de un estanque local, usando un kit casero simple y seguro.",
        tool: "Un kit básico de análisis de agua — económico y ampliamente disponible.",
        activity: "Busca un club de STEM o ambiental en tu escuela, o un programa de centro de naturaleza enfocado en ecosistemas locales.",
        relatedField: "civil-engineering",
      },
      "high-school": {
        project: "Investiga un problema ambiental local, como la calidad del agua o la contaminación del aire, usando fuentes de datos públicas, y resume lo que encuentres.",
        tool: "Fuentes de datos ambientales públicas, como la base de datos pública de una agencia nacional de protección ambiental, si está disponible en tu país.",
        activity: "Investiga si hay un equipo de Science Olympiad o un club ambiental, que a menudo cubren temas de calidad del agua o ecología.",
        relatedField: "civil-engineering",
      },
      "college": {
        project: "Diseña un sistema simple de filtración de agua usando materiales caseros y prueba qué tan bien remueve partículas visibles.",
        tool: "Materiales caseros básicos — arena, grava, carbón, y recipientes — para un experimento práctico de filtración.",
        activity: "Busca un grupo estudiantil de ASCE ambiental o afiliado a AEESP, una posición de investigación de pregrado en un laboratorio ambiental o de recursos hídricos, o unas prácticas profesionales con una consultora ambiental.",
        relatedField: "civil-engineering",
      },
    },
    industries: ["Agencias gubernamentales y regulatorias", "Consultoría ambiental", "Empresas de agua potable", "Construcción e infraestructura", "Gestión de residuos"],
    relatedMajors: ["Ingeniería Ambiental", "Ingeniería Civil", "Ciencias Ambientales (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Recursos Hídricos", description: "Diseña sistemas para el tratamiento, suministro y gestión de aguas residuales." },
      { title: "Ingeniero/a de Calidad del Aire", description: "Diseña y evalúa sistemas para reducir o controlar la contaminación del aire proveniente de fuentes industriales." },
      { title: "Ingeniero/a de Remediación", description: "Diseña planes para limpiar suelo, agua u otros sitios contaminados." },
      { title: "Ingeniero/a de Cumplimiento Ambiental", description: "Se asegura de que las instalaciones y proyectos cumplan con las regulaciones y estándares ambientales." },
    ],
    advantages: [
      "El trabajo tiene una conexión directa y tangible con resultados ambientales y de salud pública",
      "La demanda está ligada a necesidades públicas y regulatorias esenciales, lo cual tiende a mantenerse relativamente estable",
      "Altamente interdisciplinario — una buena opción si no quieres elegir entre la ingeniería y las ciencias ambientales o de la vida",
    ],
    challenges: [
      "Trabajo regulatorio y de cumplimiento intenso, que puede ralentizar los proyectos sin importar la solución técnica",
      "Los proyectos de limpieza y remediación pueden tomar años, así que los resultados no siempre son inmediatos",
      "Requiere comodidad tanto con materias de ingeniería como de ciencias de la vida, lo cual puede significar una carga de cursos más amplia y pesada",
    ],
    thingsPeopleDislike: [
      "Una cantidad significativa de papeleo y documentación regulatoria",
      "Las visitas a sitios de campo pueden implicar condiciones al aire libre, viajes, y exposición a entornos menos agradables, como sitios contaminados",
      "El salario del sector público y de consultoría puede quedarse atrás de algunos puestos de ingeniería del sector privado en ciertas regiones",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 6% para ingenieros ambientales de 2025 a 2035 — más rápido que el promedio de todas las ocupaciones — con cerca de 2,300 vacantes proyectadas por año durante esa década, impulsado por una mayor atención a los riesgos ambientales y la demanda de soluciones de calidad de agua y aire. La demanda puede variar según las regulaciones ambientales regionales y el financiamiento gubernamental para proyectos públicos — investiga el mercado actual y el entorno regulatorio en tu país específico antes de tomar decisiones.",
    beginnerActivities: [
      "Prueba el pH o la claridad de muestras de agua de diferentes fuentes usando un kit casero simple",
      "Diseña un sistema básico de filtración de agua con materiales caseros y prueba qué tan bien funciona",
      "Investiga un problema ambiental local usando fuentes de datos públicas",
    ],
    selfReflectionQuestions: [
      "¿Me interesan por igual las ciencias ambientales y la ingeniería tradicional, o me inclino fuertemente hacia una de las dos?",
      "¿Estoy cómodo/a con un trabajo regulatorio y de cumplimiento intenso como parte del empleo?",
      "¿Estaría satisfecho/a con proyectos de limpieza o mejora que pueden tomar años en mostrar resultados?",
      "¿Estoy bien pasando parte de mi tiempo en sitios de campo al aire libre o industriales, no solo en una oficina?",
    ],
  },
  {
    slug: "industrial-engineering",
    name: "Ingeniería Industrial",
    tagline: "Hacer que los sistemas — fábricas, cadenas de suministro, hospitales, hasta las filas de las cajas registradoras — funcionen de forma más eficiente, con menos recursos y tiempo desperdiciados.",
    whatItIs:
      "La ingeniería industrial se trata de mejorar cómo funcionan los sistemas complejos: líneas de manufactura, cadenas de suministro, hospitales, redes de logística, e incluso procesos de servicio como una fila de caja. En lugar de diseñar un solo producto físico, los ingenieros industriales se enfocan en cómo trabajan juntos las personas, las máquinas, los materiales y la información, y en cómo hacer que todo ese sistema sea más eficiente, seguro, o de mayor calidad.",
    whatEngineersWorkOn:
      "Los ingenieros industriales evalúan sistemas de manufactura, entrega, experiencia del cliente, u otros procesos para identificar formas de mejorar la productividad y la calidad. Reúnen información a través de la observación, la recolección de datos, y encuestas, y luego diseñan procesos mejorados, a menudo colaborando con personas de muchos departamentos distintos que no son necesariamente ingenieros. Gran parte del trabajo implica encontrar desperdicio o cuellos de botella en un sistema existente y descubrir cómo eliminarlos.",
    realWorldExamples: [
      "Diseño de la distribución del piso de fábrica y de líneas de producción",
      "Logística de almacenes y cadenas de suministro",
      "Flujo de pacientes y sistemas de programación en hospitales",
      "Diseño de procesos de seguridad y embarque en aeropuertos",
      "Mejora de procesos de caja y servicio al cliente en tiendas",
    ],
    commonMisconceptions: [
      "Que los ingenieros industriales trabajan en el piso de fábrica operando máquinas — la mayor parte del trabajo es análisis y diseño de procesos, no operación de maquinaria.",
      "Que es menos 'técnico' que otros campos de ingeniería porque no se enfoca en un solo producto físico — las matemáticas subyacentes, como la estadística y la optimización, pueden ser igual de exigentes.",
      "Que solo aplica a fábricas — los principios de la ingeniería industrial se usan en salud, logística, comercio minorista, y muchas industrias de servicios.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros industriales trabajan en el piso de fábrica operando máquinas.", reality: "La mayor parte del trabajo es análisis y diseño de procesos, no operación de maquinaria." },
      { myth: "Es menos 'técnico' que otros campos de ingeniería porque no se enfoca en un solo producto físico.", reality: "Las matemáticas subyacentes, como la estadística y la optimización, pueden ser igual de exigentes." },
      { myth: "Solo aplica a fábricas.", reality: "Los principios de la ingeniería industrial se usan en salud, logística, comercio minorista, y muchas industrias de servicios." },
    ],
    usefulSubjects: ["Matemáticas avanzadas, incluyendo estadística", "Física", "Cualquier curso introductorio de programación o análisis de datos, si está disponible"],
    helpfulSkills: [
      "Comodidad con la estadística y el análisis de datos, ya que gran parte del trabajo implica medir y mejorar un proceso",
      "Pensamiento sistémico — entender cómo un cambio en una parte de un proceso afecta todo lo demás",
      "Habilidades de comunicación y colaboración, ya que los proyectos usualmente implican trabajar con personas que no son ingenieras en diferentes departamentos",
      "Comodidad con la ambigüedad, ya que mejorar un sistema real y desordenado no siempre tiene una única respuesta correcta",
    ],
    typicalProjects: [
      "Observar una línea de manufactura e identificar dónde se está desperdiciando tiempo o materiales",
      "Analizar datos para encontrar cuellos de botella en una cadena de suministro o sistema de programación",
      "Rediseñar un flujo de trabajo o la distribución de una instalación para mejorar la eficiencia",
      "Construir un modelo para comparar diferentes cambios de proceso antes de implementar uno",
    ],
    typicalWorkday:
      "El trabajo consiste en recolectar datos mediante observación, encuestas, o registros existentes, analizarlos para encontrar ineficiencias, y trabajar con equipos de toda una empresa para rediseñar un proceso. Gran parte de esto ocurre en reuniones y observación en el sitio, además del análisis basado en computadora.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Observación en el piso", detail: "Observar un proceso de producción o servicio en acción para ver dónde ocurren los retrasos." },
        { time: "10:30 AM", label: "Análisis de datos", detail: "Analizar los datos recolectados para medir cuánto tiempo o material está desperdiciando un paso específico." },
        { time: "12:30 PM", label: "Reunión entre departamentos", detail: "Discutir un cambio de proceso propuesto con personas de operaciones, que no son ingenieras." },
        { time: "2:00 PM", label: "Modelado", detail: "Construir un modelo simple para comparar dos formas posibles de rediseñar un proceso antes de decidirse por una." },
        { time: "3:30 PM", label: "Revisión piloto", detail: "Revisar los resultados de una prueba a pequeña escala de un cambio de proceso." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Escribir un informe de recomendación resumiendo los hallazgos de hoy." },
      ],
      reflectionQuestion:
        "¿Disfrutarías pasar tu día mejorando cómo funciona un sistema existente, en lugar de diseñar una sola cosa física nueva?",
    },
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "Low",
      marketUncertainty: "Low",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$102,440",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región. Como los ingenieros industriales trabajan en tantas industrias distintas, el salario puede variar mucho según el sector.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Cronometra cuánto tarda una tarea repetitiva, como hacer un sándwich o empacar una mochila, de varias formas distintas, y observa cuál es más rápida.",
        tool: "Todavía no necesitas herramientas especiales — solo un cronómetro o el temporizador del teléfono.",
        activity: "Busca un club de STEM o de negocios en tu escuela que toque temas de organización o mejora de procesos.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Elige un proceso que experimentes regularmente, como la fila de la cafetería escolar, y esquematiza dónde ocurren los retrasos y cómo los arreglarías.",
        tool: "Todavía no necesitas herramientas especiales — lápiz, papel, y observación.",
        activity: "Investiga un club de negocios o emprendimiento, que a veces cubre temas de procesos y operaciones.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Aprende lo básico de una técnica de mapeo de procesos, como un diagrama de flujo simple, y úsala para mapear y mejorar un proceso real que conozcas.",
        tool: "Una herramienta gratuita de diagramas de flujo, muchas de las cuales están disponibles en línea sin costo.",
        activity: "Busca un capítulo estudiantil de IISE (Institute of Industrial and Systems Engineers), un equipo de competencia de casos o de mejora de procesos, o unas prácticas profesionales en operaciones o manufactura.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Manufactura", "Logística y cadena de suministro", "Sistemas de salud", "Comercio minorista", "Consultoría", "Tecnología"],
    relatedMajors: ["Ingeniería Industrial", "Investigación de Operaciones", "Ingeniería de Sistemas"],
    careerPaths: [
      { title: "Ingeniero/a de Mejora de Procesos", description: "Analiza los flujos de trabajo existentes y los rediseña para reducir el desperdicio y mejorar la eficiencia." },
      { title: "Ingeniero/a de Cadena de Suministro", description: "Diseña y optimiza cómo se mueven los materiales y productos desde los proveedores hasta los clientes." },
      { title: "Ingeniero/a de Calidad", description: "Se enfoca en asegurar que los productos o procesos cumplan de forma consistente con los estándares de calidad." },
      { title: "Analista de Investigación de Operaciones", description: "Usa modelado matemático y análisis de datos para ayudar a las organizaciones a tomar mejores decisiones operativas." },
    ],
    advantages: [
      "Las habilidades se transfieren a una gama inusualmente amplia de industrias — manufactura, salud, logística, comercio minorista, y más",
      "Crecimiento laboral muy fuerte, respaldado por datos del gobierno — la Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 12% de 2025 a 2035, mucho más rápido que el promedio",
      "El trabajo mejora directamente cómo funcionan sistemas reales, lo cual puede significar resultados visibles y medibles",
    ],
    challenges: [
      "El trabajo trata menos sobre un solo producto físico y más sobre sistemas reales, ambiguos y desordenados, lo cual algunas personas encuentran menos satisfactorio que el trabajo de diseño concreto",
      "Requiere habilidades sólidas de estadística y análisis de datos, lo cual puede ser una carga de matemáticas más pesada de lo que algunos esperan",
      "El éxito a menudo depende de convencer a personas que no son ingenieras de cambiar cómo trabajan, lo cual requiere habilidades reales de comunicación y persuasión",
    ],
    thingsPeopleDislike: [
      "Mucho tiempo en reuniones y conversaciones con partes interesadas en lugar de trabajo técnico práctico",
      "Las recomendaciones pueden encontrar resistencia de personas acostumbradas a hacer las cosas de cierta manera, lo cual puede ser frustrante",
      "El puesto puede sentirse menos como 'ingeniería' para algunas personas, ya que el producto final suele ser un proceso mejor en lugar de un objeto físico",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 12% para ingenieros industriales de 2025 a 2035 — mucho más rápido que el promedio de todas las ocupaciones — con cerca de 23,100 vacantes proyectadas por año durante esa década, uno de los conteos anuales de vacantes más grandes entre los campos de ingeniería, impulsado por la necesidad de este tipo de trabajo de mejora de procesos en muchas industrias. Como el campo aplica a tantas industrias, la demanda tiende a estar menos ligada a los altibajos de un solo sector, aunque sigue valiendo la pena investigar las tendencias actuales de contratación en tu región e industria específicas.",
    beginnerActivities: [
      "Cronometra una tarea repetitiva de varias formas distintas y compara cuál es más rápida",
      "Mapea un proceso que experimentes regularmente, como una fila de cafetería, e identifica dónde ocurren los retrasos",
      "Aprende una técnica básica de diagramas de flujo y úsala para mapear y mejorar un proceso real",
    ],
    selfReflectionQuestions: [
      "¿Me interesa más mejorar cómo funciona un sistema existente que diseñar una sola cosa física nueva?",
      "¿Estoy cómodo/a con problemas ambiguos que no tienen una única respuesta correcta?",
      "¿Disfruto trabajar con personas de diferentes roles, incluyendo personas que no son ingenieras?",
      "¿Estoy cómodo/a con que la estadística y el análisis de datos sean una parte central del trabajo?",
    ],
  },
  {
    slug: "materials-engineering",
    name: "Ingeniería de Materiales",
    tagline: "Desarrollar y probar los metales, polímeros, cerámicas y compuestos con los que construye todo el resto de la ingeniería.",
    whatItIs:
      "La ingeniería de materiales se trata de entender y desarrollar las sustancias de las que está hecho todo lo demás: metales, plásticos, cerámicas, compuestos, y cada vez más materiales diseñados a la medida para un propósito específico. En lugar de diseñar un producto terminado, los ingenieros de materiales suelen trabajar un nivel más abajo, descubriendo de qué tiene que estar hecho un material y cómo tiene que procesarse para que se comporte como lo necesita un ingeniero mecánico, aeroespacial o biomédico.",
    whatEngineersWorkOn:
      "Los ingenieros de materiales desarrollan, procesan y prueban los materiales usados para crear una amplia gama de productos. Diseñan procedimientos para desarrollar materiales nuevos, monitorean cómo se comporta un material con el tiempo bajo estrés, calor o desgaste, evalúan si un material cumple con las especificaciones de calidad requeridas, y colaboran de cerca con ingenieros de otras disciplinas que necesitan un material con propiedades específicas. Gran parte del trabajo es genuinamente experimental — probar cómo se comporta un material bajo condiciones en las que no ha sido probado antes.",
    realWorldExamples: [
      "Aleaciones ligeras usadas en aviones y vehículos",
      "Polímeros y compuestos usados en equipo deportivo o dispositivos médicos",
      "Materiales semiconductores usados en electrónica",
      "Materiales resistentes al calor usados en motores o equipo industrial",
      "Materiales biocompatibles usados en implantes",
    ],
    commonMisconceptions: [
      "Que los ingenieros de materiales solo eligen materiales de un catálogo para otros ingenieros — una parte significativa del trabajo es desarrollar y probar materiales genuinamente nuevos, no solo seleccionar los que ya existen.",
      "Que es lo mismo que la química — la química se enfoca en las reacciones y la composición de las sustancias; la ingeniería de materiales se enfoca más en cómo la estructura de un material afecta su desempeño en el mundo real.",
      "Que es un campo estrecho o de nicho — los ingenieros de materiales trabajan en aeroespacial, automotriz, electrónica, dispositivos médicos, energía, y más.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros de materiales solo eligen materiales de un catálogo para otros ingenieros.", reality: "Una parte significativa del trabajo es desarrollar y probar materiales genuinamente nuevos, no solo seleccionar los que ya existen." },
      { myth: "Es lo mismo que la química.", reality: "La química se enfoca en las reacciones y la composición de las sustancias; la ingeniería de materiales se enfoca más en cómo la estructura de un material afecta su desempeño en el mundo real." },
      { myth: "Es un campo estrecho o de nicho.", reality: "Los ingenieros de materiales trabajan en aeroespacial, automotriz, electrónica, dispositivos médicos, energía, y más." },
    ],
    usefulSubjects: ["Química", "Física", "Cálculo", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Una base sólida en química y física, ya que las propiedades de un material vienen de lo que ocurre a nivel molecular o estructural",
      "Paciencia para la experimentación, ya que desarrollar o probar un material nuevo a menudo toma muchas rondas de ensayo y error",
      "Atención al detalle, ya que pequeñas diferencias en la composición o el procesamiento pueden cambiar significativamente cómo se comporta un material",
      "Habilidades de colaboración, ya que los ingenieros de materiales usualmente trabajan apoyando las necesidades específicas de otra disciplina de ingeniería",
    ],
    typicalProjects: [
      "Probar cómo se comporta un material bajo estrés, calor, o desgaste repetido",
      "Desarrollar un material o aleación nueva con propiedades específicas como objetivo",
      "Analizar por qué un material falló o se degradó más rápido de lo esperado",
      "Evaluar si un material cumple con las especificaciones de calidad y seguridad de un proyecto",
    ],
    typicalWorkday:
      "Las pruebas y experimentación en el laboratorio se equilibran con la colaboración con ingenieros de otras disciplinas que necesitan un material con propiedades específicas para su propio proyecto. El análisis de datos y la documentación son una parte importante del trabajo, ya que el desempeño de un material tiene que caracterizarse y registrarse con precisión.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Pruebas de laboratorio", detail: "Probar cómo se comporta una muestra de material bajo estrés o calor." },
        { time: "10:30 AM", label: "Análisis de datos", detail: "Analizar los resultados de las pruebas de ayer para ver cómo se compara el desempeño del material con lo esperado." },
        { time: "12:30 PM", label: "Reunión entre disciplinas", detail: "Hablar con un ingeniero mecánico o aeroespacial sobre las propiedades que necesita un material para su proyecto." },
        { time: "2:00 PM", label: "Análisis de fallas", detail: "Investigar por qué una muestra de material falló o se degradó más rápido de lo esperado." },
        { time: "3:30 PM", label: "Documentación", detail: "Registrar datos precisos sobre la composición y el desempeño de un material para el registro del proyecto." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Planear la próxima ronda de pruebas según los resultados de hoy." },
      ],
      reflectionQuestion:
        "¿Te resultaría satisfactorio pasar semanas o meses probando y perfeccionando un solo material, en lugar de avanzar hacia un producto terminado y visible?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "High",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Low",
    },
    salary: {
      medianAnnual: "$112,860",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/materials-engineers.htm",
      note: "Esta es la mediana nacional de EE. UU. entre todos los niveles de experiencia y especializaciones — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Prueba cómo aguantan diferentes materiales, como distintos tipos de cinta, cuerda o plástico, al estirarlos o doblarlos, y compara los resultados.",
        tool: "Todavía no necesitas herramientas especiales — solo materiales caseros y pruebas simples de comparación.",
        activity: "Busca un club de STEM o ciencias en tu escuela, o una exhibición enfocada en materiales en un museo de ciencias.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Investiga cómo se usa un material avanzado específico, como la fibra de carbono o una aleación con memoria de forma, y qué lo hace especial.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables, como libros de biblioteca o sitios de ciencia de confianza.",
        activity: "Investiga un equipo de Science Olympiad, que a veces tiene eventos relacionados con la ciencia de materiales.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Prueba un experimento simple y seguro de crecimiento de cristales o de polímeros, y documenta cómo cambiar condiciones como la temperatura o el tiempo afecta el resultado.",
        tool: "Un kit básico de crecimiento de cristales o ciencia de polímeros, ampliamente disponible para uso educativo.",
        activity: "Busca un capítulo estudiantil de ASM International o TMS (The Minerals, Metals & Materials Society), una posición de investigación de pregrado en un laboratorio de materiales, o unas prácticas profesionales con un fabricante.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Aeroespacial", "Automotriz", "Electrónica y semiconductores", "Dispositivos médicos", "Energía", "Manufactura"],
    relatedMajors: ["Ciencia e Ingeniería de Materiales", "Ingeniería Metalúrgica", "Ingeniería Química (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a Metalúrgico/a", description: "Se enfoca específicamente en las propiedades y el procesamiento de metales y aleaciones." },
      { title: "Ingeniero/a de Polímeros", description: "Desarrolla y prueba plásticos y otros materiales a base de polímeros." },
      { title: "Ingeniero/a de Análisis de Fallas", description: "Investiga por qué falló un material o componente, para ayudar a evitar que vuelva a pasar." },
      { title: "Ingeniero/a de Investigación y Desarrollo", description: "Trabaja en desarrollar materiales completamente nuevos con propiedades específicas como objetivo." },
    ],
    advantages: [
      "El trabajo está en la base de casi todos los demás campos de ingeniería, ya que todo producto físico está hecho de algún material",
      "Fuerte crecimiento laboral, respaldado por datos del gobierno — la Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 8% de 2025 a 2035, mucho más rápido que el promedio",
      "Profundamente experimental y orientado a la investigación, lo cual puede ser una buena opción para quienes disfrutan de la investigación científica genuina",
    ],
    challenges: [
      "Carga pesada de cursos de química y física, con un fuerte énfasis en el pensamiento a nivel molecular y estructural",
      "Los ciclos de desarrollo y pruebas pueden ser lentos, ya que los materiales a menudo necesitan pruebas extensas antes de que se confíe en ellos para un producto real",
      "El trabajo puede sentirse un paso alejado de un producto terminado y visible, ya que los materiales normalmente terminan dentro de algo que diseñó otro ingeniero",
    ],
    thingsPeopleDislike: [
      "Los proyectos pueden tomar mucho tiempo en pasar de las primeras pruebas al uso en el mundo real",
      "Se requiere mucha documentación precisa y registro de datos",
      "Algunos puestos son menos visibles o conocidos que otras disciplinas de ingeniería, lo cual puede significar menos reconocimiento público para el trabajo",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 8% para ingenieros de materiales de 2025 a 2035 — mucho más rápido que el promedio de todas las ocupaciones — con cerca de 1,300 vacantes proyectadas por año durante esa década, impulsado por la demanda de nuevos materiales y procesos de manufactura. Ese es un número menor de vacantes anuales que en algunos otros campos de ingeniería, ya que la ingeniería de materiales es un campo comparativamente más pequeño y especializado. Investiga el mercado actual en tu país e industria específicos antes de tomar decisiones.",
    beginnerActivities: [
      "Prueba cómo aguantan diferentes materiales caseros al estirarlos, doblarlos, o compararlos entre sí",
      "Investiga cómo se usa un material avanzado específico, como la fibra de carbono, y qué lo hace especial",
      "Prueba un kit simple y seguro de crecimiento de cristales o ciencia de polímeros",
    ],
    selfReflectionQuestions: [
      "¿Disfrutaría trabajar en un material que termina dentro del producto terminado de alguien más, en lugar de un producto terminado propio?",
      "¿Estoy cómodo/a con una carga pesada de cursos de química y física?",
      "¿Tengo paciencia para la experimentación, que puede tomar muchas rondas de ensayo y error?",
      "¿Me interesan genuinamente los materiales en sí, o principalmente los productos en los que terminan siendo usados?",
    ],
  },
  {
    slug: "robotics-engineering",
    name: "Ingeniería de Robótica y Mecatrónica",
    tagline: "Combinar la ingeniería mecánica, eléctrica y de software para diseñar máquinas que perciben, se mueven y actúan por su cuenta.",
    whatItIs:
      "La ingeniería de robótica y mecatrónica combina la ingeniería mecánica, eléctrica y de software para diseñar máquinas que pueden percibir su entorno, moverse, y actuar — desde brazos robóticos industriales hasta vehículos autónomos y robots de consumo. Es inherentemente interdisciplinaria: un robot necesita una estructura física (mecánica), sensores y actuadores (eléctrica), y código que realmente controle su comportamiento (software), así que el campo no encaja perfectamente en ninguna categoría tradicional única de la ingeniería.",
    whatEngineersWorkOn:
      "Los ingenieros de robótica diseñan la estructura física y los mecanismos de un robot, seleccionan e integran sensores y actuadores, escriben el software de control que le dice al robot cómo responder a su entorno, y prueban todo el sistema en conjunto para asegurarse de que las partes mecánicas, eléctricas y de software realmente funcionen como un solo sistema. Gran parte del trabajo consiste en solucionar problemas en el límite entre disciplinas — descubrir si un problema es mecánico, eléctrico, o está en el código.",
    realWorldExamples: [
      "Brazos robóticos industriales usados en manufactura",
      "Vehículos autónomos y drones",
      "Robots de almacén y logística",
      "Robots quirúrgicos y médicos",
      "Robots de consumo, como aspiradoras robóticas",
    ],
    commonMisconceptions: [
      "Que es una sola carrera estandarizada en todas partes — algunas universidades ofrecen una carrera dedicada de robótica o mecatrónica, mientras que otras esperan que te especialices a través de ingeniería mecánica, eléctrica o en computación con un enfoque en robótica.",
      "Que se trata principalmente de construir robots humanoides — la mayoría del trabajo real de robótica es industrial o específico para una tarea, como brazos, drones, o vehículos, no máquinas con forma humana.",
      "Que tienes que ser igualmente experto en ingeniería mecánica, eléctrica y de software desde el primer día — la mayoría de las personas se especializan en un área y construyen conocimiento práctico de las demás con el tiempo.",
    ],
    mythsAndRealities: [
      { myth: "Es una sola carrera estandarizada en todas partes.", reality: "Algunas universidades ofrecen una carrera dedicada de robótica o mecatrónica, mientras que otras esperan que te especialices a través de ingeniería mecánica, eléctrica o en computación con un enfoque en robótica." },
      { myth: "Se trata principalmente de construir robots humanoides.", reality: "La mayoría del trabajo real de robótica es industrial o específico para una tarea, como brazos, drones, o vehículos, no máquinas con forma humana." },
      { myth: "Tienes que ser igualmente experto en ingeniería mecánica, eléctrica y de software desde el primer día.", reality: "La mayoría de las personas se especializan en un área y construyen conocimiento práctico de las demás con el tiempo." },
    ],
    usefulSubjects: ["Física (especialmente mecánica y electricidad)", "Cálculo", "Cualquier curso introductorio de programación, si está disponible", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Comodidad trabajando entre disciplinas, ya que un problema de robótica podría ser de naturaleza mecánica, eléctrica, o de software",
      "Pensamiento sistémico — entender cómo la estructura física, los sensores y el código se afectan entre sí",
      "Paciencia para las pruebas de integración, ya que lograr que las tres disciplinas funcionen juntas suele ser más difícil que lograr que cualquiera de ellas funcione sola",
      "Programación básica, ya que la mayoría del trabajo de robótica implica escribir software de control en algún nivel",
    ],
    typicalProjects: [
      "Diseñar la estructura física y las articulaciones de un brazo robótico",
      "Escribir software de control que permite que un robot responda a la entrada de sus sensores",
      "Integrar un sensor o actuador nuevo en un sistema robótico existente",
      "Depurar por qué un robot no se está comportando como se esperaba — y descubrir en qué disciplina está realmente el problema",
    ],
    typicalWorkday:
      "El trabajo abarca diseño mecánico, trabajo eléctrico y de sensores, y escritura de software de control, además de tiempo significativo probando el sistema integrado como un todo. Como los problemas de robótica pueden originarse en cualquiera de las tres disciplinas subyacentes, gran parte del trabajo es genuinamente solución de problemas interdisciplinaria.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Diseño mecánico", detail: "Trabajar en la estructura física o el mecanismo de una articulación para un sistema robótico." },
        { time: "10:30 AM", label: "Integración de sensores", detail: "Cablear y probar un sensor nuevo en el robot." },
        { time: "12:30 PM", label: "Software de control", detail: "Escribir código que determina cómo responde el robot a la entrada de sus sensores." },
        { time: "2:00 PM", label: "Pruebas de integración", detail: "Correr el sistema completo en conjunto y ver dónde falla." },
        { time: "3:00 PM", label: "Depuración interdisciplinaria", detail: "El robot no se está comportando como se esperaba, y no está claro si la causa es mecánica, eléctrica, o está en el código." },
        { time: "4:30 PM", label: "Documentación", detail: "Registrar los cambios de hoy y los problemas pendientes para mañana." },
      ],
      reflectionQuestion:
        "¿Disfrutarías un trabajo en el que constantemente tienes que descubrir si un problema es mecánico, eléctrico, o un error de software, en lugar de quedarte en un solo carril?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "High",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "Medium",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$122,930",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/about/data-for-occupations-not-covered-in-detail.htm",
      note: "Los ingenieros de robótica y mecatrónica no se rastrean como su propia categoría detallada del BLS — esta cifra proviene del grupo más amplio de 'Ingenieros, Todos los Demás', que el BLS indica explícitamente que incluye a los ingenieros de robótica y mecatrónica. Trátala como una estimación aproximada, no como una cifra precisa para esta especialización específica.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Construye una máquina simple que se mueva usando un kit básico de robótica o incluso materiales caseros, como un auto propulsado por una banda elástica.",
        tool: "Un kit de robótica para principiantes, o simplemente materiales caseros para empezar.",
        activity: "Busca un equipo de robótica LEGO o FIRST LEGO League en tu escuela, si hay uno disponible.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Prueba un kit de robótica para principiantes que combine un microcontrolador con motores y sensores, y programa un comportamiento simple.",
        tool: "Un kit de robótica para principiantes basado en Arduino o un microcontrolador similar.",
        activity: "Investiga un equipo de FIRST Tech Challenge o VEX Robotics en tu escuela, si existe uno.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Construye un proyecto de robótica más completo que combine un chasis, sensores, y código personalizado, como un robot que sigue una línea o esquiva obstáculos.",
        tool: "Una plataforma de robótica basada en Raspberry Pi o Arduino, ambas ampliamente usadas y bien documentadas.",
        activity: "Busca un equipo o club de robótica en tu universidad, un capítulo de IEEE Robotics and Automation Society, o una posición de investigación de pregrado en un laboratorio de robótica.",
        relatedField: "software-engineering",
      },
    },
    industries: ["Manufactura y automatización", "Automotriz", "Robótica de consumo", "Aeroespacial y defensa", "Salud y dispositivos médicos", "Logística y almacenamiento"],
    relatedMajors: ["Ingeniería de Robótica", "Ingeniería Mecatrónica", "Ingeniería Mecánica (con enfoque en robótica)", "Ingeniería Eléctrica o en Computación (con enfoque en robótica)"],
    careerPaths: [
      { title: "Ingeniero/a de Diseño de Robótica", description: "Diseña la estructura física y los mecanismos de un sistema robótico." },
      { title: "Ingeniero/a de Control", description: "Diseña y escribe el software y los sistemas de control que determinan cómo se comporta un robot." },
      { title: "Ingeniero/a de Automatización", description: "Diseña sistemas robóticos específicamente para manufactura y automatización industrial." },
      { title: "Ingeniero/a de Sistemas Autónomos", description: "Trabaja en robots o vehículos que operan con control humano limitado o nulo, como drones o sistemas de conducción autónoma." },
    ],
    advantages: [
      "Genuinamente interdisciplinario, lo cual puede ser una buena opción si no quieres elegir entre la ingeniería mecánica, eléctrica y de software",
      "Campo en crecimiento ligado a la automatización, la manufactura, y los sistemas autónomos en muchas industrias",
      "Resultados directos y visibles — puedes ver cómo lo que construiste realmente se mueve y actúa",
    ],
    challenges: [
      "Requiere conocimiento práctico en tres disciplinas de ingeniería tradicionalmente separadas, lo cual puede significar una carga de cursos más pesada y amplia",
      "Los problemas de integración — lograr que las partes mecánicas, eléctricas y de software funcionen juntas — pueden ser más difíciles de depurar que un problema de una sola disciplina",
      "No siempre se ofrece como una carrera propia y dedicada, así que descubrir el camino académico correcto puede requerir investigación adicional dependiendo de dónde estudies",
    ],
    thingsPeopleDislike: [
      "La depuración puede ser frustrante cuando no está claro de qué disciplina viene realmente un problema",
      "La falta de un solo camino de carrera estandarizado puede dificultar saber exactamente qué cursos tomar",
      "Como no se rastrea como su propia ocupación distinta en las estadísticas laborales del gobierno, puede ser más difícil encontrar datos precisos de salario y mercado laboral específicos del campo",
    ],
    howCompetitive:
      "Los ingenieros de robótica y mecatrónica no se rastrean como una ocupación distinta en la Oficina de Estadísticas Laborales de EE. UU. — caen bajo la categoría más amplia de 'Ingenieros, Todos los Demás', que reportó un salario mediano de $122,930 en mayo de 2025 pero no ofrece una proyección de crecimiento separada específica para robótica. El campo está ampliamente ligado al crecimiento en automatización, tecnología de manufactura, y sistemas autónomos, pero como no hay un rastreo gubernamental dedicado, vale especialmente la pena investigar las ofertas de empleo actuales y los informes de la industria en tu región específica en lugar de confiar en una sola estadística.",
    beginnerActivities: [
      "Construye una máquina simple que se mueva usando un kit básico de robótica o materiales caseros",
      "Prueba un kit de robótica para principiantes que combine un microcontrolador, motores, y sensores",
      "Programa un comportamiento robótico simple, como seguir una línea o esquivar un obstáculo",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a trabajando entre las disciplinas mecánica, eléctrica y de software, en lugar de especializarme estrechamente en solo una?",
      "¿Disfruto solucionar problemas cuando la causa no es obvia de antemano?",
      "¿Estoy bien con un camino académico menos estandarizado, donde podría tener que armar yo mismo/a los cursos correctos?",
      "¿Me interesa genuinamente la robótica en sí, o principalmente me atrae una de sus disciplinas subyacentes, como el diseño mecánico o la programación?",
    ],
  },
  {
    slug: "nuclear-engineering",
    name: "Ingeniería Nuclear",
    tagline: "Los sistemas que generan y gestionan la energía nuclear de forma segura — diseñados y monitoreados constantemente.",
    whatItIs:
      "La ingeniería nuclear se enfoca en el diseño, la operación y el monitoreo seguros de los sistemas que usan energía nuclear — desde plantas de energía hasta aplicaciones médicas y de investigación. Combina física, ingeniería de seguridad, y un cumplimiento regulatorio estricto, ya que las consecuencias de un error son inusualmente graves.",
    whatEngineersWorkOn:
      "Los ingenieros nucleares diseñan los sistemas y procedimientos de seguridad para producir y usar energía nuclear, monitorean la operación de reactores para asegurarse de que todo funcione dentro de límites de seguridad estrictos, escriben y revisan procedimientos para el manejo y la disposición de materiales radiactivos, e investigan formas de hacer los procesos nucleares más seguros o eficientes. Gran parte del trabajo implica operar dentro de una densa red de regulaciones federales, ya que la supervisión de seguridad nuclear es de las más estrictas en cualquier campo de la ingeniería.",
    realWorldExamples: [
      "Diseño de plantas de energía nuclear y sus sistemas de seguridad",
      "Equipo de medicina nuclear y radioterapia",
      "Sistemas de almacenamiento y disposición de residuos nucleares",
      "Sistemas de propulsión nuclear naval",
    ],
    commonMisconceptions: [
      "Que los ingenieros nucleares trabajan directamente con armas — la mayoría de los ingenieros nucleares trabajan en generación de energía civil, medicina, o investigación, no en defensa.",
      "Que el trabajo se trata mayormente de teoría de física — la mayor parte del trabajo real es aplicado: monitorear sistemas, escribir procedimientos de seguridad, y asegurarse de que el equipo real opere dentro de límites estrictos.",
      "Que es un campo que se está reduciendo porque se construyen pocas plantas nuevas — gran parte del trabajo es mantener, monitorear, y eventualmente desmantelar las plantas que ya existen, además de las aplicaciones crecientes en medicina e investigación.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros nucleares trabajan directamente con armas.", reality: "La mayoría de los ingenieros nucleares trabajan en generación de energía civil, medicina, o investigación, no en defensa." },
      { myth: "El trabajo se trata mayormente de teoría de física.", reality: "La mayor parte del trabajo real es aplicado: monitorear sistemas, escribir procedimientos de seguridad, y asegurarse de que el equipo real opere dentro de límites estrictos." },
      { myth: "Es un campo que se está reduciendo porque se construyen pocas plantas nuevas.", reality: "Gran parte del trabajo es mantener, monitorear, y eventualmente desmantelar las plantas que ya existen, además de las aplicaciones crecientes en medicina e investigación." },
    ],
    usefulSubjects: ["Física (especialmente física nuclear y moderna, si está disponible)", "Cálculo", "Química"],
    helpfulSkills: [
      "Comodidad con reglas y procedimientos estrictos, ya que el trabajo nuclear está regido por algunas de las regulaciones de seguridad más detalladas de cualquier campo de ingeniería",
      "Atención cuidadosa y metódica al detalle — un pequeño descuido en este campo puede tener consecuencias serias",
      "Bases sólidas de matemáticas y física, ya que el comportamiento de un reactor está fundamentado en física nuclear",
      "Comunicación escrita clara, ya que los procedimientos de seguridad y la documentación regulatoria tienen que ser exactos y sin ambigüedad",
    ],
    typicalProjects: [
      "Monitorear datos de desempeño de un reactor para confirmar que está operando dentro de los límites de seguridad",
      "Escribir o revisar un procedimiento para manejar o almacenar material radiactivo de forma segura",
      "Investigar una forma de hacer un proceso nuclear existente más eficiente sin comprometer la seguridad",
      "Trabajar con un equipo para prepararse para una inspección o auditoría regulatoria",
    ],
    typicalWorkday:
      "Espera una rotación entre monitorear datos de la planta o el sistema, revisar y escribir documentación de seguridad, y coordinar con un equipo el cumplimiento regulatorio. El tiempo se divide entre una oficina o sala de control y, dependiendo del puesto, tiempo presencial en la instalación física.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Reunión de turno", detail: "Revisar los datos de desempeño del reactor durante la noche y cualquier nota del turno anterior." },
        { time: "9:30 AM", label: "Revisión de sistemas", detail: "Monitorear datos en vivo del reactor para confirmar que todos los sistemas están dentro de los límites normales de operación." },
        { time: "11:00 AM", label: "Documentación de seguridad", detail: "Revisar un procedimiento para el manejo de material radiactivo para asegurarse de que cumple con las regulaciones actuales." },
        { time: "1:00 PM", label: "Coordinación regulatoria", detail: "Reunirse con un equipo de cumplimiento para preparar documentación para una inspección próxima." },
        { time: "2:30 PM", label: "Solución de problemas", detail: "Investigar una irregularidad menor en una lectura del sistema para descartar cualquier problema subyacente." },
        { time: "4:00 PM", label: "Cierre del día", detail: "Registrar los hallazgos de hoy e informar al turno entrante." },
      ],
      reflectionQuestion:
        "¿Te sentirías cómodo/a con un trabajo donde seguir procedimientos exactos importa tanto como la habilidad técnica?",
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
      medianAnnual: "$133,970",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/nuclear-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Investiga cómo una planta de energía nuclear genera electricidad y dibuja un diagrama simple del proceso.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables, como libros de biblioteca o sitios de ciencia de confianza.",
        activity: "Busca un club de STEM o física en tu escuela, o una exhibición de museo sobre energía o ciencia nuclear.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Investiga cómo se usa la medicina nuclear para diagnosticar o tratar enfermedades, y resume en qué se diferencia de una planta de energía nuclear.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables.",
        activity: "Investiga un equipo de Science Olympiad, que a veces cubre eventos relacionados con energía o temas nucleares.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Investiga los sistemas de seguridad usados en los diseños modernos de reactores nucleares y qué cambió después de un incidente histórico como Three Mile Island o Fukushima.",
        tool: "Todavía no necesitas herramientas especiales — fuentes confiables de ciencia e ingeniería.",
        activity: "Busca un capítulo estudiantil de ANS (American Nuclear Society), una posición de investigación de pregrado en un laboratorio nuclear o de radiación, o unas prácticas profesionales con una empresa eléctrica o un laboratorio nacional.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Generación de energía nuclear", "Medicina nuclear y atención médica", "Laboratorios nacionales e investigación", "Naval y defensa", "Gestión de residuos nucleares"],
    relatedMajors: ["Ingeniería Nuclear", "Ingeniería Mecánica (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Reactores", description: "Monitorea y optimiza la operación de un reactor nuclear para mantenerlo funcionando de forma segura y eficiente." },
      { title: "Ingeniero/a de Seguridad Nuclear", description: "Se enfoca específicamente en los sistemas y procedimientos de seguridad que previenen y responden a posibles incidentes." },
      { title: "Ingeniero/a de Protección Radiológica", description: "Diseña y monitorea sistemas que protegen a los trabajadores y al público de la exposición a la radiación." },
      { title: "Ingeniero/a de Combustible Nuclear", description: "Trabaja en el diseño, desempeño, y gestión del combustible usado en un reactor nuclear." },
    ],
    advantages: [
      "Salario mediano fuerte en comparación con muchos otros campos de ingeniería",
      "Experiencia altamente especializada que tiene demanda constante donde sea que operen instalaciones nucleares",
      "Trabajo que tiene una conexión directa y significativa con la infraestructura energética o la atención médica de un país",
    ],
    challenges: [
      "El crecimiento del empleo es esencialmente plano — la Oficina de Estadísticas Laborales de EE. UU. proyecta casi ningún cambio en el número de empleos de ingeniería nuclear hasta 2035",
      "Los requisitos regulatorios y procedimentales pesados dan forma a casi todas las partes del trabajo, dejando menos espacio para el diseño abierto",
      "La percepción pública de la energía nuclear puede ser una fuente de presión o escrutinio, sin importar el trabajo real de un ingeniero individual",
    ],
    thingsPeopleDislike: [
      "Una cantidad significativa de documentación y revisión de procedimientos, en lugar de trabajo de diseño práctico",
      "Un número limitado de instalaciones nucleares nuevas siendo construidas en algunos países, lo cual puede reducir dónde está disponible el trabajo",
      "Trabajar alrededor de materiales radiactivos requiere atención constante al protocolo de seguridad, lo cual algunos encuentran estresante con el tiempo",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta esencialmente ningún cambio (0%) en el empleo de ingenieros nucleares de 2025 a 2035 — entre las proyecciones más planas de cualquier campo de ingeniería en este sitio — con cerca de 800 vacantes proyectadas por año durante esa década, mayormente por trabajadores jubilándose o cambiando de carrera en lugar de por puestos nuevos que se crean. Eso no significa que el campo se esté reduciendo, ya que las plantas e instalaciones nucleares existentes necesitan personal de forma continua, pero sí significa que no se espera que crezca el número de puestos de ingeniería nuclear. La demanda también puede cambiar con las decisiones de política energética de un país — investiga el mercado actual y cualquier proyecto nuclear planeado en tu región específica antes de tomar decisiones.",
    beginnerActivities: [
      "Investiga cómo una planta de energía nuclear genera electricidad y esquematiza el proceso",
      "Investiga cómo se usa la medicina nuclear en la atención médica y en qué se diferencia de una planta de energía",
      "Investiga los sistemas de seguridad usados en los diseños modernos de reactores",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con un campo donde seguir procedimientos exactos importa tanto como la habilidad técnica pura?",
      "¿Saber que se espera que el número de empleos de ingeniería nuclear se mantenga estable, no que crezca, cambia cómo me siento sobre el campo?",
      "¿Me interesa la energía nuclear específicamente, o más ampliamente los sistemas de energía en general?",
    ],
  },
  {
    slug: "petroleum-engineering",
    name: "Ingeniería de Petróleo",
    tagline: "Cómo se extraen el petróleo y el gas natural del subsuelo, de forma segura y eficiente.",
    whatItIs:
      "La ingeniería de petróleo se enfoca en cómo extraer petróleo y gas natural del subsuelo de forma segura y eficiente — diseñando métodos de extracción, planes de perforación, y sistemas de producción. Es un campo especializado ligado de cerca a los propios ciclos económicos de la industria energética.",
    whatEngineersWorkOn:
      "Los ingenieros de petróleo diseñan y evalúan métodos para extraer petróleo y gas natural de yacimientos subterráneos, analizan datos geológicos para estimar cuánto puede producir un sitio, diseñan planes de perforación y equipo de producción, y trabajan para mejorar la eficiencia de extracción mientras gestionan el riesgo de seguridad y ambiental. Gran parte del trabajo implica una colaboración cercana con geólogos y geocientíficos, ya que la geología subyacente de un yacimiento impulsa casi cada decisión de ingeniería.",
    realWorldExamples: [
      "Diseño de pozos de petróleo y gas y planes de perforación",
      "Equipo de extracción y sistemas de producción",
      "Análisis de yacimientos para estimar cuánto petróleo o gas puede producir un sitio",
    ],
    commonMisconceptions: [
      "Que los ingenieros de petróleo pasan sus carreras trabajando físicamente en plataformas de perforación — muchos puestos están basados en una oficina analizando datos y planeando, con visitas periódicas al sitio en lugar de trabajo de campo de tiempo completo.",
      "Que es el mismo trabajo que un geólogo — los geólogos estudian e interpretan las formaciones de roca y fluidos subterráneas; los ingenieros de petróleo usan esa información para diseñar cómo extraer recursos de forma segura y eficiente.",
      "Que el campo está desapareciendo por completo — el crecimiento de la demanda global de petróleo y gas se ha desacelerado, pero el campo no está desapareciendo, y el salario sigue estando entre los más altos de cualquier disciplina de ingeniería.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros de petróleo pasan sus carreras trabajando físicamente en plataformas de perforación.", reality: "Muchos puestos están basados en una oficina analizando datos y planeando, con visitas periódicas al sitio en lugar de trabajo de campo de tiempo completo." },
      { myth: "Es el mismo trabajo que un geólogo.", reality: "Los geólogos estudian e interpretan las formaciones de roca y fluidos subterráneas; los ingenieros de petróleo usan esa información para diseñar cómo extraer recursos de forma segura y eficiente." },
      { myth: "El campo está desapareciendo por completo.", reality: "El crecimiento de la demanda global de petróleo y gas se ha desacelerado, pero el campo no está desapareciendo, y el salario sigue estando entre los más altos de cualquier disciplina de ingeniería." },
    ],
    usefulSubjects: ["Física", "Química", "Cálculo", "Ciencias de la tierra o geología, si está disponible"],
    helpfulSkills: [
      "Comodidad interpretando datos geológicos y de yacimientos para tomar decisiones de ingeniería",
      "Bases sólidas de matemáticas y física para modelar el flujo de fluidos y el comportamiento de yacimientos",
      "Evaluación de riesgos — sopesar factores de seguridad, costo, y ambientales al planear la extracción",
      "Disposición para viajar o trabajar en sitios de campo remotos, al menos periódicamente",
    ],
    typicalProjects: [
      "Analizar datos de yacimientos para estimar cuánto petróleo o gas puede producir un sitio",
      "Diseñar un plan de perforación para un pozo nuevo",
      "Evaluar formas de mejorar la eficiencia de extracción de un pozo existente",
      "Evaluar el riesgo de seguridad y ambiental de un método de extracción propuesto",
    ],
    typicalWorkday:
      "El análisis de datos y el modelado en la oficina ocupan la mayoría de las semanas, con — dependiendo del puesto — tiempo en un sitio de campo revisando las operaciones en persona. La colaboración con geólogos y otros ingenieros es una parte constante del trabajo, ya que las decisiones sobre yacimientos requieren aportes de múltiples disciplinas.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Revisión de datos", detail: "Revisar los datos de producción de la noche de un pozo activo." },
        { time: "9:30 AM", label: "Análisis de yacimiento", detail: "Analizar datos geológicos con un geólogo para estimar el potencial de producción de un sitio nuevo." },
        { time: "11:30 AM", label: "Plan de perforación", detail: "Trabajar en un plan de perforación para un pozo propuesto, considerando profundidad, equipo, y requisitos de seguridad." },
        { time: "1:30 PM", label: "Coordinación de equipo", detail: "Reunirse con el personal de operaciones de campo para revisar cómo está funcionando un sitio de extracción activo." },
        { time: "3:00 PM", label: "Evaluación de riesgos", detail: "Evaluar el riesgo de seguridad y ambiental de un cambio propuesto a un método de extracción." },
        { time: "4:30 PM", label: "Cierre del día", detail: "Documentar el análisis de hoy y actualizar el plan del proyecto." },
      ],
      reflectionQuestion:
        "¿Te sentirías cómodo/a en un campo donde el salario es fuerte pero está ligado de cerca a los altibajos de los mercados energéticos globales?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Medium",
      marketUncertainty: "High",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$144,910",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/petroleum-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región. Este campo está ligado de cerca a los ciclos de la industria del petróleo y el gas, lo cual afecta tanto el salario como la estabilidad laboral.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Investiga cómo se forman el petróleo y el gas natural bajo tierra y cómo los encuentran los ingenieros.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables, como libros de biblioteca o sitios de ciencia de confianza.",
        activity: "Busca un club de STEM o ciencias de la tierra en tu escuela.",
        relatedField: "chemical-engineering",
      },
      "high-school": {
        project: "Investiga cómo funciona una plataforma de perforación y esquematiza los pasos básicos para perforar un pozo.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables.",
        activity: "Investiga un equipo de Science Olympiad, que a veces cubre temas de ciencias de la tierra.",
        relatedField: "chemical-engineering",
      },
      "college": {
        project: "Investiga un campo real de petróleo o gas y estima, usando datos públicos, cómo ha cambiado la extracción ahí con el tiempo.",
        tool: "Fuentes públicas de datos de energía, como la base de datos pública de una agencia nacional de información energética, si está disponible en tu país.",
        activity: "Busca un capítulo estudiantil de SPE (Society of Petroleum Engineers), una posición de investigación de pregrado en tu departamento, o unas prácticas profesionales con una empresa de energía.",
        relatedField: "chemical-engineering",
      },
    },
    industries: ["Extracción de petróleo y gas", "Consultoría energética", "Perforación en alta mar", "Empresas de ingeniería de yacimientos", "Agencias gubernamentales de energía"],
    relatedMajors: ["Ingeniería de Petróleo", "Ingeniería Química (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Perforación", description: "Diseña y supervisa los planes para perforar un pozo de forma segura y eficiente." },
      { title: "Ingeniero/a de Yacimientos", description: "Analiza datos de yacimientos subterráneos para estimar el potencial de producción y planear la estrategia de extracción." },
      { title: "Ingeniero/a de Producción", description: "Se enfoca en optimizar qué tan eficientemente produce petróleo o gas un pozo o campo existente." },
      { title: "Ingeniero/a de Terminación de Pozos", description: "Diseña los pasos finales que preparan un pozo perforado para la producción." },
    ],
    advantages: [
      "Entre los salarios medianos más altos de cualquier campo de ingeniería en este sitio",
      "El trabajo da forma directamente a cómo se extrae y usa un recurso energético global importante",
      "Gran variedad técnica — geología, mecánica de fluidos, y diseño de equipo entran en juego",
    ],
    challenges: [
      "El salario y la estabilidad laboral están ligados de cerca a los precios globales del petróleo y el gas, que pueden cambiar rápidamente",
      "Algunos puestos requieren viajar o pasar tiempo extendido en sitios de campo remotos",
      "El campo enfrenta preguntas reales a largo plazo sobre el ritmo de la transición global fuera de los combustibles fósiles",
    ],
    thingsPeopleDislike: [
      "La seguridad laboral puede sentirse menos predecible que en campos menos ligados a los precios de las materias primas",
      "Condiciones remotas o físicamente exigentes en el sitio de campo en algunos puestos",
      "La percepción pública de la industria del petróleo y el gas puede ser una fuente de escrutinio adicional",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 2% para ingenieros de petróleo de 2025 a 2035 — más lento que el promedio de todas las ocupaciones — con cerca de 1,000 vacantes proyectadas por año durante esa década, mayormente por trabajadores jubilándose o cambiando de carrera. El salario está entre los más altos de cualquier campo de ingeniería, pero tanto la contratación como la compensación están ligadas de cerca a los precios globales del petróleo y el gas, que pueden cambiar sustancialmente de un año a otro. Investiga las condiciones actuales del mercado y las tendencias de contratación en tu región y sector de industria específicos antes de tomar decisiones.",
    beginnerActivities: [
      "Investiga cómo se forman el petróleo y el gas natural bajo tierra y cómo se localizan",
      "Investiga cómo funciona una plataforma de perforación y esquematiza los pasos básicos para perforar un pozo",
      "Investiga cómo ha cambiado con el tiempo la producción de un campo real de petróleo o gas usando datos públicos",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con un campo donde el salario y la estabilidad laboral están ligados de cerca a los precios energéticos globales?",
      "¿Me interesan las ciencias de la tierra y la geología tanto como la ingeniería tradicional?",
      "¿Estaría cómodo/a viajando o trabajando en un sitio de campo remoto, al menos periódicamente?",
    ],
  },
  {
    slug: "agricultural-engineering",
    name: "Ingeniería Agrícola",
    tagline: "La ingeniería puesta a trabajar en la agricultura y la producción de alimentos — equipo, riego, y sistemas alimentarios.",
    whatItIs:
      "La ingeniería agrícola aplica principios de ingeniería a la agricultura y la producción de alimentos — diseñando equipo, sistemas de riego, y estructuras que hacen la agricultura más eficiente, y adaptando la tecnología para trabajar con factores biológicos y ambientales que no se comportan como los materiales de ingeniería estándar.",
    whatEngineersWorkOn:
      "Los ingenieros agrícolas diseñan equipo y maquinaria agrícola, desarrollan sistemas de riego y gestión del agua, diseñan estructuras como instalaciones de almacenamiento y plantas de procesamiento, y trabajan en tecnología de agricultura de precisión como el monitoreo de cultivos basado en sensores. Gran parte del trabajo implica adaptar soluciones de ingeniería estándar para trabajar con sistemas biológicos — cultivos, suelo, y ganado — que se comportan de forma menos predecible que los materiales de ingeniería típicos.",
    realWorldExamples: [
      "Diseño de equipo y maquinaria agrícola",
      "Sistemas de riego y gestión del agua",
      "Sistemas de procesamiento y almacenamiento de alimentos",
      "Tecnología de agricultura de precisión, como monitoreo de cultivos basado en sensores",
    ],
    commonMisconceptions: [
      "Que los ingenieros agrícolas son lo mismo que los agricultores — los agricultores cultivan y crían ganado; los ingenieros agrícolas diseñan el equipo, los sistemas, y la tecnología que apoyan ese trabajo.",
      "Que el trabajo solo es relevante en áreas rurales — aunque gran parte del trabajo de campo ocurre en granjas, los ingenieros agrícolas también trabajan en plantas de procesamiento de alimentos, laboratorios de investigación, y empresas de fabricación de equipo que pueden estar ubicadas casi en cualquier lugar.",
      "Que es un campo de baja tecnología — la ingeniería agrícola moderna implica tecnología real, incluyendo sensores, automatización, y análisis de datos para agricultura de precisión.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros agrícolas son lo mismo que los agricultores.", reality: "Los agricultores cultivan y crían ganado; los ingenieros agrícolas diseñan el equipo, los sistemas, y la tecnología que apoyan ese trabajo." },
      { myth: "El trabajo solo es relevante en áreas rurales.", reality: "Aunque gran parte del trabajo de campo ocurre en granjas, los ingenieros agrícolas también trabajan en plantas de procesamiento de alimentos, laboratorios de investigación, y empresas de fabricación de equipo que pueden estar ubicadas casi en cualquier lugar." },
      { myth: "Es un campo de baja tecnología.", reality: "La ingeniería agrícola moderna implica tecnología real, incluyendo sensores, automatización, y análisis de datos para agricultura de precisión." },
    ],
    usefulSubjects: ["Biología", "Física", "Química", "Cálculo"],
    helpfulSkills: [
      "Comodidad combinando fundamentos de ingeniería con biología y ciencias ambientales",
      "Resolución práctica de problemas, ya que el equipo a menudo tiene que funcionar de forma confiable en condiciones exteriores impredecibles",
      "Pensamiento sistémico, ya que los sistemas agrícolas involucran factores biológicos, mecánicos, y ambientales que interactúan entre sí",
      "Disposición para pasar tiempo en granjas o sitios de campo, no solo en una oficina o laboratorio",
    ],
    typicalProjects: [
      "Diseñar o mejorar una pieza de equipo agrícola, como una máquina de siembra o cosecha",
      "Diseñar un sistema de riego para un cultivo y clima específicos",
      "Probar tecnología basada en sensores para monitorear la salud de los cultivos o las condiciones del suelo",
      "Diseñar una instalación de almacenamiento o procesamiento para reducir el desperdicio de alimentos después de la cosecha",
    ],
    typicalWorkday:
      "El trabajo de diseño y pruebas suele dividirse entre una oficina o laboratorio y tiempo en una granja o sitio de campo donde realmente se usan el equipo y los sistemas. La colaboración con agricultores, agrónomos, y científicos de alimentos es una parte regular del trabajo, ya que las condiciones agrícolas del mundo real informan constantemente la ingeniería.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Visita de campo", detail: "Visitar un sitio de granja para ver cómo está funcionando en condiciones reales una pieza de equipo o un sistema de riego." },
        { time: "9:30 AM", label: "Revisión de datos", detail: "Revisar datos de sensores de un sistema de agricultura de precisión para verificar las condiciones del cultivo o el suelo." },
        { time: "11:00 AM", label: "Trabajo de diseño", detail: "Trabajar en un diseño para una pieza nueva o mejorada de equipo agrícola." },
        { time: "1:00 PM", label: "Colaboración", detail: "Reunirse con un agricultor o agrónomo para entender un problema real que el diseño necesita resolver." },
        { time: "2:30 PM", label: "Pruebas", detail: "Probar un prototipo bajo condiciones que imitan el uso real en una granja." },
        { time: "4:00 PM", label: "Cierre del día", detail: "Documentar los resultados de las pruebas de hoy y planear los próximos pasos." },
      ],
      reflectionQuestion:
        "¿Disfrutarías un trabajo de ingeniería donde los 'materiales' con los que diseñas — suelo, cultivos, clima — no se comportan tan predeciblemente como el acero o el plástico?",
    },
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "High",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "High",
      biologyContent: "High",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$98,590",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/agricultural-engineers.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Investiga cómo un sistema de riego moderno decide cuándo y cuánto regar los cultivos.",
        tool: "Todavía no necesitas herramientas especiales — fuentes de ciencia confiables.",
        activity: "Busca un club de 4-H, un capítulo de FFA (Future Farmers of America), o un club de STEM en tu escuela, si hay uno disponible.",
        relatedField: "environmental-engineering",
      },
      "high-school": {
        project: "Diseña un sistema simple de riego por goteo usando materiales caseros y prueba qué tan uniformemente riega una pequeña área.",
        tool: "Materiales caseros básicos — tubería, recipientes, y algo para hacer pequeños agujeros.",
        activity: "Investiga un programa 4-H o FFA, que a menudo incluyen proyectos prácticos de tecnología agrícola.",
        relatedField: "environmental-engineering",
      },
      "college": {
        project: "Investiga una tecnología real de agricultura de precisión, como sensores de suelo o monitoreo de cultivos con drones, y resume cómo cambia las decisiones agrícolas.",
        tool: "Fuentes confiables de tecnología agrícola, como el sitio web público de un programa de extensión universitaria.",
        activity: "Busca un capítulo estudiantil de ASABE (American Society of Agricultural and Biological Engineers), una posición de investigación de pregrado en un laboratorio de ingeniería agrícola, o unas prácticas profesionales con una empresa de tecnología agrícola.",
        relatedField: "environmental-engineering",
      },
    },
    industries: ["Fabricación de equipo agrícola", "Procesamiento de alimentos", "Riego y gestión del agua", "Tecnología agrícola (AgTech)", "Agencias gubernamentales de agricultura"],
    relatedMajors: ["Ingeniería Agrícola", "Ingeniería Mecánica (con cierta superposición)", "Ingeniería Ambiental (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Diseño de Equipo Agrícola", description: "Diseña y mejora la maquinaria usada para sembrar, cosechar, y otras tareas agrícolas." },
      { title: "Ingeniero/a de Riego", description: "Diseña sistemas de gestión del agua y riego adaptados a cultivos y climas específicos." },
      { title: "Ingeniero/a de Procesamiento de Alimentos", description: "Diseña el equipo y los sistemas usados para procesar, empacar, y almacenar alimentos después de la cosecha." },
      { title: "Ingeniero/a de Agricultura de Precisión", description: "Desarrolla tecnología basada en sensores y datos para ayudar a los agricultores a tomar decisiones más informadas." },
    ],
    advantages: [
      "El trabajo apoya directamente la producción de alimentos, que es una necesidad esencial en todas partes",
      "Un campo genuinamente interdisciplinario que combina la ingeniería con la biología y las ciencias ambientales",
      "Impacto real y constante — las mejoras en este campo pueden reducir significativamente el desperdicio o mejorar los rendimientos",
    ],
    challenges: [
      "El equipo tiene que funcionar de forma confiable en condiciones exteriores impredecibles, lo cual es más difícil de diseñar que para un entorno controlado",
      "El campo es más pequeño que muchas otras disciplinas de ingeniería, lo cual puede significar menos vacantes en general",
      "Algunos puestos requieren viajes regulares o tiempo en sitios de granjas rurales, lo cual no es para todos",
    ],
    thingsPeopleDislike: [
      "Un número relativamente pequeño de vacantes en comparación con campos de ingeniería más grandes",
      "El trabajo de campo al aire libre puede significar exposición al clima y condiciones de trabajo menos cómodas",
      "El salario tiende a ser algo más bajo que en muchas otras especialidades de ingeniería",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 7% para ingenieros agrícolas de 2025 a 2035 — más rápido que el promedio de todas las ocupaciones — con cerca de 100 vacantes proyectadas por año durante esa década. Ese es uno de los conteos anuales de vacantes más pequeños entre los campos de ingeniería en este sitio, ya que la ingeniería agrícola es un campo comparativamente pequeño y especializado. Investiga el mercado actual y la demanda en tu región y país específicos antes de tomar decisiones, ya que las necesidades de tecnología agrícola pueden variar mucho según las prácticas agrícolas locales.",
    beginnerActivities: [
      "Investiga cómo un sistema de riego moderno decide cuándo y cuánto regar los cultivos",
      "Diseña un sistema simple de riego por goteo con materiales caseros y prueba qué tan uniformemente riega un área",
      "Investiga una tecnología real de agricultura de precisión, como sensores de suelo o monitoreo de cultivos con drones",
    ],
    selfReflectionQuestions: [
      "¿Disfrutaría un trabajo de ingeniería donde los 'materiales' subyacentes — suelo, cultivos, clima — no se comportan tan predeciblemente como el acero o el plástico?",
      "¿Estoy cómodo/a pasando tiempo real al aire libre o en sitios de granjas, no solo en una oficina o laboratorio?",
      "¿Me interesa genuinamente la agricultura y los sistemas alimentarios, o principalmente el lado mecánico o tecnológico?",
    ],
  },
  {
    slug: "marine-engineering",
    name: "Ingeniería Marina",
    tagline: "Barcos, submarinos, y otras embarcaciones construidas para el océano — diseñados y mantenidos en operación.",
    whatItIs:
      "La ingeniería marina, a menudo combinada con la arquitectura naval, se enfoca en diseñar, construir, y mantener barcos, submarinos, y otras embarcaciones y estructuras marinas — el casco, los sistemas de propulsión, y los sistemas mecánicos y eléctricos a bordo todos tienen que funcionar de forma confiable en un entorno oceánico exigente.",
    whatEngineersWorkOn:
      "Los ingenieros marinos diseñan y mantienen los sistemas de propulsión, energía, y mecánicos que mantienen funcionando a los barcos y otras embarcaciones, mientras que los arquitectos navales (un rol estrechamente relacionado, a menudo estudiado junto con este) se enfocan más en el casco y el diseño general de la embarcación. Los ingenieros marinos prueban cómo aguantan los sistemas bajo condiciones oceánicas reales — presión, corrosión, y movimiento constante — y trabajan para mantener las embarcaciones existentes operando de forma segura y eficiente.",
    realWorldExamples: [
      "Diseño de cascos y análisis estructural de barcos",
      "Sistemas de propulsión y potencia de barcos",
      "Diseño de plataformas marinas",
      "Sistemas de submarinos y embarcaciones navales",
    ],
    commonMisconceptions: [
      "Que los ingenieros marinos solo trabajan en barcos navales o militares — el campo también cubre barcos de carga comerciales, cruceros, embarcaciones pesqueras, plataformas marinas, y botes recreativos.",
      "Que es lo mismo que la arquitectura naval — los arquitectos navales se enfocan más en el casco, la estabilidad, y el diseño general de una embarcación; los ingenieros marinos se enfocan más en los sistemas de propulsión, energía, y mecánicos dentro de ella. En la práctica, los dos campos se superponen y a menudo se estudian juntos.",
      "Que el trabajo requiere estar en el mar constantemente — muchos ingenieros marinos trabajan en oficinas, astilleros, o empresas de diseño, con tiempo en el mar siendo solo una parte de algunos puestos, no todo el trabajo.",
    ],
    mythsAndRealities: [
      { myth: "Los ingenieros marinos solo trabajan en barcos navales o militares.", reality: "El campo también cubre barcos de carga comerciales, cruceros, embarcaciones pesqueras, plataformas marinas, y botes recreativos." },
      { myth: "Es lo mismo que la arquitectura naval.", reality: "Los arquitectos navales se enfocan más en el casco, la estabilidad, y el diseño general de una embarcación; los ingenieros marinos se enfocan más en los sistemas de propulsión, energía, y mecánicos dentro de ella. En la práctica, los dos campos se superponen y a menudo se estudian juntos." },
      { myth: "El trabajo requiere estar en el mar constantemente.", reality: "Muchos ingenieros marinos trabajan en oficinas, astilleros, o empresas de diseño, con tiempo en el mar siendo solo una parte de algunos puestos, no todo el trabajo." },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química (para entender la corrosión y los materiales)"],
    helpfulSkills: [
      "Bases sólidas de mecánica y estructuras, ya que las embarcaciones tienen que resistir estrés físico extremo y constante",
      "Comodidad con la corrosión, los materiales, y cómo se comportan en un ambiente de agua salada con el tiempo",
      "Pensamiento sistémico, ya que los sistemas de propulsión, energía, y estructurales de una embarcación tienen que funcionar juntos de forma confiable",
      "Disposición para trabajar en un astillero o a bordo de una embarcación, al menos para algunos puestos",
    ],
    typicalProjects: [
      "Diseñar o evaluar el sistema de propulsión o energía de una embarcación",
      "Analizar cómo aguantan el casco y la estructura de un barco bajo estrés y cargas oceánicas reales",
      "Inspeccionar los sistemas mecánicos de una embarcación existente en busca de desgaste, corrosión, o reparaciones necesarias",
      "Trabajar en el diseño de una plataforma marina u otra estructura marítima",
    ],
    typicalWorkday:
      "El trabajo de diseño y análisis en una oficina da paso a tiempo en un astillero o a bordo de una embarcación, inspeccionando sistemas y estructuras reales. El equilibrio entre el trabajo de oficina y el trabajo práctico en el sitio varía mucho según el puesto y el empleador específicos.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Inspección en el astillero", detail: "Inspeccionar el sistema de propulsión de una embarcación en busca de desgaste o mantenimiento necesario." },
        { time: "9:30 AM", label: "Revisión de diseño", detail: "Revisar un diseño para un nuevo componente del sistema de propulsión contra los requisitos de desempeño." },
        { time: "11:00 AM", label: "Análisis estructural", detail: "Analizar cómo aguanta una sección del casco bajo una carga nueva propuesta." },
        { time: "1:00 PM", label: "Coordinación de equipo", detail: "Reunirse con un arquitecto naval para coordinar cómo encajan los sistemas estructurales y mecánicos." },
        { time: "2:30 PM", label: "Revisión de materiales", detail: "Evaluar cómo está aguantando un material contra la corrosión después de tiempo en agua salada." },
        { time: "4:00 PM", label: "Cierre del día", detail: "Documentar los hallazgos de hoy y actualizar el plan del proyecto." },
      ],
      reflectionQuestion:
        "¿Disfrutarías un trabajo de ingeniería que tiene que aguantar contra uno de los entornos más físicamente exigentes — agua salada constante, presión, y movimiento?",
    },
    stats: {
      mathIntensity: "High",
      handsOnWork: "High",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$112,230",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/marine-engineers-and-naval-architects.htm",
      note: "Esta es una mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
    nextSteps: {
      "middle-school": {
        project: "Investiga cómo un barco se mantiene a flote e intenta un experimento simple de flotabilidad usando plastilina o papel aluminio en un recipiente con agua.",
        tool: "Materiales caseros básicos — plastilina, papel aluminio, y un recipiente con agua.",
        activity: "Busca un club de STEM en tu escuela, o una exhibición de museo marítimo, si hay uno cerca de ti.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Construye un casco de bote simple con materiales caseros y prueba cuánto peso puede aguantar antes de hundirse.",
        tool: "Materiales caseros básicos — cartón, papel aluminio, o recipientes de plástico, y pesas para probar.",
        activity: "Investiga un equipo de Science Olympiad, que a veces incluye eventos relacionados con diseño de botes o ingeniería naval.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Investiga cómo se diseñan los barcos modernos para resistir la corrosión en agua salada, y resume las principales estrategias usadas.",
        tool: "Fuentes de ingeniería confiables, como el sitio web público de una organización de ingeniería marítima.",
        activity: "Busca un capítulo estudiantil de SNAME (Society of Naval Architects and Marine Engineers), una posición de investigación de pregrado en tu departamento, o unas prácticas profesionales con un astillero o una firma de arquitectura naval.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Construcción naval", "Transporte marítimo comercial", "Naval y defensa", "Energía en alta mar", "Fabricación de equipo marino"],
    relatedMajors: ["Ingeniería Marina", "Arquitectura Naval", "Ingeniería Mecánica (con cierta superposición)"],
    careerPaths: [
      { title: "Ingeniero/a de Sistemas Marinos", description: "Diseña y mantiene los sistemas de propulsión, energía, y mecánicos de una embarcación." },
      { title: "Arquitecto/a Naval", description: "Se enfoca en el diseño del casco, la estabilidad, y la forma estructural general de una embarcación, estrechamente vinculado con la ingeniería marina." },
      { title: "Ingeniero/a de Estructuras en Alta Mar", description: "Diseña plataformas y estructuras construidas para operar de forma segura en condiciones de mar abierto." },
      { title: "Inspector/a Marino/a", description: "Inspecciona embarcaciones y estructuras marinas para evaluar su condición, seguridad, y cumplimiento con los estándares." },
    ],
    advantages: [
      "Experiencia altamente especializada con demanda constante donde sea que se construyan o mantengan barcos y estructuras marinas",
      "Desafíos de ingeniería reales y tangibles — pocos entornos son tan físicamente exigentes como el océano abierto",
      "El trabajo puede abarcar una amplia gama de tipos de embarcaciones, desde transporte comercial hasta defensa y energía en alta mar",
    ],
    challenges: [
      "Las exigencias físicas del entorno oceánico — presión, corrosión, movimiento constante — crean problemas de ingeniería genuinamente difíciles",
      "Algunos puestos requieren tiempo en un astillero o a bordo de una embarcación, lo cual no es para todos",
      "El campo es más especializado y pequeño que muchas otras disciplinas de ingeniería, lo cual puede reducir dónde está disponible el trabajo",
    ],
    thingsPeopleDislike: [
      "Algunos puestos requieren tiempo prolongado lejos de casa, en un astillero o a bordo de una embarcación",
      "El campo está concentrado en regiones costeras o portuarias específicas, lo cual puede limitar dónde puedes trabajar",
      "La corrosión, el desgaste, y los problemas de mantenimiento son una parte constante y continua del trabajo, no un problema de diseño de una sola vez",
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. proyecta un crecimiento del empleo del 7% para ingenieros marinos y arquitectos navales de 2025 a 2035 — más rápido que el promedio de todas las ocupaciones — con cerca de 500 vacantes proyectadas por año durante esa década. La demanda está ligada a la construcción naval, el transporte marítimo comercial, y la actividad naval, lo cual puede variar según la región y el país — investiga el mercado actual y la industria de construcción naval en tu área específica antes de tomar decisiones.",
    beginnerActivities: [
      "Investiga cómo un barco se mantiene a flote e intenta un experimento simple de flotabilidad con plastilina o papel aluminio",
      "Construye un casco de bote simple con materiales caseros y prueba cuánto peso puede aguantar",
      "Investiga cómo los barcos modernos resisten la corrosión en agua salada",
    ],
    selfReflectionQuestions: [
      "¿Disfrutaría un trabajo de ingeniería que tiene que aguantar contra condiciones físicas extremadamente exigentes, como agua salada constante y presión?",
      "¿Estoy cómodo/a con que algunos puestos requieran tiempo en un astillero o a bordo de una embarcación, posiblemente lejos de casa?",
      "¿Me atrae la ingeniería marina específicamente, o más ampliamente la ingeniería mecánica o estructural?",
    ],
  },
  {
    slug: "architectural-engineering",
    name: "Ingeniería Arquitectónica",
    tagline: "Los sistemas estructurales, mecánicos y eléctricos que hacen que un edificio realmente funcione.",
    whatItIs:
      "Los sistemas técnicos dentro de un edificio — soporte estructural, calefacción y refrigeración, electricidad, iluminación, acústica — son el territorio de la ingeniería arquitectónica, trabajado junto a arquitectos, quienes se enfocan más en la forma y distribución del edificio. Es un campo más pequeño y especializado que combina conceptos de ingeniería civil, mecánica y eléctrica aplicados específicamente a edificios.",
    realWorldExamples: [
      "Sistemas estructurales para edificios grandes o complejos",
      "Diseño de sistemas de calefacción, refrigeración, y ventilación",
      "Sistemas eléctricos y de iluminación de edificios",
      "Diseño acústico para espacios como salas de conciertos",
    ],
    relatedMajors: ["Ingeniería Arquitectónica", "Ingeniería Civil (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    salaryNote:
      "La Oficina de Estadísticas Laborales de EE. UU. no rastrea la ingeniería arquitectónica como su propia categoría separada — usualmente se agrupa con la ingeniería civil o mecánica según el puesto específico. Consulta la página de Ingeniería Civil para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros arquitectónicos hacen que el interior de un edificio funcione. Eso significa dimensionar los sistemas de calefacción y refrigeración de un espacio, trazar la distribución eléctrica y la iluminación, hacer pasar ductos y tuberías por una estructura que ya está llena de vigas, y comprobar que una sala va a sonar como debe. El reto recurrente es espacial: varios sistemas necesitan ocupar el mismo hueco de techo, y alguien tiene que resolver de quién es ese espacio.",
    commonMisconceptions: [
      "Que es lo mismo que la arquitectura — los arquitectos trabajan la forma, la distribución, y el uso; los ingenieros arquitectónicos, los sistemas que hacen habitable el edificio.",
      "Que los sistemas se añaden al final — los recorridos y el espacio de máquinas hay que planificarlos temprano o simplemente no caben.",
      "Que es un campo pequeño y menor — climatización, iluminación, y electricidad son una parte grande tanto del costo de un edificio como de su consumo energético.",
      "Que el trabajo es invisible — los ocupantes lo notan de inmediato cuando está mal hecho: ruido, corrientes de aire, deslumbramiento, o salas que nunca alcanzan la temperatura.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería arquitectónica es otro nombre para la arquitectura.",
        reality:
          "Los arquitectos dan forma al edificio. Los ingenieros arquitectónicos diseñan los sistemas estructurales, mecánicos, eléctricos, y acústicos de su interior, normalmente trabajando junto a ellos.",
      },
      {
        myth: "Los sistemas del edificio se diseñan al final.",
        reality:
          "Las salas de máquinas, los patinillos, y el espacio de techo hay que reservarlos temprano. Dejarlo tarde es como acabas con ductos que no tienen por dónde pasar.",
      },
      {
        myth: "Nadie nota este trabajo.",
        reality:
          "Nadie lo nota cuando está bien. Una rejilla ruidosa, una luminaria que deslumbra, o una sala que no enfría se notan de inmediato.",
      },
      {
        myth: "Se trata sobre todo de elegir equipos de un catálogo.",
        reality:
          "La selección es un paso. Calcular cargas, coordinar recorridos por la estructura, y cumplir requisitos energéticos y normativos es el trabajo real.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Dibujo técnico o CAD, si está disponible", "Química", "Cualquier materia de dibujo o diseño que ofrezca tu escuela"],
    helpfulSkills: [
      "Buen razonamiento espacial, porque varios sistemas compiten por el mismo espacio físico",
      "Soltura con fundamentos mecánicos y eléctricos, ya que el puesto abarca ambos",
      "Coordinación con arquitectos y otros oficios, que es parte diaria del trabajo",
      "Cuidado con normativas y estándares energéticos, que definen buena parte de lo que un edificio puede hacer",
      "Atención a cómo la gente experimenta realmente un espacio — temperatura, luz, y ruido",
    ],
    typicalProjects: [
      "Dimensionar calefacción y refrigeración según el uso, el clima, y la construcción del edificio",
      "Trazar la distribución eléctrica y la iluminación de una planta",
      "Coordinar recorridos de ductos, tuberías, y cableado por la estructura para que todo quepa",
      "Diseñar la acústica de un espacio donde la calidad del sonido importa",
      "Modelar el consumo energético previsto de un edificio y ajustar el diseño para reducirlo",
    ],
    typicalWorkday:
      "La mayor parte del día es diseño y coordinación frente a una computadora, trabajando en un modelo compartido del edificio con arquitectos y otros ingenieros y resolviendo las interferencias que aparecen. Las visitas a obra se concentran durante la construcción, comprobando que lo que se instala coincide con los planos. Los plazos siguen las fases de diseño del proyecto, así que la carga llega por oleadas más que de forma pareja.",
    industries: [
      "Consultoras de instalaciones e ingeniería multidisciplinar",
      "Estudios de arquitectura con ingeniería interna",
      "Constructoras y empresas de diseño y construcción",
      "Grandes propietarios inmobiliarios y equipos de mantenimiento institucional",
      "Fabricantes de sistemas y equipos para edificios",
    ],
    advantages: [
      "El resultado son lugares donde la gente pasa la vida entera",
      "El trabajo abarca pensamiento mecánico, eléctrico, y estructural en vez de un área estrecha",
      "Hay una línea directa entre las decisiones de diseño y cuánta energía consume un edificio",
      "Siempre se están construyendo, reformando, y actualizando edificios, así que el trabajo no depende de un solo sector",
    ],
    challenges: [
      "Diseñas dentro de restricciones fijadas por la arquitectura, y rara vez puedes moverlas",
      "Los conflictos de coordinación son constantes, porque cada sistema quiere el mismo hueco de techo",
      "Los recortes de presupuesto suelen caer sobre sistemas que el ocupante no ve hasta que fallan",
      "Las normativas y requisitos energéticos son detallados y cambian con el tiempo",
    ],
    thingsPeopleDislike: [
      "Rehacer recorridos porque un cambio estructural o arquitectónico movió algo",
      "Ver cómo se recorta calidad en sistemas que los ocupantes sufrirán durante décadas",
      "El volumen de reuniones de coordinación en un proyecto grande",
      "Que te culpen por quejas de confort causadas por decisiones tomadas en otro lado",
    ],
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Revisar el modelo", detail: "Abrir el modelo compartido del edificio y descubrir que una revisión estructural movió dos vigas alrededor de las que pasaban tus ductos." },
        { time: "10:00 AM", label: "Cálculo de cargas", detail: "Calcular cuánta calefacción y refrigeración necesita una planta según su uso, el clima local, y cómo están construidos sus muros y ventanales." },
        { time: "11:30 AM", label: "Reunión de coordinación", detail: "Revisar interferencias con el arquitecto y los demás ingenieros — decidir qué sistema se queda con el hueco de techo que tres de ellos quieren." },
        { time: "1:30 PM", label: "Iluminación y electricidad", detail: "Distribuir las luminarias y la instalación eléctrica de una planta, y comprobar los niveles de luz según para qué sirve cada sala." },
        { time: "3:00 PM", label: "Visita a obra", detail: "En un edificio en construcción, recorrer una planta para comprobar que lo que se instala coincide con los planos." },
        { time: "4:30 PM", label: "Correcciones", detail: "Actualizar los planos después de la reunión y la visita, y anotar preguntas para el arquitecto." },
      ],
      reflectionQuestion: "¿Te sentirías cómodo/a diseñando los sistemas dentro de un edificio al que otra persona ya le dio forma, en vez de darle forma tú?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    nextSteps: {
      "middle-school": {
        project: "Dibuja el plano de tu casa y marca por dónde crees que pasan las tuberías, los cables, y los ductos; luego comprueba lo que realmente se ve.",
        tool: "Papel cuadriculado y un lápiz — todavía no hacen falta herramientas especiales.",
        activity: "Busca un club de ciencia, tecnología, o diseño en tu escuela, o una visita guiada a un edificio en un museo o biblioteca local, si hay alguna disponible.",
        relatedField: "civil-engineering",
      },
      "high-school": {
        project: "Modela una habitación pequeña en una herramienta 3D gratuita y planifica dónde irían la iluminación, la ventilación, y los enchufes.",
        tool: "SketchUp Free o Tinkercad — ambos gratuitos y funcionan en el navegador.",
        activity: "Infórmate sobre un capítulo del ACE Mentor Program (arquitectura, construcción, e ingeniería, en EE. UU.) o una clase de dibujo técnico, si tu zona o escuela lo tiene.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Modela un edificio sencillo en una herramienta gratuita de simulación energética y observa cómo el aislamiento, los ventanales, o la orientación cambian cuánta energía consume.",
        tool: "EnergyPlus u OpenStudio — software gratuito de simulación energética de edificios respaldado por el Departamento de Energía de EE. UU.",
        activity: "Busca una rama estudiantil de ASHRAE, un capítulo estudiantil del Architectural Engineering Institute (AEI), o unas prácticas en una empresa de ingeniería de instalaciones.",
        relatedField: "electrical-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a de Diseño de Climatización (HVAC)", description: "Dimensiona y distribuye los sistemas de calefacción, refrigeración, y ventilación de los edificios." },
      { title: "Ingeniero/a Eléctrico/a y de Iluminación de Edificios", description: "Diseña cómo se distribuyen la electricidad y la iluminación en un edificio, desde la acometida hasta cada sala." },
      { title: "Modelador/a Energético/a de Edificios", description: "Simula cuánta energía consumirá el diseño de un edificio y prueba cambios que la reducirían." },
      { title: "Consultor/a Acústico/a", description: "Diseña cómo suenan los espacios y cuánto ruido pasa entre ellos, desde oficinas hasta salas de conciertos." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. no publica una proyección de empleo separada para la ingeniería arquitectónica, así que no hay una cifra de crecimiento oficial específica para este campo. Es un campo más pequeño y especializado, y no todas las universidades lo ofrecen como carrera propia — mucha gente llega a este trabajo desde la ingeniería civil, mecánica, o eléctrica. La demanda depende de cuánto se construye y se renueva, lo que varía según la región y con el tiempo, así que investiga el sector de la construcción y los programas disponibles donde vives antes de tomar decisiones.",
    beginnerActivities: [
      "Recorre un edificio grande, como una biblioteca o una escuela, e intenta encontrar las rejillas, los rociadores, las luminarias, y los paneles de registro que muestran por dónde pasan sus sistemas",
      "Mide la temperatura de varias habitaciones de tu casa al mismo tiempo y piensa por qué son distintas",
      "Modela una habitación en una herramienta 3D gratuita y averigua dónde podrían caber los ductos y las luces en el hueco del techo",
    ],
    selfReflectionQuestions: [
      "¿Me sentiría satisfecho/a diseñando los sistemas dentro del edificio de otra persona, en vez de diseñar el edificio en sí?",
      "¿Disfruto los rompecabezas espaciales, como meter varias cosas en un espacio que se queda un poco chico?",
      "¿Estoy cómodo/a con que las normativas y los estándares definan muchas de mis decisiones?",
      "¿Me quedaría bien un trabajo con muchas reuniones de coordinación?",
    ],
  },
  {
    slug: "automotive-engineering",
    name: "Ingeniería Automotriz",
    tagline: "El diseño, las pruebas, y la fabricación detrás de los autos y otros vehículos de carretera.",
    whatItIs:
      "La ingeniería automotriz trata sobre el diseño, las pruebas, y la fabricación de autos y otros vehículos de carretera — motores, transmisiones, sistemas de seguridad, y, cada vez más, tecnología de vehículos eléctricos y autónomos. Normalmente se estudia como una especialización dentro de la ingeniería mecánica, no como su propia carrera separada.",
    realWorldExamples: [
      "Diseño de motores y sistemas de transmisión",
      "Pruebas de seguridad y colisión de vehículos",
      "Sistemas de batería y motor para vehículos eléctricos",
      "Sistemas avanzados de asistencia al conductor y vehículos autónomos",
    ],
    relatedMajors: ["Ingeniería Mecánica (con enfoque automotriz)", "Ingeniería Eléctrica (con cierta superposición para sistemas eléctricos y autónomos)"],
    salaryNote:
      "Los ingenieros automotrices normalmente se rastrean bajo la categoría más amplia de 'ingenieros mecánicos' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Mecánica para ver esos datos de salario con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros automotrices trabajan a fondo sobre una parte del vehículo, no sobre autos enteros a la vez. Una persona puede encargarse del sistema de refrigeración, del mecanismo del pestillo de una puerta, de la gestión térmica de la batería, o del software que decide cuándo intervienen los frenos. El trabajo va desde el diseño y la simulación inicial hasta la construcción de prototipos, las pruebas, y la larga etapa de revisión posterior — buena parte de la cual se dedica a averiguar por qué una pieza no se comporta como decía el modelo, y a cambiarla hasta que lo haga.",
    commonMisconceptions: [
      "Que los ingenieros automotrices diseñan el aspecto de los autos — el estilo exterior e interior lo hacen sobre todo diseñadores, y los ingenieros trabajan dentro de formas que a menudo ya están decididas.",
      "Que el trabajo trata sobre todo de rendimiento y velocidad — se dedica mucho más esfuerzo de ingeniería a la seguridad, las emisiones, el costo, la durabilidad, y la fabricabilidad que a hacer un vehículo rápido.",
      "Que los vehículos eléctricos simplificaron el campo — un eléctrico elimina el motor y la caja de cambios, pero añade sistemas de alto voltaje, gestión térmica de baterías, y mucho más software.",
      "Que hay que ser aficionado a los autos para pertenecer aquí — mucha gente entra desde la ingeniería mecánica, eléctrica, o de software sin haber reconstruido nunca un motor.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros automotrices diseñan cómo se ven los autos.",
        reality:
          "El estilo es en gran medida trabajo de un diseñador. Los ingenieros suelen trabajar dentro de una forma ya aprobada, y buena parte de la habilidad está en hacer que el mecanismo quepa en el espacio disponible.",
      },
      {
        myth: "El trabajo trata sobre todo de hacer autos rápidos.",
        reality:
          "El rendimiento es un requisito que compite con la seguridad ante choques, las emisiones, el costo, el peso, la fiabilidad, y si una fábrica puede realmente producir la pieza.",
      },
      {
        myth: "Pasas los días rodeado de autos terminados.",
        reality:
          "La mayor parte del trabajo es sobre un componente, un banco de pruebas, una simulación, o una hoja de resultados. Algunos ingenieros pasan años sin tener un vehículo completo delante.",
      },
      {
        myth: "Los vehículos eléctricos hicieron más fácil la ingeniería automotriz.",
        reality:
          "Cambió dónde está la dificultad en vez de eliminarla. Los motores y las transmisiones dieron paso a la química de baterías, la seguridad de alto voltaje, la gestión térmica, y el software.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Informática o programación, si se ofrece", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Soltura con la mecánica y la termodinámica, ya que casi todos los problemas de un vehículo se reducen a fuerzas, calor, o ambos",
      "Disposición a probar y volver a probar, porque una pieza que funciona en simulación a menudo se comporta distinto en un banco de pruebas",
      "Atención a las tolerancias y al costo, ya que un diseño que no se puede fabricar de forma repetible y económica no llega a producción",
      "Programación suficiente para ser útil, porque cada vez más el comportamiento del vehículo se decide en software",
      "Trabajar dentro de restricciones fijadas por otros equipos, que es buena parte de la realidad diaria del puesto",
    ],
    typicalProjects: [
      "Diseñar y validar un solo componente — un soporte, una bomba, un pestillo — frente a objetivos de resistencia, peso, y costo",
      "Realizar pruebas de choque o durabilidad y analizar qué dicen los resultados sobre el diseño",
      "Desarrollar la gestión térmica de una batería para que se mantenga en su rango seguro de temperatura",
      "Ajustar el software de control de frenado, tracción, o asistencia al conductor",
      "Rediseñar una pieza para que pueda montarse realmente en una línea de producción al ritmo necesario",
    ],
    typicalWorkday:
      "El tiempo se reparte entre el diseño y la simulación frente a una computadora, el trabajo en un laboratorio de pruebas o un banco, y bastantes reuniones con los otros equipos cuyas piezas tocan la tuya. Los ciclos de prueba marcan el ritmo: se ejecuta un ensayo, llegan los resultados, y los días siguientes se dedican a entenderlos. Los plazos suelen estar ligados a los hitos del programa del vehículo, lo que hace que algunas etapas sean mucho más intensas que otras.",
    industries: [
      "Fabricantes de vehículos",
      "Proveedores de componentes y sistemas, que emplean a una gran parte de los ingenieros automotrices",
      "Empresas de vehículos eléctricos y baterías",
      "Automovilismo deportivo y fabricantes de vehículos especializados",
      "Organismos de pruebas, certificación, y regulación",
    ],
    advantages: [
      "El trabajo termina dentro de objetos que la gente usa a diario, lo que hace inusualmente fácil señalarlo",
      "Las habilidades se transfieren bien, ya que los fundamentos mecánicos, térmicos, y de control se aplican en aeroespacial, energía, y maquinaria pesada",
      "Las pruebas son físicas e inmediatas — averiguas bastante rápido si un diseño aguanta",
      "El cambio hacia vehículos eléctricos y automatizados ha abierto trabajo real para quienes vienen del software o la electrónica",
    ],
    challenges: [
      "La presión sobre el costo es constante, y un diseño técnicamente mejor pierde con regularidad frente a uno más barato",
      "La regulación de seguridad y emisiones limita bastante lo que se puede hacer",
      "Los programas de vehículos son largos, así que pueden pasar años entre tu trabajo y algo que llegue a la carretera",
      "El trabajo suele concentrarse en ciertas regiones y empresas, lo que puede implicar mudarse para seguir en el campo",
    ],
    thingsPeopleDislike: [
      "Encargarse de un componente pequeño durante mucho tiempo, en vez de trabajar sobre un vehículo completo",
      "Ver cómo un diseño del que estás orgulloso se cambia para ahorrar una cantidad pequeña por unidad",
      "Ciclos largos de validación y papeleo entre terminar un diseño y ponerlo en producción",
      "Periodos de sobrecarga alrededor de los hitos del programa y las fechas de lanzamiento",
    ],
    dayInLife: {
      blocks: [
        { time: "8:30 AM", label: "Resultados de prueba", detail: "Revisar los datos de un ensayo de durabilidad que corrió toda la noche en un banco de pruebas, buscando cualquier cosa que se haya desviado." },
        { time: "10:00 AM", label: "Revisión de diseño", detail: "Presentar un soporte rediseñado a los equipos cuyas piezas están al lado — y descubrir que ahora choca con un arnés de cables." },
        { time: "11:30 AM", label: "Simulación", detail: "Volver a correr un modelo de esfuerzos con la nueva forma para comprobar que sigue cumpliendo sus objetivos de resistencia y peso." },
        { time: "1:30 PM", label: "Laboratorio de pruebas", detail: "Preparar con los técnicos del laboratorio la siguiente ronda de pruebas de una pieza prototipo." },
        { time: "3:00 PM", label: "Llamada con proveedor", detail: "Averiguar si un proveedor puede fabricar la pieza con la tolerancia que necesita el diseño, al precio que permite el programa." },
        { time: "4:30 PM", label: "Documentación", detail: "Registrar el cambio y su motivo, para que la historia de la pieza se pueda rastrear después." },
      ],
      reflectionQuestion: "¿Te gustaría encargarte a fondo de una sola parte de un vehículo durante mucho tiempo, en vez de trabajar en el auto completo?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Medium",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    nextSteps: {
      "middle-school": {
        project: "Construye un auto impulsado por ligas o por un globo y observa cómo cambiar las ruedas o el peso afecta cuánto avanza.",
        tool: "Materiales de casa — cartón, tapas de botella, pajitas, y ligas.",
        activity: "Busca un club de ciencia y tecnología en tu escuela, o una carrera local de autos sin motor, si hay alguna cerca.",
        relatedField: "mechanical-engineering",
      },
      "high-school": {
        project: "Diseña una pieza sencilla de auto, como un soporte o un buje de rueda, en una herramienta CAD gratuita y piensa qué cargas tendría que soportar.",
        tool: "Tinkercad u Onshape (plan educativo gratuito) — ambos funcionan en el navegador.",
        activity: "Toma una clase de mecánica automotriz o de ingeniería, o únete a un equipo de robótica o ingeniería, si tu escuela lo ofrece.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Únete a un equipo estudiantil de vehículos y hazte cargo de un subsistema, como los frenos, la refrigeración, o el arnés de cables, desde el diseño hasta las pruebas.",
        tool: "El software de CAD y simulación que ofrezca tu universidad — SolidWorks, Fusion 360, o similar.",
        activity: "Busca un equipo de Formula SAE o Baja SAE, un capítulo estudiantil de SAE International, o unas prácticas con un fabricante de vehículos o un proveedor.",
        relatedField: "mechanical-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a de Diseño y Liberación", description: "Se hace cargo de un componente o sistema durante el diseño, las pruebas, y la aprobación para producción." },
      { title: "Ingeniero/a de Pruebas y Validación", description: "Planifica y realiza las pruebas en banco, pista, y laboratorio que demuestran que una pieza o un vehículo cumple sus requisitos." },
      { title: "Ingeniero/a de Tren Motriz o de Sistemas de Batería", description: "Trabaja en lo que mueve al vehículo — motores y transmisiones, o paquetes de baterías y motores eléctricos." },
      { title: "Ingeniero/a de Control y Calibración", description: "Ajusta el software que decide cómo se comportan sistemas como el frenado, la tracción, o la asistencia al conductor." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. cuenta a los ingenieros automotrices dentro de los ingenieros mecánicos, y proyecta un crecimiento del empleo del 11% para los ingenieros mecánicos en conjunto entre 2025 y 2035 — mucho más rápido que el promedio — con unas 17,800 vacantes al año. Esa proyección abarca a todos los ingenieros mecánicos, no específicamente al trabajo automotriz, así que tómala como contexto y no como un pronóstico para este campo. Los empleos automotrices además se concentran alrededor de ciertos fabricantes, proveedores, y regiones, y las habilidades que se buscan han ido cambiando a medida que los vehículos incorporan baterías y más software — investiga dónde está realmente el trabajo en tu país antes de tomar decisiones.",
    beginnerActivities: [
      "Mira bajo el cofre de un auto de tu familia (con un adulto, con el motor apagado y frío) e intenta identificar la batería, el depósito de refrigerante, y la toma de aire",
      "Construye un auto impulsado por ligas y prueba cómo cambiar su peso o sus ruedas afecta cuánto avanza",
      "Busca la calificación publicada de una prueba de choque de un auto (de NHTSA o IIHS en EE. UU., o de Euro NCAP en Europa) y lee qué miden realmente las pruebas",
    ],
    selfReflectionQuestions: [
      "¿Me gustaría trabajar en un solo componente durante mucho tiempo en vez de en el vehículo completo?",
      "¿Estoy de acuerdo con que el costo y la regulación se impongan sobre lo que yo creo que es el mejor diseño?",
      "¿Me gusta combinar trabajo en computadora, pruebas de laboratorio, y reuniones con otros equipos?",
      "¿Estaría dispuesto/a a mudarme a donde están las empresas automotrices, si el trabajo lo requiriera?",
    ],
  },
  {
    slug: "manufacturing-engineering",
    name: "Ingeniería de Manufactura",
    tagline: "Cómo un diseño se convierte en un producto físico real a gran escala — los procesos y equipos detrás.",
    whatItIs:
      "La ingeniería de manufactura trata sobre los procesos y equipos usados para realmente producir cosas a gran escala — la maquinaria, las herramientas, y los flujos de trabajo que convierten un diseño en un producto físico, y hacer que todo eso funcione mejor. Se superpone de cerca tanto con la ingeniería mecánica como con la industrial.",
    realWorldExamples: [
      "Diseño de líneas de producción y equipo de fábrica",
      "Diseño de herramientas y dispositivos de sujeción para manufactura",
      "Mejora de procesos para reducir desperdicio o defectos",
      "Automatización de pasos de manufactura",
    ],
    relatedMajors: ["Ingeniería de Manufactura", "Ingeniería Industrial (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    salaryNote:
      "La Oficina de Estadísticas Laborales de EE. UU. cuenta a los ingenieros de manufactura como un tipo de ingeniero industrial, no como una ocupación separada, así que su salario está incluido en la cifra de los ingenieros industriales. Consulta la página de Ingeniería Industrial para ver esos datos de salario con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de manufactura trabajan en la distancia entre un diseño que funciona una vez y un diseño que se puede fabricar miles de veces, bien, y a un precio que alguien pagará. Especifican máquinas y herramentales, ordenan la secuencia de operaciones, diseñan los dispositivos que sujetan una pieza mientras se trabaja, y persiguen por qué un proceso que iba bien el mes pasado ahora produce desperdicio. Gran parte del trabajo ocurre en la planta y no en un escritorio.",
    commonMisconceptions: [
      "Que los ingenieros de manufactura diseñan el producto — diseñan el proceso que lo fabrica, y a menudo tienen que pedir cambios en un diseño que no se puede producir de forma económica.",
      "Que el campo desaparece por la automatización — automatizar una línea es en sí ingeniería de manufactura, y alguien tiene que especificarla, instalarla, y mantenerla funcionando.",
      "Que es trabajo de fábrica de baja cualificación — implica diseño de procesos, estadística, herramentales, y bastante diagnóstico bajo presión de tiempo.",
      "Que cuando la línea ya corre el trabajo está hecho — los procesos se desvían, los proveedores cambian, y las herramientas se desgastan, así que una línea en marcha necesita atención constante.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros de manufactura diseñan los productos que se fabrican.",
        reality:
          "Diseñan cómo se fabrican. Una parte frecuente del trabajo es decirle a un equipo de diseño que su pieza está bien en pantalla y es imposible de producir al ritmo necesario.",
      },
      {
        myth: "La automatización está eliminando el campo.",
        reality:
          "La automatización desplaza el trabajo en vez de eliminarlo. Elegir, integrar, y mantener equipo automatizado es ingeniería de manufactura.",
      },
      {
        myth: "Es lo mismo que la ingeniería industrial.",
        reality:
          "Se solapan. La industrial se inclina hacia los sistemas, el flujo, y la eficiencia; la de manufactura, hacia los procesos físicos y la maquinaria.",
      },
      {
        myth: "Te sientas en un escritorio.",
        reality:
          "Pasas mucho tiempo en planta, porque los problemas aparecen en la máquina y no en el plano.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Estadística, si se ofrece", "Dibujo técnico o CAD, si está disponible", "Taller, robótica, o materias prácticas si tu escuela las tiene"],
    helpfulSkills: [
      "Sentido mecánico práctico, ya que buena parte del trabajo es entender por qué una máquina o una herramienta se comporta como lo hace",
      "Soltura con la estadística, porque la calidad de un proceso se mide y se controla estadísticamente",
      "Diagnóstico sistemático, ya que un defecto suele tener varias causas plausibles que hay que ir descartando en orden",
      "Buen trato con operadores y técnicos, que a menudo conocen el proceso mejor que nadie",
      "Tolerancia a la interrupción, porque una línea detenida tiene prioridad sobre lo que estuvieras haciendo",
    ],
    typicalProjects: [
      "Diseñar un dispositivo que sujete una pieza con precisión mientras se mecaniza o se suelda",
      "Definir la secuencia de operaciones para el ensamblaje de un producto nuevo",
      "Encontrar la causa raíz de un defecto que empezó a aparecer en una línea existente",
      "Especificar y poner en marcha una máquina nueva o una celda robotizada",
      "Rediseñar un proceso para reducir tiempo de ciclo, desperdicio, o tiempo de cambio",
    ],
    typicalWorkday:
      "El día se mueve entre la planta y el escritorio, normalmente no según tu propia agenda. El trabajo planificado es diseño de procesos, planos de herramental, y análisis de datos; el no planificado es lo que se haya detenido. El calendario de producción lo condiciona todo — las pruebas y los cambios de formato suelen darse alrededor de los turnos, y algunas puestas en marcha caen de noche o en un paro programado porque es el único momento en que la línea está libre.",
    industries: [
      "Fabricantes de automoción y aeroespacial",
      "Producción de electrónica y bienes de consumo",
      "Fabricación de dispositivos médicos y farmacéutica",
      "Fabricantes por contrato y proveedores de componentes",
      "Proveedores de equipo industrial y automatización",
    ],
    advantages: [
      "La retroalimentación es inmediata y física — un cambio mejora la línea o no lo hace",
      "El trabajo es visible, ya que puedes ver funcionando el proceso que diseñaste",
      "Las habilidades sirven en casi cualquier industria que fabrique un objeto físico",
      "Hay una ruta clara hacia operaciones y dirección de planta para quien la quiera",
    ],
    challenges: [
      "La presión de producción es constante, y una línea parada cuesta por minuto",
      "El costo y el tiempo de ciclo limitan las soluciones tanto como la física",
      "El trabajo por turnos, las puestas en marcha nocturnas, y los paros programados son habituales",
      "Los entornos de fábrica pueden ser ruidosos, calurosos, y físicamente exigentes",
    ],
    thingsPeopleDislike: [
      "Que te saquen del trabajo planificado para apagar el incendio de esta mañana",
      "Trabajo nocturno y de fin de semana durante instalaciones y paros",
      "Pelear con el mismo defecto recurrente que tiene varias causas posibles",
      "Tener que defender un cambio de diseño que haría la producción mucho más fácil",
    ],
    dayInLife: {
      blocks: [
        { time: "7:30 AM", label: "Cambio de turno", detail: "Escuchar del turno de noche qué corrió, qué se detuvo, y qué está produciendo desperdicio esta mañana." },
        { time: "8:30 AM", label: "En la planta", detail: "Observar una máquina que empezó a producir piezas fuera de tolerancia, y preguntarle al operador qué cambió." },
        { time: "10:30 AM", label: "Causa raíz", detail: "Sacar los datos del proceso y acotar cuál de varias causas posibles encaja con lo que realmente está pasando." },
        { time: "1:00 PM", label: "Diseño de dispositivos", detail: "De vuelta en el escritorio, dibujar un dispositivo de sujeción para una pieza nueva que pronto entra en producción." },
        { time: "2:30 PM", label: "Revisión de diseño", detail: "Mostrarle a un equipo de diseño de producto qué detalles de su pieza serían caros de fabricar, y sugerir alternativas." },
        { time: "4:00 PM", label: "Planificar pruebas", detail: "Programar una prueba de proceso alrededor de la producción para no detener una línea en marcha." },
      ],
      reflectionQuestion: "¿Disfrutarías un trabajo en el que parte de cada día consiste en reaccionar a lo que se haya descompuesto, en vez de avanzar en un plan que tú mismo/a definiste?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "High",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    nextSteps: {
      "middle-school": {
        project: "Arma una mini línea de ensamblaje con amigos o familia para hacer algo sencillo, como aviones de papel, y observa cómo repartir los pasos cambia la velocidad y la calidad.",
        tool: "Papel, un cronómetro, y algunos ayudantes.",
        activity: "Busca un club de ciencia y tecnología, o una clase de carpintería o de fabricación en tu escuela o biblioteca local, si hay alguna disponible.",
        relatedField: "industrial-engineering",
      },
      "high-school": {
        project: "Diseña en una herramienta CAD gratuita una plantilla sencilla que sostenga una pieza exactamente en la misma posición cada vez, y piensa cómo la fabricarías.",
        tool: "Tinkercad, o Fusion 360 (gratuito para estudiantes y docentes).",
        activity: "Toma una clase de taller, manufactura, o robótica, o únete a un equipo de robótica, si tu escuela lo ofrece.",
        relatedField: "mechanical-engineering",
      },
      "college": {
        project: "Elige una pieza de un proyecto estudiantil y escribe su proceso de fabricación completo — máquinas, dispositivos de sujeción, secuencia, y qué medirías para comprobar la calidad.",
        tool: "El taller o makerspace de tu universidad, más una hoja de cálculo para un control estadístico de procesos básico.",
        activity: "Busca un capítulo estudiantil de SME (Society of Manufacturing Engineers), un rol de manufactura en un equipo estudiantil de vehículos o robótica, o unas prácticas en un fabricante.",
        relatedField: "industrial-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a de Procesos", description: "Se hace cargo de un conjunto de pasos de producción y los mantiene dentro de los objetivos de calidad, costo, y tiempo de ciclo." },
      { title: "Ingeniero/a de Herramentales y Dispositivos", description: "Diseña las plantillas, los dispositivos de sujeción, y el herramental que sostienen y dan forma a las piezas durante la producción." },
      { title: "Ingeniero/a de Automatización", description: "Especifica, integra, y pone en marcha robots y equipo automatizado en una línea de producción." },
      { title: "Ingeniero/a de Calidad", description: "Mide y controla la calidad del proceso, y dirige la investigación cuando aparecen defectos." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. cuenta a los ingenieros de manufactura como un tipo de ingeniero industrial, y proyecta un crecimiento del empleo del 12% para los ingenieros industriales entre 2025 y 2035 — mucho más rápido que el promedio — con unas 23,100 vacantes al año. Esa cifra abarca a todos los ingenieros industriales, no específicamente a los puestos de manufactura, así que léela como contexto y no como un pronóstico para este campo. El trabajo de manufactura depende de dónde se fabrican realmente las cosas, lo que varía mucho según la región y la industria, y en algunas plantas el trabajo por turnos o durante paros es habitual — investiga los fabricantes y las industrias cercanas antes de tomar decisiones.",
    beginnerActivities: [
      "Mira un video de recorrido por una fábrica sobre cómo se hace algo cotidiano, y escribe cada paso en orden",
      "Elige un objeto sencillo y dibuja cómo lo sujetarías para taladrar un agujero exactamente en el mismo lugar cien veces",
      "Cronométrate armando algo sencillo de varias formas y observa qué orden de pasos es el más rápido y el que produce menos errores",
    ],
    selfReflectionQuestions: [
      "¿Preferiría mejorar cómo se fabrica algo que diseñar el producto en sí?",
      "¿Estoy cómodo/a pasando buena parte de mi tiempo en una planta ruidosa en vez de en un escritorio?",
      "¿Cómo manejaría que problemas urgentes me saquen de mi trabajo planificado?",
      "¿Estaría de acuerdo con trabajar de vez en cuando de noche, en fin de semana, o durante paros?",
    ],
  },
  {
    slug: "systems-engineering",
    name: "Ingeniería de Sistemas",
    tagline: "Cómo todas las piezas individuales de un proyecto grande y complejo terminan funcionando bien juntas.",
    whatItIs:
      "La ingeniería de sistemas se aleja de cualquier componente individual para ver cómo un sistema complejo se integra como un todo — asegurándose de que cada pieza de un proyecto grande, sea un avión, una nave espacial, o una plataforma de software importante, funcione correctamente con todas las demás. Se trata menos de diseñar una parte específica y más de gestionar cómo se conecta todo.",
    realWorldExamples: [
      "Coordinar cómo funcionan juntos los subsistemas de un avión o una nave espacial",
      "Gestionar los requisitos y la integración de grandes proyectos de defensa o infraestructura",
      "Supervisar cómo interactúan los componentes de hardware y software de un producto complejo",
    ],
    relatedMajors: ["Ingeniería de Sistemas", "A menudo se estudia como una especialización dentro de la ingeniería aeroespacial, industrial o eléctrica"],
    salaryNote:
      "Como varios campos de esta página, la ingeniería de sistemas no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia como una especialización dentro de otra disciplina de ingeniería. Consulta las páginas de Ingeniería Aeroespacial o Industrial para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de sistemas se hacen cargo de las uniones entre las partes más que de las partes en sí. Convierten un objetivo vago en requisitos lo bastante concretos como para diseñar contra ellos, deciden cómo se van a comunicar los subsistemas entre sí, y después verifican que el conjunto armado realmente hace lo que se pidió. Buena parte del trabajo es escrito — requisitos, definiciones de interfaz, planes de prueba, y los estudios comparativos que dejan constancia de por qué se eligió una opción sobre otra.",
    commonMisconceptions: [
      "Que es gestión de proyectos con título de ingeniería — el trabajo es técnico, y consiste en hacerse cargo de interfaces y requisitos, no de calendarios y presupuestos.",
      "Que hay que dominar a fondo cada subsistema — hace falta lo suficiente de cada uno para hacer las preguntas correctas y detectar cuándo dos equipos han supuesto cosas distintas.",
      "Que es solo para naves espaciales y defensa — cualquier producto donde hardware, software, y personas tengan que funcionar juntos usa la misma disciplina.",
      "Que la documentación es burocracia — en un proyecto grande, la interfaz escrita suele ser lo único que evita que dos equipos construyan piezas que no encajan.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería de sistemas es solo gestión de proyectos.",
        reality:
          "Los gestores se ocupan del calendario y el costo. Los ingenieros de sistemas se ocupan de los requisitos, las interfaces, y de si el resultado integrado realmente los cumple.",
      },
      {
        myth: "Tienes que ser experto en cada subsistema.",
        reality:
          "Necesitas profundidad suficiente para hacer buenas preguntas a los especialistas y para notar cuándo dos equipos están suponiendo cosas distintas en silencio.",
      },
      {
        myth: "Es un puesto solo para gente veterana.",
        reality:
          "Mucha gente empieza ahí, aunque bastantes llegan tras algunos años en una disciplina concreta, que es de donde sale el olfato útil.",
      },
      {
        myth: "Los documentos son el objetivo.",
        reality:
          "Los documentos son la forma de hacer explícitos los acuerdos entre equipos. Cuando se saltan, los desacuerdos aparecen después, durante la integración, y salen caros.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Informática o programación, si se ofrece", "Estadística, si se ofrece", "Cualquier materia que implique escritura estructurada"],
    helpfulSkills: [
      "Escritura precisa, porque un requisito ambiguo lo construirán de dos formas distintas dos equipos distintos",
      "Capacidad de sostener el sistema completo en la cabeza sin necesitar dominar cada detalle",
      "Hacer preguntas incómodas temprano, ya que los problemas de integración son más baratos de encontrar antes de construir nada",
      "Negociar entre equipos cuyas decisiones locales razonables entran en conflicto entre sí",
      "Paciencia con el proceso, que en proyectos grandes es lo que mantiene coherente al sistema",
    ],
    typicalProjects: [
      "Convertir el objetivo de un cliente en un conjunto de requisitos verificables",
      "Definir la interfaz entre dos subsistemas construidos por equipos distintos",
      "Hacer un estudio comparativo de opciones frente a costo, masa, riesgo, y plazo",
      "Planificar cómo se va a verificar y probar el sistema integrado",
      "Rastrear un fallo encontrado durante la integración hasta el requisito o la interfaz que lo permitió",
    ],
    typicalWorkday:
      "El día tiene más reuniones y escritura que la mayoría de los puestos de ingeniería, porque el trabajo consiste en gran medida en mantener alineados a equipos separados. Las revisiones son parte fija del ritmo, igual que leer los diseños de otras personas con suficiente atención como para notar qué han dado por supuesto. La intensidad se dispara en la integración y las pruebas, cuando todo lo acordado sobre el papel se encuentra con todo lo que se construyó de verdad.",
    industries: [
      "Programas aeroespaciales y de naves espaciales",
      "Defensa y grandes proyectos públicos",
      "Automoción, sobre todo para software y electrónica a nivel de vehículo",
      "Dispositivos médicos y otros productos regulados",
      "Infraestructura y sistemas de transporte a gran escala",
    ],
    advantages: [
      "Ves el sistema completo en vez de un componente, lo que encaja con quien disfruta la visión de conjunto",
      "Las habilidades se transfieren bien entre industrias, ya que la disciplina es en gran medida la misma",
      "El trabajo está cerca de las decisiones que dan forma a un proyecto desde el principio",
      "Es una ruta natural hacia el liderazgo técnico sin dejar la ingeniería por la gestión",
    ],
    challenges: [
      "Buena parte del trabajo es escribir y reunirse, que no es lo que mucha gente imagina",
      "A menudo respondes por resultados que no controlas directamente",
      "Los programas son largos, y el proceso formal puede sentirse pesado en el día a día",
      "Es más difícil señalar una cosa y decir que la construiste tú",
    ],
    thingsPeopleDislike: [
      "El volumen de documentación y revisión que exigen los proyectos grandes",
      "Estar en medio de equipos que no se ponen de acuerdo, una y otra vez",
      "Los huecos largos entre definir algo y ver si funcionó",
      "Que te culpen en la integración por huecos que se señalaron y no se financiaron",
    ],
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Revisión de requisitos", detail: "Leer los requisitos de un subsistema y marcar los que, tal como están escritos, no se podrían probar." },
        { time: "10:00 AM", label: "Reunión de interfaces", detail: "Lograr que dos equipos acuerden exactamente qué datos envía un subsistema al otro, y en qué formato." },
        { time: "11:30 AM", label: "Estudio comparativo", detail: "Comparar dos opciones de diseño frente a costo, masa, riesgo, y plazo, y dejar por escrito por qué una sale ganando." },
        { time: "1:30 PM", label: "Revisión de diseño", detail: "Asistir a la revisión de otro equipo, leyendo con suficiente atención para detectar un supuesto que choca con un subsistema vecino." },
        { time: "3:00 PM", label: "Planificar pruebas", detail: "Definir cómo se verificará el sistema integrado, y qué requisitos demostrará cada prueba." },
        { time: "4:30 PM", label: "Actualizar documentos", detail: "Dejar registradas las decisiones de hoy para que ambos equipos construyan según el mismo acuerdo." },
      ],
      reflectionQuestion: "¿Te resultaría satisfactorio ser la persona que se asegura de que todo encaje, aunque nunca diseñes una de las piezas tú mismo/a?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Low",
    },
    nextSteps: {
      "middle-school": {
        project: "Desarma un aparato viejo y desenchufado (con permiso) y agrupa sus piezas según el trabajo que hacen juntas.",
        tool: "Un juego pequeño de destornilladores y un cuaderno para dibujar.",
        activity: "Busca un club de robótica LEGO o de ciencia y tecnología, donde un equipo tiene que hacer que piezas separadas funcionen juntas, si hay alguno disponible.",
        relatedField: "robotics-engineering",
      },
      "high-school": {
        project: "En un proyecto en equipo, escriban qué le entregará cada persona a otra antes de empezar a construir, y comprueben esas entregas al final.",
        tool: "Una herramienta gratuita de diagramas como diagrams.net (draw.io).",
        activity: "Infórmate sobre un equipo de FIRST Robotics, VEX, o Science Olympiad, donde juntar el trabajo de todos es lo difícil, si tu escuela tiene uno.",
        relatedField: "aerospace-engineering",
      },
      "college": {
        project: "Toma un proyecto de un equipo estudiantil y escribe en serio una lista de requisitos y una definición de interfaces, y úsalas para planear cómo probarías el sistema terminado.",
        tool: "Una hoja de cálculo para dar seguimiento a los requisitos, más cualquier herramienta de modelado que ofrezca tu universidad.",
        activity: "Busca un capítulo estudiantil de INCOSE (International Council on Systems Engineering), un rol de sistemas en un equipo estudiantil de cohetes, satélites, o vehículos, o unas prácticas en una empresa aeroespacial o de defensa.",
        relatedField: "industrial-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a de Requisitos", description: "Convierte las necesidades de clientes e interesados en requisitos claros y verificables, y los mantiene rastreables mientras cambia el diseño." },
      { title: "Arquitecto/a de Sistemas", description: "Decide cómo se divide un sistema en subsistemas y cómo se conectan esas piezas." },
      { title: "Ingeniero/a de Integración y Pruebas", description: "Junta los subsistemas y realiza las pruebas que demuestran que el sistema completo hace lo que debe." },
      { title: "Ingeniero/a de Verificación y Validación", description: "Planifica cómo se demostrará cada requisito — por prueba, análisis, o inspección — y da seguimiento a la evidencia." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. no publica una proyección de empleo separada para la ingeniería de sistemas — la mayoría de los ingenieros de sistemas se cuentan dentro de la disciplina en la que se formaron, como la ingeniería aeroespacial, eléctrica, o industrial, así que no hay una cifra de crecimiento oficial específica para este puesto. (El BLS sí registra a los \"ingenieros de sistemas informáticos\", pero ese es un puesto de TI, no este.) Buena parte del trabajo está en programas aeroespaciales, de defensa, y otros grandes proyectos, que dependen de presupuestos y contratos que varían según el país. Mucha gente llega a la ingeniería de sistemas tras algunos años en una disciplina concreta, así que averigua qué rutas de entrada existen donde te gustaría trabajar.",
    beginnerActivities: [
      "Elige algo que tengas, como una bicicleta o una consola de videojuegos, y dibuja un diagrama de sus partes principales y de lo que pasa entre ellas",
      "Escribe los requisitos de algo sencillo, como una mochila, e intercámbialos con un amigo para ver si construiría lo mismo a partir de tu lista",
      "Planifica un proyecto o evento en grupo anotando quién depende de quién, y observa dónde podrían quedar huecos",
    ],
    selfReflectionQuestions: [
      "¿Me sentiría satisfecho/a haciendo funcionar un sistema completo, aunque no pueda señalar una parte y decir que la construí yo?",
      "¿Estoy cómodo/a con un trabajo con mucha escritura, reuniones, y revisiones?",
      "¿Me gusta entender un poco de muchas áreas en vez de mucho de una sola?",
      "¿Puedo manejar ser responsable de resultados que dependen del trabajo de otras personas?",
    ],
  },
  {
    slug: "structural-engineering",
    name: "Ingeniería Estructural",
    tagline: "Si un edificio o puente puede cargar con seguridad su propio peso, además del viento, los terremotos, y el uso diario.",
    whatItIs:
      "La ingeniería estructural trata sobre la estructura portante de edificios y puentes — asegurándose de que una estructura pueda cargar con seguridad su propio peso más fuerzas como el viento, los terremotos, y el uso diario. Normalmente se estudia como una especialización dentro de la ingeniería civil, no como su propia carrera separada.",
    realWorldExamples: [
      "Diseño de la estructura portante de edificios",
      "Diseño y análisis estructural de puentes",
      "Ingeniería de resistencia sísmica y al viento",
      "Inspección estructural de edificios y puentes existentes",
    ],
    relatedMajors: ["Ingeniería Civil (con enfoque estructural)", "Ingeniería Estructural (ofrecida como carrera propia en algunas universidades)"],
    salaryNote:
      "Los ingenieros estructurales normalmente se rastrean bajo la categoría más amplia de 'ingenieros civiles' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Civil para ver esos datos de salario con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros estructurales deciden si algo se va a mantener en pie, y seguir en pie. Dimensionan vigas, columnas, losas, cimentaciones, y las conexiones entre todo eso, y modelan las cargas que una estructura tiene que resistir — su propio peso, las personas y equipos dentro, el viento, la nieve, y, según dónde se construya, los sismos. Buena parte del trabajo es el detallado: dibujar las uniones y fijaciones con precisión suficiente para que un contratista pueda construirlas, y rehacerlas cuando la arquitectura cambia alrededor.",
    commonMisconceptions: [
      "Que los ingenieros estructurales diseñan el edificio entero — los arquitectos suelen decidir la forma y la distribución, y el ingeniero estructural resuelve el esqueleto que lo sostiene.",
      "Que ahora el software hace el trabajo — el software es estándar, pero alguien tiene que elegir el modelo, decidir qué casos de carga importan, y juzgar si el resultado es creíble.",
      "Que todo es obra nueva — evaluar, reforzar, y reparar estructuras que ya existen es una parte grande del campo.",
      "Que las matemáticas son lo difícil — los cálculos se aprenden, y la habilidad más difícil suele ser el detallado y la coordinación con todos los demás que tocan el edificio.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros estructurales diseñan edificios.",
        reality:
          "Diseñan el esqueleto portante. La forma, la distribución, y la apariencia suelen ser decisiones del arquitecto, dentro de las cuales la estructura tiene que funcionar.",
      },
      {
        myth: "La computadora hace los cálculos, así que el trabajo es capturar datos.",
        reality:
          "El software devuelve con toda confianza una respuesta a un modelo mal planteado. Decidir el modelo y verificar que el resultado tenga sentido es la ingeniería.",
      },
      {
        myth: "Es un trabajo de diseño creativo.",
        reality:
          "Hay criterio, pero es criterio dentro de normativas y factores de seguridad. Ser deliberadamente conservador es parte de hacerlo bien.",
      },
      {
        myth: "Solo trabajas en obras nuevas y emblemáticas.",
        reality:
          "Gran parte del trabajo son edificios ordinarios, y bastante consiste en inspeccionar o reforzar estructuras que ya están ahí.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Dibujo técnico o CAD, si está disponible", "Estadística, si se ofrece"],
    helpfulSkills: [
      "Razonamiento espacial, porque hay que imaginar cómo viajan las fuerzas por la estructura hasta el suelo",
      "Soltura trabajando dentro de normativas y estándares, que definen buena parte de lo permitido",
      "Precisión y cuidado, porque un caso de carga olvidado o una conexión mal detallada tiene consecuencias reales",
      "Comunicación clara con arquitectos y contratistas, ya que tus planos los construye otra persona",
      "Disposición a ser conservador, que en este campo es una virtud profesional y no falta de audacia",
    ],
    typicalProjects: [
      "Dimensionar la estructura de un edificio frente a cargas de gravedad, viento, y sismo",
      "Analizar un puente existente para juzgar qué cargas puede seguir soportando con seguridad",
      "Diseñar una cimentación para las condiciones del terreno realmente encontradas en obra",
      "Detallar conexiones para que la estructura se pueda montar en el orden correcto",
      "Reforzar un edificio antiguo para cumplir requisitos actuales de sismo o viento",
    ],
    typicalWorkday:
      "La mayor parte del día es análisis y dibujo frente a una computadora, intercalado con coordinación con arquitectos y otros ingenieros cuyos sistemas atraviesan la misma estructura. Las visitas a obra llegan por rachas, normalmente en hitos de construcción o cuando algo en sitio no coincide con los planos. Revisar los cálculos de otras personas es parte rutinaria del trabajo, y que revisen los tuyos también.",
    industries: [
      "Consultoras estructurales y civiles",
      "Constructoras y empresas de diseño y construcción",
      "Organismos públicos de transporte e infraestructura",
      "Inspección de edificios e ingeniería forense",
      "Fabricantes de productos y sistemas estructurales",
    ],
    advantages: [
      "El trabajo es permanente y público — puedes pararte frente a él años después",
      "El propósito es inusualmente claro, ya que se trata de evitar que las estructuras lastimen a alguien",
      "Las habilidades sirven para edificios, puentes, y estructuras industriales sin empezar de cero",
      "La colegiación profesional da una ruta definida y reconocida para avanzar",
    ],
    challenges: [
      "La responsabilidad es real, y los errores tienen consecuencias que otros campos no tienen del mismo modo",
      "Las normativas y aprobaciones limitan bastante lo que se puede hacer",
      "Los proyectos son largos, y los diseños se revisan una y otra vez cuando cambia la arquitectura",
      "Obtener la licencia lleva años de experiencia supervisada y exámenes después de la carrera",
    ],
    thingsPeopleDislike: [
      "Cargar con la responsabilidad legal mucho después de terminado el proyecto",
      "Rehacer trabajo porque un cambio previo movió un muro o una columna",
      "Cuánto tiempo se va en revisar, documentar, y defender cálculos",
      "Ser quien tiene que decir que no a una idea que se vería mejor de lo que se comportaría",
    ],
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Preparar el modelo", detail: "Armar un modelo de análisis de una planta — decidir qué cargas importan y cómo representar los apoyos." },
        { time: "10:30 AM", label: "Revisión", detail: "Revisar los cálculos de vigas de un colega, y que revisen los tuyos a cambio." },
        { time: "12:00 PM", label: "Coordinación", detail: "Un cambio arquitectónico movió una columna; averiguar todo lo demás que tiene que cambiar por eso." },
        { time: "1:30 PM", label: "Detallado", detail: "Dibujar una conexión de acero con la precisión suficiente para que un taller la fabrique y una cuadrilla la monte." },
        { time: "3:00 PM", label: "Visita a obra", detail: "En un hito de la construcción, revisar el armado antes de un colado de concreto, o mirar algo en sitio que no coincide con los planos." },
        { time: "4:30 PM", label: "Memoria de cálculo", detail: "Redactar los cálculos del día para que se puedan revisar y presentar para aprobación." },
      ],
      reflectionQuestion: "¿Te sentirías cómodo/a cargando con la responsabilidad de que una estructura se mantenga en pie, y con que revisen cada cálculo que haces?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Low",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    nextSteps: {
      "middle-school": {
        project: "Construye una torre o un puente con espagueti y malvaviscos o con papel, y prueba cuánto aguanta antes de fallar.",
        tool: "Materiales de casa, más algunas monedas o pesos pequeños para probar.",
        activity: "Busca un club de ciencia y tecnología o una competencia de construcción de puentes en tu escuela o en un museo de ciencias local, si hay alguno disponible.",
        relatedField: "civil-engineering",
      },
      "high-school": {
        project: "Diseña un pequeño puente de armadura en un simulador gratuito, luego constrúyelo con madera de balsa o palitos de paleta y compara dónde falla realmente con dónde decía el modelo.",
        tool: "Un simulador gratuito de armaduras o puentes en línea, más madera de balsa o palitos de paleta.",
        activity: "Infórmate sobre Science Olympiad, que tiene pruebas de construcción de estructuras, o un capítulo del ACE Mentor Program (ambos en EE. UU.), si hay uno cerca.",
        relatedField: "civil-engineering",
      },
      "college": {
        project: "Toma un marco de edificio sencillo, calcula a mano las fuerzas en sus vigas y columnas, y luego compara tus respuestas con un software de análisis.",
        tool: "Cualquier software de análisis estructural que ofrezca tu universidad, o una herramienta gratuita de análisis de marcos 2D.",
        activity: "Busca un capítulo estudiantil de ASCE y sus equipos de Steel Bridge o Concrete Canoe, un capítulo estudiantil de EERI si te interesan los sismos, o unas prácticas en una empresa de ingeniería estructural.",
        relatedField: "materials-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a Estructural de Edificios", description: "Diseña las estructuras, losas, y cimentaciones de edificios, desde casas hasta rascacielos." },
      { title: "Ingeniero/a de Puentes", description: "Diseña puentes nuevos y evalúa cuánta carga pueden seguir soportando con seguridad los existentes." },
      { title: "Ingeniero/a Estructural Forense", description: "Investiga por qué una estructura falló o se dañó, y qué haría falta para repararla." },
      { title: "Ingeniero/a de Refuerzo Sísmico", description: "Refuerza edificios existentes para cumplir los requisitos sísmicos actuales, sobre todo en regiones donde los terremotos son un factor de diseño." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. cuenta a los ingenieros estructurales dentro de los ingenieros civiles, y proyecta un crecimiento del empleo del 6% para los ingenieros civiles en conjunto entre 2025 y 2035 — más rápido que el promedio — con unas 22,700 vacantes al año. Eso abarca a todos los ingenieros civiles, no específicamente al trabajo estructural, y la demanda depende de cuánto se construye y se renueva, lo que varía según la región y con el tiempo. La licencia profesional pesa mucho aquí: en muchos países necesitas años de experiencia supervisada y exámenes antes de poder firmar diseños por tu cuenta, y algunos lugares exigen una licencia estructural adicional para ciertos edificios — investiga las reglas donde te gustaría trabajar.",
    beginnerActivities: [
      "Construye una torre de papel o espagueti y prueba cuánto peso aguanta antes de fallar — luego cambia una cosa y vuelve a probar",
      "Mira un puente por el que pasas seguido e intenta averiguar cómo baja su carga hasta el suelo",
      "Prueba un simulador gratuito de armaduras o vigas en línea y observa cómo mover un apoyo cambia las fuerzas",
    ],
    selfReflectionQuestions: [
      "¿Estoy cómodo/a con un trabajo en el que un error podría realmente lastimar a alguien?",
      "¿Disfrutaría ser cuidadoso/a y conservador/a más que ser audaz?",
      "¿Estoy dispuesto/a a pasar años después de la carrera obteniendo la licencia?",
      "¿Me atrae la idea de ver mi trabajo construido, aunque tarde años en llegar ahí?",
    ],
  },
  {
    slug: "energy-engineering",
    name: "Ingeniería de Energía",
    tagline: "Cómo se genera, distribuye, y usa la energía de forma eficiente — desde redes eléctricas hasta energías renovables.",
    whatItIs:
      "La ingeniería de energía abarca cómo se genera, distribuye, y usa la energía de forma eficiente — sistemas de energía tradicionales, energía renovable como la solar y la eólica, y la eficiencia energética en edificios e industria. En lugar de ser una sola disciplina estandarizada, se apoya en la ingeniería mecánica, eléctrica y ambiental.",
    realWorldExamples: [
      "Diseño de sistemas de energía solar y eólica",
      "Sistemas de redes eléctricas y distribución de energía",
      "Sistemas de eficiencia energética en edificios",
      "Sistemas de almacenamiento de baterías y gestión de energía",
    ],
    relatedMajors: ["Ingeniería de Energía", "Ingeniería Eléctrica (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    salary: {
      medianAnnual: "$122,930",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/about/data-for-occupations-not-covered-in-detail.htm",
      note: "Los ingenieros de energía no se rastrean como su propia categoría detallada del BLS — esta cifra proviene del grupo más amplio de 'Ingenieros, Todos los Demás', que según el BLS incluye a los ingenieros de energía, los ingenieros de energía eólica y los ingenieros de sistemas de energía solar. Ese grupo también abarca otras especialidades, así que trátala como una estimación aproximada, no como una cifra precisa para la ingeniería de energía. El trabajo en energía que se hace con un puesto de ingeniero eléctrico o mecánico se cuenta dentro de esas ocupaciones, así que también vale la pena ver la página de Ingeniería Eléctrica.",
      verifiedDate: "Septiembre 2026",
    },
    whatEngineersWorkOn:
      "Los ingenieros de energía trabajan sobre cómo se genera, transporta, almacena, y desperdicia la energía. Eso puede significar dimensionar un campo solar y sus inversores, modelar cuánto cuesta realmente operar el sistema de calefacción de un edificio, calcular dónde una red puede absorber más generación intermitente, o auditar una fábrica para encontrar por dónde se está yendo la energía. Buena parte del trabajo es medir y modelar antes de construir nada, porque el argumento para un cambio suele ser tan financiero como técnico.",
    commonMisconceptions: [
      "Que se trata solo de renovables — gran parte del campo es eficiencia, almacenamiento, y mantener funcionando la generación y las redes que ya existen.",
      "Que la eficiencia es menor frente a construir generación nueva — reducir lo que consume un edificio o una planta suele ser el cambio más barato y rápido disponible.",
      "Que es una carrera única y definida — la mayoría llega desde la ingeniería eléctrica o mecánica con enfoque en energía.",
      "Que la tecnología es lo difícil — las limitaciones más duras suelen ser el costo, la regulación, y la red física que ya está instalada.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería de energía significa trabajar en solar y eólica.",
        reality:
          "Las renovables son parte. También lo son las redes, el almacenamiento, la generación convencional, el calor de procesos industriales, y lograr que los edificios consuman menos desde el principio.",
      },
      {
        myth: "El trabajo es diseñar centrales nuevas.",
        reality:
          "Mucho más del trabajo es análisis — medir, modelar, y demostrar que un cambio propuesto realmente se va a pagar solo.",
      },
      {
        myth: "Cuando una tecnología es lo bastante barata, se instala.",
        reality:
          "La instalación choca con permisos, colas de conexión a la red, e infraestructura existente que no fue diseñada para ella.",
      },
      {
        myth: "Es una carrera de ingeniería aparte.",
        reality:
          "Suele ser una especialización. La mayoría estudió ingeniería eléctrica o mecánica y se movió hacia la energía por materias y empleos.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Estadística, si se ofrece", "Informática o programación, si se ofrece"],
    helpfulSkills: [
      "Soltura con la termodinámica y los fundamentos eléctricos, ya que el campo cruza ambos",
      "Poder trabajar con datos medidos en vez de supuestos, porque las promesas de ahorro tienen que resistir el escrutinio",
      "Nociones financieras básicas, ya que casi toda propuesta se defiende por su periodo de retorno tanto como por su física",
      "Paciencia con la regulación y los procesos de las eléctricas, que definen qué se puede conectar y cuándo",
      "Programación o manejo de hojas de cálculo suficiente para modelar un sistema antes de comprometerse",
    ],
    typicalProjects: [
      "Dimensionar un campo solar, sus inversores, y su conexión para un sitio concreto",
      "Auditar un edificio o una fábrica e identificar dónde se está desperdiciando energía",
      "Modelar cómo se comportaría un sistema de baterías a lo largo de un día de demanda",
      "Evaluar si un tramo de red puede admitir más generación intermitente",
      "Comparar opciones de calefacción o refrigeración por consumo y por costo de operación",
    ],
    typicalWorkday:
      "El tiempo se reparte entre modelado y análisis frente a una computadora y trabajo en sitio — recorrer instalaciones, leer medidores, comprobar qué está realmente instalado frente a lo que dicen los planos. Los informes y propuestas ocupan una parte real de la semana, porque buena parte del trabajo consiste en convencer a alguien de que vale la pena financiar un cambio. Los plazos de permisos y de las eléctricas marcan el ritmo más que la ingeniería en sí.",
    industries: [
      "Empresas eléctricas y operadores de red",
      "Desarrolladores de energías renovables",
      "Consultoras de ingeniería que hacen auditorías e instalaciones de edificios",
      "Fabricantes con grandes consumos energéticos industriales",
      "Programas públicos de energía y eficiencia",
    ],
    advantages: [
      "El trabajo conecta directamente con cuánta energía se usa y se desperdicia, algo fácil de que te importe",
      "Abarca trabajo eléctrico y mecánico, así que el día a día varía más que en un campo más estrecho",
      "Los resultados son medibles — normalmente puedes mostrar qué cambió tras un proyecto",
      "Hay demanda tanto en obra nueva como en mejorar lo que ya existe",
    ],
    challenges: [
      "El avance suele estar limitado por costo, permisos, y acceso a la red más que por la ingeniería",
      "El campo está moldeado por la política pública, que cambia con gobiernos y ciclos de financiamiento",
      "No es una carrera única bien definida, así que el camino de entrada está menos señalizado que en otras",
      "Los ahorros hay que demostrarlos, y medirlos es más difícil y desordenado de lo que suena",
    ],
    thingsPeopleDislike: [
      "Esperar permisos, aprobaciones de la eléctrica, y colas de conexión a la red",
      "Escribir una y otra vez la justificación económica de un trabajo técnicamente obvio",
      "Ver cómo se rechaza una propuesta sólida solo por su periodo de retorno",
      "Trabajo en sitio en salas de máquinas y azoteas que son calurosas, estrechas, o ambas",
    ],
    dayInLife: {
      blocks: [
        { time: "8:30 AM", label: "Datos de medidores", detail: "Sacar un mes de datos de energía de un edificio y notar que consume electricidad de noche, cuando debería estar vacío." },
        { time: "10:00 AM", label: "Recorrido en sitio", detail: "Recorrer una sala de máquinas y una azotea para comprobar qué está realmente instalado frente a lo que dicen los planos." },
        { time: "12:00 PM", label: "Modelado", detail: "Armar un modelo de cómo se cargaría y descargaría un sistema de baterías a lo largo de un día típico de demanda." },
        { time: "1:30 PM", label: "Justificación económica", detail: "Convertir el modelo en una propuesta: cuánto cuesta, cuánto ahorra, y cuánto tarda en pagarse." },
        { time: "3:00 PM", label: "Llamada con la eléctrica", detail: "Consultar con la empresa eléctrica qué hace falta para conectar un nuevo campo solar, y cuánto dura la cola de aprobación." },
        { time: "4:30 PM", label: "Redacción del informe", detail: "Redactar los hallazgos de una auditoría de forma que el dueño de un edificio realmente pueda actuar." },
      ],
      reflectionQuestion: "¿Disfrutarías un trabajo en el que demostrar que un cambio vale la pena económicamente importa tanto como la ingeniería en sí?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    nextSteps: {
      "middle-school": {
        project: "Haz una búsqueda de energía en casa: anota los aparatos, revisa cuáles están tibios o encendidos cuando nadie los usa, y adivina cuáles consumen más.",
        tool: "Un cuaderno — y un medidor de consumo enchufable, si tu familia tiene uno.",
        activity: "Busca un club ambiental, de ciencias, o de tecnología en tu escuela, si hay alguno disponible.",
        relatedField: "environmental-engineering",
      },
      "high-school": {
        project: "Usa una calculadora solar gratuita para estimar cuánta energía podrían producir unos paneles en tu casa o escuela, y compárala con un año de consumo eléctrico.",
        tool: "La calculadora PVWatts de NREL — gratuita y enfocada en EE. UU.; existen herramientas similares para otros países.",
        activity: "Haz un proyecto de feria de ciencias sobre energía, o únete a un club ambiental o a una competencia de energía renovable, si tu escuela participa en una.",
        relatedField: "electrical-engineering",
      },
      "college": {
        project: "Modela un sistema pequeño de paneles solares con baterías para un edificio real usando sus datos de consumo reales, y calcula el periodo de retorno.",
        tool: "El System Advisor Model (SAM) de NREL, que es gratuito, más una hoja de cálculo.",
        activity: "Busca un capítulo estudiantil de la IEEE Power & Energy Society, el Solar Decathlon del Departamento de Energía de EE. UU. si tu universidad compite, o unas prácticas con una empresa eléctrica o una consultora de energía.",
        relatedField: "mechanical-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a o Auditor/a de Energía", description: "Mide cómo usan la energía los edificios o las plantas y recomienda cambios que reducen el desperdicio y el costo." },
      { title: "Ingeniero/a de Proyectos Solares o Eólicos", description: "Diseña instalaciones renovables y las lleva por los permisos y la conexión a la red." },
      { title: "Ingeniero/a de Sistemas de Potencia", description: "Estudia cómo maneja la red eléctrica la nueva generación, el almacenamiento, y los cambios en la demanda." },
      { title: "Ingeniero/a de Almacenamiento de Energía", description: "Diseña y modela sistemas de baterías que guardan energía y la liberan cuando se necesita." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. cuenta a los ingenieros de energía — incluidos los de energía eólica y de sistemas de energía solar — en su grupo amplio de \"Ingenieros, Todos los Demás\", y proyecta un crecimiento del empleo de alrededor del 4% para ese grupo entre 2025 y 2035, más o menos al ritmo del promedio, o unos 6,200 empleos nuevos en la década. Ese grupo mezcla muchas especialidades, así que no es un pronóstico preciso para la ingeniería de energía, y buena parte del trabajo en energía lo hacen personas contadas como ingenieros eléctricos o mecánicos. El campo también está moldeado por la política energética y el financiamiento, que difieren según el país y pueden cambiar con los gobiernos — investiga el mercado actual y los incentivos donde vives antes de tomar decisiones.",
    beginnerActivities: [
      "Lee el recibo de luz de tu casa (con permiso) y averigua cuánta energía se usó y cuándo",
      "Usa una calculadora solar gratuita en línea para estimar cuánto podría producir en un año un conjunto de paneles en tu techo",
      "Haz una lista de todos los aparatos de tu casa que se quedan en modo de espera, y piensa cuáles se podrían apagar",
    ],
    selfReflectionQuestions: [
      "¿Me motivaría un trabajo que reduce la energía desperdiciada, aunque sea menos visible que construir una central?",
      "¿Estoy cómodo/a con que la política, los permisos, y el financiamiento definan lo que puedo hacer?",
      "¿Me gusta combinar análisis de datos en la computadora con visitas a sitios y salas de máquinas?",
      "¿Disfrutaría defender el argumento económico de un cambio, no solo el técnico?",
    ],
  },
  {
    slug: "semiconductor-engineering",
    name: "Ingeniería de Semiconductores",
    tagline: "Cómo se diseñan y fabrican los chips que impulsan casi todos los dispositivos electrónicos modernos.",
    whatItIs:
      "La ingeniería de semiconductores trata sobre diseñar y fabricar los chips que impulsan casi todos los dispositivos electrónicos modernos — trabajando a la escala de circuitos y materiales individuales, no de un producto terminado. Combina la ingeniería eléctrica, la ciencia de materiales, y la manufactura de precisión.",
    realWorldExamples: [
      "Diseño de microchips y procesadores",
      "Ingeniería de procesos de fabricación de semiconductores",
      "Pruebas de chips y verificación de calidad",
      "Ingeniería de materiales para la manufactura de semiconductores",
    ],
    relatedMajors: ["Ingeniería Eléctrica (con enfoque en semiconductores)", "Ciencia e Ingeniería de Materiales (con cierta superposición)", "Ingeniería en Computación (con cierta superposición)"],
    salaryNote:
      "No hay una categoría separada para la ingeniería de semiconductores en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica, en computación, o de materiales. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de semiconductores trabajan a una escala donde el material mismo es el diseño. Algunos se dedican al circuito — colocar transistores, verificar tiempos, y simular un bloque mucho antes de que exista silicio alguno. Otros se dedican al proceso, ajustando la secuencia de depósito, litografía, y grabado que construye un chip capa por capa, y buscando por qué una oblea salió mal. Ambos lados viven de los datos: cantidades enormes de mediciones, y la estadística necesaria para distinguir un efecto real del ruido.",
    commonMisconceptions: [
      "Que se trata de construir computadoras — el trabajo es el chip en sí, varias capas de abstracción por debajo de un producto terminado.",
      "Que diseño y fabricación son el mismo puesto — el diseño de chips y la ingeniería de procesos de fábrica son carreras bastante distintas que comparten industria.",
      "Que todo está automatizado — las herramientas lo están, pero decidir qué ejecutar, y diagnosticar qué salió mal, no.",
      "Que pasas el día en una sala limpia con traje blanco — algunos puestos sí, y muchos otros están enteramente frente a una computadora.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros de semiconductores construyen computadoras.",
        reality:
          "Construyen lo que va dentro del chip. Una computadora terminada está muchas capas de abstracción por encima de donde ocurre este trabajo.",
      },
      {
        myth: "Es un solo trabajo.",
        reality:
          "Diseño y proceso son casi profesiones separadas. Uno simula circuitos en un escritorio; el otro opera y depura una línea de fabricación.",
      },
      {
        myth: "Las fábricas modernas están totalmente automatizadas, así que hay poco que hacer.",
        reality:
          "La automatización ejecuta los pasos. Los ingenieros deciden cuáles deben ser esos pasos y averiguan por qué cayó el rendimiento cuando nada obvio cambió.",
      },
      {
        myth: "Necesitas un doctorado para entrar.",
        reality:
          "Los puestos de investigación suelen pedirlo, pero muchísimo trabajo de diseño, prueba, y proceso lo hace gente con licenciatura o maestría.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Informática o programación, si se ofrece", "Estadística, si se ofrece"],
    helpfulSkills: [
      "Soltura con la física y la química a un nivel por debajo de lo visible, ya que el comportamiento viene de efectos de materiales y cuánticos",
      "Estadística sólida, porque el rendimiento y el control de procesos son problemas estadísticos antes que físicos",
      "Programación y scripting, ya que analizar a mano los datos de proceso y prueba no es viable",
      "Paciencia con ciclos de retroalimentación largos, porque un cambio en un proceso puede tardar semanas en verse en los resultados",
      "Diagnóstico metódico, porque un defecto puede venir de cualquiera de cientos de pasos",
    ],
    typicalProjects: [
      "Diseñar y simular un bloque de circuito frente a objetivos de tiempo, consumo, y área",
      "Ajustar un paso de depósito o grabado para alcanzar un espesor o perfil objetivo",
      "Investigar por qué cayó el rendimiento en un producto o una herramienta concreta",
      "Desarrollar procedimientos de prueba que detecten chips defectuosos antes de enviarlos",
      "Caracterizar un material o proceso nuevo y documentar cómo se comporta",
    ],
    typicalWorkday:
      "En los puestos de diseño, la mayor parte del día es simulación y análisis frente a una computadora, con revisiones de diseño de por medio. En los puestos de proceso y rendimiento, es una mezcla de análisis de datos y tiempo dentro o junto a la fábrica, siguiendo experimentos y reaccionando cuando una herramienta se desvía. Ambos lados están marcados por ciclos largos — una oblea tarda semanas en recorrer la línea, así que el experimento de hoy responde una pregunta que hiciste hace tiempo.",
    industries: [
      "Diseñadores de chips y empresas sin fábrica propia",
      "Fundiciones de semiconductores y fabricantes integrados",
      "Proveedores de equipo y materiales para semiconductores",
      "Laboratorios de investigación e instalaciones universitarias",
      "Empresas que diseñan silicio a medida para sus propios productos",
    ],
    advantages: [
      "El trabajo está debajo de casi toda la tecnología moderna, así que su alcance es inusualmente amplio",
      "Es trabajo técnico genuinamente profundo, con espacio para especializarse muchísimo",
      "Las rutas de diseño y de proceso son bastante distintas, así que una puede encajarte cuando la otra no",
      "Las habilidades de estadística y control de procesos se transfieren a otra manufactura de alta precisión",
    ],
    challenges: [
      "Los ciclos de retroalimentación son largos, lo que hace la iteración lenta comparada con el software o lo mecánico",
      "La industria es intensiva en capital y cíclica, y la contratación se mueve con ese ciclo",
      "Las fábricas se concentran en regiones concretas, así que las opciones de ubicación pueden ser limitadas",
      "La curva de aprendizaje es empinada, y mucho del conocimiento práctico es específico del proceso de una empresa",
    ],
    thingsPeopleDislike: [
      "Esperar semanas a que una oblea te diga si una idea funcionó",
      "El protocolo de sala limpia, el vestuario, y las restricciones que conlleva",
      "Perseguir problemas de rendimiento con cientos de causas posibles y poca evidencia",
      "Las guardias y la cobertura por turnos cuando una línea de producción no puede detenerse",
    ],
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Revisión de la línea", detail: "Revisar las mediciones nocturnas de las obleas que pasan por los pasos a tu cargo. (Este ejemplo sigue a un ingeniero de procesos — un puesto de diseño de chips pasa casi todo el día frente a una computadora.)" },
        { time: "9:30 AM", label: "En la fábrica", detail: "Ponerte el traje para revisar, junto con los técnicos de equipo, una herramienta que se está saliendo de su rango normal." },
        { time: "11:00 AM", label: "Análisis de datos", detail: "Escribir un script que compare el rendimiento entre herramientas y lotes, para distinguir un efecto real del ruido." },
        { time: "1:00 PM", label: "Plan de experimento", detail: "Diseñar un experimento pequeño en un paso de depósito, sabiendo que los resultados tardarán semanas en llegar." },
        { time: "3:00 PM", label: "Reunión entre equipos", detail: "Reunirte con ingenieros de diseño y de pruebas por un patrón de fallos que aparece en chips terminados." },
        { time: "4:30 PM", label: "Notas de relevo", detail: "Documentar los cambios del día para el siguiente turno, ya que la línea no se detiene de noche." },
      ],
      reflectionQuestion: "¿Tendrías paciencia con un trabajo en el que un experimento que empiezas hoy podría no decirte nada en semanas?",
    },
    // Mismas calificaciones que en fields.ts — los comentarios de ahí explican en qué se basa cada una.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Low",
      marketUncertainty: "High",
      coding: "Medium",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    nextSteps: {
      "middle-school": {
        project: "Arma un circuito sencillo con una batería, un interruptor, y un LED, y luego investiga cómo esa misma idea de encendido y apagado se repite miles de millones de veces dentro de un chip.",
        tool: "Un kit de electrónica para principiantes o un set de circuitos de piezas encajables.",
        activity: "Busca un club de ciencia, tecnología, o electrónica en tu escuela, o una exposición sobre computadoras en un museo de ciencias, si hay alguno cerca.",
        relatedField: "electrical-engineering",
      },
      "high-school": {
        project: "Construye puertas lógicas con transistores en una protoboard, y luego combínalas en un circuito pequeño como un semisumador.",
        tool: "Una protoboard, algunos transistores y LEDs, y un simulador de circuitos gratuito en el navegador como el de Falstad.",
        activity: "Toma física o una clase de electrónica, o haz un proyecto de feria de ciencias sobre electrónica, si tu escuela lo ofrece.",
        relatedField: "computer-engineering",
      },
      "college": {
        project: "Diseña un circuito digital pequeño en un lenguaje de descripción de hardware y simúlalo, y luego investiga programas que permiten a estudiantes fabricar un chip real a partir de su diseño.",
        tool: "Herramientas de diseño de chips gratuitas y de código abierto, como las que usa el proyecto Tiny Tapeout.",
        activity: "Busca una rama estudiantil del IEEE, una sala limpia o instalación de nanofabricación en tu universidad que capacite a estudiantes de licenciatura, o unas prácticas en una empresa de chips o un proveedor de equipo.",
        relatedField: "materials-engineering",
      },
    },
    careerPaths: [
      { title: "Ingeniero/a de Procesos", description: "Se hace cargo de uno o más pasos de fabricación y los mantiene en su objetivo, corrida tras corrida." },
      { title: "Ingeniero/a de Rendimiento", description: "Averigua por qué fallan algunos chips, y qué paso o herramienta es responsable." },
      { title: "Ingeniero/a de Diseño o Verificación de Chips", description: "Diseña bloques de circuito, o demuestra mediante simulación que un diseño funciona antes de fabricarlo." },
      { title: "Ingeniero/a de Pruebas", description: "Desarrolla las pruebas que detectan chips defectuosos antes de enviarlos." },
    ],
    howCompetitive:
      "La Oficina de Estadísticas Laborales de EE. UU. no publica una proyección de empleo separada para la ingeniería de semiconductores — las personas que hacen este trabajo se cuentan dentro de ocupaciones como la ingeniería eléctrica, de hardware de computadoras, de materiales, y otras, así que no hay una cifra de crecimiento oficial específica para este campo. La contratación en la industria sigue su ciclo de inversión, que puede subir y bajar, y las fábricas se concentran en regiones concretas de unos pocos países, así que dónde vives importa más aquí que en la mayoría de los campos — investiga la situación actual en los lugares donde considerarías trabajar.",
    beginnerActivities: [
      "Busca una foto de un chip bajo el microscopio (se le llama die shot) e intenta encontrar bloques repetidos, como la memoria",
      "Arma un circuito sencillo en una protoboard con un LED y un transistor, y observa cómo el transistor funciona como interruptor",
      "Prueba la simulación de puertas lógicas de este sitio y averigua cómo se combinan las puertas en algo que puede sumar",
    ],
    selfReflectionQuestions: [
      "¿Tengo la paciencia para experimentos que tardan semanas en dar una respuesta?",
      "¿Disfrutaría trabajar a una escala que solo puedo ver a través de mediciones y datos?",
      "¿Estaría bien siguiendo procedimientos estrictos de sala limpia, o preferiría un puesto de diseño frente a una computadora?",
      "¿Estaría dispuesto/a a vivir donde están las empresas de chips y las fábricas?",
    ],
  },
];
