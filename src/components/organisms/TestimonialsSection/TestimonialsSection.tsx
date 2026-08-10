import Container from '@/components/atoms/Container/Container'
import TestimonialCard from '@/components/molecules/TestimonialCard/TestimonialCard'
import useDragScroll from '@/hooks/UseDragScroll'
import { useLanguage } from '@/i18n/LanguageContext'
import { useTestimonials } from '@/i18n/useContent'
import styles from './TestimonialsSection.module.css'

const TestimonialsSection = () => {
  const { ref: trackRef, scrollByStep } = useDragScroll()
  const { t } = useLanguage()
  const testimonials = useTestimonials()

  const handleNext = () => {
    const track = trackRef.current
    if (!track) return

    const card = track.firstElementChild as HTMLElement | null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = card ? card.offsetWidth + gap : track.clientWidth

    const reachedEnd =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 1

    scrollByStep(reachedEnd ? -track.scrollLeft : step)
  }

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.headline}>{t.testimonials.title}</h1>
          <button type="button" className={styles.hint} onClick={handleNext}>
            {t.testimonials.hint}
          </button>
        </div>

        <div ref={trackRef} className={styles.track}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
