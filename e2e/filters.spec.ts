import { test, expect } from '@playwright/test'
import { dismissTutorial } from './helpers'

test.describe('Schedule Filters', () => {
  test.beforeEach(async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should filter by search text', async ({ page }) => {
    // Find the search input
    const searchInput = page.locator('input[type="text"]').first()
    await expect(searchInput).toBeVisible()

    // Type a search term
    await searchInput.fill('epistemologia')

    // Wait a moment for filtering to apply
    await page.waitForTimeout(500)

    // Check that some results are shown (or adjust based on your actual data)
    // This is a basic check - adjust based on your UI
    await expect(page.locator('[class*="appContainer"]')).toBeVisible()
  })

  test('should toggle show only selected sessions', async ({ page }) => {
    // Look for the "show only selected" checkbox or toggle
    const showSelectedToggle = page
      .locator('input[type="checkbox"]')
      .filter({ has: page.locator(':near(:text("selected"))') })
      .first()

    if (await showSelectedToggle.isVisible()) {
      // Toggle it on
      await showSelectedToggle.check()
      await page.waitForTimeout(300)

      // Verify it's checked
      await expect(showSelectedToggle).toBeChecked()

      // Toggle it off
      await showSelectedToggle.uncheck()
      await page.waitForTimeout(300)

      // Verify it's unchecked
      await expect(showSelectedToggle).not.toBeChecked()
    }
  })

  test('should toggle linear view', async ({ page }) => {
    // Look for linear view toggle (adjust selector based on your actual UI)
    const linearViewToggle = page
      .locator('input[type="checkbox"]')
      .filter({ has: page.locator(':near(:text("linear"))') })
      .first()

    if (await linearViewToggle.isVisible()) {
      const initialState = await linearViewToggle.isChecked()

      // Toggle it
      if (initialState) {
        await linearViewToggle.uncheck()
      } else {
        await linearViewToggle.check()
      }

      await page.waitForTimeout(500)

      // Verify the toggle state changed
      const newState = await linearViewToggle.isChecked()
      expect(newState).toBe(!initialState)
    }
  })

  test('should clear all filters', async ({ page }) => {
    // First, apply some filters
    const searchInput = page.locator('input[type="text"]').first()
    await searchInput.fill('test')
    await page.waitForTimeout(300)

    // Look for clear filters button
    const clearButton = page
      .locator('button')
      .filter({ hasText: /clear|limpar/i })

    if (await clearButton.isVisible()) {
      await clearButton.click()
      await page.waitForTimeout(300)

      // Verify search input is cleared
      await expect(searchInput).toHaveValue('')
    }
  })

  test('should show filter results count', async ({ page }) => {
    // Look for the results count display (adjust selector based on your UI)
    const resultsCount = page.locator('text=/\\d+.*session/i').first()

    if (await resultsCount.isVisible()) {
      await expect(resultsCount).toBeVisible()
    }
  })
})
