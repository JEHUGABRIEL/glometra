import Link from "next/link";
import { content } from "@/lib/content";
import { path, type Locale } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { IconArrow } from "@/components/Icons";

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const services = t.services;

  return (
    <>
      <PageHero
        eyebrow={services.hero.eyebrow}
        title={services.hero.title}
        lead={services.hero.lead}
        image="/images/refinery-aerial.jpg"
        imageAlt={
          locale === "fr"
            ? "Vue aérienne d'une raffinerie et de ses réservoirs"
            : "Aerial view of an oil refinery and storage tanks"
        }
        priority
      />

      <section className="section">
        <div className="shell">
          <ol className="service-list">
            {services.items.map((item, index) => (
              <li className="service-row" key={item.title} data-reveal>
                <span className="service-row__num">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-row__main">
                  <h2>{item.title}</h2>
                  <p>{item.long}</p>
                </div>
                <div className="service-row__scope">
                  <p className="service-row__label">
                    {locale === "fr" ? "Périmètre" : "Scope"}
                  </p>
                  <ul>
                    {item.scope.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell approach">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {services.approach.eyebrow}
            </p>
            <h2>{services.approach.title}</h2>
          </div>
          <div className="approach__body" data-reveal>
            <p>{services.approach.text}</p>
            <Link className="link-arrow" href={path(locale, "contact")}>
              {services.approach.link}
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
