import React from 'react'
import { Tooltip } from 'react-tooltip'

interface StyledTooltipProps {
  id: string
  children: React.ReactNode
  border?: string
  maxWidth?: string
  place?: 'top' | 'right' | 'bottom' | 'left'
}

/**
 * A reusable styled tooltip component with consistent dark theme styling
 */
export const StyledTooltip: React.FC<StyledTooltipProps> = ({
  id,
  children,
  border,
  maxWidth = '400px',
  place = 'left',
}) => {
  return (
    <Tooltip
      id={id}
      place={place}
      className="styled-tooltip"
      border={border}
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '12px',
        borderRadius: '8px',
        maxWidth,
        width: 'max-content',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        zIndex: 1000,
      }}
    >
      {children}
    </Tooltip>
  )
}

interface SimpleTooltipProps {
  id: string
  text: string
  place?: 'top' | 'right' | 'bottom' | 'left'
}

/**
 * A simple tooltip for short text messages
 */
export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  id,
  text,
  place = 'left',
}) => {
  return (
    <Tooltip
      id={id}
      place={place}
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '13px',
        zIndex: 1000,
      }}
    >
      <div>{text}</div>
    </Tooltip>
  )
}
