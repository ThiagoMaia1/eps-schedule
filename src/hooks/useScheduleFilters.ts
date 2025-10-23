import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { type ScheduleData } from '../types/schedule'
import {
  getSelectedSessions,
  toggleSessionSelection,
  setSelectedSessions,
  getAllSelectedSessionsAcrossEvents,
  saveSelectedSessions,
} from '../utils/localStorage'
import { trackSessionsImport, trackSessionsExport } from '../utils/analytics'
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

// Extract all unique venues from the schedule data (from hotel field in locations)
const getAllVenues = (scheduleData: ScheduleData[]): string[] => {
  const venuesSet = new Set<string>()
  scheduleData.forEach((day) => {
    day.timeSlots.forEach((timeSlot) => {
      Object.values(timeSlot.sessions).forEach((sessions) => {
        sessions.forEach((session) => {
          if (session.location?.hotel) {
            venuesSet.add(session.location.hotel)
          }
        })
      })
    })
  })
  return Array.from(venuesSet).sort()
}

// Extract all unique special classifications from the schedule data
const getAllClassifications = (scheduleData: ScheduleData[]): string[] => {
  const classificationsSet = new Set<string>()
  scheduleData.forEach((day) => {
    day.timeSlots.forEach((timeSlot) => {
      Object.values(timeSlot.sessions).forEach((sessions) => {
        sessions.forEach((session) => {
          if (session.primaryClassification) {
            classificationsSet.add(session.primaryClassification)
          }
        })
      })
    })
  })
  return Array.from(classificationsSet).sort()
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
  venue: string
  classification: string
  general: string
  hideGeneral: string
  hideSpecial: string
  linear: string
  generalInColumns: string
  panelQA: string
  invitedGuest: string
  showCancelled: string
}

export const useScheduleFilters = (
  scheduleData: ScheduleData[],
  config?: { hideSpecialEventsByDefault?: boolean },
  eventPath?: string
) => {
  // Query params state
  const [queryParams, setQueryParams] = useQueryParams<FilterQueryParams>()

  // Use event path for localStorage (default to '/' if not provided)
  const storageEventPath = eventPath || '/'

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

    // For testing: merge in mock session IDs if provided
    if (typeof window !== 'undefined' && window.__TEST_MOCK_SESSION_IDS) {
      const mockIds = window.__TEST_MOCK_SESSION_IDS
      mockIds.forEach((id) => sessionIds.add(id))
    }

    return sessionIds
  }, [scheduleData])

  // Redirect old classification values to new ones
  useEffect(() => {
    const oldClassificationValue = 'Evangelical Philosophical Society'
    const newClassificationValue = 'EPS'

    if (queryParams.classification === oldClassificationValue) {
      setQueryParams((prev) => ({
        ...prev,
        classification: newClassificationValue,
      }))
    }
  }, [queryParams.classification, setQueryParams])

  // Derive filter states from query params
  const activeLocation = queryParams.location || null
  const activeTrack = queryParams.track || null
  const searchText = queryParams.search || ''
  const showOnlySelected = stringToBoolean(queryParams.selected)
  const activeVenue = queryParams.venue || null
  const activeClassification = queryParams.classification || null
  const showOnlyGeneralEvents = stringToBoolean(queryParams.general)
  const hideGeneralEvents = stringToBoolean(queryParams.hideGeneral)
  // hideSpecialEvents defaults based on event config, can be overridden by query param
  const defaultHideSpecial = config?.hideSpecialEventsByDefault ?? true
  const hideSpecialEvents =
    queryParams.hideSpecial === 'false'
      ? false
      : queryParams.hideSpecial === 'true'
        ? true
        : defaultHideSpecial
  const linearView = stringToBoolean(queryParams.linear)
  const showGeneralEventsInColumns = stringToBoolean(
    queryParams.generalInColumns
  )
  const showOnlyPanelQA = stringToBoolean(queryParams.panelQA)
  const showOnlyInvitedGuest = stringToBoolean(queryParams.invitedGuest)
  const showCancelledEvents = stringToBoolean(queryParams.showCancelled)

  // Load selected sessions from localStorage on mount and clean up invalid ones
  useEffect(() => {
    const selected = getSelectedSessions(storageEventPath)

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
      setSelectedSessions(validSelected, storageEventPath)
    }

    setSelectedSessionsState(validSelected)
    // Initialize history with the cleaned state
    setHistory([validSelected])
    setHistoryIndex(0)
    // Mark sessions as loaded
    setIsSessionsLoaded(true)
  }, [getAllValidSessionIds, storageEventPath])

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

  // Extract locations, tracks, venues, and classifications from schedule data
  const allLocations = getAllLocations(scheduleData)
  const allTracks = getAllTracks(scheduleData)
  const allVenues = getAllVenues(scheduleData)
  const allClassifications = getAllClassifications(scheduleData)

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

  const setActiveVenue = useCallback(
    (venue: string | null) => {
      setQueryParams((prev) => {
        const newParams = { ...prev }
        if (venue) {
          newParams.venue = venue
        } else {
          delete newParams.venue
        }
        return newParams
      })
    },
    [setQueryParams]
  )

  const setActiveClassification = useCallback(
    (classification: string | null) => {
      setQueryParams((prev) => {
        const newParams = { ...prev }
        if (classification) {
          newParams.classification = classification
        } else {
          delete newParams.classification
        }
        return newParams
      })
    },
    [setQueryParams]
  )

  const handleToggleGeneralEvents = useCallback(() => {
    const newValue = !showOnlyGeneralEvents
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.general = 'true'
        delete newParams.hideGeneral // If enabling "Only General Events", disable "Hide General Events"
      } else {
        delete newParams.general
      }
      return newParams
    })
  }, [showOnlyGeneralEvents, setQueryParams])

  const handleToggleHideGeneralEvents = useCallback(() => {
    const newValue = !hideGeneralEvents
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (newValue) {
        newParams.hideGeneral = 'true'
        delete newParams.general // If enabling "Hide General Events", disable "Only General Events"
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
        // Turning on hide - set to 'true' if default is false, otherwise remove param
        if (!defaultHideSpecial) {
          newParams.hideSpecial = 'true'
        } else {
          delete newParams.hideSpecial
        }
      } else {
        // Turning off hide - set to 'false' if default is true, otherwise remove param
        if (defaultHideSpecial) {
          newParams.hideSpecial = 'false'
        } else {
          delete newParams.hideSpecial
        }
      }
      return newParams
    })
  }, [hideSpecialEvents, defaultHideSpecial, setQueryParams])

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

  const handleToggleGeneralEventsInColumns = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showGeneralEventsInColumns) {
        newParams.generalInColumns = 'true'
      } else {
        delete newParams.generalInColumns
      }
      return newParams
    })
  }, [showGeneralEventsInColumns, setQueryParams])

  const handleTogglePanelQA = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showOnlyPanelQA) {
        newParams.panelQA = 'true'
      } else {
        delete newParams.panelQA
      }
      return newParams
    })
  }, [showOnlyPanelQA, setQueryParams])

  const handleToggleInvitedGuest = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showOnlyInvitedGuest) {
        newParams.invitedGuest = 'true'
      } else {
        delete newParams.invitedGuest
      }
      return newParams
    })
  }, [showOnlyInvitedGuest, setQueryParams])

  const handleToggleShowCancelledEvents = useCallback(() => {
    setQueryParams((prev) => {
      const newParams = { ...prev }
      if (!showCancelledEvents) {
        newParams.showCancelled = 'true'
      } else {
        delete newParams.showCancelled
      }
      return newParams
    })
  }, [showCancelledEvents, setQueryParams])

  const handleToggleSessionSelection = useCallback(
    (sessionId: string) => {
      // Skip history update if this is an undo/redo action
      if (isUndoRedoAction.current) {
        return
      }

      const updated = toggleSessionSelection(sessionId, storageEventPath)
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
    [historyIndex, storageEventPath]
  )

  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      const previousState = history[newIndex]

      isUndoRedoAction.current = true
      setSelectedSessions(previousState, storageEventPath)
      setSelectedSessionsState(new Set(previousState))
      setHistoryIndex(newIndex)

      // Reset flag after a brief delay
      setTimeout(() => {
        isUndoRedoAction.current = false
      }, 0)
    }
  }, [historyIndex, history, storageEventPath])

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      const nextState = history[newIndex]

      isUndoRedoAction.current = true
      setSelectedSessions(nextState, storageEventPath)
      setSelectedSessionsState(new Set(nextState))
      setHistoryIndex(newIndex)

      // Reset flag after a brief delay
      setTimeout(() => {
        isUndoRedoAction.current = false
      }, 0)
    }
  }, [historyIndex, history, storageEventPath])

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

  // Copy selected sessions to clipboard (all events)
  const handleCopySelectedSessions = useCallback(async () => {
    try {
      // Get all selected sessions across all events
      const allSessionsMap = getAllSelectedSessionsAcrossEvents()

      // Convert to a serializable format: { eventPath: [sessionIds...] }
      const exportData: Record<string, string[]> = {}
      let totalCount = 0

      for (const [eventPath, sessionIds] of allSessionsMap.entries()) {
        exportData[eventPath] = Array.from(sessionIds)
        totalCount += sessionIds.size
      }

      const data = JSON.stringify(exportData)
      await navigator.clipboard.writeText(data)

      // Track the export
      trackSessionsExport(storageEventPath, totalCount)

      return { success: true, count: totalCount }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      return { success: false, count: 0 }
    }
  }, [storageEventPath])

  // Import validated sessions (to be called after validation)
  // validSessionsMap is a Map of eventPath -> array of session IDs
  const handleImportValidatedSessions = useCallback(
    async (validSessionsMap: Map<string, string[]>) => {
      try {
        // Get all existing sessions across all events
        const existingSessionsMap = getAllSelectedSessionsAcrossEvents()

        let totalNewSessionsCount = 0

        // Process each event's sessions
        for (const [eventPath, sessionIds] of validSessionsMap.entries()) {
          // Get existing sessions for this event
          const existingSessions =
            existingSessionsMap.get(eventPath) || new Set<string>()

          // Count how many are actually new
          const newSessions = sessionIds.filter(
            (id) => !existingSessions.has(id)
          )
          totalNewSessionsCount += newSessions.length

          // Merge with existing sessions
          const mergedSessions = new Set([...existingSessions, ...sessionIds])

          // Save to storage
          saveSelectedSessions(mergedSessions, eventPath)

          // If this is the current event, update the state
          if (eventPath === storageEventPath) {
            setSelectedSessionsState(mergedSessions)

            // Add to history for current event
            setHistory((prevHistory) => {
              const newHistory = prevHistory.slice(0, historyIndex + 1)
              newHistory.push(new Set(mergedSessions))
              return newHistory
            })
            setHistoryIndex((prev) => prev + 1)
          }
        }

        // Track the import (only if new sessions were added)
        if (totalNewSessionsCount > 0) {
          trackSessionsImport(storageEventPath, totalNewSessionsCount)
        }

        return { success: true, count: totalNewSessionsCount }
      } catch (error) {
        console.error('Failed to import sessions:', error)
        return { success: false, count: 0 }
      }
    },
    [historyIndex, storageEventPath]
  )

  // Clear all filters and return to default state
  const handleClearAllFilters = useCallback(() => {
    setQueryParams({})
  }, [setQueryParams])

  return {
    // Filter states
    activeLocation,
    activeTrack,
    searchText,
    showOnlySelected,
    activeVenue,
    activeClassification,
    showOnlyGeneralEvents,
    hideGeneralEvents,
    hideSpecialEvents,
    linearView,
    showGeneralEventsInColumns,
    showOnlyPanelQA,
    showOnlyInvitedGuest,
    showCancelledEvents,
    selectedSessions,
    isSessionsLoaded,

    // Setters
    setActiveLocation,
    setActiveTrack,
    setSearchText,
    setActiveVenue,
    setActiveClassification,

    // Computed values
    allLocations,
    allTracks,
    allVenues,
    allClassifications,

    // Toggle handlers
    handleToggleSelected,
    handleToggleGeneralEvents,
    handleToggleHideGeneralEvents,
    handleToggleHideSpecialEvents,
    handleToggleLinearView,
    handleToggleGeneralEventsInColumns,
    handleTogglePanelQA,
    handleToggleInvitedGuest,
    handleToggleShowCancelledEvents,
    handleToggleSessionSelection,

    // Import/Export handlers
    handleCopySelectedSessions,
    handleImportValidatedSessions,

    // Clear all filters
    handleClearAllFilters,
  }
}
