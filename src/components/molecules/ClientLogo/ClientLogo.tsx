import { clientLogos } from '@/data/clientLogos'
import type { Client } from '@/types'
import styles from './ClientLogo.module.css'

interface ClientLogoProps {
  client: Client
}

// Wordmarks that read visually smaller than the rest at the shared height
const LARGE_LOGO_IDS: Client['id'][] = ['btg', 'embraco', 'oak']

const ClientLogo = ({ client }: ClientLogoProps) => {
  const logo = clientLogos[client.id]

  if (!logo) return <span className={styles.fallback}>{client.name}</span>

  const isLarge = LARGE_LOGO_IDS.includes(client.id)

  return (
    <img
      className={`${styles.logo} ${isLarge ? styles.logoLarge : ''}`}
      src={logo}
      alt={client.name}
      draggable={false}
    />
  )
}

export default ClientLogo
