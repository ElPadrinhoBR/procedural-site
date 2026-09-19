import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'
import { routes } from '@/lib/site'

/**
 * Liderança: apresenta quem conduz o trabalho.
 * Usa a foto real do fundador (public/founder.jpg).
 */
export function FounderSection() {
  const { dict } = useI18n()

  return (
    <Section tone="navy">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-5">
            <img
              src="/founder.jpg"
              alt={dict.founder.name}
              loading="lazy"
              className="size-16 shrink-0 rounded-2xl border border-white/12 object-cover object-top"
            />
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
                {dict.founder.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white">{dict.founder.name}</h2>
              <p className="mt-1 text-sm text-graphite-400">{dict.founder.role}</p>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            {dict.founder.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-graphite-300">
                {paragraph}
              </p>
            ))}
          </div>

          <Button to={routes.contact} variant="outline-dark" className="mt-7" iconRight="arrowRight">
            {dict.ui.talkToSpecialist}
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
            {dict.founder.focusTitle}
          </h3>

          <ul className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            {dict.founder.focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-white/8 py-3.5 text-sm text-graphite-200"
              >
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-300" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}