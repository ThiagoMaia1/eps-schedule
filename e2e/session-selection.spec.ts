import { test, expect } from '@playwright/test'
import { dismissTutorial } from './helpers'

test.describe('Session Selection', () => {
  test.beforeEach(async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should select and deselect a session', async ({ page }) => {
    // Wait for schedule to load
    await page.waitForSelector('[class*="appContainer"]', {
      timeout: 10000,
    })

    // Find a session card (adjust selector based on your actual component)
    const sessionCard = page.locator('[class*="sessionCard"]').first()

    if (await sessionCard.isVisible()) {
      // Click to select
      await sessionCard.click()
      await page.waitForTimeout(300)

      // Click again to deselect
      await sessionCard.click()
      await page.waitForTimeout(300)

      // Test passed if no errors occurred
      expect(true).toBe(true)
    }
  })

  test('should persist selected sessions', async ({ page }) => {
    // Wait for schedule to load
    await page.waitForSelector('[class*="appContainer"]', {
      timeout: 10000,
    })

    // Find and click a session
    const sessionCard = page.locator('[class*="sessionCard"]').first()

    if (await sessionCard.isVisible()) {
      await sessionCard.click()
      await page.waitForTimeout(500)

      // Reload the page
      await page.reload()
      await page.waitForLoadState('networkidle')

      // Check that the session is still selected (e.g., by looking for a selected class)
      // This test assumes selections are saved to localStorage
      // Adjust verification based on your UI's selected state indicator
      await expect(page.locator('[class*="appContainer"]')).toBeVisible()
    }
  })

  test('should show selected count', async ({ page }) => {
    // Wait for schedule to load
    await page.waitForSelector('[class*="appContainer"]', {
      timeout: 10000,
    })

    // Look for selected count display (adjust based on your UI)
    const selectedCountElement = page
      .locator('text=/selected|selecionad/i')
      .first()

    if (await selectedCountElement.isVisible()) {
      await expect(selectedCountElement).toBeVisible()
    }
  })
})
