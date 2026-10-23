import type { Metadata } from "next";
import { routes, site, type Locale, type RouteKey } from "./site";

type PageMetaInput = {
  locale: Locale;
  route: RouteKey;
  title: string;
  description: string;
  image?: string;
};

export function pageMeta({ locale, route, title, description, image }: PageMetaInput): Metadata {
  const canonical = routes[route][locale];
  const imageUrl = image ?? "/og-glometra.jpg";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: routes[route].en,
        fr: routes[route].fr,
        "x-default": routes[route].en,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: canonical,
      siteName: site.name,
      title: `${title} — ${site.name}`,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [imageUrl],
    },
  };
}
