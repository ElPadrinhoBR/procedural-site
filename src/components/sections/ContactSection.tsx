import { ContactForm } from '@/components/ui/ContactForm'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'
import { SITE_EMAIL } from '@/lib/site'

/**
 * Contato: coluna de contexto + formulario.
 * O rotulo da pagina alimenta o assunto do e-mail recebido
 * (ex.: "[Site Procedural] Contato — Português").
 */
export function ContactSection({ pageLabel }: { pageLabel: string }) {
  const { dict } = useI18n()

  return (
    <Section id="contato" tone="navy" divider>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={dict.contact.eyebrow}
            title={dict.contact.title}
            lead={dict.contact.lead}
          />

          <Reveal delay={80} className="mt-8">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-4 transition-colors duration-200 hover:border-accent-300/40"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg border border-accent-300/25 bg-accent-400/10 text-accent-300">
                <Icon name="mail" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-[0.16em] text-graphite-400 uppercase">
                  {dict.contact.emailLabel}
                </span>
                <span className="mt-0.5 block text-sm break-all text-white">{SITE_EMAIL}</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={140} className="mt-9">
            <h3 className="font-display text-xs font-semibold tracking-[0.24em] text-accent-300 uppercase">
              {dict.contact.subjectsTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {dict.contact.subjects.map((subject) => (
                <li key={subject} className="flex items-start gap-3 text-sm leading-relaxed text-graphite-300">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-300" />
                  {subject}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-white/12 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="font-display text-xl font-semibold text-white">{dict.contact.form.title}</h2>
            <p className="mt-2 mb-7 text-sm text-graphite-400">{dict.ui.formOriginNote}</p>
            <ContactForm pageLabel={pageLabel} />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}