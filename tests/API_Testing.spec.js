const {test,expect,request} = require('@playwright/test');
const loginPayload = {userEmail: "johnyy3@gmail.com", userPassword: "Password123!"}
const orderPayload = {orders:[{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let token;
let orderId;

test.beforeAll(async()=>{
    //Login API
    const apiContext = await request.newContext() ;
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {data:loginPayload}
    )
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token)

    //Create an Order
    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data:orderPayload,
            headers:{
                'Authorization':token,
                'Content-type':'application/json'
            }
        })
        const orderResponseJson = await orderResponse.json()
        console.log(orderResponseJson)
        orderId = orderResponseJson.orders[0]

});


test('Client Login through API',async ({page}) => {
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    },token)
    await page.goto('https://rahulshettyacademy.com/client')
    
});

test('place the order',async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    },token)
    await page.goto('https://rahulshettyacademy.com/client/')
    //Orders Section
    await page.locator('[routerlink="/dashboard/myorders"].btn.btn-custom').click()
    await page.locator('.table.table-bordered').waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (orderId.includes(rowOrderId)) {
       await rows.nth(i).locator("button").first().click();
       }
   }
    //await page.pause();   

    //Order Summary
    const orderDetails = await page.locator('div.col-text').textContent();
    //await page.pause()
    expect(orderId.includes(orderDetails)).toBeTruthy();
})








