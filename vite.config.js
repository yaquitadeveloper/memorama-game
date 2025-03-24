

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';  // Importamos el plugin de Tailwind

export default defineConfig({
  root: '.',  // El directorio raíz será la raíz del proyecto, donde están los archivos HTML

  plugins: [
    tailwindcss(),  // Añadimos el plugin de TailwindCSS
  ],

  build: {
    outDir: 'dist',  // Los archivos generados se guardarán en 'dist'
    rollupOptions: {
      input: {
        index: './index.html',        // Página principal
        game: './pages/game.html',    // Página del juego
      },
    },
  },

  server: {
    port: 3000,  // Puerto del servidor de desarrollo
    open: true,  // Abre el navegador automáticamente
  },
});
