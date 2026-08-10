import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { testimonials } from '@/data/testimonials'
import type { Profile, Project, Testimonial } from '@/types'
import { useLanguage } from './LanguageContext'

/** Merges the language-neutral data (ids, images, links) with the active copy. */

export const useProjects = (): Project[] => {
  const { t } = useLanguage()

  return projects.map((project) => ({
    ...project,
    ...(t.projects.items[project.id] ?? {}),
  }))
}

export const useTestimonials = (): Testimonial[] => {
  const { t } = useLanguage()

  return testimonials.map((testimonial) => ({
    ...testimonial,
    ...(t.testimonials.items[testimonial.id] ?? {}),
  }))
}

export const useProfile = (): Profile => {
  const { t } = useLanguage()

  return {
    ...profile,
    role: t.hero.role,
    headline: t.hero.headline,
    greeting: t.about.greeting,
    about: t.about.paragraphs,
    stats: profile.statValues.map((value, index) => ({
      value,
      label: t.about.stats[index] ?? '',
    })),
  }
}
