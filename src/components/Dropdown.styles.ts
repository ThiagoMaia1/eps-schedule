import { makeStyles } from '../styles/makeStyles'

export const useDropdownStyles = makeStyles()((theme) => ({
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.625rem',
    },
  },

  dropdownLabel: {
    fontWeight: theme.fontWeights.semibold,
    fontSize: '0.875rem',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.025em',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flexShrink: 0,
      width: '60px',
      fontSize: theme.fontSizes.sm,
    },
  },

  dropdownWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      flex: 1,
    },
  },
}))
