import { describe, it, expect } from 'vitest'
import {
  sessionsOverlap,
  checkForHotelChange,
  calculateMaxSimultaneousSessions,
  assignLocationsToColumns,
  calculateSessionLayout,
} from './sessionLayoutUtils'
import { type SessionWithLocationExtended } from '../hooks/useScheduleTableFilters'
import { type ScheduleEntry } from '../types/schedule'

// Helper to create a mock session
const createSession = (
  id: string,
  location: string,
  startMinutes: number,
  endMinutes: number,
  shiftId?: string
): SessionWithLocationExtended => ({
  entry: {
    id,
    startTime: `${Math.floor(startMinutes / 60)}:${startMinutes % 60}`,
    endTime: `${Math.floor(endMinutes / 60)}:${endMinutes % 60}`,
    startMinutes,
    endMinutes,
    shiftId,
  } as ScheduleEntry,
  location,
  startMinutes,
  endMinutes,
})

describe('sessionsOverlap', () => {
  it('should return true for overlapping sessions', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 75, 105)

    expect(sessionsOverlap(session1, session2)).toBe(true)
  })

  it('should return false for non-overlapping sessions', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 90, 120)

    expect(sessionsOverlap(session1, session2)).toBe(false)
  })

  it('should return false for back-to-back sessions', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 90, 120)

    expect(sessionsOverlap(session1, session2)).toBe(false)
  })

  it('should return true when one session contains another', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 120)
    const session2 = createSession('2', 'Sheraton - Room B', 75, 90)

    expect(sessionsOverlap(session1, session2)).toBe(true)
  })

  it('should be symmetric', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 75, 105)

    expect(sessionsOverlap(session1, session2)).toBe(
      sessionsOverlap(session2, session1)
    )
  })
})

describe('checkForHotelChange', () => {
  it('should return false when there are no previous sessions', () => {
    const currentSession = createSession('1', 'Sheraton - Room A', 60, 90)

    expect(checkForHotelChange(currentSession, [currentSession])).toBe(false)
  })

  it('should return false when hotel is the same as previous session', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 90, 120)

    expect(checkForHotelChange(session2, [session1, session2])).toBe(false)
  })

  it('should return true when hotel differs from previous session', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Copley Place - Room B', 90, 120)

    expect(checkForHotelChange(session2, [session1, session2])).toBe(true)
  })

  it('should only compare with the latest previous session', () => {
    const session1 = createSession('1', 'Copley Place - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 90, 120)
    const session3 = createSession('3', 'Sheraton - Room C', 120, 150)

    // session3 should compare only with session2 (same hotel), not session1
    expect(checkForHotelChange(session3, [session1, session2, session3])).toBe(
      false
    )
  })

  it('should handle ties - check all sessions ending at the latest time', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Copley Place - Room B', 60, 90) // Same end time as session1
    const session3 = createSession('3', 'Sheraton - Room C', 90, 120)

    // session3 should check both session1 and session2 (tied end times)
    // Since session2 is at Copley Place, should return true
    expect(checkForHotelChange(session3, [session1, session2, session3])).toBe(
      true
    )
  })

  it('should return false when location has no hotel', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Unknown Location', 90, 120)

    expect(checkForHotelChange(session2, [session1, session2])).toBe(false)
  })

  it('should ignore previous sessions at locations with no hotel', () => {
    const session1 = createSession('1', 'Unknown Location', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room A', 90, 120)

    expect(checkForHotelChange(session2, [session1, session2])).toBe(false)
  })
})

describe('calculateMaxSimultaneousSessions', () => {
  it('should return 1 for a single session', () => {
    const session = createSession('1', 'Sheraton - Room A', 60, 90)

    expect(calculateMaxSimultaneousSessions([session])).toBe(1)
  })

  it('should return 1 for non-overlapping sessions', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 90, 120),
      createSession('3', 'Sheraton - Room C', 120, 150),
    ]

    expect(calculateMaxSimultaneousSessions(sessions)).toBe(1)
  })

  it('should return 2 for two overlapping sessions', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 75, 105),
    ]

    expect(calculateMaxSimultaneousSessions(sessions)).toBe(2)
  })

  it('should return 3 when three sessions overlap at some point', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 100),
      createSession('2', 'Sheraton - Room B', 70, 110),
      createSession('3', 'Sheraton - Room C', 80, 120),
    ]

    // All three overlap between 80-100
    expect(calculateMaxSimultaneousSessions(sessions)).toBe(3)
  })

  it('should handle complex overlapping patterns', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 70, 100),
      createSession('3', 'Sheraton - Room C', 80, 110),
      createSession('4', 'Sheraton - Room D', 105, 120),
    ]

    // Max is 3 (sessions 1, 2, 3 overlap)
    expect(calculateMaxSimultaneousSessions(sessions)).toBe(3)
  })
})

describe('assignLocationsToColumns', () => {
  it('should assign single location to column 0', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room A', 90, 120),
    ]

    const result = assignLocationsToColumns(sessions)
    expect(result.get('Sheraton - Room A')).toBe(0)
  })

  it('should assign non-overlapping locations to the same column', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 90, 120),
    ]

    const result = assignLocationsToColumns(sessions)
    expect(result.get('Sheraton - Room A')).toBe(0)
    expect(result.get('Sheraton - Room B')).toBe(0)
  })

  it('should assign overlapping locations to different columns', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 75, 105),
    ]

    const result = assignLocationsToColumns(sessions)
    expect(result.get('Sheraton - Room A')).toBe(0)
    expect(result.get('Sheraton - Room B')).toBe(1)
  })

  it('should handle three-way overlaps', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 100),
      createSession('2', 'Sheraton - Room B', 70, 110),
      createSession('3', 'Sheraton - Room C', 80, 120),
    ]

    const result = assignLocationsToColumns(sessions)
    expect(result.get('Sheraton - Room A')).toBe(0)
    expect(result.get('Sheraton - Room B')).toBe(1)
    expect(result.get('Sheraton - Room C')).toBe(2)
  })

  it('should reuse columns when possible', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 90),
      createSession('2', 'Sheraton - Room B', 70, 100),
      createSession('3', 'Sheraton - Room C', 110, 140),
    ]

    const result = assignLocationsToColumns(sessions)
    expect(result.get('Sheraton - Room A')).toBe(0)
    expect(result.get('Sheraton - Room B')).toBe(1)
    // Room C doesn't overlap with A or B, so it can reuse column 0
    expect(result.get('Sheraton - Room C')).toBe(0)
  })
})

describe('calculateSessionLayout', () => {
  it('should return full width for non-overlapping session', () => {
    const session = createSession('1', 'Sheraton - Room A', 60, 90)

    const result = calculateSessionLayout(session, [session])
    expect(result).toEqual({
      left: '0%',
      width: '100%',
      needsHotelChange: false,
    })
  })

  it('should split width evenly for two overlapping sessions', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 75, 105)

    const result1 = calculateSessionLayout(session1, [session1, session2])
    const result2 = calculateSessionLayout(session2, [session1, session2])

    expect(result1.width).toBe('50%')
    expect(result2.width).toBe('50%')
    expect(result1.left).toBe('0%')
    expect(result2.left).toBe('50%')
  })

  it('should detect hotel changes', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Copley Place - Room B', 90, 120)

    const result = calculateSessionLayout(session2, [session1, session2])
    expect(result.needsHotelChange).toBe(true)
  })

  it('should not show hotel change when hotels are the same', () => {
    const session1 = createSession('1', 'Sheraton - Room A', 60, 90)
    const session2 = createSession('2', 'Sheraton - Room B', 90, 120)

    const result = calculateSessionLayout(session2, [session1, session2])
    expect(result.needsHotelChange).toBe(false)
  })

  it('should handle complex layouts with three overlapping sessions', () => {
    const sessions = [
      createSession('1', 'Sheraton - Room A', 60, 100),
      createSession('2', 'Sheraton - Room B', 70, 110),
      createSession('3', 'Sheraton - Room C', 80, 120),
    ]

    const result1 = calculateSessionLayout(sessions[0], sessions)
    const result2 = calculateSessionLayout(sessions[1], sessions)
    const result3 = calculateSessionLayout(sessions[2], sessions)

    // All should have 33.33% width (100/3)
    expect(parseFloat(result1.width)).toBeCloseTo(33.33, 1)
    expect(parseFloat(result2.width)).toBeCloseTo(33.33, 1)
    expect(parseFloat(result3.width)).toBeCloseTo(33.33, 1)

    // Should be in different columns
    expect(result1.left).toBe('0%')
    expect(parseFloat(result2.left)).toBeCloseTo(33.33, 1)
    expect(parseFloat(result3.left)).toBeCloseTo(66.66, 1)
  })
})
