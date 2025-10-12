import { makeStyles } from '../styles/makeStyles'

interface SlideshowStylesProps {
  isDragging: boolean
}

export const useSlideshowStyles = makeStyles<SlideshowStylesProps>()(
  (theme, { isDragging }) => ({
    slideshow: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
      width: '100%',
    },

    slideshowContent: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4.5rem',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        padding: '0',
      },
    },

    slideshowSlides: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      touchAction: 'pan-y pinch-zoom',
      userSelect: 'none',
    },

    slideshowSlidesInner: {
      display: 'flex',
      width: '100%',
      transition: isDragging
        ? 'none'
        : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },

    slideshowSlide: {
      flex: '0 0 100%',
      width: '100%',
      minWidth: '100%',
    },

    slideActive: {},
    slidePrevious: {},
    slideNext: {},
    slidePrev: {},
    slideInRight: {},
    slideOutLeft: {},
    slideInLeft: {},
    slideOutRight: {},

    slideshowArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.95)',
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primaryBorder}`,
      fontSize: '2rem',
      padding: '0.5rem 0.75rem',
      cursor: 'pointer',
      zIndex: 10,
      transition: `all ${theme.transitions.fast} ease`,
      borderRadius: theme.borderRadius.lg,
      userSelect: 'none',
      fontWeight: theme.fontWeights.semibold,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
      minWidth: '44px',
      minHeight: '44px',

      '&:hover': {
        background: theme.colors.primaryLight,
        borderColor: theme.colors.primary,
        transform: 'translateY(-50%) scale(1.05)',
      },

      '&:active': {
        background: theme.colors.primaryBorder,
        transform: 'translateY(-50%) scale(0.95)',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'none',
      },
    },

    slideshowArrowLeft: {
      left: '0.5rem',
    },

    slideshowArrowRight: {
      right: '0.5rem',
    },

    slideshowDots: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5rem',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        gap: '0.375rem',
      },
    },

    slideshowDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: `2px solid ${theme.colors.primaryBorder}`,
      background: theme.colors.primaryLight,
      cursor: 'pointer',
      padding: 0,
      transition: `all ${theme.transitions.fast} ease`,

      '&:hover': {
        borderColor: theme.colors.primary,
        background: theme.colors.primaryBorder,
        transform: 'scale(1.15)',
      },
    },

    slideshowDotActive: {
      background: theme.colors.primary,
      borderColor: theme.colors.primary,
      width: '12px',
      height: '12px',
    },
  })
)
