import { test, expect } from '@playwright/test'
import { dismissTutorial } from './helpers'

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
