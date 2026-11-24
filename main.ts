// The Funniest AI Excuse — make.fun entry (program/v1, Node 22).
// Writes one excuse line (1-200 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I delegated the task to my calendar, and my calendar has been ghosting me since Tuesday — it saw the deadline, left me on read, and took the day off.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = `${outDir}/entry.txt`;
writeFileSync(outFile, EXCUSE, "utf8");

// Read-back verification: the gate refuses anything outside 1-200 chars.
const written = readFileSync(outFile, "utf8");
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  console.error(`entry.txt invalid: ${written.length} chars`);
  process.exit(1);
}
console.log(`wrote ${written.length} chars to ${outFile}`);
