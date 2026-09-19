import { useEffect } from 'react'
import { useI18n, type Dict } from '@/i18n'

type SeoPage = keyof Dict['seo']

function setMeta(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

/**
 * Atualiza titulo e metadados a cada troca de rota ou de idioma.
 * Mantem Open Graph e Twitter coerentes com o que o visitante esta vendo.
 */
export function useSeo(page: SeoPage) {
  const { dict } = useI18n()

  useEffect(() => {
    const { title, description } = dict.seo[page]

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:locale', dict.locale.replace('-', '_'))
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
  }, [dict, page])
}
