import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'

/**
 * Diferenciais em formato de lista (em vez de grade de cards) para variar o
 * ritmo visual da pagina e evitar aparencia de template repetido.
 */
export function DifferentialSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy" glow>
      <SectionHeading
        eyebrow={dict.differential.eyebrow}
        title={dict.differential.title}
      />

      <ul className="mt-12 grid gap-x-14 gap-y-2 lg:grid-cols-2">
        {dict.differential.items.map((item, index) => (
          <Reveal key={item.title} as="li" delay={index * 60}>
            <div className="flex items-start gap-4 border-b border-white/8 py-6">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent-300/25 bg-accent-400/10 text-accent-300">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-300">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}