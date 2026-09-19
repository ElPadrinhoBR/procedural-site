import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'
import { routes } from '@/lib/site'

/** Chamada final: próximo passo claro, com no máximo duas ações. */
export function CtaSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy-alt" glow className="py-16 sm:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-navy-800/80 via-navy-900/60 to-navy-950/80 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl leading-snug font-semibold text-white sm:text-3xl">
                {dict.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite-300 sm:text-base">
                {dict.cta.text}
              </p>
              <p className="mt-4 text-xs text-graphite-400">{dict.cta.note}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button to={routes.contact} variant="primary" size="lg" iconRight="arrowRight" fullWidth>
                {dict.cta.primary}
              </Button>
              <Button to={routes.solutions} variant="outline-dark" size="lg" fullWidth>
                {dict.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}