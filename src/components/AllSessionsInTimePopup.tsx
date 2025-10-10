import React from 'react'
import Popup from './Popup'
import SessionCard from './SessionCard'
import GeneralEventCard from './GeneralEventCard'
import { type ScheduleEntry } from '../types/schedule'
import './AllSessionsInTimePopup.css'

interface SessionWithLocation {
  entry: ScheduleEntry
  location: string
}

interface AllSessionsInTimePopupProps {
  isOpen: boolean
  onClose: () => void
  time: string
  sessions: SessionWithLocation[]
  selectedSessions: Set<string>
  onToggleSelection: (sessionId: string) => void
  searchText: string
}

const AllSessionsInTimePopup: React.FC<AllSessionsInTimePopupProps> = ({
  isOpen,
  onClose,
  time,
  sessions,
  selectedSessions,
  onToggleSelection,
  searchText,
}) => {
  // Group sessions by whether they're general events
  const generalEvents = sessions.filter((s) => s.entry.isGeneralEvent)
  const regularSessions = sessions.filter((s) => !s.entry.isGeneralEvent)

  const sessionCountText =
    generalEvents.length > 0 && regularSessions.length > 0
      ? `${generalEvents.length + regularSessions.length} sessions`
      : `${sessions.length} session${sessions.length !== 1 ? 's' : ''}`

  const popupTitle = (
    <span className="popup-title-with-count">
      Sessions at {time}
      {sessions.length > 0 && (
        <span className="session-count-badge">{sessionCountText}</span>
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
      <div className="all-sessions-popup-content">
        {sessions.length === 0 ? (
          <div className="no-sessions-message">
            <p>No sessions at this time.</p>
          </div>
        ) : (
          <>
            {generalEvents.length > 0 && (
              <div className="general-events-section">
                <h3 className="section-title">General Events</h3>
                <div className="sessions-grid">
                  {generalEvents.map(({ entry }) => (
                    <div
                      key={entry.id}
                      className="session-item general-event-item"
                    >
                      <GeneralEventCard
                        entry={entry}
                        searchText={searchText}
                        top={0}
                        height={0}
                        visibleColumnsCount={1}
                        isInPopup={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {regularSessions.length > 0 && (
              <div className="regular-sessions-section">
                {generalEvents.length > 0 && (
                  <h3 className="section-title">Regular Sessions</h3>
                )}
                <div className="sessions-grid">
                  {regularSessions.map(({ entry, location }) => (
                    <div key={entry.id} className="session-item">
                      <div className="session-location-label">{location}</div>
                      <SessionCard
                        entry={entry}
                        isSelected={selectedSessions.has(entry.id)}
                        onToggleSelection={onToggleSelection}
                        searchText={searchText}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Popup>
  )
}

export default AllSessionsInTimePopup
