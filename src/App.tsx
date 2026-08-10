import { Routes, Route } from 'react-router-dom'

import RootLayout from '@/components/organisms/RootLayout/RootLayout'
import HomePage from '@/pages/HomePage'
import ProjectsPage from '@/pages/ProjectsPage'
import CaseFpassPage from '@/pages/CaseFpassPage'
import CaseDesignSystemPage from '@/pages/CaseDesignSystemPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

const App = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/fpass" element={<CaseFpassPage />} />
      <Route path="/projects/design-system-ai" element={<CaseDesignSystemPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)

export default App
