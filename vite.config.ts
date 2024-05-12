import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import { resolve } from "path";

// @ts-ignore
const root = resolve(__dirname, "src");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@services": resolve(root, "services"),
      "@pages": resolve(root, "pages"),
      "@": resolve(root, "./src"),
      "@assets": resolve(root, "assets"),
      "@utils": resolve(root, "utils"),
    },
  },
});
