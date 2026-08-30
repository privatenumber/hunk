import type { HunkDiffBodyProps } from "./types";
/** Render one diff file body without owning navigation, app chrome, or global shortcuts. */
export declare function HunkDiffBody({ file, layout, width, theme, showLineNumbers, showHunkHeaders, tabWidth, hunkGap, wrapLines, horizontalOffset, highlight, selectedHunkIndex, }: HunkDiffBodyProps): import("react").ReactNode;
