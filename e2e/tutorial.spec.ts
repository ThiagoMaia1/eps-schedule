import { test, expect } from '@playwright/test'
import { resetTutorialState } from './helpers'

// Extend window type for test mocking
declare global {
  interface Window {
    __TEST_MOCK_SESSION_IDS?: string[]
  }
}

test.describe('Tutorial Popup', () => {
  test('should show tutorial for first-time users', async ({ page }) => {
    // Reset tutorial state to ensure it shows
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial popup to appear
    const tutorialPopup = page.locator(
      "text=Welcome! Here's how to use the schedule"
    )
    await expect(tutorialPopup).toBeVisible({ timeout: 5000 })

    // Check that the first slide is visible
    await expect(page.locator('text=Step 1: Select Sessions')).toBeVisible()
  })

  test('should not show tutorial if already dismissed', async ({ page }) => {
    // Set tutorial as dismissed
    await page.addInitScript(() => {
      localStorage.setItem('tutorialDismissed', 'true')
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Tutorial should not appear
    const tutorialPopup = page.locator(
      "text=Welcome! Here's how to use the schedule"
    )
    await expect(tutorialPopup).not.toBeVisible({ timeout: 3000 })
  })

  test('should not show tutorial if user has selected sessions', async ({
    page,
  }) => {
    // Mock valid session IDs for testing
    await page.addInitScript(() => {
      // This will be picked up by useScheduleFilters to prevent cleanup
      window.__TEST_MOCK_SESSION_IDS = ['session1', 'session2']
    })

    // Add some selected sessions
    await page.addInitScript(() => {
      localStorage.setItem(
        'selectedSessions:eps-2025',
        JSON.stringify(['session1', 'session2'])
      )
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Tutorial should not appear
    const tutorialPopup = page.locator(
      "text=Welcome! Here's how to use the schedule"
    )
    await expect(tutorialPopup).not.toBeVisible({ timeout: 3000 })
  })

  test('should navigate through tutorial slides', async ({ page }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial to appear
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Verify first slide is visible
    await expect(page.locator('text=Step 1: Select Sessions')).toBeVisible()

    // Click Next button
    const nextButton = page.locator('button').filter({ hasText: 'Next' })
    await expect(nextButton).toBeVisible()
    await nextButton.click()
    await page.waitForTimeout(300)

    // Verify second slide is visible
    await expect(page.locator('text=Step 2: Linear View')).toBeVisible()

    // Click Next again
    await nextButton.click()
    await page.waitForTimeout(300)

    // Verify third slide is visible
    await expect(page.locator('text=Step 3: Filtering')).toBeVisible()

    // After visiting all slides, button should change to "Got it!"
    const gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
    await expect(gotItButton).toBeVisible()
  })

  test('should not allow closing before visiting all slides', async ({
    page,
  }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial to appear
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Close button should not be visible on first slide
    const closeButton = page.locator(
      'button[aria-label="Close popup"], button:has-text("×")'
    )
    await expect(closeButton).not.toBeVisible()

    // Try to click outside the modal (this shouldn't close it)
    const popup = page.locator('[class*="popup"]').first()
    if (await popup.isVisible()) {
      // Clicking on the popup itself shouldn't close it
      await popup.click({ position: { x: 10, y: 10 } })
      await page.waitForTimeout(300)

      // Tutorial should still be visible
      await expect(
        page.locator("text=Welcome! Here's how to use the schedule")
      ).toBeVisible()
    }
  })

  test('should allow closing after visiting all slides', async ({ page }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial to appear
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Navigate through all slides
    const nextButton = page.locator('button').filter({ hasText: 'Next' })

    // Slide 1 -> 2
    await nextButton.click()
    await page.waitForTimeout(300)

    // Slide 2 -> 3
    await nextButton.click()
    await page.waitForTimeout(300)

    // Now close button should be visible
    const closeButton = page.locator(
      'button[aria-label="Close popup"], button:has-text("×")'
    )
    await expect(closeButton).toBeVisible()

    // Click "Got it!" button
    const gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
    await gotItButton.click()
    await page.waitForTimeout(300)

    // Tutorial should be closed
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).not.toBeVisible()
  })

  test('should dismiss only for session when checkbox is not checked', async ({
    page,
  }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial to appear
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Navigate through all slides
    const nextButton = page.locator('button').filter({ hasText: 'Next' })
    await nextButton.click()
    await page.waitForTimeout(300)
    await nextButton.click()
    await page.waitForTimeout(300)

    // Don't check "Don't show this again" checkbox
    const checkbox = page.getByRole('checkbox', {
      name: "Don't show this again",
    })
    await expect(checkbox).not.toBeChecked()

    // Close tutorial
    const gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
    await gotItButton.click()
    await page.waitForTimeout(300)

    // Check that sessionStorage was set (not localStorage)
    const sessionStorageValue = await page.evaluate(() =>
      sessionStorage.getItem('tutorialDismissedSession')
    )
    expect(sessionStorageValue).toBe('true')

    // localStorage should NOT be set
    const localStorageValue = await page.evaluate(() =>
      localStorage.getItem('tutorialDismissed')
    )
    expect(localStorageValue).toBeNull()
  })

  test('should permanently dismiss when checkbox is checked', async ({
    page,
  }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial to appear
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Navigate through all slides
    const nextButton = page.locator('button').filter({ hasText: 'Next' })
    await nextButton.click()
    await page.waitForTimeout(300)
    await nextButton.click()
    await page.waitForTimeout(300)

    // Check "Don't show this again" checkbox
    const checkbox = page.getByRole('checkbox', {
      name: "Don't show this again",
    })
    await checkbox.check()
    await expect(checkbox).toBeChecked()

    // Close tutorial
    const gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
    await gotItButton.click()
    await page.waitForTimeout(300)

    // Check that localStorage was set (permanent dismissal)
    const localStorageValue = await page.evaluate(() =>
      localStorage.getItem('tutorialDismissed')
    )
    expect(localStorageValue).toBe('true')
  })

  test.fixme(
    'should handle tutorial persistence correctly after page reload',
    async ({ page }) => {
      // First part: Test session-only dismissal
      await resetTutorialState(page)
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      // Wait for tutorial to appear
      await expect(
        page.locator("text=Welcome! Here's how to use the schedule")
      ).toBeVisible({ timeout: 5000 })

      // Navigate through all slides
      let nextButton = page.locator('button').filter({ hasText: 'Next' })
      await nextButton.click()
      await page.waitForTimeout(300)
      await nextButton.click()
      await page.waitForTimeout(300)

      // DON'T check "Don't show this again" - just close
      let gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
      await gotItButton.click()
      await page.waitForTimeout(300)

      // Reload the page (sessionStorage will be cleared)
      await page.reload()
      await page.waitForLoadState('networkidle')

      // Tutorial SHOULD appear again since we only dismissed for the session
      await expect(
        page.locator("text=Welcome! Here's how to use the schedule")
      ).toBeVisible({ timeout: 5000 })

      // Second part: Test permanent dismissal
      // Navigate through all slides again
      nextButton = page.locator('button').filter({ hasText: 'Next' })
      await nextButton.click()
      await page.waitForTimeout(300)
      await nextButton.click()
      await page.waitForTimeout(300)

      // This time, check "Don't show this again" and close
      const checkbox = page.getByRole('checkbox', {
        name: "Don't show this again",
      })
      await checkbox.check()

      gotItButton = page.locator('button').filter({ hasText: 'Got it!' })
      await gotItButton.click()
      await page.waitForTimeout(300)

      // Reload the page again
      await page.reload()
      await page.waitForLoadState('networkidle')

      // Tutorial should NOT appear this time (permanently dismissed)
      await expect(
        page.locator("text=Welcome! Here's how to use the schedule")
      ).not.toBeVisible({ timeout: 3000 })
    }
  )

  test('should display all three tutorial slides with correct content', async ({
    page,
  }) => {
    await resetTutorialState(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for tutorial
    await expect(
      page.locator("text=Welcome! Here's how to use the schedule")
    ).toBeVisible({ timeout: 5000 })

    // Slide 1: Select Sessions
    await expect(page.locator('text=Step 1: Select Sessions')).toBeVisible()
    await expect(
      page.locator('text=/Click on any session to add it/i')
    ).toBeVisible()

    // Navigate to Slide 2
    await page.locator('button').filter({ hasText: 'Next' }).click()
    await page.waitForTimeout(300)

    // Slide 2: Linear View
    await expect(page.locator('text=Step 2: Linear View')).toBeVisible()
    await expect(
      page.locator('text=/Toggle linear view to see all sessions/i')
    ).toBeVisible()

    // Navigate to Slide 3
    await page.locator('button').filter({ hasText: 'Next' }).click()
    await page.waitForTimeout(300)

    // Slide 3: Filtering
    await expect(page.locator('text=Step 3: Filtering')).toBeVisible()
    await expect(
      page.locator('text=/Use the powerful filters to narrow/i')
    ).toBeVisible()
  })
})
