import React, { useState, useEffect } from 'react'
import {
  MdSwapHoriz,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdInfoOutline,
} from 'react-icons/md'
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
  hideGeneralEvents: boolean
  onToggleHideGeneralEvents: () => void
  hideSpecialEvents: boolean
  onToggleHideSpecialEvents: () => void
  linearView: boolean
  onToggleLinearView: () => void
  showGeneralEventsInColumns: boolean
  onToggleGeneralEventsInColumns: () => void
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
  hideGeneralEvents,
  onToggleHideGeneralEvents,
  hideSpecialEvents,
  onToggleHideSpecialEvents,
  linearView,
  onToggleLinearView,
  showGeneralEventsInColumns,
  onToggleGeneralEventsInColumns,
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
  // Initialize collapsed state based on window width to avoid flash on mobile
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768
  })
  const [isImportExportOpen, setIsImportExportOpen] = useState(false)
  const [showLegendTooltip, setShowLegendTooltip] = useState(false)

  // Update collapsed state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsPanelCollapsed(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close tooltip when panel is collapsed
  useEffect(() => {
    if (isPanelCollapsed) {
      setShowLegendTooltip(false)
    }
  }, [isPanelCollapsed])

  return (
    <div className="summary">
      <button
        className={`filter-toggle ${isPanelCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}
        aria-expanded={!isPanelCollapsed}
      >
        {isPanelCollapsed ? (
          <>
            Show Filters
            <MdKeyboardArrowDown size={20} />
          </>
        ) : (
          <>
            Hide Filters
            <MdKeyboardArrowUp size={20} />
          </>
        )}
      </button>

      <div className={`filter-content ${isPanelCollapsed ? 'collapsed' : ''}`}>
        <div className="controls-wrapper">
          <div className="controls">
            <div className="only-selected-container">
              <button
                className="info-icon-button"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowLegendTooltip(!showLegendTooltip)
                }}
                aria-label="Show help information"
              >
                <MdInfoOutline />
              </button>
              <span
                className={`btn ${showOnlySelected ? 'active' : ''}`}
                onClick={onToggleSelected}
              >
                Only selected sessions
              </span>
              {showLegendTooltip && (
                <>
                  <div
                    className="legend-tooltip-backdrop"
                    onClick={() => setShowLegendTooltip(false)}
                  />
                  <div className="legend-tooltip">
                    To select a session, click the session card. Your selections
                    will persist if you refresh the page. Sessions under the{' '}
                    <strong>Evangelical Philosophical Society</strong> are
                    shaded light blue.{' '}
                    {typeof window !== 'undefined' &&
                    'ontouchstart' in window &&
                    navigator.maxTouchPoints > 0 ? (
                      <>Use pinch-to-zoom to adjust the schedule view.</>
                    ) : (
                      <>
                        Use <strong>Ctrl/Cmd + Mouse Wheel</strong> to zoom in
                        and out of the schedule.
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
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
              Only ETS sessions
            </span>
            <span
              className={`btn ${showOnlyEPS ? 'active' : ''}`}
              onClick={onToggleEPS}
            >
              Only EPS sessions
            </span>
            <span
              className={`btn ${showOnlyCopleyPlace ? 'active' : ''}`}
              onClick={onToggleCopleyPlace}
            >
              Only Copley Place
            </span>
            <span
              className={`btn ${showOnlySheraton ? 'active' : ''}`}
              onClick={onToggleSheraton}
            >
              Only Sheraton
            </span>
            <span
              className={`btn ${showOnlyGeneralEvents ? 'active' : ''}`}
              onClick={onToggleGeneralEvents}
            >
              Only General Events
            </span>
            <span
              className={`btn ${hideGeneralEvents ? 'active' : ''}`}
              onClick={onToggleHideGeneralEvents}
            >
              Hide General Events
            </span>
            <span
              className={`btn ${hideSpecialEvents ? 'active' : ''}`}
              onClick={onToggleHideSpecialEvents}
            >
              Hide Special Events
            </span>
            <span
              style={{ display: 'none' }}
              className={`btn ${showGeneralEventsInColumns ? 'active' : ''}`}
              onClick={onToggleGeneralEventsInColumns}
            >
              General Events in Columns
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
          blue.{' '}
          {typeof window !== 'undefined' &&
          'ontouchstart' in window &&
          navigator.maxTouchPoints > 0 ? (
            <>Use pinch-to-zoom to adjust the schedule view.</>
          ) : (
            <>
              Use <strong>Ctrl/Cmd + Mouse Wheel</strong> to zoom in and out of
              the schedule.
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Filters
