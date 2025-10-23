// Utility functions for managing selected sessions in localStorage
// Sessions are stored per event to keep selections separate

import { trackSessionSelection, trackSessionsClear } from './analytics'

const STORAGE_KEY_PREFIX = 'selectedSessions'
const OLD_STORAGE_KEY = 'favoriteSessions' // For migration (legacy global key)
const OLD_GENERAL_KEY = 'selectedSessions' // For migration (legacy general key)

/**
 * Get the storage key for a specific event
 * @param eventPath - The event path (e.g., '/eps-2025')
 */
const getStorageKey = (eventPath: string): string => {
  // Normalize the path (remove leading slash for consistency)
  const normalizedPath = eventPath.startsWith('/')
    ? eventPath.slice(1)
    : eventPath

  // Default to 'eps-2025' for root path
  const pathKey = normalizedPath || 'eps-2025'

  return `${STORAGE_KEY_PREFIX}:${pathKey}`
}

export const getSelectedSessions = (eventPath: string = '/'): Set<string> => {
  try {
    const storageKey = getStorageKey(eventPath)

    // Try event-specific key first
    let stored = localStorage.getItem(storageKey)

    // If not found, try migrating from old keys (only for default event)
    if (!stored && (eventPath === '/' || eventPath === '/eps-2025')) {
      // Try old general key
      stored = localStorage.getItem(OLD_GENERAL_KEY)

      // If still not found, try oldest key
      if (!stored) {
        stored = localStorage.getItem(OLD_STORAGE_KEY)
      }

      if (stored) {
        // Migrate to new event-specific key
        localStorage.setItem(storageKey, stored)
        // Clean up old keys
        localStorage.removeItem(OLD_STORAGE_KEY)
        localStorage.removeItem(OLD_GENERAL_KEY)
      }
    }

    if (stored) {
      return new Set(JSON.parse(stored))
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error)
  }
  return new Set()
}

export const saveSelectedSessions = (
  sessions: Set<string>,
  eventPath: string = '/'
): void => {
  try {
    const storageKey = getStorageKey(eventPath)
    // Ensure deduplication by creating a new Set before saving
    const dedupedSessions = new Set(sessions)
    localStorage.setItem(
      storageKey,
      JSON.stringify(Array.from(dedupedSessions))
    )
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

export const toggleSessionSelection = (
  sessionId: string,
  eventPath: string = '/'
): Set<string> => {
  const selected = getSelectedSessions(eventPath)
  const wasSelected = selected.has(sessionId)

  if (wasSelected) {
    selected.delete(sessionId)
  } else {
    // Add ensures deduplication (Set property)
    selected.add(sessionId)
  }
  saveSelectedSessions(selected, eventPath)

  // Track the selection change
  trackSessionSelection(
    wasSelected ? 'remove' : 'add',
    sessionId,
    eventPath,
    JSON.stringify([...selected])
  )

  // Return a new Set to ensure deduplication
  return new Set(selected)
}

export const isSessionSelected = (
  sessionId: string,
  eventPath: string = '/'
): boolean => {
  const selected = getSelectedSessions(eventPath)
  return selected.has(sessionId)
}

export const setSelectedSessions = (
  sessions: Set<string>,
  eventPath: string = '/',
  options?: { skipAnalytics?: boolean }
): void => {
  const previousSessions = getSelectedSessions(eventPath)
  const previousCount = previousSessions.size
  const newCount = sessions.size

  saveSelectedSessions(sessions, eventPath)

  // Track analytics unless explicitly skipped (useful for imports)
  if (!options?.skipAnalytics) {
    // If clearing sessions (new count is 0 and had selections before)
    if (newCount === 0 && previousCount > 0) {
      trackSessionsClear(eventPath, previousCount)
    }
  }
}

/**
 * Check if there are any selected sessions across all events
 * This is useful for determining if a user has ever selected any sessions
 */
export const hasAnySelectedSessions = (): boolean => {
  try {
    // Get all localStorage keys
    const keys = Object.keys(localStorage)

    // Check for any keys that match our pattern and have non-empty values
    for (const key of keys) {
      if (key.startsWith(STORAGE_KEY_PREFIX + ':')) {
        const stored = localStorage.getItem(key)
        if (stored) {
          try {
            const sessions = JSON.parse(stored)
            if (Array.isArray(sessions) && sessions.length > 0) {
              return true
            }
          } catch {
            // Skip invalid JSON
            continue
          }
        }
      }
    }

    return false
  } catch (error) {
    console.error('Error checking for selected sessions:', error)
    return false
  }
}

/**
 * Get all selected sessions across all events
 * @returns Map of event paths to their selected session IDs
 */
export const getAllSelectedSessionsAcrossEvents = (): Map<
  string,
  Set<string>
> => {
  const allSessions = new Map<string, Set<string>>()

  try {
    const keys = Object.keys(localStorage)

    for (const key of keys) {
      if (key.startsWith(STORAGE_KEY_PREFIX + ':')) {
        const stored = localStorage.getItem(key)
        if (stored) {
          try {
            const sessions = JSON.parse(stored)
            if (Array.isArray(sessions) && sessions.length > 0) {
              // Extract event path from key (e.g., "selectedSessions:eps-2025" -> "/eps-2025")
              const eventPath =
                '/' + key.substring(STORAGE_KEY_PREFIX.length + 1)
              allSessions.set(eventPath, new Set(sessions))
            }
          } catch {
            // Skip invalid JSON
            continue
          }
        }
      }
    }
  } catch (error) {
    console.error('Error getting all selected sessions:', error)
  }

  return allSessions
}

/**
 * Set selected sessions for multiple events at once
 * @param sessionsMap - Map of event paths to their selected session IDs
 */
export const setAllSelectedSessionsAcrossEvents = (
  sessionsMap: Map<string, Set<string>>
): void => {
  try {
    for (const [eventPath, sessions] of sessionsMap.entries()) {
      saveSelectedSessions(sessions, eventPath)
    }
  } catch (error) {
    console.error('Error setting all selected sessions:', error)
  }
}

/**
 * One-time migration: Move any existing selectedSessions to the eps-2025 event
 * This ensures users don't lose their selections after the per-event update
 */
export const migrateExistingSelectionsToEps2025 = (): void => {
  try {
    const migrationKey = 'selectedSessions:migrationComplete'

    // Check if migration has already been performed
    if (localStorage.getItem(migrationKey)) {
      return
    }

    // Check for old general key (not event-specific)
    const oldGeneralKey = 'selectedSessions'
    const oldStoredData = localStorage.getItem(oldGeneralKey)

    if (oldStoredData) {
      try {
        const sessions = JSON.parse(oldStoredData)
        if (Array.isArray(sessions) && sessions.length > 0) {
          // Save to eps-2025 event
          const eps2025Key = getStorageKey('/eps-2025')

          // Only migrate if the eps-2025 key doesn't already exist
          if (!localStorage.getItem(eps2025Key)) {
            localStorage.setItem(eps2025Key, oldStoredData)
            console.log(
              `Migrated ${sessions.length} session(s) to eps-2025 event`
            )
          }

          // Remove the old general key
          localStorage.removeItem(oldGeneralKey)
        }
      } catch (error) {
        console.error('Error migrating sessions:', error)
      }
    }

    // Also check for the oldest key (favoriteSessions)
    const oldFavoriteKey = 'favoriteSessions'
    const oldFavoriteData = localStorage.getItem(oldFavoriteKey)

    if (oldFavoriteData) {
      try {
        const sessions = JSON.parse(oldFavoriteData)
        if (Array.isArray(sessions) && sessions.length > 0) {
          const eps2025Key = getStorageKey('/eps-2025')

          // Only migrate if the eps-2025 key doesn't already exist
          if (!localStorage.getItem(eps2025Key)) {
            localStorage.setItem(eps2025Key, oldFavoriteData)
            console.log(
              `Migrated ${sessions.length} favorite session(s) to eps-2025 event`
            )
          }

          // Remove the old favorite key
          localStorage.removeItem(oldFavoriteKey)
        }
      } catch (error) {
        console.error('Error migrating favorite sessions:', error)
      }
    }

    // Mark migration as complete
    localStorage.setItem(migrationKey, 'true')
  } catch (error) {
    console.error('Error during migration:', error)
  }
}
