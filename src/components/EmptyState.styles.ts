import { makeStyles } from '../styles/makeStyles'

export const useEmptyStateStyles = makeStyles()((theme) => ({
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    textAlign: 'center',
    background: '#f9fafb',
    borderRadius: theme.borderRadius.xl,
    marginTop: theme.spacing.lg,
    border: '2px dashed #d1d5db',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '40px 20px',
    },
  },

  emptyStateIcon: {
    fontSize: '4rem',
    marginBottom: theme.spacing.xxl,
    opacity: 0.7,

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '3rem',
    },
  },

  emptyStateTitle: {
    fontSize: '1.5rem',
    fontWeight: theme.fontWeights.semibold,
    color: '#1f2937',
    margin: '0 0 12px 0',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '1.25rem',
    },
  },

  emptyStateMessage: {
    fontSize: '1rem',
    color: theme.colors.textQuaternary,
    maxWidth: '500px',
    lineHeight: 1.6,
    margin: 0,

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '0.9rem',
      maxWidth: '100%',
      wordWrap: 'break-word',
      textWrap: 'wrap',
    },
  },
}))
