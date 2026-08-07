# Maria Helena — Portfolio

A senior frontend developer portfolio built with **Next.js (App Router)**, **React**, and **SCSS Modules**. Implements the monochrome editorial design ("H&M/Zara-style minimalism") exported from Claude Design — Bodoni Moda serif headlines, Space Mono labels, black/white blocked sections.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/                  Next.js App Router entry (layout, page, global styles)
components/           One folder per section (JSX + co-located .module.scss)
data/content.js        Static copy: nav, bio, experience, skills, education, contact
data/projects.js        Placeholder project cards — replace with your real projects
public/resume_maria.pdf Résumé served from the nav "RÉSUMÉ" download button
styles/_variables.scss  Shared colors, fonts, breakpoints and mixins
```

## Editing content

- **Bio, experience, skills, education, contact copy** — edit `data/content.js`.
- **Projects** — edit `data/projects.js`. Each entry is `{ num, name, desc, tech, link }`.
- **Résumé file** — replace `public/resume_maria.pdf` with your own (keep the filename, or update `site.resumeHref` in `data/content.js`).
- **Colors / fonts / spacing** — edit `styles/_variables.scss`.

## Notes

- Headings use **Bodoni Moda** and labels use **Space Mono**, both loaded via `next/font/google` (self-hosted, no runtime request to Google Fonts). Body copy uses the system Helvetica Neue/Arial stack.
- **Animated shape**: the black square in the Bio section loops through `@keyframes shapeMorph` (2s, `ease-in-out`, infinite) — circle → square → diamond, rotating and scaling — at every screen size. It shrinks and repositions on mobile.
- **Mobile nav**: below 768px the link row is replaced by a hamburger button that toggles a full-width dropdown menu (`components/Nav/Nav.jsx`, the only client component in the app — everything else stays a React Server Component). The dropdown closes automatically when a link is clicked.
- Responsive at a single breakpoint (768px), matching the design spec exactly: nav collapses to hamburger, 2-column grids stack to 1, H1/H2 sizes step down, section side padding drops from 56px to 24px.
- Hover states (nav links, résumé button, project cards, contact links) are plain CSS `:hover` — no JS needed for those.
