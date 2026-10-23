"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { path, routes, site, switchPath, type Locale, type RouteKey } from "@/lib/site";
import { Logo } from "./Logo";
import { IconClose, IconGlobe, IconMenu, IconPin } from "./Icons";

const NAV_ORDER = ["home", "about", "services", "markets", "compliance"] as const;
type NavKey = (typeof NAV_ORDER)[number];

export function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;

  const routeKey =
    (Object.keys(routes) as RouteKey[]).find((key) => {
      const href = routes[key][locale];
      return pathname === href || pathname === `${href}/`;
    }) ?? "home";
  const current: NavKey | undefined = NAV_ORDER.find((key) => key === routeKey);

  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchHref = switchPath(locale, routeKey);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`site-head${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="topbar">
        <div className="shell topbar__inner">
          <span className="topbar__loc">
            <IconPin className="topbar__icon" />
            <span>
              {site.city}, {site.region}, {site.country}
            </span>
          </span>
          <div className="topbar__right">
            <a className="topbar__link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <span className="topbar__sep" aria-hidden="true" />
            <Link
              className="topbar__lang"
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              title={t.ui.switchTo}
            >
              <IconGlobe className="topbar__icon" />
              {otherLocale === "fr" ? "FR" : "EN"}
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="shell navbar__inner">
          <Logo href={path(locale, "home")} />

          <nav className="nav" aria-label={t.ui.menu}>
            {NAV_ORDER.map((key) => (
              <Link
                key={key}
                href={path(locale, key)}
                className={`nav__link${current === key ? " is-active" : ""}`}
                aria-current={current === key ? "page" : undefined}
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link className="btn btn--primary btn--sm navbar__cta" href={path(locale, "contact")}>
              {t.ui.contactUs}
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.ui.close : t.ui.menu}
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="shell mobile-menu__inner">
          <nav className="mobile-nav" aria-label={t.ui.menu}>
            {NAV_ORDER.map((key) => (
              <Link
                key={key}
                href={path(locale, key)}
                className={`mobile-nav__link${current === key ? " is-active" : ""}`}
                aria-current={current === key ? "page" : undefined}
                onClick={() => setOpenPath(null)}
              >
                <span>{t.nav[key]}</span>
              </Link>
            ))}
          </nav>
          <div className="mobile-menu__foot">
            <Link
              className="btn btn--primary mobile-menu__cta"
              href={path(locale, "contact")}
              onClick={() => setOpenPath(null)}
            >
              {t.ui.contactUs}
            </Link>
            <Link
              className="mobile-menu__lang"
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
            >
              <IconGlobe /> {t.ui.switchTo}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
