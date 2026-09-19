import { Link } from 'react-router-dom'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { useI18n } from '@/i18n'
import { SITE_EMAIL, routes } from '@/lib/site'

export function Footer() {
  const { dict } = useI18n()
  const year = new Date().getFullYear()

  const navLinks = [
    { to: routes.home, label: dict.nav.home },
    { to: routes.solutions, label: dict.nav.solutions },
    { to: routes.method, label: dict.nav.method },
    { to: routes.insights, label: dict.nav.insights },
    { to: routes.about, label: dict.nav.about },
    { to: routes.contact, label: dict.nav.contact },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="wrap py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-300">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-graphite-400">
              {dict.footer.note}
            </p>
          </div>

          <nav aria-label={dict.footer.navTitle}>
            <h2 className="font-display text-xs font-semibold tracking-[0.22em] text-white uppercase">
              {dict.footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-graphite-300 transition-colors duration-200 hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold tracking-[0.22em] text-white uppercase">
              {dict.footer.solutionsTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {dict.footer.solutionsLinks.map((label) => (
                <li key={label}>
                  <Link
                    to={routes.solutions}
                    className="text-sm text-graphite-300 transition-colors duration-200 hover:text-accent-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs font-semibold tracking-[0.22em] text-white uppercase">
              {dict.footer.contactTitle}
            </h2>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-5 inline-flex items-start gap-2.5 text-sm text-graphite-300 transition-colors duration-200 hover:text-accent-300"
            >
              <Icon name="mail" className="mt-0.5 size-4 shrink-0" />
              <span className="break-all">{SITE_EMAIL}</span>
            </a>
            <Link
              to={routes.contact}
              className="mt-4 inline-flex items-center gap-2 text-sm text-accent-300 transition-colors duration-200 hover:text-accent-200"
            >
              {dict.ui.talkToSpecialist}
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-graphite-400">
            © {year} Procedural — Gestão Ágil. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-graphite-400">{dict.footer.languages}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}