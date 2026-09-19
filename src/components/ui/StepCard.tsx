import { cn } from '@/lib/utils'

type StepCardProps = {
  /** Numero ja formatado (ex.: "01"). */
  number: string
  title: string
  text: string
  tone?: 'dark' | 'light'
  className?: string
}

/** Card numerado usado nos pilares (Procedural Way) e nas etapas do método. */
export function StepCard({ number, title, text, tone = 'dark', className }: StepCardProps) {
  const isDark = tone === 'dark'

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300',
        isDark ? 'border-white/10 bg-white/[0.03]' : 'border-navy-900/8 bg-white',
        className,
      )}
    >
      <span
        className={cn(
          'font-display text-sm font-semibold tracking-[0.2em]',
          isDark ? 'text-accent-300' : 'text-brand-600',
        )}
      >
        {number}
      </span>

      <h3
        className={cn(
          'mt-3 font-display text-lg leading-snug font-semibold',
          isDark ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h3>

      <p className={cn('mt-2.5 text-sm leading-relaxed', isDark ? 'text-graphite-300' : 'text-graphite-600')}>
        {text}
      </p>
    </article>
  )
}