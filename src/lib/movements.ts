/** The seven curriculum movements from CLAUDE.md's Phase 2, keyed by the
 *  weeks each one covers. Derived from `week` rather than stored in
 *  frontmatter, since the mapping is fixed once and shouldn't need to be
 *  repeated across twelve content files. */
export const MOVEMENTS = [
  { letter: "A", title: "What is an apology?", weeks: [1] },
  { letter: "B", title: "What is an apology made of?", weeks: [2, 3] },
  { letter: "C", title: "Why do apologies fail?", weeks: [4, 5] },
  { letter: "D", title: "How does context change an apology?", weeks: [6, 7] },
  {
    letter: "E",
    title: "Who has the power to apologise, demand one, or reject one?",
    weeks: [8, 9],
  },
  { letter: "F", title: "What happens after sorry?", weeks: [10, 11] },
  { letter: "G", title: "Can a perfect apology exist at all?", weeks: [12] },
] as const;

export type Movement = (typeof MOVEMENTS)[number];

/** Group a list of week-bearing items into the seven movements, in order,
 *  dropping any movement with nothing published in it. Items within a
 *  movement keep whatever order they arrived in. */
export function groupByMovement<T extends { data: { week: number } }>(
  items: T[],
): { movement: Movement; items: T[] }[] {
  return MOVEMENTS.map((movement) => ({
    movement,
    items: items.filter((item) => (movement.weeks as readonly number[]).includes(item.data.week)),
  })).filter((group) => group.items.length > 0);
}
