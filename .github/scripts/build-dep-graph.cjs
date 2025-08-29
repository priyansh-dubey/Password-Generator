// .github/scripts/build-dep-graph.cjs
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

try {
  const outputFile = path.join(__dirname, "../../dependency-graph.dot");

  // Run depcruise CLI via npx
  const dotOutput = execSync(
    `npx depcruise src --output-type=dot`,
    { encoding: "utf-8" }
  );

  fs.writeFileSync(outputFile, dotOutput, "utf-8");

  console.log("✅ Dependency graph generated at:", outputFile);
} catch (err) {
  console.error("❌ Failed to build dependency graph:", err.message);
  process.exit(1);
}
