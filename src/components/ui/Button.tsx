import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import type { IconName } from '@/i18n/types'
import { cn } from '@/lib/utils'

export type ButtonVariant =
  /** Destaque principal (cyan) — usado para a acao mais importante da tela. */
  | 'primary'
  /** Contorno para uso sobre fundo escuro. */
  | 'outline-dark'
  /** Contorno para uso sobre fundo claro. */
  | 'outline-light'
  /** Preenchido navy, para CTAs em secoes claras. */
  | 'solid'
  /** Somente texto, com sublinhado no hover. */
  | 'quiet'

type CommonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  iconRight?: IconName
  iconLeft?: IconName
  fullWidth?: boolean
}

type ButtonAsLink = CommonProps & { to: string; href?: never }
type ButtonAsAnchor = CommonProps & { href: string; to?: never }
type ButtonAsButton = CommonProps & {
  to?: never
  href?: never
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const sizes: Record<NonNullable<CommonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-[0.95rem]',
  lg: 'px-7 py-3.5 text-base',
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-400 text-navy-950 shadow-[0_14px_34px_-16px_rgba(47,220,201,0.75)] hover:bg-accent-300 hover:shadow-[0_18px_40px_-16px_rgba(47,220,201,0.85)]',
  'outline-dark':
    'border border-white/20 text-white hover:border-accent-300/60 hover:bg-white/[0.06]',
  'outline-light':
    'border border-navy-900/15 text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/[0.04]',
  solid: 'bg-navy-900 text-white hover:bg-navy-800',
  quiet: 'text-current underline-offset-4 hover:underline',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className, iconRight, iconLeft, fullWidth } = props

  const classes = cn(base, sizes[size], variants[variant], fullWidth && 'w-full', className)

  const content = (
    <>
      {iconLeft ? <Icon name={iconLeft} className="size-4" /> : null}
      <span>{children}</span>
      {iconRight ? (
        <Icon
          name={iconRight}
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <button
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={classes}
    >
      {content}
    </button>
  )
}