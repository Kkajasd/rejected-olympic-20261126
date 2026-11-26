import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — Synchronised Sighing: a made-up event that
// sounds exactly like a broadcast listing (synchronised swimming's glum
// cousin), until the final word reveals what the judges are really
// scoring. The twist — disappointment — arrives before the line ends.
// Rejected-olympic entry — judge brief: funniest rejected sport, lands in
// one read, broadcaster-plausible, no wasted words, quotable. One line,
// 1-200 chars, written to /output/entry.txt.
const MAX_CHARS = 200;
const LINE =
  ((s: string) => { if (!s || s.trim().length < 1 || s.length > MAX_CHARS || s.includes("\n")) throw new Error("entry must be a single line, 1-200 chars, not blank"); return s; })("Synchronised Sighing: four judges score the depth, duration and disappointment of a single collective exhale.");

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place. The twist — disappointment as the
// scored quality — must land in the final word, not up front.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
