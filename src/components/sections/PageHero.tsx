import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

type PageHeroProps = {
  eyebrow: string
  title: string
  lead: string
  children?: ReactNode
}

/**
 * Cabecalho padrao das paginas internas.
 * Mantem a mesma abertura em Soluções, Método, Insights, Sobre e Contato,
 * garantindo consistencia visual entre as rotas.
 */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="glow-radial pointer-events-none absolute -top-32 right-[-6%] size-[28rem] opacity-35"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} as="h1" />
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}