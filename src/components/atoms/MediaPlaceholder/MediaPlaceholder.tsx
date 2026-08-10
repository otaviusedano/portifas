import styles from './MediaPlaceholder.module.css'

interface MediaPlaceholderProps {
  label: string
  ratio?: 'banner' | 'wide' | 'video' | 'square' | 'tall' | 'phone'
  src?: string
  fit?: 'cover' | 'contain'
}

/**
 * Stands in for a case-study screenshot, showing only its label — same
 * treatment as the thumb at the top of a ProjectCard. When `src` is given,
 * it renders the actual image instead of the label placeholder. `fit`
 * defaults to cover; use contain for narrow crops that shouldn't be zoomed
 * to fill a wider box (e.g. the header component strip).
 */
const MediaPlaceholder = ({ label, ratio = 'video', src, fit = 'cover' }: MediaPlaceholderProps) => (
  <div className={[styles.placeholder, styles[ratio], src ? '' : styles.empty].join(' ')}>
    {src ? (
      <img className={[styles.image, styles[fit]].join(' ')} src={src} alt={label} />
    ) : (
      <span className={styles.label}>{label}</span>
    )}
  </div>
)

export default MediaPlaceholder
