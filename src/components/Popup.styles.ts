import { makeStyles } from '../styles/makeStyles'

export const usePopupStyles = makeStyles()((theme) => ({
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.modal,
    padding: '1rem',
    animation: 'fadeIn 0.2s ease',

    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },

    '@media (max-width: 640px)': {
      padding: '0.5rem',
    },
  },

  popupContent: {
    background: 'white',
    borderRadius: '0.75rem',
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    animation: 'slideUp 0.3s ease',

    '@keyframes slideUp': {
      from: {
        transform: 'translateY(20px)',
        opacity: 0,
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },

    '@media (max-width: 640px)': {
      maxHeight: '95vh',
      borderRadius: '0.5rem',
    },
  },

  popupHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: `1px solid ${theme.colors.borderPrimary}`,

    '@media (max-width: 640px)': {
      padding: '1rem',
    },
  },

  popupTitle: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: theme.fontWeights.semibold,
    color: '#111827',

    '@media (max-width: 640px)': {
      fontSize: '1.25rem',
    },
  },

  popupCloseButton: {
    background: 'none',
    border: 'none',
    color: theme.colors.textQuaternary,
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    transition: `all ${theme.transitions.fast} ease`,
    marginLeft: 'auto',

    '&:hover': {
      color: theme.colors.textSecondary,
      backgroundColor: theme.colors.borderLight,
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  popupBody: {
    padding: '1.5rem',
    overflowY: 'auto',
    flex: 1,

    '&::-webkit-scrollbar': {
      width: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: theme.colors.borderLight,
      borderRadius: '4px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: theme.colors.borderSecondary,
      borderRadius: '4px',

      '&:hover': {
        background: '#9ca3af',
      },
    },

    '@media (max-width: 640px)': {
      padding: '1rem',
    },
  },
}))
