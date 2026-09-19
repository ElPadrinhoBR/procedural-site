import { ConnectionBackdrop } from '@/components/diagrams/ConnectionBackdrop'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useI18n } from '@/i18n'
import { routes } from '@/lib/site'
import { stepNumber } from '@/lib/utils'

/**
 * Primeira tela: fundo navy profundo com grade, fluxos e nos de processo.
 * A coluna da direita materializa o ciclo de execução como um sistema —
 * reforçando o posicionamento em vez de usar um mockup genérico.
 */
export function Hero() {
  const { dict } = useI18n()

  return (
    <section className="relative overflow-hidden bg-navy-950 pt-16 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <ConnectionBackdrop />
      <div
        className="glow-radial pointer-events-none absolute -top-40 left-[-12%] size-[36rem] opacity-45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950"
        aria-hidden="true"
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.14em] text-graphite-200 uppercase">
            <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            {dict.hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-white sm:text-5xl lg:text-[3.4rem]">
            {dict.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite-300 sm:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to={routes.about} variant="primary" size="lg" iconRight="arrowRight">
              {dict.hero.ctaPrimary}
            </Button>
            <Button to={routes.contact} variant="outline-dark" size="lg">
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          <p className="mt-10 flex items-start gap-3 text-sm text-graphite-400 italic">
            <span className="mt-0.5 h-8 w-px bg-gradient-to-b from-accent-300 to-transparent" aria-hidden="true" />
            {dict.hero.quote}
          </p>
        </div>

        {/* Painel do ciclo de execução */}
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/25 via-transparent to-accent-400/20 blur-2xl"
            aria-hidden="true"
          />
          <div className="rounded-3xl border border-white/12 bg-navy-900/70 p-6 backdrop-blur-sm sm:p-7">
            <p className="font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
              {dict.approach.title}
            </p>

            <ol className="mt-6 space-y-4">
              {dict.approach.flow.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05] font-display text-[0.7rem] font-semibold text-accent-300">
                    {stepNumber(index)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white">{step.title}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-graphite-400">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-6 flex items-start gap-2.5 border-t border-white/8 pt-5 text-xs leading-relaxed text-graphite-400">
              <Icon name="repeat" className="mt-0.5 size-3.5 shrink-0 text-accent-300" />
              {dict.approach.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}