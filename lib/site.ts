export type Locale = "en" | "fr";

export const routes = {
  home: { en: "/", fr: "/fr" },
  about: { en: "/about", fr: "/fr/a-propos" },
  services: { en: "/services", fr: "/fr/services" },
  markets: { en: "/markets", fr: "/fr/marches" },
  compliance: { en: "/compliance", fr: "/fr/conformite" },
  contact: { en: "/contact", fr: "/fr/contact" },
  privacy: { en: "/privacy", fr: "/fr/confidentialite" },
  terms: { en: "/terms", fr: "/fr/conditions" },
  disclaimer: { en: "/disclaimer", fr: "/fr/avis" },
} as const;

export type RouteKey = keyof typeof routes;

export function path(locale: Locale, key: RouteKey) {
  return routes[key][locale];
}

export function switchPath(locale: Locale, key: RouteKey) {
  const other: Locale = locale === "en" ? "fr" : "en";
  return routes[key][other];
}

export const site = {
  legalName: "GLOMETRA INC",
  name: "Glometra Inc",
  url: "https://www.glometra.com",
  email: "info@glometra.com",
  city: "Houston",
  region: "Texas",
  country: "United States",
  countryCode: "US",
  incorporated: "15 June 2026",
  founder: "Aboubakar Traore",
  updated: { en: "23 October 2026", fr: "23 octobre 2026" },
};
