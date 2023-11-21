// @ts-check
const { test, expect } = require('@playwright/test');

test('User able populate a computer name and click on the Filter by name button', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.click('//a[contains(text(),"Next →")]');
  const ele = page.locator('//a[normalize-space()="Displaying 11 to 20 of 574"]');
  await ele.waitFor({state: "visible"})
  const actual = await ele.textContent();
  await expect(actual).toEqual("Displaying 11 to 20 of 574");
});


