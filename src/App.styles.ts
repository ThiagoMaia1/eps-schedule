import { makeStyles } from './styles/makeStyles'

export const useAppStyles = makeStyles()((theme) => ({
  appContainer: {
    maxHeight: '99vh',
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    margin: 0,
    padding: '16px',
    paddingBottom: 0,
    lineHeight: 1.35,
    display: 'flex',
    flexDirection: 'column',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '12px',
      paddingBottom: 0,
      maxHeight: 'initial',
    },

    '& h1': {
      margin: 0,
      flexShrink: 0,
      fontSize: '1.75rem',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      flex: 1,
      minWidth: 0,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1.1rem',
      },
    },
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    flexShrink: 0,
    flexWrap: 'wrap',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: '8px',
      marginBottom: '6px',
      alignItems: 'flex-start',
    },
  },

  authButtonContainer: {
    marginLeft: 'auto',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginLeft: 0,
    },
  },

  officialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.colors.primary,
    fontSize: '1.25rem',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    opacity: 0.8,

    '&:hover': {
      opacity: 1,
      transform: 'translateY(-1px)',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '1.1rem',
    },
  },

  loading: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '1.1em',
  },

  error: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '1.1em',
    color: theme.colors.error,
    background: theme.colors.errorBg,
    border: `1px solid ${theme.colors.errorBorder}`,
    borderRadius: theme.borderRadius.lg,
  },
}))
