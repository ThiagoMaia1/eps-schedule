import React from 'react'
import { type ScheduleEntry } from '../types/schedule'
import { highlightText } from '../utils/textHighlight'
import { useSessionCardStyles } from './SessionCard.styles'
import { getEventData } from '../sessionData'

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

// Helper function to check if an event is in the past
const isEventPast = (entry: ScheduleEntry): boolean => {
  if (!entry.date || !entry.endTime) return false

  try {
    const now = new Date()
    const currentYear = now.getFullYear()

    // Parse the date (e.g., "October 20th" -> Date)
    const dateStr = entry.date.replace(/(\d+)(st|nd|rd|th)/, '$1')
    const eventDate = new Date(`${dateStr}, ${currentYear} ${entry.endTime}`)

    return eventDate < now
  } catch {
    return false
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
  // Get classification color from event data
  const eventData = getEventData()
  const classificationColor = entry.primaryClassification
    ? eventData.classificationColors?.[entry.primaryClassification]
    : undefined

  const isPast = isEventPast(entry)
  const isCancelled = entry.isCancelled || false
  const isMoved = !!(entry.originalEventIfMoved && !entry.isCancelled)

  const { classes, cx } = useSessionCardStyles({
    isSelected,
    classificationColor,
    isPanelOrQA: entry.isPanelOrQA || false,
    isCancelled,
    isMoved,
    isPast,
  })

  const handleClick = () => {
    onToggleSelection(entry.id)
  }

  const isResponse = entry.theme === 'Response'

  return (
    <div className={classes.cell} onClick={handleClick}>
      <div className={classes.sessionTime}>
        {entry.startTime} - {entry.endTime}
      </div>
      {isCancelled && (
        <span className={cx(classes.sessionTag, classes.cancelledTag)}>
          Cancelled
        </span>
      )}
      {isMoved && entry.originalEventIfMoved && (
        <span
          className={cx(classes.sessionTag, classes.movedTag)}
          title={`Originally: ${entry.originalEventIfMoved.date}, ${entry.originalEventIfMoved.startTime} - ${entry.originalEventIfMoved.endTime}${entry.originalEventIfMoved.location ? ` at ${entry.originalEventIfMoved.location.hotel} - ${entry.originalEventIfMoved.location.room}` : ''}`}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
        >
          Moved
        </span>
      )}
      {(entry.isPanelDiscussion || entry.isQAndA || isResponse) && (
        <div className={classes.speaker}>
          {entry.isPanelDiscussion && entry.isQAndA ? (
            <span
              className={cx(classes.sessionTag, classes.panelDiscussionTag)}
            >
              Panel Discussion & Q&A
            </span>
          ) : (
            <>
              {entry.isPanelDiscussion && (
                <span
                  className={cx(classes.sessionTag, classes.panelDiscussionTag)}
                >
                  Panel Discussion
                </span>
              )}
              {entry.isQAndA && (
                <span
                  className={cx(classes.sessionTag, classes.panelDiscussionTag)}
                >
                  Q&A
                </span>
              )}
            </>
          )}
          {isResponse && (
            <span
              className={cx(classes.sessionTag, classes.panelDiscussionTag)}
            >
              Response
            </span>
          )}
        </div>
      )}
      {entry.speaker && (
        <div className={classes.speaker}>
          {highlightText(entry.speaker, searchText)}
          {entry.isInvitedGuest && (
            <>
              {' '}
              <span className={cx(classes.sessionTag, classes.invitedGuestTag)}>
                Invited Guest
              </span>
            </>
          )}
        </div>
      )}
      {entry.affiliation && (
        <div className={classes.affiliation}>
          {highlightText(entry.affiliation, searchText)}
        </div>
      )}
      {entry.speakers && entry.speakers.length > 0 && (
        <>
          {entry.speakers.map((speaker, index) => (
            <React.Fragment key={index}>
              <div className={classes.speaker}>
                {highlightText(speaker.name, searchText)}
                {speaker.isInvitedGuest && (
                  <span
                    className={cx(classes.sessionTag, classes.invitedGuestTag)}
                  >
                    Invited Guest
                  </span>
                )}
              </div>
              {speaker.affiliation && (
                <div className={classes.affiliation}>
                  {highlightText(speaker.affiliation, searchText)}
                </div>
              )}
            </React.Fragment>
          ))}
        </>
      )}
      {location && <div className={classes.location}>{location}</div>}
      {entry.theme && !isResponse && (
        <div className={classes.theme}>
          {highlightText(entry.theme, searchText)}
        </div>
      )}
      {shouldShowTrack && entry.track && (
        <div className={classes.track}>
          {highlightText(entry.track, searchText)}
        </div>
      )}
      {moderator && (
        <div className={classes.speaker}>
          <span className={cx(classes.sessionTag, classes.moderatorTag)}>
            Moderator
          </span>
          <span> </span>
          {highlightText(moderator.name, searchText)}
        </div>
      )}
    </div>
  )
}

export default React.memo(SessionCard)
