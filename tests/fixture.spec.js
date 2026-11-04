const {test,expect}  = require('@playwright/test');
const {customTest} =require  ("../Utils/fixture.js")

customTest('Verify Login',async({authenticatedPage,createOrder})=>{
    await expect(authenticatedPage).toHaveURL(/rahulshettyacademy/);
    await authenticatedPage.locator("button[routerlink*='myorders']").click()
    await authenticatedPage.locator("tbody").waitFor();
    console.log('createOrder:',createOrder.orderDetails);
    console.log('productId:', createOrder.orderDetails.productId);
    const orderId = await authenticatedPage.locator("tr.ng-star-inserted th").first().textContent()
    console.log('orderId:',orderId)
    await authenticatedPage.pause();
  
})



