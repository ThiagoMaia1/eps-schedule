import { createMakeAndWithStyles } from 'tss-react'
import { theme, type Theme } from './theme'

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme: () => theme as Theme,
})
