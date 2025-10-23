import { makeStyles } from '../styles/makeStyles'

interface GeneralEventCardStylesProps {
  isSpecialEvent: boolean
  isPopupMode: boolean
  pixelsPerMinute: number
  height: number
  isMoved?: boolean
  shouldFade?: boolean
}

export const useGeneralEventCardStyles =
  makeStyles<GeneralEventCardStylesProps>()((
    theme,
    { isSpecialEvent, isPopupMode, pixelsPerMinute, height, shouldFade }
  ) => {
    // Calculate scale factor based on zoom level and available height
    // Low zoom (2.5-3.5) = small scale, High zoom (7+) = full scale
    const zoomScale = Math.max(0.5, Math.min(1, (pixelsPerMinute - 2.5) / 4.5))

    // For very small heights, scale content even more aggressively
    const heightScale = height < 50 ? Math.max(0.4, height / 50) : 1
    const combinedScale = Math.min(zoomScale, heightScale)

    // Time is optional and only hides when space is really tight
    const showTime = height >= 40 || pixelsPerMinute >= 3

    return {
      generalEventBanner: {
        background: isSpecialEvent
          ? theme.colors.specialEventBg
          : theme.colors.generalEventBg,
        borderLeft: `${Math.max(3, 6 * combinedScale)}px solid ${isSpecialEvent ? theme.colors.specialEventBorder : theme.colors.generalEventBorder}`,
        padding: `${Math.max(4, 10 * combinedScale)}px ${Math.max(8, 16 * combinedScale)}px`,
        margin: 0,
        boxShadow: `4px 0px 8px rgba(0, 0, 0, 0.4)`,
        left: theme.dimensions.timeColWidth,
        overflow: 'visible',
        zIndex: theme.zIndex.generalEvent,
        filter: shouldFade ? 'invert(1) brightness(0.5) invert(1)' : 'none',
        ...(isPopupMode && {
          position: 'static',
          width: '100%',
          borderRadius: '0.5rem',
          margin: 0,
        }),
        '&:hover': {
          zIndex: theme.zIndex.generalEvent + 1,
        },
        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          left: theme.dimensions.timeColWidthMobile,
        },
      },

      generalEventContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: `${Math.max(4, 8 * combinedScale)}px`,
        height: '100%',
      },

      eventTimeAndLocation: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.lg,
        flexWrap: 'wrap',
      },

      eventTimeLabel: {
        display: showTime ? 'block' : 'none',
        fontSize: '0.75rem',
        color: theme.colors.textLight,
        fontWeight: theme.fontWeights.medium,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          display: pixelsPerMinute <= 3 ? 'none' : showTime ? 'block' : 'none',
          fontSize: `${Math.max(0.75, 0.85 * combinedScale)}rem`,
        },
      },

      eventLocationLabel: {
        fontSize: '0.75rem',
        color: theme.colors.textGreen,
        fontWeight: theme.fontWeights.semibold,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        paddingLeft: theme.spacing.md,
        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(0.75, 0.85 * combinedScale)}rem`,
          borderLeft:
            pixelsPerMinute <= 3
              ? 'none'
              : '2px solid rgba(255, 255, 255, 0.3)',
          paddingLeft: pixelsPerMinute <= 3 ? '0' : theme.spacing.md,
        },
      },

      generalEventTextContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
      },

      generalEventHierarchy: {
        display: 'flex',
        flexDirection: 'column',
        gap: `${Math.max(4, 8 * combinedScale)}px`,
        flex: isPopupMode ? '1' : '0 0 auto',
        minWidth: isPopupMode ? '100%' : 'fit-content',
        paddingLeft: isPopupMode
          ? '0'
          : `${Math.max(10, 20 * combinedScale)}px`,
        paddingRight: isPopupMode
          ? '0'
          : `${Math.max(20, 40 * combinedScale)}px`,

        '& mark': {
          backgroundColor: theme.colors.highlightYellow,
          color: '#1b5e20',
          padding: '2px 4px',
          borderRadius: '2px',
          fontWeight: theme.fontWeights.bold,
        },

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          paddingLeft: isPopupMode
            ? '0'
            : `${Math.max(5, 10 * combinedScale)}px`,
          paddingRight: isPopupMode
            ? '0'
            : `${Math.max(10, 20 * combinedScale)}px`,
        },
      },

      eventType: {
        fontSize: '1.25rem',
        fontWeight: theme.fontWeights.extrabold,
        color: theme.colors.textWhite,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        lineHeight: 1.2,
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
        marginBottom: '2px',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(1, 1.6 * combinedScale)}rem`,
        },
      },

      eventDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: `${Math.max(4, 8 * combinedScale)}px`,
        paddingLeft: `${Math.max(6, 12 * combinedScale)}px`,
        borderLeft: `${Math.max(2, 4 * combinedScale)}px solid rgba(255, 255, 255, 0.5)`,
      },

      eventTheme: {
        fontSize: `${Math.max(0.65, 1 * combinedScale)}rem`,
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.textGreen,
        letterSpacing: '0.5px',
        lineHeight: 1.3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(0.8, 1.1 * combinedScale)}rem`,
        },
      },

      eventSpeakers: {
        display: 'flex',
        flexDirection: 'column',
        gap: `${Math.max(3, 6 * combinedScale)}px`,
      },

      speakerItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
      },

      speakerName: {
        fontSize: `${Math.max(0.6, 0.9375 * combinedScale)}rem`,
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.textGreen,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        flexWrap: 'wrap',
        lineHeight: 1.4,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(0.75, 1 * combinedScale)}rem`,
        },
      },

      invitedBadge: {
        display: 'inline-block',
        backgroundColor: 'rgba(255, 193, 7, 0.95)',
        color: '#1b5e20',
        fontSize: `${Math.max(0.5, 0.6875 * combinedScale)}rem`,
        fontWeight: theme.fontWeights.bold,
        padding: `${Math.max(2, 3 * combinedScale)}px ${Math.max(4, 8 * combinedScale)}px`,
        borderRadius: theme.borderRadius.sm,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(0.6, 0.75 * combinedScale)}rem`,
        },
      },

      speakerAffiliation: {
        fontSize: `${Math.max(0.55, 0.8125 * combinedScale)}rem`,
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.textGreenLight,
        fontStyle: 'italic',
        paddingLeft: theme.spacing.xs,
        lineHeight: 1.3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: `${Math.max(0.65, 0.85 * combinedScale)}rem`,
        },
      },

      statusBadge: {
        display: 'inline-block',
        padding: `${Math.max(1, 2 * combinedScale)}px ${Math.max(4, 6 * combinedScale)}px`,
        borderRadius: theme.borderRadius.sm,
        fontSize: `${Math.max(0.55, 0.65 * combinedScale)}rem`,
        fontWeight: theme.fontWeights.bold,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap',
        marginLeft: theme.spacing.md,
        position: 'relative',
        zIndex: 100,
      },

      cancelledBadge: {
        backgroundColor: 'rgba(220, 38, 38, 0.95)',
        color: 'white',
        boxShadow: '0 2px 4px rgba(220, 38, 38, 0.3)',
      },

      movedBadge: {
        backgroundColor: 'rgba(234, 88, 12, 0.95)',
        color: 'white',
        boxShadow: '0 2px 4px rgba(234, 88, 12, 0.3)',
        cursor: 'help',
        pointerEvents: 'auto',
      },
    }
  })
