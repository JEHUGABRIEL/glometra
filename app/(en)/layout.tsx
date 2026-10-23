import type { Metadata, Viewport } from "next";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { content } from "@/lib/content";
import { site } from "@/lib/site";

const title = "Glometra Inc — Independent physical crude oil trading";
const description = content.en.home.metaDescription;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Glometra Inc",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "/",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og-glometra.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-glometra.jpg"],
  },
  icons: {
    icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
  colorScheme: "light",
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}
