# End-to-End Tests

This directory contains Playwright e2e tests for the EPS Schedule application.

## Running Tests

### Locally

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug

# View test report
npm run test:e2e:report
```

### On CI

Tests run automatically on:

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

The GitHub Actions workflow:

- Uses Ubuntu runners (free tier friendly)
- Only installs Chromium to save time and costs
- Caches npm dependencies
- Uploads test reports as artifacts

## Test Structure

### Test Files

- **`homepage.spec.ts`** - Basic homepage loading and elements
- **`filters.spec.ts`** - All filtering functionality (search, toggles, etc.)
- **`session-selection.spec.ts`** - Selecting/deselecting sessions
- **`import-export.spec.ts`** - Import/export sessions functionality
- **`responsive.spec.ts`** - Mobile, tablet, and desktop viewports
- **`navigation.spec.ts`** - Routing and browser navigation
- **`tutorial.spec.ts`** - Tutorial popup behavior and navigation

### Helper Functions

The `helpers.ts` file contains reusable functions:

- `dismissTutorial()` - **Dismiss tutorial for tests** (call before page.goto)
- `resetTutorialState()` - Reset tutorial to show (for testing tutorial itself)
- `waitForScheduleLoad()` - Wait for schedule to fully load
- `clickFirstSession()` - Select a session
- `searchFor()` - Enter search text
- `toggleFilterByLabel()` - Toggle checkboxes
- `clearAllFilters()` - Reset all filters
- `grantClipboardPermissions()` - Enable clipboard access

## Configuration

See `playwright.config.ts` for:

- Browser configurations (Chromium, Firefox, WebKit)
- Mobile device emulation (Pixel 5, iPhone 12)
- Timeout settings
- Base URL configuration
- Screenshot and trace settings

## CI Cost Optimization

The workflow is optimized to stay within GitHub's free tier:

1. **Only runs Chromium** on CI (not all browsers)
2. **Caches npm dependencies** to speed up builds
3. **Skips on documentation changes** (could be added)
4. **Uses Ubuntu runners** (Linux - 1x multiplier, not macOS/Windows)
5. **Runs in non-headed mode** on CI (faster)

### Free Tier Limits

- Public repos: Unlimited minutes ✅
- Private repos: 2,000 minutes/month (Free tier), 3,000 minutes/month (Pro tier)
- Typical test run: 2-5 minutes

## Writing New Tests

### Best Practices

1. **Dismiss tutorial in tests** to prevent interference

   ```ts
   import { dismissTutorial } from './helpers'
   
   test.beforeEach(async ({ page }) => {
     await dismissTutorial(page)  // Add this before page.goto()
     await page.goto('/')
   })
   ```

2. **Use data-testid attributes** for reliable selectors (recommended)

   ```tsx
   <button data-testid="clear-filters">Clear All</button>
   ```

   ```ts
   await page.locator('[data-testid="clear-filters"]').click()
   ```

3. **Wait for elements** before interacting

   ```ts
   await expect(element).toBeVisible()
   await element.click()
   ```

4. **Use helper functions** for common operations

   ```ts
   import { waitForScheduleLoad, searchFor } from './helpers'

   await waitForScheduleLoad(page)
   await searchFor(page, 'epistemologia')
   ```

5. **Test user flows**, not implementation details
   - ✅ Good: "User can filter sessions by track"
   - ❌ Bad: "useState hook updates correctly"

6. **Keep tests independent** - Each test should work in isolation

### Example Test

```ts
import { test, expect } from '@playwright/test'
import { dismissTutorial, waitForScheduleLoad, searchFor } from './helpers'

test('should filter sessions by search term', async ({ page }) => {
  await dismissTutorial(page)  // Important: dismiss tutorial first!
  await page.goto('/')
  await waitForScheduleLoad(page)
  
  await searchFor(page, 'metaphysics')
  
  // Verify results are filtered
  const results = page.locator('[class*="sessionCard"]')
  await expect(results.first()).toBeVisible()
})
```

## Debugging

### Visual Debugging

```bash
npm run test:e2e:ui
```

### Run specific test

```bash
npx playwright test filters.spec.ts
```

### Run specific test by name

```bash
npx playwright test -g "should filter by search text"
```

### Debug mode (step through tests)

```bash
npm run test:e2e:debug
```

## Troubleshooting

### Tests timing out

- Increase timeout in test: `test.setTimeout(60000)`
- Check if dev server is starting properly
- Verify `baseURL` in playwright.config.ts

### Selectors not finding elements

- Use Playwright Inspector: `npx playwright codegen http://localhost:5173`
- Add `data-testid` attributes to components
- Use more specific selectors

### CI failures but local passes

- Check for timing issues (add more waits)
- Verify environment variables are set in CI
- Check GitHub Actions logs for specific errors

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)
- [GitHub Actions with Playwright](https://playwright.dev/docs/ci-intro)
