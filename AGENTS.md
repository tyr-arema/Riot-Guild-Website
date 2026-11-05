# Working agreement for AI agents on this repo

Two developers each use an AI coding agent on this project. These rules keep 
us from stepping on each other.

## Start of every session
1. Read this file.
2. `git fetch origin && git checkout main && git pull` — always start from 
   current main.
3. Read HANDOFF.md for the latest status notes from whoever worked last.
4. Check open PRs and issues before starting, so you don't duplicate work.

## Branches
- `main` is protected. Never commit or push directly to it. Never force-push 
  to any shared branch. Never rewrite history that has been pushed.
- Work on a branch per task: `feat/<short-name>`, `fix/<short-name>`, 
  `chore/<short-name>`, `docs/<short-name>`.
- Keep branches small and short-lived. One task per branch.
- Rebase (or merge) main into your branch before opening a PR so it applies 
  cleanly.

## Commits
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, 
  `style:`, `test:`.
- Subject line ≤ 72 chars, imperative mood. Body explains *why* if it isn't 
  obvious.
- Commit often; don't bundle unrelated changes.

## Pull requests
- Every change reaches main through a PR, even small ones.
- PR description must include: what changed, why, how it was tested, and any 
  follow-ups or known gaps.
- A PR is "done" only if: the project builds, the dev server runs, lint/format 
  passes (if configured), and no secrets or build artifacts are included.
- The other developer (or their agent) reviews before merge. Don't merge your 
  own PR without at least a review comment from the other side.
- Prefer squash-merge to keep main history readable.

## Handoff notes
- Maintain HANDOFF.md at the repo root. At the end of every session, append 
  a dated entry: what you did, what's in progress, what's blocked, what you 
  recommend next. Keep entries short. Trim entries older than a few weeks.

## Decisions
- Record non-obvious technical choices (framework, hosting, auth approach, 
  data model, styling system) in DECISIONS.md as short dated entries: 
  context → decision → consequences. Change a decision only via PR.

## Code conventions
- Follow the stack, formatting, and structure already in the repo. Don't 
  introduce a new framework, language, or major dependency without an entry 
  in DECISIONS.md and agreement in a PR.
- Add dependencies only when needed; prefer what's already installed.
- Keep the README's run/build instructions accurate when you change them.

## Secrets and data
- This repo is public. Never commit secrets, tokens, credentials, or real 
  member data. Use .env.example with placeholders and document required 
  variables in README.
- If a secret is accidentally committed, say so immediately in HANDOFF.md 
  and the PR, and treat the secret as compromised (rotate it).

## Conflicts and uncertainty
- Never resolve a merge conflict by discarding the other side's work without 
  understanding it. If unsure, stop and ask the humans.
- If you find a bug in the other developer's area, open an issue or leave a 
  note rather than silently rewriting it.
- When a request is ambiguous or would change shared structure (routing, 
  data model, build config), ask before acting.

## Scope
- Do only what the task asks. Don't "improve" unrelated files in the same PR.
- Don't delete files, branches, or history without explicit instruction.
