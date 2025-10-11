import { makeStyles } from '../styles/makeStyles'

export const useFooterStyles = makeStyles()((theme) => ({
  footer: {
    backgroundColor: '#000',
    color: theme.colors.textWhite,
    padding: theme.spacing.xxxxl,
    marginTop: theme.spacing.xxxxl,
    flexShrink: 0,
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: theme.spacing.xxl,
    },
  },

  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xxxxl,
  },

  disclaimerSection: {
    textAlign: 'center',
    borderBottom: '1px solid #333',
    paddingBottom: theme.spacing.xxxl,
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingBottom: theme.spacing.xxl,
    },
  },

  disclaimer: {
    fontSize: '14px',
    color: '#ffd700',
    margin: '0 0 8px 0',
    lineHeight: 1.6,

    '& strong': {
      color: '#ffed4e',
    },

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '13px',
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
    fontSize: '13px',
    color: '#aaa',
    margin: '8px 0 0 0',
    fontStyle: 'italic',
  },

  developerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.xxl,
  },

  developedBy: {
    fontSize: '14px',
    color: '#ccc',
  },

  footerLinks: {
    display: 'flex',
    gap: theme.spacing.xxxxl,
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: theme.spacing.xxl,
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
      fontSize: '14px',

      [`@media (max-width: ${theme.breakpoints.mobile})`]: {
        display: 'none',
      },
    },
  },

  feedbackText: {
    fontSize: '14px',
    color: '#ccc',
    margin: '8px 0 0 0',
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
