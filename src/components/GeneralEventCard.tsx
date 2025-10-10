import React from 'react'
import { type ScheduleEntry } from '../types/schedule'
import { highlightText } from '../utils/textHighlight'
import './GeneralEventCard.css'

interface GeneralEventCardProps {
  entry: ScheduleEntry
  searchText: string
  top: number
  height: number
  visibleColumnsCount: number
  isInPopup?: boolean
}

const GeneralEventCard: React.FC<GeneralEventCardProps> = ({
  entry,
  searchText,
  top,
  height,
  visibleColumnsCount,
  isInPopup = false,
}) => {
  // Determine what content to display
  const hasEventType = entry.eventType
  const hasTheme = entry.theme
  const hasSpeakers = entry.speakers && entry.speakers.length > 0
  const hasSingleSpeaker = entry.speaker

  return (
    <div
      className={`general-event-banner ${entry.isSpecialEvent ? 'special-event' : ''} ${isInPopup ? 'popup-mode' : ''}`}
      style={
        isInPopup
          ? {}
          : {
              position: 'absolute',
              top: `${top + 44}px`, // Offset for calendar header
              height: `${height}px`,
              left: 'var(--time-col-width)',
              width: `calc(var(--col-width) * ${visibleColumnsCount})`,
              zIndex: 10,
            }
      }
    >
      <div className="general-event-content">
        <div className="general-event-text-container">
          <div className="general-event-hierarchy">
            <div className="event-time-label">
              {entry.startTime} - {entry.endTime}
            </div>

            {hasEventType && (
              <div className="event-type">
                {highlightText(entry.eventType ?? '', searchText)}
              </div>
            )}

            {/* Unified Details Section with Single Border */}
            {(hasTheme || hasSpeakers || hasSingleSpeaker) && (
              <div className="event-details">
                {/* Theme - Secondary Level (if different from event type) */}
                {hasTheme && (
                  <div className="event-theme">
                    {highlightText(entry.theme ?? '', searchText)}
                  </div>
                )}

                {/* Speakers - Tertiary Level */}
                {hasSpeakers ? (
                  <div className="event-speakers">
                    {entry.speakers!.map((speaker, index) => (
                      <div key={index} className="speaker-item">
                        <span className="speaker-name">
                          {highlightText(speaker.name, searchText)}
                          {speaker.isInvitedGuest && (
                            <span className="invited-badge">Invited Guest</span>
                          )}
                        </span>
                        {speaker.affiliation && (
                          <span className="speaker-affiliation">
                            {highlightText(speaker.affiliation, searchText)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : hasSingleSpeaker ? (
                  <div className="event-speakers">
                    <div className="speaker-item">
                      <span className="speaker-name">
                        {highlightText(entry.speaker!, searchText)}
                        {entry.isInvitedGuest && (
                          <span className="invited-badge">Invited Guest</span>
                        )}
                      </span>
                      {entry.affiliation && (
                        <span className="speaker-affiliation">
                          {highlightText(entry.affiliation, searchText)}
                        </span>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {/* Fallback if no content */}
            {!hasEventType &&
              !hasTheme &&
              !hasSpeakers &&
              !hasSingleSpeaker && (
                <div className="event-type">
                  {highlightText('General Event', searchText)}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(GeneralEventCard)
