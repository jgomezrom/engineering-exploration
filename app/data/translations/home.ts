// Homepage copy in English and Spanish. Only the page shell (hero, the
// three-step cards, section headers/intros) is translated here — the
// content pulled from data files inside this page (resourceLinks card text,
// the "Did You Know?" ticker, the Curiosity Explorer's interest labels)
// stays English for now, since translating those means translating the
// underlying data files themselves, a much bigger job than the homepage
// shell. See LanguageContext.tsx for how the switch works.
export const homeTranslations = {
  en: {
    badge: "For curious minds",
    sideLabelLeft: "ENGINEERING EXPLORATION",
    heroPrefix: "What kind of ",
    heroHighlight: "engineer",
    heroSuffix: " do you want to be?",
    subtitle:
      "Explore what engineers actually do — the real stuff, not just the highlight reel — and find fields worth getting curious about. No pressure to already know what you want to be.",
    exploreCta: "Explore Engineering Fields",
    quizCta: "Take the Interest Quiz",
    fieldsUnit: "FIELDS",
    challengesUnit: "CHALLENGES",
    quizUnit: "5-MIN QUIZ",
    explored: "You've explored",
    of: "of",
    fieldsLower: "fields",
    dayStreak: "day streak",
    step1Title: "Explore Fields",
    step1Body: "Browse {n} engineering fields and see what each one is really like.",
    step1Cta: "Start exploring →",
    step2Title: "Take the Quiz",
    step2Body: "Answer a few questions about what you enjoy, and get fields worth exploring.",
    step2Cta: "Take the quiz →",
    step3Title: "Try a Challenge",
    step3Body: "Test out small, hands-on engineering activities you can do at home.",
    step3Cta: "See challenges →",
    deeperBadge: "Want to go deeper?",
    deeperTitle: "More ways to explore",
    deeperBody:
      "Comparing fields side by side, whether you need to be good at math, how engineering careers differ from what people assume — all of this is already on the site.",
    curiousBadge: "Not sure where to start?",
    curiousTitle: "What are you into?",
    curiousBody:
      "You don't need to already know engineering vocabulary. Pick something you're curious about and see which fields actually connect to it.",
  },
  es: {
    badge: "Para mentes curiosas",
    sideLabelLeft: "EXPLORACIÓN DE INGENIERÍA",
    heroPrefix: "¿Qué tipo de ",
    heroHighlight: "ingeniero",
    heroSuffix: " quieres ser?",
    subtitle:
      "Descubre lo que los ingenieros realmente hacen — lo real, no solo lo más destacado — y encuentra campos que valga la pena explorar. No hay presión por saber ya qué quieres ser.",
    exploreCta: "Explorar Campos de Ingeniería",
    quizCta: "Hacer el Cuestionario de Intereses",
    fieldsUnit: "CAMPOS",
    challengesUnit: "DESAFÍOS",
    quizUnit: "CUESTIONARIO DE 5 MIN",
    explored: "Has explorado",
    of: "de",
    fieldsLower: "campos",
    dayStreak: "días seguidos",
    step1Title: "Explorar Campos",
    step1Body: "Explora {n} campos de la ingeniería y descubre cómo es cada uno en realidad.",
    step1Cta: "Empezar a explorar →",
    step2Title: "Hacer el Cuestionario",
    step2Body: "Responde algunas preguntas sobre lo que te gusta y descubre campos que vale la pena explorar.",
    step2Cta: "Hacer el cuestionario →",
    step3Title: "Prueba un Desafío",
    step3Body: "Prueba pequeñas actividades prácticas de ingeniería que puedes hacer en casa.",
    step3Cta: "Ver desafíos →",
    deeperBadge: "¿Quieres profundizar más?",
    deeperTitle: "Más formas de explorar",
    deeperBody:
      "Comparar campos lado a lado, si necesitas ser bueno en matemáticas, en qué se diferencian las carreras de ingeniería de lo que la gente asume — todo esto ya está en el sitio.",
    curiousBadge: "¿No sabes por dónde empezar?",
    curiousTitle: "¿Qué te interesa?",
    curiousBody:
      "No necesitas ya conocer el vocabulario de la ingeniería. Elige algo que te dé curiosidad y descubre qué campos se conectan realmente con eso.",
  },
};

export type HomeTranslation = typeof homeTranslations.en;
