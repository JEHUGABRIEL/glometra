import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "services",
  title: content.fr.services.metaTitle,
  description: content.fr.services.metaDescription,
});

export default function Page() {
  return <ServicesPage locale="fr" />;
}
