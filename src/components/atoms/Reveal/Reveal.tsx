import type { ReactNode } from 'react'

import useReveal from '@/hooks/UseReveal'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  delay?: number
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={[styles.reveal, isVisible && styles.visible]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
