import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  /** Atraso em milissegundos para criar efeito em cascata. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Envolve conteudo em uma animacao de entrada suave, disparada quando o
 * elemento entra na area visivel. Sem JavaScript de terceiros.
 */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  )
}