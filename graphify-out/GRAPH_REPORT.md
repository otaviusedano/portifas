# Graph Report - .  (2026-08-07)

## Corpus Check
- 68 files · ~72,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 208 nodes · 171 edges · 46 communities (27 shown, 19 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 6 edges
4. `BaseProps` - 4 edges
5. `lib` - 4 edges
6. `docker-image.sh script` - 3 edges
7. `build()` - 2 edges
8. `export_image()` - 2 edges
9. `@fontsource/space-grotesk` - 2 edges
10. `headroom-ai` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (46 total, 19 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (27): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, eslint, @eslint/js (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (24): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules (+16 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (18): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (11): @fontsource/space-grotesk, headroom-ai, dependencies, @fontsource/space-grotesk, headroom-ai, react, react-dom, react-router-dom (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, dev, format, lint, preview (+2 more)

### Community 5 - "Community 5"
Cohesion: 0.31
Nodes (7): BaseProps, ButtonAsAnchor, ButtonAsButton, ButtonAsLink, ButtonProps, ButtonSize, ButtonVariant

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (6): Client, Profile, Project, Social, Stat, Testimonial

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (4): ABOUT_SECTION_ID, CONTACT_ROUTE, NAV_ITEMS, NavItem

### Community 8 - "Community 8"
Cohesion: 0.83
Nodes (3): build(), export_image(), docker-image.sh script

### Community 11 - "Community 11"
Cohesion: 0.50
Nodes (3): accentColors, Breakpoint, breakpoints

## Knowledge Gaps
- **97 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 3` to `Community 4`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._