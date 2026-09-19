import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Base relativa ("./") + HashRouter permitem publicar o mesmo build:
 *  - em um dominio proprio ou usuario.github.io
 *  - em usuario.github.io/<repositorio>/  (GitHub Pages de projeto)
 * sem precisar reconfigurar caminhos.
 */
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
})