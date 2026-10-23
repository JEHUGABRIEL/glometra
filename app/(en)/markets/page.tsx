import type { Metadata } from "next";
import { MarketsPage } from "@/components/pages/MarketsPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  locale: "en",
  route: "markets",
  title: content.en.markets.metaTitle,
  description: content.en.markets.metaDescription,
});

export default function Page() {
  return <MarketsPage locale="en" />;
}
