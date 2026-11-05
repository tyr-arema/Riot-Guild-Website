# R!ot — Horde Guild Website

Public website for **R!ot**, a Horde guild playing **World of Warcraft: Forever**.
Themed on Brill and the Undercity jail — crypt black, plague green, iron bars.

Live site: https://skuld-wow.pages.dev (the Cloudflare Pages project still
carries its legacy name; a riot-named project or custom domain is a pending
decision — see DECISIONS.md).

## What's on the page

A single-page site (`index.html`): hero with a live countdown to raids opening
(Dec 9, 2026), about ("The Jail"), what we do (PvP / Raiding / Loot /
Community), the six guide chapters (Addons, Sims, Leveling Money Rules, Farm
by Class 1/2 + 2/2, Race & Profession), recruiting/join, pug info, and a tour
of the Discord server (Boost Tier 2).

Guild facts the copy states: raids **Saturday + Sunday, 8:00–11:00 PM ET**;
loot is **Soft Reserve only** (2 SR per raid, third SR after a full week of
attendance); joining asks three questions (what brings you / main class /
pings), and the Raider rank is officer-granted after a Trial Member start.

The Join call-to-action is text-only for now: no Discord invite URL exists in
the code on purpose, until the guild supplies a R!ot invite link to publish.

## Stack

- Static **HTML / CSS / JS** in a single `index.html` — no framework, no
  build step, no dependencies.
- `assets/` — WebP/PNG art (hero banner, guild icon, lockup, room cards).
- `share.jpg` — 1200×630 social-share image.
- `_headers` — Cloudflare Pages cache/security headers, picked up
  automatically on deploy.
- Fonts (Cinzel, Nosifer, Source Sans 3) load from Google Fonts CDN.
- No configuration and no secrets: the site needs **no `.env`** and no
  environment variables. Nothing member-identifying belongs in this repo —
  it is public.

## Run locally

Any static file server works. From the repo root:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Cloudflare Pages, **Direct Upload**:

1. Zip the repo tree with `index.html` at the zip root.
2. Upload the zip to the Pages project (dashboard → Pages → project →
   Upload). `_headers` at the root is applied automatically.

There is no build command and no output directory to configure — what is in
the repo is what is served.

## Working on this repo

Two developers (each with an AI agent) share this repo. Read `AGENTS.md`
before starting work; keep `HANDOFF.md` and `DECISIONS.md` current.
`RESKIN-REPORT.md` is the 2026-11-05 build/verification report for the
current design.

### Hub coordination docs

This repo was initialized by the project hub session on 2026-11-05. The
hub side also maintains:

- `CLAUDE.md` — rules every Claude agent follows when working in this repo.
- `docs/HUB.md` — how the hub session coordinates spoke sessions.
- `docs/STATUS.md` — current state of the project, kept by the hub.
