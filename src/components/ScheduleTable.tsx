import React, { useState, useCallback, useRef, useEffect } from 'react'
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
import { useScheduleTableStyles } from './ScheduleTable.styles'

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
  showOnlyPanelQA: boolean
  showOnlyInvitedGuest: boolean
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
  showOnlyPanelQA,
  showOnlyInvitedGuest,
  linearView,
  showGeneralEventsInColumns,
  selectedSessions,
  onToggleSelection,
  onLocationChange,
}) => {
  const { classes } = useScheduleTableStyles({})

  // Zoom functionality
  const { pixelsPerMinute, scrollerRef: zoomScrollerRef } = useScheduleZoom()

  // Local ref to track the scroller element for other purposes
  const localScrollerRef = useRef<HTMLDivElement>(null)

  // Combined callback ref that calls both the zoom callback and updates our local ref
  const scrollerRef = useCallback(
    (node: HTMLDivElement | null) => {
      zoomScrollerRef(node)
      localScrollerRef.current = node
    },
    [zoomScrollerRef]
  )

  // Floating scrollbar refs
  const floatingScrollRef = useRef<HTMLDivElement>(null)
  const floatingScrollContentRef = useRef<HTMLDivElement>(null)

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
    showOnlyPanelQA,
    showOnlyInvitedGuest,
    selectedSessions,
  })

  // Popup state
  const [popupState, setPopupState] = useState<{
    isOpen: boolean
    time: string
    sessions: SessionWithLocation[]
    unfilteredSessions: SessionWithLocation[]
    dayData?: ScheduleData
  }>({
    isOpen: false,
    time: '',
    sessions: [],
    unfilteredSessions: [],
    dayData: undefined,
  })

  // Check if any filters are active
  const hasActiveFilters =
    activeLocation !== null ||
    activeTrack !== null ||
    searchText.trim() !== '' ||
    showOnlySelected ||
    showOnlyEPS ||
    showOnlyETS ||
    showOnlyCopleyPlace ||
    showOnlySheraton ||
    showOnlyGeneralEvents ||
    hideGeneralEvents ||
    hideSpecialEvents ||
    showOnlyPanelQA ||
    showOnlyInvitedGuest

  // Handler for time marker click
  const handleTimeMarkerClick = useCallback(
    (dayData: ScheduleData, time: string, timeMinutes: number) => {
      const sessionsAtTime: SessionWithLocation[] = []
      const unfilteredSessionsAtTime: SessionWithLocation[] = []

      // Define the hour range (from timeMinutes to timeMinutes + 60)
      const hourStart = timeMinutes
      const hourEnd = timeMinutes + 60

      // Collect all sessions that overlap with this hour
      dayData.timeSlots.forEach((slot) => {
        Object.entries(slot.sessions).forEach(([location, entries]) => {
          entries.forEach((entry) => {
            // Check if the session overlaps with the hour range
            // Two ranges overlap if: start1 < end2 AND start2 < end1
            if (entry.startMinutes < hourEnd && entry.endMinutes > hourStart) {
              // Add to unfiltered list
              unfilteredSessionsAtTime.push({ entry, location })

              // Add to filtered list only if it passes filters
              if (isLocationVisible(location) && isEntryVisible(entry)) {
                sessionsAtTime.push({ entry, location })
              }
            }
          })
        })
      })

      setPopupState({
        isOpen: true,
        time,
        sessions: sessionsAtTime,
        unfilteredSessions: unfilteredSessionsAtTime,
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
      unfilteredSessions: [],
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

        // If showing general events in columns or filtering by general events only, include locations with any sessions
        if (showGeneralEventsInColumns || showOnlyGeneralEvents) {
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
    showOnlyGeneralEvents,
  ])

  // Check if there are any visible sessions across all days
  const hasVisibleSessions = hasAnyVisibleSessions(scheduleData, linearView)

  // Sync scroll between main scroller and floating scrollbar
  useEffect(() => {
    const mainScroller = localScrollerRef.current
    const floatingScroll = floatingScrollRef.current
    const floatingScrollContent = floatingScrollContentRef.current

    if (!mainScroller || !floatingScroll || !floatingScrollContent) return

    // Update floating scrollbar width to match main content width
    const updateFloatingScrollWidth = () => {
      floatingScrollContent.style.width = `${mainScroller.scrollWidth}px`
    }

    // Initial update
    updateFloatingScrollWidth()

    // Update on resize
    const resizeObserver = new ResizeObserver(updateFloatingScrollWidth)
    resizeObserver.observe(mainScroller)

    // Sync scroll from main to floating
    const handleMainScroll = () => {
      if (floatingScroll.scrollLeft !== mainScroller.scrollLeft) {
        floatingScroll.scrollLeft = mainScroller.scrollLeft
      }
    }

    // Sync scroll from floating to main
    const handleFloatingScroll = () => {
      if (mainScroller.scrollLeft !== floatingScroll.scrollLeft) {
        mainScroller.scrollLeft = floatingScroll.scrollLeft
      }
    }

    mainScroller.addEventListener('scroll', handleMainScroll)
    floatingScroll.addEventListener('scroll', handleFloatingScroll)

    return () => {
      resizeObserver.disconnect()
      mainScroller.removeEventListener('scroll', handleMainScroll)
      floatingScroll.removeEventListener('scroll', handleFloatingScroll)
    }
  }, [hasVisibleSessions])

  return (
    <>
      <AllSessionsInTimePopup
        key={popupState.time}
        isOpen={popupState.isOpen}
        onClose={closePopup}
        time={popupState.time}
        sessions={popupState.sessions}
        unfilteredSessions={popupState.unfilteredSessions}
        hasActiveFilters={hasActiveFilters}
        selectedSessions={selectedSessions}
        onToggleSelection={onToggleSelection}
        searchText={searchText}
      />
      {!hasVisibleSessions ? (
        <EmptyState
          searchText={searchText}
          showOnlySelected={showOnlySelected}
          activeLocation={activeLocation}
          activeTrack={activeTrack}
          showOnlyEPS={showOnlyEPS}
          showOnlyETS={showOnlyETS}
          showOnlyCopleyPlace={showOnlyCopleyPlace}
          showOnlySheraton={showOnlySheraton}
          showOnlyGeneralEvents={showOnlyGeneralEvents}
          hideGeneralEvents={hideGeneralEvents}
          hideSpecialEvents={hideSpecialEvents}
          showOnlyPanelQA={showOnlyPanelQA}
        />
      ) : (
        <div className={classes.scroller} ref={scrollerRef}>
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
                />
              )
            }

            // Regular view rendering
            // Use the unified visible locations for consistent columns across all days
            // Allow rendering even without location columns if we have general events to show as full-width banners
            const hasGeneralEventsToShow =
              !showGeneralEventsInColumns &&
              dayData.timeSlots.some((slot) => {
                const allEntries = Object.values(slot.sessions).flat()
                return allEntries.some(
                  (entry) => entry.isGeneralEvent && isEntryVisible(entry)
                )
              })

            if (
              unifiedVisibleLocations.length === 0 &&
              !hasGeneralEventsToShow
            ) {
              return null
            }

            // Check if this specific day has any visible sessions
            const dayHasVisibleSessions =
              hasGeneralEventsToShow ||
              unifiedVisibleLocations.some((location) => {
                return getAllSessions(dayData, location).length > 0
              })

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
      )}
    </>
  )
}

export default ScheduleTable
