import type { ProjectBase } from '@/types'

import imageProjectCaseFpass from '../assets/images/projectsCase/fpass-principal-case.svg'
import imageProjectCaseBettest from '../assets/images/projectsCase/bettest-principal-case.svg'

/**
 * Copy for each id lives in `i18n/<lang>.ts` under `projects.items`.
 * Order matters: the home page features the first entries, so the cases that
 * should lead come first.
 */
export const projects: ProjectBase[] = [
  {
    id: '3',
    year: 2025,
    slug: 'bettest-fulltrader',
    image: imageProjectCaseBettest,
    caseStudy: '/projects/bettest',
  },
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
