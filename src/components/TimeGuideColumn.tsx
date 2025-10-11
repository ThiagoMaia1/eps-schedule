import React from 'react'
import { type ScheduleData } from '../types/schedule'
import { formatMinutesToTime } from '../utils/scheduleTableUtils'
import { useScheduleTableStyles } from './ScheduleTable.styles'
import { useIsMobile } from '../hooks/useIsMobile'

interface TimeGuideColumnProps {
  timeMarkers: number[]
  minTime: number
  pixelsPerMinute: number
  calendarHeight: number
  onTimeMarkerClick: (
    dayData: ScheduleData,
    time: string,
    timeMinutes: number
  ) => void
  dayData: ScheduleData
}

const TimeGuideColumn: React.FC<TimeGuideColumnProps> = ({
  timeMarkers,
  minTime,
  pixelsPerMinute,
  calendarHeight,
  onTimeMarkerClick,
  dayData,
}) => {
  const { classes, cx } = useScheduleTableStyles({})
  const isMobile = useIsMobile()

  return (
    <div className={classes.timeGuideColumn}>
      <div className={cx(classes.calendarHeader, classes.timeGuideHeader)} />
      <div
        className={classes.timeGuideContent}
        style={{ height: calendarHeight }}
      >
        {timeMarkers.map((time, idx) => (
          <button
            key={idx}
            className={classes.timeMarker}
            style={{
              top: (time - minTime) * pixelsPerMinute,
              height: 60 * pixelsPerMinute,
            }}
            onClick={() =>
              onTimeMarkerClick(dayData, formatMinutesToTime(time), time)
            }
            title="View all sessions at this time"
            aria-label={`View all sessions at ${formatMinutesToTime(time)}`}
          >
            {formatMinutesToTime(time, isMobile)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default React.memo(TimeGuideColumn)
