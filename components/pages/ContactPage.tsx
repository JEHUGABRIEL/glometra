import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPin, IconGlobe } from "@/components/Icons";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        lead={t.contact.hero.lead}
      />

      <section className="section">
        <div className="shell contact-layout">
          <div className="contact-main" data-reveal>
            <ContactForm locale={locale} />
          </div>

          <aside className="contact-aside" data-reveal>
            <div className="contact-card">
              <IconMail className="contact-card__icon" />
              <h2>{t.contact.details.email}</h2>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-card">
              <IconPin className="contact-card__icon" />
              <h2>{t.contact.details.location}</h2>
              <p>
                {site.city}, {site.region}
                <br />
                {site.country}
              </p>
            </div>
            <div className="contact-card">
              <IconGlobe className="contact-card__icon" />
              <h2>{t.contact.details.response}</h2>
              <p>{t.contact.details.responseValue}</p>
            </div>
            <p className="contact-note">{t.contact.details.note}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
