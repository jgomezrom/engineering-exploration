import Link from "next/link";
import { FaqItem } from "./faq";

// Spanish translation of all 8 FAQ items — small and complete, so unlike
// fields.es.ts there's no partial/fallback case to handle here.
export const faqItemsEs: FaqItem[] = [
  {
    question: "¿Necesito ser bueno en matemáticas para ser ingeniero?",
    answer: (
      <>
        Depende mucho del campo — la intensidad de matemáticas varía de campo a campo (revisa el
        cuadro &quot;De un vistazo&quot; de cualquier campo). Importa hasta cierto punto en todos,
        pero no necesitas ya ser excelente en eso. El{" "}
        <Link href="/math" className="text-primary hover:underline">
          mapa completo de cursos
        </Link>{" "}
        desglosa exactamente qué clases importan, incluyendo opciones de AP/IB y dónde encontrar
        ayuda extra si estás atrasado/a.
      </>
    ),
  },
  {
    question: "No sé qué campo es el correcto para mí — ¿por dónde empiezo?",
    answer: (
      <>
        Toma el{" "}
        <Link href="/quiz" className="text-primary hover:underline">
          cuestionario de intereses
        </Link>{" "}
        (unos 5 minutos), o explora{" "}
        <Link href="/curious" className="text-primary hover:underline">
          ¿Qué te interesa?
        </Link>{" "}
        para ver qué campos se conectan con cosas que ya te gustan. Ninguno de los dos te dice en
        qué convertirte — son solo un punto de partida para investigar más a fondo.
      </>
    ),
  },
  {
    question: "¿Puedo cambiar de campo o carrera de ingeniería más adelante?",
    answer: (
      <>
        En la mayoría de las universidades, sí — muchas carreras de ingeniería comparten los
        mismos cursos básicos de matemáticas y física en el primer año o dos, que es parte de por
        qué el{" "}
        <Link href="/math" className="text-primary hover:underline">
          mapa de cursos
        </Link>{" "}
        se enfoca primero en esas bases compartidas. Qué tan fácil sea un cambio específico
        depende completamente del programa de tu universidad, así que vale la pena preguntarle a
        un consejero académico desde el principio en lugar de asumir.
      </>
    ),
  },
  {
    question: "¿Este sitio rastrea o guarda lo que hago?",
    answer: (
      <>
        Sin cuentas, sin anuncios. Dos funciones pequeñas — guardar un campo, y un contador de
        racha de días — guardan un poco de información, pero solo en el almacenamiento local de tu
        propio navegador, nunca enviada a nosotros ni a nadie más. El sitio también usa analíticas
        de tráfico anónimas (visitas totales, qué páginas son populares) que no pueden identificar
        a un visitante individual. Desglose completo en la página de{" "}
        <Link href="/parents-and-teachers" className="text-primary hover:underline">
          Padres y Docentes
        </Link>
        .
      </>
    ),
  },
  {
    question: "¿Cuál es la diferencia entre un ingeniero y un mecánico, electricista, o científico?",
    answer: (
      <>
        Es una de las confusiones más comunes, y la respuesta es un poco diferente para cada
        comparación. Consulta el desglose completo de{" "}
        <Link href="/vs" className="text-primary hover:underline">
          Ingeniería vs. Otras Carreras
        </Link>{" "}
        para ver exactamente cómo el rol de un ingeniero y su trayectoria típica difieren de las
        carreras con las que más se confunde.
      </>
    ),
  },
  {
    question: "¿Por qué este sitio también habla de las desventajas de la ingeniería?",
    answer: (
      <>
        Porque la mayoría del contenido de carreras en línea se apoya en la exageración — títulos
        impresionantes, cifras de salario grandes, sin mención de las partes aburridas o
        frustrantes. La filosofía completa de este sitio es &quot;ingeniería real, sin
        exageración,&quot; así que cada página de campo incluye sus malentendidos reales,
        desafíos, y lo que a la gente genuinamente le disgusta del trabajo, no solo lo mejor.
        Consulta{" "}
        <Link href="/about" className="text-primary hover:underline">
          Acerca de
        </Link>{" "}
        para saber por qué.
      </>
    ),
  },
  {
    question: "¿Las cifras de salario de este sitio son precisas para donde vivo?",
    answer: (
      <>
        No necesariamente. Cada cifra de salario es una mediana nacional de EE. UU. de la Oficina
        de Estadísticas Laborales, claramente fechada y con fuente en la página de cada campo —
        pero el salario real varía mucho según la región, la industria, y la experiencia, y aún
        más si estás fuera de EE. UU. Consulta{" "}
        <Link href="/sources" className="text-primary hover:underline">
          Fuentes y Metodología
        </Link>{" "}
        para ver exactamente cómo se obtuvieron estos números.
      </>
    ),
  },
  {
    question: "¿Tengo que elegir un campo ahora mismo?",
    answer:
      "No. Este sitio existe para explorar, no para decidir — no hay presión para comprometerte con un campo tan pronto. Vuelve cuando quieras a medida que cambien tus intereses.",
  },
];
