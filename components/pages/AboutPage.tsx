import Image from "next/image";
import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { IconCheck } from "@/components/Icons";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const about = t.about;

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        lead={about.hero.lead}
        image="/images/houston-night.jpg"
        imageAlt={
          locale === "fr"
            ? "Vue aérienne de Houston, Texas, de nuit"
            : "Aerial view of downtown Houston, Texas, at night"
        }
        priority
      />

      <section className="section">
        <div className="shell split-editorial">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {about.company.eyebrow}
            </p>
            <h2 className="split-editorial__title">{about.company.title}</h2>
          </div>
          <div className="split-editorial__body" data-reveal>
            {about.company.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="inline-facts">
              <li>
                <span>{locale === "fr" ? "Siège" : "Headquarters"}</span>
                {site.city}, {site.region}
              </li>
              <li>
                <span>{locale === "fr" ? "Constitution" : "Incorporated"}</span>
                Delaware, 2026
              </li>
              <li>
                <span>{locale === "fr" ? "Direction" : "Leadership"}</span>
                {site.founder}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionHead eyebrow={about.mission.eyebrow} title={about.mission.title} />
          <div className="mission-grid">
            {about.mission.items.map((item, index) => (
              <article className="mission-card" key={item.label} data-reveal>
                <span className="mission-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell founder">
          <div className="founder__card" data-reveal>
            <div className="founder__portrait">
              <Image
                src="/images/aboubakar-traore.jpg"
                alt={about.founder.imageAlt}
                width={200}
                height={200}
                sizes="88px"
              />
            </div>
            <p className="founder__quote">“{about.founder.quote}”</p>
            <p className="founder__signature">
              {site.founder}
              <span>{locale === "fr" ? "Fondateur et PDG" : "Founder & CEO"}</span>
            </p>
          </div>
          <div className="founder__body" data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {about.founder.eyebrow}
            </p>
            <h2>{about.founder.title}</h2>
            {about.founder.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead eyebrow={about.corporate.eyebrow} title={about.corporate.title} />
          <dl className="data-table">
            {about.corporate.rows.map(([label, value]) => (
              <div className="data-table__row" key={label} data-reveal>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionHead eyebrow={about.commitments.eyebrow} title={about.commitments.title} />
          <div className="commit-grid">
            {about.commitments.items.map((item) => (
              <article className="commit-card" key={item.title} data-reveal>
                <IconCheck className="commit-card__icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
