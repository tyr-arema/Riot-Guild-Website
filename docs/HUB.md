# Hub / spoke operating model

Defined by the project owner on 2026-11-05.

## Hub session
- Runs on Fable. The only session that talks to the owner about this project.
- Responsibilities: research, planning, investigation, validation of spoke output,
  keeping `docs/STATUS.md` current.
- The hub's conversation is compacted whenever a new task starts or the subject
  changes. Anything worth keeping must be written to this repo or to memory, not
  left in chat.
- The hub does not implement features.

## Spoke sessions
- Every piece of implementation work starts in a spoke session created by the hub.
- The hub picks the minimal model and effort for the task:
  - Haiku: mechanical edits, renames, formatting, simple file generation.
  - Sonnet: ordinary features, tests, bug fixes with a clear brief.
  - Opus 5.5: architecture, hard debugging, multi-file refactors. This is the ceiling.
- A spoke may be one agent, an agent team working in parallel, or several
  parallel agents, as the task warrants.
- Loop limit: build/test/correct/validate at most 3 times, then report to the hub.
- Each spoke gets a self-contained brief: goal, files/area, constraints, what
  "done" looks like, and the loop limit.

## Validation
The hub validates every spoke result before it is merged: read the diff, run the
build and tests, check the brief was met, and check nothing out of scope changed.

## Pending
- First implementation commit from the other developer's agent will establish the
  stack. Until then no feature spokes are started.

## Installed Claude Code plugins (user scope, 2026-11-05)
All from the official Anthropic marketplace (`claude-plugins-official`). They load
in every session on this machine, so spokes can be told to use them by name.
- `frontend-design` — UI/UX implementation guidance for spokes doing page work.
- `feature-dev` — structured feature implementation workflow for spokes.
- `pr-review-toolkit` — review agents the hub uses to validate spoke PRs.
- `playwright` — browser automation MCP for end-to-end checks of the site.
- `context7` — up-to-date library docs MCP; spokes use it instead of guessing APIs.
- `github` — GitHub MCP for issues and PRs.
- `security-guidance` — hook that flags risky patterns during edits.
