import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'outline-gradient' | 'ghost' | 'solid'
type ButtonSize = 'sm' | 'md'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  noBlank?: boolean
}

interface ButtonAsButton
  extends BaseProps,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  to?: never
  href?: never
}

interface ButtonAsLink extends BaseProps {
  to: string
  href?: never
}

interface ButtonAsAnchor extends BaseProps {
  href: string
  to?: never
}

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

/** Call-to-action variants carry the aurora glow; `ghost` stays flat. */
const AURORA_VARIANTS: ButtonVariant[] = ['primary', 'outline-gradient', 'solid']

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  noBlank,
  ...rest
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {AURORA_VARIANTS.includes(variant) && (
        <span className={styles.aurora} aria-hidden="true">
          <span className={styles.auroraStage}>
            <span className={styles.auroraLayer1} />
            <span className={styles.auroraLayer2} />
            <span className={styles.auroraLayer3} />
          </span>
        </span>
      )}
      <span className={styles.label}>{children}</span>
    </>
  )

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {content}
      </Link>
    )
  }

  if ('href' in rest && rest.href) {
    return (
      <a
        href={rest.href}
        className={classes}
        target={noBlank ? undefined : '_blank'}
        rel="noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}

export default Button
