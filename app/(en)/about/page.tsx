import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "about",
  title: content.en.about.metaTitle,
  description: content.en.about.metaDescription,
});

export default function Page() {
  return <AboutPage locale="en" />;
}
