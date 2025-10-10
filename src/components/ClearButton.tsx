import React from 'react'
import './ClearButton.css'

interface ClearButtonProps {
  onClick: () => void
  ariaLabel?: string
}

const ClearButton: React.FC<ClearButtonProps> = ({
  onClick,
  ariaLabel = 'Clear',
}) => {
  return (
    <button
      className="clear-button"
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  )
}

export default ClearButton
