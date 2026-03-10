/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gitStatus from "./tools/git-status";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5264",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), gitStatus()],
});
