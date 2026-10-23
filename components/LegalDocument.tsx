import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";
import { PageHero } from "./PageHero";

type LegalKey = "privacy" | "terms" | "disclaimer";

export function LegalDocument({ locale, doc }: { locale: Locale; doc: LegalKey }) {
  const t = content[locale];
  const page = t.legal[doc];

  return (
    <>
      <PageHero eyebrow={t.ui.legal} title={page.title} lead={page.lead} />

      <article className="section legal">
        <div className="shell legal__inner">
          <p className="legal__meta">
            {t.ui.updated} — {site.updated[locale]}
          </p>

          {page.sections.map((section) => (
            <section className="legal__section" key={section.heading}>
              <h2>{section.heading}</h2>
              {"paragraphs" in section && section.paragraphs
                ? section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                : null}
              {"bullets" in section && section.bullets ? (
                <ul className="legal__list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
