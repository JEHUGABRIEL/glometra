import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "contact",
  title: content.fr.contact.metaTitle,
  description: content.fr.contact.metaDescription,
});

export default function Page() {
  return <ContactPage locale="fr" />;
}
