import React from 'react'
import { type ScheduleData } from '../types/schedule'
import SessionCard from './SessionCard'
import TimeGuideColumn from './TimeGuideColumn'
import DayContainer from './DayContainer'
import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'
import { useScheduleTableStyles } from './ScheduleTable.styles'

interface LinearScheduleViewProps {
  dayData: ScheduleData
  allSessions: SessionWithLocationExtended[]
  minTime: number
  maxTime: number
  timeMarkers: number[]
  pixelsPerMinute: number
  calendarHeight: number
  selectedSessions: Set<string>
  onToggleSelection: (sessionId: string) => void
  searchText: string
  onTimeMarkerClick: (
    dayData: ScheduleData,
    time: string,
    timeMinutes: number
  ) => void
  calculateSessionLayout: (
    session: SessionWithLocationExtended,
    allSessions: SessionWithLocationExtended[]
  ) => { left: string; width: string }
}

const LinearScheduleView: React.FC<LinearScheduleViewProps> = ({
  dayData,
  allSessions,
  minTime,
  timeMarkers,
  pixelsPerMinute,
  calendarHeight,
  selectedSessions,
  onToggleSelection,
  searchText,
  onTimeMarkerClick,
  calculateSessionLayout,
}) => {
  const { classes, cx } = useScheduleTableStyles({})

  return (
    <DayContainer dayTitle={dayData.day}>
      <div className={classes.calendarContainer}>
        {/* Time guide column */}
        <TimeGuideColumn
          timeMarkers={timeMarkers}
          minTime={minTime}
          pixelsPerMinute={pixelsPerMinute}
          calendarHeight={calendarHeight}
          onTimeMarkerClick={onTimeMarkerClick}
          dayData={dayData}
        />

        {/* Single timeline column for all sessions */}
        <div className={cx(classes.locationColumn, classes.linearColumn)}>
          <div className={classes.calendarHeader}>Selected Sessions</div>
          <div
            className={classes.sessionsContainer}
            style={{ height: calendarHeight }}
          >
            {/* Hour grid lines */}
            {timeMarkers.map((time, idx) => (
              <div
                key={`grid-${idx}`}
                className={classes.hourGridLine}
                style={{ top: (time - minTime) * pixelsPerMinute }}
              />
            ))}

            {/* All sessions with overlap handling */}
            {allSessions.map((sessionWithLoc, idx) => {
              const { entry, location, startMinutes, endMinutes } =
                sessionWithLoc
              const duration = endMinutes - startMinutes
              const top = (startMinutes - minTime) * pixelsPerMinute
              const height = duration * pixelsPerMinute

              // Check if previous session needs hotel change
              const previousSession = idx > 0 ? allSessions[idx - 1] : null
              const showVenueChangeWarning =
                previousSession?.needsHotelChange ?? false

              // Calculate layout for overlapping sessions
              const layout = calculateSessionLayout(sessionWithLoc, allSessions)

              return (
                <div
                  key={`session-${idx}`}
                  className={cx(classes.sessionWrapper, classes.linearSession)}
                  data-session-wrapper
                  style={{
                    position: 'absolute',
                    top: `${top}px`,
                    height: `${height}px`,
                    minHeight: `${height}px`,
                    left: layout.left,
                    width: layout.width,
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    boxSizing: 'border-box',
                  }}
                >
                  {showVenueChangeWarning && (
                    <div className={classes.venueChangeWarning}>
                      Venue change required
                    </div>
                  )}
                  <SessionCard
                    entry={entry}
                    isSelected={selectedSessions.has(entry.id)}
                    onToggleSelection={onToggleSelection}
                    searchText={searchText}
                    location={location}
                    moderator={entry.moderator}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </DayContainer>
  )
}

export default React.memo(LinearScheduleView)
