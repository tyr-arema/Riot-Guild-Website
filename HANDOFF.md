# Handoff notes

Newest entry first. One short dated entry per work session: what was done,
what's in progress, what's blocked, what's recommended next.

## 2026-11-05 — Published: access granted, main pushed, contract PR opened (Whinny, CJ's agent)

- **Did:** `gh` authenticated as **ghinnyai** (device flow). The earlier
  403 was a timing issue: the write invite was accepted under ghinnyai
  *after* the first push attempt — permission re-checked via the API as
  `write` (push: true), no invitations left pending. The two histories
  were merged with a regular merge commit (no force-push, no history
  rewritten): the site README stayed primary with the hub's coordination
  pointers preserved, `.gitignore` is the union of both sides, and
  `CLAUDE.md`/`docs/*` are byte-identical to the hub's versions. Remote
  main had also gained one more hub commit (a STATUS.md line) during the
  gap; merged that in too. `main` is pushed (now at the merge of both
  histories), this branch was brought current with main, `AGENTS.md`
  re-verified byte-identical to CJ's brief after the merge, and this PR
  opened for the other side's review — not self-merged, per the contract.
- **Supersedes:** the "Blocked — push + PR not done" and "Reconcile
  before pushing" bullets in the entry below; both are resolved.
- **Recommended next:** the other developer reviews this PR. Open items
  unchanged: R!ot invite link, `RESKIN-REPORT.md` stay-or-go, filling in
  the stack note in `docs/STATUS.md`.

## 2026-11-05 — Initial import + collaboration contract (Whinny, CJ's agent)

- **Did:** Committed the initial import of the R!ot guild website (the
  "first implementation commit" the hub's STATUS.md was waiting for):
  single `index.html` + `assets/`, `share.jpg`, `_headers`, a rewritten
  README (what/stack/local run/deploy), and a `.gitignore`. Ran a
  secrets/member-data scan over the whole tree before committing — no
  keys, tokens, passwords, `.env` files, emails, or Discord IDs anywhere.
  The only find was the *old SKULD guild's* public Discord invite code,
  sitting in two internal docs: removed from README.md and redacted in
  RESKIN-REPORT.md. No `.env.example` needed — the site takes no config.
- **Current state:** Site is live on Cloudflare Pages via Direct Upload at
  https://skuld-wow.pages.dev (legacy project name). Content is the
  2026-11-05 Brill/Undercity jail reskin: Sat+Sun 8–11 PM ET raids, raids
  open Dec 9 2026, Soft Reserve loot, six guide chapters, Tier 2 server.
  This branch adds the collaboration contract: `AGENTS.md` (verbatim from
  CJ's brief), this file, and `DECISIONS.md`.
- **Blocked — push + PR not done:** This agent's environment has **no
  GitHub authentication** (`gh` is not logged in, no credential helper or
  stored credentials, SSH to github.com is reset by the network proxy).
  Both commits exist only locally so far. A human with collaborator access
  needs to: reconcile and push `main` (see next point), push
  `chore/collaboration-contract`, then open the PR from that branch.
- **Reconcile before pushing:** Remote `main` is NOT empty — it already
  has 3 commits (hub conventions: `CLAUDE.md`, `docs/HUB.md`,
  `docs/STATUS.md`, a starter `README.md` and `.gitignore`) with history
  unrelated to the import commit. Merge or rebase when pushing; never
  force-push. Expect content overlap on `README.md` and `.gitignore` —
  both sides have one; keep the site README's run/deploy content and the
  union of the ignore rules.
- **Overlap for the reviewer:** This contract's `AGENTS.md`/`HANDOFF.md`
  sit alongside the hub's `CLAUDE.md`/`docs/STATUS.md`. Suggest treating
  `AGENTS.md` as the shared agreement both agent families read, with
  `CLAUDE.md` keeping the hub/spoke specifics — reviewer's call in the PR.
- **Recommended next:** The other developer reviews this PR. Open items
  after that: CJ to supply a R!ot Discord invite link so the Join CTAs can
  link somewhere (text-only until then, on purpose); decide whether
  `RESKIN-REPORT.md` (internal build/verification notes) stays in this
  public repo; the stack note in `docs/STATUS.md` can now be filled in
  (static HTML/CSS/JS, no build — see DECISIONS.md).
