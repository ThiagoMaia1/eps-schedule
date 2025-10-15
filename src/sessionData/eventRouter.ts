import type { EventData } from './types'
import eps2025Data from './events/eps-2025'
import epistemologiaAnaliticaUemaData from './events/epistemologia-analitica-uema'

// Map of event paths to their data
const eventDataMap: Record<string, EventData> = {
  '/eps-2025': eps2025Data,
  '/epistemologia-analitica-uema': epistemologiaAnaliticaUemaData,
  // Default to EPS 2025 for root path
  '/': eps2025Data,
}

const getEventByPath = (path: string): EventData => {
  // For hash routing, extract the path from the hash
  const currentPath = path || '/'
  return eventDataMap[currentPath] || eps2025Data
}

/**
 * Get event data based on the current URL hash path
 * @param path - Optional path override (defaults to current hash path)
 * @returns Event data for the requested event
 */
export function getEventData(path?: string): EventData {
  // Use the path directly (it's already processed by useCurrentPath)
  const currentPath = path || '/'

  // Check for exact match
  if (eventDataMap[currentPath]) {
    return eventDataMap[currentPath]
  }

  // Check if any registered path is a prefix of the current path
  for (const [registeredPath, data] of Object.entries(eventDataMap)) {
    if (registeredPath !== '/' && currentPath.startsWith(registeredPath)) {
      return data
    }
  }

  // Default to EPS 2025
  return eps2025Data
}

/**
 * Get event configuration based on the current URL path
 * @param path - Optional path override (defaults to window.location.pathname)
 * @returns Event configuration options
 */
export function getEventConfig(path?: string): {
  hideSpecialEventsByDefault: boolean
} {
  const schedule = getEventData(path)
  return {
    hideSpecialEventsByDefault: schedule.hideSpecialEventsByDefault ?? true,
  }
}

/**
 * Get available event paths
 * @returns Array of available event paths
 */
export function getAvailableEventPaths(): string[] {
  return Object.keys(eventDataMap).filter((path) => path !== '/')
}

/**
 * Get event name from path
 * @param path - Event path
 * @returns Human-readable event name
 */
export function getEventName(path: string): string {
  const event = getEventByPath(path)
  return event?.name || 'Unknown Event'
}
