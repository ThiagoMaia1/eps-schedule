import React from 'react'
import { type ScheduleData } from '../types/schedule'
import { formatMinutesToTime } from '../utils/scheduleTableUtils'
import TableLabelButton from './TableLabelButton'

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
  return (
    <div className="time-guide-column">
      <div className="calendar-header" />
      <div className="time-guide-content" style={{ height: calendarHeight }}>
        {timeMarkers.map((time, idx) => (
          <TableLabelButton
            key={idx}
            className="time-marker"
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
            {formatMinutesToTime(time)}
          </TableLabelButton>
        ))}
      </div>
    </div>
  )
}

export default React.memo(TimeGuideColumn)
