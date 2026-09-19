import { ApproachSection } from '@/components/sections/ApproachSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { GovernanceSection } from '@/components/sections/GovernanceSection'
import { IndicatorsSection } from '@/components/sections/IndicatorsSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { PageHero } from '@/components/sections/PageHero'
import { PeopleSection } from '@/components/sections/PeopleSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { WaySection } from '@/components/sections/WaySection'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/** Método: filosofia, fluxo, etapas, medição, governança e pessoas. */
export default function Method() {
  const { dict } = useI18n()
  useSeo('method')

  return (
    <>
      <PageHero
        eyebrow={dict.method.eyebrow}
        title={dict.pages.method.title}
        lead={dict.pages.method.lead}
      />
      <WaySection />
      <ApproachSection />
      <MethodSection />
      <IndicatorsSection />
      <GovernanceSection />
      <PeopleSection />
      <ProblemSection />
      <CtaSection />
      <ContactSection pageLabel={dict.pages.method.label} />
    </>
  )
}