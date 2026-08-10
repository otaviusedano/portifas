import { useLanguage } from '@/i18n/LanguageContext'
import type { Language } from '@/i18n/types'
import styles from './LanguageSwitch.module.css'

const OPTIONS: Language[] = ['en', 'pt']

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={styles.switch}
      role="group"
      aria-label={t.language.label}
      data-active={lang}
    >
      <span className={styles.thumb} aria-hidden="true" />

      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={[styles.option, lang === option && styles.selected]
            .filter(Boolean)
            .join(' ')}
          aria-pressed={lang === option}
          onClick={() => setLang(option)}
        >
          {t.language[option]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
