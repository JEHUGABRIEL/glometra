import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "contact",
  title: content.en.contact.metaTitle,
  description: content.en.contact.metaDescription,
});

export default function Page() {
  return <ContactPage locale="en" />;
}
