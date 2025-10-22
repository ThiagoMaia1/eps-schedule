import { type ScheduleData, type ScheduleEntry } from '../types/schedule'
import { startOfDay, isBefore } from 'date-fns'

// Format minutes to time string
export const formatMinutesToTime = (
  minutes: number,
  compact: boolean = false
): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours

  // In compact mode, omit :00 for on-the-hour times
  if (compact && mins === 0) {
    return `${displayHours} ${period}`
  }

  return `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`
}

// Calculate time range for a day
export const getTimeRange = (
  dayData: ScheduleData,
  isEntryVisible: (entry: ScheduleEntry, dayData?: ScheduleData) => boolean
) => {
  let minTime = Infinity
  let maxTime = -Infinity

  dayData.timeSlots.forEach((slot) => {
    Object.values(slot.sessions).forEach((entries) => {
      entries.forEach((entry) => {
        if (!isEntryVisible(entry, dayData)) return

        if (entry.startMinutes < minTime) minTime = entry.startMinutes
        if (entry.endMinutes > maxTime) maxTime = entry.endMinutes
      })
    })
  })

  // If no sessions, use a default range
  if (minTime === Infinity || maxTime === -Infinity) {
    minTime = 8 * 60 // 8:00 AM
    maxTime = 18 * 60 // 6:00 PM
  }

  // Round to nearest hour
  minTime = Math.floor(minTime / 60) * 60
  maxTime = Math.ceil(maxTime / 60) * 60

  return { minTime, maxTime }
}

// Generate hourly time markers
export const generateTimeMarkers = (
  minTime: number,
  maxTime: number
): number[] => {
  const markers: number[] = []
  for (let time = minTime; time < maxTime; time += 60) {
    markers.push(time)
  }
  return markers
}

// Get hotel from location string
export const getHotelFromLocation = (location: string): string | null => {
  if (location.includes('Copley Place')) return 'Copley Place'
  if (location.includes('Sheraton')) return 'Sheraton'
  return null
}

// Parse day string or Date object and determine if it's in the past
export const isDayInPast = (day: string | Date): boolean => {
  try {
    let dayDate: Date

    // If it's already a Date object, use it directly
    if (day instanceof Date) {
      dayDate = day
    } else {
      // Parse day strings like "Monday, November 18, 2024" or "November 18, 2024"
      const dateParts = day.match(/(\w+),?\s+(\w+)\s+(\d+),?\s+(\d{4})/)
      if (!dateParts) return false

      const monthStr = dateParts[2]
      const dayNum = parseInt(dateParts[3], 10)
      const year = parseInt(dateParts[4], 10)

      const monthMap: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      }

      const month = monthMap[monthStr]
      if (month === undefined) return false

      dayDate = new Date(year, month, dayNum)
    }

    // Use date-fns for date comparison
    const today = startOfDay(new Date())
    const dayStart = startOfDay(dayDate)

    return isBefore(dayStart, today)
  } catch {
    return false
  }
}
