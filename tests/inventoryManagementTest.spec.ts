import { test, expect } from '../fixtures/pomFixtures';

test('USER STORY 1 - User able to click add computer button', async ({ page, homePage, addComputerPage }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.addComputer();
  let heading_title = await addComputerPage.getHeading();
  expect(heading_title).toEqual('Add a computer');
});

test('USER STORY 2 - User able populate a computer name and click on the Filter by name button', async ({ page, homePage}) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.filterComputer('ARRA');
  let comName = await homePage.getFilteredName();
  expect(comName).toEqual('ARRA');
});

test('USER STORY 3 - User able to click on the link/computer name', async ({ page, homePage,addComputerPage}) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.clickComputerName();
  await addComputerPage.editComputerName();
  expect(await homePage.getSuccessMessage()).toContain('Done !');
});

test('USER STORY 4 - User able to click on the columns of introduced', async ({page,homePage}) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.clickIntroducted();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=introduced&d=asc');
  await homePage.clickIntroducted();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=introduced&d=desc');
});

test('USER STORY 4 - User able to click on the columns of discontinues', async ({page,homePage}) => {
  await page.goto('https://computer-database.gatling.io/computers'); 
  await homePage.clickDiscontinued();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=discontinued&d=asc');
  await homePage.clickDiscontinued();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=discontinued&d=desc'); 
});

test('USER STORY 4 - User able to click on the columns of company', async ({page,homePage}) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.clickCompany();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=companyName&d=asc');
  await homePage.clickCompany();
  await expect(page).toHaveURL('https://computer-database.gatling.io/computers?p=0&s=companyName&d=desc');  
});

test.only('USER STORY 5 - User able to click on the Next button', async ({page,homePage}) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await homePage.clickNextBtn();
  await expect(await homePage.getDisplayText()).toContain('Displaying 11 to 20 of');
});