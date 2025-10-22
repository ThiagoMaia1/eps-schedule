import { test, expect } from '@playwright/test'
import { dismissTutorial } from './helpers'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
  })

  test('should load the schedule application', async ({ page }) => {
    // Wait for the app to load
    await page.waitForLoadState('networkidle')

    // Check if the main title is present (any title, not specific to an event)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('should display schedule table', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Wait for schedule content to be present
    await expect(page.locator('[class*="appContainer"]')).toBeVisible({
      timeout: 10000,
    })
  })

  test('should have filters section', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Check for filter elements (adjust selectors based on your actual component structure)
    await expect(page.locator('input[type="text"]').first()).toBeVisible({
      timeout: 5000,
    })
  })

  test.fixme('should have auth button', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Check for auth button (sign in / user profile)
    await expect(
      page.locator('button').filter({ hasText: /Sign|Entrar|Login/i })
    ).toBeVisible({ timeout: 5000 })
  })

  test('should display footer', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Check if footer is visible
    await expect(page.locator('footer')).toBeVisible()
  })
})
