import { languages, useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

type LanguageSwitcherProps = {
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Seletor PT / EN / ES. A preferencia fica salva no navegador e o atributo
 * lang do <html> acompanha a troca (importante para leitores de tela).
 */
export function LanguageSwitcher({ tone = 'dark', className }: LanguageSwitcherProps) {
  const { lang, setLang, dict } = useI18n()
  const isDark = tone === 'dark'

  return (
    <div
      role="group"
      aria-label={dict.ui.language}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border p-1',
        isDark ? 'border-white/12 bg-white/[0.04]' : 'border-navy-900/12 bg-white',
        className,
      )}
    >
      {languages.map((option) => {
        const isActive = option === lang

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={isActive}
            title={option.toUpperCase()}
            className={cn(
              'min-w-9 rounded-full px-2.5 py-1.5 font-display text-xs font-semibold tracking-[0.12em] transition-colors duration-200',
              isActive
                ? isDark
                  ? 'bg-accent-400 text-navy-950'
                  : 'bg-navy-900 text-white'
                : isDark
                  ? 'text-graphite-300 hover:text-white'
                  : 'text-graphite-500 hover:text-navy-900',
            )}
          >
            {option.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}