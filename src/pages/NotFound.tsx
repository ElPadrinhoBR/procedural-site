import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/i18n'
import { routes } from '@/lib/site'

/** 404: mantém a navegação viva em endereços inexistentes (inclusive no GitHub Pages). */
export default function NotFound() {
  const { dict } = useI18n()

  return (
    <Section tone="navy" className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-6xl font-semibold text-accent-300">404</p>
        <h1 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-graphite-300 sm:text-base">{dict.notFound.text}</p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to={routes.home} variant="primary" iconRight="arrowRight">
            {dict.nav.home}
          </Button>
          <Button to={routes.contact} variant="outline-dark">
            {dict.ui.talkToSpecialist}
          </Button>
        </div>
      </div>
    </Section>
  )
}