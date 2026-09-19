/** Dados centralizados da marca e das rotas do site. */

export const SITE_EMAIL = 'santigarudananda@gmail.com'

export const SITE_NAME = 'Procedural'

/**
 * Rotas fixas (independentes do idioma ativo) para que um link compartilhado
 * funcione igual em PT, EN e ES.
 */
export const routes = {
  home: '/',
  solutions: '/solucoes',
  method: '/metodo',
  insights: '/insights',
  insightsAgility: '/insights/agilidade-ajustar-rota',
  insightsGovernance: '/insights/governanca-que-decide',
  insightsMetrics: '/insights/menos-indicadores-melhores-decisoes',
  about: '/sobre',
  contact: '/contato',
} as const

export type RouteKey = keyof typeof routes

/** Slugs dos artigos de Insights (parte fixa da rota, igual nos 3 idiomas). */
export const insightSlugs = ['agilidade-ajustar-rota', 'governanca-que-decide', 'menos-indicadores-melhores-decisoes'] as const

export type InsightSlug = (typeof insightSlugs)[number]

/** Mapeia a rota completa do artigo para o slug. */
export const insightRouteToSlug: Record<string, InsightSlug> = {
  [routes.insightsAgility]: 'agilidade-ajustar-rota',
  [routes.insightsGovernance]: 'governanca-que-decide',
  [routes.insightsMetrics]: 'menos-indicadores-melhores-decisoes',
}

/** Mapeia o slug para a rota completa do artigo. */
export const insightSlugToRoute: Record<InsightSlug, string> = {
  'agilidade-ajustar-rota': routes.insightsAgility,
  'governanca-que-decide': routes.insightsGovernance,
  'menos-indicadores-melhores-decisoes': routes.insightsMetrics,
}

/** URL publica do site, definida em .env (site estatico: sem segredos). */
const configuredSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim()
export const SITE_URL = configuredSiteUrl && configuredSiteUrl.length > 0 ? configuredSiteUrl : '.'