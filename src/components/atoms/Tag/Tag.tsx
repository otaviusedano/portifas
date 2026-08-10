import type { ReactNode } from 'react'

import styles from './Tag.module.css'

interface TagProps {
  children: ReactNode
  variant?: 'default' | 'accent'
}

const Tag = ({ children, variant = 'default' }: TagProps) => (
  <span className={[styles.tag, styles[variant]].join(' ')}>{children}</span>
)

export default Tag
