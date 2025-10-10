import { useMemo } from 'react'
import Filters from './components/Filters'
import ScheduleTable from './components/ScheduleTable'
import Footer from './components/Footer'
import TutorialPopup from './components/TutorialPopup'
import { type ScheduleEntry } from './types/schedule'
import { useScheduleFilters } from './hooks/useScheduleFilters'
import { scheduleData } from './utils/scheduleParser'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'

function App() {
  // Use the filtering hook
  const {
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
    selectedSessions,
    isSessionsLoaded,
    setActiveLocation,
    setActiveTrack,
    setSearchText,
    allTracks,
    handleToggleSelected,
    handleToggleEPS,
    handleToggleETS,
    handleToggleCopleyPlace,
    handleToggleSheraton,
    handleToggleGeneralEvents,
    handleToggleHideGeneralEvents,
    handleToggleHideSpecialEvents,
    handleToggleLinearView,
    handleToggleSessionSelection,
    handleCopySelectedSessions,
    handleImportValidatedSessions,
  } = useScheduleFilters(scheduleData)

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
      // Location filters
      if (activeLocation && location !== activeLocation) return false
      if (showOnlyCopleyPlace && !location.includes('Copley Place'))
        return false
      if (showOnlySheraton && !location.includes('Sheraton')) return false

      // Other filters
      if (showOnlySelected && !selectedSessions.has(entry.id)) return false
      if (showOnlyGeneralEvents && !entry.isGeneralEvent) return false
      // Hide filters
      if (entry.isGeneralEvent && hideGeneralEvents) return false
      if (entry.isSpecialEvent && hideSpecialEvents) return false
      if (showOnlyEPS && !entry.isEPS && !entry.isGeneralEvent) return false
      if (showOnlyETS && entry.isEPS && !entry.isGeneralEvent) return false
      if (activeTrack && entry.track !== activeTrack) return false

      // Filter by search text
      if (searchText.trim()) {
        const searchLower = searchText.toLowerCase()
        const searchableFields = [
          entry.theme,
          entry.speaker,
          entry.affiliation,
          entry.track,
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
  ])

  return (
    <>
      <div className="app-container">
        <h1>Full Schedule (All Talks)</h1>

        <Filters
          activeLocation={activeLocation}
          onLocationChange={setActiveLocation}
          showOnlySelected={showOnlySelected}
          onToggleSelected={handleToggleSelected}
          selectedCount={selectedSessions.size}
          showOnlyEPS={showOnlyEPS}
          onToggleEPS={handleToggleEPS}
          showOnlyETS={showOnlyETS}
          onToggleETS={handleToggleETS}
          showOnlyCopleyPlace={showOnlyCopleyPlace}
          onToggleCopleyPlace={handleToggleCopleyPlace}
          showOnlySheraton={showOnlySheraton}
          onToggleSheraton={handleToggleSheraton}
          showOnlyGeneralEvents={showOnlyGeneralEvents}
          onToggleGeneralEvents={handleToggleGeneralEvents}
          hideGeneralEvents={hideGeneralEvents}
          onToggleHideGeneralEvents={handleToggleHideGeneralEvents}
          hideSpecialEvents={hideSpecialEvents}
          onToggleHideSpecialEvents={handleToggleHideSpecialEvents}
          linearView={linearView}
          onToggleLinearView={handleToggleLinearView}
          tracks={allTracks}
          activeTrack={activeTrack}
          onTrackChange={setActiveTrack}
          searchText={searchText}
          onSearchChange={setSearchText}
          totalTracks={allTracks.length}
          totalSessions={totalSessions}
          filteredTracks={filteredTracks}
          filteredSessions={filteredSessions}
          onCopySelectedSessions={handleCopySelectedSessions}
          onImportValidatedSessions={handleImportValidatedSessions}
          scheduleData={scheduleData}
        />

        <ScheduleTable
          scheduleData={scheduleData}
          activeLocation={activeLocation}
          activeTrack={activeTrack}
          searchText={searchText}
          showOnlySelected={showOnlySelected}
          showOnlyEPS={showOnlyEPS}
          showOnlyETS={showOnlyETS}
          showOnlyCopleyPlace={showOnlyCopleyPlace}
          showOnlySheraton={showOnlySheraton}
          showOnlyGeneralEvents={showOnlyGeneralEvents}
          hideGeneralEvents={hideGeneralEvents}
          hideSpecialEvents={hideSpecialEvents}
          linearView={linearView}
          selectedSessions={selectedSessions}
          onToggleSelection={handleToggleSessionSelection}
          onLocationChange={setActiveLocation}
        />
      </div>
      <Footer />
      <TutorialPopup
        selectedSessionsCount={selectedSessions.size}
        isSessionsLoaded={isSessionsLoaded}
      />
    </>
  )
}

export default App
