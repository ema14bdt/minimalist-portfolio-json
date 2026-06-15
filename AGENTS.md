# Minimalist Portfolio JSON - Agent Instructions

## Project Overview
Astro-based portfolio/CV site using JSON Resume schema (`cv.json`) as data source. Deploys to Vercel via serverless adapter.

## Commands
```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + build (astro check && astro build)
pnpm preview      # Preview production build
```

## Key Architecture
- **Single page**: `src/pages/index.astro` renders all sections in order
- **Data source**: `cv.json` (root) — follows [jsonresume.org schema](https://jsonresume.org/schema/)
- **Sections**: `src/components/sections/` — each section imports from `@cv` alias
- **Layout**: `src/layouts/Layout.astro` — handles theme, fonts, print styles
- **Utils**: `src/utils/utils.ts` — date formatting helpers

## Path Aliases (tsconfig.json)
```json
"@cv": ["cv.json"],
"@/*": ["src/*"]
```

## Theme System
- Dark/light mode via `data-theme` attribute on `<html>`
- Persisted in `localStorage` + respects system preference
- Inline script in `Layout.astro` initializes immediately to prevent flash

## Print Styles
- `.no-print` hidden when printing
- `.print` visible only when printing
- Global styles in `Layout.astro` handle both

## Editing Content
1. Edit `cv.json` — all content lives here
2. Sections auto-update (import from `@cv`)

## Adding Sections
1. Create `src/components/sections/NewSection.astro`
2. Import in `src/pages/index.astro`
3. Add to `<main>` in desired order

## Deployment
- Configured for Vercel serverless (`@astrojs/vercel`)
- `output: 'server'` in `astro.config.mjs`
- Web Analytics enabled via adapter config

## Gotchas
- `astro check` runs during build — type errors block deployment
- `cv.json` uses tabs for indentation (preserve)
- Language is Spanish (`lang="es"` in Layout)
- No test suite configured