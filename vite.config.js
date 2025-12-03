import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base:"/CD-tailwind-task-navbar/",
  plugins: [tailwindcss()],
});
