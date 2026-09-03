import { fields } from "./fields";
import { fieldsEs } from "./fields.es";
import { fieldStubs } from "./fieldStubs";
import { fieldStubsEs } from "./fieldStubs.es";
import { challenges } from "./challenges";
import { challengesEs } from "./challenges.es";
import { concepts } from "./concepts";
import { conceptsEs } from "./concepts.es";
import { faqItems } from "./faq";
import { faqItemsEs } from "./faq.es";
import { resourceLinks } from "./resourceLinks";
import { resourceLinksEs } from "./translations/resources";

export type SearchItemType = "field" | "challenge" | "concept" | "faq" | "page";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: SearchItemType;
};

export const searchTypeLabels: Record<"en" | "es", Record<SearchItemType, string>> = {
  en: { field: "Field", challenge: "Challenge", concept: "Concept", faq: "FAQ", page: "Page" },
  es: { field: "Campo", challenge: "Desafío", concept: "Concepto", faq: "Preguntas Frecuentes", page: "Página" },
};

// Built fresh per search open rather than cached at module scope, since it
// depends on the active language — cheap enough (well under 100 items).
export function buildSearchIndex(language: "en" | "es"): SearchItem[] {
  const displayFields = language === "es" ? fieldsEs : fields;
  const displayStubs = language === "es" ? fieldStubsEs : fieldStubs;
  const displayChallenges = language === "es" ? challengesEs : challenges;
  const displayConcepts = language === "es" ? conceptsEs : concepts;
  const displayFaq = language === "es" ? faqItemsEs : faqItems;

  const items: SearchItem[] = [];

  for (const f of displayFields) {
    items.push({ title: f.name, description: f.tagline, href: `/engineering/${f.slug}`, type: "field" });
  }
  for (const s of displayStubs) {
    items.push({ title: s.name, description: s.tagline, href: `/engineering/${s.slug}`, type: "field" });
  }
  for (const c of displayChallenges) {
    items.push({ title: c.title, description: c.tagline, href: `/challenges/${c.slug}`, type: "challenge" });
  }
  for (const c of displayConcepts) {
    items.push({
      title: c.name,
      description: c.shortDefinition,
      href: `/concepts?concept=${c.slug}`,
      type: "concept",
    });
  }
  for (const item of displayFaq) {
    items.push({ title: item.question, description: "", href: "/faq", type: "faq" });
  }
  for (const resource of resourceLinks) {
    const localized = language === "es" ? resourceLinksEs[resource.href] : undefined;
    items.push({
      title: localized?.title ?? resource.title,
      description: localized?.description ?? resource.description,
      href: resource.href,
      type: "page",
    });
  }

  return items;
}
