import { type ScheduleEntry } from '../types/schedule'
import { isBefore, set } from 'date-fns'

/**
 * Helper function to check if an event is in the past
 */
export const isEventPast = (entry: ScheduleEntry): boolean => {
  if (!entry.endTime) return false
  if (!entry.dateObject && !entry.date) return false

  try {
    const now = new Date()
    let eventDate: Date

    // Prefer dateObject if available
    if (entry.dateObject) {
      // Parse the end time and set it on the date object
      const timeMatch = entry.endTime.match(/(\d+):(\d+)\s*(AM|PM)/i)
      if (!timeMatch) return false

      let hours = parseInt(timeMatch[1], 10)
      const minutes = parseInt(timeMatch[2], 10)
      const period = timeMatch[3].toUpperCase()

      if (period === 'PM' && hours !== 12) hours += 12
      if (period === 'AM' && hours === 12) hours = 0

      eventDate = set(entry.dateObject, { hours, minutes, seconds: 0 })
    } else {
      // Fallback to parsing the date string
      const currentYear = now.getFullYear()
      const dateStr = entry.date!.replace(/(\d+)(st|nd|rd|th)/, '$1')
      const dateTimeStr = `${dateStr}, ${currentYear} ${entry.endTime}`
      eventDate = new Date(dateTimeStr)

      // Validate the date
      if (isNaN(eventDate.getTime())) return false
    }

    return isBefore(eventDate, now)
  } catch {
    return false
  }
}

/**
 * Determines if an event card should be visually faded
 * Cards are faded when they are in the past
 */
export const shouldFadeEvent = (entry: ScheduleEntry): boolean => {
  return isEventPast(entry)
}
