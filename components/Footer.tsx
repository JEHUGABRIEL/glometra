import Link from "next/link";
import { content } from "@/lib/content";
import { path, site, type Locale } from "@/lib/site";
import { Logo } from "./Logo";
import { IconMail, IconPin } from "./Icons";

const COMPANY = ["about", "markets", "compliance", "contact"] as const;
type LegalKey = "privacy" | "terms" | "disclaimer";
const LEGAL: LegalKey[] = ["privacy", "terms", "disclaimer"];

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo href={path(locale, "home")} tone="light" />
            <p className="footer__blurb">{t.footer.blurb}</p>
          </div>

          <div className="footer__col">
            <h2 className="footer__title">{t.footer.company}</h2>
            <ul className="footer__list">
              {COMPANY.map((key) => (
                <li key={key}>
                  <Link href={path(locale, key)}>{t.nav[key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__title">{t.footer.services}</h2>
            <ul className="footer__list">
              {t.services.items.map((item) => (
                <li key={item.title}>
                  <Link href={path(locale, "services")}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h2 className="footer__title">{t.footer.contact}</h2>
            <ul className="footer__list footer__list--plain">
              <li>
                <IconPin />
                <span>
                  {site.city}, {site.region}
                  <br />
                  {site.country}
                </span>
              </li>
              <li>
                <IconMail />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <p className="footer__note">{t.footer.noOffice}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            © {year} {site.legalName}. {t.ui.copyright}
            <span className="footer__dot" aria-hidden="true" />
            {site.city}, {site.region}, {site.country}
          </p>
          <ul className="footer__legal-links">
            {LEGAL.map((key) => (
              <li key={key}>
                <Link href={path(locale, key)}>{t.legal[key].title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
