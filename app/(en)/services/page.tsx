import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "services",
  title: content.en.services.metaTitle,
  description: content.en.services.metaDescription,
});

export default function Page() {
  return <ServicesPage locale="en" />;
}
