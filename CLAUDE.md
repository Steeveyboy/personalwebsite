# CLAUDE.md

Guidance for AI coding agents working in this repository.

## What this is

The personal site of Jonathon Steeves — an Ottawa-based data scientist working on
AI systems, data pipelines, and security. The site exists to make that work legible
to people who might want to read it, hire it, or build alongside it.

Primary audiences, in order:

1. Practitioners and researchers who found a piece of writing and want to know who wrote it
2. Recruiters, hiring managers, and collaborators evaluating technical depth
3. Future me, checking that something still works

If a change doesn't serve one of those, it probably doesn't belong.

## Stack

<!-- Adjust this block to match the actual repo before first use. -->

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Content:** Markdown / MDX in `src/content/`
- **Package manager:** npm
- **Deploy:** git push to `main` triggers a production build; branches get preview URLs

Local dev: `npm run dev` (hot reload). Build check: `npm run build`.

## Working agreements

**Branches, not `main`.** Do the work on a feature branch. Don't commit directly to
`main` unless explicitly asked.

**Ask before adding a dependency.** This site should stay something one person can
maintain in an afternoon after not touching it for six months. A new package needs to
earn its place — say what it does and what it replaces.

**Verify before declaring done.** Run `npm run build` and confirm it passes. If you
have browser access, load the affected page and check it actually renders as intended
rather than assuming the diff was sufficient.

**Small, reviewable diffs.** Prefer several focused changes over one sweeping refactor.
If a task turns out to be larger than it looked, say so and propose a sequence rather
than silently expanding scope.

**Don't reformat files you weren't asked to touch.** Whitespace-only churn makes review
harder.

## Design direction

The site should read as considered and specific, not as a template with the colors
swapped. Concretely:

- **Restraint over decoration.** One memorable element per page, everything around it
  quiet. Cut anything that doesn't carry information.
- **Typography is the personality.** Type choices and scale do the work; avoid reaching
  for gradients, glass effects, or drop shadows to create interest.
- **Structure encodes meaning.** Numbered markers, eyebrows, and dividers are only used
  where the content genuinely has that shape. Don't number a list that isn't a sequence.
- **Motion is deliberate and minimal.** Prefer no animation to incidental animation.
  Respect `prefers-reduced-motion` wherever motion exists.
- **Density is fine.** The audience is technical and reads. Don't pad content out into
  oversized hero sections with three words in them.

When implementing a design produced elsewhere (e.g. in Claude Design), follow it exactly.
Flag anything that doesn't translate cleanly rather than improvising a substitute.

## Quality floor

Every change ships with these intact. Don't ask, just maintain them:

- Responsive down to 375px width
- Visible keyboard focus states; navigable without a mouse
- Semantic HTML; images have meaningful `alt` text
- No layout shift on load
- Lighthouse performance and accessibility both ≥ 95
- No client-side JS on a page that doesn't need it

## Writing and copy

The prose on this site is written by a person. Don't generate it.
- Copy comes from the repo owner. Your job is to place it, structure it, and mark it up — not to author it.
- Where copy is missing, leave a marked gap. Use a visible TODO(copy): placeholder describing what belongs there and roughly how long it should be. Never fill it with plausible filler.
- Structural text is fair game: nav labels, button text, alt text, error and empty states, meta descriptions. Follow the rules below for those.


## Content boundaries

- Nothing about the specifics of professional work beyond what is already public.
- No client, employer, or colleague details.
- No credentials, tokens, API keys, or private endpoints in the repo — including in
  examples, comments, or commit messages.
- Contact details on the site are intentional and current; don't change them.

## Repository conventions

- Commits: imperative mood, one logical change per commit (`Add writing index page`,
  not `updates`).
- Filenames: lowercase, hyphen-separated.
- Content lives in `src/content/`; components in `src/components/`; anything served
  as-is in `public/`.
- Prose in Markdown wraps at a readable width; don't reflow existing files wholesale.