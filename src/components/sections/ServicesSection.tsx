import { FeatureCard } from '@/components/ui/FeatureCard'
import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section, gridGap } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

/**
 * Soluções: o que a Procedural faz hoje, com nota explícita sobre as frentes
 * que ainda estão em desenvolvimento (transparência combinada com o cliente).
 */
export function ServicesSection() {
  const { dict } = useI18n()

  return (
    <Section id="solucoes" tone="light-alt">
      <SectionHeading
        tone="light"
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        lead={dict.services.lead}
      />

      <div className={cn(gridGap, 'mt-12')}>
        {dict.services.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className="h-full">
            <FeatureCard item={item} tone="light" />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <NoteBox tone="light">{dict.services.note}</NoteBox>
      </Reveal>
    </Section>
  )
}