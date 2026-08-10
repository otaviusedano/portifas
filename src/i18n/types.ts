export type Language = 'en' | 'pt'

export interface ProjectCopy {
  title: string
  category: string
  description: string
  tags: string[]
}

export interface TestimonialCopy {
  quote: string
  role: string
}

export interface PainPointCopy {
  title: string
  text: string
}

export interface MediaBlockCopy {
  title: string
  text: string
  media: string
}

export interface StatCopy {
  value: string
  label: string
}

export interface StepCopy {
  title: string
  text: string
}

export interface TimelineCopy {
  phase: string
  text: string
}

export interface Dictionary {
  nav: {
    home: string
    projects: string
    about: string
    contact: string
    menu: string
  }
  language: {
    label: string
    en: string
    pt: string
  }
  hero: {
    role: string
    headline: string
  }
  clients: {
    label: string
  }
  projects: {
    eyebrow: string
    featured: string
    all: string
    items: Record<string, ProjectCopy>
  }
  about: {
    titlePrefix: string
    greeting: string
    paragraphs: string[]
    stats: string[]
  }
  testimonials: {
    title: string
    hint: string
    items: Record<string, TestimonialCopy>
  }
  contact: {
    eyebrow: string
    title: string
    description: (email: string) => string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
    success: string
  }
  footer: {
    title: string
    subtitle: string
    linkedin: string
    whatsapp: string
  }
  notFound: {
    title: string
    text: string
    back: string
  }
  caseFpass: {
    title: string
    role: string
    tags: string[]
    heroMedia: string
    /** STAR act labels — each one opens the first section of its act. */
    star: { situation: string; task: string; action: string; result: string }
    context: { heading: string; paragraphs: string[]; media: string }
    kickoff: { heading: string; paragraphs: string[] }
    goals: { heading: string; intro: string; items: string[] }
    pains: {
      heading: string
      intro: string
      businessHeading: string
      business: PainPointCopy[]
      userHeading: string
      user: PainPointCopy[]
    }
    research: {
      heading: string
      subheading: string
      text: string
      media: string
      calloutTitle: string
      calloutText: string
    }
    benchmark: MediaBlockCopy[]
    goalsCompare: {
      heading: string
      intro: string
      businessTitle: string
      business: string[]
      userTitle: string
      user: string[]
    }
    highFidelity: MediaBlockCopy
    headerComponent: MediaBlockCopy
    profile: { title: string; text: string; media: string; blocks: string[] }
    validation: { heading: string; paragraphs: string[] }
    finalDesign: MediaBlockCopy[]
  }
  /** Told with STAR: situation → task → action → result. */
  caseDesignSystem: {
    title: string
    role: string
    tags: string[]
    heroMedia: string
    situation: {
      label: string
      heading: string
      paragraphs: string[]
      media: string
      quoteTitle: string
      quoteText: string
      painsHeading: string
      pains: PainPointCopy[]
    }
    task: {
      label: string
      heading: string
      paragraphs: string[]
      goalsHeading: string
      goals: string[]
    }
    action: {
      label: string
      heading: string
      intro: string
      stats: StatCopy[]
      audit: { heading: string; paragraphs: string[]; media: string }
      tokens: {
        heading: string
        intro: string
        primitive: { label: string; name: string; text: string }
        semantic: { label: string; name: string; text: string }
        examples: string[]
        closing: string
        media: string
      }
      components: {
        heading: string
        intro: string
        steps: StepCopy[]
        closing: string
        media: string
      }
      pivot: {
        heading: string
        intro: string
        calloutLabel: string
        calloutText: string
        paragraphs: string[]
        media: string
      }
    }
    result: {
      label: string
      heading: string
      intro: string
      calloutLabel: string
      calloutText: string
      paragraphs: string[]
      media: string
      outcomesHeading: string
      outcomes: string[]
    }
    timeline: { heading: string; items: TimelineCopy[] }
    /** Tool names are brands, so they live in `data/tools.ts`, not here. */
    stack: { heading: string; text: string }
    learnings: {
      heading: string
      paragraphs: string[]
      quoteTitle: string
      quoteText: string
    }
  }
}
