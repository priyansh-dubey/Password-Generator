// .github/scripts/build-dep-graph.cjs
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

try {
  const outDir = path.join(__dirname, "../../.github/ai");
  fs.mkdirSync(outDir, { recursive: true });
  const outputFile = path.join(outDir, "dep-graph.json");

  // Run depcruise CLI to output JSON (NOT dot)
  const jsonOutput = execSync(
    `npx depcruise src --output-type=json`,
    { encoding: "utf-8" }
  );

  fs.writeFileSync(outputFile, jsonOutput, "utf-8");

  console.log("✅ Dependency graph generated at:", outputFile);
} catch (err) {
  console.error("❌ Failed to build dependency graph:", err.message);
  process.exit(1);
}
