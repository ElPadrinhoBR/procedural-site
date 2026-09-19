import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import { useI18n } from '@/i18n'
import { routes } from '@/lib/site'
import { cn } from '@/lib/utils'

const navItems = [
  { to: routes.home, key: 'home' },
  { to: routes.solutions, key: 'solutions' },
  { to: routes.method, key: 'method' },
  { to: routes.insights, key: 'insights' },
  { to: routes.about, key: 'about' },
  { to: routes.contact, key: 'contact' },
] as const

export function Header() {
  const { dict } = useI18n()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fecha o menu ao navegar.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Fecha com Esc (acessibilidade por teclado).
  useEffect(() => {
    if (!menuOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Header ganha contraste depois de rolar a pagina.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative py-2 text-sm transition-colors duration-200',
      isActive ? 'text-white' : 'text-graphite-300 hover:text-white',
      isActive &&
        'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-accent-300',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-white/10 bg-navy-950/92 backdrop-blur-md'
          : 'border-transparent bg-navy-950/60 backdrop-blur-sm',
      )}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link to={routes.home} aria-label={`${dict.nav.home} — Procedural`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label={dict.ui.menu} className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses} end={item.to === routes.home}>
              {dict.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button to={routes.contact} variant="primary" size="sm">
            {dict.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {/* Em telas muito estreitas o seletor fica dentro do menu, para nao espremer o logo. */}
          <span className="hidden min-[420px]:block">
            <LanguageSwitcher className="scale-95" />
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? dict.ui.closeMenu : dict.ui.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-white transition-colors duration-200 hover:border-accent-300/50"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </div>

      {/* Painel de navegacao mobile */}
      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-navy-950/98 backdrop-blur-md lg:hidden"
      >
        <nav aria-label={dict.ui.menu} className="wrap flex flex-col py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === routes.home}
              className={({ isActive }) =>
                cn(
                  'border-b border-white/5 py-3.5 text-base transition-colors duration-200',
                  isActive ? 'text-accent-300' : 'text-graphite-200 hover:text-white',
                )
              }
            >
              {dict.nav[item.key]}
            </NavLink>
          ))}

          <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3">
            <span className="text-sm text-graphite-300">{dict.ui.language}</span>
            <LanguageSwitcher />
          </div>

          <Button to={routes.contact} variant="primary" size="md" className="mt-4" fullWidth>
            {dict.nav.cta}
          </Button>
        </nav>
      </div>
    </header>
  )
}