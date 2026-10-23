import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "terms",
  title: content.en.legal.terms.metaTitle,
  description: content.en.legal.terms.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="en" doc="terms" />;
}
