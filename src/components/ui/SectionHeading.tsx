import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lead?: string
  /** 'dark' = sobre fundo escuro (texto claro). 'light' = sobre fundo claro. */
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  align = 'left',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'flex items-center gap-3 font-display text-[0.7rem] font-semibold tracking-[0.28em] uppercase',
            align === 'center' && 'justify-center',
            isDark ? 'text-accent-300' : 'text-brand-600',
          )}
        >
          <span
            className={cn('h-px w-8', isDark ? 'bg-accent-300/60' : 'bg-brand-500/50')}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          'mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.7rem]',
          isDark ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            isDark ? 'text-graphite-300' : 'text-graphite-600',
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}