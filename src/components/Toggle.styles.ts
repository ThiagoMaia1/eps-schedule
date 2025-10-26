import { makeStyles } from '../styles/makeStyles'

export const useToggleStyles = makeStyles()((theme) => ({
  toggle: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: theme.colors.borderSecondary,
    border: 'none',
    cursor: 'pointer',
    transition: `background-color ${theme.transitions.fast} ease`,
    padding: 0,
    flexShrink: 0,

    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
    },

    '&:hover': {
      backgroundColor: '#9ca3af',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '52px',
      height: '28px',
      borderRadius: '14px',
    },
  },

  toggleChecked: {
    backgroundColor: theme.colors.primary,

    '&:hover': {
      backgroundColor: theme.colors.primaryHover,
    },
  },

  toggleDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: theme.colors.borderSecondary,
    },
  },

  toggleThumb: {
    position: 'absolute',
    left: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: `transform ${theme.transitions.fast} ease`,

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '24px',
      height: '24px',
    },
  },

  toggleThumbChecked: {
    transform: 'translateX(20px)',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      transform: 'translateX(24px)',
    },
  },
}))
