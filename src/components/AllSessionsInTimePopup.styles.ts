import { makeStyles } from '../styles/makeStyles'

export const useAllSessionsInTimePopupStyles = makeStyles()((theme) => ({
  allSessionsPopupContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: '1rem',
    },
  },

  searchSection: {
    marginBottom: '0.5rem',
  },

  noSessionsMessage: {
    textAlign: 'center',
    padding: '2rem',
    color: theme.colors.textQuaternary,
  },

  sectionTitle: {
    margin: '0 0 1rem 0',
    fontSize: '1.125rem',
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.textSecondary,
    borderBottom: `2px solid ${theme.colors.borderPrimary}`,
    paddingBottom: '0.5rem',
  },

  generalEventsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },

  regularSessionsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },

  sessionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gridTemplateColumns: '1fr',
    },
  },

  sessionItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    borderRadius: '0.5rem',
    transition: `transform ${theme.transitions.fast} ease`,

    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },

  generalEventItem: {
    gridColumn: '1 / -1',
  },

  sessionLocationLabel: {
    fontSize: '0.875rem',
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.textTertiary,
    padding: '0.25rem 0.5rem',
    backgroundColor: theme.colors.borderLight,
    borderRadius: '0.375rem',
    display: 'inline-block',
    alignSelf: 'flex-start',
  },

  popupTitleWithCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },

  sessionCountBadge: {
    fontSize: '0.875rem',
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textQuaternary,
    padding: '0.25rem 0.75rem',
    backgroundColor: theme.colors.borderLight,
    borderRadius: theme.borderRadius.round,
  },
}))
