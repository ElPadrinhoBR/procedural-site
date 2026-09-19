import { ChipList } from '@/components/ui/ChipList'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'

/**
 * Faixa de posicionamento: mostra as disciplinas em que a Procedural atua
 * como um sistema (não como serviços soltos) e o publico atendido.
 */
export function PositioningStrip() {
  const { dict } = useI18n()

  return (
    <Section tone="navy-alt" divider className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl leading-snug font-semibold text-white sm:text-3xl">
            {dict.positioning.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-graphite-300 sm:text-base">
            {dict.positioning.lead}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ChipList items={dict.positioning.chips} highlightFirst />

          <h3 className="mt-10 font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
            {dict.audience.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-graphite-300">{dict.audience.lead}</p>
          <ChipList items={dict.audience.items} className="mt-5" />
        </Reveal>
      </div>
    </Section>
  )
}