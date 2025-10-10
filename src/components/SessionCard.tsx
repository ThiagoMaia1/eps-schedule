import React from 'react'
import { type ScheduleEntry } from '../types/schedule'
import { highlightText } from '../utils/textHighlight'
import './SessionCard.css'

interface SessionCardProps {
  entry: ScheduleEntry
  isSelected: boolean
  onToggleSelection: (sessionId: string) => void
  searchText?: string
  location?: string
  shouldShowTrack?: boolean
  moderator?: {
    name: string
    affiliation?: string
  }
}

const SessionCard: React.FC<SessionCardProps> = ({
  entry,
  isSelected,
  onToggleSelection,
  searchText = '',
  location,
  shouldShowTrack = true,
  moderator,
}) => {
  const handleClick = () => {
    onToggleSelection(entry.id)
  }

  const isResponse = entry.theme === 'Response'

  return (
    <div
      className={`cell ${isSelected ? 'recommended' : ''} ${
        entry.isEPS ? 'eps' : ''
      } ${entry.isPanelOrQA ? 'panel-or-qa' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="session-time">
        {entry.startTime} - {entry.endTime}
      </div>
      {(entry.isPanelDiscussion || entry.isQAndA || isResponse) && (
        <div className="speaker">
          {entry.isPanelDiscussion && (
            <span className="session-tag panel-discussion-tag">
              Panel Discussion
            </span>
          )}
          {entry.isQAndA && (
            <span className="session-tag panel-discussion-tag">Q&A</span>
          )}
          {isResponse && (
            <span className="session-tag panel-discussion-tag">Response</span>
          )}
        </div>
      )}
      {entry.speaker && (
        <div className="speaker">
          {highlightText(entry.speaker, searchText)}
          {entry.isInvitedGuest && (
            <span className="session-tag invited-guest-tag">Invited Guest</span>
          )}
        </div>
      )}
      {entry.affiliation && (
        <div className="affiliation">
          {highlightText(entry.affiliation, searchText)}
        </div>
      )}
      {entry.speakers && entry.speakers.length > 0 && (
        <>
          {entry.speakers.map((speaker, index) => (
            <React.Fragment key={index}>
              <div className="speaker">
                {highlightText(speaker.name, searchText)}
                {speaker.isInvitedGuest && (
                  <span className="session-tag invited-guest-tag">
                    Invited Guest
                  </span>
                )}
              </div>
              {speaker.affiliation && (
                <div className="affiliation">
                  {highlightText(speaker.affiliation, searchText)}
                </div>
              )}
            </React.Fragment>
          ))}
        </>
      )}
      {location && <div className="location">{location}</div>}
      {entry.theme && !isResponse && (
        <div className="theme">{highlightText(entry.theme, searchText)}</div>
      )}
      {shouldShowTrack && entry.track && (
        <div className="track">{highlightText(entry.track, searchText)}</div>
      )}
      {moderator && (
        <div className="moderator-info">
          <div className="moderator-label">Moderator:</div>
          <div className="moderator-name">
            {highlightText(moderator.name, searchText)}
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(SessionCard)
