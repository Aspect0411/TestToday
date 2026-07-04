import {test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";

class Signuppage {
    constructor(page) {
        this.page = page;
        this.signupNameField = page.getByRole('textbox', { name: 'name' });
        this.signupEmailField = page.locator('[data-qa="signup-email"]');
        this.signupBtn = page.getByRole('button', { name: 'Signup', exact: true} );
        this.titleRadioBtns = page.locator('[name="title"]');
        this.passwordField = page.getByRole('textbox', { name: 'password' });
        this.selectDay = page.locator('#days');
        this.selectMonth = page.locator('#months');
        this.selectYear = page.locator('#years');
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.company = page.getByRole('textbox', { name: 'Company', exact: true });
        this.country = page.locator("select[name='country']");
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.address2 = page.getByRole('textbox', { name: 'Address 2' });
        this.zipcode = page.locator('#zipcode');
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.submit = page.getByRole('button', {name: 'Create Account'});      

    }
    async confirmLandOnSignupLoginpage(url) {
        await allure.step('Verify user is redirected to signup/login page', async()=>{
            await expect(this.page).toHaveURL(url);
        })
    }
    async enterSignupName(name) {
        await allure.step('Input signup name', async()=>{
            await this.signupNameField.fill(name);
        })
    }
    async enterSignupEmail(email) {
        await allure.step('Input signup email', async()=>{
            await this.signupEmailField.fill(email);
        })
    }
    async clickSignupButton() {
        await allure.step('Click the signup button', async()=>{
            await this.signupBtn.click();
        })
    }
    async confirmUrlRedirection(url) {
        await allure.step('Verify url redirected successfully', async()=>{
            await expect(this.page).toHaveURL(url);
        })
    }
    async clickSignupBtn() {
        await allure.step('Click the signup button', async()=>{
            await this.signupLoginLink.click();
        })
    }
    async selectTitle(index) {
        await allure.step('Select title', async()=>{
            await this.titleRadioBtns.nth(index).click();
        })
    }

    async enterPassword(password) {
        await allure.step('Enter password', async()=>{
            await this.passwordField.pressSequentially(password);
        })
    }
    async enterFirstName(firstName) {
        await allure.step('Input first name', async () => {
            await this.firstName.fill(firstName);
        });
    }

    async enterLastName(lastName) {
        await allure.step('Input last name', async () => {
            await this.lastName.fill(lastName);
        });
    }

    async enterCompany(company) {
        await allure.step('Input company', async () => {
            await this.company.fill(company);
        });
    }

    //check
    async selectCountry(country) {
        await allure.step('Select country', async () => {
            await this.country.selectOption({ label: country });
        });
    }

    async enterState(state) {
        await allure.step('Input state', async () => {
            await this.state.fill(state);
        });
    }

    async enterCity(city) {
        await allure.step('Input city', async () => {
            await this.city.fill(city);
        });
    }

    async enterAddress(address) {
        await allure.step('Input address', async () => {
            await this.address.fill(address);
        });
    }

    async enterAddress2(address2) {
        await allure.step('Input address line 2', async () => {
            await this.address2.fill(address2);
        });
    }

    async enterZipcode(zipcode) {
        await allure.step('Input zipcode', async () => {
            await this.zipcode.fill(zipcode);
        });
    }

    async enterMobile(mobile) {
        await allure.step('Input mobile number', async () => {
            await this.mobile.fill(mobile);
        });
    }
    async selectingDay() {
        await allure.step('Select day', async () => {
            return await this.selectDay
        });
    }
    async selectingMonth() {
        await allure.step('Select month', async () => {
            return await this.selectMonth
        });
    }
    async selectingYear() {
        await allure.step('Select year', async () => {
            return await this.selectYear;
        });
    }
    async clickSubmit() {
        await allure.step('Click create account button', async () => {
            await this.submit.click();
        });
    }
}
export default Signuppage;

//Allure 
//https://allurereport.org/docs/playwright/
