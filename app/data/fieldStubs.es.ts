import { FieldStub } from "./types";

// Spanish translations of the lighter-weight "stub" field entries, same
// shape as fieldStubs.ts. Mirrors the fieldsEs.ts pattern: only translated
// stubs appear here, and FieldPageContent falls back to the English stub
// (with a small notice) for any not yet translated.
export const fieldStubsEs: FieldStub[] = [
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
    relatedField: "civil-engineering",
    salaryNote:
      "La Oficina de Estadísticas Laborales de EE. UU. no rastrea la ingeniería arquitectónica como su propia categoría separada — usualmente se agrupa con la ingeniería civil o mecánica según el puesto específico. Consulta la página de Ingeniería Civil para ver datos de salario relacionados y con fuente.",
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
    relatedField: "mechanical-engineering",
    salaryNote:
      "Los ingenieros automotrices normalmente se rastrean bajo la categoría más amplia de 'ingenieros mecánicos' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Mecánica para ver esos datos de salario con fuente.",
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
    relatedField: "industrial-engineering",
    salaryNote:
      "La ingeniería de manufactura tampoco se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se agrupa con la ingeniería industrial o mecánica. Consulta la página de Ingeniería Industrial para ver datos de salario relacionados y con fuente.",
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
    relatedField: "aerospace-engineering",
    salaryNote:
      "Como varios campos de esta página, la ingeniería de sistemas no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia como una especialización dentro de otra disciplina de ingeniería. Consulta las páginas de Ingeniería Aeroespacial o Industrial para ver datos de salario relacionados y con fuente.",
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
    relatedField: "civil-engineering",
    salaryNote:
      "Los ingenieros estructurales normalmente se rastrean bajo la categoría más amplia de 'ingenieros civiles' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Civil para ver esos datos de salario con fuente.",
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
    relatedField: "electrical-engineering",
    salaryNote:
      "No existe una categoría separada para la ingeniería de energía en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica o mecánica con un enfoque en energía. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
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
    relatedField: "electrical-engineering",
    salaryNote:
      "No hay una categoría separada para la ingeniería de semiconductores en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica, en computación, o de materiales. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
  },
];
