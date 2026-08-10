export interface NavItem {
  /** Key into `nav` in the active dictionary. */
  key: 'home' | 'projects' | 'about'
  path: string
  sectionId: string
}

export const HERO_SECTION_ID = 'hero'
export const PROJECTS_SECTION_ID = 'projects'
export const ABOUT_SECTION_ID = 'about'
export const CONTACT_ROUTE = 'contact'

/**
 * Paths are absolute on purpose: a bare `#hash` is resolved relative to the
 * current route, which kept the nav stuck on case-study pages.
 */
export const NAV_ITEMS: NavItem[] = [
  { key: 'home', path: `/#${HERO_SECTION_ID}`, sectionId: HERO_SECTION_ID },
  {
    key: 'projects',
    path: `/#${PROJECTS_SECTION_ID}`,
    sectionId: PROJECTS_SECTION_ID,
  },
  { key: 'about', path: `/#${ABOUT_SECTION_ID}`, sectionId: ABOUT_SECTION_ID },
]

export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.sectionId)
