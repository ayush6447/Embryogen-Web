# CLAUDE.md

Guidance for working in this repo.

## What this is

The Embryogen product landing page: React 19 + Vite 7 + Tailwind v4 + React Router 7.
The audience is **IVF clinics and embryologists**, not investors. It is a product site,
not a pitch deck.

## Hard rules

- **No pricing, no roadmap, no market-size or TAM stats.** Those sections were deliberately
  removed. Do not reintroduce `RevenueModel`, `Roadmap`, `MarketImpact` or currency figures.
- **No invented facts.** Achievements, team roles, logos and metrics must be real. Anything
  not yet known stays a clearly marked `TODO` placeholder.
- **No stock or mocked-up product imagery.** Screenshots must be genuine model output.
  `ExplainabilityShowcase` deliberately renders nothing until
  `public/showcase/explainability.png` exists.
- **Medical claims stay conservative.** Embryogen is decision support, the embryologist
  decides, and it is not an approved medical device. The trust note on the home page says
  exactly this — keep it accurate.

## Where things live

- `src/data/content.js` — **all** site copy, plus `site.contactEmail` and the demo mailto.
  Change text here, not in JSX. Components take icons by string name via `components/Icon.jsx`
  so this file stays JSX-free.
- `src/pages/` — one file per route (`Home`, `Team`, `Achievements`, `NotFound`).
- `src/components/Layout.jsx` — `Navbar` + `<Outlet/>` + `Footer`, plus `ScrollToTop`.
- `src/components/PageMeta.jsx` — per-page `<title>`/`<meta>` using React 19's native
  metadata hoisting. No react-helmet.
- `src/index.css` — the design system.

## Design system (match it)

Syne font, monochrome palette (`#08060d` ink, `#0a0a0a` dark ground, `#f7f7f7` / `#111111`
alternating section bands), `max-w-[1200px] mx-auto px-6` containers, `py-28` sections,
`.section-badge` + `clamp()` heading + `.float-card` grid, and framer-motion fade-up driven
by `useInView({ triggerOnce: true })`. Every colour needs a `dark:` counterpart.

Standalone pages (`/team`, `/achievements`) use `pt-40` so content clears the fixed 72px navbar.

## Routing notes

- `BrowserRouter`. Hash links to home sections are `<Link to="/#problem">` — `ScrollToTop`
  performs the scroll after render, since the browser's own hash scroll fires before React mounts.
- `NavLink` (with active state) is used only for real page routes; hash links use `Link`.
- SPA fallback is committed twice on purpose: `vercel.json` and `public/_redirects`.
  If the host changes, keep one that matches.

## Theme

An inline script in `index.html` reads `localStorage.theme` (falling back to
`prefers-color-scheme`) and sets `.dark` on `<html>` **before** React loads. Components that
need the theme seed `useState` lazily from that class and then watch a `MutationObserver`
(`Hero`, `AnimatedThemeToggler`). Do not move this into React — it would reintroduce a flash.

## Before finishing

```bash
npm run lint    # must be clean
npm run build   # must be clean
```

`react/jsx-uses-vars` is enabled because core `no-unused-vars` does not see JSX member
expressions like `<motion.div>`; without it every framer-motion import errors.
