import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Tons de fundo usados para alternar ritmo visual entre as secoes. */
export type Tone = 'navy' | 'navy-alt' | 'light' | 'light-alt'

const toneClasses: Record<Tone, string> = {
  navy: 'bg-navy-950 text-graphite-200',
  'navy-alt': 'bg-navy-900 text-graphite-200',
  light: 'bg-white text-graphite-700',
  'light-alt': 'bg-graphite-50 text-graphite-700',
}

type SectionProps = {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
  /** Linha luminosa no topo para separar blocos escuros. */
  divider?: boolean
  /** Radial glow discreto ao fundo. */
  glow?: boolean
}

export function Section({
  id,
  tone = 'navy',
  className,
  children,
  divider = false,
  glow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden py-20 sm:py-24 lg:py-28', toneClasses[tone], className)}
    >
      {divider ? <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" /> : null}
      {glow ? (
        <div
          className="glow-radial pointer-events-none absolute -top-40 right-[-10%] size-[34rem] opacity-40"
          aria-hidden="true"
        />
      ) : null}
      <div className="wrap relative">{children}</div>
    </section>
  )
}

/** Espaçamento interno padrao de grades de cards. */
export const gridGap = 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'