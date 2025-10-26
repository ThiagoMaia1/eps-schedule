import { makeStyles } from '../styles/makeStyles'

interface FiltersStylesProps {
  isPanelCollapsed: boolean
}

export const useFiltersStyles = makeStyles<FiltersStylesProps>()(
  (theme, { isPanelCollapsed }) => ({
    summary: {
      background: theme.colors.bgGray,
      border: `1px solid ${theme.colors.borderPrimary}`,
      padding: `${theme.spacing.xl} 14px`,
      borderRadius: theme.borderRadius.lg,
      flexShrink: 0,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        padding: theme.spacing.lg,
      },
    },

    filterToggleRow: {
      display: 'none',
      gap: theme.spacing.md,
      alignItems: 'center',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'flex',
      },
    },

    filterToggle: {
      display: 'none',
      flex: 1,
      padding: theme.spacing.lg,
      background: theme.colors.primary,
      color: 'white',
      border: 'none',
      borderRadius: theme.borderRadius.md,
      fontSize: '0.95em',
      fontWeight: theme.fontWeights.semibold,
      cursor: 'pointer',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.sm,
      flexShrink: 1,

      '&:hover': {
        background: theme.colors.primaryHover,
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'flex',
      },
    },

    quickViewToggle: {
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      flexShrink: 0,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'flex',
      },
    },

    quickViewLabel: {
      fontSize: theme.fontSizes.xs,
      color: theme.colors.textQuaternary,
      fontWeight: theme.fontWeights.medium,
      whiteSpace: 'nowrap',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.8rem',
      },
    },

    filterToggleText: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },

    filterBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '20px',
      height: '20px',
      padding: '0 6px',
      background: 'white',
      color: theme.colors.primary,
      borderRadius: theme.borderRadius.round,
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.bold,
      lineHeight: 1,
    },

    filterContent: {
      transition: `max-height ${theme.transitions.medium} ${theme.transitions.easeOut}, opacity ${theme.transitions.medium} ${theme.transitions.easeOut}`,
      overflow: 'hidden',
      maxHeight: isPanelCollapsed ? '0' : 'none',
      opacity: isPanelCollapsed ? '0' : '1',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        maxHeight: isPanelCollapsed ? '0' : '2000px',
      },
    },

    controlsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.md,
    },

    controls: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing.lg,
      alignItems: 'center',
      margin: 0,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        gap: theme.spacing.md,
      },
    },

    controlsSpacer: {
      flexGrow: 1,
      minWidth: '20px',

      [`@media (max-width: ${theme.breakpoints.tablet})`]: {
        display: 'none',
      },
    },

    filterRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '1rem',
      margin: '0 0 1rem 0',
      alignItems: 'stretch',

      '&:has(> .dropdown-container:only-child)': {
        gridTemplateColumns: '1fr',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        gridTemplateColumns: '1fr',
        gap: '0.75rem',
        marginBottom: '1rem',
      },
    },

    pills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },

    btn: {
      display: 'inline-block',
      background: theme.colors.primaryLight,
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primaryBorder}`,
      borderRadius: theme.borderRadius.round,
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      fontSize: theme.fontSizes.base,
      cursor: 'pointer',
      userSelect: 'none',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1.05rem',
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      },
    },

    btnActive: {
      background: theme.colors.primary,
      color: theme.colors.textWhite,
      borderColor: theme.colors.primary,
    },

    clearAllBtn: {
      background: theme.colors.borderLight,
      color: theme.colors.textTertiary,
      borderColor: theme.colors.borderSecondary,
      fontWeight: theme.fontWeights.semibold,

      '&:hover': {
        background: theme.colors.borderPrimary,
        color: theme.colors.textPrimary,
        borderColor: theme.colors.borderPrimary,
      },
    },

    transferBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',

      '& .btn-icon': {
        fontSize: '1.1em',
      },
    },

    selectedHint: {
      color: theme.colors.textQuaternary,
      fontSize: theme.fontSizes.md,
      fontStyle: 'italic',
      marginLeft: theme.spacing.md,
    },

    expandPill: {
      display: 'inline-block',
      background: theme.colors.borderLight,
      color: theme.colors.textQuaternary,
      border: `1px solid ${theme.colors.borderSecondary}`,
      borderRadius: theme.borderRadius.round,
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      fontSize: theme.fontSizes.base,
      fontWeight: theme.fontWeights.medium,
      cursor: 'pointer',
      userSelect: 'none',

      '&:hover': {
        background: theme.colors.borderPrimary,
        color: theme.colors.textTertiary,
        borderColor: '#9ca3af',
      },
    },

    legend: {
      marginTop: theme.spacing.md,
      fontSize: theme.fontSizes.base,
      color: theme.colors.textTertiary,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'none',
      },
    },

    onlySelectedContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },

    infoIconButton: {
      display: 'flex',
      padding: theme.spacing.xs,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: theme.colors.textQuaternary,
      fontSize: '1.2em',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `color ${theme.transitions.fast}`,

      '&:hover': {
        color: theme.colors.primary,
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1.4em',
        padding: theme.spacing.sm,
      },
    },

    legendTooltipBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'transparent',
      zIndex: 1001,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        background: theme.colors.backdropBg,
      },
    },

    legendTooltip: {
      position: 'fixed',
      background: 'white',
      border: `1px solid ${theme.colors.borderPrimary}`,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      width: '340px',
      maxWidth: 'calc(100vw - 32px)',
      zIndex: 1002,
      boxShadow: `0 4px 12px ${theme.colors.shadowMedium}`,
      fontSize: theme.fontSizes.base,
      color: theme.colors.textTertiary,
      lineHeight: 1.5,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: theme.spacing.xxl,
        width: '340px',
      },
    },
  })
)
