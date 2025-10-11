import { makeStyles } from '../styles/makeStyles'

interface ImportExportSessionsStylesProps {
  messageType?: 'success' | 'error' | 'warning'
}

export const useImportExportSessionsStyles = makeStyles<ImportExportSessionsStylesProps>()(
  (theme, { messageType }) => ({
    importExportSection: {
      marginBottom: '1.5rem',
    },

    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: theme.fontWeights.semibold,
      color: '#1f2937',
      margin: '0 0 0.5rem 0',
    },

    sectionDescription: {
      color: theme.colors.textQuaternary,
      fontSize: theme.fontSizes.base,
      margin: '0 0 1rem 0',
      lineHeight: 1.5,
    },

    importExportBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.625rem 1.25rem',
      fontSize: '0.9375rem',
      fontWeight: theme.fontWeights.semibold,
      border: '1px solid',
      borderRadius: theme.borderRadius.lg,
      cursor: 'pointer',
      transition: `all ${theme.transitions.fast} ease`,
      whiteSpace: 'nowrap',

      '& .btn-icon': {
        fontSize: '1.125rem',
      },
    },

    exportBtn: {
      background: theme.colors.primary,
      color: theme.colors.textWhite,
      borderColor: theme.colors.primary,

      '&:hover:not(:disabled)': {
        background: theme.colors.primaryHover,
        borderColor: theme.colors.primaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },

      '&:disabled': {
        background: theme.colors.borderPrimary,
        color: '#9ca3af',
        borderColor: theme.colors.borderSecondary,
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },

    importBtn: {
      background: theme.colors.primary,
      color: theme.colors.textWhite,
      borderColor: theme.colors.primary,
      width: '100%',
      justifyContent: 'center',

      '&:hover:not(:disabled)': {
        background: theme.colors.primaryHover,
        borderColor: theme.colors.primaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },

      '&:disabled': {
        background: theme.colors.borderPrimary,
        color: '#9ca3af',
        borderColor: theme.colors.borderSecondary,
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },

    exportOutput: {
      marginTop: '1rem',
    },

    outputHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },

    outputLabel: {
      fontWeight: theme.fontWeights.semibold,
      fontSize: '0.875rem',
      color: theme.colors.textSecondary,
    },

    copyOutputBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      padding: '0.375rem 0.75rem',
      fontSize: '0.8125rem',
      fontWeight: theme.fontWeights.medium,
      background: theme.colors.borderLight,
      color: theme.colors.textSecondary,
      border: `1px solid ${theme.colors.borderSecondary}`,
      borderRadius: theme.borderRadius.md,
      cursor: 'pointer',
      transition: `all ${theme.transitions.fast}`,

      '&:hover': {
        background: theme.colors.borderPrimary,
        borderColor: '#9ca3af',
      },
    },

    exportTextarea: {
      width: '100%',
      padding: '0.75rem',
      fontFamily: "'Monaco', 'Menlo', 'Courier New', monospace",
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      border: `1px solid ${theme.colors.borderSecondary}`,
      borderRadius: theme.borderRadius.md,
      background: '#f9fafb',
      color: '#1f2937',
      resize: 'vertical',

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors.primary,
        background: theme.colors.bgWhite,
      },
    },

    inputLabel: {
      display: 'block',
      fontWeight: theme.fontWeights.semibold,
      fontSize: '0.875rem',
      color: theme.colors.textSecondary,
      marginBottom: '0.5rem',
    },

    importTextarea: {
      width: '100%',
      padding: '0.75rem',
      fontFamily: "'Monaco', 'Menlo', 'Courier New', monospace",
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      border: `1px solid ${theme.colors.borderSecondary}`,
      borderRadius: theme.borderRadius.md,
      background: theme.colors.bgWhite,
      color: '#1f2937',
      marginBottom: '1rem',
      resize: 'vertical',
      transition: `border-color ${theme.transitions.fast}`,

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors.primary,
        boxShadow: '0 0 0 3px rgba(55, 48, 163, 0.1)',
      },

      '&::placeholder': {
        color: '#9ca3af',
      },
    },

    importExportDivider: {
      height: '1px',
      background: theme.colors.borderPrimary,
      margin: '2rem 0',
    },

    importExportMessage: {
      padding: '0.875rem 1rem',
      borderRadius: theme.borderRadius.lg,
      fontSize: theme.fontSizes.base,
      fontWeight: theme.fontWeights.medium,
      marginBottom: '1.5rem',
      animation: 'slideDown 0.3s ease-out',

      '@keyframes slideDown': {
        from: {
          opacity: 0,
          transform: 'translateY(-8px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },

      ...(messageType === 'success' && {
        backgroundColor: '#d4edda',
        color: '#155724',
        border: '1px solid #c3e6cb',
      }),

      ...(messageType === 'error' && {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb',
      }),

      ...(messageType === 'warning' && {
        backgroundColor: '#fff3cd',
        color: '#856404',
        border: '1px solid #ffeeba',
      }),
    },

    importExportTooltipContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },

    tooltipTitle: {
      fontWeight: theme.fontWeights.semibold,
      fontSize: '1rem',
      marginBottom: '0.25rem',
    },

    tooltipSection: {
      fontSize: '0.875rem',
      lineHeight: 1.5,

      '& strong': {
        fontWeight: theme.fontWeights.semibold,
      },
    },
  })
)

