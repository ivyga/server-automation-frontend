import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000, // Set the desired port number
  },
  css: {
    preprocessorOptions: {
        scss: {
            api: 'modern-compiler',
            // Temporary Workaround: https://stackoverflow.com/questions/67675422/deprecation-warning-in-bootstrap-scss
            silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        }
    }
  },
  plugins: [react()],
})
