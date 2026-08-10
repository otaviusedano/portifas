import { useState } from 'react'
import type { FormEvent } from 'react'

import Container from '@/components/atoms/Container/Container'
import Button from '@/components/atoms/Button/Button'
import AuroraGlow from '@/components/atoms/AuroraGlow/AuroraGlow'
import SectionHeading from '@/components/molecules/SectionHeading/SectionHeading'
import { profile } from '@/data/profile'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  const [isSent, setIsSent] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Mock submission — wire up to a real service later
    setIsSent(true)
  }

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description(profile.email)}
        />

        <div className={styles.card}>
          <AuroraGlow />

          {isSent ? (
            <p className={styles.success}>{t.contact.success}</p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>{t.contact.name}</span>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>{t.contact.email}</span>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>{t.contact.message}</span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  required
                />
              </label>

              <Button type="submit" variant="primary">
                {t.contact.submit}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
