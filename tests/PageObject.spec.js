const {test,expect} = require('@playwright/test');
const {POManager} = require('../PageObjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../TestData/placeorderTestData.json')))

for(const data of dataSet) 
{
  test(`Place order for ${data.productName}`, async({page}) => {
    const pomManager = new POManager(page)
    const loginPage = pomManager.getLoginPage();
     await loginPage.goTO()
    await loginPage.validLogin(data.username,data.password)
    
    const dashboardPage = pomManager.getdashboardPage()
    await  dashboardPage.searchProduct(data.productName)
    await  dashboardPage.navigateToCart()
   
    const checkoutPage = pomManager.getcheckoutPage();
    await  checkoutPage.CheckOut();
    await expect(checkoutPage.checkOutEmail).toBeVisible();
    await expect(checkoutPage.checkOutEmail).toHaveValue(data.username)
    await page.pause();
    
   });

}