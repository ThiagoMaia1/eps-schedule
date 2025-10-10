import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { type ScheduleData } from '../types/schedule'
import {
  getSelectedSessions,
  toggleSessionSelection,
  setSelectedSessions,
} from '../utils/localStorage'
import { useQueryParams } from './useQueryParams'

// Extract all unique locations from the schedule data
const getAllLocations = (scheduleData: ScheduleData[]): string[] => {
  const locationsSet = new Set<string>()
  scheduleData.forEach((day) => {
    day.locations.forEach((location) => locationsSet.add(location))
  })
  return Array.from(locationsSet)
}

// Extract all unique tracks from the schedule data
const getAllTracks = (scheduleData: ScheduleData[]): string[] => {
  const tracksSet = new Set<string>()
  scheduleData.forEach((day) => {
    day.timeSlots.forEach((timeSlot) => {
      Object.values(timeSlot.sessions).forEach((sessions) => {
        sessions.forEach((session) => {
          if (session.track) {
            tracksSet.add(session.track)
          }
        })
      })
    })
  })
  return Array.from(tracksSet).sort()
}

// Helper to convert string to boolean
const stringToBoolean = (value: string | undefined): boolean => {
  return value === 'true'
}

// Query param types
interface FilterQueryParams extends Record<string, string> {
  location: string
  track: string
  search: string
  selected: string
  eps: string
  ets: string
  copley: string
  sheraton: string
  general: string
  hideGeneral: string
  hideSpecial: string
  linear: string
}

export const useScheduleFilters = (scheduleData: ScheduleData[]) => {
  // Query params state
  const [queryParams, setQueryParams] = useQueryParams<FilterQueryParams>()

  // Selected sessions (not in query params, stored in localStorage)
  const [selectedSessions, setSelectedSessionsState] = useState<Set<string>>(
    new Set()
  )
  const [isSessionsLoaded, setIsSessionsLoaded] = useState<boolean>(false)

  // Undo/Redo history
  const [history, setHistory] = useState<Set<string>[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const isUndoRedoAction = useRef<boolean>(false)

  // Get all valid session IDs from schedule data
  const getAllValidSessionIds = useMemo(() => {
    const sessionIds = new Set<string>()
    scheduleData.forEach((day) => {
      day.timeSlots.forEach((timeSlot) => {
        Object.values(timeSlot.sessions).forEach((sessions) => {
          sessions.forEach((session) => {
            sessionIds.add(session.id)
          })
        })
      })
    })
    return sessionIds
  }, [scheduleData])

  // Derive filter states from query params
  const activeLocation = queryParams.location || null
  const activeTrack = queryParams.track || null
  const searchText = queryParams.search || ''
  const showOnlySelected = stringToBoolean(queryParams.selected)
  const showOnlyEPS = stringToBoolean(queryParams.eps)
  const showOnlyETS = stringToBoolean(queryParams.ets)
  const showOnlyCopleyPlace = stringToBoolean(queryParams.copley)
  const showOnlySheraton = stringToBoolean(queryParams.sheraton)
  const showOnlyGeneralEvents = stringToBoolean(queryParams.general)
  const hideGeneralEvents = stringToBoolean(queryParams.hideGeneral)
  // hideSpecialEvents defaults to true when not set, only false when explicitly set to 'false'
  const hideSpecialEvents = queryParams.hideSpecial === 'false' ? false : true
  const linearView = stringToBoolean(queryParams.linear)

  // Load selected sessions from localStorage on mount and clean up invalid ones
  useEffect(() => {
    const selected = getSelectedSessions()

    // Filter out any invalid session IDs
    const validSelected = new Set(
      Array.from(selected).filter((sessionId) =>
        getAllValidSessionIds.has(sessionId)
      )
    )

    // If we removed any invalid sessions, update localStorage
    if (validSelected.size !== selected.size) {
      console.log(
        `Cleaned up ${selected.size - validSelected.size} invalid session(s) from storage`
      )
      setSelectedSessions(validSelected)
    }

    setSelectedSessionsState(validSelected)
    // Initialize history with the cleaned state
    setHistory([validSelected])
    setHistoryIndex(0)
    // Mark sessions as loaded
    setIsSessionsLoaded(true)
  }, [getAllValidSessionIds])

  // Ensure linear view is only active when showing selected sessions
  useEffect(() => {
    if (linearView && !showOnlySelected) {
      // If linear view is on but selected sessions filter is off, turn off linear view
      setQueryParams((prev) => {
        const newParams = { ...prev }
        delete newParams.linear
        return newParams
      })
    }
  }, [linearView, showOnlySelected, setQueryParams])

  // Extract locations and tracks from schedule data
  const allLocations = getAllLocations(scheduleData)
  const allTracks = getAllTracks(scheduleData)

  // Setters that update query params
  const setActiveLocation = useCallback(
    (location: string | null) => {
      setQueryParams((prev) => {
        const newParams = { ...prev }
        if (location) {
          newParams.location = location
        } else {
          delete newParams.location
        }
        return newParams
      })
    },
    [setQueryParams]
  )

  const setActiveTrack = useCallback(
    (track: string | null) => {
      setQueryParams((prev) => {
        const newParams = { ...prev }
        if (track) {
          newParams.track = track
        } else {
          delete newParams.track
        }
        return newParams
      })
    },
    [setQueryParams]
  )

  const setSearchText = useCallback(
    (search: string) => {
      setQueryParams((prev) => {
        const newParams = { ...prev }
        if (search) {
          newParams.search = search
        } else {
          delete newParams.search
        }
        return newParams
      })
    },
    [setQueryParams]
  )

  // Toggle handlers that update query params
  const handleToggleSelected = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showOnlySelected) {
        newParams.selected = 'true'
        // Automatically enable linear view when showing selected sessions
        newParams.linear = 'true'
      } else {
        delete newParams.selected
        // Automatically disable linear view when turning off selected
        delete newParams.linear
      }
      return newParams
    })
  }, [showOnlySelected, setQueryParams])

  const handleToggleEPS = useCallback(() => {
    const newValue = !showOnlyEPS
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.eps = 'true'
        delete newParams.ets // If enabling EPS, disable ETS
      } else {
        delete newParams.eps
      }
      return newParams
    })
  }, [showOnlyEPS, setQueryParams])

  const handleToggleETS = useCallback(() => {
    const newValue = !showOnlyETS
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.ets = 'true'
        delete newParams.eps // If enabling ETS, disable EPS
      } else {
        delete newParams.ets
      }
      return newParams
    })
  }, [showOnlyETS, setQueryParams])

  const handleToggleCopleyPlace = useCallback(() => {
    const newValue = !showOnlyCopleyPlace
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.copley = 'true'
        delete newParams.sheraton // If enabling Copley Place, disable Sheraton
      } else {
        delete newParams.copley
      }
      return newParams
    })
  }, [showOnlyCopleyPlace, setQueryParams])

  const handleToggleSheraton = useCallback(() => {
    const newValue = !showOnlySheraton
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.sheraton = 'true'
        delete newParams.copley // If enabling Sheraton, disable Copley Place
      } else {
        delete newParams.sheraton
      }
      return newParams
    })
  }, [showOnlySheraton, setQueryParams])

  const handleToggleGeneralEvents = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showOnlyGeneralEvents) {
        newParams.general = 'true'
      } else {
        delete newParams.general
      }
      return newParams
    })
  }, [showOnlyGeneralEvents, setQueryParams])

  const handleToggleHideGeneralEvents = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!hideGeneralEvents) {
        newParams.hideGeneral = 'true'
      } else {
        delete newParams.hideGeneral
      }
      return newParams
    })
  }, [hideGeneralEvents, setQueryParams])

  const handleToggleHideSpecialEvents = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!hideSpecialEvents) {
        // Turning on hide (default state) - remove param
        delete newParams.hideSpecial
      } else {
        // Turning off hide (show special events) - explicitly set to 'false'
        newParams.hideSpecial = 'false'
      }
      return newParams
    })
  }, [hideSpecialEvents, setQueryParams])

  const handleToggleLinearView = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!linearView) {
        newParams.linear = 'true'
      } else {
        delete newParams.linear
      }
      return newParams
    })
  }, [linearView, setQueryParams])

  const handleToggleSessionSelection = useCallback(
    (sessionId: string) => {
      // Skip history update if this is an undo/redo action
      if (isUndoRedoAction.current) {
        return
      }

      const updated = toggleSessionSelection(sessionId)
      setSelectedSessionsState(new Set(updated))

      // Add to history
      setHistory((prevHistory) => {
        // Remove any future history if we're not at the end
        const newHistory = prevHistory.slice(0, historyIndex + 1)
        // Add the new state
        newHistory.push(new Set(updated))
        return newHistory
      })
      setHistoryIndex((prev) => prev + 1)
    },
    [historyIndex]
  )

  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      const previousState = history[newIndex]

      isUndoRedoAction.current = true
      setSelectedSessions(previousState)
      setSelectedSessionsState(new Set(previousState))
      setHistoryIndex(newIndex)

      // Reset flag after a brief delay
      setTimeout(() => {
        isUndoRedoAction.current = false
      }, 0)
    }
  }, [historyIndex, history])

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      const nextState = history[newIndex]

      isUndoRedoAction.current = true
      setSelectedSessions(nextState)
      setSelectedSessionsState(new Set(nextState))
      setHistoryIndex(newIndex)

      // Reset flag after a brief delay
      setTimeout(() => {
        isUndoRedoAction.current = false
      }, 0)
    }
  }, [historyIndex, history])

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+Z or Cmd+Z for undo
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === 'z' &&
        !event.shiftKey
      ) {
        event.preventDefault()
        handleUndo()
      }
      // Ctrl+Shift+Z or Cmd+Shift+Z for redo
      else if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === 'z'
      ) {
        event.preventDefault()
        handleRedo()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleUndo, handleRedo])

  // Copy selected sessions to clipboard
  const handleCopySelectedSessions = useCallback(async () => {
    try {
      const sessionsArray = Array.from(selectedSessions)
      const data = JSON.stringify(sessionsArray)
      await navigator.clipboard.writeText(data)
      return { success: true, count: sessionsArray.length }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      return { success: false, count: 0 }
    }
  }, [selectedSessions])

  // Import validated sessions (to be called after validation)
  const handleImportValidatedSessions = useCallback(
    async (validSessions: string[], allValidSessionIds: Set<string>) => {
      try {
        // Filter existing sessions to remove any invalid ones
        const validExistingSessions = Array.from(selectedSessions).filter(
          (sessionId) => allValidSessionIds.has(sessionId)
        )

        // Merge cleaned existing sessions with new valid imported sessions and deduplicate
        const mergedSessions = new Set([
          ...validExistingSessions,
          ...validSessions,
        ])

        // Count how many sessions we're actually importing (new ones only)
        const newSessionsCount = validSessions.filter(
          (id) => !selectedSessions.has(id)
        ).length

        setSelectedSessions(mergedSessions)
        setSelectedSessionsState(mergedSessions)

        // Add to history
        setHistory((prevHistory) => {
          const newHistory = prevHistory.slice(0, historyIndex + 1)
          newHistory.push(new Set(mergedSessions))
          return newHistory
        })
        setHistoryIndex((prev) => prev + 1)

        return { success: true, count: newSessionsCount }
      } catch (error) {
        console.error('Failed to import sessions:', error)
        return { success: false, count: 0 }
      }
    },
    [historyIndex, selectedSessions]
  )

  return {
    // Filter states
    activeLocation,
    activeTrack,
    searchText,
    showOnlySelected,
    showOnlyEPS,
    showOnlyETS,
    showOnlyCopleyPlace,
    showOnlySheraton,
    showOnlyGeneralEvents,
    hideGeneralEvents,
    hideSpecialEvents,
    linearView,
    selectedSessions,
    isSessionsLoaded,

    // Setters
    setActiveLocation,
    setActiveTrack,
    setSearchText,

    // Computed values
    allLocations,
    allTracks,

    // Toggle handlers
    handleToggleSelected,
    handleToggleEPS,
    handleToggleETS,
    handleToggleCopleyPlace,
    handleToggleSheraton,
    handleToggleGeneralEvents,
    handleToggleHideGeneralEvents,
    handleToggleHideSpecialEvents,
    handleToggleLinearView,
    handleToggleSessionSelection,

    // Import/Export handlers
    handleCopySelectedSessions,
    handleImportValidatedSessions,
  }
}
