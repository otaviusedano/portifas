import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { en } from './en'
import { pt } from './pt'
import type { Dictionary, Language } from './types'

const DICTIONARIES: Record<Language, Dictionary> = { en, pt }
const STORAGE_KEY = 'portfolio.language'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const readStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'pt') return stored

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Language) => setLangState(next), [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
