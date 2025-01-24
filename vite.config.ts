import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  server: {
    port: 3000, // Set the desired port number
  },
  plugins: [react(),tailwindcss()],
  build: {
    sourcemap: true,
  },
});
