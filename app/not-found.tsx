import "./globals.css";
import { Logo } from "@/components/Logo";
import { NotFoundView } from "@/components/NotFoundView";
import { display, sans } from "@/lib/fonts";

export default function NotFound() {
  return (
    <div className={`${display.variable} ${sans.variable} bare-page`}>
      <title>404 — Glometra Inc</title>
      <meta name="robots" content="noindex" />
      <div className="shell bare-page__head">
        <Logo href="/" />
      </div>
      <main id="main">
        <NotFoundView />
      </main>
    </div>
  );
}
