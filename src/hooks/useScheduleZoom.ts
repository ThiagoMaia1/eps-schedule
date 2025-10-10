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
    minZoom = 1,
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

  // Save zoom level to localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, pixelsPerMinute.toString())
  }, [pixelsPerMinute, storageKey])

  // Handle desktop zoom (Ctrl/Cmd + Mouse Wheel)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()

        setPixelsPerMinute((prev) => {
          const delta = e.deltaY > 0 ? -zoomStep : zoomStep
          const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + delta))
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
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && lastTouchDistance.current) {
        e.preventDefault()

        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )

        const delta = (distance - lastTouchDistance.current) * 0.02
        lastTouchDistance.current = distance

        setPixelsPerMinute((prev) => {
          const newZoom = Math.max(minZoom, Math.min(maxZoom, prev + delta))
          return newZoom
        })
      }
    }

    const handleTouchEnd = () => {
      lastTouchDistance.current = null
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
