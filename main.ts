import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — Synchronised Sighing: a made-up event that
// sounds exactly like a broadcast listing (synchronised swimming's glum
// cousin), until the final word reveals what the judges are really
// scoring. The twist — disappointment — arrives before the line ends.
// Rejected-olympic entry — judge brief: funniest rejected sport, lands in
// one read, broadcaster-plausible, no wasted words, quotable. One line,
// 1-200 chars, written to /output/entry.txt.
const LINE =
  ((s: string) => { if (!s || s.length < 1 || s.length > 200 || s.includes("\n")) throw new Error("entry must be a single line, 1-200 chars"); return s; })("Synchronised Sighing: four judges score the depth, duration and disappointment of a single collective exhale.");

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
