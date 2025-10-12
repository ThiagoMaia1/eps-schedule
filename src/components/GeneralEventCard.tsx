import React from 'react'
import { type ScheduleEntry } from '../types/schedule'
import { highlightText } from '../utils/textHighlight'
import { useGeneralEventCardStyles } from './GeneralEventCard.styles'
import { theme } from '../styles/theme'
import { useIsMobile } from '../hooks/useIsMobile'

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
  const { classes } = useGeneralEventCardStyles({
    isSpecialEvent: entry.isSpecialEvent ?? false,
    isPopupMode: isInPopup,
    pixelsPerMinute,
    height,
  })
  const isMobile = useIsMobile()

  // Determine what content to display
  const hasEventType = entry.eventType
  const hasTheme = entry.theme
  const hasSpeakers = entry.speakers && entry.speakers.length > 0
  const hasSingleSpeaker = entry.speaker
  const hasLocation = entry.location?.room

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
              top: `${top + 44}px`, // Offset for calendar header
              height: `${height}px`,
              width: `calc(${
                isMobile
                  ? theme.dimensions.colWidthMobile
                  : theme.dimensions.colWidth
              } * ${visibleColumnsCount})`,
            }
      }
    >
      <div className={classes.generalEventContent}>
        <div className={classes.generalEventTextContainer}>
          <div className={classes.generalEventHierarchy}>
            <div className={classes.eventTimeAndLocation}>
              <div className={classes.eventTimeLabel}>
                {entry.startTime} - {entry.endTime}
              </div>
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

            {/* Unified Details Section with Single Border */}
            {(hasTheme || hasSpeakers || hasSingleSpeaker) && (
              <div className={classes.eventDetails}>
                {/* Theme - Secondary Level (if different from event type) */}
                {hasTheme && (
                  <div className={classes.eventTheme}>
                    {highlightText(entry.theme ?? '', searchText)}
                  </div>
                )}

                {/* Speakers - Tertiary Level */}
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
                          <span className={classes.invitedBadge}>
                            Invited Guest
                          </span>
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

            {/* Fallback if no content */}
            {!hasEventType &&
              !hasTheme &&
              !hasSpeakers &&
              !hasSingleSpeaker && (
                <div className={classes.eventType}>
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
