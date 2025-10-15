import { useState, useEffect } from 'react'

/**
 * Extract the path from hash, excluding query parameters
 * Format: #/path?param=value -> /path
 */
const extractPathFromHash = (hash: string): string => {
  const hashWithoutPrefix = hash.slice(1) || '/'
  const queryIndex = hashWithoutPrefix.indexOf('?')
  return queryIndex === -1
    ? hashWithoutPrefix
    : hashWithoutPrefix.substring(0, queryIndex)
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
