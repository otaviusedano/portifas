import type { TestimonialBase } from '@/types'

import daniPicture from '../assets/images/profile/anaMartins.png'
import rafaelZilliPicture from '../assets/images/profile/rafaelZilli.png'
import laviniaPicture from '../assets/images/profile/Lavinia.jpg'

/** Quotes and roles for each id live in `i18n/<lang>.ts` under `testimonials.items`. */
export const testimonials: TestimonialBase[] = [
  {
    id: '1',
    name: 'Daniela Konishi',
    avatar: daniPicture,
  },
  {
    id: '2',
    name: 'Lavinia de Queiroz',
    avatar: laviniaPicture,
  },
  {
    id: '3',
    name: 'Rafael Zilli',
    avatar: rafaelZilliPicture,
  },
]
