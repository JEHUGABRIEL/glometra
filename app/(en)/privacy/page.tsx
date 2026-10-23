import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "privacy",
  title: content.en.legal.privacy.metaTitle,
  description: content.en.legal.privacy.metaDescription,
});

export default function Page() {
  return <LegalDocument locale="en" doc="privacy" />;
}
