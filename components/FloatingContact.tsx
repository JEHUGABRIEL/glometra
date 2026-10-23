"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/lib/content";
import { path, type Locale } from "@/lib/site";
import { IconMail } from "./Icons";

export function FloatingContact({ locale }: { locale: Locale }) {
  const t = content[locale];
  const pathname = usePathname();
  const contactPath = path(locale, "contact");

  // No point floating the CTA on the contact page itself.
  if (pathname === contactPath) return null;

  return (
    <Link className="floating-contact" href={contactPath} aria-label={t.ui.contactUs}>
      <IconMail className="floating-contact__icon" />
      <span className="floating-contact__label">{t.ui.contactUs}</span>
    </Link>
  );
}
