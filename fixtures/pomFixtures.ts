import {test as baseTest} from '@playwright/test';
import {homePage} from '../tests/pages/homePage';
import {addComputerPage} from '../tests/pages/addComputerPage';

type pages = {
    homePage: homePage,
    addComputerPage:addComputerPage
}

const testPages = baseTest.extend<pages>({
    homePage:async ({page},use) => {
        await use(new homePage(page));
    },
    addComputerPage:async({page},use)=>{
        await use(new addComputerPage(page));
    }
})
export const test = testPages;
export const expect = testPages.expect;