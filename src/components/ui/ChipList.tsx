import { cn } from '@/lib/utils'

type ChipListProps = {
  items: readonly string[]
  tone?: 'dark' | 'light'
  className?: string
  /** Destaque para o primeiro item (usado em faixas de posicionamento). */
  highlightFirst?: boolean
}

/** Lista de topicos em formato de "pills", util para publico-alvo e indicadores. */
export function ChipList({ items, tone = 'dark', className, highlightFirst = false }: ChipListProps) {
  const isDark = tone === 'dark'

  return (
    <ul className={cn('flex flex-wrap gap-2.5', className)}>
      {items.map((item, index) => (
        <li
          key={item}
          className={cn(
            'rounded-full border px-4 py-2 text-sm transition-colors duration-200',
            isDark
              ? 'border-white/12 bg-white/[0.04] text-graphite-200 hover:border-accent-300/40 hover:text-white'
              : 'border-navy-900/10 bg-white text-graphite-700 hover:border-brand-500/40',
            highlightFirst && index === 0 && isDark && 'border-accent-300/45 text-white',
            highlightFirst && index === 0 && !isDark && 'border-brand-500/45 text-navy-900',
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}