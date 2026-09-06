import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const fromProjectRoot = (path: string) => new URL(path, import.meta.url);

export default defineConfig({
  root: "extension",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "popup/index": fileURLToPath(fromProjectRoot("extension/popup/index.html")),
        background: fileURLToPath(fromProjectRoot("extension/background/service-worker.ts")),
        content: fileURLToPath(fromProjectRoot("extension/content/index.ts"))
      },
      output: { entryFileNames: "[name].js", chunkFileNames: "assets/[name]-[hash].js" }
    }
  },
  plugins: [
    react(),
    {
      name: "copy-extension-manifest",
      async closeBundle() {
        await copyFile(new URL("extension/manifest.json", import.meta.url), new URL("dist/manifest.json", import.meta.url));
      }
    }
  ]
});
