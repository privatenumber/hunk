import {
  DEFAULT_TAB_WIDTH,
  buildDiffFile,
  changesetFromPatch,
  createSkippedBinaryMetadata,
  createSkippedLargeMetadata,
  escapeUntrackedPatchPath,
  findSidecarFileContext,
  isProbablyBinaryFile,
  loadSidecarContext
} from "./index-k2v7zfxe.js";
import"./index-0v6na3yp.js";

// src/core/changeset/loaders.ts
import { parseDiffFromFile } from "@pierre/diffs";
// node_modules/.bun/diff@8.0.3/node_modules/diff/libesm/diff/base.js
class Diff {
  diff(oldStr, newStr, options = {}) {
    let callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if ("callback" in options) {
      callback = options.callback;
    }
    const oldString = this.castInput(oldStr, options);
    const newString = this.castInput(newStr, options);
    const oldTokens = this.removeEmpty(this.tokenize(oldString, options));
    const newTokens = this.removeEmpty(this.tokenize(newString, options));
    return this.diffWithOptionsObj(oldTokens, newTokens, options, callback);
  }
  diffWithOptionsObj(oldTokens, newTokens, options, callback) {
    var _a;
    const done = (value) => {
      value = this.postProcess(value, options);
      if (callback) {
        setTimeout(function() {
          callback(value);
        }, 0);
        return;
      } else {
        return value;
      }
    };
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let editLength = 1;
    let maxEditLength = newLen + oldLen;
    if (options.maxEditLength != null) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }
    const maxExecutionTime = (_a = options.timeout) !== null && _a !== undefined ? _a : Infinity;
    const abortAfterTimestamp = Date.now() + maxExecutionTime;
    const bestPath = [{ oldPos: -1, lastComponent: undefined }];
    let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options);
    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
    }
    let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
    const execEditLength = () => {
      for (let diagonalPath = Math.max(minDiagonalToConsider, -editLength);diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        let basePath;
        const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
        if (removePath) {
          bestPath[diagonalPath - 1] = undefined;
        }
        let canAdd = false;
        if (addPath) {
          const addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }
        const canRemove = removePath && removePath.oldPos + 1 < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = undefined;
          continue;
        }
        if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
          basePath = this.addToPath(addPath, true, false, 0, options);
        } else {
          basePath = this.addToPath(removePath, false, true, 1, options);
        }
        newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options);
        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
        } else {
          bestPath[diagonalPath] = basePath;
          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }
          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }
      editLength++;
    };
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback(undefined);
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        const ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  }
  addToPath(path, added, removed, oldPosInc, options) {
    const last = path.lastComponent;
    if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: last.count + 1, added, removed, previousComponent: last.previousComponent }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: 1, added, removed, previousComponent: last }
      };
    }
  }
  extractCommon(basePath, newTokens, oldTokens, diagonalPath, options) {
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options)) {
      newPos++;
      oldPos++;
      commonCount++;
      if (options.oneChangePerToken) {
        basePath.lastComponent = { count: 1, previousComponent: basePath.lastComponent, added: false, removed: false };
      }
    }
    if (commonCount && !options.oneChangePerToken) {
      basePath.lastComponent = { count: commonCount, previousComponent: basePath.lastComponent, added: false, removed: false };
    }
    basePath.oldPos = oldPos;
    return newPos;
  }
  equals(left, right, options) {
    if (options.comparator) {
      return options.comparator(left, right);
    } else {
      return left === right || !!options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  }
  removeEmpty(array) {
    const ret = [];
    for (let i = 0;i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  }
  castInput(value, options) {
    return value;
  }
  tokenize(value, options) {
    return Array.from(value);
  }
  join(chars) {
    return chars.join("");
  }
  postProcess(changeObjects, options) {
    return changeObjects;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(lastComponent, newTokens, oldTokens) {
    const components = [];
    let nextComponent;
    while (lastComponent) {
      components.push(lastComponent);
      nextComponent = lastComponent.previousComponent;
      delete lastComponent.previousComponent;
      lastComponent = nextComponent;
    }
    components.reverse();
    const componentLen = components.length;
    let componentPos = 0, newPos = 0, oldPos = 0;
    for (;componentPos < componentLen; componentPos++) {
      const component = components[componentPos];
      if (!component.removed) {
        if (!component.added && this.useLongestToken) {
          let value = newTokens.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            const oldValue = oldTokens[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = this.join(value);
        } else {
          component.value = this.join(newTokens.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
      }
    }
    return components;
  }
}

// node_modules/.bun/diff@8.0.3/node_modules/diff/libesm/diff/line.js
class LineDiff extends Diff {
  constructor() {
    super(...arguments);
    this.tokenize = tokenize;
  }
  equals(left, right, options) {
    if (options.ignoreWhitespace) {
      if (!options.newlineIsToken || !left.includes(`
`)) {
        left = left.trim();
      }
      if (!options.newlineIsToken || !right.includes(`
`)) {
        right = right.trim();
      }
    } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
      if (left.endsWith(`
`)) {
        left = left.slice(0, -1);
      }
      if (right.endsWith(`
`)) {
        right = right.slice(0, -1);
      }
    }
    return super.equals(left, right, options);
  }
}
var lineDiff = new LineDiff;
function diffLines(oldStr, newStr, options) {
  return lineDiff.diff(oldStr, newStr, options);
}
function tokenize(value, options) {
  if (options.stripTrailingCr) {
    value = value.replace(/\r\n/g, `
`);
  }
  const retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (let i = 0;i < linesAndNewlines.length; i++) {
    const line = linesAndNewlines[i];
    if (i % 2 && !options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      retLines.push(line);
    }
  }
  return retLines;
}

// node_modules/.bun/diff@8.0.3/node_modules/diff/libesm/patch/create.js
var INCLUDE_HEADERS = {
  includeIndex: true,
  includeUnderline: true,
  includeFileHeaders: true
};
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  let optionsObj;
  if (!options) {
    optionsObj = {};
  } else if (typeof options === "function") {
    optionsObj = { callback: options };
  } else {
    optionsObj = options;
  }
  if (typeof optionsObj.context === "undefined") {
    optionsObj.context = 4;
  }
  const context = optionsObj.context;
  if (optionsObj.newlineIsToken) {
    throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  }
  if (!optionsObj.callback) {
    return diffLinesResultToPatch(diffLines(oldStr, newStr, optionsObj));
  } else {
    const { callback } = optionsObj;
    diffLines(oldStr, newStr, Object.assign(Object.assign({}, optionsObj), { callback: (diff) => {
      const patch = diffLinesResultToPatch(diff);
      callback(patch);
    } }));
  }
  function diffLinesResultToPatch(diff) {
    if (!diff) {
      return;
    }
    diff.push({ value: "", lines: [] });
    function contextLines(lines) {
      return lines.map(function(entry) {
        return " " + entry;
      });
    }
    const hunks = [];
    let oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
    for (let i = 0;i < diff.length; i++) {
      const current = diff[i], lines = current.lines || splitLines(current.value);
      current.lines = lines;
      if (current.added || current.removed) {
        if (!oldRangeStart) {
          const prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;
          if (prev) {
            curRange = context > 0 ? contextLines(prev.lines.slice(-context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        }
        for (const line of lines) {
          curRange.push((current.added ? "+" : "-") + line);
        }
        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        if (oldRangeStart) {
          if (lines.length <= context * 2 && i < diff.length - 2) {
            for (const line of contextLines(lines)) {
              curRange.push(line);
            }
          } else {
            const contextSize = Math.min(lines.length, context);
            for (const line of contextLines(lines.slice(0, contextSize))) {
              curRange.push(line);
            }
            const hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };
            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }
        oldLine += lines.length;
        newLine += lines.length;
      }
    }
    for (const hunk of hunks) {
      for (let i = 0;i < hunk.lines.length; i++) {
        if (hunk.lines[i].endsWith(`
`)) {
          hunk.lines[i] = hunk.lines[i].slice(0, -1);
        } else {
          hunk.lines.splice(i + 1, 0, "\\ No newline at end of file");
          i++;
        }
      }
    }
    return {
      oldFileName,
      newFileName,
      oldHeader,
      newHeader,
      hunks
    };
  }
}
function formatPatch(patch, headerOptions) {
  if (!headerOptions) {
    headerOptions = INCLUDE_HEADERS;
  }
  if (Array.isArray(patch)) {
    if (patch.length > 1 && !headerOptions.includeFileHeaders) {
      throw new Error("Cannot omit file headers on a multi-file patch. " + "(The result would be unparseable; how would a tool trying to apply " + "the patch know which changes are to which file?)");
    }
    return patch.map((p) => formatPatch(p, headerOptions)).join(`
`);
  }
  const ret = [];
  if (headerOptions.includeIndex && patch.oldFileName == patch.newFileName) {
    ret.push("Index: " + patch.oldFileName);
  }
  if (headerOptions.includeUnderline) {
    ret.push("===================================================================");
  }
  if (headerOptions.includeFileHeaders) {
    ret.push("--- " + patch.oldFileName + (typeof patch.oldHeader === "undefined" ? "" : "\t" + patch.oldHeader));
    ret.push("+++ " + patch.newFileName + (typeof patch.newHeader === "undefined" ? "" : "\t" + patch.newHeader));
  }
  for (let i = 0;i < patch.hunks.length; i++) {
    const hunk = patch.hunks[i];
    if (hunk.oldLines === 0) {
      hunk.oldStart -= 1;
    }
    if (hunk.newLines === 0) {
      hunk.newStart -= 1;
    }
    ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
    for (const line of hunk.lines) {
      ret.push(line);
    }
  }
  return ret.join(`
`) + `
`;
}
function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (typeof options === "function") {
    options = { callback: options };
  }
  if (!(options === null || options === undefined ? undefined : options.callback)) {
    const patchObj = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    if (!patchObj) {
      return;
    }
    return formatPatch(patchObj, options === null || options === undefined ? undefined : options.headerOptions);
  } else {
    const { callback } = options;
    structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, Object.assign(Object.assign({}, options), { callback: (patchObj) => {
      if (!patchObj) {
        callback(undefined);
      } else {
        callback(formatPatch(patchObj, options.headerOptions));
      }
    } }));
  }
}
function splitLines(text) {
  const hasTrailingNl = text.endsWith(`
`);
  const result = text.split(`
`).map((line) => line + `
`);
  if (hasTrailingNl) {
    result.pop();
  } else {
    result.push(result.pop().slice(0, -1));
  }
  return result;
}
// src/core/changeset/loaders.ts
import { resolve as resolvePath } from "node:path";

// src/lib/sourceText.ts
var DEFAULT_SOURCE_TEXT_MAX_BYTES = 1e6;
function logSourceDiagnostic(message, detail) {
  if (detail instanceof Error) {
    console.error(`hunk: ${message}: ${detail.message}`, detail);
    return;
  }
  const firstLine = typeof detail === "string" ? detail.split(`
`).map((line) => line.trim()).find(Boolean) : undefined;
  console.error(firstLine ? `hunk: ${message}: ${firstLine}` : `hunk: ${message}`);
}
async function readFileTextWithLimit(absolutePath, maxBytes) {
  try {
    const file = Bun.file(absolutePath);
    if (!await file.exists()) {
      return null;
    }
    if (file.size > maxBytes) {
      return { kind: "too-large", maxBytes };
    }
    return await file.text();
  } catch (error) {
    logSourceDiagnostic(`failed to read source file ${absolutePath}`, error);
    return null;
  }
}

// src/core/changeset/fileSource.ts
class SourceTextTooLargeError extends Error {
  maxBytes;
  constructor(maxBytes) {
    super(`Source text exceeds ${maxBytes} bytes.`);
    this.maxBytes = maxBytes;
    this.name = "SourceTextTooLargeError";
  }
}
async function readFsSpec(spec, maxSourceBytes) {
  const result = await readFileTextWithLimit(spec.absolutePath, maxSourceBytes);
  if (typeof result === "object" && result !== null) {
    throw new SourceTextTooLargeError(result.maxBytes);
  }
  return result;
}
async function readFileSourceSpec(spec, { maxSourceBytes = DEFAULT_SOURCE_TEXT_MAX_BYTES } = {}) {
  if (spec.kind === "none") {
    return null;
  }
  return readFsSpec(spec, maxSourceBytes);
}
function createFileSourceFetcher(specs, { maxSourceBytes = DEFAULT_SOURCE_TEXT_MAX_BYTES } = {}) {
  const cache = new Map;
  return {
    async getFullText(side) {
      if (cache.has(side)) {
        return cache.get(side) ?? null;
      }
      const text = await readFileSourceSpec(specs[side], { maxSourceBytes });
      cache.set(side, text);
      return text;
    }
  };
}

// src/core/run/reviewGap.ts
var DEFAULT_FILE_GAP = 1;
var DEFAULT_HUNK_GAP = 0;

// src/extension-api/types.ts
var HUNK_EXTENSION_USER_ERROR_NAME = "HunkExtensionUserError";

class HunkExtensionUserError extends Error {
  suggestions;
  constructor(message, { suggestions = [] } = {}) {
    super(message);
    this.name = HUNK_EXTENSION_USER_ERROR_NAME;
    this.suggestions = [...suggestions];
  }
}

// src/core/run/errors.ts
class HunkUserError extends HunkExtensionUserError {
  constructor(message, suggestions = []) {
    super(message, { suggestions });
    this.name = "HunkUserError";
  }
}

// src/core/vcs/index.ts
function getDefaultVcsAdapter(catalog) {
  const adapter = catalog.adapters.find((candidate) => candidate.id === catalog.defaultAdapterId);
  if (!adapter) {
    throw new HunkUserError(`Hunk's default ${catalog.defaultAdapterId} backend failed to load.`, [
      "Reinstall Hunk, or report this at https://github.com/modem-dev/hunk/issues."
    ]);
  }
  return adapter;
}
function getConfiguredVcsAdapter(id, catalog) {
  return id ? getVcsAdapter(id, catalog) : getDefaultVcsAdapter(catalog);
}
function getVcsAdapter(id, catalog) {
  const adapter = catalog.adapters.find((candidate) => candidate.id === id);
  if (!adapter) {
    throw new Error(`Unsupported VCS: ${id}`);
  }
  return adapter;
}
function isVcsReviewInput(input) {
  return input.kind === "vcs" || input.kind === "show" || input.kind === "stash-show";
}
function operationFromInput(input) {
  switch (input.kind) {
    case "vcs":
      return { kind: "working-tree-diff", input };
    case "show":
      return { kind: "revision-show", input };
    case "stash-show":
      return { kind: "stash-show", input };
  }
}
function getVcsOperation(adapter, operation) {
  return adapter.operations?.[operation.kind];
}
async function loadVcsReview(adapter, operation, context, catalog) {
  const handler = getVcsOperation(adapter, operation);
  if (!handler) {
    throw createUnsupportedVcsOperationError(adapter, operation.kind, catalog);
  }
  return await handler.load(operation.input, context);
}
function createVcsWatchSignature(adapter, operation, context, catalog) {
  const handler = getVcsOperation(adapter, operation);
  if (!handler) {
    throw createUnsupportedVcsOperationError(adapter, operation.kind, catalog);
  }
  if (!handler.watchSignature) {
    throw new Error(`${adapter.name} does not support watch signatures for ${operation.kind}.`);
  }
  return handler.watchSignature(operation.input, context);
}
function createUnsupportedVcsOperationError(adapter, operationKind, catalog) {
  const supportingAdapter = catalog.adapters.find((candidate) => candidate.operations?.[operationKind]);
  if (operationKind === "stash-show" && supportingAdapter) {
    return new HunkUserError(`\`hunk stash show\` requires ${supportingAdapter.name} VCS mode.`, [
      `Set \`vcs = "${supportingAdapter.id}"\` in Hunk config, then try again.`
    ]);
  }
  return new HunkUserError(`${adapter.name} does not support ${operationKind}.`, [
    "Use a supported VCS mode or command for this repository."
  ]);
}

// src/core/vcs/untracked.ts
import fs2 from "node:fs";
import { join as join2 } from "node:path";

// src/lib/largeFile.ts
import fs from "node:fs";
import { join } from "node:path";
var LARGE_DIFF_FILE_MAX_BYTES = 1e6;
var LARGE_DIFF_FILE_MAX_LINES = 20000;
var LARGE_DIFF_FILE_SNIFF_BYTES = 256 * 1024;
function countLinesInFile(path, maxBytes, size) {
  let fd;
  try {
    fd = fs.openSync(path, "r");
    const buffer = Buffer.alloc(Math.min(64 * 1024, maxBytes));
    let position = 0;
    let lineCount = 0;
    let lastByte;
    while (position < maxBytes) {
      const bytesToRead = Math.min(buffer.length, maxBytes - position);
      const bytesRead = fs.readSync(fd, buffer, 0, bytesToRead, position);
      if (bytesRead === 0) {
        break;
      }
      position += bytesRead;
      for (let index = 0;index < bytesRead; index += 1) {
        lastByte = buffer[index];
        if (lastByte === 10) {
          lineCount += 1;
        }
      }
    }
    return {
      complete: position >= size,
      lines: lastByte !== undefined && lastByte !== 10 ? lineCount + 1 : lineCount
    };
  } catch {
    return { complete: true, lines: 0 };
  } finally {
    if (fd !== undefined) {
      fs.closeSync(fd);
    }
  }
}
function inspectLargeUntrackedFile(repoRoot, filePath) {
  const absolutePath = join(repoRoot, filePath);
  let stat;
  try {
    stat = fs.statSync(absolutePath);
  } catch {
    return { shouldSkip: false };
  }
  const byteLimit = stat.size > LARGE_DIFF_FILE_MAX_BYTES ? LARGE_DIFF_FILE_MAX_BYTES : LARGE_DIFF_FILE_SNIFF_BYTES;
  const counted = countLinesInFile(absolutePath, byteLimit, stat.size);
  const shouldSkip = stat.size > LARGE_DIFF_FILE_MAX_BYTES || counted.lines > LARGE_DIFF_FILE_MAX_LINES;
  return {
    shouldSkip,
    stats: shouldSkip ? { additions: counted.lines, deletions: 0 } : undefined,
    statsTruncated: shouldSkip ? !counted.complete : undefined
  };
}

// src/core/patch/singleFile.ts
import { parsePatchFiles } from "@pierre/diffs";
function parseSingleFilePatch(patchText, filePath, previousPath) {
  let parsedPatches;
  try {
    parsedPatches = parsePatchFiles(patchText, "patch", true);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse untracked file patch for ${JSON.stringify(filePath)}: ${message}`);
  }
  const metadataFiles = parsedPatches.flatMap((entry) => entry.files);
  if (metadataFiles.length !== 1) {
    throw new Error(`Expected one parsed file for untracked patch ${JSON.stringify(filePath)}, got ${metadataFiles.length}.`);
  }
  const metadata = metadataFiles[0];
  return {
    ...metadata,
    name: filePath,
    prevName: previousPath
  };
}

// src/core/vcs/untracked.ts
function buildSkippedLargeUntrackedDiffFile(filePath, index, sourcePrefix, largeFileCheck) {
  return buildDiffFile(createSkippedLargeMetadata(filePath, "new"), "", index, sourcePrefix, null, {
    isTooLarge: true,
    isUntracked: true,
    stats: largeFileCheck.stats,
    statsTruncated: largeFileCheck.statsTruncated
  });
}
function buildUntrackedPatchText(safePath, mode, contents) {
  const normalizedContents = contents.replaceAll(`\r
`, `
`);
  const endsWithNewline = normalizedContents.endsWith(`
`);
  const lines = normalizedContents === "" ? [] : normalizedContents.split(`
`);
  if (endsWithNewline) {
    lines.pop();
  }
  const patch = [
    `diff --git a/${safePath} b/${safePath}`,
    `new file mode ${mode}`,
    "--- /dev/null\t",
    `+++ b/${safePath}`
  ];
  if (lines.length > 0) {
    patch.push(`@@ -0,0 +1,${lines.length} @@`, ...lines.map((line) => `+${line}`));
    if (!endsWithNewline) {
      patch.push("\\ No newline at end of file");
    }
  }
  return `${patch.join(`
`)}
`;
}
function buildFilesystemUntrackedDiffFile(repoRoot, filePath, index, sourcePrefix) {
  const absolutePath = join2(repoRoot, filePath);
  const safePath = escapeUntrackedPatchPath(filePath);
  let linkTarget = null;
  try {
    if (fs2.lstatSync(absolutePath).isSymbolicLink()) {
      linkTarget = fs2.readlinkSync(absolutePath);
    }
  } catch {}
  if (linkTarget !== null) {
    const patch2 = buildUntrackedPatchText(safePath, "120000", linkTarget);
    return buildDiffFile(parseSingleFilePatch(patch2, filePath), patch2, index, sourcePrefix, null, {
      isUntracked: true
    });
  }
  const largeFileCheck = inspectLargeUntrackedFile(repoRoot, filePath);
  if (largeFileCheck.shouldSkip) {
    return buildSkippedLargeUntrackedDiffFile(filePath, index, sourcePrefix, largeFileCheck);
  }
  if (isProbablyBinaryFile(absolutePath)) {
    return buildDiffFile(createSkippedBinaryMetadata(filePath, "new"), `Binary file skipped: ${filePath}
`, index, sourcePrefix, null, { isBinary: true, isUntracked: true });
  }
  let mode = "100644";
  try {
    if (fs2.statSync(absolutePath).mode & 73) {
      mode = "100755";
    }
  } catch {}
  const patch = buildUntrackedPatchText(safePath, mode, fs2.readFileSync(absolutePath, "utf8"));
  return buildDiffFile(parseSingleFilePatch(patch, filePath), patch, index, sourcePrefix, null, {
    isUntracked: true,
    sourceFetcherBuilder: (file) => file.isBinary ? undefined : createFileSourceFetcher({
      old: { kind: "none" },
      new: { kind: "fs", absolutePath }
    })
  });
}

// src/core/watch/signature.ts
import fs3 from "node:fs";
import { resolve } from "node:path";
function statSignature(path) {
  if (!fs3.existsSync(path)) {
    return `${path}:missing`;
  }
  const stat = fs3.statSync(path);
  return `${path}:${stat.size}:${stat.mtimeMs}:${stat.ino}`;
}
function vcsPatchSignature(input, context) {
  if (!context.vcsCatalog) {
    throw new Error("VCS-backed watch signatures require a composed VCS catalog.");
  }
  const adapter = getConfiguredVcsAdapter(input.options.vcs, context.vcsCatalog);
  const operation = operationFromInput(input);
  return createVcsWatchSignature(adapter, operation, { cwd: context.cwd }, context.vcsCatalog);
}
function computeWatchSignature(input, context) {
  const parts = [input.kind];
  const resolveInputPath = (path) => resolve(context.cwd, path);
  switch (input.kind) {
    case "vcs":
    case "show":
    case "stash-show":
      parts.push(vcsPatchSignature(input, context));
      break;
    case "diff":
    case "difftool":
      parts.push(statSignature(resolveInputPath(input.left)), statSignature(resolveInputPath(input.right)));
      break;
    case "patch":
      if (!input.file || input.file === "-") {
        throw new Error("Watch mode requires a patch file path instead of stdin.");
      }
      parts.push(statSignature(resolveInputPath(input.file)));
      break;
  }
  if (input.options.agentContext && input.options.agentContext !== "-") {
    parts.push(`agent:${statSignature(resolveInputPath(input.options.agentContext))}`);
  }
  return parts.join(`
---
`);
}

// src/core/changeset/loaders.ts
function basename(path) {
  return path.split(/[\\/]/).filter(Boolean).pop() ?? path;
}
function createSourceFetcherBuilder(resolveSpecs) {
  return (file) => {
    if (file.isBinary) {
      return;
    }
    const specs = resolveSpecs(file);
    return specs ? createFileSourceFetcher(specs) : undefined;
  };
}
function orderDiffFiles(files, sidecar) {
  if (!sidecar || sidecar.files.length === 0) {
    return files;
  }
  const ranks = new Map;
  sidecar.files.forEach((file, index) => {
    if (!ranks.has(file.path)) {
      ranks.set(file.path, index);
    }
  });
  return files.map((file, index) => {
    const rankCandidates = [file.path, file.previousPath].filter((path) => Boolean(path)).map((path) => ranks.get(path)).filter((rank) => rank !== undefined);
    return {
      file,
      index,
      rank: rankCandidates.length > 0 ? Math.min(...rankCandidates) : Number.POSITIVE_INFINITY
    };
  }).sort((left, right) => {
    if (left.rank !== right.rank) {
      return left.rank - right.rank;
    }
    return left.index - right.index;
  }).map((entry) => entry.file);
}
function resolveBinaryComparisonType(leftPath, rightPath) {
  if (leftPath === "/dev/null") {
    return "new";
  }
  if (rightPath === "/dev/null") {
    return "deleted";
  }
  return "change";
}
function buildBinaryFileDiffChangeset(input, displayPath, title, leftPath, rightPath, sidecar) {
  return {
    id: `pair:${displayPath}`,
    sourceLabel: input.kind === "difftool" ? "git difftool" : "file compare",
    title,
    agentSummary: sidecar?.summary,
    files: [
      buildDiffFile(createSkippedBinaryMetadata(displayPath, resolveBinaryComparisonType(leftPath, rightPath)), `Binary file skipped: ${basename(input.left)} ↔ ${basename(input.right)}
`, 0, displayPath, sidecar, {
        previousPath: basename(input.left),
        isBinary: true
      })
    ]
  };
}
async function loadFileDiffChangeset(input, sidecar, cwd = process.cwd()) {
  const leftPath = resolvePath(cwd, input.left);
  const rightPath = resolvePath(cwd, input.right);
  const displayPath = input.kind === "difftool" ? input.path ?? basename(input.right) : basename(input.right);
  const title = input.kind === "difftool" ? `git difftool: ${displayPath}` : input.left === input.right ? displayPath : `${basename(input.left)} ↔ ${basename(input.right)}`;
  if (isProbablyBinaryFile(leftPath) || isProbablyBinaryFile(rightPath)) {
    return buildBinaryFileDiffChangeset(input, displayPath, title, leftPath, rightPath, sidecar);
  }
  const leftText = await Bun.file(leftPath).text();
  const rightText = await Bun.file(rightPath).text();
  const oldFile = {
    name: displayPath,
    contents: leftText,
    cacheKey: `${leftPath}:left`
  };
  const newFile = {
    name: displayPath,
    contents: rightText,
    cacheKey: `${rightPath}:right`
  };
  const metadata = parseDiffFromFile(oldFile, newFile, { context: 3 }, true);
  const patch = createTwoFilesPatch(displayPath, displayPath, leftText, rightText, "", "", {
    context: 3
  });
  return {
    id: `pair:${displayPath}`,
    sourceLabel: input.kind === "difftool" ? "git difftool" : "file compare",
    title,
    agentSummary: sidecar?.summary,
    files: [
      buildDiffFile(metadata, patch, 0, displayPath, sidecar, {
        previousPath: basename(input.left),
        sourceFetcherBuilder: createSourceFetcherBuilder(() => ({
          old: { kind: "fs", absolutePath: leftPath },
          new: { kind: "fs", absolutePath: rightPath }
        }))
      })
    ]
  };
}
async function loadVcsChangeset(input, sidecar, cwd, vcsCatalog) {
  const adapter = getConfiguredVcsAdapter(input.options.vcs, vcsCatalog);
  const operation = operationFromInput(input);
  const result = await loadVcsReview(adapter, operation, { cwd }, vcsCatalog);
  const parsedChangeset = changesetFromPatch(result.patchText, result.title, result.sourceLabel, sidecar, result.sourceFetcherBuilder ? { sourceFetcherBuilder: result.sourceFetcherBuilder } : undefined);
  const untrackedFiles = (result.untrackedPaths ?? []).map((filePath, index) => buildFilesystemUntrackedDiffFile(result.repoRoot, filePath, (result.extraFiles?.length ?? 0) + index, result.repoRoot));
  const adapterFiles = [...result.extraFiles ?? [], ...untrackedFiles].map((file, index) => ({
    ...file,
    id: `${file.id}:extra:${index}`,
    agent: findSidecarFileContext(sidecar, file.path, file.previousPath)
  }));
  return {
    changeset: {
      ...parsedChangeset,
      files: [...parsedChangeset.files, ...adapterFiles]
    },
    repoRoot: result.repoRoot
  };
}
async function loadPatchChangeset(input, sidecar, cwd = process.cwd()) {
  const patchText = input.text ?? (!input.file || input.file === "-" ? await new Response(Bun.stdin.stream()).text() : await Bun.file(resolvePath(cwd, input.file)).text());
  const label = input.file && input.file !== "-" ? input.file : "stdin patch";
  return changesetFromPatch(patchText, `Patch review: ${basename(label)}`, label, sidecar);
}
async function loadAppBootstrap(input, { cwd = process.cwd(), customThemes, vcsCatalog } = {}) {
  let initialWatchSignature;
  if (input.options.watch) {
    try {
      if (vcsCatalog || !isVcsReviewInput(input)) {
        initialWatchSignature = computeWatchSignature(input, { cwd, vcsCatalog });
      }
    } catch {}
  }
  const sidecar = await loadSidecarContext(input.options.agentContext, { cwd });
  let changeset;
  let repoRoot;
  switch (input.kind) {
    case "vcs":
    case "show":
    case "stash-show":
      {
        if (!vcsCatalog) {
          throw new Error("VCS-backed reviews require a composed VCS catalog.");
        }
        const result = await loadVcsChangeset(input, sidecar, cwd, vcsCatalog);
        changeset = result.changeset;
        repoRoot = result.repoRoot;
      }
      break;
    case "diff":
      changeset = await loadFileDiffChangeset(input, sidecar, cwd);
      break;
    case "patch":
      changeset = await loadPatchChangeset(input, sidecar, cwd);
      break;
    case "difftool":
      changeset = await loadFileDiffChangeset(input, sidecar, cwd);
      break;
  }
  changeset = {
    ...changeset,
    files: orderDiffFiles(changeset.files, sidecar)
  };
  return {
    input,
    reloadContext: { cwd, repoRoot, initialWatchSignature, vcsCatalog },
    changeset,
    initialMode: input.options.mode ?? "auto",
    initialTheme: input.options.theme,
    customThemes,
    initialShowLineNumbers: input.options.lineNumbers ?? true,
    initialTabWidth: input.options.tabWidth ?? DEFAULT_TAB_WIDTH,
    initialFileGap: input.options.fileGap ?? DEFAULT_FILE_GAP,
    initialHunkGap: input.options.hunkGap ?? DEFAULT_HUNK_GAP,
    initialWrapLines: input.options.wrapLines ?? false,
    initialShowHunkHeaders: input.options.hunkHeaders ?? true,
    initialShowMenuBar: input.options.menuBar ?? true,
    initialSidebar: input.options.sidebar ?? "auto",
    initialShowAgentNotes: input.options.agentNotes ?? false,
    initialCopyDecorations: input.options.copyDecorations ?? false,
    initialCursorLine: input.options.cursorLine ?? "row"
  };
}
export {
  orderDiffFiles,
  loadAppBootstrap
};
