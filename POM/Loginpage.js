import * as allure from "allure-js-commons";
class Loginpage {
    constructor(page) {
        this.page = page;
        this.loginEmail = page.locator("input[data-qa='login-email']");
        this.loginPassword = page.locator("input[placeholder='Password']");
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    }

    
    async enterLoginEmail(email){
        await allure.step("Enter login email address", async()=>{
            await this.loginEmail.fill(email);
        })
    }
    async enterLoginPassword(Password){
        await allure.step("Enter login Password address", async()=>{
            await this.loginPassword.fill(Password);
        })
    }
    async clickLoginBtn(){
        await allure.step("Click the login button", async()=>{
            await this.loginBtn.click();
        })
    }

}
export default Loginpage;
