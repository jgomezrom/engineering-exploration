export const aboutTranslations = {
  en: {
    badge: "About this project",
    heading: "A student project, built in the open",
    p1: "Engineering Exploration is a personal project of mine — built to give honest, no-hype information about what engineers in different fields actually do, day to day.",
    p2: "A lot of career-exploration content leans hard on hype: impressive job titles, big salary numbers, inspirational language that doesn't actually tell you much about the work itself. This site tries to do the opposite — real day-to-day descriptions, honest trade-offs, and a clear flag whenever something's uncertain or worth double-checking instead of presented as settled fact.",
    p3: "I built this because I remember standing in that exact spot back in high school, staring at a long list of engineering majors with no real idea what any of them actually meant day to day. Most of what I found online was either a vague list of job titles or straight-up recruiting copy, so I set out to build the resource I wish I'd had: something that tells it straight about what the work is actually like, and where the honest trade-offs are.",
    p4: "This site was built by Jaime Gomez, a student at MSU — it's not affiliated with MSU, any other university, or any engineering organization. Just one student's attempt to put something clear and useful together. And if something here reads as inaccurate or outdated, that's worth knowing: this is maintained by a student, not a career-counseling professional.",
    p5: "The interest quiz works the same way — a starting point based on how you answer a set of questions, not a verdict on what you should do with your life.",
    p6Before: "For more on where the numbers on this site come from, and what's editorial judgment versus a cited source, see",
    sourcesLink: "Sources & Methodology",
    builtHeading: "How this site is built",
    builtP1:
      "It's a static site — Next.js, React and TypeScript, with every page generated ahead of time. There's no backend and no database, and nothing you do here is sent anywhere. The illustrations, icons and charts are hand-written SVG rather than pulled from a library, which is why they all look like they belong to the same set of drawings.",
    builtP2:
      "Three of the simulations do real work rather than printing the answer to a formula. The beam solves for the shear force, bending moment and deflection along its whole length by working through it step by step; the pendulum solves the actual swing equation, not the small-angle shortcut most textbooks stop at; and the projectile includes air resistance, which has no tidy formula at all. Each one then checks itself against the exact answer wherever an exact answer exists, and prints how far apart the two landed — usually less than a thousandth of a percent.",
    builtP3:
      "Every page works in English and Spanish. Keyboard navigation and screen-reader labels are tested rather than assumed, animations back off if your device asks for less motion, and the maths behind the simulations has its own test suite that anyone can run.",
    codeLinkBefore: "All of it is open source, if you want to see how any piece works:",
    codeLink: "the code is on GitHub",
    exploreCta: "Explore Engineering Fields",
    quizCta: "Take the Interest Quiz",
  },
  es: {
    badge: "Sobre este proyecto",
    heading: "Un proyecto estudiantil, construido a la vista de todos",
    p1: "Engineering Exploration es un proyecto personal mío, pensado para dar información honesta y sin exageraciones sobre lo que realmente hacen, día a día, los ingenieros de distintos campos.",
    p2: "Mucho del contenido de exploración de carreras que existe se apoya fuertemente en la exageración: títulos de trabajo impresionantes, cifras de salario grandes, lenguaje inspiracional que en realidad no te dice mucho sobre cómo es el trabajo. Este sitio intenta hacer lo contrario — descripciones reales del día a día, compensaciones honestas, y una señal clara cada vez que algo es incierto o vale la pena verificar, en lugar de presentarlo como un hecho ya establecido.",
    p3: "Construí esto porque recuerdo estar justo en esa posición en la preparatoria, viendo una lista larga de carreras de ingeniería sin tener idea real de qué significaba ninguna de ellas en el día a día. Casi todo lo que encontré en línea era una lista vaga de títulos de trabajo o pura publicidad de reclutamiento, así que me propuse construir el recurso que hubiera querido tener: algo que diga la verdad sobre cómo es el trabajo y dónde están las compensaciones honestas.",
    p4: "Este sitio fue construido por Jaime Gomez, estudiante en MSU — no está afiliado a MSU, a ninguna otra universidad, ni a ninguna organización de ingeniería. Es solo el intento de un estudiante por armar algo claro y útil. Y si algo aquí se lee como inexacto o desactualizado, vale la pena saberlo: esto lo mantiene un estudiante, no un profesional de orientación vocacional.",
    p5: "El cuestionario de intereses funciona igual — un punto de partida según cómo respondas un conjunto de preguntas, no un veredicto sobre qué deberías hacer con tu vida.",
    p6Before: "Para más detalle sobre de dónde salen los números de este sitio, y qué es juicio editorial frente a una fuente citada, consulta",
    sourcesLink: "Fuentes y Metodología",
    builtHeading: "Cómo está construido este sitio",
    builtP1:
      "Es un sitio estático — Next.js, React y TypeScript, con cada página generada de antemano. No hay servidor ni base de datos, y nada de lo que haces aquí se envía a ningún lado. Las ilustraciones, los iconos y las gráficas son SVG hechos a mano en vez de sacados de una librería, y por eso todos parecen pertenecer al mismo conjunto de dibujos.",
    builtP2:
      "Tres de las simulaciones hacen trabajo de verdad en lugar de imprimir el resultado de una fórmula. La de vigas calcula la fuerza cortante, el momento flector y la deflexión a lo largo de toda la viga resolviéndola paso a paso; la del péndulo resuelve la ecuación real del vaivén, no el atajo de ángulo pequeño donde se detienen la mayoría de los libros; y la de proyectiles incluye la resistencia del aire, que no tiene ninguna fórmula limpia. Cada una se comprueba después contra la respuesta exacta, cuando existe una, e imprime qué tan lejos quedaron la una de la otra — normalmente menos de una milésima de por ciento.",
    builtP3:
      "Cada página funciona en inglés y en español. La navegación por teclado y las etiquetas para lectores de pantalla se prueban en vez de darse por hechas, las animaciones se reducen si tu dispositivo pide menos movimiento, y las matemáticas detrás de las simulaciones tienen su propio conjunto de pruebas que cualquiera puede ejecutar.",
    codeLinkBefore: "Todo es de código abierto, por si quieres ver cómo funciona cualquier parte:",
    codeLink: "el código está en GitHub",
    exploreCta: "Explorar Campos de Ingeniería",
    quizCta: "Tomar el Cuestionario de Intereses",
  },
};
