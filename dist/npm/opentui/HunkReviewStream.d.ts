import type { HunkReviewStreamProps } from "./types";
/** Render a top-to-bottom multi-file review stream without Hunk's app shell, keybindings, or scrolling. */
export declare function HunkReviewStream({ files, layout, width, theme, selection, showFileHeaders, showFileSeparators, showLineNumbers, showHunkHeaders, tabWidth, fileGap, hunkGap, wrapLines, horizontalOffset, highlight, onSelectionChange, }: HunkReviewStreamProps): import("react").ReactNode;
