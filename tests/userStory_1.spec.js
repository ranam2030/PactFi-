// @ts-check
const { test, expect } = require('@playwright/test');

test('User able to click the Add a new computer button', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.click('id=add');
  // await page.locator('#name').fill("Pacfic");
  // await page.locator('#introduced').fill("01 Jan 1919");
  // await page.locator('#discontinued').fill("20 Aug 2019");
  // await page.locator('#company').click();
  // await page.click("text=Netronics");
  await expect(page.getByText('Add a computer')).toBeVisible();
  //await page.click('//input[@value="Create this computer"]');
});


