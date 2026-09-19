import { FeatureCard } from '@/components/ui/FeatureCard'
import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'

/** Governança em quatro dimensões: responsabilidades, riscos, decisões, indicadores. */
export function GovernanceSection() {
  const { dict } = useI18n()

  return (
    <Section tone="light-alt">
      <SectionHeading
        tone="light"
        eyebrow={dict.governance.eyebrow}
        title={dict.governance.title}
        lead={dict.governance.lead}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.governance.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className="h-full">
            <FeatureCard item={item} tone="light" />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <NoteBox tone="light" icon="shield">
          {dict.governance.note}
        </NoteBox>
      </Reveal>
    </Section>
  )
}