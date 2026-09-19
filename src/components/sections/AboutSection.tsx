import { FeatureCard } from '@/components/ui/FeatureCard'
import { NoteBox } from '@/components/ui/NoteBox'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'

/** Sobre: posicionamento, princípios e o aviso de transparência sobre provas sociais. */
export function AboutSection() {
  const { dict } = useI18n()

  return (
    <Section id="sobre" tone="navy-alt">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} />

          <div className="mt-7 space-y-4">
            {dict.about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="text-sm leading-relaxed text-graphite-300 sm:text-base">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <NoteBox icon="eye">{dict.about.note}</NoteBox>
          </Reveal>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
            {dict.about.valuesTitle}
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {dict.about.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70} className="h-full">
                <FeatureCard item={value} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}