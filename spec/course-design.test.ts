import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Phase 4 (CLAUDE.md) names seven promises specific and mechanical enough to
// check here. These tests assert what the build actually produced
// (dist/api), the same contract data-integrity.test.ts reads, not the source
// markdown directly — so they stay true to "test the site that shipped."

interface ApiNode {
  id: string;
  type: string;
  related: string[];
  meta?: Record<string, unknown>;
}

interface ApiEdge {
  from: string;
  to: string;
}

interface CourseApi {
  course: {
    code: string;
  };
  nodes: ApiNode[];
  edges: ApiEdge[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const nodeBody = (id: string): string => {
  const node = JSON.parse(readFileSync(resolve(`dist/api/${id}.json`), "utf8")) as { body?: string };
  return node.body ?? "";
};

const byType = (type: string) => api.nodes.filter((node) => node.type === type);

const expectTwelveDistinctWeeks = (type: string) => {
  const weeks = byType(type).map((node) => node.meta?.week);
  expect(weeks, `${type} should have exactly twelve entries`).toHaveLength(12);
  expect(new Set(weeks).size, `${type} weeks must not repeat`).toBe(12);
  for (let week = 1; week <= 12; week++) {
    expect(weeks, `${type} is missing week ${week}`).toContain(week);
  }
};

describe("banned phrases", () => {
  // Phase 1's list of generic AI-style phrases the course voice must avoid.
  const banned = [
    "communication is key",
    "in today's fast-paced world",
    "it is important to remember",
    "there is no one-size-fits-all approach",
    "at the end of the day",
    "authenticity is essential",
  ];

  // Derived live from dist/api/index.json at test-run time, not a hardcoded
  // id list, so this set grows to cover every session, lecture and
  // assessment as they're authored, not just the placeholders that exist
  // today.
  const taughtContent = api.nodes.filter((node) =>
    ["sessions", "lectures", "assessments"].includes(node.type),
  );

  it("has at least one node to check", () => {
    // Guards against the it.each below silently running zero cases (and so
    // reporting green) if the taught-content set were ever empty.
    expect(taughtContent.length).toBeGreaterThan(0);
  });

  it.each(taughtContent.map((node) => [node.id]))("%s avoids the banned-phrase list", (id) => {
    const body = nodeBody(id).toLowerCase();
    for (const phrase of banned) {
      expect(body, `${id} contains banned phrase "${phrase}"`).not.toContain(phrase);
    }
  });
});

describe("twelve teaching weeks", () => {
  it("has exactly twelve dated sessions, one per week", () => {
    expectTwelveDistinctWeeks("sessions");
  });

  it("has exactly twelve dated lectures, one per week", () => {
    expectTwelveDistinctWeeks("lectures");
  });
});

describe("assessment weights", () => {
  it("sum to exactly 100", () => {
    const total = byType("assessments").reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});

describe("assessment connections", () => {
  it("every assessment has an edge into a session or a lecture", () => {
    const assessments = byType("assessments");
    expect(assessments.length, "expected at least one assessment").toBeGreaterThan(0);
    for (const assessment of assessments) {
      const connected = api.edges.some(
        (edge) =>
          (edge.from === assessment.id || edge.to === assessment.id) &&
          [edge.from, edge.to].some(
            (id) => id !== assessment.id && (id.startsWith("sessions/") || id.startsWith("lectures/")),
          ),
      );
      expect(connected, `${assessment.id} has no related session or lecture`).toBe(true);
    }
  });
});

describe("course code", () => {
  it("keeps the assigned last three digits and the postgraduate level digit", () => {
    expect(api.course.code, "last three digits must stay 003").toMatch(/003$/);
    expect(api.course.code.charAt(4), "level digit must be 8 (postgraduate)").toBe("8");
  });
});

describe("starter content", () => {
  it.each(api.nodes.map((node) => [node.id]))("%s has no STARTER_CONTENT marker left", (id) => {
    expect(nodeBody(id)).not.toContain("STARTER_CONTENT");
  });
});

describe("lecture deck", () => {
  const linked = byType("lectures").filter((node) => typeof node.meta?.slides === "string");

  it("has at least one lecture linking to a deck", () => {
    expect(linked.length, "no lecture links a deck").toBeGreaterThan(0);
  });

  const deckSlugs = linked
    .map((node) => /^\/decks\/([a-z0-9-]+)\/$/.exec(node.meta!.slides as string)?.[1])
    .filter((slug): slug is string => slug !== undefined);

  it("every linked slides path matches the expected /decks/<slug>/ shape", () => {
    expect(deckSlugs.length, "a lecture's slides path doesn't match /decks/<slug>/").toBe(linked.length);
  });

  // A qualifying deck must exist on disk, carry no STARTER_CONTENT marker,
  // and have real slide structure: at least a few slides, each with content
  // beyond a bare heading or an MDX comment. Slide count comes from splitting
  // on the `---` lines the deck format itself uses as slide boundaries (the
  // first pair delimits frontmatter, not a slide), so this reads the deck's
  // own structure rather than counting words.
  it.each(deckSlugs.map((slug) => [slug]))("%s is a real, finished deck", (slug) => {
    const path = resolve(`src/decks/${slug}.deck.mdx`);
    expect(existsSync(path), `${path} does not exist`).toBe(true);

    const source = readFileSync(path, "utf8");
    expect(source, `${slug} still has a STARTER_CONTENT marker`).not.toContain("STARTER_CONTENT");

    const [, , ...slides] = source.split(/^---$/m);
    expect(slides.length, `${slug} has too few slides for a lecture deck`).toBeGreaterThanOrEqual(3);

    slides.forEach((slide, index) => {
      const content = slide
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#") && !line.startsWith("{/*"));
      expect(
        content.length,
        `${slug} slide ${index + 1} has no content beyond a heading or comment`,
      ).toBeGreaterThan(0);
    });
  });
});
