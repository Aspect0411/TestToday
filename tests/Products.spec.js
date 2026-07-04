import {test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";
import productsData from '../utils/Productsdata.json';
import Index from '../POM/Index';
import signupdata from '../utils/signupdata.json';

test.describe('Products', () => {
    let index; 
    test.beforeEach(async ({ page }) => {
        index = new Index(page);
    })

    test('Add product to cart', async ({ page }) => {
        await index.landingpage.navigate(signupdata.url); // navigate to url
        await index.landingpage.clickSignupBtn();
        await index.loginpage.enterLoginEmail(signupdata.email);
        await index.loginpage.enterLoginPassword(signupdata.password);
        await index.loginpage.clickLoginBtn();
        await index.productpage.clickProductsMenu();
        
        
        const noOfProducts = await page.locator("div[class^='col-sm-9'] > .features_items div.col-sm-4").count();
        console.log("No of products: "+noOfProducts);

        let amount;
        let itemsToSelect = ['Fancy Green Top', 'Sleeves Printed Top - White', 'Cotton Mull Embroidered Dress', 'Cotton Silk Hand Block Print Saree'];
        for(let index=2; index<=noOfProducts; index++){
            let productName = await page.locator(`div[class^='col-sm-9'] > .features_items div.col-sm-4:nth-of-type(${index}) .product-image-wrapper .single-products div[class$='productinfo text-center'] p`).textContent();
            await console.log("Product Name: "+productName);
            
            if(productName.trim() == productsData.expectedProductName){
                await allure.step(`Get amount for ${productName} product`, async()=>{
                    let amountString = await page.locator(`div[class^='col-sm-9'] > .features_items div.col-sm-4:nth-of-type(${index}) .product-image-wrapper .single-products div[class$='productinfo text-center'] h2`).textContent();
                    await console.log("Amount String: "+amountString);
                    await console.log("New found Product Name: "+productName);
                    //Break amount since it comes as RS 400 
                    amount = amountString.split(" ")[1];
                    await console.log("Amount: "+amount);
                })
                await allure.step(`Add ${productName} product to cart`, async()=>{
                    await page.locator(`div[class^='col-sm-9'] > .features_items div.col-sm-4:nth-of-type(${index}) .product-image-wrapper  div[class='single-products'] div[class^='productinfo'] a`).click();
                })
                await allure.step(`Select product ${index}`, async()=>{
                    await page.locator(`div[class^='col-sm-9'] > .features_items div.col-sm-4:nth-of-type(${index})`);
                })
                
                // let popupModal = await index.productpage.addToCartsText.isVisible();
// 
            }

        } 

        // await index.productpage.clickCartsMenu();
        // await expect()
        // await index.productpage.clickViewCartOnModalBtn();
        // await expect(index.productspage.addToCartsText).toContainText("Your cart");
    })

});

