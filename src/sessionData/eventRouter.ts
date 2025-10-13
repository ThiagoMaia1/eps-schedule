import type { EventData as EventSchedule } from './types'
import eps2025Data from './events/eps-2025'
import epistemologiaAnaliticaUemaData from './events/epistemologia-analitica-uema'

type EventData = {
  name: string
  schedule: EventSchedule
}

// Map of event paths to their data
const eventDataMap: Record<string, EventData> = {
  '/eps-2025': {
    name: 'ETS 2025 - Boston',
    schedule: eps2025Data,
  },
  '/epistemologia-analitica-uema': {
    name: 'Epistemologia Analítica UEMA',
    schedule: epistemologiaAnaliticaUemaData,
  },
  // Default to EPS 2025 for root path
  '/': {
    name: 'ETS 2025 - Boston',
    schedule: eps2025Data,
  },
}

const getEventByPath = (path: string): EventData => {
  const currentPath = '/' + (path || window.location.pathname).split(/[/?]/)[2]
  return eventDataMap[currentPath]
}

/**
 * Get event data based on the current URL path
 * @param path - Optional path override (defaults to window.location.pathname)
 * @returns Event data for the requested event
 */
export function getEventData(path?: string): EventSchedule {
  const currentPath = '/' + (path || window.location.pathname).split(/[/?]/)[2]

  // Check for exact match
  if (eventDataMap[currentPath]) {
    return eventDataMap[currentPath].schedule
  }

  // Check if any registered path is a prefix of the current path
  for (const [registeredPath, data] of Object.entries(eventDataMap)) {
    if (registeredPath !== '/' && currentPath.startsWith(registeredPath)) {
      return data.schedule
    }
  }

  // Default to EPS 2025
  return eps2025Data
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
