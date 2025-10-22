import React from 'react'
import { useDayContainerStyles } from './DayContainer.styles'

interface DayContainerProps {
  dayTitle: string
  children: React.ReactNode
  isCollapsed?: boolean
  onToggleCollapse?: () => void
}

const DayContainer: React.FC<DayContainerProps> = ({
  dayTitle,
  children,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const { classes } = useDayContainerStyles({ isCollapsed })

  return (
    <div className={classes.dayContainer}>
      <button
        className={classes.dayHeader}
        onClick={onToggleCollapse}
        aria-expanded={!isCollapsed}
        aria-label={isCollapsed ? `Expand ${dayTitle}` : `Collapse ${dayTitle}`}
      >
        <span className={classes.collapseIcon}>
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          )}
        </span>
        {dayTitle}
      </button>
      {!isCollapsed && (
        <div className={classes.calendarWrapper}>{children}</div>
      )}
    </div>
  )
}

export default DayContainer
