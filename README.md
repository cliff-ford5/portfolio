# Portfolio

Personal portfolio site — Vite + React + TypeScript, no component library. Structurally matches `../crm`'s actual app-shell UI (collapsible left sidebar rail, grouped nav, topbar), not just its color palette — same `.shell`/`.rail`/`.topbar` CSS classes, ported deliberately, not reinterpreted. No backend — 100% static content.

## Structure

App-shell layout (`src/App.tsx`'s `Shell`), same shape as `crm`'s: a collapsible `Sidebar` (`src/components/Sidebar.tsx`, mirrors `crm`'s `Rail.tsx`) on the left, a `Topbar` at the top of the content column, and routed screens in between via `react-router-dom`.

Sidebar nav:
- **About Me** (`/`) — landing page: hero intro, bio, quick links into each module.
- **Project Modules** (grouped, matching `crm`'s own nav-grouping pattern): **Web** (`/web`), **Mobile** (`/mobile`), **Embedded / IoT** (`/embedded`), **Data & Migrations** (`/data`) — all four routes render the same `ModuleScreen` component, parametrized by category, not four near-identical copies.
- **Skills** (`/skills`)
- **Contact** (`/contact`)

## What still needs filling in

- `src/data/projects.ts` — the two `placeholder: true` entries (embedded/IoT, the Salesforce → Zoho migration) have bracketed `[...]` placeholder copy, not real details.
- `src/screens/AboutScreen.tsx` — bio paragraph, location, availability.
- `src/screens/ContactScreen.tsx` and `src/components/Sidebar.tsx` — real email/GitHub/LinkedIn links and your actual name (currently "Your Name" / placeholders).
- A real portrait photo (About screen currently shows a placeholder box).
- Project screenshots — deliberately not linked to the real production systems (they hold real client data) — see each project card's "no public link, for confidentiality" note.
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

Static output in `dist/`, deployed the same way as `../attendance-admin` (`vercel --prod`) — `vercel.json`'s SPA-fallback rewrite is required since this now uses client-side routing (react-router), same reasoning as `attendance-admin`'s own `vercel.json`.
