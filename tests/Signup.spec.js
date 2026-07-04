 import { test, expect } from '@playwright/test'
 import Landingpage from '../POM/Landingpage'
 import ProductPage from '../POM/ProductPage';

// import * as allure from 'allure-js-commons'
// import signupdata from '../utils/signupdata.json'
// import Index from '../POM/Index'

// test.describe('Signup', () => {
//   let index
//   test.beforeEach(async ({ page }) => {
//     index = new Index(page)
//   })

//   test('Signup', async ({ page }) => {
//     await index.landingpage.navigate(signupdata.url) // navigate to url
//     await index.landingpage.confirmUrlOpened(signupdata.url) // verify url launched successfully
//     await index.landingpage.clickSignupBtn() // click the signup button
//     await index.signuppage.confirmLandOnSignupLoginpage(signupdata.loginUrl) // verify user is redirected to signup/login page
//     await index.signuppage.enterSignupName(signupdata.name) // input signup name
//     await index.signuppage.enterSignupEmail(signupdata.email) // input signup email
//     await index.signuppage.clickSignupButton() // click the signup button
//     await index.signuppage.confirmUrlRedirection(signupdata.signupPageUrl) // verify url redirected successfully
//     await index.signuppage.selectTitle(1)

//     await index.signuppage.checkNameFieldValue(signupdata.name)
//     await index.signuppage.checkEmailFieldValue(signupdata.email)
//     // more information to be isDisplayed()

//     await index.signuppage.enterPassword(signupdata.password)
//     await index.signuppage.enterFirstName(signupdata.firstName)
//     await index.signuppage.enterLastName(signupdata.lastName)

//     await allure.step('Select day', async () => {
//       await index.signuppage.selectDay.selectOption('2')
//     })

//     await allure.step('Select month', async () => {
//       await index.signuppage.selectMonth.selectOption('May')
//     })

//     await allure.step('Select year', async () => {
//       await index.signuppage.selectYear.selectOption('2000')
//     })

//     await index.signuppage.enterCompany(signupdata.company)
//     await index.signuppage.selectCountry(signupdata.country)
//     await index.signuppage.enterState(signupdata.state)
//     await index.signuppage.enterCity(signupdata.city)
//     await index.signuppage.enterAddress(signupdata.address)
//     await index.signuppage.enterAddress2(signupdata.address2)
//     await index.signuppage.enterZipcode(signupdata.zipcode)
//     await index.signuppage.enterMobile(signupdata.mobile)

//     await index.signuppage.clickSubmit()
//     await expect(page).toHaveURL(
//       'https://automationexercise.com/account_created'
//     )
//     await expect(page.locator("h2[class='title text-center'] b")).toHaveText(
//       'Account Created!'
//     )
//     await page.getByRole('link', { name: 'Continue' }).click()

//     await index.landingpage.confirmUrlOpened(signupdata.url) // verify url launched successfully
//     await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible()
//   })
// })


 let landingPage;
 let productPage;

 test.beforeEach('Navigate to  url', async ({page}) => {
  landingPage = new Landingpage(page)
  await landingPage.navigateToUrl()
  await landingPage.confirmLandingonLandingPage()
 })

test('Login', async ({ page }) => {
  await landingPage.login('standard_user', 'secret_sauce')
})

test('Locked out user', async({page}) => {
  await landingPage.login('standard_user', 'secret_sauce')                                                                                  
})

test.only('Add Product to cart', async({page}) => {
  productPage = new ProductPage(page)
  await landingPage.login('standard_user', 'secret_sauce')

  const productDesired = "Sauce Labs Bike Light"
  const count = await productPage.allProductName.count()
  for(let i = 0; i < count; i++){
    let productName = await productPage.allProductName.nth(i).textContent()
    if(productName === productDesired) {
      await productPage.addToCartBtn.nth(i).click()
      break;
    }
  }
  await productPage.cartIcon.click()
  await expect(page.url()).toContain('cart.Html')
  await expect (productPage.allProductName).toHaveText(productDesired)
})
