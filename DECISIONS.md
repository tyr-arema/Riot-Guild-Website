# Decisions

Non-obvious technical choices, recorded as short dated entries:
context → decision → consequences. Change a decision only via PR.

## 2026-11-05 — Static HTML/CSS/JS: no framework, no build step

- **Context:** A single-page guild site whose content changes are copy and
  art swaps a few times a season. It was built and verified as plain files.
- **Decision:** One hand-written `index.html` (embedded CSS/JS) plus an
  `assets/` folder. No framework, bundler, package manager, or build step.
- **Consequences:** Anyone can edit and preview with any static file
  server; deploys are a plain file upload; there is nothing to install.
  No templating or component reuse — acceptable at one page. Revisit if
  the site grows to multiple pages.

## 2026-11-05 — Cloudflare Pages hosting via Direct Upload

- **Context:** The previous host was closed out; the site needs free,
  stable static hosting. (It previously served the guild's earlier site
  from the same Pages project.)
- **Decision:** Cloudflare Pages, deployed by Direct Upload of the site
  tree (zipped, `index.html` at the root) rather than git-connected
  builds. `_headers` in the tree carries cache/security headers.
- **Consequences:** Deploys are manual (zip + dashboard upload) and are
  not tied to merges in this repo. The production project still carries
  its legacy name, so the live URL is https://skuld-wow.pages.dev —
  renaming the project or adding a custom domain is a separate decision.
  If deploys become frequent, connecting Pages to this repo is the
  natural follow-up.

## 2026-11-05 — Brill / Undercity jail theme for the R!ot rebrand

- **Context:** The guild renamed to R!ot (a Forsaken Horde guild) on
  2026-11-04 and the site was fully reskinned on 2026-11-05, replacing
  both the earlier Eternity look and the Norse theme of the guild's
  previous site.
- **Decision:** Brill jail / undead starting-zone theme: crypt black and
  plague green, Cinzel + Nosifer display type, hero line "Death was only
  intake." Copy states Saturday + Sunday raids and Soft Reserve loot
  everywhere.
- **Consequences:** All new copy and art follow the jail theme and the
  stated facts (Sat+Sun 8–11 PM ET, Soft Reserve only). The previous
  guild's site tree is kept separately, outside this repo, as that
  guild's record.

## 2026-11-05 — Public GitHub repo with a PR-based collaboration contract

- **Context:** A second developer (and their AI agent) joins the project.
  Both sides need one shared source of truth and a workflow that keeps
  two agents from stepping on each other. The other side had already
  seeded the repo with hub/spoke conventions (`CLAUDE.md`, `docs/`).
- **Decision:** This public repo is the source of record. Work follows
  the `AGENTS.md` contract: branch per task, Conventional Commits, every
  change through a PR reviewed by the other side, `HANDOFF.md` and this
  file kept current.
- **Consequences:** No direct pushes to `main` after the initial import.
  Because the repo is public, no secrets, credentials, or real member
  data may ever be committed — the site is kept free of all three by
  design (no config, no `.env`).

## 2026-11-05 — Multi-page content via Eleventy (proposed, needs both sides)

- **Context:** The guide chapters and the full loot policy are moving from
  Discord forum posts onto the site so search engines can index them. That
  means several pages sharing one head, nav and footer. The 2026-11-05
  "no build step" decision said to revisit at multiple pages.
- **Decision:** Use Eleventy (11ty) with Markdown content and one Nunjucks
  layout, building to static HTML in `_site/`. No client-side framework; the
  shipped output stays plain HTML, CSS and vanilla JS. Build command
  `npx @11ty/eleventy`, output directory `_site`, set on the Pages project.
  `index.html` becomes the home layout's content; the inline CSS moves to a
  shared stylesheet.
- **Consequences:** The repo gains `package.json`, `.eleventy.js` and a
  `src/` tree; `node_modules/` and `_site/` are ignored. Local preview is
  `npx @11ty/eleventy --serve`. Contributors need Node. The site keeps its
  "any static host" property because the build output is still plain files.
- **Alternatives considered:** plain HTML pages (no build, but every shared
  change edited in every file) and staying single-page (guides stay
  unindexed in Discord).
