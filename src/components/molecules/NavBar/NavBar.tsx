import { Link, useLocation } from 'react-router-dom'

import useScrollSpy from '@/hooks/UseScrollSpy'
import { useLanguage } from '@/i18n/LanguageContext'
import { NAV_ITEMS, NAV_SECTION_IDS } from '@/utils/routes'
import styles from './NavBar.module.css'

interface NavBarProps {
  onNavigate?: () => void
}

const NavBar = ({ onNavigate }: NavBarProps) => {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  const isHome = pathname === '/'
  const activeId = useScrollSpy(NAV_SECTION_IDS, isHome)

  return (
    <nav className={styles.nav} id="navBar" aria-label="Primary">
      {NAV_ITEMS.map(({ key, path, sectionId }) => {
        const isActive = isHome && activeId === sectionId

        return (
          <Link
            key={path}
            to={path}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={[styles.link, isActive && styles.active]
              .filter(Boolean)
              .join(' ')}
          >
            {t.nav[key]}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBar
