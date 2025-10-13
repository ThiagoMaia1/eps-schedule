import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'
import { getHotelFromLocation } from './scheduleTableUtils'
import { roomOrder, sortLocationsByRoomOrder } from './roomOrder'

/**
 * Check if two sessions overlap in time
 */
export const sessionsOverlap = (
  s1: SessionWithLocationExtended,
  s2: SessionWithLocationExtended
): boolean => s1.startMinutes < s2.endMinutes && s2.startMinutes < s1.endMinutes

/**
 * Check if a hotel change warning should be shown for a session
 * Compares with the latest previous session(s) to detect hotel changes
 */
export const checkForHotelChange = (
  session: SessionWithLocationExtended,
  allSessions: SessionWithLocationExtended[]
): boolean => {
  const currentHotel = getHotelFromLocation(session.location)

  if (!currentHotel) {
    return false
  }

  // Find all previous sessions that ended before or at the same time this session starts
  const previousSessions = allSessions.filter((s) => {
    return s.endMinutes <= session.startMinutes
  })

  // Find the latest ending time
  if (previousSessions.length === 0) {
    return false
  }

  const latestEndTime = Math.max(...previousSessions.map((s) => s.endMinutes))

  // Get all sessions that end at this latest time (including ties)
  const latestPrevSessions = previousSessions.filter(
    (s) => s.endMinutes === latestEndTime
  )

  // Check if any of these latest sessions are at a different hotel
  return latestPrevSessions.some((prevSession) => {
    const prevHotel = getHotelFromLocation(prevSession.location)
    return !!prevHotel && prevHotel !== currentHotel
  })
}

/**
 * Calculate the maximum number of sessions that are active at any point in time
 */
export const calculateMaxSimultaneousSessions = (
  overlappingSessions: SessionWithLocationExtended[]
): number => {
  if (overlappingSessions.length <= 1) {
    return 1
  }

  // Collect all unique time points where sessions start or end
  const timePoints: number[] = []
  overlappingSessions.forEach((s) => {
    timePoints.push(s.startMinutes, s.endMinutes)
  })
  const uniqueTimePoints = [...new Set(timePoints)].sort((a, b) => a - b)

  // Find the maximum number of active sessions at any time point
  let maxSimultaneous = 0
  uniqueTimePoints.forEach((time) => {
    const activeCount = overlappingSessions.filter(
      (s) => s.startMinutes <= time && time < s.endMinutes
    ).length
    maxSimultaneous = Math.max(maxSimultaneous, activeCount)
  })

  return maxSimultaneous
}

/**
 * Assign each location to a column based on time conflicts
 * Locations are assigned to the lowest available column that doesn't conflict
 */
export const assignLocationsToColumns = (
  overlappingSessions: SessionWithLocationExtended[]
): Map<string, number> => {
  const locationToColumn = new Map<string, number>()

  // Get all unique locations from overlapping sessions
  const locations = [...new Set(overlappingSessions.map((s) => s.location))]

  // Sort locations by room order
  const sortedLocations = sortLocationsByRoomOrder(locations, roomOrder)

  // Assign each location to a column based on conflicts
  for (const location of sortedLocations) {
    // Find all sessions at this location
    const sessionsAtLocation = overlappingSessions.filter(
      (s) => s.location === location
    )

    // Find all locations that have sessions overlapping with any session at this location
    const conflictingLocations = new Set<string>()
    sessionsAtLocation.forEach((sessionAtLoc) => {
      overlappingSessions.forEach((otherSession) => {
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

  return locationToColumn
}

/**
 * Calculate the layout (position and width) for a session in the linear view
 */
export const calculateSessionLayout = (
  session: SessionWithLocationExtended,
  allSessions: SessionWithLocationExtended[]
): { left: string; width: string; needsHotelChange: boolean } => {
  // Find all sessions that overlap with this one
  const overlapping = allSessions.filter((s) => sessionsOverlap(s, session))

  // Check for hotel change
  const needsHotelChange = checkForHotelChange(session, allSessions)

  // If no overlaps, use full width
  if (overlapping.length <= 1) {
    return { left: '0%', width: '100%', needsHotelChange }
  }

  // Calculate max simultaneous sessions
  const maxSimultaneous = calculateMaxSimultaneousSessions(overlapping)

  // Assign locations to columns
  const locationToColumn = assignLocationsToColumns(overlapping)

  // Get the column for the current session's location
  const column = locationToColumn.get(session.location) ?? 0

  // Calculate width and position
  const width = 100 / maxSimultaneous
  const left = width * column

  return { left: `${left}%`, width: `${width}%`, needsHotelChange }
}
