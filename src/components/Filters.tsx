import React, { useState, useEffect } from 'react'
import { MdSwapHoriz } from 'react-icons/md'
import Dropdown from './Dropdown'
import SearchInput from './SearchInput'
import ImportExportSessions from './ImportExportSessions'
import FilterResultsCount from './FilterResultsCount'
import { type ScheduleData } from '../types/schedule'
import './Filters.css'

interface FiltersProps {
  showOnlySelected: boolean
  onToggleSelected: () => void
  selectedCount: number
  showOnlyEPS: boolean
  onToggleEPS: () => void
  showOnlyETS: boolean
  onToggleETS: () => void
  showOnlyCopleyPlace: boolean
  onToggleCopleyPlace: () => void
  showOnlySheraton: boolean
  onToggleSheraton: () => void
  showOnlyGeneralEvents: boolean
  onToggleGeneralEvents: () => void
  showOnlySpecialEvents: boolean
  onToggleSpecialEvents: () => void
  linearView: boolean
  onToggleLinearView: () => void
  tracks: string[]
  activeTrack: string | null
  onTrackChange: (track: string | null) => void
  activeLocation: string | null
  onLocationChange: (location: string | null) => void
  searchText: string
  onSearchChange: (text: string) => void
  totalTracks: number
  totalSessions: number
  filteredTracks: number
  filteredSessions: number
  onCopySelectedSessions: () => Promise<{ success: boolean; count: number }>
  onImportValidatedSessions: (
    validSessions: string[],
    allValidSessionIds: Set<string>
  ) => Promise<{ success: boolean; count: number }>
  scheduleData: ScheduleData[]
}

const Filters: React.FC<FiltersProps> = ({
  showOnlySelected,
  onToggleSelected,
  selectedCount,
  showOnlyEPS,
  onToggleEPS,
  showOnlyETS,
  onToggleETS,
  showOnlyCopleyPlace,
  onToggleCopleyPlace,
  showOnlySheraton,
  onToggleSheraton,
  showOnlyGeneralEvents,
  onToggleGeneralEvents,
  showOnlySpecialEvents,
  onToggleSpecialEvents,
  linearView,
  onToggleLinearView,
  tracks,
  activeTrack,
  onTrackChange,
  activeLocation,
  onLocationChange,
  searchText,
  onSearchChange,
  totalTracks,
  totalSessions,
  filteredTracks,
  filteredSessions,
  onCopySelectedSessions,
  onImportValidatedSessions,
  scheduleData,
}) => {
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false)
  const [isImportExportOpen, setIsImportExportOpen] = useState(false)

  // Collapse panel by default on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsPanelCollapsed(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="summary">
      <button
        className="filter-toggle"
        onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}
        aria-expanded={!isPanelCollapsed}
      >
        {isPanelCollapsed ? '▼ Show Filters' : '▲ Hide Filters'}
      </button>

      <div className={`filter-content ${isPanelCollapsed ? 'collapsed' : ''}`}>
        <div className="controls-wrapper">
          <div className="controls">
            <span
              className={`btn ${showOnlySelected ? 'active' : ''}`}
              onClick={onToggleSelected}
            >
              Show only selected sessions
            </span>
            {showOnlySelected && (
              <span
                className={`btn ${linearView ? 'active' : ''}`}
                onClick={onToggleLinearView}
              >
                Linear View
              </span>
            )}
            <span
              className={`btn ${showOnlyETS ? 'active' : ''}`}
              onClick={onToggleETS}
            >
              Show only ETS sessions
            </span>
            <span
              className={`btn ${showOnlyEPS ? 'active' : ''}`}
              onClick={onToggleEPS}
            >
              Show only EPS sessions
            </span>
            <span
              className={`btn ${showOnlyCopleyPlace ? 'active' : ''}`}
              onClick={onToggleCopleyPlace}
            >
              Copley Place
            </span>
            <span
              className={`btn ${showOnlySheraton ? 'active' : ''}`}
              onClick={onToggleSheraton}
            >
              Sheraton
            </span>
            <span
              className={`btn ${showOnlyGeneralEvents ? 'active' : ''}`}
              onClick={onToggleGeneralEvents}
            >
              General Events
            </span>
            <span
              className={`btn ${showOnlySpecialEvents ? 'active' : ''}`}
              onClick={onToggleSpecialEvents}
            >
              Include Special Events
            </span>
            {searchText && (
              <span className="btn active" onClick={() => onSearchChange('')}>
                Search: {searchText}
              </span>
            )}
            {activeLocation && (
              <span
                className="btn active"
                onClick={() => onLocationChange(null)}
              >
                Location: {activeLocation}
              </span>
            )}
            {activeTrack && (
              <span className="btn active" onClick={() => onTrackChange(null)}>
                Track: {activeTrack}
              </span>
            )}
            <div className="controls-spacer"></div>
            <span
              className="btn transfer-btn"
              onClick={() => setIsImportExportOpen(true)}
            >
              <MdSwapHoriz className="btn-icon" />
              Transfer Sessions
            </span>
          </div>

          <ImportExportSessions
            selectedCount={selectedCount}
            isOpen={isImportExportOpen}
            onClose={() => setIsImportExportOpen(false)}
            onCopySelectedSessions={onCopySelectedSessions}
            onImportSelectedSessions={onImportValidatedSessions}
            scheduleData={scheduleData}
          />
        </div>

        <FilterResultsCount
          totalTracks={totalTracks}
          totalSessions={totalSessions}
          filteredTracks={filteredTracks}
          filteredSessions={filteredSessions}
        />

        <div className="filter-row">
          <SearchInput
            label="Search"
            value={searchText}
            onChange={onSearchChange}
            placeholder="Search by topic, speaker, or moderator..."
          />
          <Dropdown
            label="Track"
            value={activeTrack}
            options={tracks}
            onChange={onTrackChange}
            placeholder="All Tracks"
            showClearButton={true}
          />
        </div>
        <div className="legend">
          To select a session, click the session card. Your selections will
          persist if you refresh the page. Sessions under the{' '}
          <strong>Evangelical Philosophical Society</strong> are shaded light
          blue.
        </div>
      </div>
    </div>
  )
}

export default Filters
