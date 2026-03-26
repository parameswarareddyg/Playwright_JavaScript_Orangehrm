# Playwright_JavaScript_Orangehrm
 ✅ 1. Install Node.js

Playwright runs on Node.js.

👉 Download and install:
Node.js

Verify installation:

node -v

npm -v

✅ 2. Create a Project

mkdir playwright-project

cd playwright-project

npm init -y

✅ 3. Install Playwright

npm install -D @playwright/test

Install browsers:

npx playwright install

✅ 4. Create First Test

Create file: tests/example.spec.js

const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
✅ 5. Run the Test
npx playwright test
✅ 6. Run in UI Mode (Best for Beginners 🔥)
npx playwright test --ui

👉 This opens a visual runner where you can:

See steps
Debug easily
Replay tests
✅ 7. Run Specific Test File
npx playwright test tests/example.spec.js
✅ 8. Run in Headed Mode (see browser)
npx playwright test --headed
✅ 9. Generate HTML Report
npx playwright show-report
