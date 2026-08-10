import Container from '@/components/atoms/Container/Container'
import Reveal from '@/components/atoms/Reveal/Reveal'
import SectionHeading from '@/components/molecules/SectionHeading/SectionHeading'
import ProjectCard from '@/components/molecules/ProjectCard/ProjectCard'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProjects } from '@/i18n/useContent'
import { PROJECTS_SECTION_ID } from '@/utils/routes'
import styles from './ProjectsSection.module.css'

interface ProjectsSectionProps {
  limit?: number
  /** Falls back to the translated "My projects" heading. */
  title?: string
  description?: string
}

const ProjectsSection = ({
  limit,
  title,
  description = '',
}: ProjectsSectionProps) => {
  const { t } = useLanguage()
  const projects = useProjects()
  const list = limit ? projects.slice(0, limit) : projects

  return (
    <section id={PROJECTS_SECTION_ID} className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={title ?? t.projects.all}
          description={description}
        />

        <div className={styles.grid}>
          {list.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
