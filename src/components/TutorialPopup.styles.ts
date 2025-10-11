import { makeStyles } from '../styles/makeStyles'

export const useTutorialPopupStyles = makeStyles()((theme) => ({
  tutorialPopup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1rem 0',
  },

  tutorialSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',

    '& img': {
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      borderRadius: theme.borderRadius.lg,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        maxWidth: '100%',
      },
    },
  },

  tutorialDescription: {
    textAlign: 'center',
    padding: '0 1rem',
    marginBottom: '0.5rem',

    '& h3': {
      margin: '0 0 0.25rem 0',
      fontSize: '1.1rem',
      color: '#333',
      fontWeight: theme.fontWeights.semibold,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1rem',
      },
    },

    '& p': {
      margin: 0,
      fontSize: '0.875rem',
      color: '#666',
      lineHeight: 1.5,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.8rem',
      },
    },
  },

  tutorialFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #e0e0e0',
    marginTop: '1rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch',
    },
  },

  tutorialCheckbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.95rem',
    color: '#666',
    userSelect: 'none',

    '& input[type="checkbox"]': {
      cursor: 'pointer',
      width: '18px',
      height: '18px',
    },

    '& span': {
      cursor: 'pointer',
    },
  },

  tutorialButton: {
    padding: '0.75rem 2rem',
    background: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: theme.borderRadius.lg,
    fontSize: '1rem',
    fontWeight: theme.fontWeights.semibold,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ease`,
    boxShadow: '0 2px 4px rgba(55, 48, 163, 0.2)',

    '&:hover': {
      background: theme.colors.primaryHover,
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(55, 48, 163, 0.3)',
    },

    '&:active': {
      background: '#2e1065',
      transform: 'translateY(0)',
      boxShadow: '0 1px 2px rgba(55, 48, 163, 0.2)',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '100%',
    },
  },
}))

