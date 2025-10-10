import React from 'react'
import './TableLabelButton.css'

interface TableLabelButtonProps {
  children: React.ReactNode
  onClick: () => void
  title?: string
  'aria-label'?: string
  className?: string
  style?: React.CSSProperties
  active?: boolean
}

const TableLabelButton: React.FC<TableLabelButtonProps> = ({
  children,
  onClick,
  title,
  'aria-label': ariaLabel,
  className = '',
  style,
  active = false,
}) => {
  return (
    <button
      className={`table-label-button ${className} ${active ? 'active' : ''}`}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </button>
  )
}

export default React.memo(TableLabelButton)
