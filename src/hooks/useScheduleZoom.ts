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
          // Calculate pinch center (midpoint between two fingers)
          const centerX =
            (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
          const centerY =
            (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top

          // Store the pinch center for this gesture
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

        const rect = scroller.getBoundingClientRect()

        // Calculate current pinch center
        const currentCenterX =
          (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
        const currentCenterY =
          (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top

        // Calculate new distance between fingers
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )

        // Calculate zoom ratio based on distance change
        const distanceRatio = distance / lastTouchDistance.current

        // Get the content position at the OLD pinch center (before any changes)
        const contentAtPinchY = scroller.scrollTop + lastPinchCenter.current.y

        setPixelsPerMinute((prev) => {
          // Calculate new zoom level
          const newZoom = Math.max(
            minZoom,
            Math.min(maxZoom, prev * distanceRatio)
          )
          const zoomRatio = newZoom / prev

          // Calculate where that content point will be after zoom
          const newContentY = contentAtPinchY * zoomRatio

          // Calculate how much to scroll to keep content at the current pinch center
          const newScrollTop = newContentY - currentCenterY

          // Apply the new scroll position
          requestAnimationFrame(() => {
            if (scroller) {
              scroller.scrollTop = newScrollTop
            }
          })

          return newZoom
        })

        // Update for next iteration
        lastTouchDistance.current = distance
        lastPinchCenter.current = { x: currentCenterX, y: currentCenterY }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      // Reset if no touches or less than 2 touches remain
      if (e.touches.length < 2) {
        lastTouchDistance.current = null
        lastPinchCenter.current = null
      }
    }

    const handleTouchCancel = () => {
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
      scroller.addEventListener('touchcancel', handleTouchCancel)

      return () => {
        scroller.removeEventListener('touchstart', handleTouchStart)
        scroller.removeEventListener('touchmove', handleTouchMove)
        scroller.removeEventListener('touchend', handleTouchEnd)
        scroller.removeEventListener('touchcancel', handleTouchCancel)
      }
    }
  }, [minZoom, maxZoom])

  return {
    pixelsPerMinute,
    scrollerRef,
  }
}
