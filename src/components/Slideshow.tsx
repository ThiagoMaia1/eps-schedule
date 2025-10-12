import React, { useState, useEffect, useCallback } from 'react'
import { useSlideshowStyles } from './Slideshow.styles'

interface SlideshowProps {
  children: React.ReactNode[]
  onAllSlidesVisited?: (visited: boolean) => void
  onNextSlideCallback?: (goToNext: () => void) => void
}

const Slideshow: React.FC<SlideshowProps> = ({
  children,
  onAllSlidesVisited,
  onNextSlideCallback,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visitedSlides, setVisitedSlides] = useState<Set<number>>(new Set([0]))
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  const { classes, cx } = useSlideshowStyles({ isDragging })
  const totalSlides = React.Children.count(children)

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return
      setCurrentSlide(index)
    },
    [currentSlide]
  )

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
  }, [totalSlides])

  // Track visited slides and notify parent when all have been visited
  useEffect(() => {
    const updatedVisitedSlides = new Set(visitedSlides).add(currentSlide)
    setVisitedSlides(updatedVisitedSlides)

    if (onAllSlidesVisited) {
      const allVisited = updatedVisitedSlides.size === totalSlides
      onAllSlidesVisited(allVisited)
    }
  }, [currentSlide, totalSlides, onAllSlidesVisited, visitedSlides])

  // Provide the goToNext function to the parent
  useEffect(() => {
    if (onNextSlideCallback) {
      onNextSlideCallback(goToNext)
    }
  }, [onNextSlideCallback, goToNext])

  // Handle touch start
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
    setDragOffset(0)
  }

  // Handle touch move
  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = e.targetTouches[0].clientX
    const diff = currentTouch - touchStart

    setTouchEnd(currentTouch)
    setDragOffset(diff)
  }

  // Handle touch end
  const onTouchEnd = () => {
    setIsDragging(false)

    if (!touchStart || !touchEnd) {
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Only swipe if not at the edges
    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      goToNext()
    } else if (isRightSwipe && currentSlide > 0) {
      goToPrevious()
    }

    // Reset drag offset after determining swipe direction
    setDragOffset(0)
  }

  if (totalSlides === 0) {
    return null
  }

  // Calculate the effective transform, preventing drag beyond boundaries
  const getTransform = () => {
    // Calculate what the slide position would be with the current drag
    // We need to estimate the container width for clamping
    // Since we're using percentage-based positioning, we need to be careful
    // A simple approach: clamp dragOffset based on current position
    let effectiveDragOffset = dragOffset

    // At first slide, don't allow positive drag (dragging right)
    if (currentSlide === 0 && dragOffset > 0) {
      effectiveDragOffset = dragOffset * 0.3 // rubber band effect
    }

    // At last slide, don't allow negative drag (dragging left)
    if (currentSlide === totalSlides - 1 && dragOffset < 0) {
      effectiveDragOffset = dragOffset * 0.3 // rubber band effect
    }

    return `translateX(calc(-${currentSlide * 100}% + ${effectiveDragOffset}px))`
  }

  return (
    <div className={classes.slideshow}>
      <div className={classes.slideshowContent}>
        <button
          className={cx(classes.slideshowArrow, classes.slideshowArrowLeft)}
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div
          className={classes.slideshowSlides}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={classes.slideshowSlidesInner}
            style={{
              transform: getTransform(),
            }}
          >
            {React.Children.map(children, (child, index) => (
              <div className={classes.slideshowSlide} key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>

        <button
          className={cx(classes.slideshowArrow, classes.slideshowArrowRight)}
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className={classes.slideshowDots}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cx(
              classes.slideshowDot,
              index === currentSlide && classes.slideshowDotActive
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Slideshow)
