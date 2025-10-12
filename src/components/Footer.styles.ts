import { makeStyles } from '../styles/makeStyles'

export const useFooterStyles = makeStyles()((theme) => ({
  footer: {
    backgroundColor: '#000',
    color: theme.colors.textWhite,
    padding: theme.spacing.xxl,
    marginTop: theme.spacing.xxl,
    flexShrink: 0,
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: theme.spacing.xl,
    },
  },

  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xxl,
  },

  disclaimerSection: {
    textAlign: 'center',
    borderBottom: '1px solid #333',
    paddingBottom: theme.spacing.xxl,
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingBottom: theme.spacing.xl,
    },
  },

  disclaimer: {
    fontSize: '0.875rem',
    color: '#ffd700',
    margin: '0 0 6px 0',
    lineHeight: 1.6,

    '& strong': {
      color: '#ffed4e',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '0.8125rem',
    },
  },

  sourceLink: {
    color: '#4a9eff',
    textDecoration: 'underline',
    transition: `color ${theme.transitions.fast} ease`,

    '&:hover': {
      color: '#6bb6ff',
    },
  },

  lastUpdated: {
    fontSize: '0.8125rem',
    color: '#aaa',
    margin: '6px 0 0 0',
    fontStyle: 'italic',
  },

  developerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xl,
  },

  developedBy: {
    fontSize: '0.875rem',
    color: '#ccc',
  },

  footerLinks: {
    display: 'flex',
    gap: theme.spacing.xxl,
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: theme.spacing.xl,
    },
  },

  footerLink: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    color: theme.colors.textWhite,
    textDecoration: 'none',
    transition: `color ${theme.transitions.fast} ease`,

    '&:hover': {
      color: '#4a9eff',
    },

    '& span': {
      fontSize: '0.875rem',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'none',
      },
    },
  },

  feedbackText: {
    fontSize: '0.875rem',
    color: '#ccc',
    margin: '6px 0 0 0',
    textAlign: 'center',
  },

  emailLink: {
    color: '#4a9eff',
    textDecoration: 'none',
    transition: `color ${theme.transitions.fast} ease`,

    '&:hover': {
      color: '#6bb6ff',
      textDecoration: 'underline',
    },
  },
}))
