import { type ScheduleEntry } from '../types/schedule'

/**
 * Helper function to check if an event is in the past
 */
export const isEventPast = (entry: ScheduleEntry): boolean => {
  if (!entry.date || !entry.endTime) return false

  try {
    const now = new Date()
    const currentYear = now.getFullYear()

    // Parse the date (e.g., "October 20th" -> Date)
    const dateStr = entry.date.replace(/(\d+)(st|nd|rd|th)/, '$1')
    const eventDate = new Date(`${dateStr}, ${currentYear} ${entry.endTime}`)

    return eventDate < now
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
