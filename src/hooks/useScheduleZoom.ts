import { useState, useEffect, useRef } from 'react'

interface UseScheduleZoomOptions {
  minZoom?: number
  maxZoom?: number
  defaultZoom?: number
  zoomStep?: number
  storageKey?: string
}

export const useScheduleZoom = (options: UseScheduleZoomOptions = {}) => {
  const {
    minZoom = 2.5,
    maxZoom = 10,
    defaultZoom = 4,
    zoomStep = 0.5,
    storageKey = 'scheduleZoom',
  } = options

  const [pixelsPerMinute, setPixelsPerMinute] = useState<number>(() => {
    const savedZoom = localStorage.getItem(storageKey)
    return savedZoom ? parseFloat(savedZoom) : defaultZoom
  })

  const scrollerRef = useRef<HTMLDivElement>(null)
  const lastTouchDistance = useRef<number | null>(null)
  const lastPinchCenter = useRef<{ x: number; y: number } | null>(null)

  // Save zoom level to localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, pixelsPerMinute.toString())
  }, [pixelsPerMinute, storageKey])

  // Handle desktop zoom (Ctrl/Cmd + Mouse Wheel)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()

        const scroller = scrollerRef.current
        if (!scroller) return

        // Get mouse position relative to the scroller
        const rect = scroller.getBoundingClientRect()
        const mouseY = e.clientY - rect.top

        // Calculate the content position under the mouse before zoom
        const scrollTop = scroller.scrollTop
        const contentY = scrollTop + mouseY

        setPixelsPerMinute((prev) => {
          const delta = e.deltaY > 0 ? -zoomStep : zoomStep
          const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + delta))

          // Calculate new scroll position to keep content under mouse
          // contentY / prev = content position in time units
          // contentY * (newZoom / prev) = new pixel position of that content
          const zoomRatio = newZoom / prev
          const newScrollTop = contentY * zoomRatio - mouseY

          // Apply the new scroll position after state updates
          requestAnimationFrame(() => {
            if (scroller) {
              scroller.scrollTop = newScrollTop
            }
          })

          return newZoom
        })
      }
    }

    const scroller = scrollerRef.current
    if (scroller) {
      scroller.addEventListener('wheel', handleWheel, { passive: false })
      return () => scroller.removeEventListener('wheel', handleWheel)
    }
  }, [minZoom, maxZoom, zoomStep])

  // Handle mobile pinch-to-zoom
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        lastTouchDistance.current = distance

        const scroller = scrollerRef.current
        if (scroller) {
          const rect = scroller.getBoundingClientRect()
          // Calculate pinch center relative to scroller
          const centerX =
            (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
          const centerY =
            (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
          lastPinchCenter.current = { x: centerX, y: centerY }
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (
        e.touches.length === 2 &&
        lastTouchDistance.current &&
        lastPinchCenter.current
      ) {
        e.preventDefault()

        const scroller = scrollerRef.current
        if (!scroller) return

        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )

        const delta = (distance - lastTouchDistance.current) * 0.02
        lastTouchDistance.current = distance

        // Update pinch center position
        const rect = scroller.getBoundingClientRect()
        const centerX =
          (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
        const centerY =
          (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top

        // Calculate the content position under the pinch center before zoom
        const scrollTop = scroller.scrollTop
        const contentY = scrollTop + lastPinchCenter.current.y

        setPixelsPerMinute((prev) => {
          const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + delta))

          // Calculate new scroll position to keep content under pinch center
          const zoomRatio = newZoom / prev
          const newScrollTop = contentY * zoomRatio - lastPinchCenter.current!.y

          // Apply the new scroll position
          requestAnimationFrame(() => {
            if (scroller) {
              scroller.scrollTop = newScrollTop
            }
          })

          return newZoom
        })

        // Update the pinch center for next iteration
        lastPinchCenter.current = { x: centerX, y: centerY }
      }
    }

    const handleTouchEnd = () => {
      lastTouchDistance.current = null
      lastPinchCenter.current = null
    }

    const scroller = scrollerRef.current
    if (scroller) {
      scroller.addEventListener('touchstart', handleTouchStart)
      scroller.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })
      scroller.addEventListener('touchend', handleTouchEnd)

      return () => {
        scroller.removeEventListener('touchstart', handleTouchStart)
        scroller.removeEventListener('touchmove', handleTouchMove)
        scroller.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [minZoom, maxZoom])

  return {
    pixelsPerMinute,
    scrollerRef,
  }
}
