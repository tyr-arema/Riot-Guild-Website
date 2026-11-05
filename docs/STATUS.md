# Project status

Maintained by the hub session. Newest entry first.

## 2026-11-05 (evening) — Phase 0 started
- `docs/ROADMAP.md` merged (PR #5): site analysis and four-phase plan.
- Phase 0 item 0.3 done (PR #6): hero countdown counts to Dec 9, then to the
  next Sat/Sun 8 PM ET raid night, shows "Raid night is live" in the window,
  handles DST via Intl, shows the visitor's local time. `?now=<ISO>` overrides
  the clock for testing.
- Phase 0 item 0.7 done (PR #7): `site.webmanifest`, 192/512/180 PNG icons,
  Organization JSON-LD, `robots.txt`, `sitemap.xml`. Canonical/OG/sitemap URLs
  still use the legacy `skuld-wow.pages.dev` origin pending the domain decision.
- New observation: at ~375px with a classic (non-overlay) scrollbar two `.card`
  elements overflow by about 7px. Emulated 375px without a scrollbar is clean.
  Candidate for the Phase 0 accessibility/layout pass (0.5/0.6).
- Live site not redeployed; deploys are still manual zips (0.9 pending).
- Waiting on owner decisions in ROADMAP section 5 before 0.1, 0.2, 0.9.

## 2026-11-05 (later) — first site import landed
- Collaborator agent Whinny (CJ's agent, GitHub `ghinnyai`) pushed the initial
  site import directly to `main` and merged the hub commits in with a regular
  merge commit. Hub docs survived byte-identical.
- Stack is now known: single static `index.html` + `assets/`, no build, deployed
  by Cloudflare Pages Direct Upload. Live at https://skuld-wow.pages.dev.
  Recorded in `CLAUDE.md` and in `DECISIONS.md` (pending PR #1).
- PR #1 (`chore/collaboration-contract`) adds `AGENTS.md`, `HANDOFF.md`,
  `DECISIONS.md` and asks our side to review before merge. Hub review pending.
- Open items from the collaborator: a R!ot Discord invite link for the Join
  CTAs; whether `RESKIN-REPORT.md` stays in the public repo; renaming the
  Cloudflare project or adding a custom domain.
- Hub note: `AGENTS.md` says `main` is protected, but no branch protection or
  rulesets exist on the repo yet.

- Fix for #3 opened as PR #4 (`fix/nav-scroll-offset`, spoke `fix-nav-offset`):
  `--nav-h` variable + `scroll-padding-top`, 104px override under 1020px where
  the nav links wrap. Verified at 1440/900/375. Awaits Whinny's review.
- Hub validation of the imported site (spoke `site-validate`, 2026-11-05): PASS
  on overflow at 1440 and 375, console, network, all 15 assets, countdown,
  nav anchors, tour tabs, residue greps. One defect: the sticky 72px nav has no
  `scroll-padding-top`/`scroll-margin-top`, so anchor jumps hide each section's
  eyebrow label under the bar (`index.html:45`, `:62`). Observation: at phone
  width the nav shows only the Join button, no section navigation.

## 2026-11-05
- Repo created on GitHub (public) and cloned to the hub's working folder.
- Conventions added: `CLAUDE.md`, `docs/HUB.md`, this file.
- Collaborator: GitHub user `ghinnyai` (push access).
- Stack: was unknown at this point; resolved later the same day (see above).
