import { useCallback } from 'react'
import { type ScheduleData, type ScheduleEntry } from '../types/schedule'
import {
  calculateSessionLayout as calculateSessionLayoutUtil,
  sessionsOverlap,
} from '../utils/sessionLayoutUtils'

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
  selectedSessions: Set<string>
  activeLocation: string | null
  showOnlySelected: boolean
  activeVenue: string | null
  activeClassification: string | null
  showOnlyGeneralEvents: boolean
  hideGeneralEvents: boolean
  hideSpecialEvents: boolean
  showOnlyPanelQA: boolean
  showOnlyInvitedGuest: boolean
  searchText: string
  activeTrack: string | null
}

export const useScheduleTableFilters = ({
  selectedSessions,
  activeLocation,
  showOnlySelected,
  activeVenue,
  activeClassification,
  showOnlyGeneralEvents,
  hideGeneralEvents,
  hideSpecialEvents,
  showOnlyPanelQA,
  showOnlyInvitedGuest,
  searchText,
  activeTrack,
}: UseScheduleTableFiltersProps) => {
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
      // Filter by venue
      if (activeVenue && entry.location?.hotel !== activeVenue) return false
      // Filter by classification
      if (
        activeClassification &&
        entry.primaryClassification !== activeClassification
      )
        return false
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
      selectedSessions,
      showOnlySelected,
      activeVenue,
      activeClassification,
      showOnlyGeneralEvents,
      hideGeneralEvents,
      hideSpecialEvents,
      showOnlyPanelQA,
      showOnlyInvitedGuest,
      searchText,
      activeTrack,
    ]
  )

  const isLocationVisible = useCallback(
    (location: string): boolean => {
      if (activeLocation && location !== activeLocation) {
        return false
      }
      // Filter by venue
      if (activeVenue && !location.includes(activeVenue)) {
        return false
      }
      return true
    },
    [activeLocation, activeVenue]
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
      return calculateSessionLayoutUtil(session, allSessions)
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
