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
import { useFiltersStyles } from './Filters.styles'

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
  onClearAllFilters: () => void
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
  onClearAllFilters,
  scheduleData,
}) => {
  // Initialize collapsed state based on window width to avoid flash on mobile
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768
  })
  const [isImportExportOpen, setIsImportExportOpen] = useState(false)
  const [showLegendTooltip, setShowLegendTooltip] = useState(false)

  const { classes, cx } = useFiltersStyles({ isPanelCollapsed })

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

  // Count active filters
  const countActiveFilters = () => {
    let count = 0
    if (showOnlySelected) count++
    if (showOnlyEPS) count++
    if (showOnlyETS) count++
    if (showOnlyCopleyPlace) count++
    if (showOnlySheraton) count++
    if (showOnlyGeneralEvents) count++
    if (hideGeneralEvents) count++
    if (searchText) count++
    if (activeLocation) count++
    if (activeTrack) count++
    if (linearView && showOnlySelected) count++
    return count
  }

  const activeFilterCount = countActiveFilters()

  return (
    <div className={classes.summary}>
      <button
        className={classes.filterToggle}
        onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}
        aria-expanded={!isPanelCollapsed}
      >
        {isPanelCollapsed ? (
          <>
            <span className={classes.filterToggleText}>
              Show Filters
              {activeFilterCount > 0 && (
                <span className={classes.filterBadge}>{activeFilterCount}</span>
              )}
            </span>
            <MdKeyboardArrowDown size={20} />
          </>
        ) : (
          <>
            Hide Filters
            <MdKeyboardArrowUp size={20} />
          </>
        )}
      </button>

      <div className={classes.filterContent}>
        <div className={classes.controlsWrapper}>
          <div className={classes.controls}>
            <div className={classes.onlySelectedContainer}>
              <button
                className={classes.infoIconButton}
                onClick={(e) => {
                  e.stopPropagation()
                  setShowLegendTooltip(!showLegendTooltip)
                }}
                aria-label="Show help information"
              >
                <MdInfoOutline />
              </button>
              <span
                className={cx(
                  classes.btn,
                  showOnlySelected && classes.btnActive
                )}
                onClick={onToggleSelected}
              >
                Only selected sessions
              </span>
              {showLegendTooltip && (
                <>
                  <div
                    className={classes.legendTooltipBackdrop}
                    onClick={() => setShowLegendTooltip(false)}
                  />
                  <div className={classes.legendTooltip}>
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
                className={cx(classes.btn, linearView && classes.btnActive)}
                onClick={onToggleLinearView}
              >
                Linear View
              </span>
            )}
            <span
              className={cx(classes.btn, showOnlyETS && classes.btnActive)}
              onClick={onToggleETS}
            >
              Only ETS sessions
            </span>
            <span
              className={cx(classes.btn, showOnlyEPS && classes.btnActive)}
              onClick={onToggleEPS}
            >
              Only EPS sessions
            </span>
            <span
              className={cx(
                classes.btn,
                showOnlyCopleyPlace && classes.btnActive
              )}
              onClick={onToggleCopleyPlace}
            >
              Only Copley Place
            </span>
            <span
              className={cx(classes.btn, showOnlySheraton && classes.btnActive)}
              onClick={onToggleSheraton}
            >
              Only Sheraton
            </span>
            <span
              className={cx(
                classes.btn,
                showOnlyGeneralEvents && classes.btnActive
              )}
              onClick={onToggleGeneralEvents}
            >
              Only General Events
            </span>
            <span
              className={cx(
                classes.btn,
                hideGeneralEvents && classes.btnActive
              )}
              onClick={onToggleHideGeneralEvents}
            >
              Hide General Events
            </span>
            <span
              className={cx(
                classes.btn,
                hideSpecialEvents && classes.btnActive
              )}
              onClick={onToggleHideSpecialEvents}
            >
              Hide Special Events
            </span>
            <span
              style={{ display: 'none' }}
              className={cx(
                classes.btn,
                showGeneralEventsInColumns && classes.btnActive
              )}
              onClick={onToggleGeneralEventsInColumns}
            >
              General Events in Columns
            </span>
            {searchText && (
              <span
                className={cx(classes.btn, classes.btnActive)}
                onClick={() => onSearchChange('')}
              >
                Search: {searchText}
              </span>
            )}
            {activeLocation && (
              <span
                className={cx(classes.btn, classes.btnActive)}
                onClick={() => onLocationChange(null)}
              >
                Location: {activeLocation}
              </span>
            )}
            {activeTrack && (
              <span
                className={cx(classes.btn, classes.btnActive)}
                onClick={() => onTrackChange(null)}
              >
                Track: {activeTrack}
              </span>
            )}
            <div className={classes.controlsSpacer}></div>
            {activeFilterCount > 0 && (
              <span
                className={cx(classes.btn, classes.clearAllBtn)}
                onClick={onClearAllFilters}
              >
                Clear All
              </span>
            )}
            <span
              className={cx(classes.btn, classes.transferBtn)}
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

        <div className={classes.filterRow}>
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
        <div className={classes.legend}>
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
