import type { ReactNode } from "react";
import { content } from "@/lib/content";
import { display, sans } from "@/lib/fonts";
import { site, type Locale } from "@/lib/site";
import { FloatingContact } from "./FloatingContact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { JsonLd } from "./JsonLd";
import { QueryProvider } from "./QueryProvider";
import { Reveal } from "./Reveal";

const revealScript = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(!('IntersectionObserver' in window))return;document.documentElement.classList.add('reveal-ready');}catch(e){}})();`;

function businessData(locale: Locale) {
  const t = content[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    description: t.home.metaDescription,
    foundingDate: "2026-06-15",
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: locale === "fr" ? "Fondateur et PDG" : "Founder & Chief Executive Officer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    areaServed: [
      { "@type": "Place", name: "Eagle Ford, Texas" },
      { "@type": "Place", name: "South Texas" },
      { "@type": "Place", name: "United States Gulf Coast" },
    ],
    knowsAbout: [
      "Physical crude oil trading",
      "Commodity supply chains",
      "Critical minerals",
      "Trade documentation",
      "AML/KYC compliance",
    ],
  };
}

export function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const t = content[locale];

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          {t.ui.skip}
        </a>
        <Header locale={locale} />
        <main id="main">
          <QueryProvider>{children}</QueryProvider>
        </main>
        <Footer locale={locale} />
        <FloatingContact locale={locale} />
        <Reveal />
        <JsonLd data={businessData(locale)} />
      </body>
    </html>
  );
}
