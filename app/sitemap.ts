import type { MetadataRoute } from "next";
import { routes, site, type RouteKey } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(routes) as RouteKey[];
  const lastModified = new Date();

  return keys.flatMap((key) =>
    (["en", "fr"] as const).map((locale) => ({
      url: `${site.url}${routes[key][locale]}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : key === "contact" ? 0.8 : 0.6,
      alternates: {
        languages: {
          en: `${site.url}${routes[key].en}`,
          fr: `${site.url}${routes[key].fr}`,
        },
      },
    })),
  );
}
