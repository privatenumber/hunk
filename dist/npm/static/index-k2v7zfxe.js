// src/core/changeset/sidecar.ts
import { resolve as resolvePath } from "node:path";
var annotationConfidenceValues = [
  "low",
  "medium",
  "high"
];
function optionalString(value) {
  return typeof value === "string" ? value : undefined;
}
function optionalNonEmptyString(value) {
  const text = optionalString(value);
  return text?.length ? text : undefined;
}
function optionalAnnotationConfidence(value) {
  return annotationConfidenceValues.find((confidence) => confidence === value);
}
function normalizeRange(range) {
  if (!Array.isArray(range) || range.length !== 2) {
    return;
  }
  const [start, end] = range;
  if (typeof start !== "number" || typeof end !== "number" || !Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error("Annotation ranges must be integer tuples.");
  }
  if (start < 1 || end < 1) {
    throw new Error("Annotation ranges must use positive 1-based line numbers.");
  }
  if (end < start) {
    throw new Error("Annotation ranges must be ordered start..end tuples.");
  }
  return [start, end];
}
function normalizeAnnotation(annotation) {
  if (!annotation || typeof annotation !== "object") {
    throw new Error("Agent annotations must be objects.");
  }
  const item = annotation;
  const summary = optionalNonEmptyString(item.summary);
  if (summary === undefined) {
    throw new Error("Each agent annotation requires a summary.");
  }
  return {
    id: optionalString(item.id),
    oldRange: normalizeRange(item.oldRange),
    newRange: normalizeRange(item.newRange),
    summary,
    rationale: optionalString(item.rationale),
    markup: optionalNonEmptyString(item.markup),
    tags: Array.isArray(item.tags) ? item.tags.filter((tag) => typeof tag === "string") : undefined,
    confidence: optionalAnnotationConfidence(item.confidence),
    source: optionalString(item.source),
    author: optionalString(item.author),
    createdAt: optionalString(item.createdAt)
  };
}
function normalizeAnnotationFile(file) {
  if (!file || typeof file !== "object") {
    throw new Error("Agent context files must be objects.");
  }
  const value = file;
  const path = optionalNonEmptyString(value.path);
  if (path === undefined) {
    throw new Error("Agent context file entries require a non-empty path.");
  }
  const annotations = Array.isArray(value.annotations) ? value.annotations : [];
  return {
    path,
    summary: optionalString(value.summary),
    annotations: annotations.map(normalizeAnnotation)
  };
}
async function loadSidecarContext(pathOrDash, { cwd = process.cwd() } = {}) {
  if (!pathOrDash) {
    return null;
  }
  const raw = pathOrDash === "-" ? await new Response(Bun.stdin.stream()).text() : await Bun.file(resolvePath(cwd, pathOrDash)).text();
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object") {
    throw new Error("Agent context must be a JSON object.");
  }
  const files = Array.isArray(parsed.files) ? parsed.files.map(normalizeAnnotationFile) : [];
  return {
    version: typeof parsed.version === "number" ? parsed.version : 1,
    summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
    files
  };
}
function findSidecarFileContext(sidecar, currentPath, previousPath) {
  if (!sidecar) {
    return null;
  }
  return sidecar.files.find((file) => file.path === currentPath || file.path === previousPath) ?? null;
}

// src/core/changeset/binary.ts
import fs from "node:fs";
var BINARY_SNIFF_BYTES = 8000;
var BINARY_CONTROL_BYTE_RATIO = 0.3;
function patchLooksBinary(patch) {
  return /(^|\n)Binary files .* differ(?:\n|$)/.test(patch) || /(^|\n)GIT binary patch(?:\n|$)/.test(patch);
}
function createSkippedBinaryMetadata(name, type = "change") {
  return {
    name,
    type,
    hunks: [],
    splitLineCount: 0,
    unifiedLineCount: 0,
    isPartial: true,
    additionLines: [],
    deletionLines: [],
    cacheKey: `${name}:binary-skipped`
  };
}
function readFilePrefix(path) {
  let fd;
  try {
    fd = fs.openSync(path, "r");
    const buffer = Buffer.alloc(BINARY_SNIFF_BYTES);
    const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    if (fd !== undefined) {
      fs.closeSync(fd);
    }
  }
}
function isBinarySignalByte(byte) {
  return byte < 7 || byte > 13 && byte < 32 || byte === 127;
}
function isProbablyBinaryFile(path) {
  let prefix;
  try {
    prefix = readFilePrefix(path);
  } catch {
    return false;
  }
  if (prefix.length === 0) {
    return false;
  }
  let binarySignalBytes = 0;
  for (const byte of prefix) {
    if (byte === 0) {
      return true;
    }
    if (isBinarySignalByte(byte)) {
      binarySignalBytes += 1;
    }
  }
  return binarySignalBytes / prefix.length >= BINARY_CONTROL_BYTE_RATIO;
}

// src/core/changeset/diffFile.ts
import { setLanguageOverride } from "@pierre/diffs";

// src/core/changeset/fileLanguageLookup.ts
import { getFiletypeFromFileName } from "@pierre/diffs";

// src/core/changeset/fileLanguage.ts
var HUNK_CUSTOM_EXTENSIONS = {
  mts: "typescript",
  cts: "typescript"
};
var BUILT_IN_FILE_LANGUAGE_EXTENSIONS = new Set(Object.keys(HUNK_CUSTOM_EXTENSIONS));
var builtInFileLanguages = Object.entries(HUNK_CUSTOM_EXTENSIONS).map(([value, language]) => ({
  matcher: { kind: "extension", value },
  language,
  reserved: true
}));
var registrationVersion = 0;
var activeFileLanguages = builtInFileLanguages;
function fileLanguageRegistrationSnapshot() {
  return { version: registrationVersion, registrations: activeFileLanguages };
}

// src/core/changeset/fileLanguageLookup.ts
var appliedRegistrationVersion = -1;
var appliedFileLanguages = [];
var GLOB_LITERAL_BACKSLASH = "\x00";
function encodeGlobBackslashes(value) {
  return value.replaceAll("\\", GLOB_LITERAL_BACKSLASH);
}
function applyCurrentFileLanguages() {
  const snapshot = fileLanguageRegistrationSnapshot();
  if (snapshot.version === appliedRegistrationVersion) {
    return;
  }
  appliedFileLanguages = snapshot.registrations.map((registration) => ({
    ...registration,
    glob: registration.matcher.kind === "glob" && !registration.matcher.value.includes("\x00") ? new Bun.Glob(encodeGlobBackslashes(registration.matcher.value)) : undefined
  }));
  appliedRegistrationVersion = snapshot.version;
}
function basenameForLanguagePath(path) {
  return path.slice(path.lastIndexOf("/") + 1);
}
function filenameLanguage(basename) {
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind === "filename" && registration.matcher.value === basename) {
      return registration.language;
    }
  }
  return;
}
function globLanguage(path, basename) {
  if (path.includes("\x00")) {
    return;
  }
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind !== "glob") {
      continue;
    }
    const candidate = registration.matcher.target === "path" ? path : basename;
    if (registration.glob?.match(encodeGlobBackslashes(candidate))) {
      return registration.language;
    }
  }
  return;
}
function extensionLanguage(basename, reservedOnly = false) {
  const lowerBasename = basename.toLowerCase();
  let best;
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind !== "extension" || reservedOnly && registration.reserved !== true || !reservedOnly && registration.reserved === true) {
      continue;
    }
    const extension = registration.matcher.value;
    if (lowerBasename.endsWith(`.${extension}`) && (best === undefined || extension.length > best.length)) {
      best = { length: extension.length, language: registration.language };
    }
  }
  return best?.language;
}
function fileLanguageForPath(path) {
  applyCurrentFileLanguages();
  const basename = basenameForLanguagePath(path);
  const registeredLanguage = extensionLanguage(basename, true) ?? filenameLanguage(basename) ?? globLanguage(path, basename) ?? extensionLanguage(basename);
  if (registeredLanguage !== undefined) {
    return registeredLanguage;
  }
  const inferred = getFiletypeFromFileName(path);
  return inferred === "text" && basename !== path ? getFiletypeFromFileName(basename) : inferred;
}

// src/core/changeset/diffPaths.ts
function normalizeDiffPath(path) {
  return path?.replace(/[\r\n]+$/u, "");
}
function normalizeDiffMetadataPaths(metadata) {
  const name = normalizeDiffPath(metadata.name) ?? metadata.name;
  const prevName = normalizeDiffPath(metadata.prevName);
  if (name === metadata.name && prevName === metadata.prevName) {
    return metadata;
  }
  return {
    ...metadata,
    name,
    prevName
  };
}

// src/core/changeset/diffFile.ts
function countDiffStats(metadata) {
  let additions = 0;
  let deletions = 0;
  for (const hunk of metadata.hunks) {
    for (const content of hunk.hunkContent) {
      if (content.type === "change") {
        additions += content.additions;
        deletions += content.deletions;
      }
    }
  }
  return { additions, deletions };
}
function buildDiffFile(metadata, patch, index, sourcePrefix, sidecar, {
  isUntracked,
  previousPath,
  isBinary,
  sourceFetcherBuilder,
  isTooLarge,
  stats,
  statsTruncated,
  lineMoveKinds,
  pathsAreExact
} = {}) {
  const normalizedMetadata = pathsAreExact ? metadata : normalizeDiffMetadataPaths(metadata);
  const path = normalizedMetadata.name;
  const resolvedPreviousPath = pathsAreExact ? previousPath ?? normalizedMetadata.prevName : normalizeDiffPath(previousPath) ?? normalizedMetadata.prevName;
  const resolvedIsBinary = isBinary ?? patchLooksBinary(patch);
  const language = fileLanguageForPath(path);
  const sourceFetcher = sourceFetcherBuilder?.({
    path,
    previousPath: resolvedPreviousPath,
    type: normalizedMetadata.type,
    isUntracked: Boolean(isUntracked),
    isBinary: resolvedIsBinary
  });
  return {
    id: `${sourcePrefix}:${index}:${path}`,
    path,
    previousPath: resolvedPreviousPath,
    patch,
    language,
    stats: stats ?? countDiffStats(normalizedMetadata),
    metadata: setLanguageOverride(normalizedMetadata, language),
    lineMoveKinds,
    agent: findSidecarFileContext(sidecar, path, resolvedPreviousPath),
    isUntracked,
    isBinary: resolvedIsBinary,
    isTooLarge,
    statsTruncated,
    sourceFetcher
  };
}
function createSkippedLargeMetadata(filePath, type) {
  return {
    name: filePath,
    type,
    hunks: [],
    splitLineCount: 0,
    unifiedLineCount: 0,
    isPartial: true,
    additionLines: [],
    deletionLines: [],
    cacheKey: `${filePath}:large-diff-skipped`
  };
}

// src/core/changeset/fromPatch.ts
import { parsePatchFiles } from "@pierre/diffs";

// src/core/patch/chunks.ts
function stripPrefixes(path) {
  return path.replace(/^[ab]\//, "");
}
function splitPatchIntoFileChunks(rawPatch) {
  const patch = rawPatch.replaceAll(`\r
`, `
`);
  const lines = patch.split(`
`);
  const chunks = [];
  let current = [];
  const hasGitHeaders = lines.some((line) => line.startsWith("diff --git "));
  const flush = () => {
    if (current.length > 0) {
      chunks.push(`${current.join(`
`).trimEnd()}
`);
      current = [];
    }
  };
  for (let index = 0;index < lines.length; index += 1) {
    const line = lines[index];
    if (hasGitHeaders && line.startsWith("diff --git ")) {
      flush();
      current.push(line);
      continue;
    }
    if (!hasGitHeaders && line.startsWith("--- ") && lines[index + 1]?.startsWith("+++ ")) {
      flush();
      current.push(line);
      current.push(lines[index + 1]);
      index += 1;
      continue;
    }
    if (current.length > 0) {
      current.push(line);
    }
  }
  flush();
  return chunks;
}
function findPatchChunk(metadata, chunks, index) {
  const byIndex = chunks[index];
  if (byIndex) {
    return byIndex;
  }
  return chunks.find((chunk) => [metadata.name, metadata.prevName].map(normalizeDiffPath).filter((value) => Boolean(value)).map(stripPrefixes).some((path) => chunk.includes(`a/${path}`) || chunk.includes(`b/${path}`) || chunk.includes(path))) ?? "";
}

// src/core/patch/gitFormat.ts
var gitQuotedUtf8Decoder = new TextDecoder("utf-8", { fatal: true });
var gitQuotedUtf8Encoder = new TextEncoder;
var gitUnsafeDecodedHeaderCharacter = /[\x00-\x1f\x7f-\x9f]/;
var gitSimpleEscapeBytes = {
  a: 7,
  b: 8,
  t: 9,
  n: 10,
  v: 11,
  f: 12,
  r: 13,
  "\\": 92,
  '"': 34
};
function decodeGitQuotedUtf8Path(path) {
  let decodedPath = "";
  let index = 0;
  while (index < path.length) {
    const escape = path.slice(index).match(/^\\([0-7]{3})/);
    if (!escape) {
      if (path[index] === "\\" && index + 1 < path.length) {
        decodedPath += path.slice(index, index + 2);
        index += 2;
      } else {
        decodedPath += path[index];
        index += 1;
      }
      continue;
    }
    const escapedBytes = [];
    const escapedText = [];
    while (index < path.length) {
      const byteEscape = path.slice(index).match(/^\\([0-7]{3})/);
      if (!byteEscape) {
        break;
      }
      escapedText.push(byteEscape[0]);
      escapedBytes.push(Number.parseInt(byteEscape[1], 8));
      index += byteEscape[0].length;
    }
    if (escapedBytes.every((byte) => byte >= 128 && byte <= 255)) {
      try {
        const decodedBytes = gitQuotedUtf8Decoder.decode(Uint8Array.from(escapedBytes));
        if (!gitUnsafeDecodedHeaderCharacter.test(decodedBytes)) {
          decodedPath += decodedBytes;
          continue;
        }
      } catch {}
    }
    decodedPath += escapedText.join("");
  }
  return decodedPath;
}
function decodeGitQuotedPath(path) {
  const bytes = [];
  let index = 0;
  while (index < path.length) {
    if (path[index] !== "\\") {
      const codePoint = path.codePointAt(index);
      if (codePoint === undefined) {
        break;
      }
      const scalar = String.fromCodePoint(codePoint);
      bytes.push(...gitQuotedUtf8Encoder.encode(scalar));
      index += scalar.length;
      continue;
    }
    const octalEscape = path.slice(index).match(/^\\([0-7]{1,3})/);
    if (octalEscape) {
      const byte2 = Number.parseInt(octalEscape[1], 8);
      if (byte2 > 255) {
        return null;
      }
      bytes.push(byte2);
      index += octalEscape[0].length;
      continue;
    }
    const escaped = path[index + 1];
    const byte = escaped ? gitSimpleEscapeBytes[escaped] : undefined;
    if (byte === undefined) {
      return null;
    }
    bytes.push(byte);
    index += 2;
  }
  try {
    return gitQuotedUtf8Decoder.decode(Uint8Array.from(bytes));
  } catch {
    return null;
  }
}
function sanitizeGitPatch(patchText) {
  if (!patchText.includes("diff --git ")) {
    return { text: patchText, filePaths: [] };
  }
  const lines = patchText.split(`
`);
  const normalizedLines = [];
  const filePaths = [];
  let blockLines = [];
  const flushBlock = () => {
    if (blockLines.length === 0) {
      return;
    }
    const rewritten = rewriteGitPatchBlock(blockLines);
    normalizedLines.push(...rewritten.lines);
    filePaths.push(rewritten.filePaths);
    blockLines = [];
  };
  for (const line of lines) {
    if (line.startsWith("diff --git ")) {
      flushBlock();
      blockLines.push(line);
      continue;
    }
    if (blockLines.length > 0) {
      blockLines.push(line);
    } else {
      normalizedLines.push(line);
    }
  }
  flushBlock();
  return { text: normalizedLines.join(`
`), filePaths };
}
function rewriteGitPatchBlock(blockLines) {
  const firstLine = blockLines[0];
  if (!firstLine?.startsWith("diff --git ")) {
    return { lines: blockLines, filePaths: undefined };
  }
  const result = rewriteGitDiffHeader(firstLine, blockLines);
  let blockRewriteMode = result.rewriteMode;
  const rewrittenLines = [result.line];
  for (const line of blockLines.slice(1)) {
    if (blockRewriteMode && line.startsWith("--- ")) {
      rewrittenLines.push(rewriteUnifiedFileLine(line, "--- ", "a/", blockRewriteMode));
      continue;
    }
    if (blockRewriteMode && line.startsWith("+++ ")) {
      const rewriteMode = blockRewriteMode;
      blockRewriteMode = null;
      rewrittenLines.push(rewriteUnifiedFileLine(line, "+++ ", "b/", rewriteMode));
      continue;
    }
    rewrittenLines.push(rewriteGitMetadataPathLine(line));
  }
  return {
    lines: rewrittenLines,
    filePaths: resolveDecodedGitFilePaths(result.decodedPair, blockLines)
  };
}
function rewriteGitDiffHeader(line, blockLines) {
  const rest = line.slice("diff --git ".length).trimEnd();
  const quotedMatch = rest.match(/^"((?:\\.|[^"\\])*)" "((?:\\.|[^"\\])*)"$/);
  if (quotedMatch) {
    const quotedOldPath = quotedMatch[1] ?? "";
    const quotedNewPath = quotedMatch[2] ?? "";
    const oldPath = decodeGitQuotedUtf8Path(quotedOldPath);
    const newPath = decodeGitQuotedUtf8Path(quotedNewPath);
    const pair = canonicalizeGitPathPair(oldPath, newPath, blockLines);
    const decodedOldPath = decodeGitQuotedPath(quotedOldPath);
    const decodedNewPath = decodeGitQuotedPath(quotedNewPath);
    const decodedPair = decodedOldPath !== null && decodedNewPath !== null ? canonicalizeGitPathPair(decodedOldPath, decodedNewPath, blockLines) : undefined;
    return {
      line: `diff --git ${pair.oldPath} ${pair.newPath}`,
      rewriteMode: pair.rewriteMode,
      decodedPair
    };
  }
  const tokens = rest.split(" ");
  if (tokens.length >= 2 && tokens.length % 2 === 0) {
    const half = tokens.length / 2;
    const firstHalf = tokens.slice(0, half).join(" ");
    const secondHalf = tokens.slice(half).join(" ");
    const knownPair = canonicalizeKnownGitPathPair(firstHalf, secondHalf, blockLines);
    if (knownPair?.changed) {
      return {
        line: `diff --git ${knownPair.oldPath} ${knownPair.newPath}`,
        rewriteMode: knownPair.rewriteMode
      };
    }
    if (knownPair?.isCanonical) {
      return { line, rewriteMode: null };
    }
    if (firstHalf === secondHalf && firstHalf.length > 0) {
      return {
        line: `diff --git a/${firstHalf} b/${secondHalf}`,
        rewriteMode: "prepend-prefix"
      };
    }
  }
  if (tokens.length === 2 && tokens[0] && tokens[1]) {
    return {
      line: `diff --git a/${tokens[0]} b/${tokens[1]}`,
      rewriteMode: "prepend-prefix"
    };
  }
  return { line, rewriteMode: null };
}
var GIT_MNEMONIC_PREFIXES = new Set(["c", "i", "o", "w", "1", "2"]);
function splitGitMnemonicPrefix(path) {
  const [prefix, ...rest] = path.split("/");
  if (!prefix || rest.length === 0 || !GIT_MNEMONIC_PREFIXES.has(prefix)) {
    return null;
  }
  return { prefix, path: rest.join("/") };
}
function stripGitPathQuotes(path) {
  const quotedPath = path.match(/^"((?:\\.|[^"\\])*)"$/)?.[1];
  return quotedPath === undefined ? path : decodeGitQuotedPath(quotedPath) ?? decodeGitQuotedUtf8Path(quotedPath);
}
var gitMetadataPathMarkers = ["rename from ", "rename to ", "copy from ", "copy to "];
function rewriteGitMetadataPathLine(line) {
  const marker = gitMetadataPathMarkers.find((candidate) => line.startsWith(candidate));
  if (!marker) {
    return line;
  }
  const value = line.slice(marker.length);
  const quotedPath = value.match(/^"((?:\\.|[^"\\])*)"$/)?.[1];
  if (quotedPath === undefined) {
    return line;
  }
  const decodedPath = decodeGitQuotedUtf8Path(quotedPath);
  return decodedPath === quotedPath ? line : `${marker}${decodedPath}`;
}
function findRenameOrCopyMetadata(blockLines) {
  for (const kind of ["rename", "copy"]) {
    const oldMarker = `${kind} from `;
    const newMarker = `${kind} to `;
    const oldPath = blockLines.find((line) => line.startsWith(oldMarker));
    const newPath = blockLines.find((line) => line.startsWith(newMarker));
    if (oldPath && newPath) {
      return {
        oldPath: stripGitPathQuotes(oldPath.slice(oldMarker.length)),
        newPath: stripGitPathQuotes(newPath.slice(newMarker.length))
      };
    }
  }
  return null;
}
function resolveDecodedGitFilePaths(decodedPair, blockLines) {
  if (!decodedPair) {
    return;
  }
  const metadata = findRenameOrCopyMetadata(blockLines);
  const previousPath = metadata?.oldPath ?? decodedPair.oldPath.replace(/^a\//, "");
  const path = metadata?.newPath ?? decodedPair.newPath.replace(/^b\//, "");
  return previousPath === path ? { path } : { path, previousPath };
}
function withGitPrefix(path, prefix) {
  return path.startsWith(prefix) ? path : `${prefix}${path}`;
}
function shouldStripMnemonicPair(oldPath, newPath, blockLines) {
  const oldMnemonic = splitGitMnemonicPrefix(oldPath);
  const newMnemonic = splitGitMnemonicPrefix(newPath);
  if (!oldMnemonic || !newMnemonic || oldMnemonic.prefix === newMnemonic.prefix) {
    return null;
  }
  const metadata = findRenameOrCopyMetadata(blockLines);
  if (!metadata) {
    return true;
  }
  if (metadata.oldPath === oldPath && metadata.newPath === newPath) {
    return false;
  }
  if (metadata.oldPath === oldMnemonic.path && metadata.newPath === newMnemonic.path) {
    return true;
  }
  return true;
}
function canonicalizeKnownGitPathPair(oldPath, newPath, blockLines) {
  const oldMnemonic = splitGitMnemonicPrefix(oldPath);
  const newMnemonic = splitGitMnemonicPrefix(newPath);
  const isCanonical = oldPath.startsWith("a/") && newPath.startsWith("b/");
  if (isCanonical) {
    const metadata = findRenameOrCopyMetadata(blockLines);
    if (metadata?.oldPath === oldPath && metadata.newPath === newPath) {
      return null;
    }
    return { oldPath, newPath, rewriteMode: "add", changed: false, isCanonical: true };
  }
  if (oldMnemonic && newMnemonic && shouldStripMnemonicPair(oldPath, newPath, blockLines)) {
    return {
      oldPath: `a/${oldMnemonic.path}`,
      newPath: `b/${newMnemonic.path}`,
      rewriteMode: "strip",
      changed: true,
      isCanonical: false
    };
  }
  return null;
}
function canonicalizeGitPathPair(oldPath, newPath, blockLines) {
  return canonicalizeKnownGitPathPair(oldPath, newPath, blockLines) ?? {
    oldPath: `a/${oldPath}`,
    newPath: `b/${newPath}`,
    rewriteMode: "prepend-prefix",
    changed: true,
    isCanonical: false
  };
}
function rewriteUnifiedFileLine(line, marker, prefix, mode) {
  const path = line.slice(marker.length);
  const quotedPath = path.match(/^"((?:\\.|[^"\\])*)"(.*)$/);
  const pathName = quotedPath?.[1] ?? path;
  const suffix = quotedPath?.[2] ?? "";
  if (pathName === "/dev/null" || pathName.startsWith("/dev/null\t")) {
    return line;
  }
  const decodedPathName = quotedPath ? decodeGitQuotedUtf8Path(pathName) : pathName;
  const normalizedPath = mode === "strip" ? splitGitMnemonicPrefix(decodedPathName)?.path ?? decodedPathName : decodedPathName;
  const prefixedPath = mode === "prepend-prefix" ? `${prefix}${normalizedPath}` : withGitPrefix(normalizedPath, prefix);
  return `${marker}${prefixedPath}${suffix}`;
}

// src/core/patch/gitLog.ts
function stripGitLogMetadata(text) {
  const COMMIT_BOUNDARY = /^commit [0-9a-f]{4,64}(?: |$)/m;
  if (!COMMIT_BOUNDARY.test(text)) {
    return text;
  }
  const lines = text.split(`
`);
  const out = [];
  let inHeader = false;
  for (const line of lines) {
    if (COMMIT_BOUNDARY.test(line)) {
      inHeader = true;
      continue;
    }
    if (inHeader) {
      if (line.startsWith("diff --git ") || line.startsWith("--- ") || line.startsWith("+++ ")) {
        inHeader = false;
        out.push(line);
      }
      continue;
    }
    out.push(line);
  }
  return out.join(`
`);
}

// src/lib/patchPath.ts
function escapeUntrackedPatchPath(path) {
  return path.replaceAll("\\", "\\\\").replaceAll("\t", "\\t").replaceAll(`
`, "\\n").replaceAll("\r", "\\r");
}

// src/core/patch/sanitize.ts
function stripTerminalControl(text) {
  return text.replace(/\x1bP[\s\S]*?\x1b\\/g, "").replace(/\x1b\][\s\S]*?(?:\x07|\x1b\\)/g, "").replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "").replace(/\x1b[@-_]/g, "");
}
function sanitizePatch(patchText) {
  return sanitizeGitPatch(stripGitLogMetadata(stripTerminalControl(patchText.replaceAll(`\r
`, `
`))));
}

// src/core/changeset/fromPatch.ts
function leadingSgrParameters(rawLine, expectedSign) {
  const parameters = [];
  let index = 0;
  while (index < rawLine.length) {
    if (rawLine[index] === "\x1B") {
      const csi = rawLine.slice(index).match(/^\x1b\[([0-?]*)([ -/]*)([@-~])/);
      if (csi) {
        if (csi[3] === "m") {
          parameters.push(csi[1] ?? "");
        }
        index += csi[0].length;
        continue;
      }
    }
    return rawLine[index] === expectedSign ? parameters : [];
  }
  return [];
}
function sgrContainsColor(parameters, colorCode) {
  return parameters.some((parameter) => parameter.split(";").includes(colorCode));
}
function movedLineKindFromAnsi(rawLine, side) {
  const colorCode = side === "addition" ? "36" : "35";
  const sign = side === "addition" ? "+" : "-";
  return sgrContainsColor(leadingSgrParameters(rawLine, sign), colorCode) ? "moved" : undefined;
}
function collectLineMoveKinds(patchText) {
  const files = [];
  let current = null;
  let inHunk = false;
  let additionLineIndex = 0;
  let deletionLineIndex = 0;
  const createFileMoveKinds = () => {
    const moveKinds = { additionLines: [], deletionLines: [] };
    files.push(moveKinds);
    inHunk = false;
    additionLineIndex = 0;
    deletionLineIndex = 0;
    return moveKinds;
  };
  for (const rawLine of patchText.replaceAll(`\r
`, `
`).split(`
`)) {
    const plainLine = stripTerminalControl(rawLine);
    if (plainLine.startsWith("diff --git ")) {
      current = createFileMoveKinds();
      continue;
    }
    if (!current && (plainLine.startsWith("--- ") || plainLine.startsWith("@@ "))) {
      current = createFileMoveKinds();
    }
    const activeMoveKinds = current;
    if (!activeMoveKinds) {
      continue;
    }
    if (plainLine.startsWith("@@ ")) {
      inHunk = true;
      continue;
    }
    if (!inHunk) {
      continue;
    }
    if (plainLine.startsWith("+") && !plainLine.startsWith("+++")) {
      activeMoveKinds.additionLines[additionLineIndex] = movedLineKindFromAnsi(rawLine, "addition");
      additionLineIndex += 1;
      continue;
    }
    if (plainLine.startsWith("-") && !plainLine.startsWith("---")) {
      activeMoveKinds.deletionLines[deletionLineIndex] = movedLineKindFromAnsi(rawLine, "deletion");
      deletionLineIndex += 1;
      continue;
    }
    if (plainLine.startsWith(" ")) {
      additionLineIndex += 1;
      deletionLineIndex += 1;
    }
  }
  return files;
}
function hasLineMoveKinds(moveKinds) {
  return Boolean(moveKinds?.additionLines.some(Boolean) || moveKinds?.deletionLines.some(Boolean));
}
function changesetFromPatch(patchText, title, sourceLabel, sidecar, perFileOptions) {
  const lineMoveKinds = collectLineMoveKinds(patchText);
  const sanitizedPatch = sanitizePatch(patchText);
  const sanitizedPatchText = sanitizedPatch.text;
  let parsedPatches;
  try {
    parsedPatches = parsePatchFiles(sanitizedPatchText, "patch", true);
  } catch {
    return {
      id: `changeset:${Date.now()}`,
      sourceLabel,
      title,
      summary: sanitizedPatchText.trim() || undefined,
      agentSummary: sidecar?.summary,
      files: []
    };
  }
  const metadataFiles = parsedPatches.flatMap((entry) => entry.files);
  const chunks = splitPatchIntoFileChunks(sanitizedPatchText);
  return {
    id: `changeset:${Date.now()}`,
    sourceLabel,
    title,
    summary: parsedPatches.map((entry) => entry.patchMetadata).filter(Boolean).join(`

`) || undefined,
    agentSummary: sidecar?.summary,
    files: metadataFiles.map((metadata, index) => {
      const decodedPaths = sanitizedPatch.filePaths[index];
      const normalizedMetadata = decodedPaths ? { ...metadata, name: decodedPaths.path, prevName: decodedPaths.previousPath } : metadata;
      return buildDiffFile(normalizedMetadata, findPatchChunk(metadata, chunks, index), index, sourceLabel, sidecar, {
        ...perFileOptions,
        pathsAreExact: Boolean(decodedPaths),
        lineMoveKinds: hasLineMoveKinds(lineMoveKinds[index]) ? lineMoveKinds[index] : undefined
      });
    })
  };
}

// src/core/run/tabWidth.ts
var DEFAULT_TAB_WIDTH = 4;
var MIN_TAB_WIDTH = 1;
var MAX_TAB_WIDTH = 16;
function validateTabWidth(value, label = "tab width") {
  if (!Number.isSafeInteger(value) || value < MIN_TAB_WIDTH || value > MAX_TAB_WIDTH) {
    throw new Error(`Invalid ${label}: ${String(value)} (expected ${MIN_TAB_WIDTH}-${MAX_TAB_WIDTH})`);
  }
  return value;
}

export { loadSidecarContext, findSidecarFileContext, createSkippedBinaryMetadata, isProbablyBinaryFile, buildDiffFile, createSkippedLargeMetadata, escapeUntrackedPatchPath, changesetFromPatch, DEFAULT_TAB_WIDTH, validateTabWidth };
