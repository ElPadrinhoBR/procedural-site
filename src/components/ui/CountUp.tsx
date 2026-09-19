import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type CountUpProps = {
  value: number
  durationMs?: number
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Contador simples acionado quando o numero entra na tela.
 * Anima apenas numeros factuais do proprio conteudo (quantidade de pilares,
 * etapas e dimensoes) — nunca resultados ou metricas inventadas.
 */
export function CountUp({ value, durationMs = 900, tone = 'dark', className }: CountUpProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>({ threshold: 0.4 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frame = 0
    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      // easeOutCubic: rapido no inicio, suave no final.
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [durationMs, value, visible])

  return (
    <span
      ref={ref}
      className={cn(
        'font-display text-4xl font-semibold tabular-nums',
        tone === 'dark' ? 'text-white' : 'text-navy-900',
        className,
      )}
    >
      {display}
    </span>
  )
}