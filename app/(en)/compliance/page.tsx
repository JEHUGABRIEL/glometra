import type { Metadata } from "next";
import { CompliancePage } from "@/components/pages/CompliancePage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "compliance",
  title: content.en.compliance.metaTitle,
  description: content.en.compliance.metaDescription,
});

export default function Page() {
  return <CompliancePage locale="en" />;
}
