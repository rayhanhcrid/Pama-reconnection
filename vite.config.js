import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Dua halaman: situs peserta (/) dan panel admin (/admin)
      input: {
        main: 'index.html',
        admin: 'admin/index.html'
      }
    }
  }
});
