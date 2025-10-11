import React from 'react'
import { useScheduleTableStyles } from './ScheduleTable.styles'

interface HourGridLineProps {
  timeMarkers: number[]
  minTime: number
  pixelsPerMinute: number
  skipFirstLine?: boolean
}

const HourGridLine: React.FC<HourGridLineProps> = ({
  timeMarkers,
  minTime,
  pixelsPerMinute,
  skipFirstLine = false,
}) => {
  const { classes } = useScheduleTableStyles({})

  return (
    <>
      {timeMarkers.map((time, idx) => {
        if (skipFirstLine && time - minTime === 0) return null

        return (
          <div
            key={`grid-${idx}`}
            className={classes.hourGridLine}
            style={{ top: (time - minTime) * pixelsPerMinute }}
          />
        )
      })}
    </>
  )
}

export default React.memo(HourGridLine)
