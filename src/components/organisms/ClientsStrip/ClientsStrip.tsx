import { useEffect, useRef } from 'react'
import ClientLogo from '@/components/molecules/ClientLogo/ClientLogo'
import { clients } from '@/data/clients'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './ClientsStrip.module.css'

const SPEED = 0.6
const SPEED_EASING = 0.08

const ClientsStrip = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...clients, ...clients]
  const trackRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    // Measured lazily: the logos are SVGs with no intrinsic size until they
    // load, so measuring on mount alone wraps the loop early and leaves gaps.
    let loopWidth = 0
    const measure = () => {
      loopWidth = track.scrollWidth / 2
    }
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(track)

    const images = Array.from(track.querySelectorAll('img'))
    images.forEach((image) => {
      if (!image.complete) image.addEventListener('load', measure, { once: true })
    })

    let offset = 0
    let speed = SPEED
    let targetSpeed = SPEED
    let frame = requestAnimationFrame(tick)

    function tick() {
      speed += (targetSpeed - speed) * SPEED_EASING
      offset += speed
      if (loopWidth > 0 && offset >= loopWidth) offset -= loopWidth
      track!.style.transform = `translateX(${-offset}px)`
      frame = requestAnimationFrame(tick)
    }

    const pause = () => {
      targetSpeed = 0
    }
    const resume = () => {
      targetSpeed = SPEED
    }

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      images.forEach((image) => image.removeEventListener('load', measure))
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section className={styles.strip} aria-label={t.clients.label}>
      <div ref={trackRef} className={styles.track}>
        {loop.map((client, index) => (
          <ClientLogo key={`${client.id}-${index}`} client={client} />
        ))}
      </div>
    </section>
  )
}

export default ClientsStrip
