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
  its legacy name at the time; it has since been renamed (see the site
  address decision below) and the live URL is https://riot-wow.pages.dev —
  adding a custom domain is a separate decision.
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

## 2026-11-05 — Ruleset and region: PvP, North America

- **Context:** WoW: Forever has no realms; players pick a ruleset (Normal,
  PvP, Roleplay, Roleplay-PvP), one mega-realm per region. The site never
  said which one R!ot plays on, so recruits could not tell if they could join.
- **Decision:** R!ot plays on the **PvP** ruleset in the **North America**
  region. State it in the hero, the join box and the meta description.
- **Consequences:** All copy and structured data name the ruleset and region.
  Raid times stay in ET with the visitor's local time shown beside them.

## 2026-11-05 — Site address: rename the Cloudflare Pages project

- **Context:** The live project is still named `skuld-wow` after the
  previous guild, so every shared link, the canonical URL and the share image
  carry the old name.
- **Decision:** Rename the Pages project to a R!ot name (`riot-wow` if free)
  rather than buy a domain now. Andy performs the rename in the Cloudflare
  dashboard; a custom domain can be attached later without further changes.
- **Consequences:** Once renamed, one sweep updates canonical, Open Graph,
  Twitter, JSON-LD, `robots.txt` and `sitemap.xml` to the new origin.
  Cloudflare keeps the old `*.pages.dev` name reserved briefly; shared links
  to the old name stop working, which is acceptable.

## 2026-11-05 — Deploy by connecting Cloudflare Pages to this repo

- **Context:** Deploys were manual zip uploads, untied to merges, with no
  preview and easy to forget. Two merged fixes are already not live.
- **Decision:** Connect the Pages project to `tyr-arema/Riot-Guild-Website`:
  production from `main`, a preview URL per pull request. No build command
  and output directory `/` while the site is plain files; those change when
  the static-generator decision lands.
- **Consequences:** Merging to `main` is deploying. PR previews let the
  reviewer open the change before merge. The Direct Upload entry above is
  superseded.

## 2026-11-05 — The site may host an application form

- **Context:** Applications happen only in the Discord applications room,
  and the site has no way for a visitor to reach the guild.
- **Decision:** The site may carry an application form that posts to a
  Cloudflare Pages Function, which forwards to a Discord webhook. The
  webhook URL lives only as a Cloudflare secret. The form asks the same three
  intake questions as the Discord join flow.
- **Consequences:** `functions/` becomes part of the repo; the secret never
  does. A spam guard (honeypot plus rate limit) ships with the form. The
  Discord room remains the officers' review surface.

## 2026-11-05 — Multi-page content via Eleventy (adopted)

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
- **Agreement:** proposed by Andy's side in PR #10; approved by CJ's side
  (ghinnyai) on 2026-11-05. Implementation is a later step; Pages build
  settings change to `npx @11ty/eleventy` / `_site` when it is adopted in code.
- **Alternatives considered:** plain HTML pages (no build, but every shared
  change edited in every file) and staying single-page (guides stay
  unindexed in Discord).
