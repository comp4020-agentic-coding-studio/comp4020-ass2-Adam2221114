# Process overview

Written by me, for a reader: how I got from the brief to the harness and
agentic workflow behind this submission.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

A Slop University course site for **The Perfect Apology** (SLOP8xxx), a
postgraduate course on why apologies succeed or fail — responsibility,
language, timing, power, and repair — built on the starter's Astro content
model and shipped as twelve dated teaching weeks grouped into seven
movements.

## How I got here

I worked the brief in phases rather than generating the whole course in one
pass, establishing course-design decisions before content: the concept and
level in
[`e0b1b21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/e0b1b21),
the twelve-week curriculum structure in
[`5f07ae6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/5f07ae6),
assessment weights and design in
[`57a26b3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/57a26b3),
and the human-vs-mechanical course-design principles in
[`bad62d1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/bad62d1).

Before writing content, I hardened the spec tests that check the mechanical
promises made in those principles
([`b293228`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/b293228),
[`9d9eee9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/9d9eee9)),
so later content generation had something automated to fail against rather
than relying on my own re-reading.

Content replaced the starter's placeholders in stages: the content
architecture in
[`aab9d25`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/aab9d25),
the twelve weeks across four batches
([`37fd039...d30ca07`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/compare/37fd039...d30ca07)),
a correction to Week 3 once I noticed it stated a settled hierarchy the course
concept treats as contested
([`7d93d9e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/7d93d9e)),
the three assessments' own pages
([`43d9e3a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/43d9e3a)),
and the people/policies pages
([`24dbb9b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/24dbb9b)).
Finally I grouped the twelve weeks into the seven movements the semester
actually argues through and surfaced the Central Course Question on the home
page
([`f01890e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Adam2221114/commit/f01890e)).

I knew the result was right by running the project's own checks after each
phase — `pnpm check` (typecheck plus the Phase 5 spec suite) and
`pnpm check:evidence` — rather than trusting my own read of the rendered
pages, and by fixing what those checks caught: starter artwork and marker
comments the spec tests don't scan for, single-item movement grids rendering
an empty grid track, and pages silently missing an `h1` because `heroTitle`
alone is a no-op without a `heroImage` in the vendored layout.

Screenshots are welcome where one carries the point better than a sentence does.
Commit the file to this repo and link it with a **relative** path, which is what
makes it render on GitHub: `![alt text](docs/before.png)`. Images don't count
towards the word count and don't replace the citation.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
