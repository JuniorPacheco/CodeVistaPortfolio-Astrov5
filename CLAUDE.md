# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

CodeVista agency portfolio site (https://www.codevistax.com). Astro 5 static site with React islands, Tailwind 3, GSAP. Three locales: `es` (default, no URL prefix), `en`, `fr`.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the build

No test runner, linter or type-check tooling (`@astrojs/check`) is installed. The README is the unmodified Astro starter template.

## Architecture

**One-page site, three copies of the page.** `src/pages/index.astro` (es), `src/pages/en/index.astro`, `src/pages/fr/index.astro` are near-identical: same component stack, different `lang` passed to `Layout`. Adding, removing or reordering a section means editing all three files.

**i18n is hand-rolled, not a library.**
- Strings live in `src/locales/{es,en,fr}.json`, which must keep identical key shapes (`UIStrings` types off the whole `ui` map).
- `src/i18n/ui.ts` assembles them; `src/i18n/utils.ts` exposes `useTranslations(lang)` (falls back to `es`), `getLangFromUrl`, `getLocalizedPath`.
- `.astro` components read `useTranslations(Astro.currentLocale).<section>` themselves. Pages do not pass strings down. The exception is the React `Header.jsx`, which gets `lang` as a prop and imports `ui` directly.
- Routing/locale config is in `astro.config.mjs` (`prefixDefaultLocale: false`). Keep `LANGUAGES` in `src/constants/config.ts` in sync with it; the two are not linked.

**Locale JSON is paired with hardcoded data by array index.** Examples:
- `Works.astro` zips `t.projects` (from the JSON) with its local `projectAssets` array (image, link, categories) by position. Adding a project means appending to both, in the same slot, in all three locale files. Category/filter keys (`"Diseño web"`, `"Móvil"`, `"API"`, `"Todos"`) are Spanish literals used as identifiers, not translated.
- `Pricing.astro` zips `t.plans` with a hardcoded `prices` array.

**Islands.** Most components are static `.astro`. Only `Header.jsx` (nav, theme toggle, language switcher), `Portfolio.jsx`, `SliderImages.jsx` and `ElectricBorder.jsx` are React, hydrated with `client:load`.

**Theming.** Tailwind `darkMode: "class"`. An inline script in `Layout.astro` sets the `dark` class from `localStorage.theme` before paint. `Header.jsx` toggles it and persists it. Custom breakpoint `mmd` = 960px. Brand colors `primary`/`secondary` are defined in `tailwind.config.mjs`, and also duplicated as raw `rgb(...)` in `Layout.astro` CSS and `src/constants/config.ts`.

**Animation system is attribute-driven.** `Layout.astro` boots `src/scripts/{animations,spotlight,cursor}.ts` on `DOMContentLoaded` and `astro:page-load`. Components opt in with `data-reveal` (`left|right|scale`), `data-reveal-stagger`, `data-split-text`, `data-spotlight`. Reveal uses GSAP ScrollTrigger and adds a `.revealed` class. The CSS for these states is in the `is:global` style block in `Layout.astro`. `prefers-reduced-motion` is respected there and in the script.

**Shared constants.** Contact details and social links (including inline SVG paths) are in `src/constants/contact.ts`. Site metadata is in `src/constants/config.ts`. `SchemaOrg.astro` emits JSON-LD in `<head>`. The pricing WhatsApp button builds its link in an inline `define:vars` script in `Pricing.astro`, using a number hardcoded there.

**Assets.** `public/` holds served-as-is images (`portfolio/`, `company-logos/`, `team/`, favicons, `og-image` path referenced by `Layout`). `src/assets/` holds the few images processed through `astro:assets` (e.g. the hero image).

**Partner store under `/tienda`.** `vercel.json` rewrites `/tienda` and `/tienda/*` to the GamingSoftwarePereira storefront (a separate repo, Astro 7, deployed on Netlify). `Alliance.astro` and the slider logo link to it. `/tienda` is not an Astro route, so it 404s under `astro dev`. The store builds with `base: '/tienda'`, and `public/robots.txt` carries its disallows and sitemap because crawlers only read the root file. Feature tracking is in `odd/tasks/gsp-alliance.md`.

## Gotchas

- `Layout.astro` hardcodes `<html lang="es">`; its `lang` prop only selects translations (skip link), so en/fr pages currently ship `lang="es"` on the root element.
- `Layout.astro` references files that are not in `public/`: `/og-image.png`, `/apple-touch-icon.png`, `/favicon-32x32.png`, `/favicon-16x16.png`, `/site.webmanifest`.
