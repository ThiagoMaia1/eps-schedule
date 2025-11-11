import React from 'react'
import { type ShiftBlock } from '../types/schedule'
import { useTrackCardStyles } from './TrackCard.styles'
import {
  IoInformationCircleOutline,
  IoCheckboxOutline,
  IoCheckbox,
} from 'react-icons/io5'
import { TrackTitle } from './TrackTitle'
import { StyledTooltip, SimpleTooltip } from './StyledTooltip'

interface TrackCardProps {
  shift: ShiftBlock
  top: number
  height: number
  searchText: string
  children?: React.ReactNode
  sessionIds?: string[]
  onToggleSelection?: (sessionId: string) => void
  selectedSessions?: Set<string>
}

const TrackCard: React.FC<TrackCardProps> = ({
  shift,
  top,
  height,
  children,
  sessionIds = [],
  onToggleSelection,
  selectedSessions = new Set(),
}) => {
  const tooltipId = `moderator-tooltip-${shift.id}`
  const selectAllTooltipId = `select-all-tooltip-${shift.id}`
  const trackHeaderHeight = 32 // Height of the track header section

  const { classes } = useTrackCardStyles()

  // Check if all sessions in this track are selected
  const areAllSelected =
    sessionIds.length > 0 && sessionIds.every((id) => selectedSessions.has(id))

  const handleSelectAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!onToggleSelection || sessionIds.length === 0) return

    // Toggle all sessions: if all are selected, deselect all; otherwise select all
    sessionIds.forEach((id) => {
      const isSelected = selectedSessions.has(id)
      if (areAllSelected) {
        // Deselect all
        if (isSelected) {
          onToggleSelection(id)
        }
      } else {
        // Select all
        if (!isSelected) {
          onToggleSelection(id)
        }
      }
    })
  }

  return (
    <>
      {/* Main shift container with yellow border spanning the shift height including track header */}
      <div
        className={classes.shiftModeratorBlock}
        style={{
          position: 'absolute',
          top: `${top - trackHeaderHeight}px`,
          minHeight: `${height + trackHeaderHeight}px`,
          left: '5px',
          right: '5px',
        }}
      >
        {/* Track header at the top with info icon */}
        <div className={classes.trackHeader}>
          <div className={classes.trackHeaderContent}>
            <div className={classes.trackText}>
              <TrackTitle
                trackName={shift.trackName}
                subtheme={shift.subtheme}
                moderatorName={shift.moderator?.name}
                className={classes.trackName}
                subthemeClassName={classes.trackSubtheme}
              />
            </div>
            <div className={classes.trackIcons}>
              {sessionIds.length > 0 && onToggleSelection && (
                <>
                  {areAllSelected ? (
                    <IoCheckbox
                      className={classes.trackSelectAllIconActive}
                      onClick={handleSelectAll}
                      data-tooltip-id={selectAllTooltipId}
                      data-tooltip-place="left"
                    />
                  ) : (
                    <IoCheckboxOutline
                      className={classes.trackSelectAllIcon}
                      onClick={handleSelectAll}
                      data-tooltip-id={selectAllTooltipId}
                      data-tooltip-place="left"
                    />
                  )}
                </>
              )}
              {shift.moderator && shift.moderator.name && (
                <IoInformationCircleOutline
                  className={classes.trackInfoIcon}
                  data-tooltip-id={tooltipId}
                  data-tooltip-place="left"
                />
              )}
            </div>
          </div>
        </div>
        {/* Session children */}
        {children}
      </div>

      {shift.moderator && shift.moderator.name && (
        <StyledTooltip id={tooltipId} border="1px solid #ffd700">
          <div className={classes.moderatorTooltipContent}>
            <div className={classes.tooltipTrackTitle}>
              <TrackTitle
                trackName={shift.trackName}
                subtheme={shift.subtheme}
                moderatorName={shift.moderator.name}
              />
            </div>
            <div className={classes.tooltipLabel}>Moderator:</div>
            <div className={classes.tooltipModeratorName}>
              {shift.moderator.name}
            </div>
            {shift.moderator.affiliation && (
              <div className={classes.tooltipModeratorAffiliation}>
                {shift.moderator.affiliation}
              </div>
            )}
          </div>
        </StyledTooltip>
      )}

      {sessionIds.length > 0 && onToggleSelection && (
        <SimpleTooltip
          id={selectAllTooltipId}
          text={
            areAllSelected
              ? 'Click to deselect all sessions in this track'
              : 'Click to select all sessions in this track'
          }
        />
      )}
    </>
  )
}

export default React.memo(TrackCard)
