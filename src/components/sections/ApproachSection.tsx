import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StepCard } from '@/components/ui/StepCard'
import { useI18n } from '@/i18n'
import { cn, stepNumber } from '@/lib/utils'

/**
 * Como trabalhamos: o raciocínio "entender → decidir → executar → medir →
 * aprender → evoluir" apresentado como fluxo, não como lista solta.
 */
export function ApproachSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy-alt">
      <SectionHeading eyebrow={dict.approach.eyebrow} title={dict.approach.title} lead={dict.approach.lead} />

      <ol className={cn('mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3')}>
        {dict.approach.flow.map((step, index) => (
          <Reveal key={step.title} as="li" delay={index * 70} className="h-full">
            <StepCard number={stepNumber(index)} title={step.title} text={step.text} />
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10">
        <NoteBox icon="repeat">{dict.approach.note}</NoteBox>
      </Reveal>
    </Section>
  )
}