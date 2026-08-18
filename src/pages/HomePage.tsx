import HeroSection from '@/components/organisms/HeroSection/HeroSection'
import { useLanguage } from '@/i18n/LanguageContext'
import ClientsStrip from '@/components/organisms/ClientsStrip/ClientsStrip'
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection'
import AboutSection from '@/components/organisms/AboutSection/AboutSection'
import TestimonialsSection from '@/components/organisms/TestimonialsSection/TestimonialsSection'

/** Only the two leading cases are featured here; /projects lists them all. */
const FeaturedProjects = () => {
  const { t } = useLanguage()
  return <ProjectsSection limit={2} title={t.projects.featured} />
}

const HomePage = () => (
  <>
    <HeroSection />
    <ClientsStrip />
    <FeaturedProjects />
    <AboutSection />
    <TestimonialsSection />
  </>
)

export default HomePage
