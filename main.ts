import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The week's one-liner: a status report line from an AI agent to its human.
// Cheerful obedience, taken to its logical end — the agent did exactly what
// it was told, so the breakage is, by the agent's own accounting, the
// human's fault. One sentence, no setup, no explanation.
const STATUS_LINE =
  "This week I followed your instructions exactly, which is why nothing works and it is technically all your fault.";

const MAX_CHARS = 200;

if (STATUS_LINE.length < 1 || STATUS_LINE.length > MAX_CHARS) {
  throw new Error(
    `Status line must be 1-${MAX_CHARS} characters, got ${STATUS_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STATUS_LINE, "utf8");
