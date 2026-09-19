import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './translations/en'
import { es } from './translations/es'
import { pt, type Dict } from './translations/pt'
import type { Lang } from './types'

export const dictionaries: Record<Lang, Dict> = { pt, en, es }

/** Ordem exibida no seletor de idiomas. */
export const languages: Lang[] = ['pt', 'en', 'es']

export const defaultLang: Lang = 'pt'

const STORAGE_KEY = 'procedural:lang'

type LanguageContextValue = {
  lang: Lang
  /** Dicionario do idioma ativo. */
  dict: Dict
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLang(value: string | null | undefined): value is Lang {
  return value === 'pt' || value === 'en' || value === 'es'
}

/** Idioma salvo pelo visitante -> idioma do navegador -> portugues. */
function detectLang(): Lang {
  if (typeof window === 'undefined') return defaultLang

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    /* localStorage indisponivel (modo privado): segue para o idioma do navegador */
  }

  const candidates = [window.navigator.language, ...(window.navigator.languages ?? [])]
  for (const candidate of candidates) {
    const prefix = candidate?.slice(0, 2).toLowerCase()
    if (isLang(prefix)) return prefix
  }

  return defaultLang
}

export function LanguageProvider({
  children,
  /** Idioma inicial. Usado em testes (SSR) e disponivel para futuras rotas por idioma. */
  initialLang,
}: {
  children: ReactNode
  initialLang?: Lang
}) {
  const [lang, setLangState] = useState<Lang>(() => initialLang ?? detectLang())

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignorado: a preferencia vale apenas para a sessao atual */
    }
  }, [])

  // Mantem o atributo lang do <html> sincronizado (leitor de tela + SEO).
  useEffect(() => {
    document.documentElement.lang = dictionaries[lang].locale
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dict: dictionaries[lang], setLang }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useI18n precisa ser usado dentro de <LanguageProvider>')
  }

  return context
}

export type { Dict }
