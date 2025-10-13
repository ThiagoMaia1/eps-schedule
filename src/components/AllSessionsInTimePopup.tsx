import React, { useState } from 'react'
import Popup from './Popup'
import SessionCard from './SessionCard'
import GeneralEventCard from './GeneralEventCard'
import SearchInput from './SearchInput'
import { type ScheduleEntry } from '../types/schedule'
import { useAllSessionsInTimePopupStyles } from './AllSessionsInTimePopup.styles'

interface SessionWithLocation {
  entry: ScheduleEntry
  location: string
}

interface AllSessionsInTimePopupProps {
  isOpen: boolean
  onClose: () => void
  time: string
  sessions: SessionWithLocation[]
  unfilteredSessions: SessionWithLocation[]
  hasActiveFilters: boolean
  selectedSessions: Set<string>
  onToggleSelection: (sessionId: string) => void
  searchText: string
}

const AllSessionsInTimePopup: React.FC<AllSessionsInTimePopupProps> = ({
  isOpen,
  onClose,
  time,
  sessions,
  unfilteredSessions,
  hasActiveFilters,
  selectedSessions,
  onToggleSelection,
  searchText,
}) => {
  const { classes, cx } = useAllSessionsInTimePopupStyles()
  const [popupSearchText, setPopupSearchText] = useState('')
  const [showUnfiltered, setShowUnfiltered] = useState(false)
  const effectiveSearchText = searchText || popupSearchText

  // Reset showUnfiltered when popup closes or reopens
  React.useEffect(() => {
    if (!isOpen) {
      setShowUnfiltered(false)
    }
  }, [isOpen])

  // Determine which sessions to display
  const displaySessions = showUnfiltered ? unfilteredSessions : sessions

  // Filter sessions based on local popup search (only if no global search is active)
  const filterSession = (session: SessionWithLocation) => {
    // Only apply popup search if there's no global search
    if (searchText || !popupSearchText) return true

    const search = popupSearchText.toLowerCase()
    const entry = session.entry

    return (
      entry.speaker?.toLowerCase().includes(search) ||
      entry.affiliation?.toLowerCase().includes(search) ||
      entry.theme?.toLowerCase().includes(search) ||
      entry.eventType?.toLowerCase().includes(search) ||
      entry.speakers?.some((speaker) =>
        speaker.name.toLowerCase().includes(search)
      ) ||
      entry.track?.toLowerCase().includes(search) ||
      session.location?.toLowerCase().includes(search)
    )
  }

  // Group and filter sessions by whether they're general events
  const generalEvents = displaySessions
    .filter((s) => s.entry.isGeneralEvent)
    .filter(filterSession)
  const regularSessions = displaySessions
    .filter((s) => !s.entry.isGeneralEvent)
    .filter(filterSession)

  const totalFilteredSessions = generalEvents.length + regularSessions.length
  const totalSessions = displaySessions.length

  const sessionCountText =
    !searchText && popupSearchText && totalFilteredSessions !== totalSessions
      ? `${totalFilteredSessions} of ${totalSessions} session${totalSessions !== 1 ? 's' : ''}`
      : `${totalSessions} session${totalSessions !== 1 ? 's' : ''}`

  // Show the unfiltered button only if there are filters active and more unfiltered sessions
  const showUnfilteredButton =
    hasActiveFilters && unfilteredSessions.length > sessions.length

  const popupTitle = (
    <span className={classes.popupTitleWithCount}>
      <span className={classes.titleText}>
        Sessions at {time}
        {displaySessions.length > 0 && (
          <span className={classes.sessionCountBadge}>{sessionCountText}</span>
        )}
      </span>
      {showUnfilteredButton && (
        <button
          className={cx(classes.filterPillButton, {
            [classes.filterPillButtonActive]: showUnfiltered,
          })}
          onClick={(e) => {
            e.stopPropagation()
            setShowUnfiltered(!showUnfiltered)
          }}
        >
          Show unfiltered ({unfilteredSessions.length})
        </button>
      )}
    </span>
  )

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title={popupTitle}
      maxWidth="900px"
    >
      <div className={classes.allSessionsPopupContent}>
        {sessions.length === 0 && !showUnfilteredButton ? (
          <div className={classes.noSessionsMessage}>
            <p>No sessions at this time.</p>
          </div>
        ) : (
          <>
            {!searchText && (
              <div className={classes.searchSection}>
                <SearchInput
                  label="Search"
                  value={popupSearchText}
                  onChange={setPopupSearchText}
                  placeholder="Search by title, speaker, track, or location..."
                  debounceMs={200}
                />
              </div>
            )}

            {totalFilteredSessions === 0 ? (
              <div className={classes.noSessionsMessage}>
                <p>No sessions found matching "{popupSearchText}".</p>
              </div>
            ) : (
              <>
                {generalEvents.length > 0 && (
                  <div className={classes.generalEventsSection}>
                    <h3 className={classes.sectionTitle}>General Events</h3>
                    <div className={classes.sessionsGrid}>
                      {generalEvents.map(({ entry }) => (
                        <div
                          key={entry.id}
                          className={cx(
                            classes.sessionItem,
                            classes.generalEventItem
                          )}
                        >
                          <GeneralEventCard
                            entry={entry}
                            searchText={effectiveSearchText}
                            top={0}
                            height={150}
                            visibleColumnsCount={1}
                            pixelsPerMinute={4}
                            isInPopup={true}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {regularSessions.length > 0 && (
                  <div className={classes.regularSessionsSection}>
                    {generalEvents.length > 0 && (
                      <h3 className={classes.sectionTitle}>Regular Sessions</h3>
                    )}
                    <div className={classes.sessionsGrid}>
                      {regularSessions.map(({ entry, location }) => (
                        <div key={entry.id} className={classes.sessionItem}>
                          <div className={classes.sessionLocationLabel}>
                            {location}
                          </div>
                          <SessionCard
                            entry={entry}
                            isSelected={selectedSessions.has(entry.id)}
                            onToggleSelection={onToggleSelection}
                            searchText={effectiveSearchText}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Popup>
  )
}

export default AllSessionsInTimePopup
