import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "terms",
  title: content.fr.legal.terms.metaTitle,
  description: content.fr.legal.terms.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="fr" doc="terms" />;
}
