import { useCallback } from 'react'
import { type ScheduleData, type ScheduleEntry } from '../types/schedule'
import { getHotelFromLocation } from '../utils/scheduleTableUtils'

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
  selectedSessions: Set<string>
}

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

      // Filter by search text
      if (searchText.trim()) {
        const searchLower = searchText.toLowerCase()
        const searchableFields = [
          entry.theme,
          entry.speaker,
          entry.affiliation,
          entry.track,
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
      const sortedSessions = sessions.sort(
        (a, b) => a.startMinutes - b.startMinutes
      )

      // Check for hotel changes between consecutive sessions
      for (let i = 0; i < sortedSessions.length - 1; i++) {
        const current = sortedSessions[i]
        const next = sortedSessions[i + 1]

        const currentHotel = getHotelFromLocation(current.location)
        const nextHotel = getHotelFromLocation(next.location)

        // If both sessions have hotel information and they're at different hotels
        // Only mark as needing hotel change if next session starts AFTER current session ends
        if (
          currentHotel &&
          nextHotel &&
          currentHotel !== nextHotel &&
          next.startMinutes > current.endMinutes
        ) {
          // Mark the current session as needing hotel change
          current.needsHotelChange = true
        }
      }

      return sortedSessions
    },
    [isLocationVisible, isEntryVisible, selectedSessions]
  )

  // Check if two sessions overlap
  const sessionsOverlap = useCallback(
    (
      s1: SessionWithLocationExtended,
      s2: SessionWithLocationExtended
    ): boolean => {
      return s1.startMinutes < s2.endMinutes && s2.startMinutes < s1.endMinutes
    },
    []
  )

  // Calculate layout for overlapping sessions
  const calculateSessionLayout = useCallback(
    (
      session: SessionWithLocationExtended,
      allSessionsAtTime: SessionWithLocationExtended[]
    ): { left: string; width: string } => {
      // Find all sessions that overlap with this one
      const overlapping = allSessionsAtTime.filter((s) =>
        sessionsOverlap(s, session)
      )

      if (overlapping.length <= 1) {
        return { left: '0%', width: '100%' }
      }

      // Sort by start time to get consistent ordering
      overlapping.sort(
        (a, b) => a.startMinutes - b.startMinutes || a.endMinutes - b.endMinutes
      )

      // Find the index of the current session
      const index = overlapping.findIndex(
        (s) => s.entry.id === session.entry.id
      )
      const totalOverlapping = overlapping.length

      const width = 100 / totalOverlapping
      const left = width * index

      return { left: `${left}%`, width: `${width}%` }
    },
    [sessionsOverlap]
  )

  // Check if there are any visible sessions across all days
  // For regular view, only count locations that have non-general/special events
  const hasAnyVisibleSessions = useCallback(
    (scheduleData: ScheduleData[], linearView: boolean): boolean => {
      return scheduleData.some((dayData) => {
        if (linearView) {
          return getAllSessionsWithLocations(dayData).length > 0
        } else {
          const visibleLocations = dayData.locations.filter((location) => {
            if (!isLocationVisible(location)) return false
            const sessions = getAllSessions(dayData, location)
            // If showing only general events, count general events
            // Otherwise, only count if there's at least one non-general/special event
            if (showOnlyGeneralEvents) {
              return sessions.some((session) => session.isGeneralEvent)
            }
            return sessions.some(
              (session) => !session.isGeneralEvent && !session.isSpecialEvent
            )
          })
          return visibleLocations.length > 0
        }
      })
    },
    [
      getAllSessionsWithLocations,
      isLocationVisible,
      getAllSessions,
      showOnlyGeneralEvents,
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
