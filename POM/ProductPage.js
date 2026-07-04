class ProductPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){

        //HAMBURGER PROPS
        this.hamburgerMenu = page.locator("[id='react-burger-menu-btn']");
        this.brandName = page.locator(".app_logo");
        this.cartIcon = page.locator("[data-test='shopping-cart-link']");
        this.allProductName = page.locator("[data-test='inventory-item-name']");
        this.addToCartBtn = page.getByRole("button", {name: "Add to cart"});
        this.removeFromCartBtn = page.getByTestId("remove-sauce-labs-backpack");
        
        /**HAMBURGER MENU OPTIONS */
        this.allItems = page.locator("#inventory_sidebar_link");
        this.aboutLink = page.locator("#about_sidebar_link");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.resetLink = page.locator("#reset_sidebar_link");
        this.closeMenuIcon = page.locator("#react-burger-cross-btn");
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

export default ProductPage;