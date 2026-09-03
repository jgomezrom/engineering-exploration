import { FieldStub } from "./types";

// Spanish translations of the lighter-weight "stub" field entries, same
// shape as fieldStubs.ts. Mirrors the fieldsEs.ts pattern: only translated
// stubs appear here, and FieldPageContent falls back to the English stub
// (with a small notice) for any not yet translated.
export const fieldStubsEs: FieldStub[] = [
  {
    slug: "agricultural-engineering",
    name: "Ingeniería Agrícola",
    tagline: "Aplicar la ingeniería a la agricultura y la producción de alimentos — equipo, riego, y sistemas alimentarios.",
    whatItIs:
      "La ingeniería agrícola aplica principios de ingeniería a la agricultura y la producción de alimentos — diseñando equipo, sistemas de riego, y estructuras que hacen la agricultura más eficiente, y adaptando la tecnología para trabajar con factores biológicos y ambientales que no se comportan como los materiales de ingeniería estándar.",
    realWorldExamples: [
      "Diseño de equipo y maquinaria agrícola",
      "Sistemas de riego y gestión del agua",
      "Sistemas de procesamiento y almacenamiento de alimentos",
      "Tecnología de agricultura de precisión, como monitoreo de cultivos basado en sensores",
    ],
    relatedMajors: ["Ingeniería Agrícola", "Ingeniería Mecánica (con cierta superposición)", "Ingeniería Ambiental (con cierta superposición)"],
    relatedField: "environmental-engineering",
    salary: {
      medianAnnual: "$98,590",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/agricultural-engineers.htm",
      note: "Mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
  },
  {
    slug: "marine-engineering",
    name: "Ingeniería Marina",
    tagline: "Diseñar y mantener barcos, submarinos, y otras embarcaciones construidas para el océano.",
    whatItIs:
      "La ingeniería marina, a menudo combinada con la arquitectura naval, se enfoca en diseñar, construir, y mantener barcos, submarinos, y otras embarcaciones y estructuras marinas — el casco, los sistemas de propulsión, y los sistemas mecánicos y eléctricos a bordo todos tienen que funcionar de forma confiable en un entorno oceánico exigente.",
    realWorldExamples: [
      "Diseño de cascos y análisis estructural de barcos",
      "Sistemas de propulsión y potencia de barcos",
      "Diseño de plataformas marinas",
      "Sistemas de submarinos y embarcaciones navales",
    ],
    relatedMajors: ["Ingeniería Marina", "Arquitectura Naval", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "mechanical-engineering",
    salary: {
      medianAnnual: "$112,230",
      period: "Mayo 2025",
      region: "Estados Unidos (mediana nacional)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/marine-engineers-and-naval-architects.htm",
      note: "Mediana nacional de EE. UU. entre todos los niveles de experiencia — no es un salario inicial, y no está ajustada a tu región.",
      verifiedDate: "Septiembre 2026",
    },
  },
  {
    slug: "architectural-engineering",
    name: "Ingeniería Arquitectónica",
    tagline: "Diseñar los sistemas estructurales, mecánicos y eléctricos que hacen que un edificio realmente funcione.",
    whatItIs:
      "La ingeniería arquitectónica se enfoca en los sistemas técnicos dentro de los edificios — soporte estructural, calefacción y refrigeración, electricidad, iluminación, y acústica — trabajando junto a arquitectos, quienes se enfocan más en la forma y distribución de un edificio. Es un campo más pequeño y especializado que combina conceptos de ingeniería civil, mecánica y eléctrica aplicados específicamente a edificios.",
    realWorldExamples: [
      "Sistemas estructurales para edificios grandes o complejos",
      "Diseño de sistemas de calefacción, refrigeración, y ventilación",
      "Sistemas eléctricos y de iluminación de edificios",
      "Diseño acústico para espacios como salas de conciertos",
    ],
    relatedMajors: ["Ingeniería Arquitectónica", "Ingeniería Civil (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "civil-engineering",
    salaryNote:
      "La ingeniería arquitectónica no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se agrupa con la ingeniería civil o mecánica según el puesto específico. Consulta la página de Ingeniería Civil para ver datos de salario relacionados y con fuente.",
  },
  {
    slug: "automotive-engineering",
    name: "Ingeniería Automotriz",
    tagline: "Diseñar, probar, y fabricar autos y otros vehículos de carretera.",
    whatItIs:
      "La ingeniería automotriz se enfoca específicamente en el diseño, las pruebas, y la fabricación de autos y otros vehículos de carretera — motores, transmisiones, sistemas de seguridad, y cada vez más tecnología de vehículos eléctricos y autónomos. Normalmente se estudia como una especialización dentro de la ingeniería mecánica en lugar de ser su propia carrera separada.",
    realWorldExamples: [
      "Diseño de motores y sistemas de transmisión",
      "Pruebas de seguridad y colisión de vehículos",
      "Sistemas de batería y motor para vehículos eléctricos",
      "Sistemas avanzados de asistencia al conductor y vehículos autónomos",
    ],
    relatedMajors: ["Ingeniería Mecánica (con enfoque automotriz)", "Ingeniería Eléctrica (con cierta superposición para sistemas eléctricos y autónomos)"],
    relatedField: "mechanical-engineering",
    salaryNote:
      "Los ingenieros automotrices normalmente se rastrean bajo la categoría más amplia de 'ingenieros mecánicos' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Mecánica para ver esos datos de salario con fuente.",
  },
  {
    slug: "manufacturing-engineering",
    name: "Ingeniería de Manufactura",
    tagline: "Diseñar y mejorar los procesos y equipos que convierten un diseño en un producto físico a gran escala.",
    whatItIs:
      "La ingeniería de manufactura se enfoca en diseñar y mejorar los procesos y equipos usados para realmente producir cosas a gran escala — la maquinaria, las herramientas, y los flujos de trabajo que convierten un diseño en un producto físico. Se superpone de cerca tanto con la ingeniería mecánica como con la industrial.",
    realWorldExamples: [
      "Diseño de líneas de producción y equipo de fábrica",
      "Diseño de herramientas y dispositivos de sujeción para manufactura",
      "Mejora de procesos para reducir desperdicio o defectos",
      "Automatización de pasos de manufactura",
    ],
    relatedMajors: ["Ingeniería de Manufactura", "Ingeniería Industrial (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "industrial-engineering",
    salaryNote:
      "La ingeniería de manufactura no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se agrupa con la ingeniería industrial o mecánica. Consulta la página de Ingeniería Industrial para ver datos de salario relacionados y con fuente.",
  },
  {
    slug: "systems-engineering",
    name: "Ingeniería de Sistemas",
    tagline: "Asegurarse de que todas las piezas individuales de un proyecto grande y complejo realmente funcionen bien juntas.",
    whatItIs:
      "La ingeniería de sistemas se enfoca en cómo se integran los sistemas complejos como un todo, en lugar de en un solo componente — asegurándose de que todas las piezas individuales de un proyecto grande, como un avión, una nave espacial, o una plataforma de software importante, funcionen correctamente juntas. Se trata menos de diseñar una parte específica y más de gestionar cómo se conecta todo.",
    realWorldExamples: [
      "Coordinar cómo funcionan juntos los subsistemas de un avión o una nave espacial",
      "Gestionar los requisitos y la integración de grandes proyectos de defensa o infraestructura",
      "Supervisar cómo interactúan los componentes de hardware y software de un producto complejo",
    ],
    relatedMajors: ["Ingeniería de Sistemas", "A menudo se estudia como una especialización dentro de la ingeniería aeroespacial, industrial o eléctrica"],
    relatedField: "aerospace-engineering",
    salaryNote:
      "La ingeniería de sistemas no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia como una especialización dentro de otra disciplina de ingeniería. Consulta las páginas de Ingeniería Aeroespacial o Industrial para ver datos de salario relacionados y con fuente.",
  },
  {
    slug: "structural-engineering",
    name: "Ingeniería Estructural",
    tagline: "Asegurarse de que edificios y puentes puedan soportar de forma segura su propio peso, además del viento, los terremotos, y el uso diario.",
    whatItIs:
      "La ingeniería estructural se enfoca específicamente en la estructura portante de edificios y puentes — asegurándose de que una estructura pueda soportar de forma segura su propio peso más fuerzas como el viento, los terremotos, y el uso diario. Normalmente se estudia como una especialización dentro de la ingeniería civil en lugar de ser su propia carrera separada.",
    realWorldExamples: [
      "Diseño de la estructura portante de edificios",
      "Diseño y análisis estructural de puentes",
      "Ingeniería de resistencia sísmica y al viento",
      "Inspección estructural de edificios y puentes existentes",
    ],
    relatedMajors: ["Ingeniería Civil (con enfoque estructural)", "Ingeniería Estructural (ofrecida como carrera propia en algunas universidades)"],
    relatedField: "civil-engineering",
    salaryNote:
      "Los ingenieros estructurales normalmente se rastrean bajo la categoría más amplia de 'ingenieros civiles' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Civil para ver esos datos de salario con fuente.",
  },
  {
    slug: "energy-engineering",
    name: "Ingeniería de Energía",
    tagline: "Diseñar cómo se genera, distribuye, y usa la energía de forma eficiente — desde redes eléctricas hasta energías renovables.",
    whatItIs:
      "La ingeniería de energía se enfoca en cómo se genera, distribuye, y usa la energía de forma eficiente — abarcando sistemas de energía tradicionales, energía renovable como la solar y la eólica, y la eficiencia energética en edificios e industria. Se apoya en la ingeniería mecánica, eléctrica y ambiental en lugar de ser una sola disciplina estandarizada.",
    realWorldExamples: [
      "Diseño de sistemas de energía solar y eólica",
      "Sistemas de redes eléctricas y distribución de energía",
      "Sistemas de eficiencia energética en edificios",
      "Sistemas de almacenamiento de baterías y gestión de energía",
    ],
    relatedMajors: ["Ingeniería de Energía", "Ingeniería Eléctrica (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "La ingeniería de energía no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica o mecánica con un enfoque en energía. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
  },
  {
    slug: "semiconductor-engineering",
    name: "Ingeniería de Semiconductores",
    tagline: "Diseñar y fabricar los chips que impulsan casi todos los dispositivos electrónicos modernos.",
    whatItIs:
      "La ingeniería de semiconductores se enfoca en diseñar y fabricar los chips que impulsan casi todos los dispositivos electrónicos modernos — trabajando a la escala de circuitos y materiales individuales en lugar de un producto terminado. Combina la ingeniería eléctrica, la ciencia de materiales, y la manufactura de precisión.",
    realWorldExamples: [
      "Diseño de microchips y procesadores",
      "Ingeniería de procesos de fabricación de semiconductores",
      "Pruebas de chips y verificación de calidad",
      "Ingeniería de materiales para la manufactura de semiconductores",
    ],
    relatedMajors: ["Ingeniería Eléctrica (con enfoque en semiconductores)", "Ciencia e Ingeniería de Materiales (con cierta superposición)", "Ingeniería en Computación (con cierta superposición)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "La ingeniería de semiconductores no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica, en computación, o de materiales. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
  },
];
