import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Icon } from '@/components/ui/Icon'
import { useI18n } from '@/i18n'

/** Ao trocar de rota, volta ao topo (comportamento esperado em site multi-pagina). */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function BackToTop() {
  const { dict } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 720)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={dict.ui.backToTop}
      className="fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-navy-900/90 text-white backdrop-blur transition-colors duration-200 hover:border-accent-300/60 hover:text-accent-300"
    >
      <Icon name="arrowRight" className="size-4 -rotate-90" />
    </button>
  )
}

export function Layout() {
  const { dict } = useI18n()

  return (
    <div className="flex min-h-dvh flex-col bg-navy-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy-950"
      >
        {dict.ui.skipToContent}
      </a>

      <ScrollToTop />
      <Header />

      <main id="main" className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}