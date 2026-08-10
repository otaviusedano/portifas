# Otávio Sedano — Portfolio

Portfolio site for a Product & UX/UI Designer. Dark theme with a green→teal
accent, animated hero and a clients marquee.

**Stack:** Vite + React + TypeScript · CSS Modules + CSS Variables · React Router.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # typecheck + production build
npm run lint    # ESLint
npm run format  # Prettier
```

## Architecture

The UI follows an atomic-design structure. Content is **mocked** in `src/data/`
and typed in `src/types/`, so it can later be swapped for a CMS or API.

```
src/
├── components/
│   ├── atoms/       # Button, Container, Logo, Tag, Reveal
│   ├── molecules/   # NavBar, SectionHeading, ProjectCard, ClientLogo, SocialLinks
│   └── organisms/   # Header, Footer, RootLayout, HeroSection, ClientsStrip,
│                    #   ProjectsSection, AboutSection, ContactSection
├── data/            # profile, clients, projects (mock data)
├── hooks/           # UseReveal (IntersectionObserver scroll-reveal)
├── pages/           # Home, Projects, About, Contact, NotFound
├── styles/          # reset, tokens (css + ts), global
├── types/           # shared TS interfaces
└── utils/           # routes
```

## Development plan (stages)

- **1. Base** — Vite scaffold, TS config, path aliases, ESLint/Prettier, reset. ✅
- **2. Fundamentals (tokens)** — colors, spacing, typography, radii, shadows,
  breakpoints, z-index in `styles/tokens.css` + typed mirror in `tokens.ts`. ✅
- **3. Atoms** — Button, Container, Logo, Tag, Reveal. ✅
- **4. Molecules** — NavBar, SectionHeading, ProjectCard, ClientLogo, SocialLinks. ✅
- **5. Components (organisms)** — Header, Footer, layout and page sections. ✅
- **6. Advanced UX/UI** — animated hero bars, clients marquee, scroll-reveal,
  hover micro-interactions, responsive layout, `prefers-reduced-motion`. ✅

## Next steps

- Replace placeholder project thumbnails and client logos with real assets.
- Wire the contact form to a real service (currently a mocked submit).
- Add per-project detail pages (`/projects/:slug`).
