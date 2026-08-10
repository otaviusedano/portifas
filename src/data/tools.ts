import type { Tool } from '@/types'

import cursor from '@/assets/images/svg/tools/cursor.svg'
import css from '@/assets/images/svg/tools/css.svg'
import figma from '@/assets/images/svg/tools/figma.svg'
import github from '@/assets/images/svg/tools/github.svg'
import html5 from '@/assets/images/svg/tools/html5.svg'
import javascript from '@/assets/images/svg/tools/javascript.svg'

/**
 * Stack credited on the design system case. Brand names are not translated,
 * so the list lives here instead of in the dictionaries — same split used by
 * `clients.ts` / `clientLogos.ts`. Marks come from Simple Icons (CC0) and are
 * monochrome, so the page renders them as white silhouettes.
 */
export const designSystemTools: Tool[] = [
  { name: 'Figma', logo: figma },
  { name: 'Cursor', logo: cursor },
  { name: 'GitHub', logo: github },
  { name: 'HTML5', logo: html5 },
  { name: 'CSS', logo: css },
  { name: 'JavaScript', logo: javascript },
]
