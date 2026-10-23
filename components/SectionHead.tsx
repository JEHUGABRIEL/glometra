import type { ReactNode } from "react";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
  action?: ReactNode;
  id?: string;
};

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  action,
  id,
}: SectionHeadProps) {
  return (
    <div
      className={`section-head${tone === "light" ? " section-head--light" : ""}${
        lead ? " section-head--split" : ""
      }`}
      data-reveal
    >
      <p className="eyebrow">
        <span className="eyebrow__line" aria-hidden="true" />
        {eyebrow}
      </p>
      <div className="section-head__grid">
        <h2 className="section-head__title" id={id}>
          {title}
        </h2>
        {lead ? <p className="section-head__lead">{lead}</p> : null}
      </div>
      {action ? <div className="section-head__action">{action}</div> : null}
    </div>
  );
}
