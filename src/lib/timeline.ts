import type { CollectionEntry } from "astro:content";

export interface TimelineWeek {
  week: number;
  date: Date;
  lecture: CollectionEntry<"lectures">;
  lab?: CollectionEntry<"sessions">;
  assessment?: CollectionEntry<"assessments">;
}

/** One row per taught week, in order, joining that week's lecture to its lab
 *  and/or assessment (if any). Labs have no `due` field of their own — a lab
 *  runs during its own teaching week, so its date is the week's lecture date. */
export function buildTimeline(
  lectures: CollectionEntry<"lectures">[],
  labs: CollectionEntry<"sessions">[],
  assessments: CollectionEntry<"assessments">[],
): TimelineWeek[] {
  return lectures
    .slice()
    .sort((a, b) => a.data.week - b.data.week)
    .map((lecture) => ({
      week: lecture.data.week,
      date: lecture.data.date,
      lecture,
      lab: labs.find((lab) => lab.data.week === lecture.data.week),
      assessment: assessments.find((assessment) => assessment.data.week === lecture.data.week),
    }));
}
