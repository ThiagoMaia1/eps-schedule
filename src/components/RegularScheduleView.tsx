import React from 'react'
import {
  type ScheduleData,
  type ScheduleEntry,
  type ShiftBlock,
} from '../types/schedule'
import SessionCard from './SessionCard'
import TrackCard from './TrackCard'
import GeneralEventCard from './GeneralEventCard'
import TimeGuideColumn from './TimeGuideColumn'
import TableLabelButton from './TableLabelButton'

interface RegularScheduleViewProps {
  dayData: ScheduleData
  visibleLocations: string[]
  minTime: number
  maxTime: number
  timeMarkers: number[]
  pixelsPerMinute: number
  calendarHeight: number
  selectedSessions: Set<string>
  onToggleSelection: (sessionId: string) => void
  searchText: string
  showOnlySelected: boolean
  activeLocation: string | null
  onLocationChange: (location: string | null) => void
  onTimeMarkerClick: (
    dayData: ScheduleData,
    time: string,
    timeMinutes: number
  ) => void
  getAllSessions: (dayData: ScheduleData, location: string) => ScheduleEntry[]
  isEntryVisible: (entry: ScheduleEntry, dayData?: ScheduleData) => boolean
}

const RegularScheduleView: React.FC<RegularScheduleViewProps> = ({
  dayData,
  visibleLocations,
  minTime,
  timeMarkers,
  pixelsPerMinute,
  calendarHeight,
  selectedSessions,
  onToggleSelection,
  searchText,
  showOnlySelected,
  activeLocation,
  onLocationChange,
  onTimeMarkerClick,
  getAllSessions,
  isEntryVisible,
}) => {
  return (
    <div className="day-container">
      <h2 className="day-header">{dayData.day}</h2>
      <div className="calendar-wrapper">
        <div className="calendar-container">
          {/* Time guide column */}
          <TimeGuideColumn
            timeMarkers={timeMarkers}
            minTime={minTime}
            pixelsPerMinute={pixelsPerMinute}
            calendarHeight={calendarHeight}
            onTimeMarkerClick={onTimeMarkerClick}
            dayData={dayData}
          />

          {/* Location columns */}
          {visibleLocations.map((location, locIndex) => {
            const sessions = getAllSessions(dayData, location)

            // Find shifts that have sessions in this location
            const shiftsForLocation = dayData.shifts.filter(
              (shift: ShiftBlock) => {
                // Check if any session in this location belongs to this shift
                return sessions.some((session) => session.shiftId === shift.id)
              }
            )

            const isLocationFiltered = activeLocation === location

            return (
              <div key={locIndex} className="location-column">
                <TableLabelButton
                  className="calendar-header location-header"
                  onClick={() =>
                    onLocationChange(isLocationFiltered ? null : location)
                  }
                  aria-label={
                    isLocationFiltered
                      ? `Clear location filter: ${location}`
                      : `Filter by location: ${location}`
                  }
                  title={
                    isLocationFiltered
                      ? 'Click to clear location filter'
                      : 'Click to filter by this location'
                  }
                  active={isLocationFiltered}
                >
                  {location}
                </TableLabelButton>
                <div
                  className="sessions-container"
                  style={{ height: calendarHeight }}
                >
                  {/* Hour grid lines */}
                  {timeMarkers.map((time, idx) => (
                    <div
                      key={`grid-${idx}`}
                      className="hour-grid-line"
                      style={{
                        top: (time - minTime) * pixelsPerMinute,
                      }}
                    />
                  ))}

                  {/* Shift/Moderator blocks with their sessions as children */}
                  {/* Hide track blocks when filtering by selected or search */}
                  {!showOnlySelected &&
                    !searchText.trim() &&
                    shiftsForLocation.map((shift) => {
                      // Calculate dynamic height based on actual sessions in this shift for this location
                      const sessionsInShift = sessions.filter(
                        (s) => s.shiftId === shift.id
                      )

                      if (sessionsInShift.length === 0) return null

                      // Find the earliest start and latest end time among sessions in this shift
                      const startTimes = sessionsInShift.map(
                        (s) => s.startMinutes
                      )
                      const endTimes = sessionsInShift.map((s) => s.endMinutes)
                      const earliestStart = Math.min(...startTimes)
                      const latestEnd = Math.max(...endTimes)

                      const shiftTop =
                        (earliestStart - minTime) * pixelsPerMinute
                      const shiftHeight =
                        (latestEnd - earliestStart) * pixelsPerMinute

                      return (
                        <TrackCard
                          searchText={searchText}
                          key={`shift-${shift.id}`}
                          shift={shift}
                          top={shiftTop}
                          height={shiftHeight}
                        >
                          {/* Sessions within this shift/track */}
                          {sessionsInShift.map((entry, entryIndex) => {
                            const duration =
                              entry.endMinutes - entry.startMinutes
                            const top =
                              (entry.startMinutes - earliestStart) *
                              pixelsPerMinute
                            const height = duration * pixelsPerMinute
                            const trackHeaderHeight = shift.track ? 32 : 0

                            return (
                              <div
                                key={entryIndex}
                                className="session-wrapper"
                                style={{
                                  position: 'absolute',
                                  top: `${top + trackHeaderHeight}px`,
                                  height: `${height}px`,
                                  minHeight: `${height}px`,
                                  left: '5px',
                                  right: '5px',
                                }}
                              >
                                <SessionCard
                                  entry={entry}
                                  isSelected={selectedSessions.has(entry.id)}
                                  onToggleSelection={onToggleSelection}
                                  searchText={searchText}
                                  shouldShowTrack={false}
                                />
                              </div>
                            )
                          })}
                        </TrackCard>
                      )
                    })}

                  {/* When filtering, show sessions directly without track blocks */}
                  {(showOnlySelected || searchText.trim()) &&
                    sessions.map((entry, entryIndex) => {
                      const duration = entry.endMinutes - entry.startMinutes
                      const top =
                        (entry.startMinutes - minTime) * pixelsPerMinute
                      const height = duration * pixelsPerMinute

                      // Special handling for general events and plenary/presidential
                      if (entry.isGeneralEvent) {
                        return null // We'll handle these separately
                      }

                      return (
                        <div
                          key={entryIndex}
                          className="session-wrapper"
                          style={{
                            position: 'absolute',
                            top: `${top}px`,
                            height: `${height}px`,
                            minHeight: `${height}px`,
                            left: '5px',
                            right: '5px',
                          }}
                        >
                          <SessionCard
                            entry={entry}
                            isSelected={selectedSessions.has(entry.id)}
                            onToggleSelection={onToggleSelection}
                            searchText={searchText}
                            moderator={entry.moderator}
                          />
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>

        {/* General Events (full-width) */}
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
                visibleColumnsCount={visibleLocations.length}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

export default React.memo(RegularScheduleView)
