import { useState } from 'react'

import Logo from '@/components/atoms/Logo/Logo'
import Button from '@/components/atoms/Button/Button'
import Container from '@/components/atoms/Container/Container'
import LanguageSwitch from '@/components/atoms/LanguageSwitch/LanguageSwitch'
import NavBar from '@/components/molecules/NavBar/NavBar'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header id='header' className={styles.header}>
      <Container as="nav" className={styles.inner}>
        <Logo />

        <div className={styles.desktop}>
          <NavBar />
          <LanguageSwitch />
          <Button
            noBlank
            // to={CONTACT_ROUTE}
            href='#contact'
            variant="outline-gradient"
            size="sm">
            {t.nav.contact}
          </Button>
        </div>

        <div className={styles.mobileControls}>
          <LanguageSwitch />
          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label={t.nav.menu}
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? styles.barTop : ''} />
            <span className={isMenuOpen ? styles.barMid : ''} />
            <span className={isMenuOpen ? styles.barBot : ''} />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <NavBar onNavigate={closeMenu} />
          <Button
            // to={CONTACT_ROUTE}
            noBlank
            href='#contact'
            variant="outline-gradient"
            size="md"
          >
            {t.nav.contact}
          </Button>
        </div>
      )}
    </header>
  )
}

export default Header
