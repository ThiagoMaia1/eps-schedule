import { makeStyles } from '../styles/makeStyles'

interface SessionCardStylesProps {
  isSelected: boolean
  classificationColor?: {
    background: string
    border: string
  }
  isPanelOrQA: boolean
  shouldFade?: boolean
}

export const useSessionCardStyles = makeStyles<SessionCardStylesProps>()(
  (theme, { isSelected, classificationColor, shouldFade }) => ({
    sessionCard: {
      textWrap: 'balance',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.xs,
      padding: theme.spacing.md,
      borderRadius: 'inherit',
      border: `1px solid ${theme.colors.borderSecondary}`,
      background: classificationColor
        ? classificationColor.background
        : isSelected
          ? theme.colors.selected
          : theme.colors.bgWhite,
      borderColor: `${isSelected ? theme.colors.selectedBorder : classificationColor ? classificationColor.border : theme.colors.borderSecondary} !important`,
      boxShadow: isSelected ? theme.shadows.insetSelected : 'none',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      transition: `all ${theme.transitions.medium} ${theme.transitions.ease}`,
      position: 'relative',
      flexGrow: 1,
      cursor: 'pointer',
      filter: shouldFade ? 'invert(1) brightness(0.5) invert(1)' : 'none',

      '& > div': {
        maxWidth: '100%',
        wordWrap: 'break-word',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        padding: theme.spacing.sm,
        gap: '3px',
        borderRadius: theme.borderRadius.md,
      },
    },

    speakerRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.xs,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        gap: '3px',
      },
    },

    sessionTime: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.textPrimary,
      fontWeight: theme.fontWeights.semibold,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.sm,
      },
    },

    location: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.textTertiary,
      fontWeight: theme.fontWeights.medium,
    },

    speaker: {
      fontWeight: theme.fontWeights.bold,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      whiteSpace: 'pre',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.9rem',
      },
    },

    sessionTag: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      color: 'white',
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.semibold,
      borderRadius: theme.borderRadius.xxl,
      whiteSpace: 'nowrap',
      position: 'relative',
      zIndex: 10,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.xs,
        padding: '1px 6px',
      },
    },

    invitedGuestTag: {
      background: theme.colors.invitedGuestBg,
      boxShadow: `0 1px 3px ${theme.colors.shadowInvitedGuest}`,
    },

    panelDiscussionTag: {
      background: theme.colors.panelDiscussionBg,
      boxShadow: `0 1px 3px ${theme.colors.shadowPanelDiscussion}`,
    },

    moderatorTag: {
      background: theme.colors.moderatorBg,
      boxShadow: `0 1px 3px ${theme.colors.shadowPanelDiscussion}`,
    },

    cancelledTag: {
      background: '#dc2626',
      boxShadow: '0 1px 3px rgba(220, 38, 38, 0.3)',
    },

    movedTag: {
      background: '#ea580c',
      boxShadow: '0 1px 3px rgba(234, 88, 12, 0.3)',
      padding: '1px 5px',
      fontSize: theme.fontSizes.xs,
      pointerEvents: 'auto',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.65rem',
        padding: '1px 4px',
      },
    },

    track: {
      fontSize: theme.fontSizes.lg,
      color: theme.colors.textTertiary,
      fontWeight: theme.fontWeights.semibold,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.md,
      },
    },

    affiliation: {
      fontStyle: 'italic',
      fontSize: theme.fontSizes.lg,
      color: theme.colors.textSecondary,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.md,
      },
    },

    theme: {
      fontSize: theme.fontSizes.lg,
      color: theme.colors.textTertiary,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.md,
      },
    },
  })
)
