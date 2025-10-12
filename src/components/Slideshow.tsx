import React, { useState, useEffect } from 'react'
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
  const [previousSlide, setPreviousSlide] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [visitedSlides, setVisitedSlides] = useState<Set<number>>(new Set([0]))
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const { classes, cx } = useSlideshowStyles()
  const totalSlides = React.Children.count(children)

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50

  // Clear previous slide after animation completes
  useEffect(() => {
    if (previousSlide !== null) {
      const timer = setTimeout(() => {
        setPreviousSlide(null)
      }, 400) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [previousSlide, currentSlide])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return

    setPreviousSlide(currentSlide)
    if (index > currentSlide) {
      setDirection('right')
    } else if (index < currentSlide) {
      setDirection('left')
    }
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setPreviousSlide(currentSlide)
    setDirection('left')
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToNext = () => {
    setPreviousSlide(currentSlide)
    setDirection('right')
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // Track visited slides and notify parent when all have been visited
  useEffect(() => {
    const updatedVisitedSlides = new Set(visitedSlides).add(currentSlide)
    setVisitedSlides(updatedVisitedSlides)

    if (onAllSlidesVisited) {
      const allVisited = updatedVisitedSlides.size === totalSlides
      onAllSlidesVisited(allVisited)
    }
  }, [currentSlide, totalSlides, onAllSlidesVisited])

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
  }

  // Handle touch move
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // Handle touch end
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  if (totalSlides === 0) {
    return null
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
          {React.Children.map(children, (child, index) => {
            const isActive = index === currentSlide
            const isPrevious = index === previousSlide
            const shouldRender = isActive || isPrevious

            return (
              <div
                className={cx(
                  classes.slideshowSlide,
                  isActive && classes.slideActive,
                  isPrevious && classes.slidePrevious,
                  isActive && direction === 'right' && classes.slideInRight,
                  isPrevious && direction === 'right' && classes.slideOutLeft,
                  isActive && direction === 'left' && classes.slideInLeft,
                  isPrevious && direction === 'left' && classes.slideOutRight
                )}
                key={index}
                style={{ display: shouldRender ? 'block' : 'none' }}
              >
                {child}
              </div>
            )
          })}
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
