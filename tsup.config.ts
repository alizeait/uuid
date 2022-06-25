import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/node/index.ts", "src/browser/index.ts"],
  format: ["esm", "cjs"],
});
