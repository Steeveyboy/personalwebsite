# Personal Website TODO

## Content
- [ ] Add new projects (especially any data science / LLM infra work since 2021) — Projects section still only shows Conway's Game of Life and the Pathfinding Visualiser
- [ ] Update resume PDF if stale
- [ ] Refresh book recommendations if opinions have changed (e.g. Elon Musk biography)

## Tech / Maintenance
- [ ] Upgrade React 18 → 19

## Done
- [x] Mobile responsiveness — added `@media (max-width: 768px)` breakpoints across all component CSS
- [x] Committed `my-app/eslint.config.js`
- [x] Migrated CRA → Next.js (`next@14`, `output: 'export'`, static export to `out/`)
- [x] React 17 → 18
- [x] `class=` → `className=` across all JSX files
- [x] Footer email link fixed to `mailto:jonathan.qsteeves@gmail.com`
- [x] Fixed "iterested" → "interested" typo in Conway's description
- [x] Updated About me bio (no longer references being a Carleton student)
- [x] Added SEO meta tags (title, description, Open Graph) via Next.js Metadata API in `layout.js`
- [x] Removed dead CRA files (`App.js`, `App.css`, `index.css`) and stale `build/` output
