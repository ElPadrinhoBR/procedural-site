import { Icon } from './Icon'
import type { FeatureItem } from '@/i18n/types'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  item: FeatureItem
  tone?: 'dark' | 'light'
  className?: string
}

/** Card padrao: icone, titulo e texto. Usado em problema, servicos e diferenciais. */
export function FeatureCard({ item, tone = 'dark', className }: FeatureCardProps) {
  const isDark = tone === 'dark'

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300',
        isDark
          ? 'border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-accent-300/35 hover:bg-white/[0.055]'
          : 'border-navy-900/8 bg-white shadow-[0_1px_2px_rgba(6,13,27,0.05)] hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-[0_18px_40px_-24px_rgba(6,13,27,0.35)]',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex size-11 items-center justify-center rounded-xl border',
          isDark
            ? 'border-accent-300/25 bg-accent-400/10 text-accent-300'
            : 'border-brand-500/20 bg-brand-500/8 text-brand-600',
        )}
      >
        <Icon name={item.icon} className="size-5" />
      </span>

      <h3
        className={cn(
          'mt-5 font-display text-lg leading-snug font-semibold',
          isDark ? 'text-white' : 'text-navy-900',
        )}
      >
        {item.title}
      </h3>

      <p className={cn('mt-3 text-sm leading-relaxed', isDark ? 'text-graphite-300' : 'text-graphite-600')}>
        {item.text}
      </p>
    </article>
  )
}