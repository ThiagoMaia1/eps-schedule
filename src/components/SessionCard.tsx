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

  const { classes, cx } = useSessionCardStyles({
    isSelected,
    classificationColor,
    isPanelOrQA: entry.isPanelOrQA || false,
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
