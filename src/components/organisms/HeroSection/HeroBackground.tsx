import { useMemo } from 'react'

import styles from './HeroBackground.module.css'

const BAR_COUNT = 28

const HeroBackground = () => {
  // Stable pseudo-random delays/durations so bars shimmer out of sync
  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, (_, i) => ({
        id: i,
        delay: `${(i % 7) * 0.35}s`,
        duration: `${3 + (i % 5) * 0.6}s`,
      })),
    []
  )

  return (
    <div className={styles.bars} aria-hidden="true">
      {bars.map(({ id, delay, duration }) => (
        <span
          key={id}
          className={styles.bar}
          style={{ animationDelay: delay, animationDuration: duration }}
        />
      ))}
    </div>
  )
}

export default HeroBackground
