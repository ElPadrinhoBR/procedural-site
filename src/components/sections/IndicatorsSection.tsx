import { ChipList } from '@/components/ui/ChipList'
import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'

/** Indicadores: o que passa a ser medido — sem prometer números que não existem. */
export function IndicatorsSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy-alt">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={dict.indicators.eyebrow}
            title={dict.indicators.title}
            lead={dict.indicators.lead}
          />
        </Reveal>

        <Reveal delay={120}>
          <ChipList items={dict.indicators.items} />
          <NoteBox className="mt-6" icon="chart">
            {dict.indicators.note}
          </NoteBox>
        </Reveal>
      </div>
    </Section>
  )
}