import type { ReactNode } from 'react'

import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'main'
}

const Container = ({ children, className, as: Tag = 'div' }: ContainerProps) => (
  <Tag className={[styles.container, className].filter(Boolean).join(' ')}>
    {children}
  </Tag>
)

export default Container
