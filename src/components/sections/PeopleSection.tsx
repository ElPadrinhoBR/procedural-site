import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'

/** Pessoas: os oito elementos que sustentam colaboração e responsabilidade. */
export function PeopleSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy" divider>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={dict.people.eyebrow}
            title={dict.people.title}
            lead={dict.people.lead}
          />

          <Reveal delay={120} className="mt-8">
            <blockquote className="border-l-2 border-accent-400 pl-5 font-display text-lg text-white italic">
              {dict.people.quote}
            </blockquote>
          </Reveal>
        </div>

        <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          {dict.people.items.map((item, index) => (
            <Reveal key={item} as="li" delay={index * 45}>
              <p className="flex items-start gap-3 border-b border-white/8 py-3.5 text-sm leading-relaxed text-graphite-200">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-300" />
                {item}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}