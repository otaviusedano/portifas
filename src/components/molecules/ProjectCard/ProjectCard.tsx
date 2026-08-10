import { Link } from 'react-router-dom'

import Tag from '@/components/atoms/Tag/Tag'
import type { Project } from '@/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, slug, category, description, year, tags, caseStudy } = project

  const card = (
    <article className={styles.card}>
      {project.image ? (
        <img src={project.image} alt={title} />
      ) :
        <div className={styles.thumb} aria-hidden="true">
          <span className={styles.title}>{slug}</span>
        </div>
      }

      <div className={styles.body}>
        <div className={styles.meta}>
          <Tag variant="accent">{category}</Tag>
          <span className={styles.year}>{year}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )

  if (!caseStudy) return card

  return (
    <Link to={caseStudy} className={styles.link} aria-label={title}>
      {card}
    </Link>
  )
}

export default ProjectCard
