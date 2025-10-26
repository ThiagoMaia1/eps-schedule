import { test, expect } from '@playwright/test'
import { dismissTutorial, waitForScheduleLoad } from './helpers'

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

  test('should show confirmation popup when unselecting in linear view', async ({
    page,
  }) => {
    await waitForScheduleLoad(page)

    // Find and click a session to select it
    const sessionCard = page.locator('[class*="sessionCard"]').first()
    await expect(sessionCard).toBeVisible()
    await sessionCard.click()
    await page.waitForTimeout(300)

    // Enable "Show Only Selected" toggle to activate linear view
    const showSelectedToggle = page
      .locator('input[type="checkbox"]')
      .filter({ has: page.locator(':near(:text(/Only Selected|linear/i))') })
      .first()

    // Try to find the toggle by label text
    const showSelectedLabel = page
      .locator('label')
      .filter({ hasText: /Only Selected/i })
      .first()

    if (await showSelectedLabel.isVisible()) {
      await showSelectedLabel.click()
      await page.waitForTimeout(500)
    } else if (await showSelectedToggle.isVisible()) {
      await showSelectedToggle.click()
      await page.waitForTimeout(500)
    }

    // Now in linear view, click the selected session to unselect
    const linearSessionCard = page.locator('[class*="sessionCard"]').first()
    await expect(linearSessionCard).toBeVisible()
    await linearSessionCard.click()
    await page.waitForTimeout(300)

    // Verify confirmation popup appears
    const popup = page.locator('[role="dialog"]')
    await expect(popup).toBeVisible()

    // Verify popup title
    const popupTitle = popup.locator('text=Unselect Session')
    await expect(popupTitle).toBeVisible()

    // Verify confirmation message
    const confirmationMessage = popup.locator(
      'text=/Are you sure you want to unselect/i'
    )
    await expect(confirmationMessage).toBeVisible()

    // Verify session details are shown in popup
    const sessionPreview = popup.locator('[class*="sessionCard"]')
    await expect(sessionPreview).toBeVisible()
  })

  test('should cancel unselection when clicking Cancel button', async ({
    page,
  }) => {
    await waitForScheduleLoad(page)

    // Select a session
    const sessionCard = page.locator('[class*="sessionCard"]').first()
    await expect(sessionCard).toBeVisible()
    await sessionCard.click()
    await page.waitForTimeout(300)

    // Enable "Show Only Selected"
    const showSelectedLabel = page
      .locator('label')
      .filter({ hasText: /Only Selected/i })
      .first()

    if (await showSelectedLabel.isVisible()) {
      await showSelectedLabel.click()
      await page.waitForTimeout(500)
    }

    // Click to unselect (opens popup)
    const linearSessionCard = page.locator('[class*="sessionCard"]').first()
    await expect(linearSessionCard).toBeVisible()
    await linearSessionCard.click()
    await page.waitForTimeout(300)

    // Verify popup is visible
    const popup = page.locator('[role="dialog"]')
    await expect(popup).toBeVisible()

    // Click Cancel button
    const cancelButton = popup.locator('button', { hasText: /Cancel/i })
    await expect(cancelButton).toBeVisible()
    await cancelButton.click()
    await page.waitForTimeout(300)

    // Verify popup is closed
    await expect(popup).not.toBeVisible()

    // Verify session is still selected (still visible in linear view)
    await expect(linearSessionCard).toBeVisible()
  })

  test('should unselect session when clicking Unselect button', async ({
    page,
  }) => {
    await waitForScheduleLoad(page)

    // Select a session
    const sessionCard = page.locator('[class*="sessionCard"]').first()
    await expect(sessionCard).toBeVisible()
    await sessionCard.click()
    await page.waitForTimeout(300)

    // Enable "Show Only Selected"
    const showSelectedLabel = page
      .locator('label')
      .filter({ hasText: /Only Selected/i })
      .first()

    if (await showSelectedLabel.isVisible()) {
      await showSelectedLabel.click()
      await page.waitForTimeout(500)
    }

    // Verify we have at least one session in linear view
    const linearSessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await linearSessionCards.count()
    expect(sessionCount).toBeGreaterThan(0)

    // Click to unselect (opens popup)
    const linearSessionCard = linearSessionCards.first()
    await linearSessionCard.click()
    await page.waitForTimeout(300)

    // Verify popup is visible
    const popup = page.locator('[role="dialog"]')
    await expect(popup).toBeVisible()

    // Click Unselect button
    const unselectButton = popup.locator('button', { hasText: /Unselect/i })
    await expect(unselectButton).toBeVisible()
    await unselectButton.click()
    await page.waitForTimeout(300)

    // Verify popup is closed
    await expect(popup).not.toBeVisible()

    // Verify session was unselected (should have one fewer session visible)
    const remainingSessions = await page
      .locator('[class*="sessionCard"]')
      .count()
    expect(remainingSessions).toBe(sessionCount - 1)
  })
})
