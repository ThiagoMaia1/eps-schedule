import React from 'react'
import { useDayContainerStyles } from './DayContainer.styles'

interface DayContainerProps {
  dayTitle: string
  children: React.ReactNode
}

const DayContainer: React.FC<DayContainerProps> = ({ dayTitle, children }) => {
  const { classes } = useDayContainerStyles()

  return (
    <div className={classes.dayContainer}>
      <h2 className={classes.dayHeader}>{dayTitle}</h2>
      <div className={classes.calendarWrapper}>{children}</div>
    </div>
  )
}

export default DayContainer
