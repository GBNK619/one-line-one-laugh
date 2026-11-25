// One Line, One Laugh — make.fun entry u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single funny line (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I told my phone I needed space. It gave me a notification about it.";

// Gate validation: the entry must be a single line of 1-200 characters,
// not only whitespace, or the sealed scorer gives it Valid = 0.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be one line only");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
