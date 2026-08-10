import Container from '@/components/atoms/Container/Container'
import Reveal from '@/components/atoms/Reveal/Reveal'
import Tag from '@/components/atoms/Tag/Tag'
import MediaPlaceholder from '@/components/atoms/MediaPlaceholder/MediaPlaceholder'
import StarLabel from '@/components/atoms/StarLabel/StarLabel'
import { designSystemTools } from '@/data/tools'
import useReveal from '@/hooks/UseReveal'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TimelineCopy } from '@/i18n/types'
import styles from './CaseDesignSystemPage.module.css'

/*
 * No screenshots exist for this case yet, so every MediaPlaceholder here is
 * rendered without `src` on purpose — it falls back to the empty labelled
 * frame, which reserves the slot for the real asset later.
 */

/** Dot treatment per timeline entry, positional against `timeline.items`. */
const TIMELINE_STATES = ['done', 'done', 'done', 'warn', 'key', 'done'] as const

const TIMELINE_STATE_STYLES = {
  done: '',
  warn: styles.timelineWarn,
  key: styles.timelineKey,
}

interface TimelineItemProps {
  item: TimelineCopy
  state: (typeof TIMELINE_STATES)[number]
  delay: number
}

/**
 * Reveals itself on scroll. It reads the observer directly instead of wrapping
 * in <Reveal> because that renders a div, which is not valid inside an <ol>.
 */
const TimelineItem = ({ item, state, delay }: TimelineItemProps) => {
  const { ref, isVisible } = useReveal<HTMLLIElement>(0.3)

  return (
    <li
      ref={ref}
      className={[
        styles.timelineItem,
        TIMELINE_STATE_STYLES[state],
        isVisible && styles.timelineVisible,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <strong className={styles.timelinePhase}>{item.phase}</strong>
      <p className={styles.timelineText}>{item.text}</p>
    </li>
  )
}

const CaseDesignSystemPage = () => {
  const { t } = useLanguage()
  const c = t.caseDesignSystem
  const { situation, task, action, result } = c

  return (
    <article className={styles.page}>
      <Container className={styles.inner}>
        <Reveal>
          <MediaPlaceholder label={c.heroMedia} ratio="banner" />
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

        {/* ------------------------------------------------------ Situation */}
        <section className={styles.section}>
          <StarLabel letter="S">{situation.label}</StarLabel>
          <h2 className={styles.heading}>{situation.heading}</h2>
          <div className={styles.prose}>
            {situation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutMark}>Q</span>
            <div>
              <h3 className={styles.calloutTitle}>{situation.quoteTitle}</h3>
              <p className={styles.calloutText}>{situation.quoteText}</p>
            </div>
          </div>

          <MediaPlaceholder label={situation.media} ratio="banner" />

          <h3 className={styles.subheading}>{situation.painsHeading}</h3>
          <ul className={styles.painList}>
            {situation.pains.map((pain) => (
              <li key={pain.title} className={styles.painItem}>
                <strong className={styles.painTitle}>{pain.title}</strong>
                <p className={styles.painText}>{pain.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ----------------------------------------------------------- Task */}
        <section className={styles.section}>
          <StarLabel letter="T">{task.label}</StarLabel>
          <h2 className={styles.heading}>{task.heading}</h2>
          <div className={styles.prose}>
            {task.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className={styles.subheading}>{task.goalsHeading}</h3>
          <ol className={styles.goals}>
            {task.goals.map((goal, index) => (
              <li key={goal} className={styles.goal}>
                <span className={styles.goalNumber}>{index + 1}</span>
                <p className={styles.goalText}>{goal}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* --------------------------------------------------------- Action */}
        <section className={styles.section}>
          <StarLabel letter="A">{action.label}</StarLabel>
          <h2 className={styles.heading}>{action.heading}</h2>
          <div className={styles.prose}>
            <p>{action.intro}</p>
          </div>

          <ul className={styles.stats}>
            {action.stats.map((stat) => (
              <li key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.block}>
            <h3 className={styles.subheading}>{action.audit.heading}</h3>
            <div className={styles.prose}>
              {action.audit.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <MediaPlaceholder label={action.audit.media} ratio="wide" />
          </div>

          <div className={styles.block}>
            <h3 className={styles.subheading}>{action.tokens.heading}</h3>
            <div className={styles.prose}>
              <p>{action.tokens.intro}</p>
            </div>

            <div className={styles.tokenGrid}>
              <div className={styles.tokenCard}>
                <span className={styles.tokenLabel}>{action.tokens.primitive.label}</span>
                <strong className={styles.tokenName}>{action.tokens.primitive.name}</strong>
                <p className={styles.tokenText}>{action.tokens.primitive.text}</p>
              </div>
              <div className={[styles.tokenCard, styles.tokenSemantic].join(' ')}>
                <span className={styles.tokenLabel}>{action.tokens.semantic.label}</span>
                <strong className={styles.tokenName}>{action.tokens.semantic.name}</strong>
                <p className={styles.tokenText}>{action.tokens.semantic.text}</p>
              </div>
            </div>

            <ul className={styles.pills}>
              {action.tokens.examples.map((example) => (
                <li key={example} className={styles.pill}>
                  {example}
                </li>
              ))}
            </ul>

            <div className={styles.prose}>
              <p>{action.tokens.closing}</p>
            </div>
            <MediaPlaceholder label={action.tokens.media} ratio="wide" />
          </div>

          <div className={styles.block}>
            <h3 className={styles.subheading}>{action.components.heading}</h3>
            <div className={styles.prose}>
              <p>{action.components.intro}</p>
            </div>

            <ol className={styles.steps}>
              {action.components.steps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.stepBody}>
                    <strong className={styles.stepTitle}>{step.title}</strong>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.prose}>
              <p>{action.components.closing}</p>
            </div>
            <MediaPlaceholder label={action.components.media} ratio="wide" />
          </div>

          <div className={styles.block}>
            <h3 className={styles.subheading}>{action.pivot.heading}</h3>
            <div className={styles.prose}>
              <p>{action.pivot.intro}</p>
            </div>

            <div className={styles.note}>
              <span className={styles.noteLabel}>{action.pivot.calloutLabel}</span>
              <p className={styles.noteText}>{action.pivot.calloutText}</p>
            </div>

            <div className={styles.prose}>
              {action.pivot.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <MediaPlaceholder label={action.pivot.media} ratio="wide" />
          </div>
        </section>

        {/* --------------------------------------------------------- Result */}
        <section className={styles.section}>
          <StarLabel letter="R">{result.label}</StarLabel>
          <h2 className={styles.heading}>{result.heading}</h2>
          <div className={styles.prose}>
            <p>{result.intro}</p>
          </div>

          <div className={[styles.note, styles.noteWin].join(' ')}>
            <span className={styles.noteLabel}>{result.calloutLabel}</span>
            <p className={styles.noteText}>{result.calloutText}</p>
          </div>

          <MediaPlaceholder label={result.media} ratio="wide" />

          <div className={styles.prose}>
            {result.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className={styles.subheading}>{result.outcomesHeading}</h3>
          <ul className={styles.checkList}>
            {result.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        {/* ------------------------------------------------------- Timeline */}
        <section className={[styles.section, styles.timelineSection].join(' ')}>
          <h2 className={styles.heading}>{c.timeline.heading}</h2>
          <ol className={styles.timeline}>
            {c.timeline.items.map((item, index) => (
              <TimelineItem
                key={item.phase}
                item={item}
                state={TIMELINE_STATES[index]}
                delay={index * 90}
              />
            ))}
          </ol>
        </section>

        {/* ---------------------------------------------------------- Stack */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{c.stack.heading}</h2>
          <div className={styles.prose}>
            <p>{c.stack.text}</p>
          </div>
          <ul className={styles.tools}>
            {designSystemTools.map((tool, index) => (
              <li key={tool.name}>
                <Reveal delay={index * 70}>
                  <div className={styles.tool}>
                    <img className={styles.toolLogo} src={tool.logo} alt="" draggable={false} />
                    <span className={styles.toolName}>{tool.name}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* ------------------------------------------------------ Learnings */}
        <section className={styles.section}>
          <h2 className={styles.heading}>{c.learnings.heading}</h2>
          <div className={styles.prose}>
            {c.learnings.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutMark}>Q</span>
            <div>
              <h3 className={styles.calloutTitle}>{c.learnings.quoteTitle}</h3>
              <p className={styles.calloutText}>{c.learnings.quoteText}</p>
            </div>
          </div>
        </section>
      </Container>
    </article>
  )
}

export default CaseDesignSystemPage
