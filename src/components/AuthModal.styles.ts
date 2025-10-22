import { makeStyles } from '../styles/makeStyles'

export const useAuthModalStyles = makeStyles()((theme) => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.backdropBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.modal,
    padding: '20px',
  },

  modal: {
    backgroundColor: theme.colors.bgWhite,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.xl,
    width: '100%',
    maxWidth: '450px',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  },

  modalHeader: {
    padding: '24px 24px 16px',
    borderBottom: `1px solid ${theme.colors.borderPrimary}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalTitle: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.textPrimary,
  },

  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: theme.colors.textQuaternary,
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.md,
    transition: `all ${theme.transitions.fast} ${theme.transitions.ease}`,

    '&:hover': {
      backgroundColor: theme.colors.bgGray,
      color: theme.colors.textPrimary,
    },
  },

  modalBody: {
    padding: '24px',
  },

  infoBox: {
    backgroundColor: theme.colors.primaryLight,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.borderRadius.md,
    padding: '16px',
    marginBottom: '24px',
  },

  infoText: {
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },

  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    borderBottom: `1px solid ${theme.colors.borderPrimary}`,
  },

  tab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textQuaternary,
    borderBottom: '2px solid transparent',
    transition: `all ${theme.transitions.fast} ${theme.transitions.ease}`,

    '&:hover': {
      color: theme.colors.textPrimary,
    },
  },

  tabActive: {
    color: theme.colors.primary,
    borderBottomColor: theme.colors.primary,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  label: {
    fontSize: '0.9rem',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textSecondary,
  },

  input: {
    padding: '12px',
    fontSize: '1rem',
    border: `1px solid ${theme.colors.borderSecondary}`,
    borderRadius: theme.borderRadius.md,
    transition: `all ${theme.transitions.fast} ${theme.transitions.ease}`,

    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
      boxShadow: `0 0 0 3px ${theme.colors.primaryLight}`,
    },

    '&:disabled': {
      backgroundColor: theme.colors.bgGray,
      cursor: 'not-allowed',
    },
  },

  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: theme.fontWeights.medium,
    border: 'none',
    borderRadius: theme.borderRadius.md,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ${theme.transitions.ease}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },

  primaryButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,

    '&:hover:not(:disabled)': {
      backgroundColor: theme.colors.primaryHover,
    },
  },

  googleButton: {
    backgroundColor: theme.colors.bgWhite,
    color: theme.colors.textPrimary,
    border: `1px solid ${theme.colors.borderSecondary}`,

    '&:hover:not(:disabled)': {
      backgroundColor: theme.colors.bgGray,
    },
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '16px 0',
    color: theme.colors.textQuaternary,
    fontSize: '0.9rem',

    '&::before, &::after': {
      content: '""',
      flex: 1,
      height: '1px',
      backgroundColor: theme.colors.borderPrimary,
    },
  },

  error: {
    padding: '12px',
    backgroundColor: theme.colors.errorBg,
    color: theme.colors.error,
    borderRadius: theme.borderRadius.md,
    fontSize: '0.9rem',
    border: `1px solid ${theme.colors.errorBorder}`,
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    textAlign: 'center',
  },

  userEmail: {
    fontSize: '1.1rem',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textPrimary,
    wordBreak: 'break-word',
  },

  logoutButton: {
    backgroundColor: theme.colors.error,
    color: theme.colors.textWhite,

    '&:hover:not(:disabled)': {
      backgroundColor: '#b91c1c',
    },
  },
}))
