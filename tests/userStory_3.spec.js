// @ts-check
const { test, expect } = require('@playwright/test');

test('User able populate a computer name and click on the Filter by name button', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.locator('#searchbox').fill("ASCI Blue Pacific");
  await page.click('#searchsubmit');
  await page.click('//a[normalize-space()="ASCI Blue Pacific"]');
  await page.locator('#name').clear();
  await page.locator('#name').fill("ASCI Blue Pacific Edit");
  await page.click('//input[@value="Save this computer"]');
  const ele = page.locator('//div[@class="alert-message warning"]');
  await ele.waitFor({state: "visible"})
  const actual = await ele.textContent();
  await expect(actual).toEqual("Done !  Computer ASCI Blue Pacific Edit has been updated");
});


