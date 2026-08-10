import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently in view.
 * Returns null while disabled, so pages without those sections
 * (case studies, for instance) show no active nav link at all.
 */
const useScrollSpy = (ids: string[], enabled: boolean) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActiveId(null)
      return
    }

    const update = () => {
      // A section counts as current once its top passes the upper third
      // of the viewport — the same point the eye reads as "this section".
      const line = window.innerHeight * 0.35
      let current: string | null = null

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      setActiveId(atBottom ? (ids[ids.length - 1] ?? null) : (current ?? ids[0]))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, enabled])

  return activeId
}

export default useScrollSpy
