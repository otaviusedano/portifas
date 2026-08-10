export interface Social {
  label: string
  url: string
}

export interface Stat {
  value: string
  label: string
}

/** Language-neutral profile data — copy comes from the active dictionary. */
export interface ProfileBase {
  name: string
  statValues: string[]
  photo?: string
  email: string
  linkedin: string
  whatsapp: string
  socials: Social[]
}

export interface Profile extends ProfileBase {
  role: string
  headline: string
  greeting: string
  about: string[]
  stats: Stat[]
}

export interface Client {
  id: string
  name: string
}

export interface TestimonialBase {
  id: string
  name: string
  avatar?: string
}

export interface Testimonial extends TestimonialBase {
  quote: string
  role: string
}

/** A tool credited on a case study, shown as a logo card. */
export interface Tool {
  name: string
  logo: string
}

export interface ProjectBase {
  id: string
  year: number
  slug: string
  image?: string
  /** Route of the full case study, when one exists. */
  caseStudy?: string
}

export interface Project extends ProjectBase {
  title: string
  category: string
  description: string
  tags: string[]
}
