import { makeStyles } from '../styles/makeStyles'

export const useSearchInputStyles = makeStyles()((theme) => ({
  searchInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    height: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.625rem',
    },
  },

  searchInputLabel: {
    display: 'none',
    fontWeight: theme.fontWeights.semibold,
    fontSize: '0.6875rem',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.025em',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexShrink: 0,
      width: '60px',
      fontSize: theme.fontSizes.sm,
    },
  },

  searchInputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flex: 1,
    },
  },

  searchInputIcon: {
    position: 'absolute',
    left: '0.625rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    pointerEvents: 'none',
    fontSize: '0.875rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '20px',
      height: '20px',
      left: '0.875rem',
      fontSize: '1.125rem',
    },
  },

  searchInputField: {
    width: '100%',
    height: '100%',
    padding: '0.375rem 2rem 0.375rem 2rem',
    fontSize: '0.8125rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.375rem',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    outline: 'none',
    transition: `all ${theme.transitions.fast} ease`,

    '&::placeholder': {
      color: '#9ca3af',
    },

    '&:hover': {
      borderColor: '#d1d5db',
      backgroundColor: '#f9fafb',
    },

    '&:focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      backgroundColor: '#ffffff',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '0.75rem 2.75rem 0.75rem 2.75rem',
      fontSize: '1rem',
      borderRadius: '0.5rem',
    },
  },

  searchInputClear: {
    position: 'absolute',
    right: '0.625rem',
    top: '50%',
    transform: 'translateY(-50%)',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      right: '0.625rem',
    },
  },
}))
