import React from 'react'
import { Tooltip } from 'react-tooltip'
import type { ScheduleEntry } from '../types/schedule'

interface MovedBadgeProps {
  entry: ScheduleEntry
  className: string
}

const MovedBadge: React.FC<MovedBadgeProps> = ({ entry, className }) => {
  const { originalEventIfMoved } = entry

  if (!originalEventIfMoved) {
    return null
  }

  const tooltipId = `moved-badge-${entry.id}`
  const tooltipContent = `Originally: ${originalEventIfMoved.date}, ${originalEventIfMoved.startTime} - ${originalEventIfMoved.endTime}${
    originalEventIfMoved.location
      ? ` at ${originalEventIfMoved.location.hotel} - ${originalEventIfMoved.location.room}`
      : ''
  }`

  return (
    <>
      <span
        className={className}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
      >
        Moved
      </span>
      <Tooltip id={tooltipId} />
    </>
  )
}

export default MovedBadge
