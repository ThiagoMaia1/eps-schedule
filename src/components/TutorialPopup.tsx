import React, { useState, useEffect } from 'react'
import Popup from './Popup'
import Slideshow from './Slideshow'
import { useTutorialPopupStyles } from './TutorialPopup.styles'
import { hasAnySelectedSessions } from '../utils/localStorage'
import step1Gif from '/tutorial-gifs/step1-select-sessions.gif'
import step2Gif from '/tutorial-gifs/step2-linear-view.gif'
import step3Gif from '/tutorial-gifs/step3-filtering.gif'

const TUTORIAL_DISMISSED_KEY = 'tutorialDismissed'
const TUTORIAL_DISMISSED_SESSION_KEY = 'tutorialDismissedSession'

interface TutorialPopupProps {
  isSessionsLoaded: boolean
}

const TutorialPopup: React.FC<TutorialPopupProps> = ({ isSessionsLoaded }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)
  const [allSlidesVisited, setAllSlidesVisited] = useState(false)
  const [goToNextSlide, setGoToNextSlide] = useState<(() => void) | null>(null)

  const { classes } = useTutorialPopupStyles()

  useEffect(() => {
    if (!isSessionsLoaded) {
      return
    }

    const tutorialDismissed = localStorage.getItem(TUTORIAL_DISMISSED_KEY)
    const tutorialDismissedSession = sessionStorage.getItem(
      TUTORIAL_DISMISSED_SESSION_KEY
    )

    const hasAnySessions = hasAnySelectedSessions()

    if (!hasAnySessions && !tutorialDismissed && !tutorialDismissedSession) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isSessionsLoaded])

  const handleClose = () => {
    // Don't allow closing if not all slides have been visited
    if (!allSlidesVisited) {
      return
    }

    if (dontShowAgain) {
      // Permanently dismiss (persists across browser sessions)
      localStorage.setItem(TUTORIAL_DISMISSED_KEY, 'true')
    } else {
      // Dismiss only for this session (until browser refresh)
      sessionStorage.setItem(TUTORIAL_DISMISSED_SESSION_KEY, 'true')
    }
    setIsOpen(false)
  }

  const handleButtonClick = () => {
    if (allSlidesVisited) {
      handleClose()
    } else if (goToNextSlide) {
      goToNextSlide()
    }
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
      showCloseButton={allSlidesVisited}
    >
      <div className={classes.tutorialPopup}>
        <Slideshow
          onAllSlidesVisited={setAllSlidesVisited}
          onNextSlideCallback={(goToNext) => setGoToNextSlide(() => goToNext)}
        >
          <div className={classes.tutorialSlide}>
            <div className={classes.tutorialDescription}>
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

          <div className={classes.tutorialSlide}>
            <div className={classes.tutorialDescription}>
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

          <div className={classes.tutorialSlide}>
            <div className={classes.tutorialDescription}>
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

        <div className={classes.tutorialFooter}>
          <label className={classes.tutorialCheckbox}>
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            <span>Don't show this again</span>
          </label>
          <button
            className={classes.tutorialButton}
            onClick={handleButtonClick}
          >
            {allSlidesVisited ? 'Got it!' : 'Next'}
          </button>
        </div>
      </div>
    </Popup>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(TutorialPopup)
