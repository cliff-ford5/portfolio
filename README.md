# Portfolio

Personal portfolio site — Vite + React + TypeScript, plain CSS (no component library), matching `../crm`'s design system exactly (same color tokens, same hand-drawn-SVG icon convention). No backend — 100% static content, deployed as a static site.

## Sections

- **Hero** — name/tagline, category chips, CTA buttons.
- **About** — bio (placeholder copy, needs personalizing).
- **Projects** — grouped into four modules, filterable: Web, Mobile, Embedded/IoT, Data & Migrations. Real detail for the CRM, attendance app, and admin dashboard (from this session's own work); placeholder scaffolds for the embedded/IoT and Salesforce→Zoho migration entries, since those weren't detailed in conversation — fill in `src/data/projects.ts`.
- **Skills** — grouped tech tags, `src/data/skills.ts`.
- **Contact** — email + social links (placeholders in `src/components/Contact.tsx`, update with real ones).

## What still needs filling in

- `src/data/projects.ts` — the two `placeholder: true` entries (embedded/IoT, the Salesforce → Zoho migration) have bracketed `[...]` placeholder copy, not real details.
- `src/components/About.tsx` — bio paragraph, location, availability.
- `src/components/Contact.tsx` and `src/components/Nav.tsx` — real email/GitHub/LinkedIn links (currently placeholders).
- A real portrait photo (Hero currently shows a placeholder box).
- Project screenshots — deliberately not linked to the real production systems (they hold real client data) — see the project cards' "no public link, for confidentiality" note. Add real screenshots to each card's visual area once you have some, or keep the placeholder if you'd rather not show internal UI.
- A favicon — none set yet.

## Setup

```
npm install
npm run dev
```

## Deploy

```
npm run build
```

Static output in `dist/` — deploy the same way as `../attendance-download`/`../attendance-admin` (e.g. `vercel --prod`).
