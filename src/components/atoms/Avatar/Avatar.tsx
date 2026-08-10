import { getInitials } from '@/utils/getInitials'
import styles from './Avatar.module.css'

interface AvatarProps {
  name: string
  src?: string
}

const Avatar = ({ name, src }: AvatarProps) =>
  src ? (
    <img src={src} alt={name} className={styles.avatar} />
  ) : (
    <span className={styles.avatar} aria-hidden="true">
      {getInitials(name)}
    </span>
  )

export default Avatar
