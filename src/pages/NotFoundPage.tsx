import Container from '@/components/atoms/Container/Container'
import Button from '@/components/atoms/Button/Button'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const { t } = useLanguage()

  return (
  <Container className={styles.wrapper}>
    <span className={styles.code}>404</span>
    <h1 className={styles.title}>{t.notFound.title}</h1>
    <p className={styles.text}>{t.notFound.text}</p>
    <Button to="/" variant="primary">
      {t.notFound.back}
    </Button>
  </Container>
  )
}

export default NotFoundPage
