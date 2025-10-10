import React from 'react'
import { type ScheduleData, type ScheduleEntry } from '../types/schedule'
import SessionCard from './SessionCard'
import GeneralEventCard from './GeneralEventCard'
import TimeGuideColumn from './TimeGuideColumn'
import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'

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
  isEntryVisible: (entry: ScheduleEntry, dayData?: ScheduleData) => boolean
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
  isEntryVisible,
}) => {
  return (
    <div className="day-container">
      <h2 className="day-header">{dayData.day}</h2>

      <div className="calendar-wrapper">
        <div className="calendar-container linear-view">
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
          <div className="location-column linear-column">
            <div className="calendar-header">Selected Sessions</div>
            <div
              className="sessions-container"
              style={{ height: calendarHeight }}
            >
              {/* Hour grid lines */}
              {timeMarkers.map((time, idx) => (
                <div
                  key={`grid-${idx}`}
                  className="hour-grid-line"
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
                const layout = calculateSessionLayout(
                  sessionWithLoc,
                  allSessions
                )

                return (
                  <div
                    key={`session-${idx}`}
                    className="session-wrapper linear-session"
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
                      <div className="venue-change-warning">
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

        {/* General Events and Plenary/Presidential sessions (full-width) */}
        {dayData.timeSlots.map((slot, slotIndex) => {
          const allEntries = Object.values(slot.sessions).flat()
          const generalEvent = allEntries.find(
            (entry) => entry.isGeneralEvent && isEntryVisible(entry, dayData)
          )

          if (generalEvent) {
            const duration = generalEvent.endMinutes - generalEvent.startMinutes
            const top = (generalEvent.startMinutes - minTime) * pixelsPerMinute
            const height = duration * pixelsPerMinute

            return (
              <GeneralEventCard
                key={`general-${slotIndex}`}
                entry={generalEvent}
                searchText={searchText}
                top={top}
                height={height}
                visibleColumnsCount={2}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

export default React.memo(LinearScheduleView)
