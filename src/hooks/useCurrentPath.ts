import { useState, useEffect } from 'react'

/**
 * Extract the path from hash, excluding query parameters
 * Format: #/path?param=value -> /path
 * Removes trailing slashes to ensure consistent path matching
 */
const extractPathFromHash = (hash: string): string => {
  const hashWithoutPrefix = hash.slice(1) || '/'
  const queryIndex = hashWithoutPrefix.indexOf('?')
  const pathWithoutQuery =
    queryIndex === -1
      ? hashWithoutPrefix
      : hashWithoutPrefix.substring(0, queryIndex)

  // Remove trailing slashes, but keep a single '/' for root path
  if (pathWithoutQuery === '/' || pathWithoutQuery === '') {
    return '/'
  }
  const normalized = pathWithoutQuery.replace(/\/+$/, '')
  // If removing trailing slashes results in empty string, it was all slashes, so return root
  return normalized === '' ? '/' : normalized
}

/**
 * Hook to track the current URL hash path and re-render when it changes
 * This is useful for single-page apps that use hash-based routing
 */
export function useCurrentPath(): string {
  const [currentPath, setCurrentPath] = useState(
    extractPathFromHash(window.location.hash)
  )

  useEffect(() => {
    // Update path when hash changes
    const handleHashChange = () => {
      setCurrentPath(extractPathFromHash(window.location.hash))
    }

    // Listen for hashchange events
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return currentPath
}
