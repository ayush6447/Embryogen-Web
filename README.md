# Embryogen — Website

Marketing site for **Embryogen**, explainable AI for embryo assessment.

Embryogen analyzes time-lapse embryo development, detects key developmental events
(pronuclei appearance, cavity formation and similar milestones), and gives embryologists
viability insights alongside the frames and regions the assessment was based on.
It is decision support: the final embryo selection always stays with the embryologist.

> Embryogen is under development and is not yet approved as a medical device.

## Tech stack

| Layer      | Choice                              |
| ---------- | ----------------------------------- |
| Framework  | React 19                            |
| Build tool | Vite 7                              |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing    | React Router 7 (`BrowserRouter`)    |
| Animation  | framer-motion, `react-intersection-observer` |
| Graphics   | OGL (WebGL hero background)         |
| Icons      | react-icons, lucide-react           |
| Font       | Syne (self-hosted in `public/fonts`) |

## Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

## Routes

| Path            | Page                                                   |
| --------------- | ------------------------------------------------------ |
| `/`             | Home — hero, problem, solution, how it works, CTA      |
| `/team`         | Team and mentor                                        |
| `/achievements` | Milestones and recognition                             |
| `*`             | 404                                                    |

Home sections are reachable by hash: `/#problem`, `/#solutions`, `/#how-it-works`, `/#why`, `/#cta`.

Because this is a single-page app on real URLs, hosting needs an SPA fallback.
Both are committed: `vercel.json` (Vercel rewrites) and `public/_redirects` (Netlify).

## Editing content

All site copy lives in **`src/data/content.js`**. Components read from it, so text changes
should not require touching JSX. The demo email address is `site.contactEmail` in the same
file and drives every "Request a Demo" button.

## Folder structure

```
.
├── index.html              # shell: fonts, SEO/OG tags, pre-paint theme script
├── vercel.json             # SPA rewrite (Vercel)
├── public/
│   ├── _redirects          # SPA rewrite (Netlify)
│   ├── robots.txt, sitemap.xml
│   ├── fonts/              # Syne
│   ├── team/               # team photos (300x300 WebP)
│   └── showcase/           # real model-output screenshots (see TODOs)
└── src/
    ├── main.jsx            # entry
    ├── App.jsx             # router + routes
    ├── index.css           # design system: .section-badge, .float-card, buttons
    ├── data/content.js     # ALL site copy
    ├── components/         # Layout, Navbar, Footer, Hero, sections, Icon, PageMeta
    └── pages/              # Home, Team, Achievements, NotFound
```

## Design system

Monochrome, Syne throughout, `max-w-[1200px]` containers, `py-28` section rhythm,
`.section-badge` pills, `.float-card` surfaces, `.btn-primary` / `.btn-secondary`,
and framer-motion fade-up on scroll. Light and dark mode are both first-class; the
theme is stored in `localStorage` under `theme` and applied before first paint.
