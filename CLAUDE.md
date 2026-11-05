# Riot Guild Website — agent conventions

Read this before touching anything.

## Project
World of Warcraft guild website for the Riot guild. Repo: tyr-arema/Riot-Guild-Website.
Stack: not yet chosen. Once the first implementation commit lands, record the stack,
run/build/test commands, and directory layout in `docs/STATUS.md` and extend this file.

## Workflow rules
- A single **hub session** (model: Fable) owns research, planning, investigation,
  validation, and all communication with the project owner. Everything else is a
  **spoke session** started by the hub. See `docs/HUB.md`.
- Spoke sessions use the smallest model and effort that fits the task. No spoke may
  run above Opus 5.5.
- A spoke may run a build → test → correct → validate loop **at most 3 times**.
  If the task is still not green after the third loop, stop and report back to the
  hub with what failed, what was tried, and what you think is wrong. Do not keep
  iterating.
- Work on a branch, never directly on `main`. Open a PR; the hub validates it.
- Keep changes scoped to the brief you were given. Note out-of-scope problems in
  your report instead of fixing them.
- Commit messages: short imperative subject, blank line, why-not-what body.

## Reporting back
Every spoke ends with a report containing: what changed (files), how it was verified
(commands and results), loop count used, anything left undone, and open questions.
