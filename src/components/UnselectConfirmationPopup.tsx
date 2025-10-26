import React from 'react'
import Popup from './Popup'
import SessionCard from './SessionCard'
import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'
import { useUnselectConfirmationPopupStyles } from './UnselectConfirmationPopup.styles'

interface UnselectConfirmationPopupProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  sessionDetails: SessionWithLocationExtended | undefined
  searchText?: string
}

const UnselectConfirmationPopup: React.FC<UnselectConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  sessionDetails,
  searchText = '',
}) => {
  const { classes } = useUnselectConfirmationPopupStyles()

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Unselect Session"
      maxWidth="500px"
    >
      <div className={classes.content}>
        <p className={classes.message}>
          Are you sure you want to unselect this session?
        </p>

        {sessionDetails && (
          <div className={classes.sessionPreview}>
            <SessionCard
              entry={sessionDetails.entry}
              isSelected={true}
              onToggleSelection={() => {}} // No-op since this is just for display
              searchText={searchText}
              location={sessionDetails.location}
              moderator={sessionDetails.entry.moderator}
            />
          </div>
        )}

        <div className={classes.buttonGroup}>
          <button className={classes.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={classes.unselectButton} onClick={onConfirm}>
            Unselect
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default UnselectConfirmationPopup
