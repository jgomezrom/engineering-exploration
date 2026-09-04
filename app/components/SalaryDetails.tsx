"use client";

import { SalaryData } from "../data/types";
import { useLanguage } from "../context/LanguageContext";

const SALARY_FACTORS = {
  en: [
    "Location — pay for the same job title can differ a lot by country, state, or even city, often tied to local cost of living.",
    "Years of experience — entry-level pay is usually well below the median, and typically rises over a career.",
    "Specialization — some sub-areas within a field pay differently (aerospace vs. general manufacturing, or power systems vs. consumer electronics, for example).",
    "Industry and company — a large company, a startup, and a government job can pay very differently for similar work.",
    "Education and licensure — an advanced degree or professional license can affect both which roles you're eligible for and what they pay.",
    "Economic conditions — hiring markets shift over time, so a number that was accurate a few years ago might not be now.",
  ],
  es: [
    "Ubicación — el sueldo para el mismo puesto puede variar mucho según el país, el estado o incluso la ciudad, a menudo ligado al costo de vida local.",
    "Años de experiencia — el sueldo de nivel inicial suele estar bien por debajo de la mediana, y normalmente sube a lo largo de la carrera.",
    "Especialización — algunas subáreas dentro de un campo pagan diferente (aeroespacial frente a manufactura general, o sistemas de energía frente a electrónica de consumo, por ejemplo).",
    "Industria y empresa — una empresa grande, una startup y un puesto de gobierno pueden pagar muy diferente por un trabajo similar.",
    "Educación y licencias — un posgrado o una licencia profesional puede afectar tanto a qué puestos calificas como cuánto pagan.",
    "Condiciones económicas — el mercado laboral cambia con el tiempo, así que una cifra que era exacta hace unos años podría ya no serlo.",
  ],
};

const LABELS = {
  en: {
    perYear: "/ year, median",
    lastVerified: "Last verified:",
    heading: "What actually affects your salary?",
    intro:
      "The number above is a national median — the middle point across everyone in the field, not a typical starting salary. What you'd actually earn depends on things this page can't predict for you:",
    closing:
      "None of this makes the number above wrong — it's a real, sourced figure. It just means a single number can't tell you what you personally would earn.",
  },
  es: {
    perYear: "/ año, mediana",
    lastVerified: "Verificado por última vez:",
    heading: "¿Qué afecta realmente tu salario?",
    intro:
      "El número de arriba es una mediana nacional — el punto medio entre todos los que trabajan en el campo, no un salario inicial típico. Lo que realmente ganarías depende de cosas que esta página no puede predecir por ti:",
    closing:
      "Nada de esto hace que el número de arriba esté mal — es una cifra real y con fuente. Solo significa que un solo número no puede decirte cuánto ganarías tú personalmente.",
  },
};

export default function SalaryDetails({ salary }: { salary: SalaryData }) {
  const { language } = useLanguage();
  const t = LABELS[language];
  const factors = SALARY_FACTORS[language];

  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-neutral-900 dark:text-white">
          {salary.medianAnnual}
        </span>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">{t.perYear}</span>
      </div>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {salary.region} · {salary.period} —{" "}
        <a
          href={salary.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {salary.sourceName}
        </a>
      </p>
      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        {t.lastVerified} {salary.verifiedDate}
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {salary.note}
      </p>

      <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.heading}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.intro}
        </p>
        <ul className="mt-3 max-w-2xl space-y-2">
          {factors.map((factor) => (
            <li key={factor} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.closing}
        </p>
      </div>
    </div>
  );
}
