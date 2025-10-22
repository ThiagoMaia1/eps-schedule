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
  activeVenue: string | null
  onVenueChange: (venue: string | null) => void
  activeClassification: string | null
  onClassificationChange: (classification: string | null) => void
  showOnlyGeneralEvents: boolean
  onToggleGeneralEvents: () => void
  hideGeneralEvents: boolean
  onToggleHideGeneralEvents: () => void
  hideSpecialEvents: boolean
  onToggleHideSpecialEvents: () => void
  showOnlyPanelQA: boolean
  onTogglePanelQA: () => void
  showOnlyInvitedGuest: boolean
  onToggleInvitedGuest: () => void
  linearView: boolean
  onToggleLinearView: () => void
  showGeneralEventsInColumns: boolean
  onToggleGeneralEventsInColumns: () => void
  showCancelledEvents: boolean
  onToggleShowCancelledEvents: () => void
  tracks: string[]
  activeTrack: string | null
  onTrackChange: (track: string | null) => void
  activeLocation: string | null
  onLocationChange: (location: string | null) => void
  searchText: string
  onSearchChange: (text: string) => void
  allVenues: string[]
  allClassifications: string[]
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
  activeVenue,
  onVenueChange,
  activeClassification,
  onClassificationChange,
  showOnlyGeneralEvents,
  onToggleGeneralEvents,
  hideGeneralEvents,
  onToggleHideGeneralEvents,
  hideSpecialEvents,
  onToggleHideSpecialEvents,
  showOnlyPanelQA,
  onTogglePanelQA,
  showOnlyInvitedGuest,
  onToggleInvitedGuest,
  linearView,
  onToggleLinearView,
  showGeneralEventsInColumns,
  onToggleGeneralEventsInColumns,
  showCancelledEvents,
  onToggleShowCancelledEvents,
  tracks,
  activeTrack,
  onTrackChange,
  activeLocation,
  onLocationChange,
  searchText,
  onSearchChange,
  allVenues,
  allClassifications,
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
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number
    left: number
  } | null>(null)
  const infoButtonRef = React.useRef<HTMLButtonElement>(null)

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
    if (activeVenue) count++
    if (activeClassification) count++
    if (showOnlyGeneralEvents) count++
    if (hideGeneralEvents) count++
    if (showOnlyPanelQA) count++
    if (showOnlyInvitedGuest) count++
    if (searchText) count++
    if (activeLocation) count++
    if (activeTrack) count++
    if (linearView && showOnlySelected) count++
    if (showCancelledEvents) count++
    return count
  }

  const handleTooltipToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!showLegendTooltip && infoButtonRef.current) {
      const rect = infoButtonRef.current.getBoundingClientRect()
      const isMobile = window.innerWidth < 768

      if (!isMobile) {
        // Position tooltip below and to the right of the icon
        setTooltipPosition({
          top: rect.bottom + 8,
          left: rect.left,
        })
      }
    }
    setShowLegendTooltip(!showLegendTooltip)
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

        <div className={classes.controlsWrapper}>
          <div className={classes.controls}>
            <div className={classes.onlySelectedContainer}>
              <button
                ref={infoButtonRef}
                className={classes.infoIconButton}
                onClick={handleTooltipToggle}
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
                  <div
                    className={classes.legendTooltip}
                    style={
                      tooltipPosition
                        ? {
                            top: tooltipPosition.top,
                            left: tooltipPosition.left,
                          }
                        : undefined
                    }
                  >
                    To select a session, click the session card. Your selections
                    will persist if you refresh the page. Sessions under the{' '}
                    <strong>Evangelical Philosophical Society</strong> are
                    shaded light blue. <strong>Ctrl/Cmd + Mouse Wheel</strong>{' '}
                    or pinch-to-zoom to adjust the schedule view.
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
            {/* Dynamic classification pills */}
            {allClassifications.map((classification) => (
              <span
                key={classification}
                className={cx(
                  classes.btn,
                  activeClassification === classification && classes.btnActive
                )}
                onClick={() =>
                  onClassificationChange(
                    activeClassification === classification
                      ? null
                      : classification
                  )
                }
              >
                Only {classification}
              </span>
            ))}
            {/* Dynamic venue pills */}
            {allVenues.map((venue) => (
              <span
                key={venue}
                className={cx(
                  classes.btn,
                  activeVenue === venue && classes.btnActive
                )}
                onClick={() =>
                  onVenueChange(activeVenue === venue ? null : venue)
                }
              >
                Only {venue}
              </span>
            ))}
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
              className={cx(classes.btn)}
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              style={{ cursor: 'pointer' }}
            >
              {showMoreFilters ? '− Less filters' : '+ More filters'}
            </span>
            {showMoreFilters && (
              <>
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
                    showOnlyPanelQA && classes.btnActive
                  )}
                  onClick={onTogglePanelQA}
                >
                  Only Panel/Q&A
                </span>
                <span
                  className={cx(
                    classes.btn,
                    showOnlyInvitedGuest && classes.btnActive
                  )}
                  onClick={onToggleInvitedGuest}
                >
                  Only Invited Guest
                </span>
                <span
                  className={cx(
                    classes.btn,
                    showCancelledEvents && classes.btnActive
                  )}
                  onClick={onToggleShowCancelledEvents}
                >
                  Show Cancelled Events
                </span>
              </>
            )}
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
      </div>
    </div>
  )
}

export default Filters
