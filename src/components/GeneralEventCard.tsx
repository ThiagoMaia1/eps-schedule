import React from 'react'
import { type ScheduleEntry } from '../types/schedule'
import { highlightText } from '../utils/textHighlight'
import { useGeneralEventCardStyles } from './GeneralEventCard.styles'
import { theme } from '../styles/theme'
import { useIsMobile } from '../hooks/useIsMobile'
import { shouldFadeEvent } from '../utils/eventHelpers'

// Controls how many content blocks to show per column width
// Higher values = more repetitions (denser)
// Lower values = fewer repetitions (sparser)
const CONTENT_REPETITION_DENSITY = 0.3

interface GeneralEventContentProps {
  entry: ScheduleEntry
  searchText: string
  classes: ReturnType<typeof useGeneralEventCardStyles>['classes']
  isFirst?: boolean
}

const GeneralEventContent: React.FC<GeneralEventContentProps> = ({
  entry,
  searchText,
  classes,
}) => {
  const hasEventType = entry.eventType
  const hasTheme = entry.theme
  const hasSpeakers = entry.speakers && entry.speakers.length > 0
  const hasSingleSpeaker = entry.speaker
  const hasLocation = entry.location?.room
  const isCancelled = entry.isCancelled || false
  const isMoved = !!(entry.originalEventIfMoved && !entry.isCancelled)

  return (
    <div className={classes.generalEventHierarchy}>
      <div className={classes.eventTimeAndLocation}>
        <div className={classes.eventTimeLabel}>
          {entry.startTime} - {entry.endTime}
        </div>
        {isCancelled && (
          <span className={`${classes.statusBadge} ${classes.cancelledBadge}`}>
            Cancelled
          </span>
        )}
        {isMoved && entry.originalEventIfMoved && (
          <span
            className={`${classes.statusBadge} ${classes.movedBadge}`}
            title={`Originally: ${entry.originalEventIfMoved.date}, ${entry.originalEventIfMoved.startTime} - ${entry.originalEventIfMoved.endTime}${entry.originalEventIfMoved.location ? ` at ${entry.originalEventIfMoved.location.hotel} - ${entry.originalEventIfMoved.location.room}` : ''}`}
          >
            Moved
          </span>
        )}
        {hasLocation && (
          <div className={classes.eventLocationLabel}>
            {entry.location?.hotel} - {entry.location?.floor} Floor:{' '}
            {entry.location?.room}
          </div>
        )}
      </div>

      {hasEventType && (
        <div className={classes.eventType}>
          {highlightText(entry.eventType ?? '', searchText)}
        </div>
      )}

      {(hasTheme || hasSpeakers || hasSingleSpeaker) && (
        <div className={classes.eventDetails}>
          {hasTheme && (
            <div className={classes.eventTheme}>
              {highlightText(entry.theme ?? '', searchText)}
            </div>
          )}

          {hasSpeakers ? (
            <div className={classes.eventSpeakers}>
              {entry.speakers!.map((speaker, index) => (
                <div key={index} className={classes.speakerItem}>
                  <span className={classes.speakerName}>
                    {highlightText(speaker.name, searchText)}
                    {speaker.isInvitedGuest && (
                      <span className={classes.invitedBadge}>
                        Invited Guest
                      </span>
                    )}
                  </span>
                  {speaker.affiliation && (
                    <span className={classes.speakerAffiliation}>
                      {highlightText(speaker.affiliation, searchText)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : hasSingleSpeaker ? (
            <div className={classes.eventSpeakers}>
              <div className={classes.speakerItem}>
                <span className={classes.speakerName}>
                  {highlightText(entry.speaker!, searchText)}
                  {entry.isInvitedGuest && (
                    <span className={classes.invitedBadge}>Invited Guest</span>
                  )}
                </span>
                {entry.affiliation && (
                  <span className={classes.speakerAffiliation}>
                    {highlightText(entry.affiliation, searchText)}
                  </span>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {!hasEventType && !hasTheme && !hasSpeakers && !hasSingleSpeaker && (
        <div className={classes.eventType}>
          {highlightText('General Event', searchText)}
        </div>
      )}
    </div>
  )
}

interface GeneralEventCardProps {
  entry: ScheduleEntry
  searchText: string
  top: number
  height: number
  visibleColumnsCount: number
  pixelsPerMinute?: number
  isInPopup?: boolean
}

const GeneralEventCard: React.FC<GeneralEventCardProps> = ({
  entry,
  searchText,
  top,
  height,
  visibleColumnsCount,
  pixelsPerMinute = 4,
  isInPopup = false,
}) => {
  const isMoved = !!(entry.originalEventIfMoved && !entry.isCancelled)
  const shouldFade = shouldFadeEvent(entry)

  const { classes } = useGeneralEventCardStyles({
    isSpecialEvent: entry.isSpecialEvent ?? false,
    isPopupMode: isInPopup,
    pixelsPerMinute,
    height,
    isMoved,
    shouldFade,
  })
  const isMobile = useIsMobile()

  // Calculate number of repeats based on density and visible columns
  const numRepeats = isInPopup
    ? 1
    : Math.max(1, visibleColumnsCount * CONTENT_REPETITION_DENSITY)

  const colWidth = isMobile
    ? theme.dimensions.colWidthMobile
    : theme.dimensions.colWidth

  return (
    <div
      className={classes.generalEventBanner}
      style={
        isInPopup
          ? {
              width: '100%',
            }
          : {
              position: 'absolute',
              top: `${top + 44}px`,
              height: `${height}px`,
              width: `calc(${colWidth} * ${visibleColumnsCount})`,
            }
      }
    >
      <div className={classes.generalEventContent}>
        <div className={classes.generalEventTextContainer}>
          {Array.from({ length: numRepeats }, (_, i) => (
            <GeneralEventContent
              key={i}
              entry={entry}
              searchText={searchText}
              classes={classes}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(GeneralEventCard)
