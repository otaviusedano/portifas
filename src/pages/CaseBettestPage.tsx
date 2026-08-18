import Container from '@/components/atoms/Container/Container'
import Reveal from '@/components/atoms/Reveal/Reveal'
import Tag from '@/components/atoms/Tag/Tag'
import MediaPlaceholder from '@/components/atoms/MediaPlaceholder/MediaPlaceholder'
import StarLabel from '@/components/atoms/StarLabel/StarLabel'
import { useLanguage } from '@/i18n/LanguageContext'
import styles from './CaseBettestPage.module.css'

/* The result page — it opens the case and closes it, so both slots share it. */
import principalScreen from '@/assets/images/projectsCase/bettest-principal-case.svg'
import logoBanner from '@/assets/images/projectsCase/bettest-logo-banner.svg'
import researchEcosystem from '@/assets/images/projectsCase/bettest-fulltrader-ecosystem.svg'
import researchMatchbook from '@/assets/images/projectsCase/bettest-matchbook-benchmark.png'
import finalHomepage from '@/assets/images/projectsCase/bettest-homepage.svg'
import finalSteps from '@/assets/images/projectsCase/bettest-configuracao-etapas.svg'
import finalOnboarding from '@/assets/images/projectsCase/bettest-onboarding.svg'
import finalSaved from '@/assets/images/projectsCase/bettest-salvo.svg'

interface CaseMedia {
  src: string
  /** Frame modifier carrying this image's own aspect ratio. */
  frame: string
}

/**
 * Positional against `research.benchmark`. A gap leaves the empty labelled
 * frame in place, which reserves the slot for the real asset later. The two
 * boards are shaped very differently, so each names the frame it belongs in.
 */
const researchMedia: (CaseMedia | undefined)[] = [
  { src: researchEcosystem, frame: styles.frameBoard },
  { src: researchMatchbook, frame: styles.frameWide },
]

/** Positional against `finalDesign.features`, same rules as above. */
const finalDesignMedia: (CaseMedia | undefined)[] = [
  { src: finalHomepage, frame: styles.frameScreen },
  { src: finalSteps, frame: styles.frameScreen },
  { src: principalScreen, frame: styles.frameScreen },
  { src: finalOnboarding, frame: styles.frameScreen },
  { src: finalSaved, frame: styles.frameScreen },
]

/*
 * Only the hero art exists so far. Every other MediaPlaceholder is rendered
 * without `src` on purpose — it falls back to the empty labelled frame, which
 * reserves the slot for the real asset later.
 */

/*
 * Phrases lifted out of the prose because they carry the argument of the case:
 * what changed about the brief, what the benchmark taught, what separated the
 * two user profiles and why the client prototype replaced a wireframe stage.
 * Listed per language — only the active dictionary's phrases will ever match.
 */
const HIGHLIGHT_TERMS = [
  // pt
  'evoluir uma ferramenta existente',
  'aplicar filtros sobre jogos que já aconteceram e ver qual teria sido o resultado daquela estratégia',
  'O ponto de partida não era uma página em branco, era uma tela cheia, com todas as informações disponíveis',
  'Interface pronta não é solução pronta',
  'Conduzi o UX/UI do projeto de ponta a ponta',
  'Usamos as interfaces que já tínhamos criado para eles em projetos anteriores',
  'O aprendizado principal foi de comunicação: dá para expor probabilidade de forma legível sem transformar a tela em planilha',
  'profunda e analítica',
  'em busca de números e padrões de forma rápida.',
  'os dois perfis travam no mesmo ponto',
  'deixa de ser falta de repertório do usuário e passa a ser da interface.',
  'a primeira observa a montagem da busca (tempo até a primeira ação e taxa de conclusão); a segunda observa a leitura do resultado (tempo até a resposta e acerto)',
  'O protótipo já desenvolvido pela Fulltrader cumpriu exatamente o papel que um wireframe cumpriria',
  'Redesenhá-lo em baixa fidelidade antes de saber o que cortar teria consumido tempo',
  'O vocabulário não era o problema',
  // en
  'evolving an existing tool',
  'let the user apply filters to games that already happened and see what a strategy would have returned',
  'The starting point was not a blank page, it was a full screen, with every piece of information available at once',
  'A ready interface is not a ready solution',
  'I led UX/UI end to end',
  'We used interfaces we had already built for them on previous projects',
  'The main takeaway was about communication: you can expose probability in a readable way without turning the screen into a spreadsheet',
  'in a deep and analytical way',
  'looking for numbers and patterns quickly.',
  'both profiles get stuck at the same point',
  'the problem stops being a lack of user knowledge and becomes an interface problem.',
  'the first observes building the search (time to first action and completion rate); the second observes reading the result (time to answer and accuracy)',
  'The prototype Fulltrader had already built played exactly the role a wireframe would',
  'Redrawing it in low fidelity before knowing what to cut would have spent time',
  'Vocabulary was not the problem',
]

/** Terms carry `.`, `:` and `-`, so escape before they reach the pattern. */
const escapeRegex = (term: string) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const highlightRegex = new RegExp(`(${HIGHLIGHT_TERMS.map(escapeRegex).join('|')})`, 'g')

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

const CaseBettestPage = () => {
  const { t } = useLanguage()
  const c = t.caseBettest

  return (
    <article className={styles.page}>
      <Container className={styles.inner}>
        <Reveal>
          <div className={styles.heroImage}>
            <img src={principalScreen} alt={c.heroMedia} />
          </div>
        </Reveal>

        <header className={styles.hero}>
          <h1 className={styles.title}>{c.title}</h1>
          <p className={styles.subtitle}>{c.tagline}</p>
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
         * opens the first section of its act: context (S), challenge (T),
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

          <div className={[styles.mediaFrame, styles.frameLogo].join(' ')}>
            <img src={logoBanner} alt={c.context.media} />
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutMark}>?</span>
            <div>
              <h3 className={styles.calloutTitle}>{c.context.glossaryTitle}</h3>
              <dl className={styles.glossaryList}>
                {c.context.glossary.map((item) => (
                  <div key={item.term} className={styles.glossaryItem}>
                    <dt className={styles.glossaryTerm}>{item.term}</dt>
                    <dd className={styles.glossaryText}>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <StarLabel letter="T">{c.star.task}</StarLabel>
          <h2 className={styles.heading}>{c.challenge.heading}</h2>
          <h3 className={styles.subheading}>{c.challenge.subheading}</h3>
          <div className={styles.prose}>
            <p>{c.challenge.intro}</p>
          </div>

          <ol className={styles.goals}>
            {c.challenge.goals.map((goal, index) => (
              <li key={goal.title} className={styles.goal}>
                <span className={styles.goalNumber}>{index + 1}</span>
                <div>
                  <strong className={styles.goalTitle}>{goal.title}</strong>
                  <p className={styles.goalText}>{goal.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.prose}>
            <p>{c.challenge.business}</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.myRole.heading}</h2>
          <div className={styles.prose}>
            <p>{highlightText(c.myRole.text)}</p>
          </div>
        </section>

        <section className={styles.section}>
          <StarLabel letter="A">{c.star.action}</StarLabel>
          <h2 className={styles.heading}>{c.research.heading}</h2>
          <h3 className={styles.subheading}>{c.research.subheading}</h3>
          <div className={styles.prose}>
            <p>{c.research.intro}</p>
          </div>

          {c.research.benchmark.map((item, index) => {
            const media = researchMedia[index]

            return (
              <div key={item.title} className={styles.block}>
                <h4 className={styles.blockTitle}>{item.title}</h4>
                <div className={styles.prose}>
                  <p>{highlightText(item.text)}</p>
                </div>
                {media ? (
                  <div className={[styles.mediaFrame, media.frame].join(' ')}>
                    <img src={media.src} alt={item.media} />
                  </div>
                ) : (
                  <MediaPlaceholder label={item.media} ratio="video" />
                )}
              </div>
            )
          })}
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.interviews.heading}</h2>
          <h3 className={styles.subheading}>{c.interviews.subheading}</h3>
          <div className={styles.prose}>
            <p>{c.interviews.intro}</p>
          </div>

          <ul className={styles.stats}>
            {c.interviews.stats.map((stat) => (
              <li key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>

          <h4 className={styles.blockTitle}>{c.interviews.profilesHeading}</h4>
          <ul className={styles.profileGrid}>
            {c.interviews.profiles.map((profile) => (
              <li key={profile} className={styles.profileCard}>
                <p className={styles.profileText}>{highlightText(profile)}</p>
              </li>
            ))}
          </ul>
          <div className={styles.prose}>
            <p>{highlightText(c.interviews.profilesNote)}</p>
          </div>

          <h4 className={styles.blockTitle}>{c.interviews.scriptHeading}</h4>

          {/* The questions carry the research framing, so they get card weight. */}
          <div className={styles.scriptColumn}>
            <span className={styles.scriptLabel}>{c.interviews.questionsLabel}</span>
            <ul className={styles.questionGrid}>
              {c.interviews.questions.map((question) => (
                <li key={question} className={styles.questionCard}>
                  <span className={styles.questionMark} aria-hidden="true">
                    ?
                  </span>
                  <p className={styles.questionText}>{question}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.scriptColumn}>
            <span className={styles.scriptLabel}>{c.interviews.tasksLabel}</span>
            <ol className={styles.goals}>
              {c.interviews.tasks.map((task, index) => (
                <li key={task} className={styles.goal}>
                  <span className={styles.goalNumber}>{index + 1}</span>
                  <p className={styles.goalText}>{task}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.prose}>
            <p>{highlightText(c.interviews.methodNote)}</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.findings.heading}</h2>
          <h3 className={styles.subheading}>{c.findings.subheading}</h3>
          <div className={styles.prose}>
            <p>{c.findings.intro}</p>
          </div>

          <ul className={styles.painList}>
            {c.findings.pains.map((pain) => (
              <li key={pain.title} className={styles.painItem}>
                <strong className={styles.painTitle}>{pain.title}</strong>
                <p className={styles.painText}>{pain.text}</p>
              </li>
            ))}
          </ul>

          <h4 className={styles.blockTitle}>{c.findings.insightsHeading}</h4>
          <ol className={styles.goals}>
            {c.findings.insights.map((insight, index) => (
              <li key={insight.title} className={styles.goal}>
                <span className={styles.goalNumber}>{index + 1}</span>
                <div>
                  <strong className={styles.goalTitle}>{insight.title}</strong>
                  <p className={styles.goalText}>{insight.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.callout}>
            <span className={styles.calloutMark}>!</span>
            <div>
              <h3 className={styles.calloutTitle}>{highlightText(c.findings.vocabNote.title)}</h3>
              <p className={styles.calloutText}>{c.findings.vocabNote.text}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.wireframes.heading}</h2>
          <div className={styles.prose}>
            {c.wireframes.paragraphs.map((paragraph) => (
              <p key={paragraph}>{highlightText(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <StarLabel letter="R">{c.star.result}</StarLabel>
          <h2 className={styles.heading}>{c.validation.heading}</h2>
          <h3 className={styles.subheading}>{c.validation.subheading}</h3>
          <div className={styles.prose}>
            <p>{c.validation.intro}</p>
          </div>

          {/*
           * A real table so the three decisions can be compared column by
           * column. The repeated headers stay quiet; the weight goes on the
           * measured evidence, which is what carries each row.
           */}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">{c.validation.decisionLabel}</th>
                  <th scope="col">{c.validation.evidenceLabel}</th>
                  <th scope="col">{c.validation.businessLabel}</th>
                </tr>
              </thead>
              <tbody>
                {c.validation.table.map((row) => (
                  <tr key={row.decision}>
                    <th scope="row" className={styles.tableDecision}>
                      {row.decision}
                    </th>
                    <td className={styles.tableEvidence}>{row.evidence}</td>
                    <td className={styles.tableBusiness}>{row.business}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={styles.subheading}>{c.validation.metricsHeading}</h3>
          <div className={styles.metricsCard}>
            <ul className={styles.checkList}>
              {c.validation.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{c.finalDesign.heading}</h2>

          {c.finalDesign.features.map((item, index) => {
            const media = finalDesignMedia[index]

            return (
              <div key={item.title} className={styles.block}>
                <h4 className={styles.blockTitle}>{item.title}</h4>
                <div className={styles.prose}>
                  <p>{item.text}</p>
                </div>
                {media ? (
                  <div className={[styles.mediaFrame, media.frame].join(' ')}>
                    <img src={media.src} alt={item.media} />
                  </div>
                ) : (
                  <MediaPlaceholder label={item.media} ratio="wide" />
                )}
              </div>
            )
          })}

          <h3 className={styles.subheading}>{c.finalDesign.scopeHeading}</h3>
          <ul className={[styles.stats, styles.scopeGrid].join(' ')}>
            {c.finalDesign.scope.map((stat) => {
              // Counts keep the oversized metric treatment; named deliverables
              // sit in the same slot but read as a title, not a number.
              const isCount = /^[\d+%.,\s]+$/.test(stat.value)

              return (
                <li key={stat.value} className={styles.stat}>
                  <span
                    className={[styles.statValue, isCount ? '' : styles.statName].join(' ')}
                  >
                    {stat.value}
                  </span>
                  {stat.label && <span className={styles.statLabel}>{stat.label}</span>}
                </li>
              )
            })}
          </ul>
        </section>
      </Container>
    </article>
  )
}

export default CaseBettestPage
