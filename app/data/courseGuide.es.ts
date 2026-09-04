import { CourseSubject, FieldCourseFocus, TutoringResource } from "./types";

// Spanish translation of the full course guide — small and complete, so
// unlike fields.es.ts there's no partial/fallback case to handle here.
// Official course/program names (AP Calculus BC, IB Physics, MATHCOUNTS,
// Khan Academy, etc.) are kept as-is since those are the actual names a
// student would search for or enroll in, in any country.
export const middleSchoolSubjectsEs: CourseSubject[] = [
  {
    subject: "Matemáticas",
    standard: ["Pre-Álgebra", "Álgebra I, si tu escuela lo ofrece desde esta etapa"],
    advanced: [],
    note:
      "Tomar Álgebra I en 8vo grado, si se ofrece, usualmente es lo que abre la puerta para llegar a Cálculo en el último año de preparatoria — pero muchos ingenieros no siguieron este camino y se pusieron al día bien más adelante.",
  },
  {
    subject: "Ciencias",
    standard: ["Ciencias Generales", "Ciencias Físicas", "Ciencias de la Tierra"],
    advanced: [],
  },
  {
    subject: "Exposición a Tecnología e Ingeniería",
    standard: [
      'Cualquier electiva de "Tech Ed", STEM, o aplicaciones de computación, si se ofrece',
      "Una clase introductoria de programación, como una basada en Scratch",
    ],
    advanced: [],
    note: "Las electivas de secundaria varían enormemente según la escuela. Si la tuya no ofrece ninguna de estas, los clubes y recursos gratuitos en línea (ver abajo) pueden llenar el vacío.",
  },
];

export const highSchoolSubjectsEs: CourseSubject[] = [
  {
    subject: "Matemáticas",
    standard: ["Álgebra I", "Geometría", "Álgebra II", "Precálculo", "Cálculo"],
    advanced: [
      "AP Calculus AB (EE. UU.) — cálculo diferencial e integral introductorio",
      "AP Calculus BC (EE. UU.) — el contenido de AB más contenido adicional, aproximadamente dos semestres de cálculo universitario",
      "AP Statistics (EE. UU.) — especialmente útil para ingeniería industrial",
      "IB Mathematics: Analysis & Approaches, SL o HL — la opción más tradicional, centrada en teoría primero, generalmente la mejor opción para ingeniería",
      "IB Mathematics: Applications & Interpretation, SL o HL — una opción más aplicada, basada en tecnología",
    ],
    note: "No todas las escuelas ofrecen Calculus BC o IB Matemáticas de Nivel Superior. Toma las matemáticas más avanzadas que tu escuela realmente ofrezca — no te preocupes si ese límite es más bajo que el de otra escuela.",
  },
  {
    subject: "Física",
    standard: ["Física (a menudo basada en álgebra)"],
    advanced: [
      "AP Physics 1 (EE. UU.) — basada en álgebra, cubre mecánica",
      "AP Physics 2 (EE. UU.) — basada en álgebra, cubre electricidad, fluidos, y más",
      "AP Physics C: Mechanics (EE. UU.) — basada en cálculo, la opción más directamente útil para estudiantes interesados en mecánica, civil, y aeroespacial",
      "AP Physics C: Electricity & Magnetism (EE. UU.) — basada en cálculo, la opción más directamente útil para estudiantes interesados en eléctrica y computación",
      "IB Physics, SL o HL",
    ],
    note: "Si tu escuela solo ofrece un curso de física, tómalo — la etiqueta específica importa mucho menos que realmente tomar física.",
  },
  {
    subject: "Química y Biología",
    standard: ["Química", "Biología"],
    advanced: [
      "AP Chemistry (EE. UU.)",
      "AP Biology (EE. UU.)",
      "AP Environmental Science (EE. UU.)",
      "IB Chemistry, SL o HL",
      "IB Biology, SL o HL",
      "IB Environmental Systems and Societies",
    ],
    note: "Estas importan más para ingeniería biomédica, química, ambiental, agrícola, y de materiales — pero una base general de química y biología es útil en todas partes.",
  },
  {
    subject: "Ciencias de la Computación",
    standard: ["Cualquier electiva introductoria de programación o ciencias de la computación, si se ofrece"],
    advanced: [
      "AP Computer Science Principles (EE. UU.) — una introducción verdaderamente amigable para principiantes, sin experiencia previa requerida",
      "AP Computer Science A (EE. UU.) — basada en Java y más rigurosa, la mejor opción si estás considerando seriamente ingeniería de software o en computación",
      "IB Computer Science, SL o HL",
    ],
  },
  {
    subject: "Electivas Específicas de Ingeniería",
    standard: [
      "Introduction to Engineering Design y Principles of Engineering, si tu escuela participa en el programa Project Lead The Way (PLTW)",
      "Clases de Diseño Asistido por Computadora (CAD) o dibujo técnico",
      "Clases de robótica (separadas de un club de robótica o equipo de competencia)",
      "Clases de taller, tecnología industrial, o clases similares de fabricación práctica",
    ],
    advanced: [],
    note: "Estas son las clases menos disponibles de forma consistente en esta lista — muchas escuelas no las ofrecen en absoluto. Eso es un vacío real de recursos, no algo malo en ti por no tener acceso a ellas.",
  },
];

export const fieldCourseFocusEs: FieldCourseFocus[] = [
  {
    fieldSlug: "mechanical-engineering",
    priorityCourses: [
      "Física, especialmente mecánica — AP Physics C: Mechanics o IB Physics HL si se ofrece",
      "Cálculo, idealmente hasta AP Calculus BC o IB Math AA HL",
      "Clases de CAD o dibujo técnico, si se ofrecen",
    ],
  },
  {
    fieldSlug: "electrical-engineering",
    priorityCourses: [
      "Física, especialmente electricidad y magnetismo — AP Physics C: E&M o IB Physics HL si se ofrece",
      "Cálculo",
      "Cualquier electiva de ciencias de la computación, ya que la programación embebida es parte del campo",
    ],
  },
  {
    fieldSlug: "civil-engineering",
    priorityCourses: [
      "Física, especialmente estática y mecánica",
      "Cálculo",
      "Ciencias ambientales o ciencias de la tierra, si se ofrecen",
    ],
  },
  {
    fieldSlug: "biomedical-engineering",
    priorityCourses: [
      "Biología, química, y física importan todas aquí — este campo genuinamente se apoya en las tres",
      "Cálculo",
    ],
  },
  {
    fieldSlug: "software-engineering",
    priorityCourses: [
      "Ciencias de la computación — AP CS A si estás decidido/a específicamente por software, AP CS Principles si apenas estás empezando",
      "Álgebra II y cursos de matemáticas discretas o basados en lógica, si se ofrecen",
      "El cálculo es útil pero menos central que en otros campos",
    ],
  },
  {
    fieldSlug: "aerospace-engineering",
    priorityCourses: [
      "Física, especialmente mecánica y termodinámica — el campo con más intensidad de matemáticas y física de este sitio",
      "Cálculo, idealmente hasta BC o IB HL",
      "Química",
    ],
  },
  {
    fieldSlug: "chemical-engineering",
    priorityCourses: [
      "Química — la materia más central para este campo",
      "Física y Cálculo",
      "Biología, si está disponible, es un plus pero no es central",
    ],
  },
  {
    fieldSlug: "computer-engineering",
    priorityCourses: [
      "Física, especialmente electricidad y electrónica",
      "Cálculo",
      "Ciencias de la computación, ya que el campo combina circuitos y código",
    ],
  },
  {
    fieldSlug: "environmental-engineering",
    priorityCourses: [
      "Ciencias ambientales o ciencias de la tierra, si se ofrecen",
      "Química y Biología",
      "Física y Cálculo",
    ],
  },
  {
    fieldSlug: "industrial-engineering",
    priorityCourses: [
      "Estadística específicamente — AP Statistics si se ofrece, ya que este campo se apoya en el análisis de datos más que en la física pura",
      "Física",
      "Cualquier electiva introductoria de programación o análisis de datos",
    ],
  },
  {
    fieldSlug: "materials-engineering",
    priorityCourses: ["Química y Física aproximadamente por igual", "Cálculo", "Dibujo técnico o CAD, si se ofrece"],
  },
  {
    fieldSlug: "robotics-engineering",
    priorityCourses: [
      "Física, especialmente mecánica y electricidad",
      "Cálculo",
      "Cualquier electiva de ciencias de la computación — este campo genuinamente abarca cursos de mecánica, eléctrica, y software",
    ],
  },
  {
    fieldSlug: "nuclear-engineering",
    priorityCourses: [
      "Física, especialmente física nuclear y moderna, si tu escuela la ofrece",
      "Cálculo",
      "Química",
    ],
  },
  {
    fieldSlug: "petroleum-engineering",
    priorityCourses: [
      "Física y Química",
      "Cálculo",
      "Ciencias de la tierra o geología, si se ofrece",
    ],
  },
  {
    fieldSlug: "agricultural-engineering",
    priorityCourses: [
      "Biología — este campo se apoya en ella más que la mayoría de los campos de ingeniería",
      "Física y Química",
      "Cálculo",
    ],
  },
  {
    fieldSlug: "marine-engineering",
    priorityCourses: [
      "Física",
      "Cálculo",
      "Química, útil para entender la corrosión y los materiales en ambientes marinos",
    ],
  },
];

export const tutoringResourcesEs: TutoringResource[] = [
  {
    name: "Khan Academy",
    type: "Free",
    description:
      "Gratuito, a tu propio ritmo, y cubre desde aritmética básica hasta cálculo, física, y más. Se menciona en otras partes de este sitio por una razón — es uno de los recursos gratuitos más completos disponibles.",
  },
  {
    name: "PhET Interactive Simulations (University of Colorado Boulder)",
    type: "Free",
    description:
      "Simulaciones interactivas gratuitas para conceptos de física, química, y matemáticas — también usadas en otras partes de este sitio para exploración práctica.",
  },
  {
    name: "Tutorías en la escuela",
    type: "Free",
    description:
      "Muchas escuelas tienen tutorías gratuitas entre compañeros, un programa de tutoría de la Sociedad Nacional de Honor, u horas de oficina de los maestros. Realmente vale la pena preguntar — es fácil pasarlo por alto si nadie te dice que existe.",
  },
  {
    name: "Recursos de la biblioteca pública",
    type: "Free",
    description:
      "Algunas bibliotecas públicas ofrecen tutorías gratuitas o programas de ayuda con la tarea. La disponibilidad varía mucho según la ubicación, así que vale la pena revisar el sitio web de tu biblioteca local.",
  },
  {
    name: "Canales de YouTube de matemáticas y ciencias",
    type: "Free",
    description:
      "Canales como 3Blue1Brown (para intuición visual de matemáticas) y Professor Leonard (para cálculo) son gratuitos y ampliamente recomendados por estudiantes que estudian estas materias.",
  },
  {
    name: "Inscripción dual en un colegio comunitario",
    type: "Low-cost or paid",
    description:
      "Donde esté disponible, esto le permite a un estudiante motivado tomar cursos reales de matemáticas o física de nivel universitario mientras todavía está en la preparatoria, a veces a costo reducido o gratuito dependiendo de tu estado o programa local. Pregúntale a un consejero escolar si esto está disponible para ti.",
  },
  {
    name: "Servicios de tutoría pagados o un tutor privado",
    type: "Low-cost or paid",
    description:
      "Servicios como Mathnasium, Kumon, o Sylvan Learning, o un tutor independiente. El costo y la disponibilidad varían mucho según la ubicación, y muchos ingenieros exitosos nunca usaron un tutor pagado. Si es accesible para ti y estás atorado/a en una materia específica, puede ayudar de verdad — pero no es un requisito, y no es lo que determina quién termina teniendo éxito en la ingeniería.",
  },
  {
    name: "MATHCOUNTS",
    type: "Competition & enrichment",
    description: "Una conocida competencia nacional de matemáticas específicamente para estudiantes de secundaria.",
  },
  {
    name: "Science Olympiad",
    type: "Competition & enrichment",
    description: "Competencias de ciencia e ingeniería en equipo, disponibles tanto en secundaria como en preparatoria.",
  },
  {
    name: "FIRST LEGO League, FIRST Tech Challenge, o FIRST Robotics Competition",
    type: "Competition & enrichment",
    description:
      "Mencionadas en otras partes de este sitio — estas desarrollan habilidades reales de ingeniería a través de competencia práctica, no solo aprendizaje en el salón de clases.",
  },
  {
    name: "AMC (American Mathematics Competitions)",
    type: "Competition & enrichment",
    description:
      "Para estudiantes que ya se sienten cómodos con su clase actual de matemáticas y quieren un reto adicional — no es algo que todos necesiten hacer.",
  },
];
