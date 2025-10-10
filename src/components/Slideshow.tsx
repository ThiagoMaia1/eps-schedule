import React, { useState, useEffect } from 'react'
import './Slideshow.css'

interface SlideshowProps {
  children: React.ReactNode[]
}

const Slideshow: React.FC<SlideshowProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const totalSlides = React.Children.count(children)

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

  if (totalSlides === 0) {
    return null
  }

  return (
    <div className="slideshow">
      <div className="slideshow-content">
        <button
          className="slideshow-arrow slideshow-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="slideshow-slides">
          {React.Children.map(children, (child, index) => {
            const isActive = index === currentSlide
            const isPrevious = index === previousSlide
            const shouldRender = isActive || isPrevious

            return (
              <div
                className={`slideshow-slide ${
                  isActive ? 'active' : ''
                } ${isPrevious ? 'previous' : ''} ${
                  isActive ? `slide-in-${direction}` : ''
                } ${isPrevious ? `slide-out-${direction}` : ''}`}
                key={index}
                style={{ display: shouldRender ? 'block' : 'none' }}
              >
                {child}
              </div>
            )
          })}
        </div>

        <button
          className="slideshow-arrow slideshow-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className="slideshow-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`slideshow-dot ${
              index === currentSlide ? 'active' : ''
            }`}
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
