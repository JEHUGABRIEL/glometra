import Link from "next/link";

type LogoProps = {
  href: string;
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({ href, tone = "dark", className }: LogoProps) {
  return (
    <Link
      href={href}
      className={`logo logo--${tone}${className ? ` ${className}` : ""}`}
      aria-label="Glometra Inc"
    >
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#59B78E"
          d="M12 35C10.5 20.5 20.6 9.8 35.3 9.6c5.4-.1 10.5 1.3 14.7 3.9-5.7 1.1-11.2 3.1-16.2 6-8 4.5-14.8 10-19.6 16.7-.7 1-1.8.8-2.2-1.2Z"
        />
        <path
          fill="#0042BD"
          d="M12.8 39.4c6.2 7.6 14.2 11.6 23.2 11.1 6-.3 11-2.8 14.5-6.8.7-.8.5-1.8-.7-1.9-3.8 4.1-8.3 5.9-13.3 5.7-6.5-.3-12.3-2.8-17-7.2-2.5 1-4.5-.1-6.7-.9Z"
        />
        <path
          fill="#0042BD"
          d="M37.4 57.6V36.4c0-3.9 2.3-6.2 6.2-6.2h9.6c1 0 1.8.8 1.8 1.9.2 6.1-1.6 12-5.1 17.1-3.7 5.4-8.8 8.8-12.5 8.4Z"
        />
      </svg>
      <span className="logo__type">
        <span className="logo__name">GLOMETRA</span>
        <span className="logo__suffix">Inc</span>
      </span>
    </Link>
  );
}
