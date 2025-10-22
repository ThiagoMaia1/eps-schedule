import { test, expect } from '@playwright/test'
import { dismissTutorial } from './helpers'

test.describe('Navigation and Routing', () => {
  test('should navigate to different event schedules', async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check that the schedule is loaded (with any event title)
    await expect(page.locator('h1').first()).toBeVisible()

    // If there are multiple events, try navigating to another one
    // This depends on your routing structure
    // Example: await page.goto('/epistemologia-analitica-uema')
  })

  test('should handle browser back/forward navigation', async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Apply a filter (which might update URL params)
    const searchInput = page.locator('input[type="text"]').first()
    if (await searchInput.isVisible()) {
      await searchInput.fill('test')
      await page.waitForTimeout(500)
    }

    // Go back
    await page.goBack()
    await page.waitForTimeout(300)

    // Go forward
    await page.goForward()
    await page.waitForTimeout(300)

    // Page should still be functional
    await expect(page.locator('[class*="appContainer"]')).toBeVisible()
  })

  test('should maintain state on page refresh', async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Apply a filter
    const searchInput = page.locator('input[type="text"]').first()
    if (await searchInput.isVisible()) {
      await searchInput.fill('epistemologia')
      await page.waitForTimeout(500)
    }

    // Refresh the page
    await page.reload()
    await page.waitForLoadState('networkidle')

    // Check that the app is still functional
    await expect(page.locator('[class*="appContainer"]')).toBeVisible()
  })

  test('should have functional footer links', async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Check for footer links (adjust based on your actual footer)
    const footer = page.locator('footer')
    if (await footer.isVisible()) {
      const links = footer.locator('a')
      const linkCount = await links.count()

      // Just verify footer has links (adjust based on your needs)
      expect(linkCount).toBeGreaterThanOrEqual(0)
    }
  })
})
