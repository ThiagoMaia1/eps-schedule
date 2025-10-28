import React, { useState } from 'react'
import { type ScheduleData } from '../types/schedule'
import SessionCard from './SessionCard'
import TimeGuideColumn from './TimeGuideColumn'
import DayContainer from './DayContainer'
import HourGridLine from './HourGridLine'
import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'
import { useScheduleTableStyles } from './ScheduleTable.styles'
import UnselectConfirmationPopup from './UnselectConfirmationPopup'

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
  ) => { left: string; width: string; needsHotelChange?: boolean }
  isCollapsed?: boolean
  onToggleCollapse?: () => void
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
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const { classes, cx } = useScheduleTableStyles({})
  const [sessionToUnselect, setSessionToUnselect] = useState<string | null>(
    null
  )

  const handleToggleSelectionWithConfirmation = (sessionId: string) => {
    // Check if the session is currently selected
    const isSelected = selectedSessions.has(sessionId)

    if (isSelected) {
      // Show confirmation popup for unselecting
      setSessionToUnselect(sessionId)
    } else {
      // Directly select if not selected
      onToggleSelection(sessionId)
    }
  }

  const handleConfirmUnselect = () => {
    if (sessionToUnselect) {
      onToggleSelection(sessionToUnselect)
      setSessionToUnselect(null)
    }
  }

  const handleCancelUnselect = () => {
    setSessionToUnselect(null)
  }

  // Get session details for the popup
  const sessionToUnselectDetails = allSessions.find(
    (s) => s.entry.id === sessionToUnselect
  )

  return (
    <>
      <DayContainer
        dayTitle={dayData.day}
        isCollapsed={isCollapsed}
        onToggleCollapse={onToggleCollapse}
      >
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
            <div
              className={classes.calendarHeader}
              style={{ pointerEvents: 'none' }}
            >
              Selected Sessions (left to right based on location order)
            </div>
            <div
              className={classes.sessionsContainer}
              style={{
                height: isCollapsed ? 0 : calendarHeight,
                overflow: isCollapsed ? 'hidden' : 'visible',
              }}
            >
              {/* Hour grid lines */}
              <HourGridLine
                timeMarkers={timeMarkers}
                minTime={minTime}
                pixelsPerMinute={pixelsPerMinute}
                skipFirstLine
              />

              {/* All sessions with overlap handling */}
              {allSessions.map((sessionWithLoc, idx) => {
                const { entry, location, startMinutes, endMinutes } =
                  sessionWithLoc
                const duration = endMinutes - startMinutes
                const top = (startMinutes - minTime) * pixelsPerMinute
                const height = duration * pixelsPerMinute

                // Calculate layout for overlapping sessions and check for hotel change
                const layout = calculateSessionLayout(
                  sessionWithLoc,
                  allSessions
                )
                const showVenueChangeWarning = layout.needsHotelChange ?? false

                return (
                  <div
                    key={`session-${idx}`}
                    className={cx(
                      classes.sessionWrapper,
                      classes.linearSession
                    )}
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
                      onToggleSelection={handleToggleSelectionWithConfirmation}
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

      {/* Confirmation popup for unselecting */}
      <UnselectConfirmationPopup
        isOpen={sessionToUnselect !== null}
        onClose={handleCancelUnselect}
        onConfirm={handleConfirmUnselect}
        sessionDetails={sessionToUnselectDetails}
        searchText={searchText}
      />
    </>
  )
}

export default React.memo(LinearScheduleView)
