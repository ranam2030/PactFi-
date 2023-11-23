import { Locator, Page } from "@playwright/test";
import basePage from './basePage';

export class addComputerPage extends basePage{
    readonly page:Page;
    private readonly headingTitel:Locator;
    private readonly computerNameInputField:Locator;
    private readonly saveComputer:Locator;
   
    constructor(page:Page){
        super(page);
        this.headingTitel = page.getByRole('heading', { name: 'Add a computer' });
        this.computerNameInputField = page.getByLabel('Computer name');
        this.saveComputer = page.getByRole('button', { name: 'Save this computer' });
    }
    async getHeading(){
        return await this.getText(this.headingTitel);
    }
    async editComputerName(){
        await this.clearInputField(this.computerNameInputField);
        await this.fillInputField(this.computerNameInputField,'ARRA edited');
        await this.clickElement(this.saveComputer);
    }
   
 
}