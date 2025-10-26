import { makeStyles } from '../styles/makeStyles'

export const useUnselectConfirmationPopupStyles = makeStyles()((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xl,
  },

  message: {
    fontSize: theme.fontSizes.xxl,
    color: theme.colors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
  },

  sessionPreview: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.bgLightGray,

    // Make the preview non-interactive
    pointerEvents: 'none',
    cursor: 'default',
  },

  buttonGroup: {
    display: 'flex',
    gap: theme.spacing.lg,
    justifyContent: 'flex-end',
  },

  cancelButton: {
    padding: '0.625rem 1.25rem',
    fontSize: '0.9375rem',
    fontWeight: theme.fontWeights.semibold,
    background: theme.colors.bgWhite,
    color: theme.colors.textSecondary,
    border: `1px solid ${theme.colors.borderSecondary}`,
    borderRadius: theme.borderRadius.lg,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ease`,

    '&:hover': {
      background: theme.colors.borderLight,
      borderColor: '#9ca3af',
      transform: 'translateY(-1px)',
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  },

  unselectButton: {
    padding: '0.625rem 1.25rem',
    fontSize: '0.9375rem',
    fontWeight: theme.fontWeights.semibold,
    background: theme.colors.error,
    color: theme.colors.textWhite,
    border: `1px solid ${theme.colors.error}`,
    borderRadius: theme.borderRadius.lg,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ease`,

    '&:hover': {
      background: '#b91c1c',
      borderColor: '#b91c1c',
      transform: 'translateY(-1px)',
      boxShadow: `0 4px 6px -1px ${theme.colors.shadowError}`,
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  },
}))
