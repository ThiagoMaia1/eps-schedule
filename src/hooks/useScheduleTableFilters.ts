import { useCallback } from 'react'
import { type ScheduleData, type ScheduleEntry } from '../types/schedule'
import { getHotelFromLocation } from '../utils/scheduleTableUtils'
import { roomOrder, sortLocationsByRoomOrder } from '../utils/roomOrder'

export interface SessionWithLocation {
  entry: ScheduleEntry
  location: string
}

export interface SessionWithLocationExtended extends SessionWithLocation {
  startMinutes: number
  endMinutes: number
  needsHotelChange?: boolean
}

interface UseScheduleTableFiltersProps {
  activeLocation: string | null
  activeTrack: string | null
  searchText: string
  showOnlySelected: boolean
  showOnlyEPS: boolean
  showOnlyETS: boolean
  showOnlyCopleyPlace: boolean
  showOnlySheraton: boolean
  showOnlyGeneralEvents: boolean
  hideGeneralEvents: boolean
  hideSpecialEvents: boolean
  showOnlyPanelQA: boolean
  showOnlyInvitedGuest: boolean
  selectedSessions: Set<string>
}

// Check if two sessions overlap
const sessionsOverlap = (
  s1: SessionWithLocationExtended,
  s2: SessionWithLocationExtended
): boolean => s1.startMinutes < s2.endMinutes && s2.startMinutes < s1.endMinutes

export const useScheduleTableFilters = (
  props: UseScheduleTableFiltersProps
) => {
  const {
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
    showOnlyPanelQA,
    showOnlyInvitedGuest,
    selectedSessions,
  } = props

  const isLocationVisible = useCallback(
    (location: string): boolean => {
      if (activeLocation && location !== activeLocation) {
        return false
      }
      // Filter by Copley Place
      if (showOnlyCopleyPlace && !location.includes('Copley Place')) {
        return false
      }
      // Filter by Sheraton
      if (showOnlySheraton && !location.includes('Sheraton')) {
        return false
      }
      return true
    },
    [activeLocation, showOnlyCopleyPlace, showOnlySheraton]
  )

  // Helper function to get moderator name for a session
  const getModeratorName = (entry: ScheduleEntry): string | undefined => {
    return entry.moderator?.name
  }

  const isEntryVisible = useCallback(
    (entry: ScheduleEntry): boolean => {
      if (showOnlySelected && !selectedSessions.has(entry.id)) return false
      if (showOnlyGeneralEvents && !entry.isGeneralEvent) return false
      // Hide filters
      if (entry.isGeneralEvent && hideGeneralEvents) return false
      if (entry.isSpecialEvent && hideSpecialEvents) return false
      if (showOnlyEPS && !entry.isEPS && !entry.isGeneralEvent) return false
      if (showOnlyETS && entry.isEPS && !entry.isGeneralEvent) return false
      if (activeTrack && entry.track !== activeTrack) return false
      if (showOnlyPanelQA && !entry.isPanelOrQA) return false
      if (showOnlyInvitedGuest && !entry.isInvitedGuest) return false

      // Filter by search text
      if (searchText.trim()) {
        const searchLower = searchText.toLowerCase()
        const searchableFields = [
          entry.theme,
          entry.speaker,
          entry.affiliation,
          entry.track,
          entry.eventType, // For general events
          getModeratorName(entry),
        ]

        // Also add speakers array names for panel discussions
        const speakerNames = entry.speakers?.map((s) => s.name) || []
        searchableFields.push(...speakerNames)

        const hasMatch = searchableFields.some((field) =>
          field?.toLowerCase().includes(searchLower)
        )
        if (!hasMatch) return false
      }

      return true
    },
    [
      showOnlySelected,
      showOnlyGeneralEvents,
      hideGeneralEvents,
      hideSpecialEvents,
      showOnlyEPS,
      showOnlyETS,
      activeTrack,
      showOnlyPanelQA,
      showOnlyInvitedGuest,
      searchText,
      selectedSessions,
    ]
  )

  // Collect all sessions from all time slots
  const getAllSessions = useCallback(
    (dayData: ScheduleData, location: string): ScheduleEntry[] => {
      const sessions: ScheduleEntry[] = []
      dayData.timeSlots.forEach((slot) => {
        const entries = slot.sessions[location] || []
        entries.forEach((entry) => {
          if (isEntryVisible(entry)) {
            sessions.push(entry)
          }
        })
      })
      return sessions
    },
    [isEntryVisible]
  )

  // Linear view helper: Get all sessions with their locations
  const getAllSessionsWithLocations = useCallback(
    (dayData: ScheduleData): SessionWithLocationExtended[] => {
      const sessions: SessionWithLocationExtended[] = []
      dayData.timeSlots.forEach((slot) => {
        Object.entries(slot.sessions).forEach(([location, entries]) => {
          entries.forEach((entry) => {
            if (!isLocationVisible(location)) return
            if (!isEntryVisible(entry)) return
            // In linear view, only show selected sessions
            if (!selectedSessions.has(entry.id)) return
            // Skip general events and plenary sessions in linear view as they'll be rendered separately
            if (entry.isGeneralEvent) return

            sessions.push({
              entry,
              location,
              startMinutes: entry.startMinutes,
              endMinutes: entry.endMinutes,
            })
          })
        })
      })

      // Sort by start time
      return sessions.sort((a, b) => a.startMinutes - b.startMinutes)
    },
    [isLocationVisible, isEntryVisible, selectedSessions]
  )

  // Calculate layout for overlapping sessions
  const calculateSessionLayout = useCallback(
    (
      session: SessionWithLocationExtended,
      allSessions: SessionWithLocationExtended[]
    ): { left: string; width: string; needsHotelChange?: boolean } => {
      // Find all sessions that overlap with this one
      const overlapping = allSessions.filter((s) => sessionsOverlap(s, session))

      // Check for hotel change: if this session's hotel differs from any previous session
      const currentHotel = getHotelFromLocation(session.location)
      let needsHotelChange = false

      if (currentHotel) {
        // Find all sessions that start before this one
        const previousSessions = allSessions.filter(
          (s) => s.startMinutes < session.startMinutes
        )

        // Check if any previous session is at a different hotel
        needsHotelChange = previousSessions.some((prevSession) => {
          const prevHotel = getHotelFromLocation(prevSession.location)
          return prevHotel && prevHotel !== currentHotel
        })
      }

      if (overlapping.length <= 1) {
        return { left: '0%', width: '100%', needsHotelChange }
      }

      // Calculate the maximum number of simultaneous overlapping sessions
      // by checking how many sessions are active at each time point
      const timePoints: number[] = []
      overlapping.forEach((s) => {
        timePoints.push(s.startMinutes, s.endMinutes)
      })
      const uniqueTimePoints = [...new Set(timePoints)].sort((a, b) => a - b)

      let maxSimultaneous = 0
      uniqueTimePoints.forEach((time) => {
        const activeCount = overlapping.filter(
          (s) => s.startMinutes <= time && time < s.endMinutes
        ).length
        maxSimultaneous = Math.max(maxSimultaneous, activeCount)
      })

      // Get all unique locations from overlapping sessions
      const locations = [...new Set(overlapping.map((s) => s.location))]

      // Sort locations by room order
      const sortedLocations = sortLocationsByRoomOrder(locations, roomOrder)

      // Assign each location to a column based on conflicts
      // A location gets the lowest column number that doesn't conflict with
      // any location it overlaps with in time
      const locationToColumn = new Map<string, number>()

      for (const location of sortedLocations) {
        // Find all sessions at this location
        const sessionsAtLocation = overlapping.filter(
          (s) => s.location === location
        )

        // Find all locations that have sessions overlapping with any session at this location
        const conflictingLocations = new Set<string>()
        sessionsAtLocation.forEach((sessionAtLoc) => {
          overlapping.forEach((otherSession) => {
            if (
              otherSession.location !== location &&
              sessionsOverlap(sessionAtLoc, otherSession)
            ) {
              conflictingLocations.add(otherSession.location)
            }
          })
        })

        // Find the lowest column number not used by conflicting locations
        const usedColumns = new Set<number>()
        conflictingLocations.forEach((conflictLoc) => {
          const col = locationToColumn.get(conflictLoc)
          if (col !== undefined) {
            usedColumns.add(col)
          }
        })

        // Assign the lowest available column
        let column = 0
        while (usedColumns.has(column)) {
          column++
        }
        locationToColumn.set(location, column)
      }

      // Get the column for the current session's location
      const column = locationToColumn.get(session.location) ?? 0

      const width = 100 / maxSimultaneous
      const left = width * column

      return { left: `${left}%`, width: `${width}%`, needsHotelChange }
    },
    []
  )

  // Check if there are any visible sessions across all days
  const hasAnyVisibleSessions = useCallback(
    (scheduleData: ScheduleData[], linearView: boolean): boolean => {
      return scheduleData.some((dayData) => {
        if (linearView) {
          return getAllSessionsWithLocations(dayData).length > 0
        } else {
          // Check if there are any visible sessions in location columns
          const hasVisibleLocationSessions = dayData.locations.some(
            (location) => {
              if (!isLocationVisible(location)) return false
              const sessions = getAllSessions(dayData, location)
              return sessions.length > 0
            }
          )

          // Also check if there are any visible general/special events that would be rendered as full-width banners
          const hasVisibleGeneralEvents = dayData.timeSlots.some((slot) => {
            const allEntries = Object.values(slot.sessions).flat()
            return allEntries.some(
              (entry) => entry.isGeneralEvent && isEntryVisible(entry)
            )
          })

          return hasVisibleLocationSessions || hasVisibleGeneralEvents
        }
      })
    },
    [
      getAllSessionsWithLocations,
      isLocationVisible,
      getAllSessions,
      isEntryVisible,
    ]
  )

  return {
    isLocationVisible,
    isEntryVisible,
    getAllSessions,
    getAllSessionsWithLocations,
    sessionsOverlap,
    calculateSessionLayout,
    hasAnyVisibleSessions,
  }
}
