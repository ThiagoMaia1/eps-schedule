import { makeStyles } from '../styles/makeStyles'

export const useDayContainerStyles = makeStyles()((theme) => ({
  dayContainer: {
    display: 'block',
    position: 'relative',
    minWidth: 'max-content',
  },

  dayHeader: {
    margin: 0,
    padding: '18px 12px 12px 12px',
    display: 'block',
    position: 'sticky',
    top: 0,
    left: 0,
    background: theme.colors.bgWhite,
    zIndex: theme.zIndex.dayHeader,
    boxShadow: '0 2px 0 0 #e5e7eb',
    fontSize: '1.5rem',
    fontWeight: theme.fontWeights.bold,
    color: '#1f2937',
    width: 'calc(100vw - 50px)',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '1.25rem',
      padding: '12px 8px 8px 8px',
      width: 'calc(100vw - 26px)',
    },
  },

  calendarWrapper: {
    position: 'relative',
    minWidth: 'max-content',
    background: '#f8f8f8',
  },
}))

