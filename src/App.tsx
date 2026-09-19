import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LanguageProvider } from '@/i18n'
import { routes } from '@/lib/site'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Insights from '@/pages/Insights'
import Method from '@/pages/Method'
import NotFound from '@/pages/NotFound'
import Solutions from '@/pages/Solutions'

/**
 * HashRouter + `base: './'` no Vite: o mesmo build funciona tanto em um dominio
 * proprio quanto em usuario.github.io/<repositorio>/, sem depender de
 * redirecionamento no servidor (o GitHub Pages so entrega arquivos estaticos).
 */
export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.solutions} element={<Solutions />} />
            <Route path={routes.method} element={<Method />} />
            <Route path={routes.insights} element={<Insights />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}