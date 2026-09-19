import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { LanguageProvider, dictionaries, languages, type Dict } from '@/i18n'
import { routes } from '@/lib/site'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Insights from '@/pages/Insights'
import Method from '@/pages/Method'
import NotFound from '@/pages/NotFound'
import Solutions from '@/pages/Solutions'

/**
 * Verificacao de runtime sem navegador.
 *
 * Renderiza todas as paginas nos tres idiomas com react-dom/server. Isso pega
 * erros que o TypeScript nao ve: chave inexistente em tempo de execucao,
 * componente que quebra ao montar, texto faltando em alguma lingua.
 *
 * Uso: npm run smoke
 */
type PageCase = {
  label: string
  path: string
  Component: () => React.JSX.Element
  expected: (dict: Dict) => string
}

const pageCases: PageCase[] = [
  {
    label: 'Home',
    path: routes.home,
    Component: Home,
    expected: (dict) => dict.hero.title,
  },
  {
    label: 'Soluções',
    path: routes.solutions,
    Component: Solutions,
    expected: (dict) => dict.pages.solutions.title,
  },
  {
    label: 'Método',
    path: routes.method,
    Component: Method,
    expected: (dict) => dict.pages.method.title,
  },
  {
    label: 'Insights',
    path: routes.insights,
    Component: Insights,
    expected: (dict) => dict.pages.insights.title,
  },
  {
    label: 'Sobre',
    path: routes.about,
    Component: About,
    expected: (dict) => dict.pages.about.title,
  },
  {
    label: 'Contato',
    path: routes.contact,
    Component: Contact,
    expected: (dict) => dict.pages.contact.title,
  },
  {
    label: '404',
    path: '/rota-inexistente',
    Component: NotFound,
    expected: (dict) => dict.notFound.title,
  },
]

/**
 * Renderiza a pagina dentro do Layout (header + footer + conteudo), que e
 * exatamente a arvore montada no navegador.
 */
function renderPage(lang: 'pt' | 'en' | 'es', path: string, Page: () => React.JSX.Element) {
  return renderToString(
    <LanguageProvider initialLang={lang}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={path} element={<Page />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </LanguageProvider>,
  )
}

let failures = 0
let checks = 0

for (const lang of languages) {
  const dict = dictionaries[lang]

  for (const pageCase of pageCases) {
    checks += 1
    const Page = pageCase.Component

    try {
      const html = renderPage(lang, pageCase.path, Page)

      const expected = pageCase.expected(dict)
      const hasContent = html.includes(expected)
      const hasMarkup = html.length > 1500
      // Garante que nenhum valor escapou para a tela como texto invalido.
      const broken = ['undefined', 'NaN', '[object Object]'].filter((token) =>
        html.includes(token),
      )

      if (!hasContent || !hasMarkup || broken.length > 0) {
        failures += 1
        console.error(
          `FALHOU  ${lang.toUpperCase()}  ${pageCase.label}  (texto esperado: "${expected}", html=${html.length} bytes${
            broken.length > 0 ? `, invalidos: ${broken.join(', ')}` : ''
          })`,
        )
      } else {
        console.log(`ok      ${lang.toUpperCase()}  ${pageCase.label}  (${html.length} bytes)`)
      }
    } catch (error) {
      failures += 1
      console.error(`ERRO    ${lang.toUpperCase()}  ${pageCase.label}: ${String(error)}`)
    }
  }
}

// Verificacao de navegacao: header e footer da Home apontam para todas as rotas.
{
  checks += 1
  const homeHtml = renderPage('pt', routes.home, Home)

  const missingRoutes = Object.values(routes).filter((route) => !homeHtml.includes(`href="${route}"`))

  if (missingRoutes.length > 0) {
    failures += 1
    console.error(`FALHOU  Navegação  rotas ausentes na Home: ${missingRoutes.join(', ')}`)
  } else {
    console.log(`ok      Navegação  ${Object.keys(routes).length} destinos presentes na Home`)
  }
}

console.log(`\n${checks - failures}/${checks} verificacoes aprovadas.`)

if (failures > 0) {
  process.exit(1)
}