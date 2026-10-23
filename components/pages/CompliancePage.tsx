import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { IconShield } from "@/components/Icons";

export function CompliancePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const compliance = t.compliance;

  return (
    <>
      <PageHero
        eyebrow={compliance.hero.eyebrow}
        title={compliance.hero.title}
        lead={compliance.hero.lead}
      />

      <section className="section">
        <div className="shell">
          <div className="compliance-grid compliance-grid--page">
            {compliance.sections.map((section) => (
              <article className="compliance-item compliance-item--card" key={section.title} data-reveal>
                <IconShield className="compliance-item__icon" />
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper section--tight">
        <div className="shell statement" data-reveal>
          <p className="statement__text">“{compliance.statement.text}”</p>
          <p className="statement__caption">{compliance.statement.caption}</p>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
