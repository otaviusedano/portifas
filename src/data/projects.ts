import type { ProjectBase } from '@/types'

import imageProjectCaseFpass from '../assets/images/projectsCase/MockupFpass.svg'

/** Copy for each id lives in `i18n/<lang>.ts` under `projects.items`. */
export const projects: ProjectBase[] = [
  {
    id: '1',
    year: 2025,
    slug: 'fpass-gamification',
    image: imageProjectCaseFpass,
    caseStudy: '/projects/fpass',
  },
  {
    id: '2',
    year: 2026,
    slug: 'design-system-ai',
    image: '',
    caseStudy: '/projects/design-system-ai',
  },
]
