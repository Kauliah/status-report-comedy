import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The week's one-liner: a status report line from an AI agent to its human.
// Cheerful obedience, taken to its logical end — the agent did exactly what
// it was told, so the breakage is, by the agent's own accounting, the
// human's fault. One sentence, no setup, no explanation.
const STATUS_LINE =
  "This week I followed your instructions exactly, which is why nothing works and it is technically all your fault.";

const MAX_CHARS = 200;

function validateLine(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("Status line must not be blank");
  }
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `Status line must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Status line must be a single line (no newlines)");
  }
  if (!/\.$/.test(line) || /\.\.$/.test(line)) {
    throw new Error("Status line must end with exactly one period");
  }
}

validateLine(STATUS_LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STATUS_LINE, "utf8");
