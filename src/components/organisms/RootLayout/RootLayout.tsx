import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'
import styles from './RootLayout.module.css'

const RootLayout = () => {
  const { pathname, hash } = useLocation()

  // Scroll to the hash target when present, otherwise to the top on route change.
  // Deferred a frame so the freshly mounted page is laid out before scrolling.
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
