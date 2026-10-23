import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "disclaimer",
  title: content.fr.legal.disclaimer.metaTitle,
  description: content.fr.legal.disclaimer.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="fr" doc="disclaimer" />;
}
