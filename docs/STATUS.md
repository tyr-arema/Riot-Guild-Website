# Project status

Maintained by the hub session. Newest entry first.

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

## 2026-11-05
- Repo created on GitHub (public) and cloned to the hub's working folder.
- Conventions added: `CLAUDE.md`, `docs/HUB.md`, this file.
- Collaborator: GitHub user `ghinnyai` (push access).
- Stack: was unknown at this point; resolved later the same day (see above).
