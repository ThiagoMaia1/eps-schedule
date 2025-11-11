import type { EventData } from './types'

const DEFAULT_EVENT = 'eps-2025'

// Automatically import all event files from the events folder
const eventModules = import.meta.glob<{ default: EventData }>('./events/*.ts', {
  eager: true,
})

// Build the event data map dynamically from imported modules
const eventDataMap: Record<string, EventData> = {}
let defaultEventData: EventData | null = null

for (const [path, module] of Object.entries(eventModules)) {
  // Extract filename without extension (e.g., './events/eps-2025.ts' -> 'eps-2025')
  const filename = path.replace('./events/', '').replace('.ts', '')
  const routePath = `/${filename}`

  eventDataMap[routePath] = module.default

  // Set EPS 2025 as the default
  if (filename === DEFAULT_EVENT) {
    defaultEventData = module.default
    eventDataMap['/'] = module.default
  }
}

if (!defaultEventData) {
  const firstEvent = Object.values(eventDataMap)[0]
  if (firstEvent) {
    defaultEventData = firstEvent
    eventDataMap['/'] = firstEvent
  }
}

/**
 * Normalize a path by removing trailing slashes (except for root path)
 */
const normalizePath = (path: string): string => {
  if (!path || path === '/' || path === '') {
    return '/'
  }
  return path.replace(/\/+$/, '')
}

const getEventByPath = (path: string): EventData => {
  // For hash routing, extract the path from the hash
  const currentPath = normalizePath(path || '/')
  return (
    eventDataMap[currentPath] ||
    defaultEventData ||
    Object.values(eventDataMap)[0]
  )
}

/**
 * Get event data based on the current URL hash path
 * @param path - Optional path override (defaults to current hash path)
 * @returns Event data for the requested event
 */
export function getEventData(path?: string): EventData {
  // Normalize the path to handle trailing slashes
  const currentPath = normalizePath(path || '/')

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

  // Default to the configured default event or first available event
  return defaultEventData || Object.values(eventDataMap)[0]
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
