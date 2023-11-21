// @ts-check
const { test, expect } = require('@playwright/test');

test('User able populate a computer name and click on the Filter by name button', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.locator('#searchbox').fill("ASCI Blue Pacific");
  await page.click('#searchsubmit');
  await page.locator('tr').first().waitFor();
  const numberOfRow = await page.locator('tr').count();
  await expect(numberOfRow).toEqual(2);
  await expect(page.getByText('ASCI Blue Pacific')).toBeVisible();
});


