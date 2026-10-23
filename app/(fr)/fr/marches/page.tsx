import type { Metadata } from "next";
import { MarketsPage } from "@/components/pages/MarketsPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "fr",
  route: "markets",
  title: content.fr.markets.metaTitle,
  description: content.fr.markets.metaDescription,
});

export default function Page() {
  return <MarketsPage locale="fr" />;
}
