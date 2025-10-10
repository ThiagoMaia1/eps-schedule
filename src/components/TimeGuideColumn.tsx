import React, { useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
            {formatMinutesToTime(time, isMobile)}
          </TableLabelButton>
        ))}
      </div>
    </div>
  )
}

export default React.memo(TimeGuideColumn)
