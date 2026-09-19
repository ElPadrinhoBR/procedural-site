/*
 * [WIP skeleton — not imported anywhere yet. Unused imports commented out to
 * keep `tsc --noEmit` green until the article pages are wired into the router.]
 *
 * import { Link } from 'react-router-dom'
 * import { Icon } from '@/components/ui/Icon'
 * import { Reveal } from '@/components/ui/Reveal'
 * import { Section } from '@/components/ui/Section'
 * import { useI18n, type Dict } from '@/i18n'
 * import { insightSlugToRoute, routes, type InsightSlug } from '@/lib/site'
 */

import type { InsightSlug } from '@/lib/site'

export type ArticleKey = 'agility' | 'governance' | 'metrics'

export type ArticleContent = {
  slug: InsightSlug
  category: string
  title: string
  readingMinutes: number
  source: string
  intro: string
  lead: string
  errorTitle?: string
  errorText?: string
  problems?: { strong: string; text: string }[]
  pillarsTitle: string
  pillars: { title: string; text: string }[]
  quote: string
}

// WIP: will be used once the article pages are wired into the router.
// function getArticle(dict: Dict, key: ArticleKey): ArticleContent {
//   return dict.articles[key] as ArticleContent
// }
