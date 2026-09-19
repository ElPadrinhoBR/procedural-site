import { ContactSection } from '@/components/sections/ContactSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { PageHero } from '@/components/sections/PageHero'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/** Insights: pauta editorial prevista, sem artigos ou números inventados. */
export default function Insights() {
  const { dict } = useI18n()
  useSeo('insights')

  return (
    <>
      <PageHero
        eyebrow={dict.insights.eyebrow}
        title={dict.pages.insights.title}
        lead={dict.pages.insights.lead}
      />
      <InsightsSection />
      <CtaSection />
      <ContactSection pageLabel={dict.pages.insights.label} />
    </>
  )
}