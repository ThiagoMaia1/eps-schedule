// Utility functions for managing selected sessions in localStorage

const STORAGE_KEY = 'selectedSessions'
const OLD_STORAGE_KEY = 'favoriteSessions' // For migration

export const getSelectedSessions = (): Set<string> => {
  try {
    // Try new key first
    let stored = localStorage.getItem(STORAGE_KEY)

    // If not found, try migrating from old key
    if (!stored) {
      stored = localStorage.getItem(OLD_STORAGE_KEY)
      if (stored) {
        // Migrate to new key
        localStorage.setItem(STORAGE_KEY, stored)
        localStorage.removeItem(OLD_STORAGE_KEY)
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

export const saveSelectedSessions = (sessions: Set<string>): void => {
  try {
    // Ensure deduplication by creating a new Set before saving
    const dedupedSessions = new Set(sessions)
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(Array.from(dedupedSessions))
    )
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

export const toggleSessionSelection = (sessionId: string): Set<string> => {
  const selected = getSelectedSessions()
  if (selected.has(sessionId)) {
    selected.delete(sessionId)
  } else {
    // Add ensures deduplication (Set property)
    selected.add(sessionId)
  }
  saveSelectedSessions(selected)
  // Return a new Set to ensure deduplication
  return new Set(selected)
}

export const isSessionSelected = (sessionId: string): boolean => {
  const selected = getSelectedSessions()
  return selected.has(sessionId)
}

export const setSelectedSessions = (sessions: Set<string>): void => {
  saveSelectedSessions(sessions)
}
