import { useEffect, useRef } from 'react'

const EASING = 0.12
const FRICTION = 0.94
const MIN_VELOCITY = 0.05
const WHEEL_IMPULSE = 0.55
const SETTLE_THRESHOLD = 0.5

/**
 * Enables click-and-drag (mouse/touch) and wheel horizontal scrolling on an
 * overflow-x container. A single render loop eases the visible position
 * toward a target scrollLeft, giving smooth motion while dragging and a
 * gentle momentum glide on release — it simply comes to rest wherever the
 * motion runs out, with no forced snapping to a card.
 *
 * Returns the ref to attach to the scrollable element and a `scrollByStep`
 * helper that eases the same target used by drag/wheel (a native
 * `scrollTo` would fight the render loop instead of moving it).
 */
const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrollByStepRef = useRef<(step: number) => void>(() => {})

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDragging = false
    let startX = 0
    let startScrollLeft = 0
    let lastX = 0
    let lastTime = 0
    let velocity = 0
    let target = el.scrollLeft
    let current = el.scrollLeft
    let frame = 0

    const maxScroll = () => el.scrollWidth - el.clientWidth
    const clamp = (value: number) => Math.min(Math.max(value, 0), maxScroll())

    const tick = () => {
      if (!isDragging && Math.abs(velocity) > MIN_VELOCITY) {
        target = clamp(target + velocity)
        velocity *= FRICTION
        if (target === 0 || target === maxScroll()) velocity = 0
      }

      current += (target - current) * EASING
      if (Math.abs(target - current) < SETTLE_THRESHOLD) current = target
      el.scrollLeft = current

      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    const onPointerDown = (event: PointerEvent) => {
      isDragging = true
      velocity = 0
      startX = event.pageX
      startScrollLeft = target
      lastX = event.pageX
      lastTime = performance.now()
      el.setPointerCapture(event.pointerId)
      el.style.cursor = 'grabbing'
      el.style.userSelect = 'none'
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return

      const now = performance.now()
      const dt = now - lastTime || 16

      target = clamp(startScrollLeft - (event.pageX - startX))
      velocity = ((lastX - event.pageX) / dt) * 16
      lastX = event.pageX
      lastTime = now
    }

    const stop = (event: PointerEvent) => {
      if (!isDragging) return
      isDragging = false
      el.releasePointerCapture(event.pointerId)
      el.style.cursor = 'grab'
      el.style.userSelect = ''
    }

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return

      event.preventDefault()
      target = clamp(target + event.deltaY)
      velocity = event.deltaY * WHEEL_IMPULSE
    }

    scrollByStepRef.current = (step: number) => {
      velocity = 0
      target = clamp(target + step)
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', stop)
    el.addEventListener('pointercancel', stop)
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', stop)
      el.removeEventListener('pointercancel', stop)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const scrollByStep = (step: number) => scrollByStepRef.current(step)

  return { ref, scrollByStep }
}

export default useDragScroll
