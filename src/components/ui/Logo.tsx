import { cn } from '@/lib/utils'
import { SITE_NAME } from '@/lib/site'

type LogoProps = {
  /** 'light' para fundos escuros (padrao) e 'dark' para fundos claros. */
  variant?: 'light' | 'dark'
  className?: string
  /** Oculta o wordmark em telas muito estreitas quando necessario. */
  showWordmark?: boolean
}

/**
 * Marca Procedural.
 *
 * O simbolo vem do arquivo de logotipo recortado (public/brand/symbol.png).
 * O wordmark e montado em HTML: fica nitido em qualquer resolucao e mantem a
 * tipografia do site, sem depender de um PNG com fundo escuro embutido.
 */
export function Logo({ variant = 'light', className, showWordmark = true }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <img
        src="./brand/symbol.png"
        alt=""
        width={40}
        height={44}
        className="h-9 w-auto shrink-0 sm:h-10"
        aria-hidden="true"
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[0.95rem] font-semibold tracking-[0.22em]',
              isLight ? 'text-white' : 'text-navy-900',
            )}
          >
            {SITE_NAME.toUpperCase()}
          </span>
          <span
            className={cn(
              'mt-1 font-display text-[0.55rem] font-medium tracking-[0.42em]',
              isLight ? 'text-accent-300' : 'text-brand-600',
            )}
          >
            GESTÃO ÁGIL
          </span>
        </span>
      ) : null}
    </span>
  )
}