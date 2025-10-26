import React from 'react'
import { type ShiftBlock } from '../types/schedule'
import { useTrackCardStyles } from './TrackCard.styles'
import { Tooltip } from 'react-tooltip'
import {
  IoInformationCircleOutline,
  IoCheckboxOutline,
  IoCheckbox,
} from 'react-icons/io5'

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
          top: shift.track ? `${top - trackHeaderHeight}px` : `${top}px`,
          minHeight: shift.track
            ? `${height + trackHeaderHeight}px`
            : `${height}px`,
          left: '5px',
          right: '5px',
        }}
      >
        {/* Track header at the top with info icon */}
        {shift.track && (
          <div className={classes.trackHeader}>
            <div className={classes.trackHeaderContent}>
              <div className={classes.trackText}>
                <span className={classes.trackName}>{shift.track}</span>
                {shift.subtheme && (
                  <span className={classes.trackSubtheme}>
                    {' '}
                    - {shift.subtheme}
                  </span>
                )}
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
        )}
        {/* Session children */}
        {children}
      </div>

      {shift.moderator && shift.moderator.name && (
        <Tooltip
          id={tooltipId}
          className="moderator-tooltip"
          border="1px solid #ffd700"
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '12px',
            borderRadius: '8px',
            maxWidth: '400px',
            width: 'max-content',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            zIndex: 1000,
          }}
        >
          <div className={classes.moderatorTooltipContent}>
            <div className={classes.tooltipTrackTitle}>
              {shift.track}
              {shift.subtheme && ` - ${shift.subtheme}`}
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
        </Tooltip>
      )}

      {sessionIds.length > 0 && onToggleSelection && (
        <Tooltip
          id={selectAllTooltipId}
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '13px',
            zIndex: 1000,
          }}
        >
          <div>
            {areAllSelected
              ? 'Click to deselect all sessions in this track'
              : 'Click to select all sessions in this track'}
          </div>
        </Tooltip>
      )}
    </>
  )
}

export default React.memo(TrackCard)
