import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Permite importar archivos desde /src usando "@"
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.png"], // Asegura la carga de imágenes en Vite
});
