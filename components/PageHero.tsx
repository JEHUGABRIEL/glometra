import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  priority = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " page-hero--media" : ""}`}>
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority={priority}
            sizes="100vw"
            className="page-hero__img"
          />
          <div className="page-hero__scrim" aria-hidden="true" />
        </>
      ) : null}
      <div className="shell page-hero__inner">
        <p className="eyebrow eyebrow--light">
          <span className="eyebrow__line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
      </div>
    </section>
  );
}
