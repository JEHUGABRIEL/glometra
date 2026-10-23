# Glometra Inc — website

Bilingual corporate website for **Glometra Inc**, an independent physical
commodity trading company incorporated in Delaware and based in Houston, Texas.

Built with Next.js 16 (App Router), React 19, TypeScript and hand-written CSS.
No UI framework, no client-side state library.

## Structure

- `/` — English site (default)
- `/fr` — French site
- `/api/contact` — contact form handler
- `app/(en)` and `app/(fr)` — two root layouts so the `lang` attribute is
  server-rendered per locale
- `lib/content.ts` — all copy, both languages, in one typed object
- `lib/site.ts` — company details and the route map used by the language switch
- `components/` — header, footer, page sections and the contact form

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## Contact form delivery

The form posts to `/api/contact`, which validates the submission (including a
honeypot and a simple per-IP rate limit) and sends the enquiry by email through
Resend. Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `"Glometra website <website@glometra.com>"` |

Without these values the API returns `503` and the form shows the direct email
address instead. Nothing is stored in a database.

## Content to confirm before launch

- Email address: currently `contact@glometra.com` (set in `lib/site.ts`).
- Domain: currently `https://www.glometra.com` (set in `lib/site.ts`).
- Texas business registration number and registered agent are intentionally not
  published; the site states Delaware incorporation and Texas registration only.
- No client testimonials or performance figures are published, by design.

## Photography

Royalty-free photographs from Pexels, stored locally in `public/images` and
optimised at build time by `next/image`.

- `hero-refinery-night.jpg` — Pexels #10407689
- `refinery-aerial.jpg` — Pexels #6767962
- `pumpjack-sunset.jpg` — Pexels #16862261
- `houston-night.jpg` — Pexels #15353653
- `tanker-sunset.jpg` — Pexels #39012051
- `aboubakar-traore.jpg` — founder portrait supplied by Glometra Inc

Photographs are illustrative and do not depict Glometra facilities.

## Brand

The supplied 28×20 px logo was redrawn as a vector (`public/brand-mark.svg`,
`app/icon.svg`) so it stays crisp on screen, keeping the original green
(`#59B78E`) and blue (`#0042BD`). The interface palette follows the brief: white,
navy (`#0A2540`) and dark grey. The original file is kept at
`public/logo-original.png`.
