import { CountUp } from '@/components/ui/CountUp'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'
import { stepNumber } from '@/lib/utils'

/**
 * Procedural Way: os cinco pilares apresentados como sistema conectado,
 * seguidos dos numeros factuais do proprio metodo.
 */
export function WaySection() {
  const { dict } = useI18n()

  return (
    <Section id="procedural-way" tone="navy" glow>
      <SectionHeading eyebrow={dict.way.eyebrow} title={dict.way.title} lead={dict.way.lead} />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {dict.way.items.map((item, index) => (
          <Reveal key={item.title} as="li" delay={index * 80} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-accent-300/35">
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-accent-300">
                {stepNumber(index)}
              </span>
              <Icon name={item.icon} className="mt-4 size-5 text-graphite-200" />
              <h3 className="mt-3 font-display text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-300">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-12 grid gap-10 border-t border-white/8 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <h3 className="font-display text-xl font-semibold text-white">{dict.way.systemTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-graphite-300 sm:text-base">
            {dict.way.systemText}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-3 gap-6">
            {dict.way.stats.map((stat) => (
              <div key={stat.label}>
                <dd>
                  <CountUp value={stat.value} />
                </dd>
                <dt className="mt-2 text-xs leading-relaxed text-graphite-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}