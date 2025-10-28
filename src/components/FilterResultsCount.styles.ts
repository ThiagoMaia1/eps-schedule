import { makeStyles } from '../styles/makeStyles'

export const useFilterResultsCountStyles = makeStyles()((theme) => ({
  totalsInfo: {
    marginTop: '12px',
    padding: '14px 16px',
    background: theme.colors.bgWhite,
    border: `1px solid ${theme.colors.borderPrimary}`,
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.fontSizes.base,

    '@media (max-width: 640px)': {
      padding: '16px 18px',
    },
  },

  totalsComparison: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',

    '@media (max-width: 640px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
    },
  },

  totalsMetric: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,

    '@media (max-width: 640px)': {
      gap: theme.spacing.sm,
    },
  },

  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,

    '@media (max-width: 640px)': {
      gap: theme.spacing.sm,
    },
  },

  metricIcon: {
    fontSize: '1.3em',
    width: '1.3em',
    height: '1.3em',
    color: theme.colors.primary,
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 640px)': {
      fontSize: '1.4em',
      width: '1.4em',
      height: '1.4em',
    },
  },

  metricLabel: {
    color: theme.colors.textQuaternary,
    fontWeight: theme.fontWeights.semibold,
    fontSize: '0.95em',

    '@media (max-width: 640px)': {
      fontSize: '1em',
    },
  },

  metricValues: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },

  metricBar: {
    height: '8px',
    background: theme.colors.borderPrimary,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    position: 'relative',

    '@media (max-width: 640px)': {
      display: 'none',
    },
  },

  metricBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #4f46e5 0%, #3730a3 100%)',
    borderRadius: theme.borderRadius.sm,
    transition: `width ${theme.transitions.medium} ease`,
    minWidth: '2px',
  },

  metricNumbers: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '5px',
    fontSize: '1.05em',

    '@media (max-width: 640px)': {
      fontSize: '1.15em',
    },
  },

  metricShowing: {
    color: theme.colors.textQuaternary,
    fontWeight: theme.fontWeights.semibold,
    fontSize: '0.85em',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',

    '@media (max-width: 640px)': {
      fontSize: '0.9em',
    },
  },

  metricFiltered: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: '1.2em',

    '@media (max-width: 640px)': {
      fontSize: '1.3em',
    },
  },

  metricSeparator: {
    color: '#9ca3af',
    fontWeight: theme.fontWeights.medium,
  },

  metricTotal: {
    color: theme.colors.textQuaternary,
    fontWeight: theme.fontWeights.semibold,
  },

  totalsSimple: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.spacing.lg,
    justifyContent: 'center',
  },

  totalsValue: {
    color: '#1f2937',
    fontWeight: theme.fontWeights.semibold,
  },

  totalsSeparator: {
    color: theme.colors.borderSecondary,
    fontWeight: theme.fontWeights.semibold,
  },
}))
