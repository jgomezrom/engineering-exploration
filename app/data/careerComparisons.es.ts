import { CareerComparison } from "./types";

// Spanish translation of all 6 comparisons — small and complete, so unlike
// fields.es.ts there's no partial/fallback case to handle here.
export const careerComparisonsEs: CareerComparison[] = [
  {
    slug: "mechanical-engineer-vs-mechanic",
    title: "Ingeniero Mecánico vs. Mecánico",
    engineerRole: {
      title: "Ingeniero Mecánico",
      description:
        "Diseña y mejora cómo funcionan las máquinas y los sistemas mecánicos — descubriendo cómo debería construirse algo, de qué debería estar hecho, y por qué se comporta como lo hace.",
      typicalPath: "Una carrera de ingeniería de 4 años, típicamente seguida de experiencia laboral.",
    },
    otherRole: {
      title: "Mecánico",
      description:
        "Repara, mantiene, y da servicio a máquinas existentes, como vehículos o equipo industrial, usando procedimientos de diagnóstico y técnicas de reparación establecidas.",
      typicalPath: "Escuela vocacional o técnica, y a menudo un aprendizaje práctico — no una carrera de 4 años.",
    },
    keyDifference:
      "Un ingeniero diseña la máquina; un mecánico mantiene una existente funcionando. Ambos son prácticos de formas diferentes, pero son trabajos distintos con caminos de formación distintos, y uno no lleva directamente al otro.",
    relatedField: "mechanical-engineering",
  },
  {
    slug: "electrical-engineer-vs-electrician",
    title: "Ingeniero Eléctrico vs. Electricista",
    engineerRole: {
      title: "Ingeniero Eléctrico",
      description:
        "Diseña sistemas eléctricos y electrónicos — circuitos, distribución de energía, dispositivos — y descubre cómo deberían funcionar antes de que se construya nada.",
      typicalPath: "Una carrera de ingeniería de 4 años.",
    },
    otherRole: {
      title: "Electricista",
      description:
        "Instala, inspecciona, y repara el cableado eléctrico en edificios, siguiendo códigos de seguridad estrictos, para que los sistemas que diseñan los ingenieros realmente se instalen de forma segura.",
      typicalPath: "Escuela técnica y un aprendizaje con licencia — un camino separado y regulado, distinto de una carrera de ingeniería.",
    },
    keyDifference:
      "Un ingeniero diseña el sistema en papel (o en software); un electricista es el profesional con licencia que lo instala y cablea de forma segura en el mundo real.",
    relatedField: "electrical-engineering",
  },
  {
    slug: "biomedical-engineer-vs-doctor",
    title: "Ingeniero Biomédico vs. Doctor",
    engineerRole: {
      title: "Ingeniero Biomédico",
      description:
        "Diseña y prueba los dispositivos médicos, equipo, y tecnología que usan los doctores y pacientes — la mayor parte del trabajo ocurre en un laboratorio, en investigación y desarrollo, o en manufactura, no en una clínica.",
      typicalPath: "Una carrera de ingeniería de 4 años, a veces seguida de estudios de posgrado para puestos enfocados en investigación.",
    },
    otherRole: {
      title: "Doctor",
      description:
        "Diagnostica y trata pacientes directamente, usando formación médica, criterio clínico, y — a menudo — los mismos dispositivos que los ingenieros biomédicos ayudaron a diseñar.",
      typicalPath:
        "Una licenciatura, luego la escuela de medicina, luego una residencia de varios años — un camino más largo y estructuralmente distinto al de una carrera de ingeniería, a menudo 11 años o más en total antes de ejercer de forma independiente.",
    },
    keyDifference:
      "Un ingeniero biomédico construye las herramientas en las que se apoya la medicina; un doctor usa esas herramientas, y su propia formación clínica, para tratar personas directamente. Muy pocos ingenieros biomédicos ven pacientes como parte de su trabajo del día a día.",
    relatedField: "biomedical-engineering",
  },
  {
    slug: "software-engineer-vs-programmer",
    title: "Ingeniero de Software vs. Programador",
    engineerRole: {
      title: "Ingeniero de Software",
      description:
        "Diseña cómo encaja un sistema de software — su arquitectura, cómo interactúan sus componentes, cómo se prueba — además de escribir código. El énfasis está en el proceso de ingeniería más amplio, no solo en escribir sintaxis.",
      typicalPath: "Una carrera de 4 años en ingeniería de software, ciencias de la computación, o un campo relacionado, aunque también existen caminos autodidactas.",
    },
    otherRole: {
      title: "Programador / Codificador",
      description:
        "A menudo se usa para referirse a alguien enfocado más estrechamente en escribir e implementar código, sin necesariamente ser dueño del diseño más amplio del sistema.",
      typicalPath: "No hay un camino estándar único — va desde carreras formales hasta bootcamps y caminos autodidactas.",
    },
    keyDifference:
      "Esta es la comparación más difusa de esta página — las empresas usan 'ingeniero de software,' 'programador,' 'desarrollador,' y 'codificador' de forma inconsistente, y los títulos a menudo se superponen completamente en la práctica. Donde la gente sí traza una línea, usualmente se trata del alcance: diseño de sistemas y proceso frente a solo escribir código.",
    relatedField: "software-engineering",
  },
  {
    slug: "civil-engineer-vs-architect",
    title: "Ingeniero Civil/Estructural vs. Arquitecto",
    engineerRole: {
      title: "Ingeniero Civil / Estructural",
      description:
        "Se asegura de que un edificio o estructura realmente pueda mantenerse en pie de forma segura — calculando cargas, eligiendo sistemas estructurales, y diseñando dentro de códigos y márgenes de seguridad.",
      typicalPath: "Una carrera de ingeniería de 4 años, y en muchos países, un camino de varios años hacia una licencia de ingeniero profesional (PE).",
    },
    otherRole: {
      title: "Arquitecto",
      description:
        "Diseña cómo se ve, se siente, y funciona un edificio para las personas que lo usan — la distribución, la estética, y la experiencia humana general del espacio.",
      typicalPath: "Una carrera profesional de arquitectura (a menudo 5 años) y, en muchos países, un proceso de licencia separado y específico para arquitectura.",
    },
    keyDifference:
      "Un arquitecto diseña la forma del edificio y cómo la experimentará la gente; un ingeniero civil o estructural se asegura de que esa forma pueda mantenerse en pie físicamente. En proyectos reales, trabajan de cerca juntos — ningún rol reemplaza al otro.",
    relatedField: "civil-engineering",
  },
  {
    slug: "engineer-vs-scientist",
    title: "Ingeniero vs. Científico",
    engineerRole: {
      title: "Ingeniero",
      description:
        "Aplica el entendimiento científico existente para diseñar y construir una solución práctica a un problema específico — un dispositivo, una estructura, un sistema que necesita realmente funcionar en el mundo real.",
      typicalPath: "Una carrera de ingeniería de 4 años, dependiendo del campo.",
    },
    otherRole: {
      title: "Científico",
      description:
        "Se enfoca en descubrir y entender cómo funciona el mundo — realizando experimentos, probando teorías, y construyendo conocimiento nuevo, sin necesariamente construir un producto terminado específico.",
      typicalPath: "Una carrera de ciencias, a menudo seguida de estudios de posgrado (una maestría o doctorado) para puestos enfocados en investigación.",
    },
    keyDifference:
      "La página de ingeniería de materiales de este sitio traza esta línea directamente: la química 'se enfoca en las reacciones y la composición de las sustancias,' mientras que la ingeniería de materiales 'se enfoca más en cómo la estructura de un material afecta su desempeño en el mundo real.' Ese patrón se mantiene en general — un científico descubre qué es verdad; un ingeniero descubre cómo construir algo útil con eso. En la práctica, muchas personas hacen ambas cosas.",
    relatedField: "materials-engineering",
  },
];
