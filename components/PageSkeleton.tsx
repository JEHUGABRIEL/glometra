export function PageSkeleton() {
  return (
    <div className="skeleton" aria-hidden="true">
      <div className="skeleton__hero">
        <div className="shell skeleton__hero-inner">
          <span className="skeleton__bar skeleton__bar--eyebrow skeleton__bar--on-dark" />
          <span className="skeleton__bar skeleton__bar--title skeleton__bar--on-dark" />
          <span className="skeleton__bar skeleton__bar--title-short skeleton__bar--on-dark" />
          <span className="skeleton__bar skeleton__bar--lead skeleton__bar--on-dark" />
        </div>
      </div>

      <div className="shell skeleton__body">
        <span className="skeleton__bar skeleton__bar--eyebrow" />
        <span className="skeleton__bar skeleton__bar--h2" />
        <div className="skeleton__grid">
          <span className="skeleton__card" />
          <span className="skeleton__card" />
          <span className="skeleton__card" />
        </div>
      </div>
    </div>
  );
}
