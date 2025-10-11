import { makeStyles } from '../styles/makeStyles'

export const useTrackCardStyles = makeStyles()((theme) => ({
  shiftModeratorBlock: {
    background: theme.colors.bgWhite,
    border: `1px solid ${theme.colors.borderGray}`,
    borderRadius: theme.borderRadius.xl,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: theme.zIndex.moderatorBlock,

    '&:has([data-session-wrapper]:hover)': {
      overflow: 'visible',
      zIndex: theme.zIndex.moderatorBlock + 1,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: theme.colors.moderatorAccent,
      pointerEvents: 'none',
      zIndex: theme.zIndex.background,
      height: '100%',
      borderTopRightRadius: theme.borderRadius.lg,
      borderBottomRightRadius: theme.borderRadius.lg,
    },
  },

  trackHeader: {
    background: theme.colors.bgWhite,
    padding: '6px 8px',
    borderRadius: '9px 9px 2px 2px',
    pointerEvents: 'none',
    position: 'relative',
    zIndex: theme.zIndex.background,
  },

  trackHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },

  trackText: {
    flex: 1,
    minWidth: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '13px',
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
    lineHeight: 1.3,
  },

  trackName: {
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
  },

  trackSubtheme: {
    fontWeight: theme.fontWeights.normal,
    color: '#333',
  },

  trackInfoIcon: {
    color: theme.colors.moderatorAccent,
    fontSize: '18px',
    flexShrink: 0,
    cursor: 'pointer',
    transition: `all ${theme.transitions.fast} ease`,
    pointerEvents: 'auto',

    '&:hover': {
      color: theme.colors.moderatorAccentHover,
      transform: 'scale(1.1)',
    },
  },

  moderatorTooltipContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    maxWidth: '100%',
  },

  tooltipTrackTitle: {
    fontSize: '13px',
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.medium,
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    marginBottom: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
  },

  tooltipLabel: {
    fontSize: '11px',
    color: '#999',
    fontWeight: theme.fontWeights.medium,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },

  tooltipModeratorName: {
    fontSize: '14px',
    color: theme.colors.moderatorAccent,
    fontWeight: theme.fontWeights.semibold,
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  },

  tooltipModeratorAffiliation: {
    fontSize: '12px',
    color: '#ccc',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  },
}))
