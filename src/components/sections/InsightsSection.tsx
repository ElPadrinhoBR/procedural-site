import { Link } from 'react-router-dom'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/i18n'
import { insightSlugToRoute, routes } from '@/lib/site'

/**
 * Insights: grade de artigos publicados.
 * Cada card é um link para o artigo completo.
 */
export function InsightsSection() {
  const { dict } = useI18n()

  return (
    <Section tone="light">
      <SectionHeading
        tone="light"
        eyebrow={dict.insights.eyebrow}
        title={dict.insights.title}
        lead={dict.insights.lead}
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dict.insights.items.map((item, index) => (
          <Reveal key={item.slug} as="li" delay={index * 70} className="h-full">
            <Link
              to={insightSlugToRoute[item.slug as keyof typeof insightSlugToRoute]}
              className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-graphite-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_18px_40px_-20px_rgba(11,60,93,0.35)]"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/20 bg-white px-3 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-600 uppercase">
                {item.category}
              </span>

              <h3 className="mt-5 font-display text-base leading-snug font-semibold text-navy-900 transition-colors duration-200 group-hover:text-brand-700">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-600">{item.summary}</p>

              <p className="mt-5 flex items-center justify-between gap-2 border-t border-navy-900/8 pt-4 text-xs font-medium text-graphite-500">
                <span className="inline-flex items-center gap-2">
                  <Icon name="book" className="size-3.5" />
                  {item.readingMinutes} {dict.ui.minRead}
                </span>
                <span className="inline-flex items-center gap-1 text-brand-600 transition-colors duration-200 group-hover:text-brand-700">
                  {dict.ui.readArticle}
                  <Icon
                    name="arrowRight"
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </p>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <p className="text-sm text-graphite-600">
          {dict.insights.cta}{' '}
          <Link
            to={routes.contact}
            className="font-medium text-brand-600 underline decoration-brand-500/40 underline-offset-4 transition-colors duration-200 hover:text-brand-700"
          >
            {dict.ui.talkToSpecialist}
          </Link>
        </p>
      </Reveal>
    </Section>
  )
}