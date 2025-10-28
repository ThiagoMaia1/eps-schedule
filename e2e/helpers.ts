import { Page, expect } from '@playwright/test'

/**
 * Dismiss the tutorial popup by setting localStorage flag
 * This should be called before navigating to the page to prevent tutorial from showing
 */
export async function dismissTutorial(page: Page) {
  await page.addInitScript(() => {
    // Permanently dismiss the tutorial for tests
    localStorage.setItem('tutorialDismissed', 'true')
  })
}

/**
 * Reset tutorial state to allow it to show
 * Useful for testing the tutorial itself
 */
export async function resetTutorialState(page: Page) {
  await page.addInitScript(() => {
    localStorage.removeItem('tutorialDismissed')
    sessionStorage.removeItem('tutorialDismissedSession')
    // Clear all selected sessions to trigger tutorial
    const keys = Object.keys(localStorage)
    keys.forEach((key) => {
      if (key.startsWith('selectedSessions:')) {
        localStorage.removeItem(key)
      }
    })
  })
}

/**
 * Wait for the schedule to fully load
 */
export async function waitForScheduleLoad(page: Page) {
  await page.waitForLoadState('networkidle')
  await page.waitForSelector('[class*="appContainer"]', {
    timeout: 10000,
  })
}

/**
 * Find and click a session card
 */
export async function clickFirstSession(page: Page) {
  const sessionCard = page.locator('[class*="sessionCard"]').first()
  await expect(sessionCard).toBeVisible()
  await sessionCard.click()
  await page.waitForTimeout(300)
}

/**
 * Search for a term in the search box
 */
export async function searchFor(page: Page, term: string) {
  const searchInput = page.locator('input[type="text"]').first()
  await expect(searchInput).toBeVisible()
  await searchInput.fill(term)
  await page.waitForTimeout(500)
}

/**
 * Toggle a checkbox filter by label text
 */
export async function toggleFilterByLabel(page: Page, labelText: RegExp) {
  const checkbox = page
    .locator('input[type="checkbox"]')
    .filter({ has: page.locator(`:near(:text("${labelText}"))`) })
    .first()

  if (await checkbox.isVisible()) {
    await checkbox.click()
    await page.waitForTimeout(300)
    return true
  }
  return false
}

/**
 * Clear all filters
 */
export async function clearAllFilters(page: Page) {
  const clearButton = page
    .locator('button')
    .filter({ hasText: /clear|limpar/i })

  if (await clearButton.isVisible()) {
    await clearButton.click()
    await page.waitForTimeout(300)
    return true
  }
  return false
}

/**
 * Grant clipboard permissions for copy/paste tests
 */
export async function grantClipboardPermissions(page: Page) {
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])
}

/**
 * Enable "Only Selected" toggle to activate linear view
 */
export async function enableOnlySelectedView(page: Page) {
  // The toggle is in a quickViewToggle div with a span "Only Selected" next to it
  const toggleContainer = page.locator(
    'span:has-text("Only Selected sessions")'
  )
  await toggleContainer.click()
  await page.waitForTimeout(800) // Wait for linear view to render
}

/**
 * Expand all collapsed day containers
 * This is useful for past events where days are collapsed by default
 */
export async function expandAllDayContainers(page: Page) {
  // Keep expanding the first collapsed container until there are none left
  // We use first() because indices change as containers expand
  const collapsedHeader = page
    .locator('button[aria-expanded="false"][aria-label*="Expand"]')
    .first()

  while ((await collapsedHeader.count()) > 0) {
    await collapsedHeader.click()
    await page.waitForTimeout(200)
  }
}
