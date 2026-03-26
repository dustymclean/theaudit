import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        audit: resolve(__dirname, 'theaudit.html'),
        // REMOVED audit2 because it was deleted
      },
    },
  },
});
