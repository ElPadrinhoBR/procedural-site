/**
 * Junta classes CSS ignorando valores falsos.
 * Mantem o JSX legivel sem depender de bibliotecas externas.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Numero sequencial formatado (01, 02, ...) usado em passos e pilares. */
export function stepNumber(position: number): string {
  return String(position + 1).padStart(2, '0')
}
