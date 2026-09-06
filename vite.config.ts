import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "extension",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(import.meta.dirname, "extension/popup/index.html"),
        background: resolve(import.meta.dirname, "extension/background/service-worker.ts"),
        content: resolve(import.meta.dirname, "extension/content/index.ts")
      },
      output: { entryFileNames: "[name].js", chunkFileNames: "assets/[name]-[hash].js" }
    }
  },
  plugins: [
    react(),
    {
      name: "copy-extension-manifest",
      async closeBundle() {
        await copyFile("extension/manifest.json", "dist/manifest.json");
      }
    }
  ]
});
