# Roadmap: aligning the R!ot site with a modern WoW: Forever guild site

Written by the hub session on 2026-11-05 from a full read of `index.html`,
the collaborator's `RESKIN-REPORT.md`, `HANDOFF.md`, `DECISIONS.md`, and web
research on World of Warcraft: Forever. Facts marked *(unverified)* come from
third-party guides, not Blizzard.

## 1. Where the site stands today

One static page, eight sections, 651 lines, no build step, Cloudflare Pages
by manual upload. Every CSS class and every asset is used; the markup is clean
and the hub's render check passed at desktop, tablet and phone widths.

| Section | What it does | State |
|---|---|---|
| Hero | Name, tagline, two CTAs, live countdown to Dec 9 | Countdown shows `0 0 0 0` forever after Dec 9; CTAs link in-page only |
| The Road | Four dated milestones Nov 4 → every weekend | Hard-coded dates; needs editing after each milestone |
| The Jail (about) | Theme and identity copy | Done |
| What We Do | PvP, Raiding, Loot (Soft Reserve), Community cards | Done; every "sign up" points at a Discord forum by name only |
| The Library | Six guide chapter titles | Titles only; content lives in Discord, not on the site |
| Recruit + Join | Three paths, rank ladder, join box | Join box has no link anywhere (invite missing on purpose) |
| Pug | Five steps, gear check, loot | Done |
| The Server | Boost perks, ten-stop Discord tour with tabs | Done; tabs lack full ARIA wiring |
| Footer | Lockup, disclaimer | Done |

The site is a brochure for the Discord. Nothing on it is actionable without
already being in the server, and it does not link to the server.

## 2. Planned, pending, cut and missing

**Pending from the collaborator's handoff**
- R!ot Discord invite link for the nav button, hero button and join box.
- Whether `RESKIN-REPORT.md` stays in a public repo.
- Cloudflare project rename: done. The project is now `riot-wow.pages.dev`
  and the canonical, Open Graph, JSON-LD, robots and sitemap URLs point at it
  (#13). A custom domain can still be attached later.
- Branch protection on `main` (AGENTS.md claims it; the repo has none).
- Phone layout has no section navigation, only the Join button.

**Cut from the previous guild's site on purpose** (RESKIN-REPORT): class/spec
recruitment priority lists, voice-channel sound buttons and their mp3s, the
"Horde defectors" line. None should return as-is; the priority list may come
back once the raid roster has real needs.

**Missing against WoW: Forever itself**
- The site never says which **ruleset** R!ot plays on. Forever has no realms;
  players pick Normal, PvP, Roleplay or Roleplay-PvP, one mega-realm per region
  each. A recruit cannot tell whether they can even join.
- Region is never stated (times are ET, which implies NA, but say it).
- Character names are two-part and unique per region. "Nickname = in-game
  name" should say which part.
- New Horde race/class combos (Undead Paladin, Orc Mage, Troll Warlock) and
  the Windshaper Skyborne being Shaman-only are not reflected in the class and
  race copy.
- The Legacy System (account-wide perks, challenges, rewards), the shared
  campsite system, the nine new dungeons and the 2027 content roadmap
  (Hardcore winter 2026/27, two raids spring 2027, more summer 2027) are
  absent. These are what a Forever player searches for.
- Blizzard ships Discord account linking with guild-chat mirroring for
  Forever. A Discord-first guild should say it uses it.

**Missing against a modern guild site**
- No Discord invite, widget or online count.
- No raid calendar: no weekly schedule in the visitor's own timezone, no
  "next raid in", no calendar subscription.
- No sign-up or application path on the site itself.
- No roster, progression or logs.
- No hosted guides; six chapters are names only.
- No web manifest, touch icons, structured data, sitemap or robots file.
- No `prefers-reduced-motion` handling for the reveal animation, no visible
  focus styles, no skip link; tour tabs have `role=tab` but no `aria-selected`,
  `aria-controls`, tabpanel roles or arrow-key navigation.
- Fonts load from Google (third-party request on every visit).
- Deploys are manual zips with no preview and no automated check.

## 3. Target: what "modern WoW: Forever guild site" means here

A fast static site that is the public front door of the guild, states the
ruleset and region in the first screen, gets a recruit into Discord in one
click, shows the raid schedule in the visitor's own time, hosts the guides the
guild wants indexed by search engines, and pulls live data (Discord presence,
raid events, logs, roster) through integrations that keep every secret out of
this public repo. Still no framework on the client; still deployable as files.

## 4. Phased plan

Every item is a spoke task. Model and effort are the hub's starting picks.

### Phase 0: fix what is wrong or about to break (before Dec 9)

| # | Task | Needs | Spoke |
|---|---|---|---|
| 0.1 | Wire the Discord invite into the three CTAs | Invite link from CJ | Haiku, low |
| 0.2 | Add ruleset and region to hero eyebrow, join box and meta description | Which ruleset from CJ | Haiku, low |
| 0.3 | Countdown v2: before Dec 9 count to raids opening; after, show "Raids are open" and count to the next Saturday/Sunday 8:00 PM ET raid night, computed from the schedule, in the visitor's timezone with ET shown too | none | Sonnet, low |
| 0.4 | Turn "The Road" into a data-driven timeline (array in JS) with Blizzard's roadmap stops added: Hardcore winter 2026/27, spring 2027 raids, summer 2027 | none | Sonnet, low |
| 0.5 | Phone nav: compact menu button exposing the section links | design nod from CJ | Sonnet, medium |
| 0.6 | Accessibility pass: reduced-motion, focus-visible, skip link, full tab ARIA + arrow keys | none | Sonnet, medium |
| 0.7 | Head hygiene: manifest, touch icons, JSON-LD Organization, `robots.txt`, `sitemap.xml`; canonical/OG to the final domain | Domain decision | Haiku, low |
| 0.8 | Move `RESKIN-REPORT.md` to `docs/` or delete; add branch protection on `main` requiring a PR | Owner decision | Haiku, low |
| 0.9 | Connect Cloudflare Pages to this repo: production from `main`, preview per PR; drop manual zips. Record in DECISIONS.md | Cloudflare access | Sonnet, medium |
| 0.10 | GitHub Action on PRs: serve the site, run a Playwright smoke check (overflow at 3 widths, console errors, all asset URLs 200, every anchor has a target) | none | Sonnet, medium |

### Phase 1: content that works with no backend

| # | Task | Needs | Spoke |
|---|---|---|---|
| 1.1 | Raid schedule section: weekly grid, the three raids with sizes and boss counts, bench rule, world-buff rule, an `.ics` subscribe link and Google Calendar link | confirm facts with CJ | Sonnet, medium |
| 1.2 | Full loot policy page (Soft Reserve rules, attendance bonus, pug rules, GDKP ban) as the canonical public version of the Discord raid guide | copy from CJ | Sonnet, low |
| 1.3 | Host the six guide chapters on the site as pages, with Forever content: Legacy System, campsite, new dungeons by level, race/class combos including Skyborne | guide text from CJ | Sonnet → Opus for structure |
| 1.4 | Decide and record in DECISIONS.md whether multi-page means plain HTML files or a static generator (Eleventy or Astro, static output, still no client framework). Hub recommends Eleventy with Markdown once there are more than three pages | both developers | hub + Opus plan |
| 1.5 | Self-host the three font families (woff2 subset) and drop the Google Fonts request | none | Haiku, low |
| 1.6 | Image audit: sizes, `width`/`height` on every `img`, `fetchpriority` on the hero | none | Haiku, low |

### Phase 2: live integrations without secrets in the repo

| # | Task | Needs | Spoke |
|---|---|---|---|
| 2.1 | Discord widget: online count and voice presence via the public widget JSON (server must enable the widget) | widget enabled | Sonnet, low |
| 2.2 | Raid-Helper: link each schedule row to its Discord event; evaluate the Raid-Helper web embed/API for an upcoming-events block | Raid-Helper in server | Sonnet, medium |
| 2.3 | softres.it: per-raid "open the soft-reserve sheet" links on the schedule | sheet links | Haiku, low |
| 2.4 | Application form on the site posting to a Cloudflare Pages Function that forwards to a Discord webhook stored as a Cloudflare secret; spam guard; copies the three intake questions | webhook + Function enabled | Sonnet, medium |
| 2.5 | Warcraft Logs guild page link and latest-report embed, if WCL adds Forever *(unverified)* | WCL support | Sonnet, low |
| 2.6 | Twitch/YouTube embed for guild streamers if any | names | Haiku, low |

### Phase 3: guild data

| # | Task | Needs | Spoke |
|---|---|---|---|
| 3.1 | Roster and progression from the Battle.net profile API, if Blizzard publishes a Forever namespace *(unverified; Classic uses `profile-classic-us`)*. A scheduled Cloudflare Worker refreshes a JSON file the page reads; the API secret stays in Cloudflare | API availability, client credentials | Opus, medium |
| 3.2 | Recruitment needs by class/spec, driven by the roster, replacing the cut priority lists | 3.1 | Sonnet, low |
| 3.3 | Legacy System progress board for the guild (optional, if the API exposes it) | 3.1 | Sonnet, medium |

## 5. Decisions the owners must make first

1. Which ruleset and region R!ot plays on (blocks 0.2).
2. The Discord invite link (blocks 0.1).
3. Final domain: rename the Pages project, buy a domain, or keep
   `skuld-wow.pages.dev` (blocks 0.7, 0.9). Decided: renamed to
   `riot-wow.pages.dev`.
4. Git-connected deploys versus manual zips (0.9).
5. Plain HTML pages versus a static generator once guides move on-site (1.4).
6. Whether the site may own an application form, or Discord stays the only
   intake (2.4).

## 6. Order of work the hub proposes

Week of Nov 5: 0.1, 0.2, 0.3, 0.7, 0.8 (small, unblock Dec 9).
Week of Nov 12: 0.9, 0.10, 0.4, 0.6, 0.5.
Before Dec 9: 1.1, 1.2, 1.5, 1.6, 2.1, 2.3.
After first raids: 1.3, 1.4, 2.2, 2.4, then Phase 3 as APIs allow.

## Sources

- Blizzard, "World of Warcraft: Forever Now Live" (news/24315820)
- warcraft.wiki.gg, "World of Warcraft: Forever" (roadmap and race tables)
- Third-party raid guides agreeing on the Dec 9 unlock and 10/20/40 sizes
  (maxroll.gg, wowforeverguides.com, lfcarry.com)
- Blizzard developer forum threads on Classic API namespaces
- Raid-Helper and softres.it listings; Method's softres.it guide
- Cloudflare Pages docs (Git integration, Functions, previews)
