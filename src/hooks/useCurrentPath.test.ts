import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCurrentPath } from './useCurrentPath'

describe('useCurrentPath', () => {
  let originalHash: string

  beforeEach(() => {
    // Save original hash
    originalHash = window.location.hash
  })

  afterEach(() => {
    // Restore original hash
    window.location.hash = originalHash
  })

  describe('path extraction without trailing slashes', () => {
    it('should extract path without trailing slash from hash', () => {
      window.location.hash = '#/eps-2025'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })

    it('should handle root path', () => {
      window.location.hash = '#/'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/')
    })

    it('should handle empty hash as root', () => {
      window.location.hash = ''
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/')
    })

    it('should handle hash with only #', () => {
      window.location.hash = '#'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/')
    })

    it('should extract path and ignore query parameters', () => {
      window.location.hash = '#/eps-2025?session=123'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })
  })

  describe('path extraction with trailing slashes', () => {
    it('should remove trailing slash from simple path', () => {
      window.location.hash = '#/eps-2025/'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })

    it('should remove trailing slash from epistemologia-analitica-uema', () => {
      window.location.hash = '#/epistemologia-analitica-uema/'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/epistemologia-analitica-uema')
    })

    it('should remove multiple trailing slashes', () => {
      window.location.hash = '#/eps-2025///'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })

    it('should handle trailing slash with query parameters', () => {
      window.location.hash = '#/eps-2025/?session=123'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })

    it('should handle subpath with trailing slash', () => {
      window.location.hash = '#/eps-2025/schedule/'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025/schedule')
    })

    it('should handle root path with trailing slash (just //)', () => {
      window.location.hash = '#//'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/')
    })
  })

  describe('path extraction with complex cases', () => {
    it('should handle path with multiple segments', () => {
      window.location.hash = '#/eps-2025/schedule/day1'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025/schedule/day1')
    })

    it('should handle path with multiple segments and trailing slash', () => {
      window.location.hash = '#/eps-2025/schedule/day1/'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025/schedule/day1')
    })

    it('should handle path with query params and hash', () => {
      window.location.hash = '#/eps-2025?session=123&filter=active'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })

    it('should handle path with trailing slash and query params', () => {
      window.location.hash = '#/eps-2025/?session=123&filter=active'
      const { result } = renderHook(() => useCurrentPath())
      expect(result.current).toBe('/eps-2025')
    })
  })
})
