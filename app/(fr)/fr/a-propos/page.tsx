import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "about",
  title: content.fr.about.metaTitle,
  description: content.fr.about.metaDescription,
});

export default function Page() {
  return <AboutPage locale="fr" />;
}
