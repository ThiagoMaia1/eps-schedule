import { makeStyles } from '../styles/makeStyles'

interface ScheduleTableStylesProps {
  active?: boolean
}

export const useScheduleTableStyles = makeStyles<ScheduleTableStylesProps>()(
  (theme, { active } = {}) => ({
    scroller: {
      maxHeight: 'calc(100vh - 140px)',
      overflowX: 'auto',
      overflowY: 'auto',
      border: `1px solid ${theme.colors.borderPrimary}`,
      borderRadius: theme.borderRadius.xl,
      marginTop: theme.spacing.lg,
      marginBottom: 0,
      whiteSpace: 'nowrap',
      position: 'relative',
      flex: 1,
      overscrollBehavior: 'contain',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollPaddingLeft: theme.dimensions.timeColWidthMobile,
        minHeight: 'calc(100vh - 140px)',
      },
    },

    calendarContainer: {
      display: 'flex',
      position: 'relative',
    },

    timeGuideColumn: {
      width: theme.dimensions.timeColWidth,
      minWidth: theme.dimensions.timeColWidth,
      flexShrink: 0,
      position: 'sticky',
      left: 0,
      zIndex: theme.zIndex.timeColumn,
      background: theme.colors.bgLightGray,
      boxShadow: theme.shadows.card,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        width: theme.dimensions.timeColWidthMobile,
        minWidth: theme.dimensions.timeColWidthMobile,
      },
    },

    calendarHeader: {
      marginBottom: theme.spacing.md,
      position: 'sticky',
      top: '64px',
      background: active ? theme.colors.primary : theme.colors.bgWhite,
      color: active ? 'white' : theme.colors.textQuaternary,
      boxShadow: '0 1px 0 0 #e5e7eb',
      border: 'none',
      borderRight: `1px solid ${theme.colors.borderPrimary}`,
      padding: '12px 10px',
      textAlign: 'left' as const,
      whiteSpace: 'normal',
      zIndex: theme.zIndex.header,
      fontSize: theme.fontSizes.md,
      fontWeight: theme.fontWeights.bold,
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      width: '100%',
      fontFamily: 'inherit',

      '&:hover': {
        color: active ? 'white' : theme.colors.primary,
        background: active ? theme.colors.primaryHover : '#e0e7ff',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: theme.fontSizes.md,
        padding: '8px 6px',
        top: '45px',
        height: '36px',
      },
    },

    timeGuideHeader: {
      background: theme.colors.bgLightGray,
      zIndex: theme.zIndex.timeHeader,
    },

    timeGuideContent: {
      position: 'relative',
    },

    timeMarker: {
      position: 'absolute' as const,
      left: 0,
      right: 0,
      width: '100%',
      fontFamily: 'inherit',
      fontSize: theme.fontSizes.md,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.textQuaternary,
      whiteSpace: 'nowrap',
      background: theme.colors.bgLightGray,
      border: 'none',
      borderTop: `1px solid ${theme.colors.borderPrimary}`,
      borderRight: `1px solid ${theme.colors.borderPrimary}`,
      padding: '4px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center' as const,
      cursor: 'pointer',
      transition: 'all 0.2s ease',

      '&:first-child': {
        marginTop: 'none',
      },

      '&:hover': {
        color: theme.colors.primary,
        background: '#e0e7ff',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.6rem',
        padding: '2px 1px',
        lineHeight: 1.2,
      },
    },

    locationColumn: {
      width: theme.dimensions.colWidth,
      minWidth: theme.dimensions.colWidth,
      maxWidth: theme.dimensions.colWidth,
      flexShrink: 0,
      background: theme.colors.bgWhite,

      '&:last-child': {
        borderRight: `1px solid ${theme.colors.borderPrimary}`,
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        width: theme.dimensions.colWidthMobile,
        minWidth: theme.dimensions.colWidthMobile,
        maxWidth: theme.dimensions.colWidthMobile,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      },
    },

    linearColumn: {
      width: theme.dimensions.linearColWidth,
      minWidth: theme.dimensions.linearColWidth,
      maxWidth: theme.dimensions.linearColWidth,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        width: `min(320px, calc(100vw - ${theme.dimensions.timeColWidthMobile} - 40px))`,
        minWidth: `min(320px, calc(100vw - ${theme.dimensions.timeColWidthMobile} - 40px))`,
        maxWidth: `min(320px, calc(100vw - ${theme.dimensions.timeColWidthMobile} - 40px))`,
        scrollSnapAlign: 'start',
      },
    },

    sessionsContainer: {
      position: 'relative',
      overflow: 'visible',
    },

    hourGridLine: {
      position: 'absolute',
      left: 0,
      right: 0,
      borderTop: `1px solid ${theme.colors.borderSecondary}`,
      pointerEvents: 'none',
      zIndex: theme.zIndex.background,
    },

    sessionWrapper: {
      borderRadius: theme.borderRadius.xl,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      zIndex: theme.zIndex.session,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      pointerEvents: 'auto',

      '&:hover': {
        overflow: 'visible',
        zIndex: theme.zIndex.sessionHover,
        boxShadow: theme.shadows.xl,
      },

      '&:not(.general-event-session-wrapper):hover': {
        height: 'max-content !important',
      },
    },

    linearSession: {
      borderRadius: theme.borderRadius.lg,

      '&:hover': {
        borderRadius: theme.borderRadius.lg,
      },
    },

    hotelChangeWarning: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.error,
      fontWeight: theme.fontWeights.bold,
      background: theme.colors.errorBg,
      padding: '8px 12px',
      borderRadius: theme.borderRadius.md,
      textAlign: 'center',
      border: `2px solid ${theme.colors.errorBorder}`,
      boxShadow: `0 2px 4px ${theme.colors.shadowError}`,
      zIndex: theme.zIndex.session,
      margin: '8px 0',
    },

    venueChangeWarning: {
      fontSize: '0.8em',
      color: theme.colors.error,
      fontWeight: theme.fontWeights.bold,
      background: theme.colors.errorBg,
      padding: '6px 10px',
      borderRadius: theme.borderRadius.md,
      textAlign: 'center',
      border: `2px solid ${theme.colors.errorBorder}`,
      boxShadow: `0 2px 4px ${theme.colors.shadowError}`,
      width: '100%',
      boxSizing: 'border-box',
    },

    emptySelectedRow: {
      backgroundColor: theme.colors.bgEmptyRow,
    },

    emptySelectedCell: {
      padding: '20px 20px !important',
      background: theme.colors.bgEmptyCell,
      borderBottom: `1px solid ${theme.colors.errorLight} !important`,
      borderTop: `1px solid ${theme.colors.errorDark} !important`,
      textAlign: 'center',
      overflow: 'visible',
      position: 'relative',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        padding: '12px 10px !important',
      },
    },

    emptySelectedContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },

    emptySelectedText: {
      fontSize: '1rem',
      fontWeight: theme.fontWeights.medium,

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '0.9rem',
      },
    },
  })
)
