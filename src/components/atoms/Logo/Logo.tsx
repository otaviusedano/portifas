import { Link } from 'react-router-dom'

import { profile } from '@/data/profile'
import styles from './Logo.module.css'

const Logo = () => (
  <Link to="/" className={styles.logo} aria-label={`${profile.name}, home`}>
    {profile.name}
  </Link>
)

export default Logo
