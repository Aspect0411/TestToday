 import {test, expect} from '@playwright/test';
// import * as allure from "allure-js-commons";

/* class Landingpage {
    constructor(page) {
        this.page = page;
        this.homeMenu = page.getByRole('link', { name: 'Home' });
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' })
    }

    async navigate(url) {
        await allure.step('Navigate to url', async()=>{
            await this.page.goto(url);
        })
    }
    async confirmUrlOpened(url) {
        await allure.step('Verify url launched successfully', async()=>{
            await expect(this.page).toHaveURL(url);
            await expect(this.homeMenu).toBeVisible();
        })
    }
    async clickSignupBtn() {
        await allure.step('Click the signup button', async()=>{
            await this.signupLoginLink.click();
        })
    }

}

//Allure 
//https://allurereport.org/docs/playwright/
*/


class Landingpage {
     /** 
         * @param {import('@playwright/test').Page} page 
         */
    constructor(page) {
        this.page = page;
        this.brandName = page.locator('.login_logo'); //or ('.login__logo');
        this.loginField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
        
    }

    async navigateToUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async confirmLandingonLandingPage() {
        await expect(this.brandName).toBeVisible();
    }

    async enterUsername(name) {
        await this.loginField.fill(name);
    }
    async enterPassword(pass) {
        await this.passwordField.fill(pass);
    }
    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }
}

export default Landingpage;
