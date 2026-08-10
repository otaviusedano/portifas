import Avatar from '@/components/atoms/Avatar/Avatar'
import AuroraGlow from '@/components/atoms/AuroraGlow/AuroraGlow'
import type { Testimonial } from '@/types'
import styles from './TestimonialCard.module.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { quote, name, role, avatar } = testimonial

  return (
    <figure className={styles.card}>
      <AuroraGlow />

      <blockquote className={styles.quote}>{quote}</blockquote>

      <figcaption className={styles.author}>
        <Avatar name={name} src={avatar} />
        <div className={styles.identity}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
