import type { Metadata } from "next";
import { CompliancePage } from "@/components/pages/CompliancePage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "compliance",
  title: content.fr.compliance.metaTitle,
  description: content.fr.compliance.metaDescription,
});

export default function Page() {
  return <CompliancePage locale="fr" />;
}
