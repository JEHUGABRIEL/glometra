import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { path, type Locale } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import {
  IconArrow,
  IconBriefcase,
  IconChart,
  IconDocument,
  IconDrop,
  IconExchange,
  IconFacilitation,
} from "@/components/Icons";

const SERVICE_ICONS = [
  IconDrop,
  IconExchange,
  IconFacilitation,
  IconBriefcase,
  IconDocument,
  IconChart,
];

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const home = t.home;

  return (
    <>
      <Hero locale={locale} slides={home.hero.slides} facts={home.hero.facts} />

      <section className="section">
        <div className="shell intro">
          <div className="intro__head" data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {home.intro.eyebrow}
            </p>
            <h2 className="intro__title">{home.intro.title}</h2>
          </div>
          <div className="intro__body" data-reveal>
            {home.intro.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="link-arrow" href={path(locale, "about")}>
              {home.intro.link}
              <IconArrow />
            </Link>
          </div>
        </div>

        <div className="shell">
          <dl className="stat-grid">
            {home.intro.stats.map((stat) => (
              <div className="stat" key={stat.label} data-reveal>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionHead
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            lead={home.services.lead}
            action={
              <Link className="link-arrow" href={path(locale, "services")}>
                {t.ui.allServices}
                <IconArrow />
              </Link>
            }
          />

          <div className="service-grid">
            {t.services.items.map((service, index) => {
              const ServiceIcon = SERVICE_ICONS[index] ?? IconDrop;
              return (
                <article className="service-card" key={service.title} data-reveal>
                  <span className="service-card__num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-card__icon">
                    <ServiceIcon />
                  </span>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__text">{service.short}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="markets">
        <div className="markets__media">
          <Image
            src="/images/pumpjack-sunset.jpg"
            alt={home.markets.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="cover"
          />
        </div>
        <div className="markets__panel">
          <div className="markets__panel-inner">
            <SectionHead
              tone="light"
              eyebrow={home.markets.eyebrow}
              title={home.markets.title}
              lead={home.markets.lead}
            />
            <ol className="market-list">
              {home.markets.items.map((item, index) => (
                <li className="market-list__item" key={item.title} data-reveal>
                  <span className="market-list__num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link className="link-arrow link-arrow--light" href={path(locale, "markets")}>
              {t.ui.viewMarkets}
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            lead={home.process.lead}
          />
          <ol className="process">
            {home.process.steps.map((step, index) => (
              <li className="process__step" key={step.title} data-reveal>
                <span className="process__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="compliance-band">
        <div className="shell">
          <SectionHead
            tone="light"
            eyebrow={home.compliance.eyebrow}
            title={home.compliance.title}
            lead={home.compliance.lead}
          />
          <div className="compliance-grid">
            {t.compliance.sections.slice(0, 4).map((section) => (
              <article className="compliance-item" key={section.title} data-reveal>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
          <Link className="link-arrow link-arrow--light" href={path(locale, "compliance")}>
            {t.ui.readCompliance}
            <IconArrow />
          </Link>
        </div>
      </section>

      <section className="section section--quote">
        <div className="shell quote">
          <div className="quote__portrait">
            <Image
              src="/images/aboubakar-traore.jpg"
              alt={home.quote.imageAlt}
              width={200}
              height={200}
              sizes="132px"
            />
          </div>
          <blockquote className="quote__body" data-reveal>
            <p className="quote__text">“{home.quote.text}”</p>
            <footer className="quote__author">
              <span className="quote__name">{home.quote.name}</span>
              <span className="quote__role">{home.quote.role}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
