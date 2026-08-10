import Container from '@/components/atoms/Container/Container'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProfile } from '@/i18n/useContent'
import { ABOUT_SECTION_ID } from '@/utils/routes'
import { getInitials } from '@/utils/getInitials'
import styles from './AboutSection.module.css'

const AboutSection = () => {
  const { t } = useLanguage()
  const { name, greeting, about, stats, photo } = useProfile()

  return (
    <section id={ABOUT_SECTION_ID} className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.title}>
            {t.about.titlePrefix} <span>{name}</span>
          </h2>
          <p className={styles.greeting}>{greeting}</p>

          <div className={styles.bio}>
            {about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className={styles.aside}>
          <div className={styles.frame}>
            {photo ? (
              <img src={photo} alt={name} className={styles.photo} />
            ) : (
              <span className={styles.placeholder} aria-hidden="true">
                {getInitials(name)}
              </span>
            )}
          </div>

          <ul className={styles.stats}>
            {stats.map(({ value, label }) => (
              <li key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  )
}

export default AboutSection
