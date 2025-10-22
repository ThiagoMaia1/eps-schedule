import { makeStyles } from '../styles/makeStyles'

export const useAuthButtonStyles = makeStyles()((theme) => ({
  authButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    border: 'none',
    borderRadius: theme.borderRadius.md,
    fontSize: '0.95rem',
    fontWeight: theme.fontWeights.medium,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ${theme.transitions.ease}`,
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: theme.colors.primaryHover,
      transform: 'translateY(-1px)',
      boxShadow: theme.shadows.md,
    },

    '&:active': {
      transform: 'translateY(0)',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      padding: '0',
      gap: '0',
      justifyContent: 'center',
      boxShadow: theme.shadows.lg,
      zIndex: 1000,
      fontSize: '0',
    },
  },

  userButton: {
    backgroundColor: theme.colors.bgWhite,
    color: theme.colors.primary,
    border: `1px solid ${theme.colors.primary}`,

    '&:hover': {
      backgroundColor: theme.colors.primaryLight,
      transform: 'translateY(-1px)',
    },
  },

  userEmail: {
    maxWidth: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '0.95rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
  },

  signInText: {
    fontSize: '0.95rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '1.4rem',
    },
  },
}))
