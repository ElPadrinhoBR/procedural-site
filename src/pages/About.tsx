import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { PageHero } from '@/components/sections/PageHero'
import { PeopleSection } from '@/components/sections/PeopleSection'
import { PositioningStrip } from '@/components/sections/PositioningStrip'
import { useSeo } from '@/hooks/useSeo'
import { useI18n } from '@/i18n'

/** Sobre: posicionamento, princípios, liderança e público atendido. */
export default function About() {
  const { dict } = useI18n()
  useSeo('about')

  return (
    <>
      <PageHero
        eyebrow={dict.about.eyebrow}
        title={dict.pages.about.title}
        lead={dict.pages.about.lead}
      />
      <AboutSection />
      <FounderSection />
      <PeopleSection />
      <PositioningStrip />
      <CtaSection />
      <ContactSection pageLabel={dict.pages.about.label} />
    </>
  )
}