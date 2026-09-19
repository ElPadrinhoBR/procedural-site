import { SITE_EMAIL, SITE_URL } from './site'

/**
 * Envio do formulario de contato via FormSubmit.co (gratuito, sem backend).
 *
 * Endpoint com o e-mail em texto puro: o GitHub Pages nao executa codigo,
 * entao nao existe backend para proteger essa informacao.
 * A ofuscacao por hash so pode ser gerada depois do primeiro envio,
 * conforme a documentacao do proprio servico.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${SITE_EMAIL}`

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const MIN_MESSAGE_LENGTH = 20
const REQUEST_TIMEOUT_MS = 15000

export type ContactFormValues = {
  name: string
  company: string
  role: string
  email: string
  phone: string
  teamSize: string
  challenge: string
  message: string
}

/** De onde a mensagem foi enviada (usado no assunto do e-mail recebido). */
export type FormOrigin = {
  pageLabel: string
  path: string
  langLabel: string
  url: string
}

export type SubmitOutcome = { ok: true } | { ok: false }

function buildPayload(values: ContactFormValues, origin: FormOrigin) {
  return {
    // Assunto pedido pelo cliente: precisa indicar de qual pagina a mensagem veio.
    _subject: `[Site Procedural] ${origin.pageLabel} — ${origin.langLabel}`,
    _template: 'table',
    _captcha: 'false',

    // Bloco de contexto (primeiras linhas da mensagem recebida).
    'Origem (pagina)': origin.pageLabel,
    'Origem (rota)': origin.path,
    Idioma: origin.langLabel,
    URL: origin.url,

    Nome: values.name,
    Empresa: values.company,
    Cargo: values.role,
    'E-mail': values.email,
    'Telefone / WhatsApp': values.phone,
    'Tamanho da equipe': values.teamSize,
    'Principal desafio': values.challenge,
    Mensagem: values.message,
  }
}

export async function sendContactMessage(
  values: ContactFormValues,
  origin: FormOrigin,
): Promise<SubmitOutcome> {
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(buildPayload(values, origin)),
      signal: controller.signal,
    })

    return response.ok ? { ok: true } : { ok: false }
  } catch {
    // Rede indisponivel, timeout ou endpoint bloqueado pelo navegador.
    return { ok: false }
  } finally {
    window.clearTimeout(timeoutId)
  }
}

/** Monta o contexto de origem a partir da pagina atual. */
export function currentOrigin(pageLabel: string, langLabel: string, path: string): FormOrigin {
  const base =
    typeof window === 'undefined' ? SITE_URL : `${window.location.origin}${window.location.pathname}`

  return {
    pageLabel,
    path,
    langLabel,
    // Inclui a ancora da rota (HashRouter) para o destino ser rastreavel.
    url: `${base}${typeof window === 'undefined' ? '' : window.location.hash}`,
  }
}