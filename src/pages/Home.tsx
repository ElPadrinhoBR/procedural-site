import { AboutSection } from '@/components/sections/AboutSection'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { DifferentialSection } from '@/components/sections/DifferentialSection'
import { GovernanceSection } from '@/components/sections/GovernanceSection'
import { Hero } from '@/components/sections/Hero'
import { IndicatorsSection } from '@/components/sections/IndicatorsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { PeopleSection } from '@/components/sections/PeopleSection'
import { PositioningStrip } from '@/components/sections/PositioningStrip'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WaySection } from '@/components/sections/WaySection'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/**
 * Pagina inicial: apresenta quem somos, o problema que resolvemos, como
 * trabalhamos e qual é o próximo passo — na ordem em que o visitante decide.
 */
export default function Home() {
  const { dict } = useI18n()
  useSeo('home')

  return (
    <>
      <Hero />
      <PositioningStrip />
      <WaySection />
      <ProblemSection />
      <ApproachSection />
      <ServicesSection />
      <DifferentialSection />
      <MethodSection />
      <IndicatorsSection />
      <GovernanceSection />
      <PeopleSection />
      <InsightsSection />
      <AboutSection />
      <CtaSection />
      <ContactSection pageLabel={dict.pages.home.label} />
    </>
  )
}