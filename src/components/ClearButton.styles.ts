import { makeStyles } from '../styles/makeStyles'

export const useClearButtonStyles = makeStyles()((theme) => ({
  clearButton: {
    background: 'none',
    border: 'none',
    color: theme.colors.textQuaternary,
    cursor: 'pointer',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.25rem',
    transition: `all ${theme.transitions.fast} ease`,

    '&:hover': {
      color: theme.colors.textSecondary,
      backgroundColor: theme.colors.borderLight,
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },
}))
