import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const API_URL = "https://www.quetalmiafp.cl"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: API_URL,
        changeOrigin: true,
      },
    },
  },
});
