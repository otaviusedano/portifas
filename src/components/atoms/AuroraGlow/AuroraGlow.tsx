import styles from './AuroraGlow.module.css'

/**
 * Slow, layered aurora-borealis glow meant to sit behind card content.
 * Purely decorative — render inside a `position: relative; overflow: hidden`
 * container, before the rest of the content.
 */
const AuroraGlow = () => (
  <div className={styles.aurora} aria-hidden="true">
    <span className={styles.layer1} />
    <span className={styles.layer2} />
    <span className={styles.layer3} />
  </div>
)

export default AuroraGlow
