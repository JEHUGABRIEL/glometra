import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { path, site, type Locale } from "@/lib/site";
import { IconArrow } from "./Icons";

export function CtaBand({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="cta-band">
      <Image
        src="/images/tanker-sunset.jpg"
        alt=""
        fill
        sizes="100vw"
        className="cta-band__img"
      />
      <div className="cta-band__scrim" aria-hidden="true" />
      <div className="shell cta-band__inner" data-reveal>
        <div>
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" aria-hidden="true" />
            {t.home.cta.eyebrow}
          </p>
          <h2 className="cta-band__title">{t.home.cta.title}</h2>
          <p className="cta-band__text">{t.home.cta.text}</p>
        </div>
        <div className="cta-band__actions">
          <Link className="btn btn--light" href={path(locale, "contact")}>
            {t.home.cta.button}
            <IconArrow className="btn__icon" />
          </Link>
          <a className="cta-band__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
