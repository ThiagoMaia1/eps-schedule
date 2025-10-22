import { useMemo, useEffect } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
import Filters from './components/Filters'
import ScheduleTable from './components/ScheduleTable'
import Footer from './components/Footer'
import TutorialPopup from './components/TutorialPopup'
import { type ScheduleEntry } from './types/schedule'
import { useScheduleFilters } from './hooks/useScheduleFilters'
import { useCurrentPath } from './hooks/useCurrentPath'
import { getScheduleData } from './utils/scheduleParser'
import { getEventName, getEventConfig, getEventData } from './sessionData'
import { migrateExistingSelectionsToEps2025 } from './utils/localStorage'
import 'react-tooltip/dist/react-tooltip.css'
import { useAppStyles } from './App.styles'

function App() {
  const { classes } = useAppStyles()

  // Run migration on first mount to preserve existing user selections
  useEffect(() => {
    migrateExistingSelectionsToEps2025()
  }, [])

  // Get current path and schedule data dynamically
  const currentPath = useCurrentPath()
  const scheduleData = useMemo(
    () => getScheduleData(currentPath),
    [currentPath]
  )
  const eventName = getEventName(currentPath)
  const eventConfig = useMemo(() => getEventConfig(currentPath), [currentPath])
  const eventData = useMemo(() => getEventData(currentPath), [currentPath])
  const officialSourceUrl = eventData.footerConfig?.officialSourceUrl
  // Use the filtering hook (pass currentPath for event-specific localStorage)
  const {
    activeLocation,
    activeTrack,
    searchText,
    showOnlySelected,
    activeVenue,
    activeClassification,
    showOnlyGeneralEvents,
    hideGeneralEvents,
    hideSpecialEvents,
    showOnlyPanelQA,
    showOnlyInvitedGuest,
    linearView,
    showGeneralEventsInColumns,
    showCancelledEvents,
    selectedSessions,
    isSessionsLoaded,
    setActiveLocation,
    setActiveTrack,
    setSearchText,
    setActiveVenue,
    setActiveClassification,
    allTracks,
    allVenues,
    allClassifications,
    handleToggleSelected,
    handleToggleGeneralEvents,
    handleToggleHideGeneralEvents,
    handleToggleHideSpecialEvents,
    handleTogglePanelQA,
    handleToggleInvitedGuest,
    handleToggleLinearView,
    handleToggleGeneralEventsInColumns,
    handleToggleShowCancelledEvents,
    handleToggleSessionSelection,
    handleCopySelectedSessions,
    handleImportValidatedSessions,
    handleClearAllFilters,
  } = useScheduleFilters(scheduleData, eventConfig, currentPath)

  // Calculate total and filtered session and track counts
  // Excludes general sessions from the count
  const { totalSessions, filteredSessions, filteredTracks } = useMemo(() => {
    // Count all sessions (excluding general events)
    let total = 0
    let filtered = 0
    const filteredTrackSet = new Set<string>()

    // Helper function to get moderator name for a session
    const getModeratorName = (entry: ScheduleEntry): string | undefined => {
      return entry.moderator?.name
    }

    // Helper function to check if entry matches filters
    const isEntryVisible = (
      entry: ScheduleEntry,
      location: string
    ): boolean => {
      // Hide cancelled events by default (unless showCancelledEvents is true)
      if (entry.isCancelled && !showCancelledEvents) return false

      // Location filters
      if (activeLocation && location !== activeLocation) return false
      if (activeVenue && !location.includes(activeVenue)) return false

      // Other filters
      if (showOnlySelected && !selectedSessions.has(entry.id)) return false
      if (showOnlyGeneralEvents && !entry.isGeneralEvent) return false
      // Hide filters
      if (entry.isGeneralEvent && hideGeneralEvents) return false
      if (entry.isSpecialEvent && hideSpecialEvents) return false
      // Filter by venue
      if (activeVenue && entry.location?.hotel !== activeVenue) return false
      // Filter by classification
      if (
        activeClassification &&
        entry.primaryClassification !== activeClassification
      )
        return false
      if (activeTrack && entry.track !== activeTrack) return false
      if (showOnlyPanelQA && !entry.isPanelOrQA) return false
      if (showOnlyInvitedGuest && !entry.isInvitedGuest) return false

      // Filter by search text
      if (searchText.trim()) {
        const searchLower = searchText.toLowerCase()
        const searchableFields = [
          entry.theme,
          entry.speaker,
          entry.affiliation,
          entry.track,
          entry.eventType, // For general events
          getModeratorName(entry),
        ]

        // Also add speakers array names for panel discussions
        const speakerNames = entry.speakers?.map((s) => s.name) || []
        searchableFields.push(...speakerNames)

        const hasMatch = searchableFields.some((field) =>
          field?.toLowerCase().includes(searchLower)
        )
        if (!hasMatch) return false
      }

      return true
    }

    scheduleData.forEach((day) => {
      day.timeSlots.forEach((slot) => {
        Object.entries(slot.sessions).forEach(([location, entries]) => {
          entries.forEach((entry) => {
            // Exclude general events from the count
            if (!entry.isGeneralEvent) {
              total++
              if (isEntryVisible(entry, location)) {
                filtered++
                if (entry.track) {
                  filteredTrackSet.add(entry.track)
                }
              }
            }
          })
        })
      })
    })

    return {
      totalSessions: total,
      filteredSessions: filtered,
      filteredTracks: filteredTrackSet.size,
    }
  }, [
    scheduleData,
    selectedSessions,
    activeLocation,
    showOnlySelected,
    activeVenue,
    activeClassification,
    showOnlyGeneralEvents,
    hideGeneralEvents,
    hideSpecialEvents,
    showOnlyPanelQA,
    showOnlyInvitedGuest,
    searchText,
    activeTrack,
    showCancelledEvents,
  ])

  return (
    <>
      <div className={classes.appContainer}>
        <div className={classes.titleContainer}>
          <h1>{eventName}</h1>
          {officialSourceUrl && (
            <>
              <a
                href={officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.officialLink}
                data-tooltip-id="official-source-tooltip"
              >
                <FiExternalLink />
              </a>
              <Tooltip id="official-source-tooltip" content="Official source" />
            </>
          )}
        </div>

        <Filters
          activeLocation={activeLocation}
          onLocationChange={setActiveLocation}
          showOnlySelected={showOnlySelected}
          onToggleSelected={handleToggleSelected}
          selectedCount={selectedSessions.size}
          activeVenue={activeVenue}
          onVenueChange={setActiveVenue}
          activeClassification={activeClassification}
          onClassificationChange={setActiveClassification}
          showOnlyGeneralEvents={showOnlyGeneralEvents}
          onToggleGeneralEvents={handleToggleGeneralEvents}
          hideGeneralEvents={hideGeneralEvents}
          onToggleHideGeneralEvents={handleToggleHideGeneralEvents}
          hideSpecialEvents={hideSpecialEvents}
          onToggleHideSpecialEvents={handleToggleHideSpecialEvents}
          showOnlyPanelQA={showOnlyPanelQA}
          onTogglePanelQA={handleTogglePanelQA}
          showOnlyInvitedGuest={showOnlyInvitedGuest}
          onToggleInvitedGuest={handleToggleInvitedGuest}
          linearView={linearView}
          onToggleLinearView={handleToggleLinearView}
          showGeneralEventsInColumns={showGeneralEventsInColumns}
          onToggleGeneralEventsInColumns={handleToggleGeneralEventsInColumns}
          showCancelledEvents={showCancelledEvents}
          onToggleShowCancelledEvents={handleToggleShowCancelledEvents}
          tracks={allTracks}
          activeTrack={activeTrack}
          onTrackChange={setActiveTrack}
          searchText={searchText}
          onSearchChange={setSearchText}
          allVenues={allVenues}
          allClassifications={allClassifications}
          totalTracks={allTracks.length}
          totalSessions={totalSessions}
          filteredTracks={filteredTracks}
          filteredSessions={filteredSessions}
          onCopySelectedSessions={handleCopySelectedSessions}
          onImportValidatedSessions={handleImportValidatedSessions}
          onClearAllFilters={handleClearAllFilters}
          scheduleData={scheduleData}
        />

        <ScheduleTable
          scheduleData={scheduleData}
          activeLocation={activeLocation}
          activeTrack={activeTrack}
          searchText={searchText}
          showOnlySelected={showOnlySelected}
          activeVenue={activeVenue}
          activeClassification={activeClassification}
          showOnlyGeneralEvents={showOnlyGeneralEvents}
          hideGeneralEvents={hideGeneralEvents}
          hideSpecialEvents={hideSpecialEvents}
          showOnlyPanelQA={showOnlyPanelQA}
          showOnlyInvitedGuest={showOnlyInvitedGuest}
          linearView={linearView}
          showGeneralEventsInColumns={showGeneralEventsInColumns}
          showCancelledEvents={showCancelledEvents}
          selectedSessions={selectedSessions}
          onToggleSelection={handleToggleSessionSelection}
          onLocationChange={setActiveLocation}
        />
      </div>
      <Footer />
      <TutorialPopup isSessionsLoaded={isSessionsLoaded} />
    </>
  )
}

export default App
