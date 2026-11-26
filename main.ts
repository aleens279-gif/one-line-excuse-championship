// The One-Line Excuse Championship — writes one line to /output/entry.txt
// Gate: 131 chars (max 140), one line, no trailing newline.
// Joke: the server was jealous; the cloud never replied.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "The deploy failed because",
  "the code was perfect and the",
  "server was jealous; I filed a",
  "complaint with the cloud and",
  "it never replied.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
