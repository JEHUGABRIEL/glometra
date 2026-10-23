import Link from "next/link";
import { IconArrow } from "./Icons";

export function NotFoundView() {
  return (
    <section className="not-found">
      <div className="shell not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__subtitle" lang="fr">
          Page introuvable
        </p>
        <div className="not-found__text">
          <p>The page you are looking for does not exist or has been moved.</p>
          <p lang="fr">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <div className="not-found__langs">
          <div className="not-found__lang">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              English
            </p>
            <div className="not-found__actions">
              <Link className="btn btn--primary" href="/">
                Back to home
                <IconArrow className="btn__icon" />
              </Link>
              <Link className="link-arrow not-found__link" href="/contact">
                Contact us
                <IconArrow />
              </Link>
            </div>
          </div>

          <div className="not-found__lang" lang="fr">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              Français
            </p>
            <div className="not-found__actions">
              <Link className="btn btn--primary" href="/fr">
                Retour à l&apos;accueil
                <IconArrow className="btn__icon" />
              </Link>
              <Link className="link-arrow not-found__link" href="/fr/contact">
                Nous contacter
                <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
