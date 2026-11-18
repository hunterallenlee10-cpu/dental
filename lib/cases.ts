// DRAFT: sample case, replace. Files 64 to 83 came with the design template and are not this practice's work.
import type { PhotoId } from "./photos";

export type SampleCase = { n: string; before: PhotoId; after: PhotoId; treatment: string };

/** Case 07 goes first: it is the most dramatic. */
export const sampleCases: SampleCase[] = [
  { n: "07", before: "76", after: "77", treatment: "Porcelain veneers" },
  { n: "01", before: "64", after: "65", treatment: "Porcelain veneers" },
  { n: "02", before: "66", after: "67", treatment: "Porcelain veneers" },
  { n: "03", before: "68", after: "69", treatment: "Porcelain veneers" },
  { n: "04", before: "70", after: "71", treatment: "Porcelain veneers" },
  { n: "05", before: "72", after: "73", treatment: "Porcelain veneers" },
  { n: "06", before: "74", after: "75", treatment: "Porcelain veneers" },
  { n: "08", before: "78", after: "79", treatment: "Porcelain veneers" },
  { n: "09", before: "80", after: "81", treatment: "Porcelain veneers" },
];

export const wideCase: SampleCase = { n: "10", before: "82", after: "83", treatment: "Porcelain veneers" };
