import { useState, useEffect } from 'react'

/**
 * Hook to track the current URL path and re-render when it changes
 * This is useful for single-page apps that don't use a router
 */
export function useCurrentPath(): string {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    // Update path when user navigates via browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handlePopState)

    // Also listen for custom navigation events if they're dispatched
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('pathchange', handlePathChange)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('pathchange', handlePathChange)
    }
  }, [])

  return currentPath
}
