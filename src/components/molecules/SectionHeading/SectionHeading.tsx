import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => (
  <div className={[styles.wrapper, styles[align]].join(' ')}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <h2 className={styles.title}>{title}</h2>
    {description && <p className={styles.description}>{description}</p>}
  </div>
)

export default SectionHeading
