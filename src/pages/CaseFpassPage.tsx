import Container from '@/components/atoms/Container/Container'
import Reveal from '@/components/atoms/Reveal/Reveal'
import Tag from '@/components/atoms/Tag/Tag'
import MediaPlaceholder from '@/components/atoms/MediaPlaceholder/MediaPlaceholder'
import StarLabel from '@/components/atoms/StarLabel/StarLabel'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './CaseFpassPage.module.css'

import heroMockup from '@/assets/images/projectsCase/fpass-principal-case.svg'
import logoBanner from '@/assets/images/projectsCase/fpass-logo-banner.svg'
import researchDuolingo from '@/assets/images/projectsCase/Duolingo.svg'
import researchWow from '@/assets/images/projectsCase/research-wow.jpg'
import avatarBenchmark from '@/assets/images/projectsCase/Avatar customization.svg'
import marketplaceBenchmark from '@/assets/images/projectsCase/fpass-marketplace-benchmark.jpg'
import finalMarketplace from '@/assets/images/projectsCase/Marketplace fpass.svg'
import finalAchievements from '@/assets/images/projectsCase/Rank & achievements.svg'
import finalLevelingUp from '@/assets/images/projectsCase/Leveling up.svg'
import finalQuests from '@/assets/images/projectsCase/Quests.svg'

import duolingoLessonPath from '@/assets/images/projectsCase/duolingo-lesson-path.jpg'
import duolingoMissions from '@/assets/images/projectsCase/duolingo-missions.jpg'
import duolingoLeaderboard from '@/assets/images/projectsCase/duolingo-leaderboard.jpg'
import duolingoCurrencyShop from '@/assets/images/projectsCase/duolingo-currency-shop.jpg'
import duolingoXpEarned from '@/assets/images/projectsCase/duolingo-xp-earned.jpg'
import duolingoStreakFreeze from '@/assets/images/projectsCase/duolingo-streak-freeze.jpg'
import duolingoStreakCalendar from '@/assets/images/projectsCase/duolingo-streak-calendar.jpg'
import duolingoStreakDay1 from '@/assets/images/projectsCase/duolingo-streak-day1.jpg'
import duolingoStreakFriends from '@/assets/images/projectsCase/duolingo-streak-friends.jpg'

// Each entry is one or more images. Single WoW screenshots use the "wide"
// ratio; grouped Duolingo mobile captures use "phone" so each stays uncropped.
const benchmarkMedia: { ratio: 'wide' | 'phone'; sources: string[] }[] = [
  { ratio: 'wide', sources: [avatarBenchmark] },
  { ratio: 'phone', sources: [duolingoLessonPath, duolingoMissions, duolingoLeaderboard] },
  { ratio: 'phone', sources: [duolingoCurrencyShop, duolingoXpEarned, duolingoStreakFreeze] },
  { ratio: 'wide', sources: [marketplaceBenchmark] },
  { ratio: 'phone', sources: [duolingoLeaderboard, duolingoStreakFriends] },
  { ratio: 'phone', sources: [duolingoStreakCalendar, duolingoStreakDay1, duolingoStreakFriends] },
]

const finalDesignMedia = [finalMarketplace, finalAchievements, finalLevelingUp, finalQuests]

const HIGHLIGHT_TERMS = [
  'Duolingo',
  'World of Warcraft',
  'elas criam ciclos de engajamento encadeados, onde cada ação do usuário gera uma recompensa que motiva a próxima',
  'they create chained engagement loops, where each user action generates a reward that motivates the next one',
  'conquistar, colecionar, progredir e retornar',
  'earn, collect, progress and return',
  'processo de revisão',
  'review process',
  'decisões de UX foram avaliadas quanto à consistência do sistema de design',
  'UX decisions were evaluated for design system consistency',
  'a entrega superou suas expectativas',
  'the delivery exceeded their expectations',
  'online learning platform',
  'experience after the purchase was entirely passive',
  'watched the first lessons and slowly disappeared',
]
const highlightRegex = new RegExp(`(${HIGHLIGHT_TERMS.join('|')})`, 'g')

const highlightText = (text: string) =>
  text
    .split(highlightRegex)
    .map((part, index) =>
      HIGHLIGHT_TERMS.includes(part) ? (
        <strong key={`${part}-${index}`} className={styles.highlight}>
          {part}
        </strong>
      ) : (
        part
      ),
    )

const CaseFpassPage = () => {
  const { t } = useLanguage()
  const c = t.caseFpass

  return (
    <article className={styles.page}>
      <Container className={styles.inner}>
        <Reveal>
          <div className={styles.heroImage}>
            <img src={heroMockup} alt={c.heroMedia} />
          </div>
        </Reveal>

        <header className={styles.hero}>
          <h1 className={styles.title}>{c.title}</h1>
          <ul className={styles.tags}>
            <li>
              <Tag variant="accent">{c.role}</Tag>
            </li>
            {c.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </header>

        {/*
         * The four STAR acts span several sections each, so the label only
         * opens the first section of its act: context (S), goals (T),
         * research (A) and validation (R).
         */}
        <section className={styles.section}>
          <StarLabel letter="S">{c.star.situation}</StarLabel>
          <h2 className={styles.heading}>{c.context.heading}</h2>
          <div className={styles.prose}>
            {c.context.paragraphs.map((paragraph) => (
              <p key={paragraph}>{highlightText(paragraph)}</p>
            ))}
          </div>

          <MediaPlaceholder label={c.context.media} ratio="banner" src={logoBanner} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.pains.heading}</h2>
          <div className={styles.prose}>
            <p>{c.pains.intro}</p>
          </div>

          <ul className={styles.painList}>
            {c.pains.business.map((pain) => (
              <li key={pain.title} className={styles.painItem}>
                <strong className={styles.painTitle}>{pain.title}</strong>
                <p className={styles.painText}>{pain.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <StarLabel letter="T">{c.star.task}</StarLabel>
          <h2 className={styles.heading}>{c.goals.heading}</h2>
          <div className={styles.prose}>
            <p>{c.goals.intro}</p>
          </div>

          <ol className={styles.goals}>
            {c.goals.items.map((goal, index) => (
              <li key={goal} className={styles.goal}>
                <span className={styles.goalNumber}>{index + 1}</span>
                <p className={styles.goalText}>{goal}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <StarLabel letter="A">{c.star.action}</StarLabel>
          <h2 className={styles.heading}>{c.research.heading}</h2>
          <h3 className={styles.subheading}>{c.research.subheading}</h3>
          <div className={styles.prose}>
            <p>{highlightText(c.research.text)}</p>
          </div>

          <div className={styles.mediaGrid}>
            <MediaPlaceholder label={c.research.media} ratio="square" src={researchDuolingo} />
            <MediaPlaceholder label={c.research.media} ratio="square" src={researchWow} />
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutMark}>Q</span>
            <div>
              <h4 className={styles.calloutTitle}>{c.research.calloutTitle}</h4>
              <p className={styles.calloutText}>{c.research.calloutText}</p>
            </div>
          </div>
        </section>

        {c.benchmark.map((item, index) => {
          const { ratio, sources } = benchmarkMedia[index]
          return (
            <section key={item.title} className={styles.section}>
              <h2 className={styles.heading}>{item.title}</h2>
              <div className={styles.prose}>
                <p>{item.text}</p>
              </div>
              <div className={styles.mediaGrid}>
                {sources.map((src) => (
                  <MediaPlaceholder
                    key={src}
                    label={item.media}
                    ratio={ratio}
                    src={src}
                    fit={ratio === 'wide' ? 'contain' : 'cover'}
                  />
                ))}
              </div>
            </section>
          )
        })}

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.goalsCompare.heading}</h2>
          <div className={styles.prose}>
            <p>{highlightText(c.goalsCompare.intro)}</p>
          </div>
        </section>

        <section className={styles.section}>
          <StarLabel letter="R">{c.star.result}</StarLabel>
          <h2 className={styles.heading}>{c.validation.heading}</h2>
          <div className={styles.prose}>
            {c.validation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{highlightText(paragraph)}</p>
            ))}
          </div>

          <div className={styles.metricsCard}>
            <ul className={styles.checkList}>
              {c.validation.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>

          <h3 className={styles.heading}>{c.profile.title}</h3>
          <div className={styles.prose}>
            <p>{c.profile.text}</p>
          </div>

          <div className={styles.metricsCard}>
            <ul className={styles.checkList}>
              {c.profile.blocks.map((block) => (
                <li key={block}>{block}</li>
              ))}
            </ul>
          </div>

          <div className={styles.profileImage}>
            <img src={heroMockup} alt={c.profile.media} />
          </div>
        </section>

        {c.finalDesign.map((item, index) => (
          <section key={item.title} className={styles.section}>
            <h2 className={styles.heading}>{item.title}</h2>
            <div className={styles.prose}>
              <p>{item.text}</p>
            </div>
            <MediaPlaceholder label={item.media} ratio="wide" src={finalDesignMedia[index]} />
          </section>
        ))}
      </Container>
    </article>
  )
}

export default CaseFpassPage
