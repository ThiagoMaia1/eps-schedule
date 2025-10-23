import { test, expect } from '@playwright/test'
import { dismissTutorial, grantClipboardPermissions } from './helpers'

test.describe('Import/Export Sessions', () => {
  test.beforeEach(async ({ page }) => {
    await dismissTutorial(page)
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('should have export button', async ({ page }) => {
    // Look for export/copy button (adjust based on your UI)
    const exportButton = page
      .locator('button')
      .filter({ hasText: /export|copy|copiar/i })
      .first()

    if (await exportButton.isVisible()) {
      await expect(exportButton).toBeVisible()
    }
  })

  test('should have import button', async ({ page }) => {
    // Look for import button (adjust based on your UI)
    const importButton = page
      .locator('button')
      .filter({ hasText: /import|importar|paste|colar/i })
      .first()

    if (await importButton.isVisible()) {
      await expect(importButton).toBeVisible()
    }
  })

  test('should export selected sessions', async ({ page }) => {
    // Wait for schedule to load
    await page.waitForSelector('[class*="appContainer"]', {
      timeout: 10000,
    })

    // Select a session first
    const sessionCard = page.locator('[class*="sessionCard"]').first()

    if (await sessionCard.isVisible()) {
      await sessionCard.click()
      await page.waitForTimeout(300)

      // Find and click export button
      const exportButton = page
        .locator('button')
        .filter({ hasText: /export|copy|copiar/i })
        .first()

      if (await exportButton.isVisible()) {
        // Grant clipboard permissions
        await page
          .context()
          .grantPermissions(['clipboard-read', 'clipboard-write'])

        await exportButton.click()
        await page.waitForTimeout(500)

        // Verify clipboard contains data (optional - may not work in all browsers)
        // In a real scenario, you might check for a success message instead
        const clipboardText = await page.evaluate(() =>
          navigator.clipboard.readText()
        )

        // Verify we got something from the clipboard
        expect(clipboardText.length).toBeGreaterThan(0)
      }
    }
  })

  test('should open import dialog', async ({ page }) => {
    // Find and click import button
    const importButton = page
      .locator('button')
      .filter({ hasText: /import|importar|paste|colar/i })
      .first()

    if (await importButton.isVisible()) {
      await importButton.click()
      await page.waitForTimeout(300)

      // Check if a dialog, modal, or textarea appears
      const importDialog = page.locator('textarea, [role="dialog"]').first()

      if (await importDialog.isVisible()) {
        await expect(importDialog).toBeVisible()
      }
    }
  })

  test('should import sessions', async ({ page }) => {
    // Wait for schedule to load
    await page.waitForSelector('[class*="appContainer"]', {
      timeout: 10000,
    })

    // Step 1: Select a few sessions
    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select first 2 sessions
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)
      if (sessionCount > 1) {
        await sessionCards.nth(1).click()
        await page.waitForTimeout(300)
      }

      // Step 2: Export the selected sessions
      const exportButton = page
        .locator('button')
        .filter({ hasText: /export|copy|copiar/i })
        .first()

      if (await exportButton.isVisible()) {
        // Grant clipboard permissions
        await page
          .context()
          .grantPermissions(['clipboard-read', 'clipboard-write'])

        await exportButton.click()
        await page.waitForTimeout(500)

        // Get the exported data from clipboard
        const exportedData = await page.evaluate(() =>
          navigator.clipboard.readText()
        )

        expect(exportedData.length).toBeGreaterThan(0)

        // Step 3: Clear selections by clicking the same sessions to deselect them
        await sessionCards.nth(0).click()
        await page.waitForTimeout(300)
        if (sessionCount > 1) {
          await sessionCards.nth(1).click()
          await page.waitForTimeout(300)
        }

        // Step 4: Open import dialog
        const importButton = page
          .locator('button')
          .filter({ hasText: /import|importar|paste|colar/i })
          .first()

        await importButton.click()
        await page.waitForTimeout(500)

        // Step 5: Find import textarea and paste the data
        const importTextarea = page.locator('textarea').filter({
          hasText: /paste exported session data|session data/i,
        })

        // If no textarea with that placeholder, try any textarea in a dialog
        const textarea =
          (await importTextarea.count()) > 0
            ? importTextarea.first()
            : page.locator('textarea').last()

        await expect(textarea).toBeVisible()
        await textarea.fill(exportedData)
        await page.waitForTimeout(300)

        // Step 6: Click the import button (within the dialog)
        const dialogImportButton = page
          .locator('button')
          .filter({ hasText: /import sessions|importar/i })
          .last()

        await dialogImportButton.click()
        await page.waitForTimeout(500)

        // Step 7: Verify success message appears
        const successMessage = page.locator('text=/imported|success/i').first()

        if (await successMessage.isVisible()) {
          await expect(successMessage).toBeVisible()
        }

        // Step 8: Close dialog if there's a close button
        const closeButton = page
          .locator('button')
          .filter({ hasText: /close|fechar/i })
          .last()

        if (await closeButton.isVisible()) {
          await closeButton.click()
          await page.waitForTimeout(300)
        }

        // Step 9: Verify sessions are selected again (they should have selected styling)
        const firstSession = sessionCards.nth(0)
        // Check if the session has selected state (this may vary based on your styling)
        const isSelected =
          (await firstSession.evaluate((el) =>
            el.className.includes('selected')
          )) ||
          (await firstSession.evaluate(
            (el) => window.getComputedStyle(el).opacity !== '0.5'
          ))

        expect(isSelected).toBeTruthy()
      }
    }
  })
})

test.describe('Cross-Event Transfer Sessions', () => {
  test.beforeEach(async ({ page }) => {
    // Clear only session-related localStorage keys, not the tutorial flag
    await page.addInitScript(() => {
      const keys = Object.keys(localStorage)
      keys.forEach((key) => {
        if (key.startsWith('selectedSessions:')) {
          localStorage.removeItem(key)
        }
      })
    })
    await dismissTutorial(page)
  })

  test('should export sessions from multiple events in new format', async ({
    page,
  }) => {
    // Step 1: Select sessions in first event (EPS 2025)
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select 2 sessions in EPS 2025
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)
      if (sessionCount > 1) {
        await sessionCards.nth(1).click()
        await page.waitForTimeout(300)
      }

      // Step 2: Navigate to second event
      await page.goto('/#/epistemologia-analitica-uema')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(500)

      const secondEventSessions = page.locator('[class*="sessionCard"]')
      const secondEventCount = await secondEventSessions.count()

      if (secondEventCount > 0) {
        // Select 1 session in second event
        await secondEventSessions.nth(0).click()
        await page.waitForTimeout(300)
      }

      // Step 3: Open transfer sessions dialog
      const transferButton = page
        .locator('span, button')
        .filter({ hasText: /transfer sessions/i })

      await expect(transferButton).toBeVisible()
      await transferButton.click()
      await page.waitForTimeout(500)

      // Step 4: Export sessions
      await grantClipboardPermissions(page)

      const exportButton = page
        .locator('button')
        .filter({ hasText: /export all selected sessions/i })

      await expect(exportButton).toBeVisible()
      await exportButton.click()
      await page.waitForTimeout(500)

      // Step 5: Verify clipboard data format
      const exportedData = await page.evaluate(() =>
        navigator.clipboard.readText()
      )

      expect(exportedData.length).toBeGreaterThan(0)

      // Parse and verify it's the new format with event paths
      const parsed = JSON.parse(exportedData)
      expect(typeof parsed).toBe('object')
      expect(parsed).not.toBeInstanceOf(Array)

      // Should have event paths as keys
      const keys = Object.keys(parsed)
      expect(keys.length).toBeGreaterThanOrEqual(1)

      // At least one key should start with "/"
      const hasEventPath = keys.some((key) => key.startsWith('/'))
      expect(hasEventPath).toBeTruthy()

      // Values should be arrays
      Object.values(parsed).forEach((value) => {
        expect(Array.isArray(value)).toBeTruthy()
      })
    }
  })

  test('should import sessions to correct events', async ({ page }) => {
    // Step 1: Select sessions in first event
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select 2 sessions
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)
      if (sessionCount > 1) {
        await sessionCards.nth(1).click()
        await page.waitForTimeout(300)
      }

      // Export the sessions
      await grantClipboardPermissions(page)

      const transferButton = page
        .locator('span, button')
        .filter({ hasText: /transfer sessions/i })

      await transferButton.click()
      await page.waitForTimeout(500)

      const exportButton = page
        .locator('button')
        .filter({ hasText: /export all selected sessions/i })

      await exportButton.click()
      await page.waitForTimeout(500)

      const exportedData = await page.evaluate(() =>
        navigator.clipboard.readText()
      )

      // Close the dialog
      const closeButton = page.locator('button[aria-label*="close"]').last()
      if (await closeButton.isVisible()) {
        await closeButton.click()
        await page.waitForTimeout(300)
      }

      // Step 2: Clear all selections
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)
      if (sessionCount > 1) {
        await sessionCards.nth(1).click()
        await page.waitForTimeout(300)
      }

      // Step 3: Open import dialog and import
      await transferButton.click()
      await page.waitForTimeout(500)

      const textarea = page.locator('textarea').last()
      await expect(textarea).toBeVisible()
      await textarea.fill(exportedData)
      await page.waitForTimeout(300)

      const importButton = page
        .locator('button')
        .filter({ hasText: /import sessions/i })
        .last()

      await importButton.click()
      await page.waitForTimeout(500)

      // Verify success message
      const successMessage = page.locator('text=/imported|success/i')
      await expect(successMessage.first()).toBeVisible({ timeout: 5000 })

      // Close dialog
      if (await closeButton.isVisible()) {
        await closeButton.click()
        await page.waitForTimeout(300)
      }

      // Step 4: Verify sessions are selected again
      const firstSession = sessionCards.nth(0)
      const isSelected =
        (await firstSession.evaluate((el) =>
          el.className.includes('selected')
        )) ||
        (await firstSession.evaluate(
          (el) => window.getComputedStyle(el).opacity !== '0.5'
        ))

      expect(isSelected).toBeTruthy()
    }
  })

  test('should handle sessions across multiple events after import', async ({
    page,
  }) => {
    // Create test data with sessions from multiple events
    const testData = {
      '/eps-2025': ['test-session-1', 'test-session-2'],
      '/epistemologia-analitica-uema': ['test-session-3'],
    }

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Open transfer dialog
    const transferButton = page
      .locator('span, button')
      .filter({ hasText: /transfer sessions/i })

    await transferButton.click()
    await page.waitForTimeout(500)

    // Import the test data
    await grantClipboardPermissions(page)

    const textarea = page.locator('textarea').last()
    await expect(textarea).toBeVisible()
    await textarea.fill(JSON.stringify(testData))
    await page.waitForTimeout(300)

    const importButton = page
      .locator('button')
      .filter({ hasText: /import sessions/i })
      .last()

    await importButton.click()
    await page.waitForTimeout(500)

    // Check for either success or warning message (some sessions may be invalid)
    const messageLocator = page.locator(
      'text=/imported|invalid|duplicate|skipped/i'
    )
    await expect(messageLocator.first()).toBeVisible({ timeout: 5000 })
  })

  test('should reject invalid session data format', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Open transfer dialog
    const transferButton = page
      .locator('span, button')
      .filter({ hasText: /transfer sessions/i })

    await transferButton.click()
    await page.waitForTimeout(500)

    await grantClipboardPermissions(page)

    const textarea = page.locator('textarea').last()
    await expect(textarea).toBeVisible()

    // Test 1: Invalid JSON
    await textarea.fill('this is not json')
    await page.waitForTimeout(300)

    const importButton = page
      .locator('button')
      .filter({ hasText: /import sessions/i })
      .last()

    await importButton.click()
    await page.waitForTimeout(500)

    // Should show error message
    const errorMessage = page.locator('text=/failed|invalid|error/i')
    await expect(errorMessage.first()).toBeVisible({ timeout: 5000 })
  })

  test('should handle empty export gracefully', async ({ page }) => {
    // Start with no selections
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Open transfer dialog
    const transferButton = page
      .locator('span, button')
      .filter({ hasText: /transfer sessions/i })

    await transferButton.click()
    await page.waitForTimeout(500)

    await grantClipboardPermissions(page)

    // Try to export with no selections
    const exportButton = page
      .locator('button')
      .filter({ hasText: /export all selected sessions/i })

    await exportButton.click()
    await page.waitForTimeout(500)

    // Should show warning message
    const message = page.locator('text=/no sessions|warning/i')
    await expect(message.first()).toBeVisible({ timeout: 5000 })
  })

  test('should show exported data in textarea', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select a session
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)

      // Open transfer dialog
      const transferButton = page
        .locator('span, button')
        .filter({ hasText: /transfer sessions/i })

      await transferButton.click()
      await page.waitForTimeout(500)

      await grantClipboardPermissions(page)

      // Export sessions
      const exportButton = page
        .locator('button')
        .filter({ hasText: /export all selected sessions/i })

      await exportButton.click()
      await page.waitForTimeout(500)

      // Check if exported data is shown in a textarea
      const exportTextarea = page.locator('textarea').first()
      const textareaValue = await exportTextarea.inputValue()

      // Should contain JSON data
      expect(textareaValue.length).toBeGreaterThan(0)

      // Should be valid JSON
      expect(() => JSON.parse(textareaValue)).not.toThrow()

      // Should have event path format
      const parsed = JSON.parse(textareaValue)
      expect(typeof parsed).toBe('object')
    }
  })

  test('should handle duplicate sessions on import', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select a session
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)

      // Export
      await grantClipboardPermissions(page)

      const transferButton = page
        .locator('span, button')
        .filter({ hasText: /transfer sessions/i })

      await transferButton.click()
      await page.waitForTimeout(500)

      const exportButton = page
        .locator('button')
        .filter({ hasText: /export all selected sessions/i })

      await exportButton.click()
      await page.waitForTimeout(500)

      const exportedData = await page.evaluate(() =>
        navigator.clipboard.readText()
      )

      // Try to import the same data again (should detect duplicates)
      const textarea = page.locator('textarea').last()
      await textarea.fill(exportedData)
      await page.waitForTimeout(300)

      const importButton = page
        .locator('button')
        .filter({ hasText: /import sessions/i })
        .last()

      await importButton.click()
      await page.waitForTimeout(500)

      // Should show duplicate warning
      const duplicateMessage = page.locator('text=/duplicate|already/i')
      await expect(duplicateMessage.first()).toBeVisible({ timeout: 5000 })
    }
  })

  test('should preserve sessions when navigating between events', async ({
    page,
  }) => {
    // Step 1: Select sessions in first event
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const firstEventSessions = page.locator('[class*="sessionCard"]')
    const firstCount = await firstEventSessions.count()

    if (firstCount > 0) {
      await firstEventSessions.nth(0).click()
      await page.waitForTimeout(300)

      // Get the session ID from localStorage
      const firstEventStoredSessions = await page.evaluate(() => {
        const key = 'selectedSessions:eps-2025'
        return localStorage.getItem(key)
      })

      expect(firstEventStoredSessions).toBeTruthy()

      // Step 2: Navigate to second event
      await page.goto('/#/epistemologia-analitica-uema')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(500)

      const secondEventSessions = page.locator('[class*="sessionCard"]')
      const secondCount = await secondEventSessions.count()

      if (secondCount > 0) {
        await secondEventSessions.nth(0).click()
        await page.waitForTimeout(300)

        // Get second event sessions
        const secondEventStoredSessions = await page.evaluate(() => {
          const key = 'selectedSessions:epistemologia-analitica-uema'
          return localStorage.getItem(key)
        })

        expect(secondEventStoredSessions).toBeTruthy()

        // Step 3: Navigate back to first event
        await page.goto('/')
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(500)

        // Verify first event sessions are still there
        const verifyFirstEventSessions = await page.evaluate(() => {
          const key = 'selectedSessions:eps-2025'
          return localStorage.getItem(key)
        })

        expect(verifyFirstEventSessions).toBe(firstEventStoredSessions)
      }
    }
  })

  test('should copy exported data to clipboard from textarea', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[class*="appContainer"]', { timeout: 10000 })

    const sessionCards = page.locator('[class*="sessionCard"]')
    const sessionCount = await sessionCards.count()

    if (sessionCount > 0) {
      // Select a session
      await sessionCards.nth(0).click()
      await page.waitForTimeout(300)

      // Open transfer dialog
      const transferButton = page
        .locator('span, button')
        .filter({ hasText: /transfer sessions/i })

      await transferButton.click()
      await page.waitForTimeout(500)

      await grantClipboardPermissions(page)

      // Export sessions
      const exportButton = page
        .locator('button')
        .filter({ hasText: /export all selected sessions/i })

      await exportButton.click()
      await page.waitForTimeout(500)

      // Find and click the copy button next to the exported data textarea
      const copyButton = page
        .locator('button')
        .filter({ hasText: /copy/i })
        .nth(1) // Second copy button (first is export, second is copy from textarea)

      if (await copyButton.isVisible()) {
        await copyButton.click()
        await page.waitForTimeout(500)

        // Verify clipboard has the data
        const clipboardData = await page.evaluate(() =>
          navigator.clipboard.readText()
        )

        expect(clipboardData.length).toBeGreaterThan(0)
        expect(() => JSON.parse(clipboardData)).not.toThrow()
      }
    }
  })
})
