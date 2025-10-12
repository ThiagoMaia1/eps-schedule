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
      margin: '0 0 8px 0',
      flexShrink: 0,
      fontSize: '1.75rem',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1.5rem',
        margin: '0 0 6px 0',
      },
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
