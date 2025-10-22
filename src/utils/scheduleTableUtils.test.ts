import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import {
  formatMinutesToTime,
  getTimeRange,
  generateTimeMarkers,
  getHotelFromLocation,
  isDayInPast,
} from './scheduleTableUtils'
import { type ScheduleData, type ScheduleEntry } from '../types/schedule'

// Helper to create a mock schedule entry
const createEntry = (
  id: string,
  startMinutes: number,
  endMinutes: number
): ScheduleEntry => ({
  id,
  startTime: `${Math.floor(startMinutes / 60)}:${(startMinutes % 60).toString().padStart(2, '0')}`,
  endTime: `${Math.floor(endMinutes / 60)}:${(endMinutes % 60).toString().padStart(2, '0')}`,
  startMinutes,
  endMinutes,
})

// Helper to create a mock schedule data
const createScheduleData = (
  sessions: { location: string; entry: ScheduleEntry }[]
): ScheduleData => {
  const locations = Array.from(new Set(sessions.map((s) => s.location)))
  const timeSlots: ScheduleData['timeSlots'] = []

  // Group sessions by time
  const timeMap = new Map<string, { [location: string]: ScheduleEntry[] }>()

  sessions.forEach(({ location, entry }) => {
    const time = entry.startTime
    if (!timeMap.has(time)) {
      timeMap.set(time, {})
    }
    const slot = timeMap.get(time)!
    if (!slot[location]) {
      slot[location] = []
    }
    slot[location].push(entry)
  })

  timeMap.forEach((sessionsMap, time) => {
    timeSlots.push({
      time,
      sessions: sessionsMap,
    })
  })

  return {
    day: 'Monday, November 18, 2024',
    locations,
    timeSlots,
    shifts: [],
  }
}

describe('formatMinutesToTime', () => {
  it('should format midnight correctly', () => {
    expect(formatMinutesToTime(0)).toBe('12:00 AM')
  })

  it('should format morning times correctly', () => {
    expect(formatMinutesToTime(60)).toBe('1:00 AM')
    expect(formatMinutesToTime(540)).toBe('9:00 AM')
    expect(formatMinutesToTime(555)).toBe('9:15 AM')
  })

  it('should format noon correctly', () => {
    expect(formatMinutesToTime(720)).toBe('12:00 PM')
  })

  it('should format afternoon times correctly', () => {
    expect(formatMinutesToTime(780)).toBe('1:00 PM')
    expect(formatMinutesToTime(1020)).toBe('5:00 PM')
    expect(formatMinutesToTime(1035)).toBe('5:15 PM')
  })

  it('should format late evening times correctly', () => {
    expect(formatMinutesToTime(1380)).toBe('11:00 PM')
    expect(formatMinutesToTime(1395)).toBe('11:15 PM')
  })

  it('should pad minutes with zero', () => {
    expect(formatMinutesToTime(305)).toBe('5:05 AM')
    expect(formatMinutesToTime(902)).toBe('3:02 PM')
  })

  describe('compact mode', () => {
    it('should omit :00 for on-the-hour times', () => {
      expect(formatMinutesToTime(0, true)).toBe('12 AM')
      expect(formatMinutesToTime(540, true)).toBe('9 AM')
      expect(formatMinutesToTime(720, true)).toBe('12 PM')
      expect(formatMinutesToTime(780, true)).toBe('1 PM')
    })

    it('should include minutes for non-hour times', () => {
      expect(formatMinutesToTime(555, true)).toBe('9:15 AM')
      expect(formatMinutesToTime(1035, true)).toBe('5:15 PM')
      expect(formatMinutesToTime(305, true)).toBe('5:05 AM')
    })
  })
})

describe('getTimeRange', () => {
  const alwaysVisible = () => true
  const neverVisible = () => false

  it('should return default range when no sessions are visible', () => {
    const dayData = createScheduleData([])
    const result = getTimeRange(dayData, neverVisible)

    expect(result.minTime).toBe(8 * 60) // 8:00 AM
    expect(result.maxTime).toBe(18 * 60) // 6:00 PM
  })

  it('should return default range when schedule is empty', () => {
    const dayData = createScheduleData([])
    const result = getTimeRange(dayData, alwaysVisible)

    expect(result.minTime).toBe(8 * 60)
    expect(result.maxTime).toBe(18 * 60)
  })

  it('should round down minTime to nearest hour', () => {
    const dayData = createScheduleData([
      {
        location: 'Room A',
        entry: createEntry('1', 9 * 60 + 15, 10 * 60), // 9:15 AM
      },
    ])
    const result = getTimeRange(dayData, alwaysVisible)

    expect(result.minTime).toBe(9 * 60) // Rounded down to 9:00 AM
  })

  it('should round up maxTime to nearest hour', () => {
    const dayData = createScheduleData([
      {
        location: 'Room A',
        entry: createEntry('1', 9 * 60, 10 * 60 + 30), // Ends at 10:30 AM
      },
    ])
    const result = getTimeRange(dayData, alwaysVisible)

    expect(result.maxTime).toBe(11 * 60) // Rounded up to 11:00 AM
  })

  it('should use already on-the-hour times as-is', () => {
    const dayData = createScheduleData([
      {
        location: 'Room A',
        entry: createEntry('1', 9 * 60, 17 * 60), // 9:00 AM to 5:00 PM
      },
    ])
    const result = getTimeRange(dayData, alwaysVisible)

    expect(result.minTime).toBe(9 * 60)
    expect(result.maxTime).toBe(17 * 60)
  })

  it('should consider all visible sessions across multiple locations', () => {
    const dayData = createScheduleData([
      {
        location: 'Room A',
        entry: createEntry('1', 9 * 60, 10 * 60),
      },
      {
        location: 'Room B',
        entry: createEntry('2', 14 * 60, 16 * 60),
      },
      {
        location: 'Room C',
        entry: createEntry('3', 11 * 60, 12 * 60),
      },
    ])
    const result = getTimeRange(dayData, alwaysVisible)

    expect(result.minTime).toBe(9 * 60)
    expect(result.maxTime).toBe(16 * 60)
  })

  it('should filter out invisible sessions', () => {
    const dayData = createScheduleData([
      {
        location: 'Room A',
        entry: createEntry('1', 8 * 60, 9 * 60),
      },
      {
        location: 'Room B',
        entry: createEntry('2', 10 * 60, 11 * 60),
      },
      {
        location: 'Room C',
        entry: createEntry('3', 17 * 60, 18 * 60),
      },
    ])

    // Only make the middle session visible
    const isVisible = (entry: ScheduleEntry) => entry.id === '2'
    const result = getTimeRange(dayData, isVisible)

    expect(result.minTime).toBe(10 * 60)
    expect(result.maxTime).toBe(11 * 60)
  })

  it('should handle multiple sessions in the same time slot', () => {
    const dayData: ScheduleData = {
      day: 'Monday, November 18, 2024',
      locations: ['Room A', 'Room B'],
      timeSlots: [
        {
          time: '9:00 AM',
          sessions: {
            'Room A': [createEntry('1', 9 * 60, 10 * 60)],
            'Room B': [createEntry('2', 9 * 60, 10 * 60)],
          },
        },
      ],
      shifts: [],
    }

    const result = getTimeRange(dayData, alwaysVisible)
    expect(result.minTime).toBe(9 * 60)
    expect(result.maxTime).toBe(10 * 60)
  })
})

describe('generateTimeMarkers', () => {
  it('should generate hourly markers for a single hour range', () => {
    const markers = generateTimeMarkers(9 * 60, 10 * 60)
    expect(markers).toEqual([9 * 60])
  })

  it('should generate hourly markers for multiple hours', () => {
    const markers = generateTimeMarkers(9 * 60, 13 * 60)
    expect(markers).toEqual([9 * 60, 10 * 60, 11 * 60, 12 * 60])
  })

  it('should handle full day range', () => {
    const markers = generateTimeMarkers(8 * 60, 18 * 60)
    expect(markers).toEqual([
      8 * 60, // 8:00 AM
      9 * 60, // 9:00 AM
      10 * 60, // 10:00 AM
      11 * 60, // 11:00 AM
      12 * 60, // 12:00 PM
      13 * 60, // 1:00 PM
      14 * 60, // 2:00 PM
      15 * 60, // 3:00 PM
      16 * 60, // 4:00 PM
      17 * 60, // 5:00 PM
    ])
  })

  it('should return empty array when minTime equals maxTime', () => {
    const markers = generateTimeMarkers(10 * 60, 10 * 60)
    expect(markers).toEqual([])
  })

  it('should handle late evening times', () => {
    const markers = generateTimeMarkers(20 * 60, 23 * 60)
    expect(markers).toEqual([20 * 60, 21 * 60, 22 * 60])
  })

  it('should handle early morning times', () => {
    const markers = generateTimeMarkers(0, 3 * 60)
    expect(markers).toEqual([0, 60, 120])
  })
})

describe('getHotelFromLocation', () => {
  it('should extract "Copley Place" from location', () => {
    expect(getHotelFromLocation('Copley Place - Room A')).toBe('Copley Place')
    expect(getHotelFromLocation('Copley Place Grand Ballroom')).toBe(
      'Copley Place'
    )
    expect(getHotelFromLocation('Marriott Copley Place')).toBe('Copley Place')
  })

  it('should extract "Sheraton" from location', () => {
    expect(getHotelFromLocation('Sheraton - Room A')).toBe('Sheraton')
    expect(getHotelFromLocation('Sheraton Grand Ballroom')).toBe('Sheraton')
    expect(getHotelFromLocation('Boston Sheraton Hotel')).toBe('Sheraton')
  })

  it('should return null for unknown locations', () => {
    expect(getHotelFromLocation('Hilton Hotel')).toBeNull()
    expect(getHotelFromLocation('Conference Center')).toBeNull()
    expect(getHotelFromLocation('Room 101')).toBeNull()
  })

  it('should return null for empty string', () => {
    expect(getHotelFromLocation('')).toBeNull()
  })

  it('should be case-sensitive', () => {
    expect(getHotelFromLocation('copley place')).toBeNull() // lowercase doesn't match
    expect(getHotelFromLocation('sheraton')).toBeNull() // lowercase doesn't match
    expect(getHotelFromLocation('SHERATON')).toBeNull() // all caps doesn't match (needs exact case)
  })

  it('should prioritize Copley Place if both are mentioned', () => {
    // Testing order - Copley Place is checked first
    expect(getHotelFromLocation('Copley Place near Sheraton')).toBe(
      'Copley Place'
    )
  })
})

describe('isDayInPast', () => {
  let originalDate: typeof Date

  beforeEach(() => {
    // Save the original Date
    originalDate = global.Date

    // Mock current date to October 21, 2025 (from user_info)
    const mockDate = new Date(2025, 9, 21) // October 21, 2025
    global.Date = class extends originalDate {
      constructor(...args: ConstructorParameters<typeof originalDate> | []) {
        if (args.length === 0) {
          super(mockDate.getTime())
        } else {
          super(...args)
        }
      }

      static now() {
        return mockDate.getTime()
      }
    } as typeof originalDate
  })

  afterEach(() => {
    // Restore the original Date
    global.Date = originalDate
    vi.clearAllMocks()
  })

  it('should return true for dates in the past (with day of week)', () => {
    expect(isDayInPast('Monday, November 18, 2024')).toBe(true)
    expect(isDayInPast('Saturday, October 20, 2025')).toBe(true) // Yesterday
  })

  it('should return false for today (with day of week)', () => {
    expect(isDayInPast('Tuesday, October 21, 2025')).toBe(false)
  })

  it('should return false for dates in the future (with day of week)', () => {
    expect(isDayInPast('Wednesday, October 22, 2025')).toBe(false)
    expect(isDayInPast('Thursday, December 25, 2025')).toBe(false)
    expect(isDayInPast('Wednesday, January 1, 2026')).toBe(false)
  })

  it('should handle different date formats with day of week', () => {
    expect(isDayInPast('Monday, November 18, 2024')).toBe(true)
    expect(isDayInPast('Friday, December 25, 2025')).toBe(false)
  })

  it('should return false for date formats without day of week', () => {
    // The regex pattern requires a day of week, so these won't parse correctly
    expect(isDayInPast('November 18, 2024')).toBe(false)
    expect(isDayInPast('December 25, 2025')).toBe(false)
    expect(isDayInPast('January 1, 2025')).toBe(false)
  })

  it('should return false for invalid date strings', () => {
    expect(isDayInPast('Invalid date')).toBe(false)
    expect(isDayInPast('2024-11-18')).toBe(false) // Wrong format
    expect(isDayInPast('11/18/2024')).toBe(false) // Wrong format
    expect(isDayInPast('')).toBe(false)
  })

  it('should return false for malformed month names', () => {
    expect(isDayInPast('Monday, InvalidMonth 18, 2024')).toBe(false)
  })

  it('should handle all months correctly (with day of week)', () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    months.forEach((month) => {
      // All dates in 2024 with day of week should be in the past
      expect(isDayInPast(`Monday, ${month} 15, 2024`)).toBe(true)
      // All dates in December 2025 should be in the future
      if (month === 'December') {
        expect(isDayInPast(`Monday, ${month} 15, 2025`)).toBe(false)
      }
    })
  })

  it('should handle dates with flexible comma placement', () => {
    // The regex allows optional commas with ,? so various formats work
    expect(isDayInPast('Monday November 18 2024')).toBe(true) // Old date without commas
    expect(isDayInPast('Monday November 18, 2024')).toBe(true) // Comma before year only
    expect(isDayInPast('Monday, November 18 2024')).toBe(true) // Comma after day only
  })

  it('should handle year boundaries correctly (with day of week)', () => {
    // December 31, 2024 should be in the past
    expect(isDayInPast('Tuesday, December 31, 2024')).toBe(true)
    // January 1, 2025 should be in the past
    expect(isDayInPast('Thursday, January 1, 2025')).toBe(true)
    // December 31, 2025 should be in the future
    expect(isDayInPast('Wednesday, December 31, 2025')).toBe(false)
  })
})
