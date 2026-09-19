// Conserta mojibake (UTF-8 lido como latin-1) em um arquivo TS, in-place.
import fs from 'node:fs'

const file = process.argv[2]
let src = fs.readFileSync(file, 'utf8')

// Rodadas de caracteres >= 0x80 tentam ser re-decodificadas como UTF-8.
const HIGH = /[\u0080-\u00FF\uFFFD]+/g

function tryFix(run) {
  const bytes = Buffer.from(run, 'latin1')
  const decoded = bytes.toString('utf8')
  // Valida re-encodando: se voltar igual, a decodificação foi limpa.
  if (Buffer.from(decoded, 'utf8').equals(bytes) && decoded !== run) return decoded
  return run
}

let fixes = 0
let broken = []
src = src.replace(HIGH, (run) => {
  const fixed = tryFix(run)
  if (fixed !== run) fixes++
  return fixed
})

// Detecta resíduos irrecuperáveis (U+FFFD) linha a linha.
const lines = src.split('\n')
lines.forEach((line, i) => {
  if (line.includes('\uFFFD')) broken.push({ line: i + 1, text: line.trim() })
})

fs.writeFileSync(file, src, 'utf8')
console.log(JSON.stringify({ file, fixes, brokenCount: broken.length, broken: broken.slice(0, 20) }, null, 2))
