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
        category: 'Gamification',
        description:
          'Fpass is an online learning platform that brings together courses across a wide range of subjects, a model similar to Hotmart, where content creators and students meet within a single digital ecosystem.',
        tags: ['Responsive website', 'Research'],
      },
      '2': {
        title: 'Creating a design system to be used with AI at Topaz Consórcios',
        category: 'Product Designer',
        description:
          'Design system can be used to create any page with the help of AI and Prompts',
        tags: ['Design System', 'AI', 'Prompts'],
      },
      '3': {
        title: 'Turning API Data Into Betting Decisions in Seconds',
        category: 'Product Design',
        description:
          'Bettest is a new product for Fulltrader that lets bettors test a strategy against past games before risking money on it, turning a screen full of raw API data into a decision read in seconds.',
        tags: ['UX Research', 'Usability Testing', 'High fidelity'],
      },
    },
  },
  about: {
    titlePrefix: "Hi, i'm",
    greeting: 'Nice to meet you.',
    paragraphs: [
      "My journey didn't start with a sketchbook. It started with lines of code. As a developer, I learned how products are built from the inside out, but I soon realized what truly excited me wasn't just making things work, it was making them feel right. That's what led me to UX/UI Design, and I never looked back.",
      'Today, I bring a rare perspective: I design with both the user and the engineer in mind, obsessing over every pixel and interaction to create interfaces that are not just functional, but genuinely beautiful and intuitive.',
      'Outside of work, I share my space with my cats, find inspiration in music and art, and spend my weekends passionately cheering for Palmeiras, because great design, just like a great football club, is all about vision, teamwork, and never settling for mediocre.',
    ],
    stats: ['Years experience', 'Projects done', "Clients I've worked"],
  },
  testimonials: {
    title: 'What co-workers say about me',
    hint: 'Drag for more testimonials →',
    items: {
      '1': {
        quote:
          'I worked with Otávio at Manobra Studio, primarily on the Caixa Econômica Federal project. When I joined the team, he was very welcoming and always willing to provide guidance and share his knowledge, which made a huge difference in my adjustment period.\n\nHe is a competent, collaborative professional who is always ready to help. It was a pleasure working with him, and I certainly recommend him.',
        role: 'UX/UI & Graphic Designer, Manobra Studio',
      },
      '2': {
        quote:
          'Working with Otávio means having a product partner who is super willing and open to try new things, always trying his best to achieve our goals! Together, we worked on various projects, from self-service applications to complex ERP systems, and he always brought a very good vision and delivery, even with few inputs.\n\nA striking memory was when I drew the app screens on a sheet of paper, and he gave me an exceptional job! Otávio is certainly a very creative professional, resilient, able to overcome any challenge, and a very pleasant and nice person to work with!.',
        role: 'Product Manager, Topaz Consórcios',
      },
      '3': {
        quote:
          'Otávio spent more than three years on the team I led at Manobra Studio. He worked on various interface design projects with good results, and in some of them he also contributed to the research side.\n\nMore recently, he began incorporating AI into his daily workflow.',
        role: 'CEO/Founder, Manobra Studio',
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
    success: "Thanks, your message has been sent. I'll get back to you soon.",
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
    tags: ['Manobra Studio', 'High fidelity', 'Responsive', 'Research', 'Gamification'],
    heroMedia: 'Fpass, platform overview',
    star: {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
    context: {
      heading: 'Context',
      paragraphs: [
        'Fpass is an online learning platform that brings together courses across a wide range of subjects, a model similar to Hotmart, where content creators and students meet within a single digital ecosystem.',
        'The platform had grown fast on acquisition, but the experience after the purchase was entirely passive. Students bought a course, watched the first lessons and slowly disappeared.',
      ],
      media: 'fpass',
    },
    goals: {
      heading: 'Objectives',
      intro:
        'The concept of the project was to turn the passive experience of consuming lessons into an active journey, one where progress is visible, rewarded and worth returning to. Four goals guided every decision from research to final design:',
      items: [
        'Creating triggers that would bring users back to the platform consistently',
        'Building a sense of continuous progress and belonging',
        'Adding perceived value beyond course content, increasing user lifetime value for the business',
        'Increasing user retention on the platform',
      ],
    },
    pains: {
      heading: 'Bussiness frustrations',
      intro:
        'After a call with the client, I mapped the main pain points of the business, understanding what was hurting the results and what, in his view, was missing to retain the student.',
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
          text: 'Once a course ended there was nothing left holding the user to the ecosystem, the relationship ended with the last lesson.',
        }
      ],
    },
    research: {
      heading: 'Research',
      subheading: 'Analysis of leaders in gamification',
      text: 'Given the impossibility of conducting user interviews, competitor research took on even greater weight as the primary source of insights. The focus was on understanding what gamification leaders like Duolingo and World of Warcraft do to drive engagement and retention.',
      media: 'Gamification benchmark board',
      calloutTitle: 'What we analyzed',
      calloutText:
        'Six mechanics came back consistently across every product in the benchmark. I broke each one down to understand what it rewards, what it costs to build, and whether it would survive in a platform where the content, not the game, is the product.',
    },
    benchmark: [
      {
        title: 'Account and Avatar customization',
        text: 'Products that let people shape an avatar create ownership from the very first session. The character becomes a small personal investment, and everything earned afterwards has somewhere to be worn and shown.',
        media: 'Avatar customization, benchmark',
      },
      {
        title: 'Level progress systems',
        text: 'Levels turn scattered activity into a single readable number. Each lesson feeds a bar that never resets, so effort accumulates even when the student switches between courses.',
        media: 'Level progress, benchmark',
      },
      {
        title: 'In-game currency',
        text: 'A soft currency rewards actions the product wants to see repeated and gives them an immediate, tangible payoff, without touching real money or discounting the core offer.',
        media: 'In-game currency, benchmark',
      },
      {
        title: 'Accessories and perks marketplace',
        text: 'A place to spend what was earned closes the loop. Cosmetic items and practical perks give the currency meaning and give the user a goal to save towards.',
        media: 'Marketplace, benchmark',
      },
      {
        title: 'User ranking',
        text: 'Ranking introduces social comparison and belonging. Handled well it motivates; handled badly it discourages beginners, so scope and reset rules matter more than the leaderboard itself.',
        media: 'User ranking, benchmark',
      },
      {
        title: 'Consecutive day streak',
        text: 'The streak is the strongest return trigger of the whole set. It creates a small daily commitment and something the user is unwilling to lose, which is exactly the habit the platform was missing.',
        media: 'Consecutive day streak, benchmark',
      },
    ],
    goalsCompare: {
      heading: 'Collected insights',
      intro:
        'The analysis made it clear that the most successful gamifications share a common logic: they create chained engagement loops, where each user action generates a reward that motivates the next one. The design of these mechanisms needs to be visible enough to drive motivation, but never intrusive enough to distract from the core goal, in the case of Fpass, learning.',
    },
    profile: {
      title: 'Profile page',
      text: 'The profile page became the place where everything the student earned lives together, the reward for consistency, in one screen worth coming back to and worth sharing.',
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
        'The final design applied that feedback across five screens, each one answering a specific part of the loop: earn, collect, progress and return.',
        "Formal user validation was not carried out, again due to a constraint imposed by the client. However, the product went through an internal review process with the Manobra Studio team, where UX decisions were evaluated for design system consistency, coherence of the gamification mechanics and clarity of the interaction flow.",
        "The client's feedback upon receiving the final project was strong: Fpass reported that the delivery exceeded their expectations. In terms of post-launch success criteria, the ideal metrics to track the real impact of gamification would be:"
      ],
      metrics: [
        'Weekly access frequency: a direct indicator of engagement with the streak mechanic',
        "Course completion rate: a learning metric that reflects the product's overall success",
        'Currency marketplace engagement: to evaluate whether the internal economy is driving the desired behavior',
      ],
    },
    finalDesign: [
      {
        title: 'Marketplace',
        text: 'Everything earned on the platform is spent here, cosmetic items for the avatar and practical perks such as extra course time or exclusive content. The catalogue is organised so a beginner always sees something reachable within a few days of study.',
        media: 'Marketplace, final design',
      },
      {
        title: 'Achievements',
        text: 'Achievements recognise behaviours the product wants to reinforce: finishing a module, returning after a break, studying across different subjects. Locked achievements stay visible so there is always a next target on screen.',
        media: 'Achievements, final design',
      },
      {
        title: 'Leveling up',
        text: 'Levelling up is the moment the whole system pays off. It interrupts the flow just long enough to celebrate, hands out currency, and points to what the next level unlocks.',
        media: 'Leveling up, final design',
      },
      {
        title: 'Quests',
        text: 'Quests break the long journey of a course into short, daily objectives. They give the streak something concrete to do each day and connect the gamification layer back to the actual learning content.',
        media: 'Quests, final design',
      },
    ],
  },
  caseBettest: {
    title: 'Bettest: from API to a decision in seconds',
    role: 'Product Designer',
    tags: [
      'Manobra Studio',
      'UX Research',
      'Usability Testing',
      'High fidelity'
    ],
    heroMedia: 'Bettest, product overview',
    tagline:
      'Turning everything an API delivers into a decision the user makes in seconds.',
    star: {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
    context: {
      heading: 'Context',
      paragraphs: [
        'Fulltrader is a sports betting assistance platform and one of Manobra’s longest-standing clients. This time, instead of evolving an existing tool, the challenge was to build a new product from scratch: let the user apply filters to games that already happened and see what a strategy would have returned, how many Greens and how many Reds, and how much it would have won or lost over the period.',
        'The brief came with one detail that changed the shape of the work: Fulltrader already had an interface built by their own development team, assembled from everything their API could pull. The starting point was not a blank page, it was a full screen, with every piece of information available at once, in the same place and with the same visual weight.',
        'A ready interface is not a ready solution. Product Design work started exactly there: understanding what, out of all of that, actually supported a decision.',
      ],
      media: 'bettest',
      glossaryTitle: 'User vocabulary',
      glossary: [
        { term: 'Green', text: 'a bet that won' },
        { term: 'Red', text: 'a bet that lost' },
        { term: 'Odd', text: 'the multiplier paid by the bookmaker' },
        { term: 'Under HT 0.5', text: 'condition where no goal is scored before half-time' },
      ],
    },
    challenge: {
      heading: 'The challenge',
      subheading: 'From raw data to a decision',
      intro: 'We defined two high-level objectives for the product:',
      goals: [
        {
          title: 'Make building a search understandable',
          text: 'Reduce the cognitive load of setting up a test, so the user knew where to start and what to do next without having to decode the whole screen.',
        },
        {
          title: 'Make the result readable in seconds',
          text: 'Give hierarchy to what answers the central question, Greens, Reds and the gain or loss, instead of treating every piece of API data as equally important.',
        },
      ],
      business:
        'On the business side, the goal was to validate a new product as an MVP, with predictability as its value proposition, leveraging a user base already inside the Fulltrader ecosystem.',
    },
    myRole: {
      heading: 'My role',
      text: 'I led UX/UI end to end: competitor analysis, research script, running the interviews and usability tests, analysis of the findings, information architecture, final interface and handoff to Fulltrader’s development team.',
    },
    research: {
      heading: 'Research',
      subheading: 'Learning from what already exists',
      intro:
        'Before proposing anything, we ran a competitor analysis looking for insights for the first version of the interface, across two fronts.',
      benchmark: [
        {
          title: 'Fulltrader’s own products',
          text: 'We used interfaces we had already built for them on previous projects. This user was already trained on those patterns, reusing them shortens the learning curve and keeps a new product from feeling foreign inside the same ecosystem.',
          media: 'Fulltrader products, benchmark',
        },
        {
          title: 'Matchbook',
          text: 'A sports betting assistance platform where a feature shows the likelihood of each type of bet happening or not. The main takeaway was about communication: you can expose probability in a readable way without turning the screen into a spreadsheet, as long as there is a clear hierarchy between the number that decides and the number that only adds context.',
          media: 'Matchbook, benchmark',
        },
      ],
    },
    interviews: {
      heading: 'Interviews and usability testing',
      subheading: 'Talking to people who actually bet',
      intro:
        'Fulltrader reached out to users from their own community for the interviews, which gave us access to people with real product knowledge, not generic participants.',
      stats: [
        { value: '7', label: 'participants interviewed' },
        { value: '45 min', label: 'average session length' },
        { value: '2', label: 'distinct usage profiles' },
      ],
      profilesHeading: 'Two profiles, one shared blocker',
      profiles: [
        '3 participants had used Fulltrader for more than 4 years, in a deep and analytical way.',
        '4 participants had about a year and a half of experience and logged in twice a week, looking for numbers and patterns quickly.',
      ],
      profilesNote:
        'This split mattered for reading the results: when both profiles get stuck at the same point, the problem stops being a lack of user knowledge and becomes an interface problem.',
      scriptHeading: 'The script',
      questionsLabel: 'Context questions',
      questions: [
        'Which Fulltrader tool do you use the most? Why?',
        'What are the main reasons you use Fulltrader?',
      ],
      tasksLabel: 'Tasks on the prototype',
      tasks: [
        'Run a search named "First test", over the last 6 months, across 10 games, with the Under HT 0.5 condition and every championship available.',
        'After the search, report how many Greens and Reds appeared in the unfavourable and promising championships, and which of the two groups had the highest relative Odd.',
      ],
      methodNote:
        'The tasks were designed to measure two different moments, because they are two different problems: the first observes building the search (time to first action and completion rate); the second observes reading the result (time to answer and accuracy). Separating the two measurements is what revealed that the bottlenecks were also two.',
    },
    findings: {
      heading: 'Pain points and insights',
      subheading: 'Almost 8 seconds without taking a single action',
      intro: 'The numbers came back clear, and they are what backed every decision that followed.',
      pains: [
        {
          title: 'Almost 8s of hesitation to get started',
          text: 'Most users got stuck not on how to fill fields, but on where to start. With every filter available at once and no visible order between them, the screen gave no entry point.',
        },
        {
          title: '+7s to read Greens and Reds',
          text: 'The information was on screen, but competing with everything else. If the data that defines a test’s success takes a seven-second scan to find, it does not carry the visual weight it should.',
        },
        {
          title: 'Championships confused the reading',
          text: 'The split between unfavourable and promising championships blended into the general information group, and the block was not a business priority either.',
        },
      ],
      insightsHeading: 'What that revealed',
      insights: [
        {
          title: 'Split the search into steps',
          text: 'If the problem was choosing where to start, the fix was not better explanations, it was showing less at a time. Breaking the process into steps lets the user focus on one part at a time and removes the paralysis of facing every field at once.',
        },
        {
          title: 'Search and result are different pages',
          text: 'Building a test and reading a test demand different kinds of attention. Keeping them on the same screen made both compete for space, and both lost. Separating them let the result page get the hierarchy it needed.',
        },
        {
          title: 'Not every available field is useful information',
          text: 'The championships block existed because the API delivered it, not because anyone needed it. Cutting it was the cheapest and most effective decision of the project: it solved the users’ confusion and the business misalignment at the same time.',
        },
      ],
      vocabNote: {
        title: 'Vocabulary was not the problem',
        text: 'Terms like Under HT 0.5, Green and Red were already fully understood by users. The difficulty was in the structure of the screen, not the language, which ruled out investing in glossaries, tooltips or explanatory onboarding.',
      },
    },
    wireframes: {
      heading: 'Why we skipped wireframes',
      paragraphs: [
        'There was no wireframe stage in this project, and that was a decision, not a gap.',
        'The prototype Fulltrader had already built played exactly the role a wireframe would: it was navigable, held real data end to end and existed before any design investment. Redrawing it in low fidelity before knowing what to cut would have spent time reaching the same questions usability testing had already answered.',
        'So we used the prototype itself as the test artefact, and put the structuring effort where it mattered: information architecture, how many steps, in what order, what stays on each page and what leaves the screen.',
      ],
    },
    validation: {
      heading: 'Validation',
      subheading: 'Crossing the test with the business',
      intro:
        'Every decision was validated on two fronts at once: it had to solve a frustration observed in testing and support the initial business need.',
      decisionLabel: 'Decision',
      evidenceLabel: 'User evidence',
      businessLabel: 'Business reading',
      table: [
        {
          decision: 'Search split into steps',
          evidence: 'Almost 8s of hesitation to start',
          business: 'More completed tests = more product usage',
        },
        {
          decision: 'Separate pages for search and result',
          evidence: '+7s to read Greens and Reds',
          business: 'The result is the value delivered; it needs to be the protagonist',
        },
        {
          decision: 'Removal of the championships block',
          evidence: 'Confusion with the general information block',
          business: 'Low priority in the product vision',
        },
      ],
      metricsHeading: 'Metrics to track',
      metrics: [
        'Time to first completed search',
        'Completion rate of the setup flow',
        'Time spent reading the result',
      ],
    },
    finalDesign: {
      heading: 'Final design',
      features: [
        {
          title: 'A homepage focused on the searches',
          text: 'The product opens on a single question: what do you want to do now. Three direct actions, create a new Bettest, get to know the tool and deposit credits, give the entry point the original screen never offered. Below it, the history of recent Bettests carries each search result in the listing itself: profit, relative Odd, consecutive greens and reds. Finding an earlier test no longer means opening them one by one.',
          media: 'Homepage, Bettest',
        },
        {
          title: 'Configuration in steps',
          text: 'The search process was broken into steps, revealing one set of choices at a time. The user always knows where they are and what comes next.',
          media: 'Step-by-step configuration, Bettest',
        },
        {
          title: 'The result as the protagonist',
          text: 'The result page was built around Greens, Reds and the gain or loss for the period. A minimal design, with the whole screen working toward a single reading.',
          media: 'Result page, Bettest',
        },
        {
          title: 'Onboarding matters',
          text: 'A new flow has to introduce itself. The onboarding walks the user through the interface in short steps, showing where everything is before they have to go looking for it.',
          media: 'Onboarding, Bettest',
        },
        {
          title: 'Revisit to analyse',
          text: 'Every Bettest is saved and can be reopened at any time. It is where the user compares the tests already run and sees patterns across them, not just the result of one.',
          media: 'Meus Bettests, Bettest',
        },
      ],
      scopeHeading: 'Scope delivered',
      scope: [
        { value: '5+', label: 'core interfaces' },
        { value: '30+', label: 'interfaces counting every state' },
        { value: 'Style guide and documentation', label: 'For the development team and POs' },
        { value: 'Mobile version', label: 'For the development team' },
      ],
    },
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
    heroMedia: 'Topaz Consórcios Design System, overview',
    situation: {
      label: 'Situation',
      heading: 'The problem nobody wanted to admit',
      paragraphs: [
        'When Topaz came to us, the picture was a familiar one: a growing company with several digital systems built over the years, each with its own personality, its own colours, its own buttons. It was as if different architects had built rooms in the same hotel without ever speaking to each other.',
        'But this challenge had an extra layer. Topaz did not just want to standardise what already existed, they wanted to go further. The ambition was to use artificial intelligence to create new digital interfaces from scratch, from a single prompt, without the AI inventing solutions disconnected from the visual identity they had spent years building.',
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
      heading: 'Prove it was possible, and define what had to exist',
      paragraphs: [
        'Before any pixel, any component, any line of code, we went deep into research. We wanted to understand whether the AIs available on the market were able to use a Design System as a real foundation for generating interfaces, not just as a vague reference.',
        'The answer was yes. With the right structure it would be entirely possible. But there was a condition: the Design System had to be more than beautiful in Figma. It had to be machine-readable.',
        'That insight reframed the project. We were not just creating a style guide, we were building a language. A language that human designers and artificial intelligences would have to speak with equal fluency.',
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
        'The work ran across four connected fronts: listen to what already existed, create the token foundation, document every component and, after one failed test, rebuild it all in the format an AI actually reads.',
      stats: [
        { value: '6', label: 'months of continuous build' },
        { value: '35+', label: 'components with variations' },
        { value: '2', label: 'types of tokens created' },
      ],
      audit: {
        heading: 'Before creating, we had to listen',
        paragraphs: [
          "The first thing we did was dive into Topaz's past. We analysed every digital system they had built, apps, web platforms, internal dashboards. Each one carried fragments of an identity that had not yet been fully articulated.",
          'That deep mapping answered questions that looked simple but were fundamental: which colours actually represent Topaz? Which typography best expresses its personality? How does the brand speak to its users, with authority, with closeness, with technical precision? And which components genuinely deserved to exist?',
          'We did not start from zero. We started from their history.',
        ],
        media: 'Audit of the existing digital systems',
      },
      tokens: {
        heading: 'The invisible foundation: tokens that carry meaning',
        intro:
          'Every visual system starts with a foundation. And the foundation of any robust Design System is its tokens, values that turn design decisions into code. We created two types, each with a very clear purpose.',
        primitive: {
          label: 'Base layer',
          name: 'Primitive tokens',
          text: 'These are the raw values of the brand, the exact colours, the font sizes, the spacing. They carry no context of use; they are the paint on the palette before it touches the screen.',
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
          'This double layer was decisive. Primitive tokens guarantee the brand is never distorted. Semantic tokens guarantee that any person, or any AI, understands why to use each value, not only which value to use. It is the difference between handing someone a dictionary and handing them the grammar of the language.',
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
            text: 'Default, hover, focus, active, disabled, error, no state was left without a visual and behavioural definition.',
          },
          {
            title: 'Variations',
            text: 'Sizes, hierarchies, types and contexts of use, each variation with clear criteria for when and why to apply it.',
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
          'The Design System in Figma was complete. It was time for the big test: ask the AI to open the file and build a simple interface, form fields, text, headings, buttons. The most fundamental components.',
        calloutLabel: 'Turning point',
        calloutText:
          'The result was not what we expected. The AI understood the design, but could not translate that visual intent into functional, consistent code. Figma was a beautiful museum, and coding AIs needed a factory.',
        paragraphs: [
          'Instead of treating it as a failure, we treated it as information. Together with the Topaz team, we revisited the strategy. The conclusion was clear: for an AI to generate interfaces faithful to the brand, the components had to exist as real code, HTML, CSS and JavaScript, not only as visual frames.',
          'We started again. This time with Cursor as an ally, a tool that amplifies code writing with AI assistance. Figma stopped being the final destination and became the reference map for building what would be the real deliverable.',
        ],
        media: 'First interface generation test through Figma',
      },
    },
    result: {
      label: 'Result',
      heading: 'From Figma to GitHub: the AI finds its native language',
      intro:
        'With every component and token translated into code and published in a GitHub repository, it was time to close the loop. We asked an AI to read and analyse the repository, and then build the very interface that had failed months earlier.',
      calloutLabel: 'Validated result',
      calloutText:
        'The result was solid, coherent and surprisingly faithful to what we had imagined. The AI did not only understand the components, it understood the logic behind them. From a single prompt, it assembled an interface that looked like the work of a designer who knew Topaz deeply.',
      paragraphs: [
        'The repository became far more than a code archive. It became the living memory of the Topaz visual identity, a resource any AI, at any moment, can consult to create new interfaces without improvising, without inventing, without losing its way.',
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
      text: 'A hybrid process between design and engineering, with generative AI as a copilot at both ends, from drawing the design tokens in Figma to the versioned code on GitHub.',
    },
    learnings: {
      heading: 'What we learned about design, code and trust',
      paragraphs: [
        'This project taught us that a Design System is not a deliverable, it is a contract. A contract between the brand and whoever executes it, be it a junior designer, a developer or an artificial intelligence.',
        'We also learned that AI does not replace human vision, it amplifies it. But for that, the vision has to be documented with depth, with intent, with the courage to state not only what to do, but why.',
        'Topaz came out of this project with something well beyond good-looking components and well-named tokens. They came out with a system that grows with them.',
      ],
      quoteTitle: 'The main takeaway',
      quoteText:
        'The best design AI is not the one that knows everything, it is the one with access to the right context, in the right structure, at the right time.',
    },
  },
}
