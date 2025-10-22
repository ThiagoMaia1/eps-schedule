import { makeStyles } from '../styles/makeStyles'

interface DayContainerStylesProps {
  isCollapsed?: boolean
}

export const useDayContainerStyles = makeStyles<DayContainerStylesProps>()(
  (theme, { isCollapsed }) => ({
    dayContainer: {
      display: 'block',
      position: 'relative',
      minWidth: 'max-content',
    },

    dayHeader: {
      margin: 0,
      padding: '18px 12px 12px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      position: 'sticky',
      top: 0,
      left: 0,
      background: theme.colors.bgWhite,
      zIndex: theme.zIndex.dayHeader,
      boxShadow: isCollapsed ? '0 1px 0 0 #e5e7eb' : '0 2px 0 0 #e5e7eb',
      borderBottom: isCollapsed ? '1px solid #e5e7eb !important' : 'none',
      fontSize: '1.5rem',
      fontWeight: theme.fontWeights.bold,
      color: '#1f2937',
      width: 'calc(100vw - 64px)',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',

      '&:hover': {
        background: '#f9fafb',
      },

      '&:focus': {
        outline: '2px solid #3b82f6',
        outlineOffset: '-2px',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        fontSize: '1.25rem',
        padding: '12px 8px 8px 8px',
        width: 'calc(100vw - 26px)',
        gap: '8px',
        top: '-1px',
        paddingBottom: '9px',
      },
    },

    collapseIcon: {
      color: '#6b7280',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      flexShrink: 0,
      position: 'sticky',
      transition: 'transform 0.2s ease',

      '& svg': {
        display: 'block',
        width: '100%',
        height: '100%',
      },

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        width: '14px',
        height: '14px',
      },
    },

    calendarWrapper: {
      position: isCollapsed ? 'sticky' : 'relative',
      left: isCollapsed ? 0 : undefined,
      minWidth: 'max-content',
      background: '#f8f8f8',
    },
  })
)
