import React, { useState, useEffect } from 'react'
import Popup from './Popup'
import Slideshow from './Slideshow'
import './TutorialPopup.css'
import step1Gif from '/tutorial-gifs/step1-select-sessions.gif'
import step2Gif from '/tutorial-gifs/step2-linear-view.gif'
import step3Gif from '/tutorial-gifs/step3-filtering.gif'

const TUTORIAL_DISMISSED_KEY = 'tutorialDismissed'

interface TutorialPopupProps {
  selectedSessionsCount: number
}

const TutorialPopup: React.FC<TutorialPopupProps> = ({
  selectedSessionsCount,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Check if user has sessions or has dismissed the tutorial
    const tutorialDismissed = localStorage.getItem(TUTORIAL_DISMISSED_KEY)

    if (selectedSessionsCount === 0 && !tutorialDismissed) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [selectedSessionsCount])

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(TUTORIAL_DISMISSED_KEY, 'true')
    }
    setIsOpen(false)
  }

  // Don't render any content if popup is not open
  // This prevents loading the GIFs until needed
  if (!isOpen) {
    return null
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={handleClose}
      title="Welcome! Here's how to use the schedule"
      maxWidth="900px"
    >
      <div className="tutorial-popup">
        <Slideshow>
          <div className="tutorial-slide">
            <div className="tutorial-description">
              <h3>Step 1: Select Sessions</h3>
              <p>
                Click on any session to add it to your personal schedule.
                Selected sessions will be highlighted. This will be stored in
                your device's browser data.
              </p>
            </div>
            <img
              src={step1Gif}
              alt="Step 1: Click on sessions to select them for your personal schedule"
            />
          </div>

          <div className="tutorial-slide">
            <div className="tutorial-description">
              <h3>Step 2: Linear View</h3>
              <p>
                Toggle linear view to see all sessions in a continuous timeline,
                making it easier to browse through the schedule.
              </p>
            </div>
            <img
              src={step2Gif}
              alt="Step 2: Switch to linear view to see all sessions in a continuous list"
            />
          </div>

          <div className="tutorial-slide">
            <div className="tutorial-description">
              <h3>Step 3: Filtering</h3>
              <p>
                Use the powerful filters to narrow down sessions by track,
                location, event type, or search for specific speakers and
                topics.
              </p>
            </div>
            <img
              src={step3Gif}
              alt="Step 3: Use filters to find sessions by track, location, or search terms"
            />
          </div>
        </Slideshow>

        <div className="tutorial-footer">
          <label className="tutorial-checkbox">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            <span>Don't show this again</span>
          </label>
          <button className="tutorial-button" onClick={handleClose}>
            Got it!
          </button>
        </div>
      </div>
    </Popup>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(TutorialPopup)
