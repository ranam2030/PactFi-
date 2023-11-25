import { Locator, Page } from "@playwright/test";
import basePage from './basePage';

export class homePage extends basePage{
    readonly page:Page;
    private readonly addNewComputerBtn:Locator;
    private readonly filterInputField:Locator;
    private readonly filterBtn:Locator;
    private readonly introduced:Locator;
    private readonly discontinued:Locator;
    private readonly company:Locator;
    private readonly nextBtn:Locator;
    private readonly displayPage:Locator;
    private readonly previousBtn:Locator;
    private readonly updateText:Locator;
    private readonly getFilteredComputerName:Locator;


    constructor(page:Page){
        super(page);
        this.addNewComputerBtn = page.getByRole('link', { name: 'Add a new computer' });
        this.filterInputField = page.getByPlaceholder('Filter by computer name...');
        this.filterBtn = page.getByRole('button', { name: 'Filter by name' });
        this.introduced = page.getByRole('cell', { name: 'Introduced' });
        this.discontinued = page.getByRole('cell', { name: 'Discontinued' });
        this.company = page.locator('//a[normalize-space()="Company"]');
        this.nextBtn = page.getByRole('link', { name: 'Next →' });
        this.displayPage = page.getByText('Displaying 11 to 20 of');
        this.previousBtn = page.getByRole('link', { name: '← Previous' });
        this.updateText = page.getByText('Done !');
        this.getFilteredComputerName = page.getByRole('link', { name: 'ARRA' });

    }
    async clickIntroducted(){
        await this.clickElement(this.introduced);
    }
    async clickDiscontinued(){
        await this.clickElement(this.discontinued);
    }
    async clickCompany(){
        await this.clickElement(this.company);
    }
    async clickComputerName(){
        await this.clickElement(this.getFilteredComputerName);
    }
    async addComputer(){
        await this.clickElement(this.addNewComputerBtn);
    }
    async filterComputer(computerName:string){
        await this.fillInputField(this.filterInputField,computerName)
        await this.clickElement(this.filterBtn);
    }
    async getFilteredName(){
        return await this.getText(this.getFilteredComputerName);
    }
    async getSuccessMessage(){
        return await this.getText(this.updateText);
    }
    async waitForURL(url:string){
        await this.waitForURL(url);
    }
    async clickNextBtn(){
        await this.clickElement(this.nextBtn);
    }
    async getDisplayText(){
        return await this.getText(this.displayPage);
    }
}