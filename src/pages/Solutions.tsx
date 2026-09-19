import { ContactSection } from '@/components/sections/ContactSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { DifferentialSection } from '@/components/sections/DifferentialSection'
import { GovernanceSection } from '@/components/sections/GovernanceSection'
import { IndicatorsSection } from '@/components/sections/IndicatorsSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { PageHero } from '@/components/sections/PageHero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/** Soluções em profundidade: problema, frente de trabalho, método e medição. */
export default function Solutions() {
  const { dict } = useI18n()
  useSeo('solutions')

  return (
    <>
      <PageHero
        eyebrow={dict.services.eyebrow}
        title={dict.pages.solutions.title}
        lead={dict.pages.solutions.lead}
      />
      <ServicesSection />
      <ProblemSection />
      <DifferentialSection />
      <GovernanceSection />
      <MethodSection />
      <IndicatorsSection />
      <CtaSection />
      <ContactSection pageLabel={dict.pages.solutions.label} />
    </>
  )
}