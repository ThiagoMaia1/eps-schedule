import React from 'react'
import { type ShiftBlock } from '../types/schedule'
import './TrackCard.css'
import { Tooltip } from 'react-tooltip'
import { IoInformationCircleOutline } from 'react-icons/io5'

interface TrackCardProps {
  shift: ShiftBlock
  top: number
  height: number
  searchText: string
  children?: React.ReactNode
}

const TrackCard: React.FC<TrackCardProps> = ({
  shift,
  top,
  height,
  children,
}) => {
  const tooltipId = `moderator-tooltip-${shift.id}`
  const trackHeaderHeight = 32 // Height of the track header section

  return (
    <>
      {/* Main shift container with yellow border spanning the shift height including track header */}
      <div
        className="shift-moderator-block"
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
          <div className="track-header">
            <div className="track-header-content">
              <div className="track-text">
                <span className="track-name">{shift.track}</span>
                {shift.subtheme && (
                  <span className="track-subtheme"> - {shift.subtheme}</span>
                )}
              </div>
              <IoInformationCircleOutline
                className="track-info-icon"
                data-tooltip-id={tooltipId}
                data-tooltip-place="left"
              />
            </div>
          </div>
        )}
        {/* Session children */}
        {children}
      </div>

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
        <div className="moderator-tooltip-content">
          <div className="tooltip-track-title">
            {shift.track}
            {shift.subtheme && ` - ${shift.subtheme}`}
          </div>
          <div className="tooltip-label">Moderator:</div>
          <div className="tooltip-moderator-name">{shift.moderator.name}</div>
          {shift.moderator.affiliation && (
            <div className="tooltip-moderator-affiliation">
              {shift.moderator.affiliation}
            </div>
          )}
        </div>
      </Tooltip>
    </>
  )
}

export default React.memo(TrackCard)
