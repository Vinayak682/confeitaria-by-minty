# CLAUDE.md — Confeitaria by Minty

Project guide for Claude. Read this before making changes.

## What this is
A marketing/portfolio website for **Confeitaria by Minty**, a pastry chef brand.
Single-page React app built with **Vite**.

- **Live site:** https://vinayak682.github.io/confeitaria-by-minty/
- **GitHub:** https://github.com/Vinayak682/confeitaria-by-minty (account: Vinayak682)
- **Local path:** /Users/vinayakbhadani/.gemini/antigravity/scratch/confeitaria-by-minty

## Stack
- React 19 + Vite 8
- `react-router-dom` v7 using **`HashRouter`** (required for GitHub Pages)
- `lucide-react` for icons
- Plain CSS (one `.css` file per component/page). No Tailwind, no CSS framework.

## Routing — IMPORTANT
- Uses `HashRouter`, so URLs look like `/confeitaria-by-minty/#/services`.
- Routes are defined in `src/App.jsx`:
  `/` (Home), `/services`, `/portfolio`, `/recipes`, `/recipes/:id`.
- A catch-all `path="*"` route renders `<Home />` so unknown hashes never blank out.
- **Section anchors:** bare hashes like `#reels` resolve to the path `/reels`.
  `src/components/Layout.jsx` reads the path and scrolls to the matching section
  `id` on the page. Home sections have ids: `about`, `collaborations`, `creations`,
  `partnerships`, `recipes`, `reels`. When adding a new anchor link, give the target
  section a matching `id`.

## Structure
- `src/App.jsx` — router + route definitions
- `src/components/Layout.jsx` — Navbar + Footer wrapper + scroll-to-section logic
- `src/pages/` — Home, Services, Portfolio, RecipeList, RecipeDetail
- `src/components/` — section components (HeroSection, ReelGallery, etc.)
- `src/data/content.js` — site content/data
- `public/` — static assets

## Build & deploy
- Dev: `npm run dev` (base `/`)
- Build: `npm run build` (base `/confeitaria-by-minty/`, set in `vite.config.js`)
- **Deploy is automatic**: pushing to `main` triggers
  `.github/workflows/deploy.yml`, which builds `dist/` and publishes to GitHub Pages.
  Do **not** commit `dist/` — the Action builds it. Push source to `main` to ship.
- After deploy, verify on the live URL with a cache-buster / hard refresh.

## Conventions
- Each component pairs a `.jsx` with a same-named `.css`.
- Keep imports tidy — remove unused icon imports from `lucide-react`.

## History / notes
- Fixed blank page on `#reels` (and any unmatched hash): added catch-all route +
  scroll-to-section in `Layout.jsx`.
- Removed a leftover "Download Full Resume" button from the Portfolio page
  (template cruft, not relevant to a pastry portfolio). Dead `.resume-btn` rule
  still remains in `src/pages/Portfolio.css` — safe to delete.
- GitHub Action uses Node 20 actions that GitHub is deprecating (forced to Node 24
  from June 2026); bump action versions eventually.
