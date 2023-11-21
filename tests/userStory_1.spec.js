// @ts-check
const { test, expect } = require('@playwright/test');

test('User able to click the Add a new computer button', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.click('id=add');
  await expect(page.getByText('Add a computer')).toBeVisible();
});


