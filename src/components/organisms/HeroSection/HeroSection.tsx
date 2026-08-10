import Container from '@/components/atoms/Container/Container'
// import Button from '@/components/atoms/Button/Button'
import { useProfile } from '@/i18n/useContent'
// import { CONTACT_ROUTE } from '@/utils/routes'
import HeroBackground from './HeroBackground'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  const profile = useProfile()

  return (
  <section id='hero' className={styles.hero}>
    <HeroBackground />
    <div className={styles.glow} aria-hidden="true" />

    <Container className={styles.inner}>
      <span className={styles.eyebrow}>{profile.role}</span>
      <h1 className={styles.headline}>{profile.headline}</h1>

      {/* <div className={styles.actions}>
        <Button to="/projects" variant="primary">
          View my projects
        </Button>
        <Button to={CONTACT_ROUTE} variant="outline-gradient">
          Contact me
        </Button>
      </div> */}
    </Container>
  </section>
  )
}

export default HeroSection
