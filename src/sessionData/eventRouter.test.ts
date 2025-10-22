import { describe, it, expect } from 'vitest'
import { getEventData, getEventName } from './eventRouter'
import eps2025Data from './events/eps-2025'
import epistemologiaAnaliticaUemaData from './events/epistemologia-analitica-uema'

describe('eventRouter', () => {
  describe('getEventData', () => {
    describe('trailing slash handling', () => {
      it('should return correct event for path without trailing slash', () => {
        const eventData = getEventData('/eps-2025')
        expect(eventData).toBe(eps2025Data)
      })

      it('should return correct event for path with trailing slash', () => {
        const eventData = getEventData('/eps-2025/')
        expect(eventData).toBe(eps2025Data)
      })

      it('should return correct event for epistemologia-analitica-uema without trailing slash', () => {
        const eventData = getEventData('/epistemologia-analitica-uema')
        expect(eventData).toBe(epistemologiaAnaliticaUemaData)
      })

      it('should return correct event for epistemologia-analitica-uema with trailing slash', () => {
        const eventData = getEventData('/epistemologia-analitica-uema/')
        expect(eventData).toBe(epistemologiaAnaliticaUemaData)
      })

      it('should handle root path correctly', () => {
        const eventData = getEventData('/')
        expect(eventData).toBe(eps2025Data)
      })

      it('should handle root path with multiple trailing slashes', () => {
        const eventData = getEventData('//')
        expect(eventData).toBe(eps2025Data)
      })
    })

    describe('subpaths', () => {
      it('should match event for subpath without trailing slash', () => {
        const eventData = getEventData('/eps-2025/schedule')
        expect(eventData).toBe(eps2025Data)
      })

      it('should match event for subpath with trailing slash', () => {
        const eventData = getEventData('/eps-2025/schedule/')
        expect(eventData).toBe(eps2025Data)
      })
    })

    describe('default fallback', () => {
      it('should default to eps-2025 for unknown paths', () => {
        const eventData = getEventData('/unknown-event')
        expect(eventData).toBe(eps2025Data)
      })

      it('should default to eps-2025 for unknown paths with trailing slash', () => {
        const eventData = getEventData('/unknown-event/')
        expect(eventData).toBe(eps2025Data)
      })
    })
  })

  describe('getEventName', () => {
    it('should return correct name for path without trailing slash', () => {
      const name = getEventName('/eps-2025')
      expect(name).toBe(eps2025Data.name)
    })

    it('should return correct name for path with trailing slash', () => {
      const name = getEventName('/eps-2025/')
      expect(name).toBe(eps2025Data.name)
    })

    it('should return correct name for epistemologia-analitica-uema without trailing slash', () => {
      const name = getEventName('/epistemologia-analitica-uema')
      expect(name).toBe(epistemologiaAnaliticaUemaData.name)
    })

    it('should return correct name for epistemologia-analitica-uema with trailing slash', () => {
      const name = getEventName('/epistemologia-analitica-uema/')
      expect(name).toBe(epistemologiaAnaliticaUemaData.name)
    })
  })
})
