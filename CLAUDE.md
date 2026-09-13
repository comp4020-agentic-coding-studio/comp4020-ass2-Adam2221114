# Assignment 2 — Development Workflow

This project is a Slop University course website for COMP4020/8020 Assignment 2.

The final artefact must present one coherent, niche university course taught across twelve dated teaching weeks.

Do not treat this as a normal website-generation task. Course design comes before large-scale content generation.

## Core Working Rules

Work through this project in phases.

Do not skip ahead when important decisions from the current phase have not yet been established.

Do not generate the entire course or all twelve teaching weeks in one pass.

Do not silently replace an established course-design decision. If a previous decision needs to change, identify the conflict and update the relevant course structure deliberately.

Do not optimise for completion alone. Finished content that is repetitive, generic, disconnected, or inconsistent with the course concept must be revised.

The starter platform, content model, generated API, SlopU identity, and other fixed platform requirements are documented in `README.md`. Preserve them unless the assignment explicitly permits a change.

---

# Phase 1 — Course Concept

## Course Title

**The Perfect Apology**

## Course Level

**SLOP8xxx — Postgraduate**

Use the three digits already assigned by the starter repository and choose `8` as the first digit.

The course is positioned at postgraduate level because students are expected to analyse difficult social situations, compare competing interpretations, and justify design decisions rather than simply learn a formula for saying sorry.

---

## One-Line Premise

**A course about why apologies succeed, why they fail, and what responsibility, language, timing, power and repair have to do with it.**

---

## Central Course Question

**What makes an apology actually work?**

This question should remain visible throughout the semester.

The course should not begin with a fixed formula for a “good apology”. Instead, each week should make the answer more complicated.

By the end of the course, students should be able to explain why the same apology can succeed in one situation and fail in another.

---

## Central Idea

Everyone knows how to say “sorry”, but saying sorry and making a successful apology are not the same thing.

An apology can fail because of:

* what is said
* what is avoided
* who is speaking
* who is listening
* when it is delivered
* whether it is public or private
* differences in power
* whether responsibility is actually accepted
* whether anything changes afterwards

The course studies apology as a designed response to harm rather than as a single sentence.

The semester gradually moves from the language of apology towards the larger question of responsibility and repair.

---

## Intended Students

The course is designed for students interested in:

* communication
* language
* social behaviour
* online culture
* workplace communication
* public relations
* conflict
* design of human interactions

No specialist background is required.

Students should be willing to examine ordinary situations closely and question behaviours that initially seem obvious.

---

## Why the Course Is Niche

This is not a general communication course, psychology course, conflict-resolution course, or public-relations course.

The entire semester focuses on one narrow human act:

**the apology.**

The course explores that act deeply enough to study its language, structure, context, timing, audience, medium, power relationships, failure modes and consequences.

Its narrow focus gives the course a distinct identity while still providing enough complexity for a twelve-week semester.

---

## What Students Should Understand Differently After Twelve Weeks

At the beginning of the semester, a student may think:

> A good apology means admitting what you did wrong, saying sorry and promising not to do it again.

By the end of the semester, students should understand that there is no universal apology formula.

They should be able to recognise that:

* acknowledging harm is different from acknowledging intention
* explaining behaviour can clarify responsibility or weaken it
* an apology can serve the speaker more than the person harmed
* private and public apologies operate differently
* power changes who is expected to apologise and who is allowed to refuse
* timing and medium can change the meaning of the same words
* forgiveness is not something an apology automatically earns
* saying sorry and repairing harm are different actions
* sometimes the most responsible response is not an immediate apology
* the success of an apology cannot be judged only from the wording

The final course should therefore complicate the idea of a “perfect apology” rather than reveal a single perfect script.

---

## Course Position

The course should not operate as self-help advice.

Avoid framing lessons as:

* “five steps to the perfect apology”
* “how to always make people forgive you”
* “the secret formula for saying sorry”
* generic advice about being authentic, empathetic or a good communicator

Instead, students should examine cases, make distinctions, compare alternatives and justify decisions.

The course should regularly allow more than one defensible answer.

---

## Voice and Tone

The course voice should be:

* direct
* observant
* slightly deadpan
* curious
* specific
* occasionally humorous
* academically serious without sounding overly academic

Prefer concrete situations over abstract motivational language.

The course may use familiar examples from friendships, workplaces, text messages, public statements and online culture, but examples must serve a teaching purpose.

Avoid generic AI-style phrases such as:

* “communication is key”
* “in today's fast-paced world”
* “it is important to remember”
* “there is no one-size-fits-all approach”
* “at the end of the day”
* “authenticity is essential”

The writing should sound like someone has actually thought carefully about apologies rather than generated generic communication advice.

---

## Semester Direction

The semester should broadly move through this progression:

**What is an apology?**

→ **What is an apology made of?**

→ **Why do apologies fail?**

→ **How does context change an apology?**

→ **Who has the power to apologise, demand one, or reject one?**

→ **What happens after sorry?**

→ **Can a perfect apology exist at all?**

Week 12 should return to the title of the course and allow students to reconsider what “perfect” means after everything they have learned.

---

## Phase 2 — Curriculum Structure

Design the twelve-week progression before writing complete weekly pages.

For every teaching week, establish:

* week title
* central question
* key concept
* how the week differs from other weeks
* how it builds on earlier material
* how it prepares for later material

The twelve weeks must form a progression.

They must not behave like twelve independent articles or twelve copies of the same lesson with different examples.

Later weeks should reuse, challenge, extend, or complicate ideas introduced earlier.

Where appropriate, the final part of the course should return to questions introduced near the beginning and allow students to answer them differently.

---

## Phase 3 — Assessment Design

Design the assessment structure before completing the full curriculum content.

For every assessment, establish:

* title
* task
* purpose
* weight
* relevant course concepts
* relationship to the teaching sequence

Assessment weights must total 100%.

Every assessment must test ideas genuinely taught by the course.

Avoid generic tasks that could be moved unchanged into an unrelated university course.

Assessment should reinforce the identity of this particular course.

---

## Phase 4 — Course Design Principles

Before large-scale content generation, establish the principles that define a good version of this course.

These principles should be based on course-design decisions rather than generic software-development advice.

The course should normally satisfy the following principles:

* every teaching week introduces a genuinely different problem, question, or conceptual development
* later material builds on earlier material rather than resetting each week
* examples have a teaching purpose rather than acting as decoration
* abstract claims should be supported by concrete cases where appropriate
* assessment directly connects to ideas taught in the course
* course content stays focused on the central idea
* repeated filler should be removed
* generic motivational or educational language should be avoided
* the course should have a recognisable and consistent voice
* pages should not repeat the same argument and structure simply because the content model allows it

Separate important principles into two groups:

1. principles that require human judgement and remain rules in `CLAUDE.md`
2. promises that can be reliably checked and should become tests in `spec/`

Do not create a mechanical test for a subjective quality simply to make it appear measurable.

---

## Phase 5 — Harness and Checks

Use `CLAUDE.md` and `spec/` to protect meaningful course-design decisions.

Tests should represent promises that matter to the course.

Do not add tests only because something is easy to count.

Appropriate mechanical checks may include:

* exactly twelve dated teaching weeks
* assessment weights total 100%
* at least one real lecture deck exists
* the deck is linked from the relevant course content
* required course metadata is present
* the assigned SLOP course-code digits are preserved
* starter placeholder content has been removed
* required relationships between assessments, weeks, or course concepts remain valid
* important internal links remain valid

Do not attempt to mechanically prove subjective qualities such as:

* whether the prose is interesting
* whether the course voice is compelling
* whether two weeks feel sufficiently different
* whether an example is insightful
* whether the curriculum feels coherent to a student

Those qualities require human review.

---

## Phase 6 — Content Architecture

Inspect the starter content model before producing large amounts of content.

Plan how the course uses:

* home page
* twelve teaching weeks
* lectures
* lecture decks
* assessments
* policies
* navigation
* course-specific pages
* course-specific components

Use the provided content model rather than rebuilding the platform unnecessarily.

New pages or components should exist because the course needs them, not merely to make the site appear more complex.

Do not replace fixed SlopU platform features unless the brief or starter explicitly permits it.

---

## Phase 7 — Content Production

Produce course content incrementally.

Prefer creating and reviewing small groups of weeks rather than generating all twelve at once.

After each group, review:

* whether the material still belongs to the same course
* whether ideas are progressing rather than repeating
* whether the voice remains consistent
* whether content has become generic or formulaic
* whether earlier concepts are being reused appropriately
* whether the transition to later material still makes sense
* whether a student could understand why this material appears at this point in the semester

Do not preserve weak content merely because it already exists.

Rewrite or remove content that does not contribute to the course.

Completion is not evidence of quality.

---

## Phase 8 — Course-Specific Experience

Create at least one real lecture deck and link it correctly from the relevant lecture or week page.

Course-specific components, interactions, artwork, visual systems, or unusual page structures may be added when they strengthen the teaching idea.

Do not add visual or interactive complexity purely for novelty.

The finished site should feel like a website for this particular course, not the starter template with nouns replaced.

Visual design should support content hierarchy, readability, and course identity.

---

## Phase 9 — Human Review and Browser Testing

A successful build is not proof that the course is successful.

Before considering the artefact complete, inspect the site as both:

* a prospective student deciding whether to take the course
* a marker moving quickly through different parts of the site

Review at least:

* home page
* several non-adjacent teaching weeks
* assessment content
* lecture deck
* policies
* navigation
* desktop viewport
* mobile viewport

Check technical behaviour and curriculum quality separately.

During human review, specifically look for:

* repetitive weeks
* generic AI-style prose
* abrupt changes in voice
* concepts introduced without preparation
* assessments disconnected from teaching
* pages that exist only to fill the template
* inconsistent terminology
* weak transitions between weeks
* visual problems that automated checks do not expose

Run the required project checks:

```bash
pnpm check
pnpm check:evidence
```

Fix both implementation failures and obvious course-design inconsistencies before shipping.

---

## Phase 10 — Process Evidence and Shipping

`PROCESS.md` must describe the real development process.

Do not reconstruct a fictional process after the site has already been completed.

Preserve meaningful commits throughout development.

Important course-design decisions should appear in the commit history near the point where they were made.

The final `PROCESS.md` should explain:

* what this project decided a good university course should look like
* why important curriculum decisions were made
* how the chosen course topic changed the way the agent was directed
* which decisions were encoded in `CLAUDE.md`
* which promises became tests in `spec/`
* which qualities were deliberately left to human judgement
* where generated work was rejected, revised, or redirected
* why one decision was preferred over an obvious alternative
* how the final result was evaluated before being accepted

Support significant claims with relevant commit citations.

Before shipping:

* ensure `pnpm check` passes
* ensure `pnpm check:evidence` passes
* verify the public GitHub Pages deployment
* verify important pages at both marking viewports
* confirm the deployed artefact matches the repository being submitted

---

## Course-Specific Rules

This section must evolve as the course concept becomes established.

Once a course-design decision is accepted, record the important long-lived rules here so later work does not dilute the original idea.

Course-specific rules should describe things such as:

* what every week must or must not do
* what kinds of explanations should be avoided
* how examples should be used
* how later weeks should relate to earlier concepts
* what makes an assessment appropriate for this course
* what vocabulary or conceptual distinctions must remain consistent
* what would make content feel out of scope

Do not invent course-specific rules before the relevant course-design decision has actually been made.

When these rules are established, prefer precise statements over vague instructions such as “make it engaging”, “make it professional”, or “make it better”.
