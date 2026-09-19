import type { ReactNode } from 'react'
import { Icon } from './Icon'
import type { IconName } from '@/i18n/types'
import { cn } from '@/lib/utils'

type NoteBoxProps = {
  children: ReactNode
  tone?: 'dark' | 'light'
  icon?: IconName
  className?: string
}

/**
 * Nota de transparencia: usado para avisos de "em desenvolvimento",
 * limites do método e informacoes que nao devem passar como promessa.
 */
export function NoteBox({ children, tone = 'dark', icon = 'alert', className }: NoteBoxProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'flex items-start gap-3.5 rounded-xl border px-5 py-4 text-sm leading-relaxed',
        isDark ? 'border-white/10 bg-white/[0.03] text-graphite-300' : 'border-navy-900/10 bg-graphite-50 text-graphite-600',
        className,
      )}
    >
      <Icon
        name={icon}
        className={cn('mt-0.5 size-4 shrink-0', isDark ? 'text-accent-300' : 'text-brand-600')}
      />
      <p>{children}</p>
    </div>
  )
}