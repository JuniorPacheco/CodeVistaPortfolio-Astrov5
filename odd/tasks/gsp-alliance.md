# Feature: GSP alliance (CodeVista x GamingSoftwarePereira)

## Objective
Show an "Alianza comercial" between CodeVista and GamingSoftwarePereira (GSP, PC/components store) on the CodeVista home page, and serve the GSP storefront under the subpath `www.codevistax.com/tienda`, without mixing the two business models.

## Why
Oscar (business partner) wants the store reachable from CodeVista but visually and commercially separate: GSP shown as an independent partner/client, with a reciprocal "Alianza con CodeVista" mention on the store.

## Decisions
- Keep the two projects as separate repos and deployments (stacks differ: CodeVista = Astro 5 / React 18 / Tailwind 3; GSP = Astro 7 / React 19 / Tailwind 4 / HeroUI 3 + Express/Prisma/Postgres API on Railway).
- Subpath via Vercel external rewrite in CodeVista's `vercel.json` (`/tienda/:path*` -> GSP deployment). CodeVista is deployed on Vercel (confirmed by user). DNS is not touched.
- GSP builds with `base: '/tienda'`; its root-absolute links must go through a base-aware helper.
- The "redirect" from CodeVista is a plain link to `/tienda` (same domain), not an HTTP redirect.
- Delivery strategy: ask-on-risk. No push, PR or merge without the user.

## Authorized scope
- CodeVista repo (this one), branch `feat/gsp-alliance`.
- GSP frontend: `/home/junior/Documentos/personal/gamingsoftwarepereira/frontend` (authorized by user: "Dale pues"). Not the backend.
- Out of scope: pushing, deploying, DNS, Vercel/Netlify/Railway dashboards.

## Tasks
- [x] T1 CodeVista: GSP logo asset (cropped PNG) + `gsp-logo` dark-mode halo CSS + entries in `CompanySlider.astro` — route: inline (one small edit + asset processing). Evidence: `npm run build` OK; screenshot light/dark OK (G glyph faint but visible in dark). Commit `ce5c43d`. Note: `SliderImages.jsx` ignores `darkSrc`, so dark mode is handled with a CSS filter like `.catleya-logo`.
- [x] T2 CodeVista: `Alliance.astro` section + `alliance` strings in es/en/fr + mount in the 3 pages — route: delegated writer (4+ non-trivial files). Evidence: writer ran `npm run build` OK, `href="/tienda"` and `gsp-logo.png` present in dist for es/en/fr, locale key sets identical; parent spot-check of commit stat (7 files, +70) and component/strings OK. Commit `e1a45e0`. NOT checked visually in a browser.
- [x] T3 GSP frontend (branch `feat/tienda-subpath`, commit `47f038f`, 40 files +348/-95): `base` from `PUBLIC_BASE_PATH` (default `/tienda`), `trailingSlash: 'never'` + `build.format: 'file'`, `withBase()` helper (`src/shared/lib/url.ts`) replacing root-absolute links, netlify redirect targets with prefix, "Alianza con CodeVista" footer badge — route: delegated writer (preparation read across ~80 references); ran in parallel with T2 (different repos, disjoint files). STATUS PARTIAL: built against a local MOCK API (real API unreachable), so counts are mock data. Evidence: RED 525 root-absolute attrs outside /tienda + 78 srcset -> GREEN 0 (parent re-ran the grep on dist: 0 offending, 612 /tienda refs, canonical `https://www.codevistax.com/tienda`); writer: `pnpm build` (astro check) exit 0, sitemap/robots/JSON-LD prefixed, `PUBLIC_BASE_PATH=/` build OK, 24 `withBase` assertions OK.
- [x] T4 (code part) Connection: CodeVista `vercel.json` rewrites (`/tienda`, `/tienda/:path*` -> `https://gamingsoftware-front.netlify.app/...`) + root `public/robots.txt` with `/tienda` disallows and store sitemap — route: inline (2 small files). Evidence: JSON valid, `npm run build` OK, dist/robots.txt checked. Commit `072581a` (CodeVista). Store repo follow-up commit: netlify.toml rewrites so `<site>.netlify.app/tienda/` works standalone (TOML parses; Netlify semantics UNVERIFIED until deployed).
- [ ] T5 Rollout (user-owned: merge/push/deploy) and preview test — PENDING. Store was already deployed at https://gamingsoftware-front.netlify.app/ but from the OLD `main` build (root-absolute links, canonical `http://localhost:4321/`, so `PUBLIC_SITE_URL` is unset in Netlify).

## Acceptance criteria
- T1/T2: `npm run build` passes in CodeVista; logo visible in light and dark mode; alliance block renders in es/en/fr with a working link to `/tienda`.
- T3: `pnpm build` (includes `astro check`) passes; built HTML under `dist/` contains no root-absolute `href`/`src` outside `/tienda` (checked by grep).
- T4: `/tienda`, `/tienda/productos`, an asset under `/tienda/_astro/` and a trailing-slash/redirect case respond correctly through the proxy on a deployed preview.

## Test policy
No runnable test suite exists in either frontend (no RED/GREEN possible). Checks are build + type check + grep-based structural checks on built output. For T3, the grep check on `dist/` before the refactor serves as RED (expected: many offending links) and after as GREEN (expected: 0).

## Known risk (T4, unverified)
Netlify redirects in GSP's `netlify.toml` (`/products/*` -> `/productos/*`) and trailing-slash redirects can drop the `/tienda` prefix or point at the origin domain behind the proxy. Mitigate by aligning `trailingSlash`/build format so links match files, then test on a deployed preview.

## Open items after T3 (not done)
- Store must be deployed first (Netlify, per `DESPLIEGUE-NETLIFY.md`): env `PUBLIC_SITE_URL=https://www.codevistax.com`; Railway `CORS_ORIGINS` + `STORE_URL`/`PAYMENT_SUCCESS_URL`/`PAYMENT_FAILURE_URL` need the `/tienda` prefix.
- Deployed store URL is `https://gamingsoftware-front.netlify.app/` (currently the OLD `main` build: root-absolute links, canonical `http://localhost:4321/`, so `PUBLIC_SITE_URL` is unset there). Merge `feat/tienda-subpath` to the store's `main` and push before merging the CodeVista branch.
- Netlify behind the Vercel proxy is UNVERIFIED (pretty URLs serving `productos.html` with 200, headers on `/admin` and `/checkout`, redirects keeping the prefix).
- Opening the Netlify URL directly at `/tienda/` is served by the added `/tienda` rewrites in `netlify.toml` (commit `4506eee`); Netlify semantics UNVERIFIED until deployed.
- GSP `README.md` still says dev is `http://localhost:4321` (now `/tienda/`); outside T3 surface.
- Sequencing risk: if the Alliance block (T2) reaches production before the store is deployed and the rewrite exists, the "Visitar la tienda" button 404s.

## Progress
- Branch `feat/gsp-alliance` created from `main` (CodeVista). RDD is off globally.
- CodeVista branch `feat/gsp-alliance`: `ce5c43d` (T1 logo), `e1a45e0` (T2 alliance block), `072581a` (T4 vercel.json + robots), `0c7c04d` (robots store sitemap domain), `fe78cf2` (site URL/config/robots to `https://www.codevistax.com`).
- Store frontend branch `feat/tienda-subpath`: `47f038f` (T3 base path), `4506eee` (netlify `/tienda` rewrites), `217e70a` (domain fix in docs/env/footer badge).
- Domain correction: the real domain is `https://www.codevistax.com` (apex redirects to www). `codevista.com.co` was a stale value in the repo config and was replaced everywhere.
- Nothing pushed. Backend repo untouched (it has its own pre-existing uncommitted `docker-compose.yml` change, not ours).
- Engram mirror: `odd/gsp-alliance/tasks` (synced).

## Next step
User-owned rollout (T5): Netlify env `PUBLIC_SITE_URL=https://www.codevistax.com`; merge/push store branch; Railway `CORS_ORIGINS` and `/tienda` payment URLs; then merge the CodeVista branch and test on a Vercel preview.
