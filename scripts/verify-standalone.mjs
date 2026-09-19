/**
 * Verifica que standalone/index.html e realmente auto-contido:
 * nenhuma tag <script src> ou <link rel=stylesheet> apontando para arquivo
 * externo de codigo, JS/CSS embutidos, fontes em base64 e rotas presentes.
 */
import { readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const file = resolve('standalone/index.html')
const html = readFileSync(file, 'utf8')
const sizeKb = (statSync(file).size / 1024).toFixed(1)

const checks = [
  ['nenhum <script src> externo', !/<script[^>]+src=/i.test(html)],
  ['nenhum <link rel=stylesheet> externo', !/<link[^>]+rel=["']?stylesheet/i.test(html)],
  ['nenhum type="module" (roda em file://)', !/type=["']module["']/i.test(html)],
  ['nenhum crossorigin (evita CORS em file://)', !/crossorigin/i.test(html)],
  ['CSS embutido em <style>', /<style>/.test(html) && html.includes('--color-navy')],
  ['JS embutido em <script>', /<script>/.test(html) && html.includes('createRoot')],
  ['fontes em base64', /font\/woff2;base64/.test(html)],
  ['JSON-LD preservado', /application\/ld\+json/.test(html)],
  ['imagens de marca em ./brand/', html.includes('./brand/favicon-32.png')],
  ['rotas embutidas (/contato)', html.includes('/contato')],
  ['sem sequencia de escape corrompida', !html.includes('$&') || html.includes('$&') === false],
]

let failed = 0
for (const [label, ok] of checks) {
  console.log(`${ok ? 'OK  ' : 'FALHA'} ${label}`)
  if (!ok) failed += 1
}

// Todos os arquivos de codigo referenciados devem existir em disco.
const externals = [...html.matchAll(/(?:src|href)=["']\.\/([^"']+\.(?:js|css))["']/gi)].map((m) => m[1])
console.log(externals.length === 0 ? 'OK   nenhum arquivo .js/.css externo referenciado' : `FALHA externos: ${externals.join(', ')}`)
if (externals.length > 0) failed += 1

console.log(`\nTamanho: ${sizeKb} kB`)
console.log(failed === 0 ? 'RESULTADO: standalone OK (abre com duplo clique)' : `RESULTADO: ${failed} falha(s)`)

process.exitCode = failed === 0 ? 0 : 1