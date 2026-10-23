import Image from "next/image";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";

export function MarketsPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const markets = t.markets;

  return (
    <>
      <PageHero
        eyebrow={markets.hero.eyebrow}
        title={markets.hero.title}
        lead={markets.hero.lead}
        image="/images/pumpjack-sunset.jpg"
        imageAlt={t.home.markets.imageAlt}
        priority
      />

      <section className="section">
        <div className="shell feature-split">
          <div className="feature-split__body" data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {markets.eagleFord.eyebrow}
            </p>
            <h2>{markets.eagleFord.title}</h2>
            {markets.eagleFord.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="feature-split__media" data-reveal>
            <Image
              src="/images/refinery-aerial.jpg"
              alt={markets.eagleFord.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="cover"
            />
            <figcaption>
              {locale === "fr"
                ? "Côte du Golfe — infrastructures de raffinage et d'exportation"
                : "Gulf Coast — refining and export infrastructure"}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <SectionHead
            tone="light"
            eyebrow={markets.counterparties.eyebrow}
            title={markets.counterparties.title}
          />
          <div className="counterparty-grid">
            {markets.counterparties.items.map((item, index) => (
              <article className="counterparty-card" key={item.title} data-reveal>
                <span className="counterparty-card__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell international">
          <div className="international__body" data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {markets.international.eyebrow}
            </p>
            <h2>{markets.international.title}</h2>
            {markets.international.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="coverage-table" data-reveal>
            {markets.international.facts.map(([label, value]) => (
              <div className="coverage-table__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--paper section--tight">
        <div className="shell limits" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            {markets.limits.eyebrow}
          </p>
          <h2>{markets.limits.title}</h2>
          <p className="limits__text">{markets.limits.text}</p>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
