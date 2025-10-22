import { test, expect, devices } from '@playwright/test'
import { dismissTutorial } from './helpers'

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await dismissTutorial(page)
    // Set mobile viewport
    await page.setViewportSize(devices['iPhone 12'].viewport)

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check that main elements are visible on mobile
    await expect(page.locator('h1').first()).toBeVisible()

    // Schedule should still be visible (though layout may change)
    await expect(page.locator('[class*="appContainer"]')).toBeVisible({
      timeout: 10000,
    })
  })

  test('should work on tablet viewport', async ({ page }) => {
    await dismissTutorial(page)
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check that main elements are visible
    await expect(page.locator('h1').first()).toBeVisible()

    await expect(page.locator('[class*="appContainer"]')).toBeVisible({
      timeout: 10000,
    })
  })

  test('should work on desktop viewport', async ({ page }) => {
    await dismissTutorial(page)
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check that main elements are visible
    await expect(page.locator('h1').first()).toBeVisible()

    await expect(page.locator('[class*="appContainer"]')).toBeVisible({
      timeout: 10000,
    })

    // Desktop should show more elements
    await expect(page.locator('input[type="text"]').first()).toBeVisible()
  })
})
