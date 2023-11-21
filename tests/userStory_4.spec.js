// @ts-check
const { test, expect } = require('@playwright/test');

test('User able to click on the columns of introduced', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.click('//a[normalize-space()="Introduced"]');
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=introduced&d=asc');
  await page.click('//a[normalize-space()="Introduced"]');
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=introduced&d=desc');  
});

test('User able to click on the columns of discontinues', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await page.click('//a[normalize-space()="Discontinued"]');
    await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=discontinued&d=asc');
    await page.click('//a[normalize-space()="Discontinued"]');
    await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=discontinued&d=desc');  
  });

  test('User able to click on the columns of company', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await page.click('//a[normalize-space()="Company"]');
    await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=companyName&d=asc');
    await page.click('//a[normalize-space()="Company"]');
    await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=companyName&d=desc');  
  });


