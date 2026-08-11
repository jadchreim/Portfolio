# Jad Chreim - Portfolio

A multi-page, professional business-style portfolio built with Next.js
(App Router), React, TypeScript, and Tailwind CSS. Design language follows
ABC Development's site: a top nav with a pill "Get in touch" button, a bold
hero, a four-point "why work with me" grid, a services-style explore grid,
a dark CTA band, and a multi-column footer. Supports light and dark mode.

## Pages

- `/` - Home (hero, highlights, why-work-with-me, explore grid, CTA band)
- `/about` - Background, personal information, languages
- `/experience` - Work experience and education (tabbed)
- `/skills` - Skills grouped by category
- `/contact` - Direct contact details

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Design notes

- Palette: white/near-black canvas, a single blue accent (#2955EC), hairline
  borders instead of heavy shadows, generous section padding - matching the
  clean, minimal register of ABC Development's site.
- Typography: Inter, loaded via `next/font/google`.
- Navigation is a sticky top bar with a mobile slide-down menu (no bottom
  tab bar, no iOS-style chrome).
- Dark mode is toggled with a simple icon button in the header, persisted to
  `localStorage`, and defaults to the visitor's system preference on first
  visit.
- Design tokens (colors, radii, shadows) live in `tailwind.config.ts`.

## Content

All content (work experience, education, skills, languages, and contact
details) lives in `lib/data.ts` - edit that file to update the site.
