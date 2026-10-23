import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "privacy",
  title: content.fr.legal.privacy.metaTitle,
  description: content.fr.legal.privacy.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="fr" doc="privacy" />;
}
