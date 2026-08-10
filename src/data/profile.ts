import type { ProfileBase } from '@/types'
import imageProfile from '../assets/images/profile/profile.png'

/** Role, headline, greeting, bio and stat labels live in `i18n/<lang>.ts`. */
export const profile: ProfileBase = {
  name: 'Otávio Sedano',
  statValues: ['+3', '+50', '+4100'],
  email: 'sedanootavio@gmail.com',
  linkedin: 'https://linkedin.com/in/otaviosedano',
  whatsapp: 'https://wa.me/5519992439330',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Dribbble', url: 'https://dribbble.com' },
    { label: 'Behance', url: 'https://behance.net' },
  ],
  photo: imageProfile,
}
