import { countDiffStats } from "../core/changeset/diffFile";
import type { DiffFile } from "../core/changeset/model";
import type { HunkDiffFile, HunkDiffFileInput } from "./types";
/** Count visible additions and deletions from Pierre metadata. */
export declare const countHunkDiffStats: typeof countDiffStats;
/** Build Hunk's public OpenTUI file model with normalized paths and default stats. */
export declare function createHunkDiffFile(input: HunkDiffFileInput): HunkDiffFile;
/** Adapt the public OpenTUI file shape into Hunk's internal review file model. */
export declare function toInternalDiffFile(diff: HunkDiffFileInput): DiffFile;
/** Parse unified diff text into Hunk's public OpenTUI file model. */
export declare function createHunkDiffFilesFromPatch(patchText: string, sourceId?: string): HunkDiffFile[];
/** Adapt a list of public OpenTUI files into Hunk's internal review file model. */
export declare function toInternalDiffFiles(files: HunkDiffFileInput[]): DiffFile[];
