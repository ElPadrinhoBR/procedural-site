import { Icon } from '@/components/ui/Icon'
import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StepCard } from '@/components/ui/StepCard'
import { useI18n } from '@/i18n'
import { stepNumber } from '@/lib/utils'

/**
 * Método: as seis etapas do ciclo + o que fica com a organização ao final.
 * O bloco de entregáveis existe para responder "o que eu recebo disso?".
 */
export function MethodSection() {
  const { dict } = useI18n()

  return (
    <Section id="metodo" tone="light">
      <SectionHeading
        tone="light"
        eyebrow={dict.method.eyebrow}
        title={dict.method.title}
        lead={dict.method.lead}
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.method.steps.map((step, index) => (
          <Reveal key={step.title} as="li" delay={index * 60} className="h-full">
            <StepCard number={stepNumber(index)} title={step.title} text={step.text} tone="light" />
          </Reveal>
        ))}
      </ol>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-500/25 bg-white text-brand-600">
              <Icon name="repeat" className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
              {dict.method.cycleTitle}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-graphite-600">{dict.method.cycleText}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="font-display text-xs font-semibold tracking-[0.24em] text-brand-600 uppercase">
            {dict.method.deliverablesTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {dict.method.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-graphite-600">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-600" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <NoteBox tone="light" icon="layers">
          {dict.method.systemNote}
        </NoteBox>
      </Reveal>
    </Section>
  )
}