"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { path, type Locale } from "@/lib/site";
import { IconArrow } from "./Icons";

type HeroSlide = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
};

type HeroProps = {
  locale: Locale;
  slides: HeroSlide[];
  facts: { label: string; value: string }[];
};

const INTERVAL = 7000;

export function Hero({ locale, slides, facts }: HeroProps) {
  const t = content[locale];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % count);
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, count, index]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label={t.ui.home}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero__media">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.image}
            className={`hero__frame${slideIndex === index ? " is-active" : ""}`}
            aria-hidden={slideIndex !== index}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className="hero__img"
            />
          </div>
        ))}
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="shell hero__inner">
        <div className="hero__slides">
          {slides.map((slide, slideIndex) => {
            const Title = slideIndex === index ? "h1" : "div";
            return (
              <div
                key={slide.title}
                className={`hero__slide${slideIndex === index ? " is-active" : ""}`}
                aria-hidden={slideIndex !== index}
              >
                <p className="eyebrow eyebrow--light">
                  <span className="eyebrow__line" aria-hidden="true" />
                  {slide.eyebrow}
                </p>
                <Title className="hero__title">{slide.title}</Title>
                <p className="hero__lead">{slide.lead}</p>
              </div>
            );
          })}
        </div>

        <div className="hero__actions">
          <Link className="btn btn--light" href={path(locale, "contact")}>
            {t.ui.contactUs}
            <IconArrow className="btn__icon" />
          </Link>
          <Link className="btn btn--ghost-light" href={path(locale, "services")}>
            {t.ui.ourServices}
          </Link>
        </div>

        <p className="hero__count" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="hero__count-total"> / {String(count).padStart(2, "0")}</span>
        </p>
      </div>

      <div className="shell">
        <dl className="hero__facts">
          {facts.map((fact) => (
            <div className="hero__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
