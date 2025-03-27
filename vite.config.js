import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/memorama-game/',  // 

  root: '.',

  plugins: [
    tailwindcss(),
  ],

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: './index.html',
        game: './pages/game.html',
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
