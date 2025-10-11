import { makeStyles } from '../styles/makeStyles'

interface TableLabelButtonStylesProps {
  active: boolean
}

export const useTableLabelButtonStyles =
  makeStyles<TableLabelButtonStylesProps>()((theme, { active }) => ({
    tableLabelButton: {
      cursor: 'pointer',
      transition: `all ${theme.transitions.fast} ease`,
      border: 'none',
      font: 'inherit',
      width: '100%',
      fontFamily:
        'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',

      // Only apply these if not active (allow external styles to override)
      ...(!active && {
        background: theme.colors.bgLightGray,
        textAlign: 'left',
        color: theme.colors.textQuaternary,
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.bold,
      }),

      ...(active && {
        background: theme.colors.primary,
        color: 'white',
        textAlign: 'left',
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.bold,
      }),

      '&:hover': {
        color: active ? 'white' : theme.colors.primary,
        backgroundColor: active ? theme.colors.primaryHover : '#e0e7ff',
      },

      '&:active': {
        transform: 'scale(0.98)',
      },
    },
  }))
