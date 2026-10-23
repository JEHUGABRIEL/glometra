import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "disclaimer",
  title: content.en.legal.disclaimer.metaTitle,
  description: content.en.legal.disclaimer.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="en" doc="disclaimer" />;
}
