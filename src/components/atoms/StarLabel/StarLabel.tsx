import type { ReactNode } from 'react'

import styles from './StarLabel.module.css'

interface StarLabelProps {
  /** S, T, A or R — the act of the STAR narrative this section opens. */
  letter: 'S' | 'T' | 'A' | 'R'
  children: ReactNode
}

/** Eyebrow that marks which act of the STAR narrative a case section belongs to. */
const StarLabel = ({ letter, children }: StarLabelProps) => (
  <p className={styles.label}>
    <span className={styles.letter}>{letter}</span>
    {children}
  </p>
)

export default StarLabel
