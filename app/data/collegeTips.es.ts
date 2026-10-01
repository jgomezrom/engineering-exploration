import { CollegeTip } from "./types";

// Spanish translation of collegeTips.ts. `slug`, `theme`, `confidence`, and
// `sourceUrl` stay identical to the English entries — they're keys and links,
// not display text. Keep each claim exactly as strong as its source.
export const collegeTipsEs: CollegeTip[] = [
  {
    slug: "active-problem-solving-vs-passive-review",
    text: "Enfócate en resolver problemas activamente y en discusiones entre compañeros, en lugar de releer pasivamente las diapositivas de clase. En un estudio aleatorizado de 2019 con cursos introductorios de física universitaria, los estudiantes a quienes se les enseñó con métodos activos aprendieron más que los que tuvieron clases magistrales con profesores muy bien evaluados — pero sintieron que habían aprendido menos, porque interpretaron el esfuerzo mental adicional como señal de que no estaban entendiendo. Sentir que te cuesta mientras resuelves problemas no significa que no esté funcionando.",
    theme: "study-strategies",
    confidence: "research-backed",
    dependsOn:
      "La disposición del estudiante a aceptar la incomodidad de resolver problemas de práctica difíciles desde cero, en lugar de tomar el camino \"fácil\" de solo ver a un profesor resolverlos en el pizarrón.",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6765278/",
  },
  {
    slug: "secure-an-internship-before-graduation",
    text: "Dale prioridad a conseguir al menos una pasantía o prácticas profesionales en la industria (o un programa co-op) antes de graduarte. La investigación en educación cuenta las pasantías entre las \"prácticas de alto impacto\" asociadas con mayor participación y permanencia de los estudiantes, y en un estudio de 2018, los pasantes de una empresa de ingeniería pudieron nombrar habilidades específicas que aprendieron en el trabajo.",
    theme: "internships",
    confidence: "research-backed",
    dependsOn:
      "La meta profesional final del estudiante. Si un estudiante tiene la intención firme de hacer un doctorado y dedicarse a la academia, participar en investigación de laboratorio durante la licenciatura generalmente tendrá prioridad sobre las pasantías en la industria.",
    sourceUrl:
      "https://par.nsf.gov/biblio/10076373-exploring-how-engineering-internships-undergraduate-research-experiences-inform-influence-college-students-career-decisions-future-plans",
  },
  {
    slug: "front-load-hard-prerequisite-chains",
    text: "Toma pronto las cadenas largas de prerrequisitos, y planea para tu segundo o tercer año las materias que tienen fama de ser más difíciles.",
    theme: "course-planning",
    confidence: "personal experience",
    dependsOn:
      "El mapa curricular específico de tu universidad y la disponibilidad de clases. Esta estrategia solo funciona si el departamento ofrece esas materias clave en los semestres en que las necesitas, y requiere una asesoría académica cuidadosa para no sobrecargar un solo semestre.",
  },
  {
    slug: "join-a-research-lab-sophomore-year",
    text: "Ofrécete como voluntario en el laboratorio de investigación de un profesor a más tardar en tu segundo año, para ganar habilidades técnicas prácticas y experiencia con equipo que las materias básicas normales no te van a enseñar.",
    theme: "research",
    confidence: "varies by situation",
    dependsOn:
      "La disponibilidad del profesorado, el financiamiento del departamento y el tipo de institución. Es muy factible en universidades grandes de investigación (las llamadas universidades R1, según la clasificación de EE. UU.) pero puede ser mucho más difícil de conseguir en universidades más pequeñas enfocadas en la enseñanza, con poco espacio de laboratorio para posgrado.",
  },
  {
    slug: "input-focused-study-goals",
    text: 'Ponte metas de estudio "enfocadas en el proceso" (por ejemplo, "voy a hacer problemas de práctica concentrado durante dos horas") en lugar de metas "enfocadas en el resultado" (por ejemplo, "hoy voy a memorizar todo este capítulo").',
    theme: "study-strategies",
    confidence: "varies by situation",
    dependsOn:
      "La autodisciplina básica del estudiante. Las metas enfocadas en el proceso solo funcionan si el estudiante se hace responsable de trabajar de verdad, concentrado y sin distracciones, durante esos bloques de tiempo, en lugar de solo dejar correr el reloj.",
    sourceUrl: "https://www.youtube.com/watch?v=5JH130NIR8k",
  },
  {
    slug: "schedule-regular-exercise",
    text: "Pon el ejercicio físico en tu calendario semanal como tiempo protegido, no como algo que harás cuando termines el trabajo — con una carga académica pesada, el trabajo casi nunca se termina. Una revisión sistemática de 2022, con 18 estudios que abarcaron a 11,500 estudiantes de medicina en 13 países, encontró que los estudiantes más activos físicamente tenían menos agotamiento (burnout) y mejor calidad de vida, y que más actividad tendía a ir de la mano con diferencias mayores. Es una asociación, no una prueba de que el ejercicio prevenga el burnout.",
    theme: "workload-and-burnout",
    confidence: "research-backed",
    dependsOn:
      "Tu horario y cómo lo administras. El ejercicio solo ayuda si se acomoda alrededor de tus fechas de entrega importantes, en lugar de quitarte tiempo de estudio que no te puedes permitir perder — y la investigación detrás de este consejo viene de estudiantes de medicina, no específicamente de estudiantes de ingeniería.",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826463/",
  },
];
