# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run docs:dev      # Start dev server
npm run docs:build    # Build for production (to .vitepress/dist)
npm run docs:preview  # Preview production build locally
```

## Architecture

This is Jonathan Chiu's personal website, a **bilingual VitePress site** deployed to both GitHub Pages and Cloudflare Workers.

### Localization

Two locales with English as the default (root):

- **English** — content in `/en/`, config in `.vitepress/config/en.ts`. A `rewrites` rule in `shared.ts` maps `en/:rest*` → `:rest*`, so English pages live at clean URLs (e.g., `/en/projects/scratch/overview.md` → `/projects/scratch/overview`).
- **Chinese (zh)** — content in `/zh/`, config in `.vitepress/config/zh.ts`. URLs retain the `/zh/` prefix.

The locale config (`index.ts`) merges `shared` config with locale-specific configs under the `locales` key. Each locale defines its own `title`, `description`, nav, sidebars, and translated UI strings.

### Content structure

All content is Markdown. Each locale mirrors the same directory structure:

```
en/                                        zh/
├── index.md          (home page)          ├── index.md
├── projects/                              ├── projects/
│   ├── scratch/                           │   ├── scratch/
│   │   └── *.md                           │   │   └── *.md
│   └── truck-simulator/                   │   └── truck-simulator/
│       └── apple-siri-voice-navigation/   │       └── apple-siri-voice-navigation/
│           └── *.md                       │           └── *.md
└── yijing/                                └── yijing/
    ├── liuyao/index.md                        ├── liuyao/index.md
    └── mianxiang/index.md                     └── mianxiang/index.md
```

### Sidebars

Sidebar configs are duplicated per locale (not shared). When adding new content, define the sidebar in both `en.ts` and `zh.ts`. The sidebar is matched by URL prefix (e.g., `/projects/scratch/` or `/zh/projects/scratch/`).

### Theme

Custom theme at `.vitepress/theme/` extends the default VitePress theme with:
- Gradient hero name styling (purple-to-blue)
- Brand colors mapped to indigo
- No custom layout slots (just a thin wrapper)

### Static assets

`/public/` contains SVG logos and project screenshots. Favicon is `le-flat-fill-blue-transparent.svg`.

### Deployment

On push to `main`, `.github/workflows/deploy.yml` runs three jobs:

1. **Build** — Checks out the repo, installs deps (Node 24, `npm ci`), runs `npm run docs:build`, and uploads `.vitepress/dist` as an artifact.
2. **Deploy to GitHub Pages** — Deploys the artifact to GitHub Pages via `actions/deploy-pages`.
3. **Deploy to Cloudflare Workers** — Downloads the artifact, then runs `npx wrangler deploy` to push the static site to Cloudflare Workers (configured in `wrangler.jsonc` with asset serving and a custom domain route). Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets.

Cloudflare Workers is the primary serving path; GitHub Pages is kept as a fallback. The Workers route uses `workers_dev: true` and routes `www.jchiu.dpdns.org/*`.

### Code style

Prettier with `semi: false`, `singleQuote: true`, `trailingComma: none`. EditorConfig enforces 2-space indent, LF line endings, UTF-8.
