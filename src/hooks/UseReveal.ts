import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface UseRevealReturn<T extends HTMLElement> {
  ref: RefObject<T>
  isVisible: boolean
}

/**
 * Reveals an element once it scrolls into view. Uses IntersectionObserver and
 * disconnects after the first intersection so the reveal only plays once.
 * Generic over the element so list items can reveal without a wrapper div.
 */
const useReveal = <T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): UseRevealReturn<T> => {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default useReveal
