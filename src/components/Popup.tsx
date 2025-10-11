import React, { useEffect } from 'react'
import { usePopupStyles } from './Popup.styles'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string | React.ReactNode
  children: React.ReactNode
  maxWidth?: string
  showCloseButton?: boolean
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '600px',
  showCloseButton = true,
}) => {
  const { classes } = usePopupStyles()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={classes.popupOverlay} onClick={onClose}>
      <div
        className={classes.popupContent}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'popup-title' : undefined}
      >
        {(title || showCloseButton) && (
          <div className={classes.popupHeader}>
            {title && (
              <h2 id="popup-title" className={classes.popupTitle}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={classes.popupCloseButton}
                onClick={onClose}
                aria-label="Close popup"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            )}
          </div>
        )}
        <div className={classes.popupBody}>{children}</div>
      </div>
    </div>
  )
}

export default Popup
