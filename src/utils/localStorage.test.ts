import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getSelectedSessions,
  saveSelectedSessions,
  toggleSessionSelection,
  isSessionSelected,
  setSelectedSessions,
  hasAnySelectedSessions,
  migrateExistingSelectionsToEps2025,
} from './localStorage'

// Mock localStorage using a Proxy to support both method calls and Object.keys()
const createLocalStorageMock = () => {
  const store: Record<string, string> = {}

  const handler = {
    get(_target: Record<string, unknown>, prop: string | symbol) {
      // Handle localStorage methods
      if (prop === 'getItem') {
        return (key: string) => store[key] || null
      }
      if (prop === 'setItem') {
        return (key: string, value: string) => {
          store[key] = value
        }
      }
      if (prop === 'removeItem') {
        return (key: string) => {
          delete store[key]
        }
      }
      if (prop === 'clear') {
        return () => {
          for (const key in store) {
            delete store[key]
          }
        }
      }
      if (prop === 'key') {
        return (index: number) => Object.keys(store)[index] || null
      }
      if (prop === 'length') {
        return Object.keys(store).length
      }
      // Return stored values for other properties (needed for iteration)
      return store[prop as string]
    },
    ownKeys() {
      return Object.keys(store)
    },
    getOwnPropertyDescriptor(_target, prop: string | symbol) {
      if (typeof prop === 'string' && prop in store) {
        return {
          enumerable: true,
          configurable: true,
          value: store[prop],
        }
      }
      return undefined
    },
  }

  return new Proxy({}, handler) as Storage
}

// @ts-expect-error - Mocking localStorage
global.localStorage = createLocalStorageMock()

describe('localStorage utilities', () => {
  beforeEach(() => {
    // Recreate localStorage to ensure clean state
    // @ts-expect-error - Mocking localStorage
    global.localStorage = createLocalStorageMock()
    // Clear console mocks
    vi.clearAllMocks()
  })

  describe('getSelectedSessions', () => {
    it('should return empty set when no sessions are stored', () => {
      const sessions = getSelectedSessions('/eps-2025')
      expect(sessions).toBeInstanceOf(Set)
      expect(sessions.size).toBe(0)
    })

    it('should return stored sessions for specific event', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1', 'session2'])
      )

      const sessions = getSelectedSessions('/eps-2025')
      expect(sessions.size).toBe(2)
      expect(sessions.has('session1')).toBe(true)
      expect(sessions.has('session2')).toBe(true)
    })

    it('should handle root path as eps-2025', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )

      const sessions = getSelectedSessions('/')
      expect(sessions.size).toBe(1)
      expect(sessions.has('session1')).toBe(true)
    })

    it('should migrate from old favoriteSessions key for eps-2025', () => {
      localStorage.setItem(
        'favoriteSessions',
        JSON.stringify(['oldSession1', 'oldSession2'])
      )

      const sessions = getSelectedSessions('/eps-2025')
      expect(sessions.size).toBe(2)
      expect(sessions.has('oldSession1')).toBe(true)
      expect(sessions.has('oldSession2')).toBe(true)

      // Old key should be removed
      expect(localStorage.getItem('favoriteSessions')).toBeNull()
      // New key should exist
      expect(localStorage.getItem('selectedSessions:eps-2025')).not.toBeNull()
    })

    it('should migrate from old selectedSessions key for eps-2025', () => {
      localStorage.setItem(
        'selectedSessions',
        JSON.stringify(['session1', 'session2'])
      )

      const sessions = getSelectedSessions('/eps-2025')
      expect(sessions.size).toBe(2)
      expect(sessions.has('session1')).toBe(true)
    })

    it('should not migrate for non-default events', () => {
      localStorage.setItem('selectedSessions', JSON.stringify(['session1']))

      const sessions = getSelectedSessions('/epistemologia-analitica-uema')
      expect(sessions.size).toBe(0)
      // Old key should still exist
      expect(localStorage.getItem('selectedSessions')).not.toBeNull()
    })

    it('should handle invalid JSON gracefully', () => {
      localStorage.setItem('selectedSessions:eps-2025', 'invalid-json')

      const sessions = getSelectedSessions('/eps-2025')
      expect(sessions).toBeInstanceOf(Set)
      expect(sessions.size).toBe(0)
    })

    it('should keep sessions separate per event', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )
      localStorage.setItem(
        'selectedSessions:epistemologia-analitica-uema',
        JSON.stringify(['session2'])
      )

      const eps2025Sessions = getSelectedSessions('/eps-2025')
      const uemaSessions = getSelectedSessions('/epistemologia-analitica-uema')

      expect(eps2025Sessions.size).toBe(1)
      expect(eps2025Sessions.has('session1')).toBe(true)
      expect(eps2025Sessions.has('session2')).toBe(false)

      expect(uemaSessions.size).toBe(1)
      expect(uemaSessions.has('session2')).toBe(true)
      expect(uemaSessions.has('session1')).toBe(false)
    })
  })

  describe('saveSelectedSessions', () => {
    it('should save sessions for specific event', () => {
      const sessions = new Set(['session1', 'session2'])
      saveSelectedSessions(sessions, '/eps-2025')

      const stored = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(stored).toHaveLength(2)
      expect(stored).toContain('session1')
      expect(stored).toContain('session2')
    })

    it('should handle root path as eps-2025', () => {
      const sessions = new Set(['session1'])
      saveSelectedSessions(sessions, '/')

      expect(localStorage.getItem('selectedSessions:eps-2025')).not.toBeNull()
    })

    it('should deduplicate sessions', () => {
      // Create a set with duplicates (though Set naturally deduplicates)
      const sessions = new Set(['session1', 'session1', 'session2'])
      saveSelectedSessions(sessions, '/eps-2025')

      const stored = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(stored).toHaveLength(2)
    })

    it('should save empty set', () => {
      const sessions = new Set<string>()
      saveSelectedSessions(sessions, '/eps-2025')

      const stored = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(stored).toHaveLength(0)
    })
  })

  describe('toggleSessionSelection', () => {
    it('should add session if not selected', () => {
      const result = toggleSessionSelection('session1', '/eps-2025')
      expect(result.has('session1')).toBe(true)
      expect(result.size).toBe(1)
    })

    it('should remove session if already selected', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1', 'session2'])
      )

      const result = toggleSessionSelection('session1', '/eps-2025')
      expect(result.has('session1')).toBe(false)
      expect(result.has('session2')).toBe(true)
      expect(result.size).toBe(1)
    })

    it('should persist changes to localStorage', () => {
      toggleSessionSelection('session1', '/eps-2025')

      const stored = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(stored).toContain('session1')
    })

    it('should return a new Set instance', () => {
      const result1 = toggleSessionSelection('session1', '/eps-2025')
      const result2 = toggleSessionSelection('session2', '/eps-2025')

      expect(result1).not.toBe(result2)
    })

    it('should handle multiple toggles', () => {
      let result = toggleSessionSelection('session1', '/eps-2025')
      expect(result.has('session1')).toBe(true)

      result = toggleSessionSelection('session1', '/eps-2025')
      expect(result.has('session1')).toBe(false)

      result = toggleSessionSelection('session1', '/eps-2025')
      expect(result.has('session1')).toBe(true)
    })
  })

  describe('isSessionSelected', () => {
    it('should return false for unselected session', () => {
      expect(isSessionSelected('session1', '/eps-2025')).toBe(false)
    })

    it('should return true for selected session', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )

      expect(isSessionSelected('session1', '/eps-2025')).toBe(true)
    })

    it('should be event-specific', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )

      expect(isSessionSelected('session1', '/eps-2025')).toBe(true)
      expect(
        isSessionSelected('session1', '/epistemologia-analitica-uema')
      ).toBe(false)
    })
  })

  describe('setSelectedSessions', () => {
    it('should save sessions using saveSelectedSessions', () => {
      const sessions = new Set(['session1', 'session2'])
      setSelectedSessions(sessions, '/eps-2025')

      const stored = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(stored).toHaveLength(2)
    })
  })

  describe('hasAnySelectedSessions', () => {
    it('should return false when no sessions exist', () => {
      expect(hasAnySelectedSessions()).toBe(false)
    })

    it('should return true when eps-2025 has sessions', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )

      expect(hasAnySelectedSessions()).toBe(true)
    })

    it('should return true when any event has sessions', () => {
      localStorage.setItem(
        'selectedSessions:epistemologia-analitica-uema',
        JSON.stringify(['session1'])
      )

      expect(hasAnySelectedSessions()).toBe(true)
    })

    it('should return false when all events have empty arrays', () => {
      localStorage.setItem('selectedSessions:eps-2025', JSON.stringify([]))
      localStorage.setItem(
        'selectedSessions:epistemologia-analitica-uema',
        JSON.stringify([])
      )

      expect(hasAnySelectedSessions()).toBe(false)
    })

    it('should handle multiple events with sessions', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1'])
      )
      localStorage.setItem(
        'selectedSessions:epistemologia-analitica-uema',
        JSON.stringify(['session2'])
      )

      expect(hasAnySelectedSessions()).toBe(true)
    })

    it('should ignore invalid JSON', () => {
      localStorage.setItem('selectedSessions:eps-2025', 'invalid-json')

      expect(hasAnySelectedSessions()).toBe(false)
    })

    it('should ignore non-array values', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify({ invalid: 'object' })
      )

      expect(hasAnySelectedSessions()).toBe(false)
    })

    it('should ignore unrelated localStorage keys', () => {
      localStorage.setItem('unrelated-key', JSON.stringify(['session1']))

      expect(hasAnySelectedSessions()).toBe(false)
    })
  })

  describe('migrateExistingSelectionsToEps2025', () => {
    beforeEach(() => {
      // Spy on console.log
      vi.spyOn(console, 'log').mockImplementation(() => {})
      vi.spyOn(console, 'error').mockImplementation(() => {})
    })

    it('should migrate from selectedSessions to eps-2025', () => {
      localStorage.setItem(
        'selectedSessions',
        JSON.stringify(['session1', 'session2'])
      )

      migrateExistingSelectionsToEps2025()

      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).toHaveLength(2)
      expect(eps2025Sessions).toContain('session1')
      expect(eps2025Sessions).toContain('session2')

      // Old key should be removed
      expect(localStorage.getItem('selectedSessions')).toBeNull()
      // Migration marker should be set
      expect(localStorage.getItem('selectedSessions:migrationComplete')).toBe(
        'true'
      )
    })

    it('should migrate from favoriteSessions to eps-2025', () => {
      localStorage.setItem(
        'favoriteSessions',
        JSON.stringify(['session1', 'session2'])
      )

      migrateExistingSelectionsToEps2025()

      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).toHaveLength(2)
      expect(localStorage.getItem('favoriteSessions')).toBeNull()
    })

    it('should prefer selectedSessions over favoriteSessions', () => {
      localStorage.setItem('selectedSessions', JSON.stringify(['session1']))
      localStorage.setItem('favoriteSessions', JSON.stringify(['session2']))

      migrateExistingSelectionsToEps2025()

      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).toContain('session1')
      expect(eps2025Sessions).not.toContain('session2')
    })

    it('should not overwrite existing eps-2025 sessions', () => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['existingSession'])
      )
      localStorage.setItem('selectedSessions', JSON.stringify(['session1']))

      migrateExistingSelectionsToEps2025()

      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).toContain('existingSession')
      expect(eps2025Sessions).not.toContain('session1')
    })

    it('should only run once', () => {
      localStorage.setItem('selectedSessions', JSON.stringify(['session1']))

      migrateExistingSelectionsToEps2025()

      // Set up new old data
      localStorage.setItem('selectedSessions', JSON.stringify(['session2']))

      // Run migration again
      migrateExistingSelectionsToEps2025()

      // Should not migrate session2
      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).not.toContain('session2')
    })

    it('should handle empty old keys gracefully', () => {
      localStorage.setItem('selectedSessions', JSON.stringify([]))

      migrateExistingSelectionsToEps2025()

      expect(localStorage.getItem('selectedSessions:eps-2025')).toBeNull()
    })

    it('should handle invalid JSON in old keys', () => {
      localStorage.setItem('selectedSessions', 'invalid-json')

      migrateExistingSelectionsToEps2025()

      expect(localStorage.getItem('selectedSessions:eps-2025')).toBeNull()
    })

    it('should log migration success', () => {
      localStorage.setItem(
        'selectedSessions',
        JSON.stringify(['session1', 'session2'])
      )

      migrateExistingSelectionsToEps2025()

      expect(console.log).toHaveBeenCalledWith(
        'Migrated 2 session(s) to eps-2025 event'
      )
    })

    it('should handle non-array values in old keys', () => {
      localStorage.setItem(
        'selectedSessions',
        JSON.stringify({ notAnArray: true })
      )

      migrateExistingSelectionsToEps2025()

      expect(localStorage.getItem('selectedSessions:eps-2025')).toBeNull()
    })

    it('should handle both old keys with favoriteSessions as fallback', () => {
      localStorage.setItem('favoriteSessions', JSON.stringify(['session1']))

      migrateExistingSelectionsToEps2025()

      const eps2025Sessions = JSON.parse(
        localStorage.getItem('selectedSessions:eps-2025') || '[]'
      )
      expect(eps2025Sessions).toContain('session1')
      expect(localStorage.getItem('favoriteSessions')).toBeNull()
    })
  })
})
