import { FeatureCard } from '@/components/ui/FeatureCard'
import { Reveal } from '@/components/ui/Reveal'
import { Section, gridGap } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

/** Diagnóstico do problema: fundo claro para criar contraste e respirar. */
export function ProblemSection() {
  const { dict } = useI18n()

  return (
    <Section tone="light">
      <SectionHeading
        tone="light"
        eyebrow={dict.problem.eyebrow}
        title={dict.problem.title}
        lead={dict.problem.lead}
      />

      <div className={cn(gridGap, 'mt-12')}>
        {dict.problem.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className="h-full">
            <FeatureCard item={item} tone="light" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}