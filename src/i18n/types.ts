/** Idiomas suportados pelo seletor do site. */
export type Lang = 'pt' | 'en' | 'es'

/** Conjunto de icones minimalistas disponiveis (traco unico, sem bibliotecas externas). */
export type IconName =
  | 'alert'
  | 'arrowRight'
  | 'book'
  | 'chart'
  | 'check'
  | 'chevronDown'
  | 'clipboard'
  | 'close'
  | 'compass'
  | 'eye'
  | 'flow'
  | 'gauge'
  | 'globe'
  | 'layers'
  | 'mail'
  | 'menu'
  | 'message'
  | 'repeat'
  | 'search'
  | 'shield'
  | 'target'
  | 'users'

/** Itens que aparecem em grades de cards (problema, servicos, diferenciais...). */
export type FeatureItem = {
  icon: IconName
  title: string
  text: string
}
