// Analytics utility functions for tracking user interactions

/**
 * Track a custom event with Google Analytics
 * @param eventName - The name of the event to track
 * @param params - Optional parameters to include with the event
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  // Only track if gtag is available (production environment)
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, params)
    } catch (error) {
      console.warn('Analytics tracking error:', error)
    }
  }
}

/**
 * Track session selection changes
 * @param action - The action performed (add or remove)
 * @param sessionId - The ID of the session
 * @param eventPath - The event path where the selection occurred
 * @param totalSelected - Total number of sessions currently selected
 */
export const trackSessionSelection = (
  action: 'add' | 'remove',
  sessionId: string,
  eventPath: string,
  selectedSessions: string
): void => {
  trackEvent('session_selection', {
    action,
    session_id: sessionId,
    event_path: eventPath,
    selected_sessions: selectedSessions,
  })
}

/**
 * Track when all sessions are cleared for an event
 * @param eventPath - The event path where selections were cleared
 * @param previousCount - Number of sessions that were cleared
 */
export const trackSessionsClear = (
  eventPath: string,
  previousCount: number
): void => {
  trackEvent('sessions_clear', {
    event_path: eventPath,
    previous_count: previousCount,
  })
}

/**
 * Track when sessions are imported
 * @param eventPath - The event path where sessions were imported
 * @param count - Number of sessions imported
 */
export const trackSessionsImport = (eventPath: string, count: number): void => {
  trackEvent('sessions_import', {
    event_path: eventPath,
    sessions_count: count,
  })
}

/**
 * Track when sessions are exported
 * @param eventPath - The event path where sessions were exported
 * @param count - Number of sessions exported
 */
export const trackSessionsExport = (eventPath: string, count: number): void => {
  trackEvent('sessions_export', {
    event_path: eventPath,
    sessions_count: count,
  })
}
