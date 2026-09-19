import type { ReactNode } from 'react'
import type { IconName } from '@/i18n/types'

/**
 * Conjunto de icones minimalistas desenhados a mao (traco, sem preenchimento).
 * Evita dependencia externa e mantem o visual coerente em todas as secoes.
 */
const paths: Record<IconName, ReactNode> = {
  alert: (
    <>
      <path d="M12 4.2 20.6 19H3.4z" />
      <path d="M12 10v4.2" />
      <path d="M12 17.1h.01" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h14" />
      <path d="m13 6.2 5.8 5.8-5.8 5.8" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.6C10.5 5.2 8.6 4.6 6.2 4.6H4.2v12.9h2c2.4 0 4.3.6 5.8 2 1.5-1.4 3.4-2 5.8-2h2V4.6h-2c-2.4 0-4.3.6-5.8 2Z" />
      <path d="M12 6.6v12.9" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7.3 19.5v-8" />
      <path d="M12 19.5V5.5" />
      <path d="M16.7 19.5v-5.4" />
    </>
  ),
  check: <path d="m5 12.6 4.4 4.4L19 7.4" />,
  chevronDown: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  clipboard: (
    <>
      <path d="M9.2 4.6h5.6v2.8H9.2z" />
      <path d="M9.2 6H7.4a2 2 0 0 0-2 2v10.6a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.8" />
      <path d="M9.4 12.2h5.2" />
      <path d="M9.4 15.8h3.4" />
    </>
  ),
  close: (
    <>
      <path d="m6.4 6.4 11.2 11.2" />
      <path d="M17.6 6.4 6.4 17.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.6 12S6.2 5.8 12 5.8 21.4 12 21.4 12 17.8 18.2 12 18.2 2.6 12 2.6 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  flow: (
    <>
      <path d="M3.6 7h6.2a3.4 3.4 0 0 1 3.4 3.4v3.2a3.4 3.4 0 0 0 3.4 3.4h3.8" />
      <path d="m17.8 13.8 3.2 3.2-3.2 3.2" />
      <circle cx="3.6" cy="7" r="1.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.6 18.4a8.8 8.8 0 1 1 14.8 0" />
      <path d="m12 14.6 3.6-4.4" />
      <circle cx="12" cy="15.4" r="1.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.6c2.4 2.4 3.5 5.2 3.5 8.4S14.4 18 12 20.4C9.6 18 8.5 15.2 8.5 12s1.1-6 3.5-8.4Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.4 8.2 4.4L12 12.2 3.8 7.8z" />
      <path d="m3.8 12.4 8.2 4.4 8.2-4.4" />
      <path d="m3.8 16.8 8.2 4.4 8.2-4.4" />
    </>
  ),
  mail: (
    <>
      <path d="M3.6 6.6h16.8v10.8H3.6z" />
      <path d="m3.6 7.2 8.4 5.6 8.4-5.6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7.2h16" />
      <path d="M4 12h16" />
      <path d="M4 16.8h16" />
    </>
  ),
  message: (
    <path d="M20 12.4a7.3 7.3 0 0 1-7.3 7.3H8.4L4 22.6v-6.3a7.3 7.3 0 0 1 7.3-7.3h1.4A7.3 7.3 0 0 1 20 12.4Z" />
  ),
  repeat: (
    <>
      <path d="M20 11.2A7.8 7.8 0 0 0 6 6.4" />
      <path d="M4.4 4.4v3.4h3.4" />
      <path d="M4 12.8A7.8 7.8 0 0 0 18 17.6" />
      <path d="M19.6 19.6v-3.4h-3.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.4" />
      <path d="m15.8 15.8 4.4 4.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.4l7.2 3v5.4c0 4.2-3 7.9-7.2 9-4.2-1.1-7.2-4.8-7.2-9V6.4z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9.4" cy="7.6" r="3.4" />
      <path d="M3.4 19.4v-1.2a4.6 4.6 0 0 1 4.6-4.6h2.8a4.6 4.6 0 0 1 4.6 4.6v1.2" />
      <path d="M16.6 5.2a3.4 3.4 0 0 1 0 6.6" />
      <path d="M20.6 19.4v-1.2a4.6 4.6 0 0 0-3.2-4.4" />
    </>
  ),
}

type IconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}