// Type declarations for custom properties on the Window object

interface Window {
  /**
   * Mock session IDs used for testing purposes.
   * This property is set in test environments to simulate additional session IDs
   * that should be considered valid when filtering sessions.
   */
  __TEST_MOCK_SESSION_IDS?: string[]

  /**
   * Google Analytics gtag function
   */
  gtag?: (
    command: 'event' | 'config' | 'js',
    targetOrAction: string | Date,
    params?: Record<string, unknown>
  ) => void

  /**
   * Google Analytics dataLayer
   */
  dataLayer?: unknown[]
}
