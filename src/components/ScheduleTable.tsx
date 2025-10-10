import React, { useState, useCallback } from 'react'
import { type ScheduleData } from '../types/schedule'
import { useScheduleZoom } from '../hooks/useScheduleZoom'
import AllSessionsInTimePopup from './AllSessionsInTimePopup'
import EmptyState from './EmptyState'
import LinearScheduleView from './LinearScheduleView'
import RegularScheduleView from './RegularScheduleView'
import {
  useScheduleTableFilters,
  type SessionWithLocation,
} from '../hooks/useScheduleTableFilters'
import { getTimeRange, generateTimeMarkers } from '../utils/scheduleTableUtils'
import './ScheduleTable.css'

interface ScheduleTableProps {
  scheduleData: ScheduleData[]
  activeLocation: string | null
  activeTrack: string | null
  searchText: string
  showOnlySelected: boolean
  showOnlyEPS: boolean
  showOnlyETS: boolean
  showOnlyCopleyPlace: boolean
  showOnlySheraton: boolean
  showOnlyGeneralEvents: boolean
  hideGeneralEvents: boolean
  hideSpecialEvents: boolean
  linearView: boolean
  showGeneralEventsInColumns: boolean
  selectedSessions: Set<string>
  onToggleSelection: (sessionId: string) => void
  onLocationChange: (location: string | null) => void
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  scheduleData,
  activeLocation,
  activeTrack,
  searchText,
  showOnlySelected,
  showOnlyEPS,
  showOnlyETS,
  showOnlyCopleyPlace,
  showOnlySheraton,
  showOnlyGeneralEvents,
  hideGeneralEvents,
  hideSpecialEvents,
  linearView,
  showGeneralEventsInColumns,
  selectedSessions,
  onToggleSelection,
  onLocationChange,
}) => {
  // Zoom functionality
  const { pixelsPerMinute, scrollerRef } = useScheduleZoom()

  // Use filtering hook
  const {
    isLocationVisible,
    isEntryVisible,
    getAllSessions,
    getAllSessionsWithLocations,
    calculateSessionLayout,
    hasAnyVisibleSessions,
  } = useScheduleTableFilters({
    activeLocation,
    activeTrack,
    searchText,
    showOnlySelected,
    showOnlyEPS,
    showOnlyETS,
    showOnlyCopleyPlace,
    showOnlySheraton,
    showOnlyGeneralEvents,
    hideGeneralEvents,
    hideSpecialEvents,
    selectedSessions,
  })

  // Popup state
  const [popupState, setPopupState] = useState<{
    isOpen: boolean
    time: string
    sessions: SessionWithLocation[]
    dayData?: ScheduleData
  }>({
    isOpen: false,
    time: '',
    sessions: [],
    dayData: undefined,
  })

  // Handler for time marker click
  const handleTimeMarkerClick = useCallback(
    (dayData: ScheduleData, time: string, timeMinutes: number) => {
      const sessionsAtTime: SessionWithLocation[] = []

      // Define the hour range (from timeMinutes to timeMinutes + 60)
      const hourStart = timeMinutes
      const hourEnd = timeMinutes + 60

      // Collect all sessions that overlap with this hour
      dayData.timeSlots.forEach((slot) => {
        Object.entries(slot.sessions).forEach(([location, entries]) => {
          // Skip locations that are not visible
          if (!isLocationVisible(location)) return

          entries.forEach((entry) => {
            if (!isEntryVisible(entry)) return

            // Check if the session overlaps with the hour range
            // Two ranges overlap if: start1 < end2 AND start2 < end1
            if (entry.startMinutes < hourEnd && entry.endMinutes > hourStart) {
              sessionsAtTime.push({ entry, location })
            }
          })
        })
      })

      setPopupState({
        isOpen: true,
        time,
        sessions: sessionsAtTime,
        dayData,
      })
    },
    [isLocationVisible, isEntryVisible]
  )

  const closePopup = useCallback(() => {
    setPopupState({
      isOpen: false,
      time: '',
      sessions: [],
      dayData: undefined,
    })
  }, [])

  // Calculate unified visible locations across all days for regular view
  // A location should be shown if it has visible sessions on ANY day
  // Exclude locations that only have general/special events (unless showGeneralEventsInColumns is true)
  const unifiedVisibleLocations = React.useMemo(() => {
    if (linearView) return [] // Not needed for linear view

    const locationsSet = new Set<string>()

    // Collect all unique locations that exist across all days
    const allPossibleLocations = new Set<string>()
    scheduleData.forEach((dayData) => {
      dayData.locations.forEach((location) => {
        allPossibleLocations.add(location)
      })
    })

    // Check each location: if it's visible and has sessions on ANY day, include it
    allPossibleLocations.forEach((location) => {
      if (!isLocationVisible(location)) return

      // Check if this location has visible sessions on any day
      const hasSessionsOnAnyDay = scheduleData.some((dayData) => {
        const sessions = getAllSessions(dayData, location)

        // If showing general events in columns, include locations with any sessions
        if (showGeneralEventsInColumns) {
          return sessions.length > 0
        }

        // Otherwise, only include if there's at least one non-general/special event
        return sessions.some(
          (session) => !session.isGeneralEvent && !session.isSpecialEvent
        )
      })

      if (hasSessionsOnAnyDay) {
        locationsSet.add(location)
      }
    })

    // Preserve the original order from the first day that has these locations
    const orderedLocations: string[] = []
    const firstDay = scheduleData[0]
    if (firstDay) {
      firstDay.locations.forEach((location) => {
        if (locationsSet.has(location)) {
          orderedLocations.push(location)
        }
      })
      // Add any remaining locations that weren't in the first day
      locationsSet.forEach((location) => {
        if (!orderedLocations.includes(location)) {
          orderedLocations.push(location)
        }
      })
    }

    return orderedLocations
  }, [
    scheduleData,
    linearView,
    isLocationVisible,
    getAllSessions,
    showGeneralEventsInColumns,
  ])

  // Check if there are any visible sessions across all days
  const hasVisibleSessions = hasAnyVisibleSessions(scheduleData, linearView)

  return (
    <>
      <AllSessionsInTimePopup
        isOpen={popupState.isOpen}
        onClose={closePopup}
        time={popupState.time}
        sessions={popupState.sessions}
        selectedSessions={selectedSessions}
        onToggleSelection={onToggleSelection}
        searchText={searchText}
      />
      <div className="scroller" ref={scrollerRef}>
        {!hasVisibleSessions && (
          <EmptyState
            searchText={searchText}
            showOnlySelected={showOnlySelected}
          />
        )}
        {scheduleData.map((dayData, dayIndex) => {
          // Linear view rendering
          if (linearView) {
            const allSessions = getAllSessionsWithLocations(dayData)

            if (allSessions.length === 0) return null

            const { minTime, maxTime } = getTimeRange(dayData, isEntryVisible)
            const timeMarkers = generateTimeMarkers(minTime, maxTime)
            const totalMinutes = maxTime - minTime
            const calendarHeight = totalMinutes * pixelsPerMinute

            return (
              <LinearScheduleView
                key={dayIndex}
                dayData={dayData}
                allSessions={allSessions}
                minTime={minTime}
                maxTime={maxTime}
                timeMarkers={timeMarkers}
                pixelsPerMinute={pixelsPerMinute}
                calendarHeight={calendarHeight}
                selectedSessions={selectedSessions}
                onToggleSelection={onToggleSelection}
                searchText={searchText}
                onTimeMarkerClick={handleTimeMarkerClick}
                calculateSessionLayout={calculateSessionLayout}
                isEntryVisible={isEntryVisible}
              />
            )
          }

          // Regular view rendering
          // Use the unified visible locations for consistent columns across all days
          if (unifiedVisibleLocations.length === 0) return null

          // Check if this specific day has any visible sessions
          const dayHasVisibleSessions = unifiedVisibleLocations.some(
            (location) => {
              return getAllSessions(dayData, location).length > 0
            }
          )

          // Skip this day if it has no visible sessions
          if (!dayHasVisibleSessions) return null

          const { minTime, maxTime } = getTimeRange(dayData, isEntryVisible)
          const timeMarkers = generateTimeMarkers(minTime, maxTime)
          const totalMinutes = maxTime - minTime
          const calendarHeight = totalMinutes * pixelsPerMinute

          return (
            <RegularScheduleView
              key={dayIndex}
              dayData={dayData}
              visibleLocations={unifiedVisibleLocations}
              minTime={minTime}
              maxTime={maxTime}
              timeMarkers={timeMarkers}
              pixelsPerMinute={pixelsPerMinute}
              calendarHeight={calendarHeight}
              selectedSessions={selectedSessions}
              onToggleSelection={onToggleSelection}
              searchText={searchText}
              showOnlySelected={showOnlySelected}
              activeLocation={activeLocation}
              onLocationChange={onLocationChange}
              onTimeMarkerClick={handleTimeMarkerClick}
              getAllSessions={getAllSessions}
              isEntryVisible={isEntryVisible}
              showGeneralEventsInColumns={showGeneralEventsInColumns}
            />
          )
        })}
      </div>
    </>
  )
}

export default ScheduleTable
