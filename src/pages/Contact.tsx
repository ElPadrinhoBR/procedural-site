import { ContactSection } from '@/components/sections/ContactSection'
import { GovernanceSection } from '@/components/sections/GovernanceSection'
import { IndicatorsSection } from '@/components/sections/IndicatorsSection'
import { PageHero } from '@/components/sections/PageHero'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/** Contato: formulário no topo (objetivo do visitante) + contexto do que resolvemos. */
export default function Contact() {
  const { dict } = useI18n()
  useSeo('contact')

  return (
    <>
      <PageHero
        eyebrow={dict.contact.eyebrow}
        title={dict.pages.contact.title}
        lead={dict.pages.contact.lead}
      />
      <ContactSection pageLabel={dict.pages.contact.label} />
      <ProblemSection />
      <ServicesSection />
      <IndicatorsSection />
      <GovernanceSection />
    </>
  )
}