import React from 'react'
import { useTableLabelButtonStyles } from './TableLabelButton.styles'

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
  const { classes, cx } = useTableLabelButtonStyles({ active })

  return (
    <button
      className={cx(classes.tableLabelButton, className)}
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
