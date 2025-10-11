import { makeStyles } from '../styles/makeStyles'

interface GeneralEventCardStylesProps {
  isSpecialEvent: boolean
  isPopupMode: boolean
}

export const useGeneralEventCardStyles =
  makeStyles<GeneralEventCardStylesProps>()(
    (theme, { isSpecialEvent, isPopupMode }) => ({
      generalEventBanner: {
        background: isSpecialEvent
          ? theme.colors.specialEventBg
          : theme.colors.generalEventBg,
        borderLeft: `6px solid ${isSpecialEvent ? theme.colors.specialEventBorder : theme.colors.generalEventBorder}`,
        padding: '12px 20px',
        margin: 0,
        boxShadow: `4px 0px 8px rgba(0, 0, 0, 0.4)`,
        left: theme.dimensions.timeColWidth,
        overflow: 'visible',
        zIndex: theme.zIndex.generalEvent,
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
        gap: theme.spacing.md,
        height: '100%',
      },

      eventTimeAndLocation: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.lg,
        flexWrap: 'wrap',
      },

      eventTimeLabel: {
        fontSize: '12px',
        color: theme.colors.textLight,
        fontWeight: theme.fontWeights.medium,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      },

      eventLocationLabel: {
        fontSize: '12px',
        color: theme.colors.textGreen,
        fontWeight: theme.fontWeights.semibold,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        paddingLeft: theme.spacing.md,
        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
      },

      generalEventTextContainer: {
        flex: 1,
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
      },

      generalEventHierarchy: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        position: 'sticky',
        left: '180px',
        width: 'fit-content',
        maxWidth: '100%',
        paddingLeft: theme.spacing.xxxl,
        paddingRight: '40px',

        '& mark': {
          backgroundColor: theme.colors.highlightYellow,
          color: '#1b5e20',
          padding: '2px 4px',
          borderRadius: '2px',
          fontWeight: theme.fontWeights.bold,
        },

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          left: '80px',
          maxWidth: 'calc(100vw - 80px)',
          wordWrap: 'break-word',
        },
      },

      eventType: {
        fontSize: '24px',
        fontWeight: theme.fontWeights.extrabold,
        color: theme.colors.textWhite,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        lineHeight: 1.2,
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
        marginBottom: '2px',

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: '18px',
        },
      },

      eventDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        paddingLeft: theme.spacing.xl,
        borderLeft: '4px solid rgba(255, 255, 255, 0.5)',
      },

      eventTheme: {
        fontSize: '18px',
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.textGreen,
        letterSpacing: '0.5px',
        lineHeight: 1.3,

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: '14px',
        },
      },

      eventSpeakers: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
      },

      speakerItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
      },

      speakerName: {
        fontSize: '16px',
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.textGreen,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        flexWrap: 'wrap',
        lineHeight: 1.4,

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: '14px',
        },
      },

      invitedBadge: {
        display: 'inline-block',
        backgroundColor: 'rgba(255, 193, 7, 0.95)',
        color: '#1b5e20',
        fontSize: '11px',
        fontWeight: theme.fontWeights.bold,
        padding: '3px 8px',
        borderRadius: theme.borderRadius.sm,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      },

      speakerAffiliation: {
        fontSize: '13px',
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.textGreenLight,
        fontStyle: 'italic',
        paddingLeft: theme.spacing.xs,
        lineHeight: 1.3,

        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          fontSize: '12px',
        },
      },
    })
  )
