import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    home: 'Home',
    projects: 'My projects',
    about: 'About me',
    contact: 'Contact me',
    menu: 'Toggle menu',
  },
  language: {
    label: 'Language',
    en: 'EN',
    pt: 'PT',
  },
  hero: {
    role: 'Product & UX/UI Designer',
    headline:
      'Building intuitive and visually appealing interfaces. +3 years as a Product & UX/UI Designer.',
  },
  clients: {
    label: "Clients I've worked with",
  },
  projects: {
    eyebrow: 'Selected work',
    featured: 'Featured projects',
    all: 'My projects',
    items: {
      '1': {
        title: 'Gamifying an Online Learning Platform',
        category: 'Product Designer',
        description:
          'Fpass is an online learning platform that brings together courses across a wide range of subjects, a model similar to Hotmart, where content creators and students meet within a single digital ecosystem.',
        tags: ['Web', 'Responsive', 'Design System', 'Gamification'],
      },
      '2': {
        title: 'Creating a design system to be used with AI at Topaz Consórcios',
        category: 'Product Designer',
        description:
          'Design system can be used to create any page with the help of AI and Prompts',
        tags: ['Design System', 'AI', 'Prompts'],
      },
    },
  },
  about: {
    titlePrefix: "Hi, i'm",
    greeting: 'Nice to meet you.',
    paragraphs: [
      "My journey didn't start with a sketchbook. It started with lines of code. As a developer, I learned how products are built from the inside out, but I soon realized what truly excited me wasn't just making things work — it was making them feel right. That's what led me to UX/UI Design, and I never looked back.",
      'Today, I bring a rare perspective: I design with both the user and the engineer in mind, obsessing over every pixel and interaction to create interfaces that are not just functional, but genuinely beautiful and intuitive.',
      'Outside of work, I share my space with my cats, find inspiration in music and art, and spend my weekends passionately cheering for Palmeiras — because great design, just like a great football club, is all about vision, teamwork, and never settling for mediocre.',
    ],
    stats: ['Years experience', 'Projects done', 'Hours worked'],
  },
  testimonials: {
    title: 'What co-workers say about me',
    hint: 'Drag for more testimonials →',
    items: {
      '1': {
        quote:
          'I worked with Otávio at Manobra Studio, primarily on the Caixa Econômica Federal project. When I joined the team, he was very welcoming and always willing to provide guidance and share his knowledge, which made a huge difference in my adjustment period.\n\nHe is a competent, collaborative professional who is always ready to help. It was a pleasure working with him, and I certainly recommend him.',
        role: 'UX/UI & Graphic Designer — Manobra Studio',
      },
      '2': {
        quote:
          'Working with Otávio means having a product partner who is super willing and open to try new things, always trying his best to achieve our goals! Together, we worked on various projects, from self-service applications to complex ERP systems, and he always brought a very good vision and delivery, even with few inputs.\n\nA striking memory was when I drew the app screens on a sheet of paper, and he gave me an exceptional job! Otávio is certainly a very creative professional, resilient, able to overcome any challenge, and a very pleasant and nice person to work with!.',
        role: 'Product Manager — Topaz Consórcios',
      },
      '3': {
        quote:
          'Otávio spent more than three years on the team I led at Manobra Studio. He worked on various interface design projects with good results, and in some of them he also contributed to the research side.\n\nMore recently, he began incorporating AI into his daily workflow.',
        role: 'CEO/Founder — Manobra Studio',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build something great.",
    description: (email) =>
      `Have a project in mind? Reach out at ${email} or drop a message below.`,
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project…',
    submit: 'Send message',
    success: "Thanks — your message has been sent. I'll get back to you soon.",
  },
  footer: {
    title: "Let's build something remarkable",
    subtitle:
      "I'm always ready for new challenges or transformative conversations. Get in touch.",
    linkedin: 'Linkedin',
    whatsapp: 'Whatsapp',
  },
  notFound: {
    title: 'Page not found',
    text: "The page you're looking for doesn't exist or has been moved.",
    back: 'Back home',
  },
  caseFpass: {
    title: 'Gamifying an Online Learning Platform',
    role: 'Product Designer',
    tags: ['Manobra Studio', 'Web', 'Responsive', 'Design System', 'Gamification'],
    heroMedia: 'Fpass — platform overview',
    star: {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
    context: {
      heading: 'Getting started & Context',
      paragraphs: [
        'Fpass is an online learning platform that brings together courses across a wide range of subjects, a model similar to Hotmart, where content creators and students meet within a single digital ecosystem.',
        'The platform had grown fast on acquisition, but the experience after the purchase was entirely passive. Students bought a course, watched the first lessons and slowly disappeared — and the product had no mechanism to bring them back.',
      ],
      media: 'fpass',
    },
    kickoff: {
      heading: 'Kickoff',
      paragraphs: [
        'The project started with an alignment workshop involving product, marketing and the content team. We mapped the current journey end to end, agreed on what engagement actually meant for the business, and defined the boundaries of a gamification layer that could sit on top of the existing platform without rewriting it.',
        'That session produced the first shared picture of the problem: the platform was excellent at selling a course and had nothing designed for the weeks that followed.',
      ],
    },
    goals: {
      heading: 'Goals',
      intro:
        'The concept of the project was to turn the passive experience of consuming lessons into an active journey — one where progress is visible, rewarded and worth returning to. Three goals guided every decision from research to final design:',
      items: [
        'Creating triggers that would bring users back to the platform consistently',
        'Building a sense of continuous progress and belonging',
        'Adding perceived value beyond course content, increasing user lifetime value for the business',
      ],
    },
    pains: {
      heading: 'Pain Points & Frustrations',
      intro:
        'I mapped the pain points from two fronts, so the solution would have to answer both at once: what was hurting the business, and what was missing for the student.',
      businessHeading: 'Business pain points',
      business: [
        {
          title: 'Low course completion',
          text: 'Most students stopped watching in the first weeks, which weakened results, testimonials and renewals.',
        },
        {
          title: 'Returns only at launches',
          text: 'Traffic peaked when a new course went live and flattened out in between, leaving the platform empty most of the month.',
        },
        {
          title: 'Churn in the first 30 days',
          text: 'Cancellations were concentrated right after purchase, before the student had built any habit around the product.',
        },
        {
          title: 'No reason to stay',
          text: 'Once a course ended there was nothing left holding the user to the ecosystem — the relationship ended with the last lesson.',
        },
      ],
      userHeading: 'User pain points identified by benchmark',
      user: [
        {
          title: 'Progress was invisible',
          text: 'A checked lesson was the only feedback the platform gave, so long-term effort never added up to anything visible.',
        },
        {
          title: 'Nothing to earn or show',
          text: 'There was no reward, collection or status attached to the hours invested in studying.',
        },
        {
          title: 'Studying felt isolated',
          text: 'Students had no sense of being part of a group moving in the same direction.',
        },
        {
          title: 'No pull on ordinary days',
          text: 'Without a scheduled lesson there was no reason to open the platform at all.',
        },
      ],
    },
    research: {
      heading: 'Research',
      subheading: 'Competitor Analysis (Gamification Benchmarking)',
      text: 'I ran a benchmark across products that already solve retention through game mechanics — from language apps and habit trackers to fitness communities and mobile games — looking for patterns that could be adapted to a learning context without turning the platform into a game.',
      media: 'Gamification benchmark board',
      calloutTitle: 'What we analyzed',
      calloutText:
        'Six mechanics came back consistently across every product in the benchmark. I broke each one down to understand what it rewards, what it costs to build, and whether it would survive in a platform where the content — not the game — is the product.',
    },
    benchmark: [
      {
        title: 'Account and Avatar customization',
        text: 'Products that let people shape an avatar create ownership from the very first session. The character becomes a small personal investment, and everything earned afterwards has somewhere to be worn and shown.',
        media: 'Avatar customization — benchmark',
      },
      {
        title: 'Level progress systems',
        text: 'Levels turn scattered activity into a single readable number. Each lesson feeds a bar that never resets, so effort accumulates even when the student switches between courses.',
        media: 'Level progress — benchmark',
      },
      {
        title: 'In-game currency',
        text: 'A soft currency rewards actions the product wants to see repeated and gives them an immediate, tangible payoff — without touching real money or discounting the core offer.',
        media: 'In-game currency — benchmark',
      },
      {
        title: 'Accessories and perks marketplace',
        text: 'A place to spend what was earned closes the loop. Cosmetic items and practical perks give the currency meaning and give the user a goal to save towards.',
        media: 'Marketplace — benchmark',
      },
      {
        title: 'User ranking',
        text: 'Ranking introduces social comparison and belonging. Handled well it motivates; handled badly it discourages beginners, so scope and reset rules matter more than the leaderboard itself.',
        media: 'User ranking — benchmark',
      },
      {
        title: 'Consecutive day streak',
        text: 'The streak is the strongest return trigger of the whole set. It creates a small daily commitment and something the user is unwilling to lose, which is exactly the habit the platform was missing.',
        media: 'Consecutive day streak — benchmark',
      },
    ],
    goalsCompare: {
      heading: 'Bussiness goals & User goals',
      intro:
        'I put both lists side by side to find the overlap. The mechanics that served the student and the business at the same time were the ones that made it into the first release — everything else was parked for a later phase.',
      businessTitle: 'Bussiness goals',
      business: [
        'Increase retention and lifetime value across the whole base',
        'Raise course completion rates',
        'Turn monthly visits into weekly and daily sessions',
        'Create organic word of mouth around the platform',
      ],
      userTitle: 'User goals',
      user: [
        'See progress that accumulates and never resets',
        'Be rewarded for consistency, not only for finishing',
        'Belong to a community studying in the same direction',
        'Have a reason to open the platform on ordinary days',
      ],
    },
    highFidelity: {
      title: 'High fidelity',
      text: 'With the mechanics defined, I went straight to high-fidelity prototypes. The Fpass Design System was already consolidated and I knew the product context deeply, they had been Manobra Studio clients since the very beginning, so the structure of the screens did not have to be discovered in wireframes. The question left was where each new signal, level, currency, streak and achievements, could live without competing with the lesson itself.',
      media: 'High fidelity prototypes',
    },
    headerComponent: {
      title: 'New header component',
      text: 'The header became the permanent home of the gamification layer. It carries level, currency balance and streak on every screen, close enough to be glanced at constantly and quiet enough not to pull attention away from navigation.',
      media: 'New header component',
    },
    profile: {
      title: 'Profile page',
      text: 'The profile page became the place where everything the student earned lives together — the reward for consistency, in one screen worth coming back to and worth sharing.',
      media: 'Profile page',
      blocks: [
        'Avatar and customization the user actually owns',
        'Level and experience bar as the headline of the page',
        'Achievements earned, and the ones still locked',
        'Currency balance with a direct path to the marketplace',
        'Ranking position within the user’s own group',
        'Streak calendar showing consecutive study days',
      ],
    },
    validation: {
      heading: 'Validation & Final design',
      paragraphs: [
        'The prototype was tested with active students from different courses, covering both people who had recently bought and people who had already gone quiet. The streak and the achievements were immediately understood; the marketplace needed a clearer link between what an action earns and what it can buy.',
        'The final design applied that feedback across four screens, each one answering a specific part of the loop: earn, collect, progress and return.',
      ],
    },
    finalDesign: [
      {
        title: 'Marketplace',
        text: 'Everything earned on the platform is spent here — cosmetic items for the avatar and practical perks such as extra course time or exclusive content. The catalogue is organised so a beginner always sees something reachable within a few days of study.',
        media: 'Marketplace — final design',
      },
      {
        title: 'Achievements',
        text: 'Achievements recognise behaviours the product wants to reinforce: finishing a module, returning after a break, studying across different subjects. Locked achievements stay visible so there is always a next target on screen.',
        media: 'Achievements — final design',
      },
      {
        title: 'Leveling up',
        text: 'Levelling up is the moment the whole system pays off. It interrupts the flow just long enough to celebrate, hands out currency, and points to what the next level unlocks.',
        media: 'Leveling up — final design',
      },
      {
        title: 'Quests',
        text: 'Quests break the long journey of a course into short, daily objectives. They give the streak something concrete to do each day and connect the gamification layer back to the actual learning content.',
        media: 'Quests — final design',
      },
    ],
  },
  caseDesignSystem: {
    title: 'Creating a design system to be used with AI at Topaz Consórcios',
    role: 'Product Designer',
    tags: [
      'Manobra Studio',
      'Topaz Consórcios',
      'Design System',
      'Design Tokens',
      'Generative AI',
    ],
    heroMedia: 'Topaz Consórcios Design System — overview',
    situation: {
      label: 'Situation',
      heading: 'The problem nobody wanted to admit',
      paragraphs: [
        'When Topaz came to us, the picture was a familiar one: a growing company with several digital systems built over the years, each with its own personality, its own colours, its own buttons. It was as if different architects had built rooms in the same hotel without ever speaking to each other.',
        'But this challenge had an extra layer. Topaz did not just want to standardise what already existed — they wanted to go further. The ambition was to use artificial intelligence to create new digital interfaces from scratch, from a single prompt, without the AI inventing solutions disconnected from the visual identity they had spent years building.',
      ],
      media: 'Existing Topaz digital systems',
      quoteTitle: 'What the client asked for',
      quoteText:
        'We want the AI to design interfaces as if it were a senior designer who has worked at Topaz for ten years. One that knows our language, our colours, the way we speak to our users.',
      painsHeading: 'Pain points mapped',
      pains: [
        {
          title: 'A fragmented identity',
          text: 'Every digital system carried fragments of an identity that had never been fully articulated, with colours, typography and components drifting apart from product to product.',
        },
        {
          title: 'Design no machine could read',
          text: 'The documentation existed for human eyes. No AI could interpret that visual intent and turn it into a consistent interface.',
        },
        {
          title: 'AI without context improvises',
          text: 'With no structured source of truth, anything generated from a prompt came back disconnected from the brand.',
        },
        {
          title: 'Scale depended on people',
          text: 'Every new interface had to go through a designer, which capped how fast the team and the products could grow.',
        },
      ],
    },
    task: {
      label: 'Task',
      heading: 'Prove it was possible — and define what had to exist',
      paragraphs: [
        'Before any pixel, any component, any line of code, we went deep into research. We wanted to understand whether the AIs available on the market were able to use a Design System as a real foundation for generating interfaces — not just as a vague reference.',
        'The answer was yes. With the right structure it would be entirely possible. But there was a condition: the Design System had to be more than beautiful in Figma. It had to be machine-readable.',
        'That insight reframed the project. We were not just creating a style guide — we were building a language. A language that human designers and artificial intelligences would have to speak with equal fluency.',
      ],
      goalsHeading: 'Goals',
      goals: [
        'Unify the visual language scattered across Topaz digital products into a single system',
        'Document the brand identity deeply enough for an AI to understand the reasoning behind each decision, not only the value to apply',
        'Let new interfaces come out of a prompt with no improvisation and no drift from the identity',
      ],
    },
    action: {
      label: 'Action',
      heading: 'Six months building a language',
      intro:
        'The work ran across four connected fronts: listen to what already existed, create the token foundation, document every component and — after one failed test — rebuild it all in the format an AI actually reads.',
      stats: [
        { value: '6', label: 'months of continuous build' },
        { value: '35+', label: 'components with variations' },
        { value: '2', label: 'types of tokens created' },
      ],
      audit: {
        heading: 'Before creating, we had to listen',
        paragraphs: [
          "The first thing we did was dive into Topaz's past. We analysed every digital system they had built — apps, web platforms, internal dashboards. Each one carried fragments of an identity that had not yet been fully articulated.",
          'That deep mapping answered questions that looked simple but were fundamental: which colours actually represent Topaz? Which typography best expresses its personality? How does the brand speak to its users — with authority, with closeness, with technical precision? And which components genuinely deserved to exist?',
          'We did not start from zero. We started from their history.',
        ],
        media: 'Audit of the existing digital systems',
      },
      tokens: {
        heading: 'The invisible foundation: tokens that carry meaning',
        intro:
          'Every visual system starts with a foundation. And the foundation of any robust Design System is its tokens — values that turn design decisions into code. We created two types, each with a very clear purpose.',
        primitive: {
          label: 'Base layer',
          name: 'Primitive tokens',
          text: 'These are the raw values of the brand — the exact colours, the font sizes, the spacing. They carry no context of use; they are the paint on the palette before it touches the screen.',
        },
        semantic: {
          label: 'Meaning layer',
          name: 'Semantic tokens',
          text: 'These are primitives with a purpose. Instead of a hex colour, they say primary action colour. Instead of 16px, they say button inner spacing. They translate values into intent.',
        },
        examples: [
          '--color-brand-500',
          '--color-action-primary',
          '--spacing-4',
          '--spacing-button-inner',
          '--font-size-base',
          '--font-size-heading-lg',
          '--radius-sm',
          '--radius-interactive',
        ],
        closing:
          'This double layer was decisive. Primitive tokens guarantee the brand is never distorted. Semantic tokens guarantee that any person — or any AI — understands why to use each value, not only which value to use. It is the difference between handing someone a dictionary and handing them the grammar of the language.',
        media: 'Primitive and semantic token structure',
      },
      components: {
        heading: '35 components and the discipline of documenting every detail',
        intro:
          'With the tokens in place, we started building the components in Figma. More than 35 pieces, each treated with the seriousness of a project inside the project. For every component, the documentation followed a strict, deliberate structure:',
        steps: [
          {
            title: 'Anatomy',
            text: 'Mapping every part of the component, naming layers and properties with surgical precision.',
          },
          {
            title: 'States',
            text: 'Default, hover, focus, active, disabled, error — no state was left without a visual and behavioural definition.',
          },
          {
            title: 'Variations',
            text: 'Sizes, hierarchies, types and contexts of use — each variation with clear criteria for when and why to apply it.',
          },
          {
            title: 'Layout & Styles',
            text: 'Rules for inner spacing, alignment and grid, wired directly to the semantic tokens of the foundation.',
          },
          {
            title: 'Usability guide',
            text: 'The reasoning behind each decision. When to use it, when to avoid it, common traps and accessibility best practice.',
          },
        ],
        closing:
          'Across all six months we ran weekly meetings with the Topaz team. Not only to present progress, but to validate decisions, hear the business context and make sure what we were building was, in fact, theirs.',
        media: 'Component library documented in Figma',
      },
      pivot: {
        heading: 'The test, the stumble and the restart we needed',
        intro:
          'The Design System in Figma was complete. It was time for the big test: ask the AI to open the file and build a simple interface — form fields, text, headings, buttons. The most fundamental components.',
        calloutLabel: 'Turning point',
        calloutText:
          'The result was not what we expected. The AI understood the design, but could not translate that visual intent into functional, consistent code. Figma was a beautiful museum — and coding AIs needed a factory.',
        paragraphs: [
          'Instead of treating it as a failure, we treated it as information. Together with the Topaz team, we revisited the strategy. The conclusion was clear: for an AI to generate interfaces faithful to the brand, the components had to exist as real code — HTML, CSS and JavaScript — not only as visual frames.',
          'We started again. This time with Cursor as an ally — a tool that amplifies code writing with AI assistance. Figma stopped being the final destination and became the reference map for building what would be the real deliverable.',
        ],
        media: 'First interface generation test through Figma',
      },
    },
    result: {
      label: 'Result',
      heading: 'From Figma to GitHub: the AI finds its native language',
      intro:
        'With every component and token translated into code and published in a GitHub repository, it was time to close the loop. We asked an AI to read and analyse the repository — and then build the very interface that had failed months earlier.',
      calloutLabel: 'Validated result',
      calloutText:
        'The result was solid, coherent and surprisingly faithful to what we had imagined. The AI did not only understand the components — it understood the logic behind them. From a single prompt, it assembled an interface that looked like the work of a designer who knew Topaz deeply.',
      paragraphs: [
        'The repository became far more than a code archive. It became the living memory of the Topaz visual identity — a resource any AI, at any moment, can consult to create new interfaces without improvising, without inventing, without losing its way.',
        'The Design System had found its final form: not only visual, not only documented, but executable. A complete language, ready to be spoken by humans and machines with equal precision.',
      ],
      media: 'AI-generated interface built from the repository',
      outcomesHeading: 'What Topaz took away from the project',
      outcomes: [
        'Topaz digital interfaces created from scratch out of a single prompt',
        'Components and tokens executable in HTML, CSS and JavaScript, versioned on GitHub',
        'Visual identity preserved without manual review on every new screen',
        'The ability to scale the brand without every decision going through a designer',
        'A final result validated by the Topaz team at the end of the six months',
      ],
    },
    timeline: {
      heading: 'Timeline',
      items: [
        {
          phase: 'Month 1',
          text: 'Analysis of the existing systems and definition of colours, typography and brand voice',
        },
        {
          phase: 'Months 1–2',
          text: 'Creation of the primitive and semantic tokens in Figma',
        },
        {
          phase: 'Months 2–5',
          text: 'Build of the 35+ components with anatomy, states and usage guides',
        },
        {
          phase: 'Month 6',
          text: 'The AI test through Figma reveals the need for real code',
        },
        {
          phase: 'Pivot',
          text: 'Components rebuilt in HTML, CSS and JS with the help of Cursor',
        },
        {
          phase: 'Wrap-up',
          text: 'GitHub repository and an AI test whose result was validated by Topaz',
        },
      ],
    },
    stack: {
      heading: 'Tools used',
      text: 'A hybrid process between design and engineering, with generative AI as a copilot at both ends — from drawing the design tokens in Figma to the versioned code on GitHub.',
    },
    learnings: {
      heading: 'What we learned about design, code and trust',
      paragraphs: [
        'This project taught us that a Design System is not a deliverable — it is a contract. A contract between the brand and whoever executes it, be it a junior designer, a developer or an artificial intelligence.',
        'We also learned that AI does not replace human vision — it amplifies it. But for that, the vision has to be documented with depth, with intent, with the courage to state not only what to do, but why.',
        'Topaz came out of this project with something well beyond good-looking components and well-named tokens. They came out with a system that grows with them.',
      ],
      quoteTitle: 'The main takeaway',
      quoteText:
        'The best design AI is not the one that knows everything — it is the one with access to the right context, in the right structure, at the right time.',
    },
  },
}
