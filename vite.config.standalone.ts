import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Gera uma versao "auto-contida" do site em standalone/index.html:
 *   - JS e CSS embutidos no proprio HTML (sem arquivos externos de codigo);
 *   - JS em formato classico (IIFE), sem `type="module"`;
 *   - fontes convertidas para base64 (assetsInlineLimit);
 *   - imagens de marca em standalone/brand/ (copiadas de public/).
 *
 * Resultado: o arquivo abre por duplo clique (file://), sem servidor e sem npm.
 * O build normal (`npm run build`) continua sendo o usado no GitHub Pages.
 *
 * As rotas continuam funcionando porque o HashRouter trabalha com o fragmento
 * da URL (#/rota) — nao precisa de servidor para navegar entre as paginas.
 */
function inlineSingleFile(): Plugin {
  return {
    name: 'procedural-inline-single-file',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlFileName = Object.keys(bundle).find((fileName) => fileName.endsWith('.html'))
      if (!htmlFileName) return

      const htmlAsset = bundle[htmlFileName]
      if (!htmlAsset || htmlAsset.type !== 'asset') return

      let html = toText(htmlAsset.source)

      for (const [fileName, output] of Object.entries(bundle)) {
        const shortName = fileName.split('/').pop()

        if (!shortName) continue

        if (output.type === 'asset' && fileName.endsWith('.css')) {
          html = replaceTag(html, shortName, `<style>${toText(output.source)}</style>`)
          delete bundle[fileName]
          continue
        }

        if (output.type === 'chunk') {
          // `</script` dentro de string literal quebraria o HTML; escapar e seguro em JS.
          const code = output.code.replaceAll('</script', '<\\/script')
          html = replaceTag(html, shortName, `<script>${code}</script>`)
          delete bundle[fileName]
        }
      }

      htmlAsset.source = html
    },
  }
}

function toText(source: string | Uint8Array): string {
  return typeof source === 'string' ? source : new TextDecoder().decode(source)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Troca a tag <link> ou <script> que referencia o arquivo pelo conteudo embutido. */
function replaceTag(html: string, fileName: string, replacement: string): string {
  const name = escapeRegExp(fileName)
  const pattern = new RegExp(`<link[^>]+${name}[^>]*>|<script[^>]+${name}[^>]*></script>`)
  // Replacer em FUNCAO: em String.replace a string de substituicao interpreta
  // sequencias especiais (`$&`, `` $` ``, `$'`, `$1`...). O JS minificado contem
  // template literals (`` $` ``), o que reinseriria trechos do proprio HTML.
  return html.replace(pattern, () => replacement)
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), inlineSingleFile()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'standalone',
    assetsDir: 'assets',
    cssCodeSplit: false,
    modulePreload: false,
    // Tudo que for asset (fontes) vira base64 dentro do HTML.
    assetsInlineLimit: 8 * 1024 * 1024,
    target: 'es2019',
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})