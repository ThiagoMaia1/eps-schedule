import {
  type ScheduleData,
  type ScheduleEntry,
  type ShiftBlock,
} from '../types/schedule'
import {
  sortLocationsByRoomOrder,
  type RoomOrder,
  roomOrder,
} from './roomOrder'
import {
  Tracks,
  generalEvents,
  type TrackGroup,
  type Location,
} from '../session-data'

// Utility function to parse time string to minutes since midnight
const parseTimeToMinutes = (timeStr: string): number => {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i)
  if (!match) return 0

  let hours = parseInt(match[1])
  const minutes = parseInt(match[2])
  const period = match[3].toUpperCase()

  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0

  return hours * 60 + minutes
}

interface SessionDataRow {
  date: string
  day_of_week: string
  start_time: string
  end_time: string
  location?: string
  locationObject?: Location
  event_type?: string
  speaker?: string
  affiliation?: string
  speakers?: Array<{
    name: string
    affiliation?: string
    isInvitedGuest?: boolean
  }>
  theme?: string
  recommended?: string
  time_for_row?: string
  orig_time_if_moved?: string
  track?: string
  is_general_event?: boolean
  is_special_event?: boolean
  is_moderator?: boolean
  has_room_conflict?: boolean
  is_evangelical_philosophical_society?: boolean
  is_panel_or_qa?: boolean
  is_panel_discussion?: boolean
  is_q_and_a?: boolean
  shift_id?: string
  is_invited_guest?: boolean
}

interface ParsedData {
  sessions: SessionDataRow[]
  shifts: ShiftBlock[]
}

// Helper function to format location from nested structure
const formatLocation = (location?: Location): string | undefined => {
  if (!location) return undefined
  return `${location.hotel} - ${location.floor} Floor: ${location.room}`
}

// Helper function to flatten nested structure into flat SessionDataRow[] and extract shifts
const flattenTracks = (tracks: TrackGroup[]): ParsedData => {
  const sessions: SessionDataRow[] = []
  const shifts: ShiftBlock[] = []
  let shiftCounter = 0

  tracks.forEach((trackGroup) => {
    trackGroup.shifts.forEach((shift) => {
      const shiftId = `shift-${shiftCounter++}`

      // Extract earliest and latest times from sessions in this shift
      let earliestTime = shift.startWindow || shift.sessions[0]?.startTime
      let latestTime =
        shift.endWindow || shift.sessions[shift.sessions.length - 1]?.endTime

      // If we still don't have times, calculate from sessions
      if (!earliestTime || !latestTime) {
        shift.sessions.forEach((session) => {
          if (!earliestTime || session.startTime < earliestTime) {
            earliestTime = session.startTime
          }
          if (!latestTime || session.endTime > latestTime) {
            latestTime = session.endTime
          }
        })
      }

      // Add shift block
      shifts.push({
        id: shiftId,
        moderator: {
          name: shift.moderator.name,
          affiliation: shift.moderator.affiliation,
        },
        startTime: earliestTime,
        endTime: latestTime,
        startMinutes: parseTimeToMinutes(earliestTime),
        endMinutes: parseTimeToMinutes(latestTime),
        dayOfWeek: shift.dayOfWeek,
        shift: shift.shift,
        track: trackGroup.track,
        subtheme: shift.subtheme,
      })

      // Add sessions with shift reference
      shift.sessions.forEach((session) => {
        // Check if this is a panel discussion or Q&A session using the new flags
        const isPanelDiscussion =
          'isPanelDiscussion' in session && session.isPanelDiscussion === true
        const isQAndA = 'isQAndA' in session && session.isQAndA === true
        const isPanelOrQA = isPanelDiscussion || isQAndA

        // Handle both single speaker and speakers array
        const hasSpeaker = 'speaker' in session && session.speaker
        const hasSpeakers =
          'speakers' in session &&
          session.speakers &&
          session.speakers.length > 0

        // Format theme text
        let themeText: string | undefined
        if ('theme' in session) {
          themeText = session.theme
        }

        const sessionData: SessionDataRow = {
          date: session.date,
          day_of_week: session.dayOfWeek,
          start_time: session.startTime,
          end_time: session.endTime,
          location: formatLocation(shift.location),
          speaker: hasSpeaker ? session.speaker.name : undefined,
          affiliation: hasSpeaker ? session.speaker.affiliation : undefined,
          speakers: hasSpeakers ? session.speakers : undefined,
          theme: themeText,
          track: trackGroup.track || undefined,
          is_evangelical_philosophical_society:
            trackGroup.isEvangelicalPhilosophicalSociety || false,
          is_general_event: false,
          is_panel_or_qa: isPanelOrQA,
          is_panel_discussion: isPanelDiscussion,
          is_q_and_a: isQAndA,
          shift_id: shiftId,
          is_invited_guest: hasSpeaker
            ? session.speaker.isInvitedGuest
            : undefined,
        }

        sessions.push(sessionData)
      })
    })
  })

  return { sessions, shifts }
}

export const parseScheduleData = (): ScheduleData[] => {
  try {
    // Flatten the nested tracks structure
    const { sessions, shifts } = flattenTracks(Tracks)

    // Add general events to sessions
    const generalEventSessions: SessionDataRow[] = generalEvents.map(
      (event) => ({
        date: event.date,
        day_of_week: event.dayOfWeek,
        start_time: event.startTime,
        end_time: event.endTime,
        location: formatLocation(event.location),
        locationObject: event.location,
        event_type: event.eventType,
        speaker: event.speaker?.name,
        affiliation: event.speaker?.affiliation,
        speakers: event.speakers,
        theme: event.theme,
        track: undefined,
        is_general_event: true,
        is_special_event: event.isSpecialEvent === true,
        is_evangelical_philosophical_society: false,
        is_panel_or_qa: false,
        has_room_conflict: false,
        is_invited_guest: event.speaker?.isInvitedGuest,
      })
    )

    // Combine regular sessions with general events
    const allSessions = [...sessions, ...generalEventSessions]

    // Transform the session data
    const scheduleData = transformSessionDataToScheduleData(
      allSessions,
      shifts,
      roomOrder
    )
    return scheduleData
  } catch (error) {
    console.error('Error loading schedule data:', error)
    throw error
  }
}

const transformSessionDataToScheduleData = (
  rows: SessionDataRow[],
  shifts: ShiftBlock[],
  roomOrder: RoomOrder
): ScheduleData[] => {
  // Group by date
  const groupedByDate = rows.reduce(
    (acc, row) => {
      // Skip empty rows, but allow general events without location
      const isGeneralEvent = row.is_general_event === true
      if (!row.date) return acc
      if (!row.location && !isGeneralEvent) return acc

      const key = `${row.date} ${row.day_of_week}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(row)
      return acc
    },
    {} as Record<string, SessionDataRow[]>
  )

  // Group shifts by date
  const groupedShiftsByDate = shifts.reduce(
    (acc, shift) => {
      // Find a session with this shift_id to get the date
      const session = rows.find((r) => r.shift_id === shift.id)
      if (!session) return acc

      const key = `${session.date} ${session.day_of_week}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(shift)
      return acc
    },
    {} as Record<string, ShiftBlock[]>
  )

  // Extract ALL unique locations across ALL days
  const allLocationsSet = new Set<string>()
  rows.forEach((row) => {
    if (row.location) allLocationsSet.add(row.location)
  })
  const unsortedAllLocations = Array.from(allLocationsSet)
  const allLocations = sortLocationsByRoomOrder(unsortedAllLocations, roomOrder)
  console.log(allLocations)

  // Transform each date group into ScheduleData
  const scheduleDataArray: ScheduleData[] = []

  for (const [dateKey, dateRows] of Object.entries(groupedByDate)) {
    // Use all locations for each day
    const locations = allLocations

    // Get shifts for this day (needed before creating time slots)
    const dayShifts = groupedShiftsByDate[dateKey] || []

    // Group by time slot
    const groupedByTime = dateRows.reduce(
      (acc, row) => {
        const timeKey = row.time_for_row || row.start_time
        if (!acc[timeKey]) {
          acc[timeKey] = []
        }
        acc[timeKey].push(row)
        return acc
      },
      {} as Record<string, SessionDataRow[]>
    )

    // Create time slots
    const timeSlots = Object.entries(groupedByTime)
      .sort(([timeA], [timeB]) => {
        // Sort times chronologically
        return compareTime(timeA, timeB)
      })
      .map(([time, timeRows]) => {
        const sessions: { [location: string]: ScheduleEntry[] } = {}

        // Initialize all locations with empty arrays
        locations.forEach((loc) => {
          sessions[loc] = []
        })

        // Fill in the sessions
        timeRows.forEach((row) => {
          const isGeneralEvent = row.is_general_event === true

          // Skip rows without location unless they are general events
          if (!row.location && !isGeneralEvent) return

          // Create a stable ID based on speaker(s) and theme (not time/location)
          // This ensures highlighting persists even if schedule changes
          const speakerStr = row.speakers
            ? row.speakers.map((s) => s.name).join('-')
            : row.speaker || ''
          const themeStr = row.theme || ''
          const affiliationStr = row.affiliation || ''

          // For panel discussions/QA with no speaker/theme/affiliation, use track/subtheme
          let sessionId: string
          const isPanelOrQA = row.is_panel_or_qa === true
          const hasNoComponents = !speakerStr && !themeStr && !affiliationStr

          if (isPanelOrQA && hasNoComponents) {
            // Get shift info for track/subtheme
            const shift = row.shift_id
              ? dayShifts.find((s) => s.id === row.shift_id)
              : undefined
            const trackStr = row.track || shift?.track || 'empty'
            const subthemeStr = shift?.subtheme || 'empty'
            sessionId = `${trackStr}-${subthemeStr}`
              .replace(/\s+/g, '-')
              .toLowerCase()
          } else {
            sessionId =
              `${speakerStr || 'empty'}-${themeStr || 'empty'}-${affiliationStr || 'empty'}`
                .replace(/\s+/g, '-')
                .toLowerCase()
          }

          // Get moderator info if this session has a shift
          const shift = row.shift_id
            ? dayShifts.find((s) => s.id === row.shift_id)
            : undefined

          const entry: ScheduleEntry = {
            id: sessionId,
            speaker: row.speaker || undefined,
            affiliation: row.affiliation || undefined,
            speakers: row.speakers || undefined,
            theme: row.theme || undefined,
            eventType: row.event_type || undefined,
            location: row.locationObject || undefined,
            originalTime: row.orig_time_if_moved || undefined,
            startTime: row.start_time,
            endTime: row.end_time,
            startMinutes: parseTimeToMinutes(row.start_time),
            endMinutes: parseTimeToMinutes(row.end_time),
            isEPS: row.is_evangelical_philosophical_society === true,
            track: row.track || undefined,
            hasRoomConflict: row.has_room_conflict === true,
            isGeneralEvent: isGeneralEvent,
            isSpecialEvent: row.is_special_event === true,
            isPanelOrQA: row.is_panel_or_qa === true,
            isPanelDiscussion: row.is_panel_discussion === true,
            isQAndA: row.is_q_and_a === true,
            shiftId: row.shift_id,
            moderator: shift?.moderator,
            isInvitedGuest: row.is_invited_guest === true,
          }

          // For general events without location, add to first location
          // (it will be rendered as full-width row anyway)
          const targetLocation = row.location || locations[0]
          if (targetLocation && sessions[targetLocation]) {
            sessions[targetLocation].push(entry)
          }
        })

        return {
          time,
          sessions,
        }
      })

    // Format the day string nicely
    // dateKey format is now "November 18th Tuesday"
    const dayParts = dateKey.split(' ')
    // date is "November 18th", day_of_week is "Tuesday"
    const formattedDate = dayParts[2] + ', ' + dayParts[0] + ' ' + dayParts[1]

    scheduleDataArray.push({
      day: formattedDate,
      locations,
      timeSlots,
      shifts: dayShifts,
    })
  }

  return scheduleDataArray
}

const compareTime = (timeA: string, timeB: string): number => {
  return parseTimeToMinutes(timeA) - parseTimeToMinutes(timeB)
}

export const scheduleData = parseScheduleData()
