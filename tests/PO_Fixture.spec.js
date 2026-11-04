const {customTest} = require('../Utils/test_base')
const {expect} = require('@playwright/test')
const {POManager} = require('../PageObjects/POManager');

customTest('Client Login Using Fixture Test', async({page,testDataForOrder}) => {
    const pomManager = new POManager(page)
    const loginPage = pomManager.getLoginPage();
     await loginPage.goTO()
    await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password)
    
    const dashboardPage = pomManager.getdashboardPage()
    await  dashboardPage.searchProduct(testDataForOrder.productName)
    await  dashboardPage.navigateToCart()
   
    const checkoutPage = pomManager.getcheckoutPage();
    await  checkoutPage.CheckOut();
    await expect(checkoutPage.checkOutEmail).toBeVisible();
    await expect(checkoutPage.checkOutEmail).toHaveValue(testDataForOrder.username)
    await page.pause();
});