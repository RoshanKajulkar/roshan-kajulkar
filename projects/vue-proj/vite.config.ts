import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/vue/",
  build: {
    outDir: "../../builds/vue/dist",
    emptyOutDir: true,
  },
});
