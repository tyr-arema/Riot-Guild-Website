# R!OT WEBSITE RESKIN — VERIFICATION REPORT (2026-11-05)

Build: `~/workspace/riot-site/` (new tree; `~/workspace/skuld-site/` untouched). Deploy zip:
`~/workspace/your_files/riot-site-a.zip`. **Nothing deployed** — the live project still serves the
holding page until CJ orders the deploy.

## What it is
The SKULD page architecture, reformed for R!ot: nav → hero (banner + named icon + countdown to
Raids Open) → The Road → The Jail (about) → What We Do (PvP / Raiding / Loot / Community) → The
Library (six guide chapters) → Recruit + Join → Pug → The Server (Tier 2 + ten-stop Discord tour)
→ footer. Palette: crypt black, plague green (#80E060 family — the Discord card tagline green),
violet accents. Fonts: Cinzel (letterspaced serif, the card-title register), Nosifer (headline /
tagline accents only), Source Sans 3 body.

## ⚠️ HERO COPY — CJ-REVIEWABLE DRAFTS
- **Headline (Nosifer): "Death was only intake."** — lifted from the live Discord welcome guide
  ("Death was only intake. Welcome to the cellblock.").
- **Sub:** "Black bars, green lamplight, bad intentions. R!ot is the Forsaken guild in the Brill
  jail — we hunt blues, skin dragons, and leave their keeps rotting. Raids run Saturday and Sunday
  nights. The dead do not stay quiet." — built from the welcome guide's own lines; the enemy is
  called "blues" so the residue gate stays clean (the Discord text itself says "Alliance" — CJ
  can restore the word if he prefers the exact mirror).
- Footer quote: "Death was only intake." About closing line: "We don't fear the grave. We run it."

## (a) Residue greps — PASS
Case-insensitive, whole tree (`index.html` unless noted):
- `alliance` 0 · `norse` 0 · `norn` 0 · `weaver` 0 · "fate is already written" 0 · "your fate" 0 ·
  `tuesday` 0 · `thursday` 0 · `epgp` 0 · `thatsmybis` 0 · `mead-hall` 0 · `the-shit-post` 0 ·
  "gold chapters" 0 · `verdandi` 0 · `\burd\b` 0 · `\bember\b` 0 · `ashwarden` 0 · `pug-master` 0 ·
  `fjord` 0 · `discord.gg` 0 · SKULD invite code 0.
- `skuld`: 5 hits in index.html, ALL in meta/canonical URLs (`og:url`, `og:image`,
  `twitter:image`, `canonical`) pointing at the project's real address
  `https://skuld-wow.pages.dev/` — the deploy address of record; renaming the project/custom
  domain is a Cloudflare decision for CJ. (2 further hits in README.md are provenance notes.)
- Raw-substring noise verified as false positives: "urd" hits are all "Saturday"; "ember" hits
  are all "Member"/"December"/"November".

## (b) Factual checklist — PASS, against the as-built server
- Identity: R!ot, Horde, WoW Forever, Brill jail / Forsaken. ✔
- Raids: **Saturday + Sunday, 8:00–11:00 PM ET** (8 mentions each of Saturday/Sunday; zero
  Tue/Thu anywhere). Raids open **Dec 9, 2026**; first nights **Dec 12 + 13**. Raids list:
  Barrow Deeps (10) · Hyjal Summit (20) · Onyxia's Lair (40); world buffs suppressed at entry. ✔
- Loot: Soft Reserve ONLY — 2 SR/raid, "in before the first pull" (CJ's standing gist exception
  kept), same item ×2 or split allowed (canonical doc; site gist follows the SKULD page's
  approved wording), highest roll wins, unreserved → open roll MS>OS, no carry-over, attendance
  bonus 3 SR next week / resets weekly, pugs on the same system, GDKP banned line present. ✔
- Join: three questions (brings-you / main class / pings); paths Raiding (Trial Member start,
  Raider officer-granted — stated explicitly), PvP, Social, Professions; flow
  New Member → Trial Member → Raider, Member parallel. ✔
- Guides: exactly the six chapters — Addons, Sims, Leveling Money Rules, Farm by Class (1/2),
  Farm by Class (2/2), Race & Profession; Horde races named (Orc, Tauren, Troll, Undead,
  Windshaper Skyborne); Forever-only stated. ✔
- Server facts: Boost **Tier 2** (NOT Level 3 — the SKULD "Fully boosted / 14-14" claims were
  cut); perks listed are Tier-2-true and receipt-backed (animated icon + static banner live,
  150 emoji slots). ✔
- Bot/automation talk: none, except "Jockie requests" in the two spots the SKULD page carried it
  (Socials card + choose-your-path interests panel) — the standing sole-survivor mention. ✔
- Deliberate cuts (not carried from SKULD, would have been unsourced for R!ot): the class/spec
  recruitment-priority lists, the voice-channel sound buttons + mp3s (incl. the Alliance-named
  sound file), the "Horde defectors" line (flipped to "Freshly risen?").

## (c) Rendering — PASS (Playwright/Chromium, file:// load)
- Desktop 1440×900: scrollWidth == clientWidth (1440), **0 elements overflow the viewport**.
- Phone 390×844: scrollWidth == clientWidth (390), **0 overflowing elements** — the width the
  SKULD site never got verified at. Nav collapses to brand + Join; all grids stack.
- Fonts verified loaded (Nosifer / Cinzel / Source Sans 3 via document.fonts). Countdown live
  (34d 17h at check time → Dec 9, 2026 20:00 ET). Tour tab-switching click-tested.
- Reveal-on-scroll hardened with a 4 s backstop so content can never sit invisible.
- Screenshots: `~/workspace/skuld-onboarding-work/riot/site-shots/riot-site-desktop.png` (1440×7733)
  and `riot-site-phone.png` (390×12356), plus viewport shots taken during verification.
  (Hero note: the banner art's own baked-in "R!OT" lettering shows through behind the H1 —
  atmospheric, from the guild's actual banner; CJ may want it dimmed more.)

## (d) Join / CTA link inventory
- SKULD site: "Join SKULD on Discord" ×3 → `https://discord.gg/<redacted — SKULD invite code>` (SKULD's invite).
- R!ot site: **no Discord URL anywhere** (grep `discord.gg` = 0). All CTAs are in-page anchors
  (#join / #server / #pug). The join box carries a plain-text CTA: *"Find us in the Discord —
  the door is passed hand to hand. Ask any R!ot member in-game, or knock at 📥applications once
  you're in."*
- **⚠️ NEEDS CJ: a R!ot Discord invite link.** When supplied, the three CTA spots (nav button,
  hero button, join box) take it. Nothing was invented and SKULD's invite was NOT reused.

## (e) Files
- `index.html` — 42,438 B · sha256 `066f00eb8a1534a601b7edf322c1e9a3e8662d15af8a550f65bf7f47cedc1f75`
- `share.jpg` — 134,266 B (1200×630, cropped from the R!ot banner static)
- `_headers` — 239 B (carried from SKULD's — generic cache/security headers)
- `assets/` — 15 files, 1,175,780 B: hero-banner.webp (the live static banner art), icon-named.webp,
  icon-32.png, lockup.webp, and 11 composed room cards (choose-your-path, welcome-and-rules,
  tag-yourself, raid-signups, profession, class/nine-classes, pvp-signups, pug-signup,
  guild-rules, applications, guides) downscaled to 1280 w from `riot/art/final/`.
- Tree total 1,353,723 B (+ README.md + this report). Zip: 19 entries at root, 1,324,836 B,
  sha256 `3fe8383ba6a2e520…`.
