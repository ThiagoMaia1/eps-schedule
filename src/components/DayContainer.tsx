import React from 'react'
import './DayContainer.css'

interface DayContainerProps {
  dayTitle: string
  children: React.ReactNode
}

const DayContainer: React.FC<DayContainerProps> = ({ dayTitle, children }) => {
  return (
    <div className="day-container">
      <h2 className="day-header">{dayTitle}</h2>
      <div className="calendar-wrapper">{children}</div>
    </div>
  )
}

export default DayContainer
