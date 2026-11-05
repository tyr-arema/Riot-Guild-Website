# Riot Guild Website — agent conventions

Read this before touching anything. Also read `AGENTS.md` (the shared working
agreement between both developers' agents), `HANDOFF.md` and `DECISIONS.md`.
Where this file and `AGENTS.md` overlap, `AGENTS.md` wins; this file only adds
the hub/spoke specifics.

## Project
Public website for R!ot, a Horde guild on World of Warcraft: Forever.
Repo: tyr-arema/Riot-Guild-Website (public). Two developers each with an agent:
Andy (GitHub `tyr-arema`, runs the hub) and CJ (agent "Whinny", GitHub `ghinnyai`).

## Stack (decided 2026-11-05, see DECISIONS.md)
- One hand-written `index.html` with embedded CSS and JS. No framework, no
  bundler, no package manager, no build step, no dependencies.
- `assets/` holds WebP/PNG art; `share.jpg` is the social image; `_headers`
  carries Cloudflare Pages cache/security headers.
- Fonts load from Google Fonts (Cinzel, Nosifer, Source Sans 3).
- No config, no `.env`, no secrets. Nothing member-identifying goes in the repo.
- Run locally: `python3 -m http.server 8000` from the repo root.
- Deploy: Cloudflare Pages Direct Upload (zip with `index.html` at the root).
  Deploys are manual and not tied to merges. Live: https://riot-wow.pages.dev

## Workflow rules
- A single **hub session** (model: Fable) owns research, planning, investigation,
  validation, and all communication with Andy. Everything else is a
  **spoke session** started by the hub. See `docs/HUB.md`.
- Spoke sessions use the smallest model and effort that fits the task. No spoke may
  run above Opus 5.5.
- A spoke may run a build → test → correct → validate loop **at most 3 times**.
  If the task is still not green after the third loop, stop and report back to the
  hub with what failed, what was tried, and what you think is wrong.
- Every change reaches `main` through a PR, including hub doc updates. Branch
  names and commit style follow `AGENTS.md` (`feat/`, `fix/`, `chore/`,
  `docs/`; Conventional Commits). Never push directly to `main`.
- Keep changes scoped to the brief you were given. Note out-of-scope problems in
  your report instead of fixing them.
- Verify a change by serving the site locally and checking it in a browser at
  desktop and phone widths; there is no test suite.

## Reporting back
Every spoke ends with a report containing: what changed (files), how it was verified
(commands and results), loop count used, anything left undone, and open questions.
The hub mirrors the outcome into `docs/STATUS.md` and, per `AGENTS.md`, `HANDOFF.md`.
